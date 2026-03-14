'use client'
// ─────────────────────────────────────────────────────────────
//  Footer.jsx  —  SAKHA Wellness · IIT (BHU)
//  Design language: iOS 18 · visionOS glass · SF Pro geometry
//  Aesthetic: Frosted glass layers, 3-D icon tiles, spring motion
// ─────────────────────────────────────────────────────────────

import React, { useState } from 'react';
import {
  GraduationCap,
  Mail,
  MapPin,
  CalendarDays,
  ChevronRight,
  Instagram,
  Twitter,
  Linkedin,
  Home,
  Calendar,
  Mic2,
  Sparkles,
  Rows,
  Youtube,
  Italic,
} from 'lucide-react';

// ─── Navigation data ─────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Home',      href: '/',         Icon: Home,     accent: ['#34d399', '#059669'] },
  { label: 'Schedule',  href: '/schedule', Icon: Calendar, accent: ['#60a5fa', '#2563eb'] },
  { label: 'Speakers',  href: '/speakers', Icon: Mic2,     accent: ['#f472b6', '#db2777'] },
  { label: 'Team',      href: '/team',     Icon: Rows,     accent: ['#fb923c', '#ea580c'] }, 
  { label: 'About SCS', href: '/about',    Icon: Sparkles, accent: ['#a78bfa', '#7c3aed'] },
];

// ─── Social platforms ─────────────────────────────────────────
const SOCIALS = [
  {
    label: 'Instagram',
    Icon: Instagram,
    href: 'https://www.instagram.com/scs.iitbhu',
    gradient: 'linear-gradient(135deg, #f9a825 0%, #e91e63 50%, #9c27b0 100%)',
    shadow: 'rgba(233,30,99,0.45)',
  },
  {
    label: 'Youtube',
    Icon: Youtube,
    href: 'https://www.youtube.com/@scs.iitbhu',
    gradient: 'linear-gradient(135deg, #CC0000, #CC0000)',
    shadow: 'rgba(2,136,209,0.45)',
  },
  {
    label: 'LinkedIn',
    Icon: Linkedin,
    href: 'https://www.linkedin.com/company/scs-iitbhu/mycompany',
    gradient: 'linear-gradient(135deg, #42a5f5, #0a66c2)',
    shadow: 'rgba(10,102,194,0.45)',
  },
];

// ─── Reusable: 3-D glass icon tile ────────────────────────────
// Mimics visionOS app-icon depth: base layer + specular sheen + inner shadow
function Icon3D({ gradient, shadow, size = 44, radius = 13, children }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: gradient,
        boxShadow: `
          0 6px 20px ${shadow},
          0 1px 0 rgba(255,255,255,0.35) inset,
          0 -1px 0 rgba(0,0,0,0.18) inset
        `,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        position: 'relative',
        flexShrink: 0,
        // Specular highlight overlay
        overflow: 'hidden',
      }}
    >
      {/* Top-gloss sheen — visionOS specular layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background:
            'linear-gradient(160deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0) 55%)',
          pointerEvents: 'none',
        }}
      />
      {children}
    </div>
  );
}

// ─── Reusable: frosted-glass card ─────────────────────────────
function GlassCard({ children, style }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.62)',
        backdropFilter: 'saturate(200%) blur(28px)',
        WebkitBackdropFilter: 'saturate(200%) blur(28px)',
        borderRadius: 20,
        border: '1px solid rgba(255,255,255,0.85)',
        boxShadow: `
          0 2px 24px rgba(0,0,0,0.07),
          0 1px 0 rgba(255,255,255,0.9) inset
        `,
        overflow: 'hidden',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── Reusable: section label (iOS grouped list header) ─────────
function SectionLabel({ children }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 700,
        color: '#8e8e93',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        padding: '0 6px',
        marginBottom: 6,
        fontFamily: '"SF Pro Text", -apple-system, sans-serif',
      }}
    >
      {children}
    </div>
  );
}

// ─── Reusable: separator line inside grouped cards ─────────────
function Separator({ left = 58 }) {
  return (
    <div
      style={{
        height: 1,
        background: 'rgba(0,0,0,0.07)',
        marginLeft: left,
      }}
    />
  );
}

// ─── Nav row with 3-D icon + spring press ─────────────────────
function NavRow({ link, isLast }) {
  const [pressed, setPressed] = useState(false);
  const { label, href, Icon, accent } = link;

  return (
    <>
      <a
        href={href}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          padding: '11px 14px',
          textDecoration: 'none',
          background: pressed ? 'rgba(0,0,0,0.05)' : 'transparent',
          transform: pressed ? 'scale(0.985)' : 'scale(1)',
          transition: 'background 0.1s ease, transform 0.12s cubic-bezier(0.34,1.56,0.64,1)',
          WebkitTapHighlightColor: 'transparent',
          cursor: 'pointer',
        }}
      >
        {/* 3-D icon tile */}
        <Icon3D
          gradient={`linear-gradient(145deg, ${accent[0]}, ${accent[1]})`}
          shadow={`${accent[1]}55`}
          size={32}
          radius={9}
        >
          <Icon size={16} />
        </Icon3D>

        {/* Label */}
        <span
          style={{
            flex: 1,
            fontSize: 15,
            fontWeight: 500,
            color: '#1c1c1e',
            fontFamily: '"SF Pro Text", -apple-system, sans-serif',
            letterSpacing: '-0.01em',
          }}
        >
          {label}
        </span>

        {/* iOS disclosure chevron */}
        <ChevronRight size={16} color="#c7c7cc" />
      </a>
      {!isLast && <Separator />}
    </>
  );
}

