"use client";
import { PlayIcon, ZapIcon, CheckIcon, XIcon } from "lucide-react";
import { PrimaryButton, GhostButton } from "./Buttons";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CONTACT } from "@/constants";
import { useState } from "react";
import ContactUsButton from "./ContactUsButton";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const trustedUserImages = [
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=50",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
  ];

  const galleryStripImages = [
    "/projects/project-one.webp",
    "/projects/iCast.webp",
    "/projects/stitchit.webp",
    "/projects/football.webp",
    "/projects/uya.webp",
  ];

  const trustedLogos = [
    { src: "/logos/certi_master_logo_gray.png", alt: "Certi Master" },
    { src: "/logos/vcode_logo_gray.png", alt: "VCode" },
    { src: "/logos/uya_logo_gray.png", alt: "UYA" },
    { src: "/logos/topshop_logo_gray.png", alt: "Topshop" },
    { src: "/logos/stitchit_logo_gray.png", alt: "Stitch It" },
    { src: "/logos/solidus_logo_gray.png", alt: "Solidus" },
    { src: "/logos/Nova_logo_gray.png", alt: "Nova" },
    { src: "/logos/nature_gray.png", alt: "Nature" },
    { src: "/logos/health_logo_gray.png", alt: "Health" },
  ];

  return (
    <>
      <section id="home" className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 min-h-screen max-md:w-screen max-md:overflow-hidden pt-24 md:pt-18 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="text-left">
              <motion.a
                href="#"
                className="inline-flex items-center gap-3 pl-3 pr-4 py-1.5 rounded-full bg-white/10 mb-6 justify-start"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                }}
              >
                <span className="text-xs text-gray-200/90">
                  Trusted by founders & companies worldwide
                </span>
              </motion.a>

              <motion.h1
                className="text-3xl lg:text-4xl font-bold leading-tight mb-6 max-w-xl"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.1,
                }}
              >
                Empowering businesses with <br />
                <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-indigo-400">
                  AI-driven solutions
                </span>
              </motion.h1>

              <motion.p
                className="text-gray-300 max-w-lg mb-8"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.2,
                }}
              >
                Ficiali is a reliable partner for software product engineering
                and team augmentation. Our unique selling point is thinking
                beyond technologies to provide innovative solutions.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center gap-4 mb-8"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.3,
                }}
              >
                <ContactUsButton />

                <GhostButton
                  className="max-sm:w-full max-sm:justify-center py-3 px-5"
                  onClick={() => setShowVideo(true)}
                >
                  <PlayIcon className="size-4" />
                  View our work
                </GhostButton>
              </motion.div>

              <motion.div
                className="flex sm:inline-flex overflow-hidden items-center max-sm:justify-center text-sm text-gray-200 bg-white/10 rounded"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.1,
                }}
              >
                <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-white/3 transition-colors">
                  <ZapIcon className="size-4 text-sky-500" />
                  <div>
                    <div>Strategy-led execution</div>
                    <div className="text-xs text-gray-400">
                      Focused on growth & results
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block h-6 w-px bg-white/6" />

                <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-white/3 transition-colors">
                  <CheckIcon className="size-4 text-cyan-500" />
                  <div>
                    <div>Full-service delivery</div>
                    <div className="text-xs text-gray-400">
                      Design, dev & deploy
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: modern mockup card */}
            <motion.div
              className="mx-auto w-full max-w-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.5,
              }}
            >
              <motion.div className="rounded-3xl overflow-hidden border border-white/6 shadow-2xl bg-linear-to-b from-black/50 to-transparent">
                <div className="relative bg-gray-900">
                  <motion.img
                    key={selectedImageIndex}
                    src={galleryStripImages[selectedImageIndex]}
                    alt="Ficiali software development project"
                    className="w-full h-full object-cover object-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>

              <div className="mt-4 flex gap-3 items-center justify-start">
                {galleryStripImages.map((src, i) => (
                  <motion.button
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 70,
                      mass: 1,
                      delay: 0.1 + i * 0.1,
                    }}
                    className={`w-14 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === i
                        ? "border-indigo-400 opacity-100 scale-105"
                        : "border-white/6 opacity-70 hover:opacity-100 hover:border-white/20"
                    }`}
                    onClick={() => setSelectedImageIndex(i)}
                  >
                    <img
                      src={src}
                      alt={`project-${i} thumbnail`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.button>
                ))}
                <motion.div
                  className="text-xs text-gray-400 ml-2 flex items-center gap-2"
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 70,
                    mass: 1,
                    delay: 0.2,
                  }}
                >
                  <div className="relative flex h-3.5 w-3.5 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300" />
                    <span className="relative inline-flex size-2 rounded-full bg-green-600" />
                  </div>
                  40+ completed projects
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOGO MARQUEE */}
      <motion.section
        className="border-y border-white/6 bg-white/1 max-md:mt-10"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full overflow-hidden py-6">
            <div className="flex gap-14 items-center justify-center animate-marquee whitespace-nowrap">
              {trustedLogos.concat(trustedLogos).map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 md:h-8 object-contain mx-6 text-sm md:text-base font-semibold text-gray-400 hover:opacity-80 transition-opacity"
                  style={{ filter: "grayscale(100%) brightness(200%)" }}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl mx-4 aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-10 right-0 text-white/60 hover:text-white transition"
              >
                <XIcon className="size-6" />
              </button>
              <video
                src="/video.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
