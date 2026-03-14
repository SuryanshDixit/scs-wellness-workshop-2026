'use client'
import React, { useState, useEffect, useRef } from "react";
import {
  GraduationCap, MapPin, Heart, Users, BookOpen,
  Star, LucideTarget, Mail, ArrowRight, Building2,
  Brain, Handshake, TrendingUp, Award, ChevronDown,
  Target, Lightbulb, ShieldCheck, ExternalLink
} from "lucide-react";


function useCounter(end, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function StatCard({ value, suffix = "+", label, icon, color, delay = 0 }) {
  const [ref, inView] = useInView();
  const count = useCounter(value, 1800, inView);
  return (
    <div ref={ref} className="ab-stat-card" style={{ animationDelay: `${delay}ms` }}>
      <div className="ab-stat-icon" style={{ color, background: color + "22" }}>{icon}</div>
      <div className="ab-stat-number" style={{ color }}>{count}{suffix}</div>
      <div className="ab-stat-label">{label}</div>
    </div>
  );
}

function SocialIcon3D({ href, label, gradient, shadowColor, icon }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
    
      href={href}
      title={label}
      className="ab-social3d"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: gradient,
        boxShadow: hovered
          ? `0 16px 32px ${shadowColor}55, 0 6px 12px ${shadowColor}33, inset 0 1px 0 rgba(255,255,255,0.35)`
          : `0 6px 18px ${shadowColor}40, 0 2px 6px ${shadowColor}25, inset 0 1px 0 rgba(255,255,255,0.3)`,
        transform: hovered ? "translateY(-6px) scale(1.08)" : "translateY(0) scale(1)",
      }}
    >
      <span className="ab-social3d-shine" />
      <span className="ab-social3d-icon">{icon}</span>
    </a>
  );
}

function FooterSocialBtn({ href, gradient, shadowColor, icon, label }) {
  const [hov, setHov] = useState(false);
  return (
    <a
    
      href={href}
      title={label}
      className="ab-footer-social-btn"
      style={{
        background: gradient,
        boxShadow: hov
          ? `0 10px 24px ${shadowColor}50, inset 0 1px 0 rgba(255,255,255,0.3)`
          : `0 3px 10px ${shadowColor}35, inset 0 1px 0 rgba(255,255,255,0.25)`,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <span className="ab-footer-social-btn-shine" />
      {icon}
    </a>
  );
}

const InstagramSVG = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="white" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
  </svg>
);
const LinkedInSVG = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const YoutubeSVG = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" opacity="0.9"/>
  </svg>
);

