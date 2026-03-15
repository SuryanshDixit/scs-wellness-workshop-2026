'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home",      href: "/",         emoji: "🏠" },
  { label: "Schedule",  href: "/schedule", emoji: "📅" },
  { label: "Speakers",  href: "/speakers", emoji: "🎤" },
  { label: "People",      href: "/team",     emoji: "🤝" },
  { label: "Participants", href: "/participants", emoji: "👥" },
  { label: "About SCS", href: "/about",    emoji: "✨" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        /* ── Reset & tokens ── */
        .nav-root {
          position: sticky;
          top: 0;
          z-index: 50;
          width: 100%;
          height: 64px;
          display: flex;
          align-items: center;
          padding: 0 20px;
          justify-content: space-between;
          transition: all 0.3s ease;
          background: rgba(255,255,255,0.82);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          backdrop-filter: saturate(180%) blur(20px);
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        .nav-root.scrolled {
          box-shadow: 0 1px 0 rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06);
        }
        @media (min-width: 768px) {
          .nav-root { height: 72px; padding: 0 40px; }
        }

        /* ── Logo ── */
        .nav-logo {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          user-select: none;
        }
        .nav-logo-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 20px;
          font-weight: 700;
          color: #1e293b;
          letter-spacing: -0.02em;
          line-height: 1;
        }
        @media (min-width: 768px) { .nav-logo-title { font-size: 22px; } }
        .nav-logo-title span { color: #3b82f6; }
        .nav-logo-sub {
          font-size: 8.5px;
          font-weight: 600;
          color: #94a3b8;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        /* ── Desktop pill nav ── */
        .nav-desktop-links {
          display: none;
        }
        @media (min-width: 768px) {
          .nav-desktop-links {
            display: flex;
            gap: 4px;
            align-items: center;
            background: rgba(241,245,249,0.7);
            padding: 5px;
            border-radius: 999px;
            border: 1px solid rgba(255,255,255,0.8);
            box-shadow: inset 0 1px 2px rgba(0,0,0,0.05);
          }
        }
        .nav-pill-link {
          padding: 7px 20px;
          font-size: 13.5px;
          font-weight: 600;
          border-radius: 999px;
          text-decoration: none;
          color: #64748b;
          transition: all 0.22s ease;
          letter-spacing: -0.01em;
        }
        .nav-pill-link:hover {
          color: #1e293b;
          background: rgba(255,255,255,0.5);
        }
        .nav-pill-link.active {
          color: #2563eb;
          background: #ffffff;
          box-shadow: 0 1px 4px rgba(0,0,0,0.1), 0 2px 8px rgba(59,130,246,0.12);
        }

        /* ── Desktop CTA ── */
        .nav-cta {
          display: none;
        }
        @media (min-width: 768px) {
          .nav-cta {
            display: inline-flex;
            align-items: center;
            padding: 10px 24px;
            border-radius: 999px;
            background: #3b82f6;
            color: #fff;
            font-size: 13.5px;
            font-weight: 700;
            text-decoration: none;
            letter-spacing: -0.01em;
            transition: all 0.2s ease;
            box-shadow: 0 2px 8px rgba(59,130,246,0.35);
          }
          .nav-cta:hover {
            background: #2563eb;
            box-shadow: 0 4px 16px rgba(59,130,246,0.45);
            transform: translateY(-1px);
          }
          .nav-cta:active { transform: scale(0.97); }
        }

        /* ── Mobile burger — ONLY on mobile ── */
        .nav-burger {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: rgba(241,245,249,0.9);
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: 0 1px 3px rgba(0,0,0,0.08);
          cursor: pointer;
          position: relative;
          z-index: 60;
          transition: all 0.18s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .nav-burger:active { transform: scale(0.93); background: rgba(226,232,240,0.95); }

        /* Hide burger on desktop */
        @media (min-width: 768px) {
          .nav-burger { display: none !important; }
        }

        .burger-icon {
          position: absolute;
          transition: all 0.28s cubic-bezier(0.34,1.56,0.64,1);
        }
        .burger-icon.hide { opacity: 0; transform: rotate(90deg) scale(0.6); }
        .burger-icon.show { opacity: 1; transform: rotate(0deg) scale(1); }

        /* ── Backdrop ── */
        .mobile-backdrop {
          position: fixed;
          inset: 0;
          z-index: 40;
          background: rgba(15,23,42,0.25);
          -webkit-backdrop-filter: blur(4px);
          backdrop-filter: blur(4px);
          transition: opacity 0.3s ease;
        }
        .mobile-backdrop.open { opacity: 1; pointer-events: auto; }
        .mobile-backdrop.closed { opacity: 0; pointer-events: none; }

        /* Hide backdrop on desktop */
        @media (min-width: 768px) {
          .mobile-backdrop { display: none !important; }
        }

        /* ── iOS-style drawer ── */
        .mobile-drawer-wrap {
          position: fixed;
          left: 12px;
          right: 12px;
          z-index: 50;
          transition: all 0.42s cubic-bezier(0.32,0.72,0,1);
        }
        .mobile-drawer-wrap.open {
          top: 76px;
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0px) scale(1);
        }
        .mobile-drawer-wrap.closed {
          top: 68px;
          opacity: 0;
          pointer-events: none;
          transform: translateY(-8px) scale(0.97);
        }

        /* Hide drawer on desktop */
        @media (min-width: 768px) {
          .mobile-drawer-wrap { display: none !important; }
        }

        .mobile-drawer {
          background: rgba(249,250,251,0.96);
          -webkit-backdrop-filter: saturate(200%) blur(40px);
          backdrop-filter: saturate(200%) blur(40px);
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow:
            0 0 0 0.5px rgba(0,0,0,0.06),
            0 8px 24px rgba(0,0,0,0.1),
            0 24px 48px rgba(0,0,0,0.08);
          overflow: hidden;
        }

        /* Nav rows */
        .drawer-nav { padding: 8px; display: flex; flex-direction: column; gap: 2px; }

        .drawer-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 14px;
          border-radius: 13px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #1e293b;
          transition: background 0.15s ease;
          -webkit-tap-highlight-color: transparent;
          position: relative;
        }
        .drawer-link:active { background: rgba(0,0,0,0.06) !important; }
        .drawer-link:hover { background: rgba(255,255,255,0.7); }
        .drawer-link.active {
          background: rgba(59,130,246,0.08);
          color: #2563eb;
        }

        .drawer-link-icon {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          background: rgba(255,255,255,0.9);
          box-shadow: 0 1px 3px rgba(0,0,0,0.1), inset 0 0.5px 0 rgba(255,255,255,0.8);
          flex-shrink: 0;
        }
        .drawer-link.active .drawer-link-icon {
          background: rgba(59,130,246,0.12);
          box-shadow: none;
        }

        .drawer-link-label { flex: 1; }

        .drawer-link-chevron {
          color: #c4cdd6;
          font-size: 17px;
          font-weight: 400;
          line-height: 1;
        }
        .drawer-link.active .drawer-link-chevron { color: #93c5fd; }

        /* Separator */
        .drawer-sep {
          height: 1px;
          background: rgba(0,0,0,0.07);
          margin: 0 14px;
        }

        /* CTA row */
        .drawer-cta-wrap { padding: 8px; }
        .drawer-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 14px;
          border-radius: 13px;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: -0.01em;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(59,130,246,0.38), inset 0 1px 0 rgba(255,255,255,0.2);
          transition: all 0.18s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .drawer-cta:active { transform: scale(0.97); box-shadow: 0 2px 8px rgba(59,130,246,0.3); }
      `}</style>

      {/* ── Navbar bar ── */}
      <nav className={`nav-root${scrolled ? " scrolled" : ""}`}>

        {/* Logo */}
        <Link href="/" className="nav-logo grid gap-3">
          <img src="/iit_logo_original.png" alt="IIT BHU" className="h-11 w-auto"/>
          <div style={{width:"1px", height:"40px", background:"#cbd5e1"}} />
          <img src="/Screenshot_2025-12-27_113737-removebg-preview.png" alt="SCS" className="h-12 w-auto"/>
        </Link>

        {/* Desktop pill nav */}
        <div className="nav-desktop-links">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`nav-pill-link${pathname === item.href ? " active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link href="/contact" className="nav-cta">Contact Us</Link>

        {/* Mobile burger — hidden on desktop via CSS */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          className="nav-burger"
        >
          <span className={`burger-icon ${menuOpen ? "show" : "hide"}`}>
            <X size={18} color="#475569" strokeWidth={2.5} />
          </span>
          <span className={`burger-icon ${menuOpen ? "hide" : "show"}`}>
            <Menu size={18} color="#475569" strokeWidth={2.5} />
          </span>
        </button>

      </nav>

      {/* ── Mobile backdrop ── */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`mobile-backdrop ${menuOpen ? "open" : "closed"}`}
      />

      {/* ── iOS-style mobile drawer ── */}
      <div className={`mobile-drawer-wrap ${menuOpen ? "open" : "closed"}`}>
        <div className="mobile-drawer">

          {/* Nav links */}
          <div className="drawer-nav">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`drawer-link${isActive ? " active" : ""}`}
                >
                  <span className="drawer-link-icon">{item.emoji}</span>
                  <span className="drawer-link-label">{item.label}</span>
                  <span className="drawer-link-chevron">›</span>
                </Link>
              );
            })}
          </div>

          {/* Separator */}
          <div className="drawer-sep" />

          {/* CTA */}
          <div className="drawer-cta-wrap">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="drawer-cta"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
