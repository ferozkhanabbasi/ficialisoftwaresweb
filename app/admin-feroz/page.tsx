"use client";

import { useState, useMemo, useEffect } from "react";
import {
  CheckIcon,
  FileTextIcon,
  EyeIcon,
  SendIcon,
  SettingsIcon,
  XIcon,
  LoaderIcon,
  Trash2Icon,
  PenLineIcon,
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
type DeleteStatus = "idle" | "loading" | "success" | "error";
type Tab = "write" | "manage";

interface PostMeta {
  slug: string;
  title: string;
  sha: string;
}

export default function AdminFeroz() {
  const [tab, setTab] = useState<Tab>("write");

  // GitHub settings
  const [showSettings, setShowSettings] = useState(false);
  const [ghToken, setGhToken] = useState("");
  const [ghRepo, setGhRepo] = useState("");
  const [ghBranch, setGhBranch] = useState("main");

  // Write tab state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("Feroz Khan");
  const [date, setDate] = useState(today());
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [contentTab, setContentTab] = useState<"write" | "preview">("write");
  const [status, setStatus] = useState<PublishStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Manage tab state
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState<Record<string, DeleteStatus>>({});
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

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
    return `---\ntitle: "${title}"\ndescription: "${description}"\ndate: "${date}"\nauthor: "${author}"\ntags: [${tagsArray}]\n---\n\n${content}`;
  }, [title, description, date, author, tags, content]);

  const isReady = !!(title && description && date && content && slug);
  const isConfigured = !!(ghToken && ghRepo);
  const [owner, repo] = ghRepo.split("/");

  async function handlePublish() {
    if (!isReady || !isConfigured) return;
    setStatus("loading");
    setErrorMsg("");
    const path = `posts/${slug}.md`;
    const encoded = btoa(unescape(encodeURIComponent(markdown)));
    try {
      let sha: string | undefined;
      const checkRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${ghBranch}`,
        { headers: { Authorization: `Bearer ${ghToken}` } }
      );
      if (checkRes.ok) sha = (await checkRes.json()).sha;

      const res = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${ghToken}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            message: `blog: publish "${title}"`,
            content: encoded,
            branch: ghBranch,
            ...(sha ? { sha } : {}),
          }),
        }
      );
      if (!res.ok) throw new Error((await res.json()).message ?? "GitHub API error");
      setStatus("success");
      setTimeout(() => {
        setTitle(""); setDescription(""); setDate(today()); setTags(""); setContent(""); setStatus("idle");
      }, 4000);
    } catch (e: unknown) {
      setStatus("error");
      setErrorMsg(e instanceof Error ? e.message : "Unknown error");
    }
  }

  async function loadPosts() {
    if (!isConfigured) return;
    setLoadingPosts(true);
    try {
      const res = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/posts?ref=${ghBranch}`,
        { headers: { Authorization: `Bearer ${ghToken}` } }
      );
      if (!res.ok) throw new Error("Failed to fetch posts");
      const files = await res.json();
      const list: PostMeta[] = files
        .filter((f: { name: string }) => f.name.endsWith(".md"))
        .map((f: { name: string; sha: string }) => ({
          slug: f.name.replace(".md", ""),
          title: f.name.replace(".md", "").replace(/-/g, " "),
          sha: f.sha,
        }));
      setPosts(list);
    } catch {
      setPosts([]);
    }
    setLoadingPosts(false);
  }

  useEffect(() => {
    if (tab === "manage" && isConfigured) loadPosts();
  }, [tab, isConfigured]);

  async function handleDelete(post: PostMeta) {
    setDeleteStatus((s) => ({ ...s, [post.slug]: "loading" }));
    try {
      const res = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/posts/${post.slug}.md`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${ghToken}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            message: `blog: delete "${post.slug}"`,
            sha: post.sha,
            branch: ghBranch,
          }),
        }
      );
      if (!res.ok) throw new Error((await res.json()).message);
      setDeleteStatus((s) => ({ ...s, [post.slug]: "success" }));
      setPosts((p) => p.filter((x) => x.slug !== post.slug));
      setConfirmDelete(null);
    } catch {
      setDeleteStatus((s) => ({ ...s, [post.slug]: "error" }));
    }
  }

  return (
    <main className="pt-28 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Blog Admin</h1>
            <p className="text-gray-400 text-sm mt-1">Ficiali — Write & manage blog posts</p>
          </div>
          <button
            onClick={() => setShowSettings(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white text-sm transition"
          >
            <SettingsIcon className="w-4 h-4" />
            GitHub Settings
          </button>
        </div>

        {/* Not configured warning */}
        {!isConfigured && (
          <div className="mb-6 flex items-center gap-3 px-5 py-4 rounded-xl bg-amber-500/8 border border-amber-500/20 text-amber-300 text-sm">
            <SettingsIcon className="w-4 h-4 flex-shrink-0" />
            <span>
              Set up your GitHub token and repo in{" "}
              <button onClick={() => setShowSettings(true)} className="underline hover:text-amber-200 transition">
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
                <h2 className="text-lg font-semibold text-white">GitHub Settings</h2>
                <button onClick={() => setShowSettings(false)} className="text-gray-400 hover:text-white transition">
                  <XIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Personal Access Token</label>
                  <input
                    type="password"
                    value={ghToken}
                    onChange={(e) => setGhToken(e.target.value)}
                    placeholder="github_pat_..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500/50 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Repository (owner/repo)</label>
                  <input
                    type="text"
                    value={ghRepo}
                    onChange={(e) => setGhRepo(e.target.value)}
                    placeholder="ferozkhanabbasi/ficialisoftwaresweb"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500/50 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Branch</label>
                  <input
                    type="text"
                    value={ghBranch}
                    onChange={(e) => setGhBranch(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500/50 transition"
                  />
                </div>
                <button onClick={saveSettings} className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition">
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-8 bg-white/5 rounded-xl p-1 w-fit">
          <button
            onClick={() => setTab("write")}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition ${tab === "write" ? "bg-violet-600 text-white" : "text-gray-400 hover:text-white"}`}
          >
            <PenLineIcon className="w-4 h-4" />
            Write Post
          </button>
          <button
            onClick={() => setTab("manage")}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition ${tab === "manage" ? "bg-violet-600 text-white" : "text-gray-400 hover:text-white"}`}
          >
            <Trash2Icon className="w-4 h-4" />
            Manage Posts
          </button>
        </div>

        {/* WRITE TAB */}
        {tab === "write" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Post Title <span className="text-red-400">*</span></label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="What is Agentic AI?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500/50 transition"
                />
                {slug && <p className="text-xs text-gray-500 mt-1.5">URL: <span className="text-violet-400">/blog/{slug}</span></p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Short Description <span className="text-red-400">*</span></label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="A brief description for search results..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500/50 transition"
                />
                <p className={`text-xs mt-1 ${description.length > 160 ? "text-red-400" : "text-gray-500"}`}>{description.length}/160 chars</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Author</label>
                  <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500/50 transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Date <span className="text-red-400">*</span></label>
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500/50 transition" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Tags <span className="text-gray-500 font-normal">(comma-separated)</span></label>
                <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="AI Strategy, LLMs, Automation" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500/50 transition" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-sm font-medium text-gray-300">Content <span className="text-red-400">*</span></label>
                  <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1">
                    <button onClick={() => setContentTab("write")} className={`px-3 py-1 rounded-md text-xs font-medium transition ${contentTab === "write" ? "bg-violet-600 text-white" : "text-gray-400 hover:text-white"}`}>
                      <FileTextIcon className="w-3.5 h-3.5 inline mr-1" />Write
                    </button>
                    <button onClick={() => setContentTab("preview")} className={`px-3 py-1 rounded-md text-xs font-medium transition ${contentTab === "preview" ? "bg-violet-600 text-white" : "text-gray-400 hover:text-white"}`}>
                      <EyeIcon className="w-3.5 h-3.5 inline mr-1" />Preview
                    </button>
                  </div>
                </div>
                {contentTab === "write" ? (
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder={`Write your blog post in Markdown...\n\n## Introduction\n\n## Section 1`}
                    rows={18}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm font-mono leading-relaxed focus:outline-none focus:border-violet-500/50 transition resize-none"
                  />
                ) : (
                  <div className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 min-h-[350px] overflow-auto">
                    {content ? (
                      <div className="prose-blog" dangerouslySetInnerHTML={{
                        __html: content
                          .replace(/^## (.+)$/gm, "<h2>$1</h2>")
                          .replace(/^### (.+)$/gm, "<h3>$1</h3>")
                          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                          .replace(/\*(.+?)\*/g, "<em>$1</em>")
                          .replace(/`(.+?)`/g, "<code>$1</code>")
                          .replace(/\n\n/g, "</p><p>")
                          .replace(/^/, "<p>").replace(/$/, "</p>"),
                      }} />
                    ) : (
                      <p className="text-gray-500 text-sm italic">Start writing to see a preview...</p>
                    )}
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-1">Supports Markdown: **bold**, *italic*, ## headings, - lists, `code`</p>
              </div>

              <div>
                {status === "success" ? (
                  <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400">
                    <CheckIcon className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Published successfully!</p>
                      <p className="text-xs text-green-400/70 mt-0.5">Live at <span className="text-green-300">/blog/{slug}</span> in ~2 minutes.</p>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={handlePublish}
                    disabled={!isReady || !isConfigured || status === "loading"}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${isReady && isConfigured && status !== "loading" ? "bg-violet-600 hover:bg-violet-500 text-white" : "bg-white/5 text-gray-500 cursor-not-allowed"}`}
                  >
                    {status === "loading" ? <><LoaderIcon className="w-4 h-4 animate-spin" />Publishing...</> : <><SendIcon className="w-4 h-4" />Publish Post</>}
                  </button>
                )}
                {status === "error" && <p className="mt-2 text-xs text-red-400"><XIcon className="w-3.5 h-3.5 inline mr-1" />{errorMsg}</p>}
              </div>
            </div>

            {/* Right: file preview */}
            <div className="lg:sticky lg:top-24 self-start">
              <div className="rounded-2xl bg-white/3 border border-white/8 overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/8 bg-white/3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="text-xs text-gray-400 ml-2 font-mono">posts/{slug || "your-post-slug"}.md</span>
                </div>
                <pre className="p-5 text-xs font-mono text-gray-300 leading-relaxed overflow-x-auto max-h-[520px] overflow-y-auto whitespace-pre-wrap">
                  {markdown || <span className="text-gray-600">Fill in the form to see your post file...</span>}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* MANAGE TAB */}
        {tab === "manage" && (
          <div className="max-w-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">All Posts</h2>
              <button onClick={loadPosts} disabled={loadingPosts} className="text-xs text-gray-400 hover:text-white transition flex items-center gap-1.5">
                {loadingPosts ? <LoaderIcon className="w-3.5 h-3.5 animate-spin" /> : "↻"} Refresh
              </button>
            </div>

            {!isConfigured ? (
              <p className="text-gray-400 text-sm">Configure GitHub Settings first.</p>
            ) : loadingPosts ? (
              <div className="flex items-center gap-2 text-gray-400 text-sm"><LoaderIcon className="w-4 h-4 animate-spin" />Loading posts...</div>
            ) : posts.length === 0 ? (
              <p className="text-gray-400 text-sm">No posts found.</p>
            ) : (
              <div className="space-y-3">
                {posts.map((post) => (
                  <div key={post.slug} className="flex items-center justify-between p-4 rounded-xl bg-white/3 border border-white/6">
                    <div>
                      <p className="text-sm font-medium text-white capitalize">{post.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">/blog/{post.slug}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {deleteStatus[post.slug] === "success" ? (
                        <span className="text-xs text-green-400 flex items-center gap-1"><CheckIcon className="w-3.5 h-3.5" />Deleted</span>
                      ) : confirmDelete === post.slug ? (
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-400">Sure?</span>
                          <button
                            type="button"
                            onClick={() => handleDelete(post)}
                            disabled={deleteStatus[post.slug] === "loading"}
                            className="px-3 py-1 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 text-xs font-medium transition"
                          >
                            {deleteStatus[post.slug] === "loading" ? <LoaderIcon className="w-3.5 h-3.5 animate-spin" /> : "Yes, delete"}
                          </button>
                          <button type="button" onClick={() => setConfirmDelete(null)} className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 text-xs transition">Cancel</button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setConfirmDelete(post.slug)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-medium transition"
                        >
                          <Trash2Icon className="w-3.5 h-3.5" />
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            <p className="text-xs text-gray-500 mt-6">Deleting a post removes it from GitHub and triggers a rebuild. It will be gone from your site in ~2 minutes.</p>
          </div>
        )}
      </div>
    </main>
  );
}