export default function AboutUs() {
  const [missionRef, missionInView] = useInView(0.15);
  const [outcomeRef, outcomeInView] = useInView(0.15);
  const [venueRef, venueInView] = useInView(0.15);
  const [daisRef, daisInView] = useInView(0.15);

  const frameworks = [
    { icon: <ShieldCheck size={22}/>, color: "#3B82F6", label: "Prevention",            desc: "Proactive campus mental health promotion" },
    { icon: <Lightbulb size={22}/>,   color: "#F59E0B", label: "Awareness",             desc: "Building shared knowledge & healthy attitudes" },
    { icon: <Heart size={22}/>,       color: "#F43F5E", label: "Early Intervention",    desc: "Timely identification of psychosocial concerns" },
    { icon: <Brain size={22}/>,       color: "#8B5CF6", label: "Professional Referral", desc: "Structured pathways for severe conditions" },
  ];

  const outcomes = [
    { icon: <Brain size={20}/>,      color: "#3B82F6", text: "Training in Wellness & Mental Health Support System" },
    { icon: <LucideTarget size={20}/>,   color: "#A855F7", text: "Life Skills and Happiness Programme" },
    { icon: <Handshake size={20}/>,  color: "#10B981", text: "Seeding the concept of Inter-IIT Wellness Programmes" },
    { icon: <TrendingUp size={20}/>, color: "#F97316", text: "Intensive & interactive expert seminars and workshops" },
    { icon: <Heart size={20}/>,      color: "#F43F5E", text: "Emotional well-being, resilience & stress management" },
    { icon: <Users size={20}/>,      color: "#0EA5E9", text: "Supportive peer engagement & empathy building" },
  ];

  const dais = [
    { name: "Prof. Amit Patra",        role: "Director, IIT (BHU)",                      icon: <Award size={18}/>,         color: "#1D4ED8" },
    { name: "Dr. Rajendra K. Dhamija", role: "Guest-of-Honour, Director IHBAS New Delhi", icon: <Star size={18}/>,          color: "#EAB308" },
    { name: "VC / Representative",     role: "BHU Representative",                        icon: <Building2 size={18}/>,     color: "#8B5CF6" },
    { name: "Dean of Student Affairs", role: "DoSA, IIT (BHU)",                           icon: <GraduationCap size={18}/>, color: "#10B981" },
  ];

  const beneficiaries = [
    { label: "SAKHA Students",       count: "70", color: "#3B82F6", icon: <Users size={16}/> },
    { label: "Faculty Coordinators", count: "11", color: "#8B5CF6", icon: <GraduationCap size={16}/> },
    { label: "Wellness Wardens",     count: "18", color: "#10B981", icon: <ShieldCheck size={16}/> },
    { label: "Scholars / Interns",   count: "10", color: "#F59E0B", icon: <BookOpen size={16}/> },
  ];

  const socials = [
    { href: "#", label: "Instagram", gradient: "linear-gradient(135deg, #F58529 0%, #DD2A7B 40%, #8134AF 70%, #515BD4 100%)", shadowColor: "#DD2A7B", icon: <InstagramSVG /> },
    { href: "#", label: "LinkedIn",  gradient: "linear-gradient(135deg, #0A66C2 0%, #0077B5 60%, #00A0DC 100%)",              shadowColor: "#0A66C2", icon: <LinkedInSVG /> },
    { href: "#", label: "YouTube",   gradient: "linear-gradient(135deg, #FF0000 0%, #CC0000 50%, #990000 100%)",              shadowColor: "#FF0000", icon: <YoutubeSVG /> },
  ];

  const footerLinks = [
    { label: "Schedule",    href: "#" },
    { label: "About SAKHA", href: "#" },
    { label: "Speakers",    href: "#" },
    { label: "Register",    href: "#" },
  ];

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');

    .ab-page {
      min-height: 100vh;
      background: linear-gradient(160deg, #EFF6FF 0%, #DBEAFE 40%, #BFDBFE 100%);
      position: relative; overflow-x: hidden;
      font-family: 'DM Sans', sans-serif;
    }

    .ab-orb { position: fixed; border-radius: 50%; filter: blur(90px); pointer-events: none; z-index: 0; }
    .ab-orb-1 { width:600px; height:600px; background:rgba(147,197,253,0.3);  top:-150px; left:-150px; }
    .ab-orb-2 { width:450px; height:450px; background:rgba(191,219,254,0.35); bottom:50px; right:-100px; }
    .ab-orb-3 { width:350px; height:350px; background:rgba(96,165,250,0.18);  top:45%; left:50%; transform:translateX(-50%); }

    .ab-section { position:relative; z-index:1; max-width:1100px; margin:0 auto; padding:0 24px 80px; }

    .ab-hero { position:relative; z-index:1; text-align:center; padding:70px 24px 60px; }
    .ab-hero-pill {
      display:inline-flex; align-items:center; gap:8px;
      background:rgba(255,255,255,0.5); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px);
      border:1px solid rgba(255,255,255,0.85); border-radius:100px;
      padding:9px 20px; font-size:11px; font-weight:800; color:#2563EB;
      letter-spacing:2px; text-transform:uppercase; margin-bottom:22px;
      box-shadow:0 4px 20px rgba(59,130,246,0.1);
    }
    .ab-hero-title {
      font-family:'Playfair Display',serif;
      font-size:clamp(2.6rem,7vw,5rem); font-weight:800;
      color:#1E3A8A; line-height:1.08; letter-spacing:-1.5px; margin-bottom:16px;
    }
    .ab-hero-title em { font-style:italic; color:#3B82F6; }
    .ab-hero-tagline {
      display:inline-block; font-family:'Playfair Display',serif;
      font-style:italic; font-size:clamp(1rem,2.5vw,1.3rem);
      color:#2563EB; font-weight:700; margin-bottom:20px;
    }
    .ab-hero-desc { max-width:680px; margin:0 auto 32px; font-size:16px; color:#475569; line-height:1.75; }
    .ab-hero-badges { display:flex; flex-wrap:wrap; justify-content:center; gap:12px; }
    .ab-hero-badge {
      display:inline-flex; align-items:center; gap:7px;
      background:rgba(255,255,255,0.55); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px);
      border:1px solid rgba(255,255,255,0.9); border-radius:100px;
      padding:9px 18px; font-size:13px; font-weight:600; color:#1D4ED8;
      box-shadow:0 4px 16px rgba(59,130,246,0.08), inset 0 1px 0 rgba(255,255,255,0.9);
    }
    .ab-scroll-hint {
      display:flex; flex-direction:column; align-items:center; gap:6px;
      margin-top:40px; color:#93C5FD; font-size:11px; font-weight:700;
      letter-spacing:2px; text-transform:uppercase; animation:ab-bounce 2s infinite;
    }
    @keyframes ab-bounce { 0%,100% { transform:translateY(0); } 50% { transform:translateY(6px); } }

    .ab-glass-card {
      background:rgba(255,255,255,0.55); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px);
      border:1px solid rgba(255,255,255,0.85); border-radius:28px;
      box-shadow:0 8px 32px rgba(59,130,246,0.07), inset 0 1px 0 rgba(255,255,255,0.9);
      padding:40px 44px; margin-bottom:28px; position:relative; overflow:hidden;
    }
    .ab-glass-card::before {
      content:''; position:absolute; inset:0;
      background:linear-gradient(135deg,rgba(255,255,255,0.5) 0%,rgba(255,255,255,0.05) 100%);
      border-radius:28px; pointer-events:none;
    }
    .ab-eyebrow {
      font-size:10px; font-weight:900; color:#3B82F6; text-transform:uppercase;
      letter-spacing:3px; margin-bottom:10px; display:flex; align-items:center; gap:8px;
    }
    .ab-eyebrow::after {
      content:''; flex:1; height:1px;
      background:linear-gradient(to right,rgba(96,165,250,0.4),transparent);
    }
    .ab-title {
      font-family:'Playfair Display',serif;
      font-size:clamp(1.6rem,4vw,2.4rem); font-weight:800; color:#1E3A8A; line-height:1.2; margin-bottom:16px;
    }
    .ab-body { font-size:15px; color:#475569; line-height:1.8; }
    .ab-body strong { color:#1E3A8A; font-weight:700; }
    .ab-divider { height:1px; background:linear-gradient(to right,transparent,rgba(147,197,253,0.4),transparent); margin:0 0 28px; }
    .ab-nep-tag {
      display:inline-flex; align-items:center; gap:7px;
      background:rgba(219,234,254,0.5); border:1px solid rgba(147,197,253,0.5);
      border-radius:10px; padding:7px 14px; font-size:12px; font-weight:700; color:#1D4ED8; margin-top:16px;
    }

    .ab-stats-row { display:grid; grid-template-columns:repeat(auto-fit,minmax(150px,1fr)); gap:20px; margin-bottom:28px; }
    .ab-stat-card {
      background:rgba(255,255,255,0.6); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px);
      border:1px solid rgba(255,255,255,0.9); border-radius:22px; padding:24px 20px; text-align:center;
      box-shadow:0 4px 20px rgba(59,130,246,0.06), inset 0 1px 0 rgba(255,255,255,0.9);
      transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
    }
    .ab-stat-card:hover { transform:translateY(-6px); }
    .ab-stat-icon { width:44px; height:44px; border-radius:14px; display:flex; align-items:center; justify-content:center; margin:0 auto 12px; }
    .ab-stat-number { font-family:'Playfair Display',serif; font-size:2.2rem; font-weight:800; line-height:1; margin-bottom:6px; }
    .ab-stat-label { font-size:12px; color:#64748B; font-weight:600; }

    .ab-framework-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:18px; margin-top:28px; }
    .ab-framework-item {
      background:rgba(255,255,255,0.6); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
      border:1px solid rgba(255,255,255,0.9); border-radius:20px; padding:22px 20px;
      box-shadow:0 4px 16px rgba(59,130,246,0.06);
      transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s;
    }
    .ab-framework-item:hover { transform:translateY(-5px); box-shadow:0 12px 32px rgba(59,130,246,0.12); }
    .ab-fw-icon { width:46px; height:46px; border-radius:14px; display:flex; align-items:center; justify-content:center; margin-bottom:14px; }
    .ab-fw-label { font-size:14px; font-weight:800; color:#1E3A8A; margin-bottom:6px; }
    .ab-fw-desc { font-size:13px; color:#64748B; line-height:1.5; }

    .ab-outcomes-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:16px; margin-top:24px; }
    .ab-outcome-item {
      display:flex; align-items:flex-start; gap:14px;
      background:rgba(255,255,255,0.55); border:1px solid rgba(255,255,255,0.85);
      border-radius:18px; padding:18px 20px;
      backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px);
      box-shadow:0 3px 14px rgba(59,130,246,0.05); transition:transform 0.25s, box-shadow 0.25s;
    }
    .ab-outcome-item:hover { transform:translateX(5px); box-shadow:0 6px 24px rgba(59,130,246,0.1); }
    .ab-outcome-icon { width:36px; height:36px; border-radius:10px; flex-shrink:0; display:flex; align-items:center; justify-content:center; }
    .ab-outcome-text { font-size:14px; font-weight:600; color:#334155; line-height:1.45; padding-top:7px; }

    .ab-ben-row { display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:16px; margin-top:24px; }
    .ab-ben-card {
      background:rgba(255,255,255,0.6); border:1px solid rgba(255,255,255,0.9);
      border-radius:20px; padding:22px 20px; text-align:center;
      backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
      box-shadow:0 4px 16px rgba(59,130,246,0.06);
      transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
    }
    .ab-ben-card:hover { transform:translateY(-5px); }
    .ab-ben-icon { width:42px; height:42px; border-radius:12px; display:flex; align-items:center; justify-content:center; margin:0 auto 10px; }
    .ab-ben-count { font-family:'Playfair Display',serif; font-size:2rem; font-weight:800; line-height:1; margin-bottom:4px; }
    .ab-ben-label { font-size:12px; color:#64748B; font-weight:600; }

    .ab-venues-row { display:flex; flex-wrap:wrap; gap:14px; margin-top:20px; }
    .ab-venue-pill {
      display:inline-flex; align-items:center; gap:10px;
      background:rgba(255,255,255,0.65); border:1px solid rgba(191,219,254,0.7);
      border-radius:16px; padding:14px 22px; font-size:15px; font-weight:700; color:#1D4ED8;
      backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
      box-shadow:0 4px 16px rgba(59,130,246,0.07); transition:transform 0.2s, box-shadow 0.2s;
    }
    .ab-venue-pill:hover { transform:translateY(-3px); box-shadow:0 8px 24px rgba(59,130,246,0.13); }

    .ab-dais-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:18px; margin-top:24px; }
    .ab-dais-card {
      background:rgba(255,255,255,0.6); border:1px solid rgba(255,255,255,0.9);
      border-radius:20px; padding:24px 22px;
      backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
      box-shadow:0 4px 16px rgba(59,130,246,0.06);
      transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s;
      display:flex; align-items:flex-start; gap:14px;
    }
    .ab-dais-card:hover { transform:translateY(-5px); box-shadow:0 12px 32px rgba(59,130,246,0.12); }
    .ab-dais-icon { width:40px; height:40px; border-radius:12px; flex-shrink:0; display:flex; align-items:center; justify-content:center; }
    .ab-dais-name { font-size:14px; font-weight:800; color:#1E3A8A; margin-bottom:4px; }
    .ab-dais-role { font-size:12px; color:#64748B; font-weight:500; line-height:1.4; }

    .ab-contact-row { display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:20px; margin-top:8px; }
    .ab-contact-email {
      display:inline-flex; align-items:center; gap:10px;
      background:rgba(219,234,254,0.5); border:1px solid rgba(147,197,253,0.5);
      border-radius:14px; padding:12px 20px; font-size:14px; font-weight:700;
      color:#1D4ED8; text-decoration:none; transition:background 0.2s, transform 0.2s;
    }
    .ab-contact-email:hover { background:rgba(191,219,254,0.7); transform:translateY(-2px); }
    .ab-social-row { display:flex; gap:16px; align-items:center; }
    .ab-social3d {
      position:relative; width:58px; height:58px; border-radius:18px;
      display:flex; align-items:center; justify-content:center;
      text-decoration:none; cursor:pointer; overflow:hidden;
      transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
      border-bottom:3px solid rgba(0,0,0,0.2); border-right:2px solid rgba(0,0,0,0.1);
    }
    .ab-social3d-shine {
      position:absolute; top:0; left:0; width:65%; height:50%;
      background:linear-gradient(135deg,rgba(255,255,255,0.45) 0%,rgba(255,255,255,0) 100%);
      border-radius:18px 0 0 0; pointer-events:none; z-index:1;
    }
    .ab-social3d::after {
      content:''; position:absolute; bottom:0; left:10%; right:10%; height:2px;
      background:rgba(255,255,255,0.2); border-radius:0 0 18px 18px; pointer-events:none;
    }
    .ab-social3d-icon { position:relative; z-index:2; display:flex; align-items:center; justify-content:center; filter:drop-shadow(0 1px 2px rgba(0,0,0,0.2)); }
    .ab-social-label { font-size:10px; font-weight:700; color:#64748B; text-align:center; margin-top:6px; letter-spacing:0.5px; }
    .ab-social-item { display:flex; flex-direction:column; align-items:center; gap:2px; }

    .ab-footer-wrap { position:relative; z-index:1; padding:0 24px 48px; max-width:1100px; margin:0 auto; }
    .ab-footer-card {
      background:rgba(255,255,255,0.45); backdrop-filter:blur(32px); -webkit-backdrop-filter:blur(32px);
      border:1px solid rgba(255,255,255,0.85); border-radius:32px; overflow:hidden; position:relative;
      box-shadow:0 20px 60px rgba(59,130,246,0.1), 0 4px 16px rgba(59,130,246,0.06),
        inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(147,197,253,0.15);
    }
    .ab-footer-card::before {
      content:''; position:absolute; top:0; left:0; right:0; height:2px;
      background:linear-gradient(90deg,transparent 0%,rgba(147,197,253,0.8) 30%,rgba(59,130,246,0.9) 50%,rgba(147,197,253,0.8) 70%,transparent 100%);
    }
    .ab-footer-card::after {
      content:''; position:absolute; inset:0; pointer-events:none;
      background:
        radial-gradient(ellipse 60% 50% at 10% 80%,rgba(219,234,254,0.4) 0%,transparent 60%),
        radial-gradient(ellipse 50% 60% at 90% 20%,rgba(191,219,254,0.3) 0%,transparent 60%);
    }
    .ab-footer-inner { position:relative; z-index:1; padding:52px 56px 40px; }
    .ab-footer-top {
      display:grid; grid-template-columns:1.4fr 1fr 1fr; gap:48px;
      padding-bottom:40px; border-bottom:1px solid rgba(147,197,253,0.25); margin-bottom:36px;
    }
    .ab-footer-logo-row { display:flex; align-items:center; gap:12px; margin-bottom:16px; }
    .ab-footer-logo-icon {
      width:44px; height:44px; border-radius:14px;
      background:linear-gradient(135deg,#3B82F6,#1D4ED8);
      display:flex; align-items:center; justify-content:center;
      color:white; box-shadow:0 4px 16px rgba(59,130,246,0.35); flex-shrink:0;
    }
    .ab-footer-logo-text { font-family:'Playfair Display',serif; font-size:20px; font-weight:800; color:#1E3A8A; line-height:1; }
    .ab-footer-logo-sub { font-size:10px; font-weight:700; color:#60A5FA; letter-spacing:1px; text-transform:uppercase; }
    .ab-footer-brand-desc { font-size:13px; color:#64748B; line-height:1.7; margin-bottom:20px; }
    .ab-footer-quote {
      display:inline-flex; align-items:center; gap:8px;
      background:rgba(219,234,254,0.45); border:1px solid rgba(147,197,253,0.4);
      border-radius:12px; padding:10px 16px;
    }
    .ab-footer-quote-dot { width:6px; height:6px; border-radius:50%; background:#60A5FA; flex-shrink:0; }
    .ab-footer-quote-text { font-family:'Playfair Display',serif; font-style:italic; font-size:13px; color:#2563EB; font-weight:700; }
    .ab-footer-col-title {
      font-size:11px; font-weight:900; color:#3B82F6;
      text-transform:uppercase; letter-spacing:2.5px; margin-bottom:18px;
      display:flex; align-items:center; gap:6px;
    }
    .ab-footer-col-title::after { content:''; flex:1; height:1px; background:rgba(147,197,253,0.35); }
    .ab-footer-nav-list { list-style:none; display:flex; flex-direction:column; gap:10px; }
    .ab-footer-nav-item a {
      font-size:14px; font-weight:600; color:#475569; text-decoration:none;
      display:flex; align-items:center; gap:6px; transition:color 0.2s, gap 0.2s;
    }
    .ab-footer-nav-item a:hover { color:#1D4ED8; gap:10px; }
    .ab-footer-nav-item a svg { opacity:0; transition:opacity 0.2s; flex-shrink:0; }
    .ab-footer-nav-item a:hover svg { opacity:1; }
    .ab-footer-contact-list { list-style:none; display:flex; flex-direction:column; gap:12px; }
    .ab-footer-contact-item { display:flex; align-items:flex-start; gap:10px; font-size:13px; color:#475569; line-height:1.5; }
    .ab-footer-contact-icon {
      width:30px; height:30px; border-radius:9px; flex-shrink:0;
      display:flex; align-items:center; justify-content:center;
      background:rgba(219,234,254,0.6); color:#3B82F6; border:1px solid rgba(147,197,253,0.4);
    }
    .ab-footer-contact-item a { color:#1D4ED8; text-decoration:none; font-weight:600; }
    .ab-footer-contact-item a:hover { text-decoration:underline; }
    .ab-footer-bottom { display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:20px; }
    .ab-footer-copy { font-size:12px; color:#94A3B8; font-weight:500; line-height:1.6; }
    .ab-footer-copy strong { color:#60A5FA; }
    .ab-footer-social-row { display:flex; gap:10px; align-items:center; }
    .ab-footer-social-btn {
      width:38px; height:38px; border-radius:11px;
      display:flex; align-items:center; justify-content:center;
      text-decoration:none; cursor:pointer; overflow:hidden;
      transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s;
      border-bottom:2px solid rgba(0,0,0,0.15); position:relative;
    }
    .ab-footer-social-btn:hover { transform:translateY(-4px) scale(1.1); }
    .ab-footer-social-btn-shine {
      position:absolute; top:0; left:0; width:60%; height:50%;
      background:linear-gradient(135deg,rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 100%);
      border-radius:11px 0 0 0; pointer-events:none;
    }
    .ab-footer-social-btn svg { position:relative; z-index:1; }
    .ab-footer-date-badge {
      display:inline-flex; align-items:center; gap:8px;
      background:linear-gradient(135deg,rgba(59,130,246,0.12),rgba(29,78,216,0.08));
      border:1px solid rgba(147,197,253,0.5); border-radius:100px;
      padding:8px 16px; font-size:12px; font-weight:700; color:#2563EB;
    }
    .ab-footer-date-dot { width:7px; height:7px; border-radius:50%; background:#3B82F6; animation:ab-pulse 1.5s infinite; }
    @keyframes ab-pulse {
      0%,100% { opacity:1; transform:scale(1); }
      50% { opacity:0.5; transform:scale(0.7); }
    }

    .ab-fade-up { opacity:0; transform:translateY(28px); transition:opacity 0.7s ease, transform 0.7s ease; }
    .ab-fade-up.ab-visible { opacity:1; transform:translateY(0); }

    @media (max-width:768px) {
      .ab-footer-top { grid-template-columns:1fr; gap:32px; }
      .ab-footer-inner { padding:36px 28px 28px; }
      .ab-footer-bottom { flex-direction:column; align-items:flex-start; }
    }
    @media (max-width:640px) {
      .ab-hero { padding:50px 20px 40px; }
      .ab-glass-card { padding:28px 22px; border-radius:22px; }
      .ab-section { padding:0 16px 60px; }
      .ab-stats-row { grid-template-columns:repeat(2,1fr); }
      .ab-dais-grid { grid-template-columns:1fr; }
      .ab-contact-row { flex-direction:column; align-items:flex-start; }
      .ab-footer-wrap { padding:0 16px 40px; }
      .ab-social3d { width:52px; height:52px; border-radius:16px; }
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="ab-page">
        <div className="ab-orb ab-orb-1" />
        <div className="ab-orb ab-orb-2" />
        <div className="ab-orb ab-orb-3" />

        <header className="ab-hero">
          <div className="ab-hero-pill"><GraduationCap size={13} /> Student Counselling Services · IIT (BHU) Varanasi</div>
          <h1 className="ab-hero-title">About <em>SAKHA</em></h1>
          <span className="ab-hero-tagline">"Seek, Aspire, Know, Holistic Advancement"</span>
          <p className="ab-hero-desc">
            <strong>SAKHA</strong> - "Your Friend in Campus" : is a faculty - student body dedicated to the holistic development and wellbeing of students.
          </p>
          <div className="ab-hero-badges">
            <span className="ab-hero-badge"><MapPin size={14} /> IIT (BHU), Varanasi</span>
            <span className="ab-hero-badge"><Star size={14} /> Est. 2nd April, 2019</span>
            {/* <span className="ab-hero-badge"><Heart size={14} /> Mental Health &amp; Wellness</span> */}
          </div>
          <div className="ab-scroll-hint"><ChevronDown size={18} />Explore</div>
        </header>

        <div className="ab-section">
          <div className="ab-stats-row">
            <StatCard value={400}  suffix="+"  label="Sessions Conducted"   icon={<BookOpen size={20}/>}      color="#3B82F6" delay={0}   />
            <StatCard value={5000} suffix="+"  label="Counselling Sessions" icon={<Heart size={20}/>}         color="#F43F5E" delay={100} />
            <StatCard value={9000} suffix="+"  label="Students Benefited"   icon={<Users size={20}/>}         color="#10B981" delay={200} />
            <StatCard value={140}  suffix="+"  label="SAKHA Volunteers"     icon={<LucideTarget size={20}/>}      color="#A855F7" delay={300} />
            <StatCard value={10}   suffix=""   label="Faculty Coordinators" icon={<GraduationCap size={20}/>} color="#F97316" delay={400} />
          </div>
        </div>

        <div className="ab-section">
          <div className={`ab-glass-card ab-fade-up ${missionInView ? "ab-visible" : ""}`} ref={missionRef}>
            <p className="ab-eyebrow"><Lightbulb size={14} /> Motivation &amp; Goal</p>
            <h2 className="ab-title">Why This Workshop Matters</h2>
            <div className="ab-divider" />
            <p className="ab-body">
              Young adults and students constitute a vital human resource and play a central role in shaping the nation's future.
              Higher Educational Institutions serve not only as spaces for academic learning but also as environments where
              individuals develop <strong>resilience, emotional maturity, ethical grounding, and life skills</strong> essential for long-term wellbeing.
            </p>
            <br />
            <p className="ab-body">
              In alignment with the <strong>National Education Policy (NEP) 2020</strong>, which emphasises the intrinsic linkage
              between education and mental health, <strong>Student Counselling Services (SCS), IIT (BHU)</strong>, functioning as SAKHA - a supportive companion in students' academic and personal journeys - proposes to organise a
              <strong> Wellness &amp; Wellbeing Capacity-Building Workshop</strong>.
            </p>
            <div className="ab-nep-tag"><ShieldCheck size={13} /> Aligned with NEP 2020</div>
          </div>
        </div>

        <div className="ab-section">
          <div className="ab-glass-card">
            <p className="ab-eyebrow"><Brain size={14} /> Multi-Level Framework</p>
            <h2 className="ab-title">Our Mental Health Approach</h2>
            <div className="ab-divider" />
            <p className="ab-body">The programme adopts a <strong>multi-level mental health and wellbeing framework</strong> encompassing prevention, awareness, early intervention, and professional referral.</p>
            <div className="ab-framework-grid">
              {frameworks.map((f, i) => (
                <div key={i} className="ab-framework-item">
                  <div className="ab-fw-icon" style={{ background: f.color + "22", color: f.color }}>{f.icon}</div>
                  <div className="ab-fw-label">{f.label}</div>
                  <div className="ab-fw-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ab-section">
          <div className={`ab-glass-card ab-fade-up ${outcomeInView ? "ab-visible" : ""}`} ref={outcomeRef}>
            <p className="ab-eyebrow"><Target size={14} /> Outcomes</p>
            <h2 className="ab-title">What Participants Gain</h2>
            <div className="ab-divider" />
            <div className="ab-outcomes-grid">
              {outcomes.map((o, i) => (
                <div key={i} className="ab-outcome-item">
                  <div className="ab-outcome-icon" style={{ background: o.color + "22", color: o.color }}>{o.icon}</div>
                  <div className="ab-outcome-text">{o.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ab-section">
          <div className="ab-glass-card">
            <p className="ab-eyebrow"><Users size={14} /> Beneficiaries</p>
            <h2 className="ab-title">Who Attends the Workshop</h2>
            <div className="ab-divider" />
            <p className="ab-body">The workshop serves registered students. See the <a href="https://docs.google.com/spreadsheets/u/3/d/e/2PACX-1vRpsQPfOS0GmaZoYHaJVmjd9nUx3kxeEaS07IEo2mjyr5T5u3yrISEY0lhNoRGdCiSlab2uU-2twz0Y/pubhtml" className="text-blue-800 underline font-bold"> Students List </a></p>
            
            <p className="ab-body" style={{ marginTop: 20 }}>Additionally: Other Faculty Members, Research Students, Counsellors, and Psychologists.</p>
            <p className="text-red-900 italic" style={{marginTop: 20}}>*Note : The complete list will be updated soon.</p>
          </div>
        </div>

        <div className="ab-section">
          <div className={`ab-glass-card ab-fade-up ${venueInView ? "ab-visible" : ""}`} ref={venueRef}>
            <p className="ab-eyebrow"><MapPin size={14} /> Venue</p>
            <h2 className="ab-title">Workshop Locations</h2>
            <div className="ab-divider" />
            <div className="ab-venues-row">
              <a 
            href="https://maps.app.goo.gl/vgRxLdkkedWEfaHm8" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{textDecoration: "none"}}
            >
            <div className="ab-venue-pill"><MapPin size={18} style={{ color: "#F97316" }} /> D&V Lecture Hall, IIT(BHU), Varanasi</div>
            </a>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