// ─── Main footer component ────────────────────────────────────
export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@700&display=swap');

        /* ── Root canvas: deep ambient gradient matching visionOS space ── */
        .ft-root {
          width: 100%;
          min-height: 100px;
          background:
            radial-gradient(ellipse 80% 60% at 20% 110%, rgba(59,130,246,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80%  80%, rgba(167,139,250,0.14) 0%, transparent 55%),
            linear-gradient(180deg, #e8eaf2 0%, #dde0ef 100%);
          padding: 36px 16px 48px;
          font-family: -apple-system, "SF Pro Text", "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        @media (min-width: 768px) { .ft-root { padding: 52px 40px 64px; } }

        /* ── Constrained centred column ── */
        .ft-inner {
          max-width: 680px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        @media (min-width: 1024px) { .ft-inner { max-width: 960px; } }

        /* ── Desktop two-column grid for links + contact ── */
        @media (min-width: 768px) {
          .ft-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        }

        /* ── Pulsing availability dot ── */
        @keyframes ft-breathe {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(0.75); }
        }

        /* ── Social button spring press ── */
        .ft-social-btn {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 14px 6px;
          border-radius: 14px;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.12s ease, transform 0.15s cubic-bezier(0.34,1.56,0.64,1);
          -webkit-tap-highlight-color: transparent;
        }
        .ft-social-btn:hover  { background: rgba(0,0,0,0.035); }
        .ft-social-btn:active { background: rgba(0,0,0,0.07); transform: scale(0.93); }
      `}</style>

      <footer className="ft-root">
        <div className="ft-inner">

          {/* ── BRAND CARD ──────────────────────────────────────── */}
          <GlassCard>
            <div style={{ padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: 14 }}>

              {/* Logo row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>

                {/* 3-D app-icon — hero size */}
                <Icon3D
                  gradient="linear-gradient(145deg, #60a5fa 0%, #1d4ed8 100%)"
                  shadow="rgba(29,78,216,0.5)"
                  size={58}
                  radius={16}
                >
                  <GraduationCap size={28} />
                </Icon3D>

                {/* Name block */}
                <div>
                  <div
                    style={{
                      fontSize: 24,
                      fontWeight: 800,
                      color: '#1c1c1e',
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                    }}
                  >{' '}
                    <span
                      style={{
                        background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Wellness Workshop 2026
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 10.5,
                      fontWeight: 700,
                      color: '#8e8e93',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      marginTop: 4,
                    }}
                  >
                    Student Counselling Services · IIT (BHU), Varanasi
                  </div>
                </div>
              </div>

              {/* Descriptor */}
              <p style={{ fontSize: 14, color: '#48484a', lineHeight: 1.6, margin: 0, fontWeight: 400}}>
                Your friend on campus - dedicated to holistic wellbeing and mental health.
              </p>
            </div>
          </GlassCard>

          {/* ── LINKS + CONTACT GRID ─────────────────────────────── */}
          <div className="ft-two-col" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

            {/* Quick Links */}
            <div>
              <SectionLabel>Quick Links</SectionLabel>
              <GlassCard>
                {NAV_LINKS.map((link, i) => (
                  <NavRow key={link.href} link={link} isLast={i === NAV_LINKS.length - 1} />
                ))}
              </GlassCard>
            </div>

            {/* Contact */}
            <div>
              <SectionLabel>Contact</SectionLabel>
              <GlassCard>

                {/* ── Email row ── */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '12px 14px',
                  }}
                >
                  <Icon3D
                    gradient="linear-gradient(145deg, #60a5fa, #2563eb)"
                    shadow="rgba(37,99,235,0.4)"
                    size={32}
                    radius={9}
                  >
                    <Mail size={15} />
                  </Icon3D>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11.5, color: '#8e8e93', fontWeight: 500  }}>Email</div>
                    <div className="flex items-center gap-1">
                    <a
                      href="mailto:sakha.scs@iitbhu.ac.in"
                      style={{
                        fontSize: 14.5,
                        fontWeight: 600,
                        color: '#2563eb',
                        textDecoration: 'none',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      sakha.scs@iitbhu.ac.in
                    </a>

                    </div>
                  </div>
                </div>

                <Separator />

                {/* ── Location row ── */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '12px 14px',
                  }}
                >
                  <Icon3D
                    gradient="linear-gradient(145deg, #f87171, #dc2626)"
                    shadow="rgba(220,38,38,0.38)"
                    size={32}
                    radius={9}
                  >
                    <a
                href="https://maps.google.com/?q=IIT+BHU+Varanasi"
                target="_blank"
                rel="noreferrer"
                className="ct-directions-btn"
              >
                <MapPin size={14} className="text-white" />
              </a>
                  </Icon3D>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11.5, color: '#8e8e93', fontWeight: 500 }}>Location</div>
                    <div style={{ fontSize: 14.5, fontWeight: 600, color: '#1c1c1e', letterSpacing: '-0.01em' }}>
                      IIT (BHU), Varanasi, Uttar Pradesh(UP), 221005
                    </div>
                  </div>
                </div>

                <Separator />

                {/* ── Event highlight — glass tinted row ── */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '14px 14px',
                    background:
                      'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(59,130,246,0.06))',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Icon3D
                    gradient="linear-gradient(145deg, #818cf8, #4f46e5)"
                    shadow="rgba(79,70,229,0.45)"
                    size={36}
                    radius={10}
                  >
                    <CalendarDays size={17} />
                  </Icon3D>
                  <div>
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 800,
                        color: '#6366f1',
                        textTransform: 'uppercase',
                        letterSpacing: '0.09em',
                      }}
                    >
                      Upcoming Event
                    </div>
                    <div
                      style={{
                        fontSize: 14.5,
                        fontWeight: 700,
                        color: '#1c1c1e',
                        letterSpacing: '-0.02em',
                        marginTop: 1,
                      }}
                    >
                      Wellness Workshop · 21<sup>st</sup> – 22<sup>nd</sup> March, 2026
                    </div>
                  </div>
                </div>

              </GlassCard>
            </div>
          </div>

          {/* ── SOCIAL ICONS ──────────────────────────────────────── */}
          <div>
            <SectionLabel>Follow Us</SectionLabel>
            <GlassCard>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  padding: 6,
                }}
              >
                {SOCIALS.map(({ label, Icon, href, gradient, shadow }) => (
                  <a key={label} href={href} className="ft-social-btn">
                    {/* 3-D social icon — platform colours */}
                    <Icon3D
                      gradient={gradient}
                      shadow={shadow}
                      size={42}
                      radius={12}
                    >
                      <Icon size={18} />
                    </Icon3D>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: '#8e8e93',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </GlassCard>
          </div>
          {/* ── VIEW COUNTER ── */}
          <div style={{ textAlign: 'center', padding: '4px 0' }}>
            <img
              src="https://hits.sh/your-domain.vercel.app.svg?style=flat-square&label=Total+Visits&color=2563eb&labelColor=1e293b"
              alt="Visitor Count"
              style={{ borderRadius: 6, height: 22 }}
            />
          </div>

          {/* ── LEGAL / WORDMARK ─────────────────────────────────── */}
          <div
            style={{
              textAlign: 'center',
              padding: '12px 0 4px',
            }}
          >
            <p
              style={{
                fontSize: 12,
                color: '#aeaeb2',
                lineHeight: 1.7,
                margin: 0,
                fontWeight: 400,
              }}
            >
              © 2026{' '}
              <strong style={{ color: '#8e8e93', fontWeight: 700 }}>
                SAKHA · Student Counselling Services, IIT (BHU)
              </strong>
              <br />
              <em style={{ color: '#c7c7cc', fontSize: 11 }}>
                "Seek, Aspire, Know, Holistic Advancement"
              </em>
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}
