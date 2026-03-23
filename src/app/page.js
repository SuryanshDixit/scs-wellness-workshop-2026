'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── Add your celebration images here ───────────────────────
// Place images in /public/gallery/ folder

const slides = [
  {
    src: "/WhatsApp Image 2026-03-12 at 7.30.50 PM.jpeg",
    caption: "Wellness Workshop 2026",
    sub: "Day 1 · आयुष एवं चैतन्य की ओर",
    objectPosition: "center center",  // 👈 add this
  },
  {
    src: "/gallery/Screenshot 2026-03-24 025334.png",
    caption: "Day 1 — A Successful Beginning",
    sub: "21st March 2026",
    objectPosition: "center top",     // 👈 group photos — keep heads visible
  },
  {
    src: "/gallery/Pi7_image_tool.jpeg",
    caption: "Day 2 — Closing Ceremony",
    sub: "22nd March 2026",
    objectPosition: "center top",     // 👈 group photos — keep heads visible
  },
]

function ImageSlider() {
  const [mounted, setMounted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  // Wait for client mount
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [current, mounted])

  function goTo(index) {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 400)
  }

  // Don't render on server
  if (!mounted) return (
    <div style={{ width: "100%", height: "520px", background: "#0f172a" }} />
  )

  return (
    <div className="slider-root">
      <style>{`
        .slider-root {
          position: relative;
          width: 100%;
          height: 700px;
          overflow: hidden;
          background: #0f172a;
        }
        @media (max-width: 640px) { .slider-root { height: 300px; } }

        /* Slide image */
        .slider-img {
          position: absolute; inset: 0;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .slider-img.fade-out { opacity: 0; transform: scale(1.03); }
        .slider-img.fade-in  { opacity: 1; transform: scale(1); }

        /* Dark gradient overlay */
        .slider-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.15) 0%,
            rgba(0,0,0,0.05) 40%,
            rgba(0,0,0,0.55) 80%,
            rgba(0,0,0,0.75) 100%
          );
        }

        /* Caption */
        .slider-caption {
          position: absolute; bottom: 0; left: 0; right: 0; z-index: 3;
          padding: 28px 40px 32px;
          display: flex; flex-direction: column; gap: 4px;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .slider-caption.hide { opacity: 0; transform: translateY(12px); }
        .slider-caption.show { opacity: 1; transform: translateY(0); }
        .slider-caption-title {
          font-family: Georgia, serif; font-size: clamp(1.4rem, 3.5vw, 2.2rem);
          font-weight: 800; color: #ffffff; line-height: 1.2;
          text-shadow: 0 2px 12px rgba(0,0,0,0.5);
        }
        .slider-caption-sub {
          font-size: clamp(12px, 2vw, 15px); color: rgba(255,255,255,0.8);
          font-weight: 500; letter-spacing: 0.02em;
        }

        /* Success badge */
        .slider-badge {
          position: absolute; top: 24px; right: 24px; z-index: 4;
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(16,185,129,0.9);
          backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 100px; padding: 8px 18px;
          font-size: 12px; font-weight: 800; color: #fff;
          letter-spacing: 0.08em; text-transform: uppercase;
          box-shadow: 0 4px 20px rgba(16,185,129,0.4);
          animation: badge-pulse 2s ease infinite;
        }
        @keyframes badge-pulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(16,185,129,0.4); }
          50%       { box-shadow: 0 4px 32px rgba(16,185,129,0.7); }
        }
        .slider-badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #fff; animation: dot-blink 1.2s ease infinite;
        }
        @keyframes dot-blink {
          0%, 100% { opacity: 1; } 50% { opacity: 0.4; }
        }

        /* Dots */
        .slider-dots {
          position: absolute; bottom: 16px; right: 40px; z-index: 5;
          display: flex; gap: 8px; align-items: center;
        }
        .slider-dot {
          width: 8px; height: 8px; border-radius: 100px;
          background: rgba(255,255,255,0.4); border: none; cursor: pointer;
          padding: 0; transition: all 0.3s ease;
        }
        .slider-dot.active {
          width: 24px; background: #ffffff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }

        /* Arrow buttons */
        .slider-arrow {
          position: absolute; top: 50%; z-index: 5;
          transform: translateY(-50%);
          width: 40px; height: 40px; border-radius: 50%;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.25);
          color: #fff; font-size: 18px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .slider-arrow:hover { background: rgba(255,255,255,0.28); }
        .slider-arrow.left  { left: 20px; }
        .slider-arrow.right { right: 20px; }
        @media (max-width: 640px) {
          .slider-arrow { display: none; }
          .slider-caption { padding: 16px 20px 40px; }
          .slider-badge { top: 14px; right: 14px; padding: 6px 12px; font-size: 10px; }
        }
      `}</style>

      {/* Slide image */}
      <div className={`slider-img ${animating ? "fade-out" : "fade-in"}`}>
        <Image
          src={slides[current].src}
          alt={slides[current].caption}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="slider-overlay" />

      {/* Success badge */}
      <div className="slider-badge">
        <span className="slider-badge-dot" />
        Workshop Successfully Completed 🎉
      </div>

      {/* Caption */}
      <div className={`slider-caption ${animating ? "hide" : "show"}`}>
        <p className="slider-caption-title">{slides[current].caption}</p>
        <p className="slider-caption-sub">{slides[current].sub}</p>
      </div>

      {/* Dots */}
      <div className="slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`slider-dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        className="slider-arrow left"
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
      >‹</button>
      <button
        className="slider-arrow right"
        onClick={() => goTo((current + 1) % slides.length)}
      >›</button>

    </div>
  )
}

