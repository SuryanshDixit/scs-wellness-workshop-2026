'use client'
import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Send, ChevronRight } from "lucide-react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');

  .ct-page {
    min-height: 100vh;
    background: linear-gradient(160deg, #EFF6FF 0%, #DBEAFE 40%, #BFDBFE 100%);
    font-family: 'DM Sans', sans-serif;
    position: relative;
    overflow-x: hidden;
  }

  .ct-orb { position: fixed; border-radius: 50%; filter: blur(90px); pointer-events: none; z-index: 0; }
  .ct-orb-1 { width:600px; height:600px; background:rgba(147,197,253,0.3);  top:-150px; left:-150px; }
  .ct-orb-2 { width:450px; height:450px; background:rgba(191,219,254,0.35); bottom:50px; right:-100px; }
  .ct-orb-3 { width:300px; height:300px; background:rgba(96,165,250,0.15);  top:50%; left:40%; }

  /* HERO */
  .ct-hero {
    position: relative; z-index: 1;
    text-align: center; padding: 72px 24px 48px;
  }
  .ct-pill {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(255,255,255,0.55); backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.9); border-radius: 100px;
    padding: 8px 20px; font-size: 11px; font-weight: 800;
    color: #2563EB; letter-spacing: 2px; text-transform: uppercase;
    margin-bottom: 24px; box-shadow: 0 4px 20px rgba(59,130,246,0.08);
  }
  .ct-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.8rem, 8vw, 5.5rem); font-weight: 800;
    color: #1E3A8A; line-height: 1.05; letter-spacing: -2px; margin-bottom: 16px;
  }
  .ct-hero-title em { font-style: italic; color: #3B82F6; }
  .ct-hero-sub {
    font-size: 16px; color: #64748B; max-width: 480px;
    margin: 0 auto; line-height: 1.7; font-weight: 400;
  }

  /* MAIN LAYOUT */
  .ct-main {
    position: relative; z-index: 1;
    max-width: 1000px; margin: 0 auto;
    padding: 0 20px 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  /* CONTACT CARDS — iOS grouped list style */
  .ct-cards-col { display: flex; flex-direction: column; gap: 14px; }

  .ct-group {
    background: rgba(255,255,255,0.62);
    backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(255,255,255,0.9);
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(59,130,246,0.07), inset 0 1px 0 rgba(255,255,255,0.95);
  }

  .ct-group-label {
    font-size: 11px; font-weight: 800; color: #94A3B8;
    text-transform: uppercase; letter-spacing: 2px;
    padding: 16px 20px 8px;
  }

  .ct-row {
    display: flex; align-items: center; gap: 14px;
    padding: 16px 20px; cursor: pointer;
    transition: background 0.18s;
    position: relative; text-decoration: none;
  }
  .ct-row:not(:last-child)::after {
    content: ''; position: absolute;
    bottom: 0; left: 68px; right: 0; height: 1px;
    background: rgba(147,197,253,0.25);
  }
  .ct-row:hover { background: rgba(219,234,254,0.35); }
  .ct-row:active { background: rgba(191,219,254,0.5); }

  .ct-row-icon {
    width: 42px; height: 42px; border-radius: 13px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  }

  .ct-row-content { flex: 1; min-width: 0; }
  .ct-row-label { font-size: 11px; font-weight: 700; color: #94A3B8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 2px; }
  .ct-row-value { font-size: 15px; font-weight: 600; color: #1E3A8A; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .ct-row-sub { font-size: 12px; color: #64748B; margin-top: 1px; }

  .ct-row-arrow { color: #CBD5E1; flex-shrink: 0; }

  /* BIG CARD */
  .ct-big-card {
    background: rgba(255,255,255,0.62);
    backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(255,255,255,0.9);
    border-radius: 24px;
    padding: 28px 24px;
    box-shadow: 0 8px 32px rgba(59,130,246,0.07), inset 0 1px 0 rgba(255,255,255,0.95);
    position: relative; overflow: hidden;
  }
  .ct-big-card::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 100%);
    pointer-events: none;
  }

  .ct-map-placeholder {
    width: 100%; height: 160px; border-radius: 18px;
    background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 50%, #93C5FD 100%);
    margin-bottom: 18px; position: relative; overflow: hidden;
    display: flex; align-items: center; justify-content: center;
    border: 1px solid rgba(147,197,253,0.4);
  }
  .ct-map-pin {
    width: 44px; height: 44px; border-radius: 50%;
    background: white;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 6px 24px rgba(59,130,246,0.25), 0 0 0 8px rgba(59,130,246,0.12);
  }
  .ct-map-ring {
    position: absolute; border-radius: 50%;
    border: 1px solid rgba(59,130,246,0.2);
    animation: ct-ring-pulse 2.5s ease-out infinite;
  }
  .ct-map-ring-1 { width: 80px; height: 80px; animation-delay: 0s; }
  .ct-map-ring-2 { width: 130px; height: 130px; animation-delay: 0.6s; }
  .ct-map-ring-3 { width: 180px; height: 180px; animation-delay: 1.2s; }
  @keyframes ct-ring-pulse {
    0% { opacity: 0.8; transform: scale(0.8); }
    100% { opacity: 0; transform: scale(1.3); }
  }
  /* Map grid lines */
  .ct-map-placeholder::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(147,197,253,0.3) 1px, transparent 1px),
      linear-gradient(90deg, rgba(147,197,253,0.3) 1px, transparent 1px);
    background-size: 32px 32px;
  }

  .ct-address-text { font-size: 15px; font-weight: 700; color: #1E3A8A; margin-bottom: 4px; }
  .ct-address-sub { font-size: 13px; color: #64748B; line-height: 1.6; }

  .ct-directions-btn {
    display: inline-flex; align-items: center; gap: 6px;
    margin-top: 14px; padding: 10px 18px; border-radius: 12px;
    background: rgba(59,130,246,0.1); border: 1px solid rgba(147,197,253,0.4);
    font-size: 13px; font-weight: 700; color: #2563EB;
    cursor: pointer; transition: background 0.2s, transform 0.15s;
    text-decoration: none;
  }
  .ct-directions-btn:hover { background: rgba(59,130,246,0.15); transform: translateY(-2px); }

  /* FORM PANEL */
  .ct-form-col { display: flex; flex-direction: column; gap: 14px; }

  .ct-form-card {
    background: rgba(255,255,255,0.62);
    backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(255,255,255,0.9);
    border-radius: 24px; padding: 28px 24px;
    box-shadow: 0 8px 32px rgba(59,130,246,0.07), inset 0 1px 0 rgba(255,255,255,0.95);
    position: relative; overflow: hidden;
    flex: 1;
  }
  .ct-form-card::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 100%);
    pointer-events: none;
  }

  .ct-form-title {
    font-family: 'Playfair Display', serif;
    font-size: 22px; font-weight: 800; color: #1E3A8A;
    margin-bottom: 6px;
  }
  .ct-form-sub { font-size: 13px; color: #64748B; margin-bottom: 22px; line-height: 1.5; }

  .ct-field { margin-bottom: 14px; position: relative; }
  .ct-field-label {
    font-size: 11px; font-weight: 800; color: #94A3B8;
    text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 6px; display: block;
  }
  .ct-field input, .ct-field textarea {
    width: 100%; padding: 13px 16px;
    background: rgba(241,245,249,0.7);
    border: 1.5px solid rgba(203,213,225,0.6);
    border-radius: 14px; font-size: 15px; font-weight: 500;
    color: #1E3A8A; font-family: 'DM Sans', sans-serif;
    transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
    outline: none; resize: none;
    -webkit-appearance: none;
  }
  .ct-field input:focus, .ct-field textarea:focus {
    border-color: #60A5FA;
    background: rgba(255,255,255,0.9);
    box-shadow: 0 0 0 4px rgba(96,165,250,0.15);
  }
  .ct-field input::placeholder, .ct-field textarea::placeholder { color: #CBD5E1; }

  .ct-submit {
    width: 100%; padding: 15px;
    background: linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%);
    border: none; border-radius: 16px;
    font-size: 15px; font-weight: 800; color: white;
    cursor: pointer; font-family: 'DM Sans', sans-serif;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    box-shadow: 0 6px 24px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.2);
    transition: transform 0.2s, box-shadow 0.2s;
    position: relative; overflow: hidden;
  }
  .ct-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 32px rgba(59,130,246,0.45), inset 0 1px 0 rgba(255,255,255,0.2);
  }
  .ct-submit:active { transform: translateY(0); }
  .ct-submit-shine {
    position: absolute; top: 0; left: 0; width: 60%; height: 50%;
    background: linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%);
    border-radius: 16px 0 0 0; pointer-events: none;
  }

  /* SUCCESS */
  .ct-success {
    text-align: center; padding: 32px 20px;
  }
  .ct-success-icon {
    width: 64px; height: 64px; border-radius: 20px;
    background: linear-gradient(135deg, #10B981, #059669);
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 16px;
    box-shadow: 0 8px 24px rgba(16,185,129,0.3);
    font-size: 28px;
  }
  .ct-success-title { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 800; color: #1E3A8A; margin-bottom: 6px; }
  .ct-success-sub { font-size: 14px; color: #64748B; }

  /* HOURS CARD */
  .ct-hours-card {
    background: linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 100%);
    border-radius: 24px; padding: 24px;
    box-shadow: 0 12px 40px rgba(29,78,216,0.3), inset 0 1px 0 rgba(255,255,255,0.15);
    position: relative; overflow: hidden;
  }
  .ct-hours-card::before {
    content: ''; position: absolute; top: -40px; right: -40px;
    width: 160px; height: 160px; border-radius: 50%;
    background: rgba(255,255,255,0.05);
  }
  .ct-hours-card::after {
    content: ''; position: absolute; bottom: -20px; left: -20px;
    width: 100px; height: 100px; border-radius: 50%;
    background: rgba(255,255,255,0.04);
  }
  .ct-hours-title { font-size: 11px; font-weight: 800; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 14px; }
  .ct-hours-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .ct-hours-row:last-child { border-bottom: none; }
  .ct-hours-day { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.7); }
  .ct-hours-time { font-size: 13px; font-weight: 700; color: white; }
  .ct-hours-badge {
    display: inline-flex; align-items: center; gap: 5px;
    background: rgba(16,185,129,0.2); border: 1px solid rgba(16,185,129,0.3);
    border-radius: 100px; padding: 3px 10px; font-size: 11px; font-weight: 700; color: #6EE7B7;
    margin-bottom: 16px;
  }
  .ct-hours-dot { width: 6px; height: 6px; border-radius: 50%; background: #10B981; animation: ct-blink 1.5s infinite; }
  @keyframes ct-blink { 0%,100%{opacity:1;} 50%{opacity:0.3;} }

  /* FADE IN */
  .ct-fade { animation: ct-fadeup 0.6s ease both; }
  .ct-fade-1 { animation-delay: 0.05s; }
  .ct-fade-2 { animation-delay: 0.12s; }
  .ct-fade-3 { animation-delay: 0.19s; }
  .ct-fade-4 { animation-delay: 0.26s; }
  @keyframes ct-fadeup {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* MOBILE */
  @media (max-width: 700px) {
    .ct-main { grid-template-columns: 1fr; }
    .ct-hero-title { font-size: 2.4rem; }
    .ct-hero { padding: 48px 20px 32px; }
  }
`;

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <style>{css}</style>
      <div className="ct-page">
        <div className="ct-orb ct-orb-1" />
        <div className="ct-orb ct-orb-2" />
        <div className="ct-orb ct-orb-3" />

        {/* HERO */}
        <header className="ct-hero">
          <div className="ct-pill">✦ Get in Touch</div>
          <h1 className="ct-hero-title">Let's <em>Connect</em></h1>
          <p className="ct-hero-sub">
            Reach out to SAKHA — we're here to support your college journey in IIT (BHU).
          </p>
        </header>

        <div className="ct-main">

          {/* LEFT COL */}
          <div className="ct-cards-col">

            {/* Contact Info Group */}
            <div className={`ct-group ct-fade ct-fade-1`}>
              <div className="ct-group-label">Contact</div>

              <a href="mailto:sakha.scs@iitbhu.ac.in" className="ct-row">
                <div className="ct-row-icon" style={{ background: "linear-gradient(135deg,#3B82F6,#1D4ED8)" }}>
                  <Mail size={20} color="white" />
                </div>
                <div className="ct-row-content">
                  <div className="ct-row-label">Email</div>
                  <div className="ct-row-value">sakha.scs@iitbhu.ac.in</div>
                </div>
                <ArrowUpRight size={16} className="ct-row-arrow" />
              </a>

              <a href="tel:+915422368106" className="ct-row">
                <div className="ct-row-icon" style={{ background: "linear-gradient(135deg,#10B981,#059669)" }}>
                  <Phone size={20} color="white" />
                </div>
                <div className="ct-row-content">
                  <div className="ct-row-label">Phone</div>
                  <div className="ct-row-value">+91 89790 08483</div>
                  <div className="ct-row-sub">Student Counselling Services</div>
                </div>
                <ArrowUpRight size={16} className="ct-row-arrow" />
              </a>
            </div>

            {/* Location Big Card */}
            <div className={`ct-big-card ct-fade ct-fade-2`}>
              <div className="ct-map-placeholder">
                <div className="ct-map-ring ct-map-ring-1" />
                <div className="ct-map-ring ct-map-ring-2" />
                <div className="ct-map-ring ct-map-ring-3" />
                <div className="ct-map-pin">
                  <MapPin size={22} color="#2563EB" />
                </div>
              </div>
              <div className="ct-address-text">IIT (BHU), Varanasi</div>
              <div className="ct-address-sub">
                Indian Institute of Technology (BHU)<br />
                Varanasi, Uttar Pradesh — 221 005<br />
                India
              </div>
              <a
                href="https://maps.google.com/?q=IIT+BHU+Varanasi"
                target="_blank"
                rel="noreferrer"
                className="ct-directions-btn"
              >
                <MapPin size={14} /> Get Directions <ArrowUpRight size={13} />
              </a>
            </div>

           
          </div>

          {/* RIGHT COL — Form */}
          <div className="ct-form-col">
           

            {/* Quick links group */}
            <div className={`ct-group ct-fade ct-fade-4`}>
              <div className="ct-group-label">Quick Links</div>
              {[
                { label: "About SAKHA",     sub: "Our mission & team",     href: "/about"    },
                { label: "Workshop Schedule", sub: "20–22 March 2026",      href: "/schedule" },
                { label: "Meet the Speakers", sub: "Expert faculty lineup", href: "/speakers" },
              ].map((l, i) => (
                <a key={i} href={l.href} className="ct-row">
                  <div className="ct-row-icon" style={{ background: "rgba(219,234,254,0.8)", border: "1px solid rgba(147,197,253,0.4)" }}>
                    <ChevronRight size={18} color="#2563EB" />
                  </div>
                  <div className="ct-row-content">
                    <div className="ct-row-value">{l.label}</div>
                    <div className="ct-row-sub">{l.sub}</div>
                  </div>
                  <ArrowUpRight size={15} className="ct-row-arrow" />
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
