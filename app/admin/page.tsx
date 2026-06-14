"use client";

import { useState, useMemo, useEffect } from "react";
import {
  CheckIcon,
  FileTextIcon,
  EyeIcon,
  SendIcon,
  SettingsIcon,
  XIcon,
  LockIcon,
  LoaderIcon,
} from "lucide-react";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function today() {
  return new Date().toISOString().split("T")[0];
}

type PublishStatus = "idle" | "loading" | "success" | "error";

const ADMIN_USER = "ferozkhan";
const ADMIN_PASS = "88323Feroz.Khan";

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      sessionStorage.setItem("admin_auth", "1");
      onLogin();
    } else {
      setError(true);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-violet-900/20 border border-violet-500/20 flex items-center justify-center mx-auto mb-4">
            <LockIcon className="w-6 h-6 text-violet-400" />
          </div>
          <h1 className="text-2xl font-bold text-white">Admin Login</h1>
          <p className="text-gray-400 text-sm mt-1">Ficiali Blog Admin</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => { setUsername(e.target.value); setError(false); }}
              autoComplete="username"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500/50 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              autoComplete="current-password"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500/50 transition"
            />
          </div>
          {error && (
            <p className="text-red-400 text-sm text-center">Invalid username or password.</p>
          )}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    setAuthenticated(sessionStorage.getItem("admin_auth") === "1");
    setAuthChecked(true);
  }, []);

  if (!authChecked) return null;
  if (!authenticated) return <LoginScreen onLogin={() => setAuthenticated(true)} />;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("Feroz Khan");
  const [date, setDate] = useState(today());
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [tab, setTab] = useState<"write" | "preview">("write");

  // GitHub settings (persisted in localStorage)
  const [showSettings, setShowSettings] = useState(false);
  const [ghToken, setGhToken] = useState("");
  const [ghRepo, setGhRepo] = useState(""); // e.g. "ferozkhan/ficiali-web"
  const [ghBranch, setGhBranch] = useState("main");

  const [status, setStatus] = useState<PublishStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setGhToken(localStorage.getItem("gh_token") ?? "");
    setGhRepo(localStorage.getItem("gh_repo") ?? "");
    setGhBranch(localStorage.getItem("gh_branch") ?? "main");
  }, []);

  function saveSettings() {
    localStorage.setItem("gh_token", ghToken);
    localStorage.setItem("gh_repo", ghRepo);
    localStorage.setItem("gh_branch", ghBranch);
    setShowSettings(false);
  }

  const slug = useMemo(() => slugify(title), [title]);

  const markdown = useMemo(() => {
    const tagsArray = tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean)
      .map((t) => `"${t}"`)
      .join(", ");

    return `---
title: "${title}"
description: "${description}"
date: "${date}"
author: "${author}"
tags: [${tagsArray}]
---

${content}`;
  }, [title, description, date, author, tags, content]);

  const isReady = !!(title && description && date && content && slug);
  const isConfigured = !!(ghToken && ghRepo);

  async function handlePublish() {
    if (!isReady || !isConfigured) return;

    setStatus("loading");
    setErrorMsg("");

    const path = `posts/${slug}.md`;
    const encoded = btoa(unescape(encodeURIComponent(markdown)));
    const [owner, repo] = ghRepo.split("/");

    try {
      // Check if file exists to get its SHA (needed for updates)
      let sha: string | undefined;
      const checkRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${ghBranch}`,
        { headers: { Authorization: `Bearer ${ghToken}` } }
      );
      if (checkRes.ok) {
        const existing = await checkRes.json();
        sha = existing.sha;
      }

      const res = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${ghToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `blog: publish "${title}"`,
            content: encoded,
            branch: ghBranch,
            ...(sha ? { sha } : {}),
          }),
        }
      );

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message ?? "GitHub API error");
      }

      setStatus("success");
      // Reset form after success
      setTimeout(() => {
        setTitle("");
        setDescription("");
        setDate(today());
        setTags("");
        setContent("");
        setStatus("idle");
      }, 4000);
    } catch (e: unknown) {
      setStatus("error");
      setErrorMsg(e instanceof Error ? e.message : "Unknown error");
    }
  }

  return (
    <main className="pt-28 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium mb-4">
              Local Admin — Do not share this URL publicly
            </div>
            <h1 className="text-3xl font-bold text-white">Write a Blog Post</h1>
            <p className="text-gray-400 text-sm mt-2">
              Fill in the form and click{" "}
              <strong className="text-white">Publish</strong> — your post will
              go live automatically after GitHub rebuilds the site (~2 min).
            </p>
          </div>
          <button
            onClick={() => setShowSettings(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white text-sm transition"
          >
            <SettingsIcon className="w-4 h-4" />
            GitHub Settings
          </button>
        </div>

        {/* Settings not configured warning */}
        {!isConfigured && (
          <div className="mb-6 flex items-center gap-3 px-5 py-4 rounded-xl bg-amber-500/8 border border-amber-500/20 text-amber-300 text-sm">
            <SettingsIcon className="w-4 h-4 flex-shrink-0" />
            <span>
              Set up your GitHub token and repo in{" "}
              <button
                onClick={() => setShowSettings(true)}
                className="underline hover:text-amber-200 transition"
              >
                GitHub Settings
              </button>{" "}
              before publishing.
            </span>
          </div>
        )}

        {/* Settings Modal */}
        {showSettings && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
            <div className="w-full max-w-md bg-gray-900 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">
                  GitHub Settings
                </h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-white transition"
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Personal Access Token
                  </label>
                  <input
                    type="password"
                    value={ghToken}
                    onChange={(e) => setGhToken(e.target.value)}
                    placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500/50 transition"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Go to GitHub → Settings → Developer settings → Personal
                    access tokens → Fine-grained. Give it <strong className="text-gray-400">Contents: Read & Write</strong> permission on this repo.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Repository{" "}
                    <span className="text-gray-500 font-normal">
                      (owner/repo)
                    </span>
                  </label>
                  <input
                    type="text"
                    value={ghRepo}
                    onChange={(e) => setGhRepo(e.target.value)}
                    placeholder="ferozkhan/ficiali-web"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500/50 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Branch
                  </label>
                  <input
                    type="text"
                    value={ghBranch}
                    onChange={(e) => setGhBranch(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500/50 transition"
                  />
                </div>

                <div className="pt-2 p-4 rounded-xl bg-white/3 border border-white/6 text-xs text-gray-400 space-y-1">
                  <p className="text-white font-medium text-sm mb-2">How it works</p>
                  <p>1. You click Publish → file is committed to GitHub</p>
                  <p>2. GitHub Actions triggers automatically</p>
                  <p>3. Site rebuilds and deploys to your hosting via FTP</p>
                  <p>4. Post is live in ~2 minutes</p>
                  <p className="pt-1 text-gray-500">
                    Token is saved only in your browser (localStorage).
                  </p>
                </div>

                <button
                  onClick={saveSettings}
                  className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition"
                >
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Form */}
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Post Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What is Agentic AI?"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500/50 transition"
              />
              {slug && (
                <p className="text-xs text-gray-500 mt-1.5">
                  URL:{" "}
                  <span className="text-violet-400">/blog/{slug}</span>
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Short Description <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="A brief description shown in search results..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500/50 transition"
              />
              <p
                className={`text-xs mt-1 ${description.length > 160 ? "text-red-400" : "text-gray-500"}`}
              >
                {description.length}/160 chars
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Author
                </label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500/50 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Date <span className="text-red-400">*</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500/50 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Tags{" "}
                <span className="text-gray-500 font-normal">
                  (comma-separated)
                </span>
              </label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="AI Strategy, LLMs, Automation"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500/50 transition"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-gray-300">
                  Content <span className="text-red-400">*</span>
                </label>
                <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1">
                  <button
                    onClick={() => setTab("write")}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition ${tab === "write" ? "bg-violet-600 text-white" : "text-gray-400 hover:text-white"}`}
                  >
                    <FileTextIcon className="w-3.5 h-3.5 inline mr-1" />
                    Write
                  </button>
                  <button
                    onClick={() => setTab("preview")}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition ${tab === "preview" ? "bg-violet-600 text-white" : "text-gray-400 hover:text-white"}`}
                  >
                    <EyeIcon className="w-3.5 h-3.5 inline mr-1" />
                    Preview
                  </button>
                </div>
              </div>
              {tab === "write" ? (
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder={`Write your blog post in Markdown...\n\n## Introduction\nStart with a compelling opening...\n\n## Section 1\nYour content here...`}
                  rows={18}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm font-mono leading-relaxed focus:outline-none focus:border-violet-500/50 transition resize-none"
                />
              ) : (
                <div className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 min-h-[350px] overflow-auto">
                  {content ? (
                    <div
                      className="prose-blog"
                      dangerouslySetInnerHTML={{
                        __html: content
                          .replace(/^## (.+)$/gm, "<h2>$1</h2>")
                          .replace(/^### (.+)$/gm, "<h3>$1</h3>")
                          .replace(/^#### (.+)$/gm, "<h4>$1</h4>")
                          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                          .replace(/\*(.+?)\*/g, "<em>$1</em>")
                          .replace(/`(.+?)`/g, "<code>$1</code>")
                          .replace(/\n\n/g, "</p><p>")
                          .replace(/^/, "<p>")
                          .replace(/$/, "</p>"),
                      }}
                    />
                  ) : (
                    <p className="text-gray-500 text-sm italic">
                      Start writing to see a preview...
                    </p>
                  )}
                </div>
              )}
              <p className="text-xs text-gray-500 mt-1">
                Supports Markdown: **bold**, *italic*, ## headings, - lists,
                `code`, [links](url)
              </p>
            </div>

            {/* Publish Button */}
            <div>
              {status === "success" ? (
                <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400">
                  <CheckIcon className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Published successfully!</p>
                    <p className="text-xs text-green-400/70 mt-0.5">
                      GitHub is building your site now. Your post will be live
                      at{" "}
                      <span className="text-green-300">/blog/{slug}</span> in ~2
                      minutes.
                    </p>
                  </div>
                </div>
              ) : (
                <button
                  onClick={handlePublish}
                  disabled={!isReady || !isConfigured || status === "loading"}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isReady && isConfigured && status !== "loading"
                      ? "bg-violet-600 hover:bg-violet-500 text-white"
                      : "bg-white/5 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {status === "loading" ? (
                    <>
                      <LoaderIcon className="w-4 h-4 animate-spin" />
                      Publishing to GitHub...
                    </>
                  ) : (
                    <>
                      <SendIcon className="w-4 h-4" />
                      Publish Post
                    </>
                  )}
                </button>
              )}

              {status === "error" && (
                <p className="mt-2 text-xs text-red-400 flex items-center gap-1.5">
                  <XIcon className="w-3.5 h-3.5" />
                  {errorMsg || "Something went wrong. Check your token and repo name."}
                </p>
              )}

              {!isConfigured && (
                <p className="mt-2 text-xs text-gray-500 text-center">
                  Configure GitHub Settings first to enable publishing
                </p>
              )}
            </div>
          </div>

          {/* Right: Preview panel */}
          <div className="lg:sticky lg:top-24 self-start space-y-5">
            {/* File preview */}
            <div className="rounded-2xl bg-white/3 border border-white/8 overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/8 bg-white/3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="text-xs text-gray-400 ml-2 font-mono">
                  posts/{slug || "your-post-slug"}.md
                </span>
              </div>
              <pre className="p-5 text-xs font-mono text-gray-300 leading-relaxed overflow-x-auto max-h-[480px] overflow-y-auto whitespace-pre-wrap">
                {markdown || (
                  <span className="text-gray-600">
                    Fill in the form to see your post file...
                  </span>
                )}
              </pre>
            </div>

            {/* How it works */}
            <div className="rounded-2xl p-5 bg-white/3 border border-white/8">
              <h3 className="text-sm font-semibold text-white mb-3">
                What happens when you click Publish
              </h3>
              <ol className="text-xs text-gray-400 space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-600/20 text-violet-400 flex items-center justify-center text-[10px] font-bold mt-0.5">1</span>
                  File is committed directly to your GitHub repo
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-600/20 text-violet-400 flex items-center justify-center text-[10px] font-bold mt-0.5">2</span>
                  GitHub Actions auto-triggers a build
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-600/20 text-violet-400 flex items-center justify-center text-[10px] font-bold mt-0.5">3</span>
                  Built files are FTP-deployed to your hosting
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-600/20 text-violet-400 flex items-center justify-center text-[10px] font-bold mt-0.5">4</span>
                  Post is live at{" "}
                  <span className="text-violet-400 ml-1">
                    /blog/{slug || "your-slug"}
                  </span>
                </li>
              </ol>
              <p className="text-xs text-gray-500 mt-3 pt-3 border-t border-white/8">
                Total time: ~2 minutes. You only need to click Publish once.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