const Page = () => {
  return (
    <div className="min-h-screen max-w-full bg-[#F8FAFC] antialiased">

      {/* ── Sliding Banner ── */}
      <ImageSlider />

      {/* Hero Section */}
      <div className="w-full min-h-[calc(100vh-96px)] p-8 md:p-12 mt-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-12">

          {/* Text */}
          <div>
            <h1 className="text-5xl md:text-7xl mb-4 font-serif text-slate-800 leading-tight">
              Wellness Workshop 2026
            </h1>
            <span className="text-blue-500 mt-2 text-2xl font-bold italic">आयुष एवं चैतन्य की ओर</span>
            <br/>
            <div className="px-5 py-2 mt-4 mb-4 auto inline-flex items-center gap-2.5 rounded-full bg-blue-100/60 text-blue-800 font-medium text-sm backdrop-blur-lg shadow-inner ring-1 ring-blue-200/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-md"></div>
              <span className="relative z-10">21<sup>st</sup> - 22<sup>nd</sup> March, 2026</span>
            </div>
            <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-lg leading-relaxed">
              A capacity-building programme to promote mental wellbeing, strengthen coping abilities, and cultivate a compassionate campus support ecosystem.
            </p>
            <div className="mt-10 flex gap-4">
              <Link href="/schedule">
                <button className="px-8 py-4 bg-blue-500 text-white rounded-full font-bold shadow-lg hover:bg-blue-600 transition cursor-pointer">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white/50">
          <Image
            src={slides[current].src}
            alt={slides[current].caption}
            fill
            className="object-cover"
            style={{ objectPosition: slides[current].objectPosition || "center center" }}
            priority
          />
          </div>

        </div>
      </div>

      {/* Motivation Section */}
      <div className="w-full py-20 px-8 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <Link href="https://www.instagram.com/p/DVyWzlCiaAZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="relative block w-full order-1 lg:order-none">
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/WhatsApp Image 2026-03-12 at 7.30.50 PM.jpeg"
                alt="Workshop Motivation"
                fill
                className="object-cover object-top"
              />
            </div>
          </Link>

          {/* Text */}
          <div className="text-slate-700 text-lg leading-relaxed space-y-6 order-2 lg:order-none">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-2">
              Motivation & Vision
            </h2>
            <p>
              Young adults and students constitute a vital human resource and play a
              central role in shaping the nation{"'"}s future. Higher Educational
              Institutions serve not only as spaces for academic learning but also as
              environments where individuals develop resilience, emotional maturity,
              ethical grounding, and life skills essential for long-term wellbeing.
            </p>
            <p>
              In alignment with the National Education Policy (NEP) 2020, which
              emphasizes the intrinsic linkage between education and mental health,
              Student Counselling Services (SCS), IIT (BHU), Varanasi, functioning as
              <span className="font-semibold"> SAKHA – a supportive companion </span>
              in students{"'"} college journey, is organising a
              two-day Wellness & Wellbeing Capacity-Building Workshop.
            </p>
            <p>
              This in-person programme is designed to promote
              <span className="font-semibold text-slate-800"> mental wellbeing</span>,
              strengthen students{"'"} coping capacities, and enable the
              <span className="font-semibold text-slate-800"> early identification of psychosocial concerns </span>
              within the campus community. The workshop aims to build a trained group of students and faculty members who can
              responsibly support peers and contribute to a
              <span className="font-semibold text-slate-800"> healthier college environment</span>. The programme follows a
              <span className="font-semibold text-slate-800"> multi-level mental health framework </span>
              focusing on awareness, early intervention, prevention & professional management.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Page;
