'use client'
import React, { useState, useEffect } from "react";
import {
  User, MapPin, ChevronRight, X,
  Sparkles, Calendar, Users, GraduationCap, BookOpen,
  Sunrise, Sun, Star, FlaskConical, Heart, Coffee,
  Link
} from "lucide-react";

export default function WellnessDrawerSchedule() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    if (selectedDay) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedDay]);

  const scheduleData = [
    {
      id: 0,
      date: "March 20",
      label: "Pre-Event",
      theme: "Wellness Stall & Collaboration",
      audience: "All students, faculty & staff",
      icon: <Sparkles size={28} color="#A855F7" />,
      accentColor: "#60A5FA",
      events: [
        {
          time: "Full Day",
          title: "YourDOST Wellness Stall",
          speaker: "Collaborative with YourDOST",
          desc: "Lively, stress-free space offering relaxation activities and self-expression.",
          icon: <Heart size={16} color="#F43F5E" fill="#FFE4E9" />,
          pillBg: "rgba(244,63,94,0.1)",
        },
      ],
    },
    {
      id: 1,
      date: "March 21",
      label: "Day 01",
      theme: "Level I & II: Essentials of Mental Wellbeing",
      audience: "Registered Students, Faculty, Wellness Wardens & Scholars",
      icon: <Sunrise size={28} color="#F97316" />,
      accentColor: "#3B82F6",
      events: [
        { time: "09:30 AM", title: "Inaugural Ceremony",                        speaker: "Director & Dignitaries",      icon: <Star          size={16} color="#EAB308" fill="#FEF08A" />, pillBg: "rgba(234,179,8,0.12)"   },
        { time: "10:30 AM", title: "Tea Break",              isBreak: true,                                             icon: <Coffee        size={16} color="#92400E" />,                 pillBg: "rgba(146,64,14,0.10)"  },
        { time: "11:00 AM", title: "Session-I: Mental Wellbeing & Campus Climate Building", speaker: "Prof. SK Chaturvedi",  icon: <BookOpen      size={16} color="#6366F1" />,                 pillBg: "rgba(99,102,241,0.10)" },
        { time: "12:00 PM", title: "Discussion & Activities in Session I",                                                           icon: <Users         size={16} color="#0EA5E9" />,                 pillBg: "rgba(14,165,233,0.10)" },
        { time: "01:00 PM", title: "Lunch Break",           isBreak: true,                                             icon: <Coffee        size={16} color="#92400E" />,                 pillBg: "rgba(146,64,14,0.10)"  },
        { time: "02:30 PM", title: "Session-II: Understanding Mental Health: Knowledge, Attitudes & Healthy Practice",            speaker: "Dr. Lokendra Sharma",            icon: <BookOpen      size={16} color="#6366F1" />,                 pillBg: "rgba(99,102,241,0.10)" },
        { time: "3:30 PM", title: "Discussion & Activities",
          icon: <Users size={16} color="#0EA5E9" />,
          pillBg: "rgba(14,165,233,0.10)" },
        { time: "4:30 PM", title: "Tea Break",
          isBreak:true,
          icon: <Coffee size={16} color="#92400E" />,
          pillBg: "rgba(146,64,14,0.10)"},
        { time: "05:00 PM", title: "Panel Discussion-I",
          speaker: "Prof. Shantanu Misra",
          icon: <FlaskConical  size={16} color="#10B981" />,
          pillBg: "rgba(16,185,129,0.10)" },
      ],
    },
    {
      id: 2,
      date: "March 22",
      label: "Day 02",
      theme: "Level III & IV: Secondary Prevention and Professional Intervention",
      audience: "SAKHA Students (70), Faculty Coordinators (11) & Interns",
      icon: <Sun size={28} color="#FBBF24" fill="#FEF9C3" />,
      accentColor: "#1D4ED8",
      events: [
        { time: "10:30 AM", title: "Session-III: Early Identification & Support",      speaker: "Dr. Jitendra Nagpal", icon: <BookOpen      size={16} color="#6366F1" />, pillBg: "rgba(99,102,241,0.10)" },
        { time: "11:30 AM", title: "Activities",      speaker: "Dr. Geeta Mehrotra", icon: <Users         size={16} color="#0EA5E9" />, pillBg: "rgba(99,102,241,0.10)" },
        { time: "1:30 PM", title: "Lunch Break",              isBreak: true,                                  icon: <Coffee        size={16} color="#92400E" />, pillBg: "rgba(146,64,14,0.10)"  },
        { time: "02:30 PM", title: "Session-IV: Professional Management",    speaker: "Dr. Y.P. Balhara",   icon: <GraduationCap size={16} color="#8B5CF6" />, pillBg: "rgba(139,92,246,0.10)" },
        { time: "03:30 PM", title: "Guest Talk by Book Author",    speaker: "Krithika Chandrasekar",   icon: <BookOpen      size={16} color="#F97316" />, pillBg: "rgba(249,115,22,0.10)" },
        { time: "4:30 PM", title: "Tea Break",              isBreak: true,                                  icon: <Coffee        size={16} color="#92400E" />, pillBg: "rgba(146,64,14,0.10)"  },
        { time: "05:00 PM", title: "Panel Discussion & Closing Ceremony", desc: "Redefining Academic Excellence: Integrating Emotional Wellbeing into HEI Ecosystems",                                icon: <Users         size={16} color="#0EA5E9" />, pillBg: "rgba(14,165,233,0.10)" },
        
      ],
    },
  ];

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap');

    .sw-page-wrap {
      min-height: 100vh;
      background: linear-gradient(160deg, #EFF6FF 0%, #DBEAFE 40%, #BFDBFE 100%);
      position: relative;
      overflow-x: hidden;
      font-family: 'DM Sans', sans-serif;
    }

    .sw-orb { position: fixed; border-radius: 50%; filter: blur(80px); pointer-events: none; z-index: 0; }
    .sw-orb-1 { width:500px; height:500px; background:rgba(147,197,253,0.35); top:-100px; left:-100px; }
    .sw-orb-2 { width:400px; height:400px; background:rgba(191,219,254,0.40); bottom:100px; right:-80px; }
    .sw-orb-3 { width:300px; height:300px; background:rgba(96,165,250,0.20); top:40%; left:50%; transform:translateX(-50%); }

    /* ── HEADER ── */
    .sw-header { position:relative; z-index:1; text-align:center; padding:60px 20px 80px; }

    .sw-header-glass {
      background:rgba(255,255,255,0.45); backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px);
      border:1px solid rgba(255,255,255,0.8); border-radius:20px; padding:10px 22px;
      font-size:11px; font-weight:700; color:#2563EB; letter-spacing:2px; text-transform:uppercase;
      margin:0 auto 20px; display:flex; align-items:center; gap:8px; width:fit-content;
      box-shadow:0 4px 20px rgba(59,130,246,0.08);
    }
    .sw-header-title {
      font-family:'Playfair Display',serif; font-size:clamp(2.4rem,7vw,4.5rem); font-weight:800;
      color:#1E3A8A; line-height:1.1; letter-spacing:-1px; margin-bottom:12px;
    }
    .sw-header-subtitle {
      font-size:15px; color:#3B82F6; font-weight:500; margin:0 auto 24px; margin-top:10px;
      max-width:560px; line-height:1.6;
    }
    .sw-header-badge {
      display:inline-flex; align-items:center; gap:8px;
      background:rgba(255,255,255,0.55); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px);
      border:1px solid rgba(255,255,255,0.9); border-radius:100px; padding:10px 20px;
      font-size:13px; font-weight:600; color:#1D4ED8;
      box-shadow:0 4px 20px rgba(59,130,246,0.10), inset 0 1px 0 rgba(255,255,255,0.9);
    }

    /* ── MAIN ── */
    .sw-main { position:relative; z-index:1; max-width:1100px; margin:0 auto; padding:0 20px 40px; }
    .sw-section-label {
      text-align:center; color:#60A5FA; font-size:11px; font-weight:800;
      letter-spacing:3px; text-transform:uppercase; margin-bottom:28px;
    }
    .sw-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:24px; }

    /* ── CARD ── */
    .sw-card {
      background:rgba(255,255,255,0.55); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px);
      border:1px solid rgba(255,255,255,0.85); border-radius:28px; padding:32px;
      cursor:pointer; transition:transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease;
      box-shadow:0 8px 32px rgba(59,130,246,0.08), inset 0 1px 0 rgba(255,255,255,0.9);
      position:relative; overflow:hidden;
    }
    .sw-card::before {
      content:''; position:absolute; inset:0;
      background:linear-gradient(135deg,rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.1) 100%);
      border-radius:28px; pointer-events:none;
    }
    .sw-card:hover {
      transform:translateY(-8px) scale(1.01);
      box-shadow:0 24px 60px rgba(59,130,246,0.15), inset 0 1px 0 rgba(255,255,255,0.9);
    }
    .sw-card-icon-wrap {
      width:56px; height:56px; border-radius:16px;
      background:rgba(219,234,254,0.8); backdrop-filter:blur(8px);
      display:flex; align-items:center; justify-content:center; margin-bottom:20px;
      border:1px solid rgba(255,255,255,0.9); box-shadow:0 4px 16px rgba(59,130,246,0.12);
    }
    .sw-card-label { font-size:11px; font-weight:800; color:#3B82F6; text-transform:uppercase; letter-spacing:2px; margin-bottom:6px; }
    .sw-card-date  { font-family:'Playfair Display',serif; font-size:28px; font-weight:800; color:#1E3A8A; margin-bottom:10px; }
    .sw-card-theme { font-size:14px; color:#475569; line-height:1.55; margin-bottom:24px; }
    .sw-card-footer { display:flex; align-items:center; gap:6px; font-size:13px; font-weight:700; color:#2563EB; }
    .sw-card-footer svg { transition:transform 0.2s; }
    .sw-card:hover .sw-card-footer svg { transform:translateX(4px); }

    /* ── BACKDROP ── */
    .sw-backdrop {
      position:fixed; inset:0; background:rgba(30,58,138,0.2);
      backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
      z-index:1000; transition:opacity 0.4s ease, visibility 0.4s ease;
    }
    .sw-backdrop-hidden  { opacity:0; visibility:hidden; pointer-events:none; }
    .sw-backdrop-visible { opacity:1; visibility:visible; }

    /* ── DRAWER ── */
    .sw-drawer {
      position:fixed; top:0; right:0; bottom:0; width:100%; max-width:520px;
      background:rgba(255,255,255,0.78); backdrop-filter:blur(40px); -webkit-backdrop-filter:blur(40px);
      border-left:1px solid rgba(255,255,255,0.9); box-shadow:-20px 0 80px rgba(59,130,246,0.12);
      display:flex; flex-direction:column; z-index:1001;
      transition:transform 0.5s cubic-bezier(0.16,1,0.3,1); overflow:hidden;
      border-radius:32px 0 0 32px;
    }
    .sw-drawer-closed { transform:translateX(100%); }
    .sw-drawer-open   { transform:translateX(0); }
    .sw-drawer::before {
      content:''; position:absolute; top:0; left:0; right:0; height:1px;
      background:linear-gradient(90deg,transparent,rgba(255,255,255,0.9),transparent);
      pointer-events:none;
    }

    .sw-drawer-header {
      padding:36px 36px 28px; border-bottom:1px solid rgba(219,234,254,0.6);
      position:relative; background:rgba(255,255,255,0.4); flex-shrink:0;
    }
    .sw-close-btn {
      position:absolute; top:20px; right:20px; width:40px; height:40px; border-radius:50%;
      background:rgba(219,234,254,0.7); border:1px solid rgba(255,255,255,0.9);
      display:flex; align-items:center; justify-content:center;
      cursor:pointer; color:#2563EB; transition:background 0.2s, transform 0.2s; backdrop-filter:blur(8px);
    }
    .sw-close-btn:hover { background:rgba(191,219,254,0.9); transform:rotate(90deg); }

    .sw-drawer-day-label { font-size:11px; font-weight:800; color:#3B82F6; text-transform:uppercase; letter-spacing:2px; margin-bottom:8px; display:block; }
    .sw-drawer-date  { font-family:'Playfair Display',serif; font-size:36px; font-weight:800; color:#1E3A8A; margin-bottom:6px; }
    .sw-drawer-theme { font-size:14px; color:#475569; line-height:1.5; }

    .sw-drawer-body { padding:32px 36px; overflow-y:auto; flex:1; }
    .sw-drawer-body::-webkit-scrollbar { width:4px; }
    .sw-drawer-body::-webkit-scrollbar-track { background:transparent; }
    .sw-drawer-body::-webkit-scrollbar-thumb { background:rgba(147,197,253,0.5); border-radius:4px; }

    /* ── TIMELINE ── */
    .sw-event-item { display:flex; gap:18px; margin-bottom:28px; position:relative; }
    .sw-event-item:last-of-type { margin-bottom:0; }
    .sw-event-line {
      position:absolute; left:88px; top:28px; bottom:-28px; width:1px;
      background:linear-gradient(to bottom,rgba(147,197,253,0.5),transparent);
    }
    .sw-event-item:last-of-type .sw-event-line { display:none; }

    .sw-event-time-col { min-width:80px; text-align:right; flex-shrink:0; padding-top:6px; }
    .sw-event-time { font-size:12px; font-weight:800; color:#3B82F6; line-height:1; }

    .sw-event-dot-col { display:flex; flex-direction:column; align-items:center; }
    .sw-event-dot {
      width:14px; height:14px; border-radius:50%; background:white;
      border:2px solid #60A5FA; flex-shrink:0; margin-top:6px;
      box-shadow:0 0 0 4px rgba(96,165,250,0.15);
    }
    .sw-event-dot-break { border-color:#FBBF24; background:#FFFBEB; box-shadow:0 0 0 4px rgba(251,191,36,0.15); }

    .sw-event-details { flex:1; }

    .sw-event-card {
      background:rgba(255,255,255,0.65); border:1px solid rgba(219,234,254,0.8);
      border-radius:16px; padding:14px 16px; backdrop-filter:blur(8px);
      box-shadow:0 2px 12px rgba(59,130,246,0.06); transition:transform 0.2s, box-shadow 0.2s;
    }
    .sw-event-card-break { background:rgba(255,251,235,0.65); border-color:rgba(253,230,138,0.55); }
    .sw-event-card:hover { transform:translateX(4px); box-shadow:0 4px 20px rgba(59,130,246,0.1); }

    .sw-event-title-row { display:flex; align-items:center; gap:10px; }

    .sw-icon-pill {
      width:30px; height:30px; border-radius:9px;
      display:flex; align-items:center; justify-content:center; flex-shrink:0;
    }

    .sw-event-title { font-size:14px; font-weight:700; color:#1E3A8A; line-height:1.3; }
    .sw-event-title-break { color:#92400E; font-weight:600; }

    .sw-event-speaker { display:flex; align-items:center; gap:6px; font-size:12px; color:#64748B; font-weight:500; margin-top:8px; }
    .sw-event-desc { font-size:12px; color:#94A3B8; line-height:1.5; margin-top:6px; }

    /* ── AUDIENCE BOX ── */
    .sw-audience-box {
      margin-top:28px; background:rgba(219,234,254,0.4); backdrop-filter:blur(8px);
      border:1px solid rgba(191,219,254,0.6); border-radius:18px;
      padding:20px 22px; font-size:13px; color:#334155; line-height:1.6;
    }
    .sw-audience-label { font-size:10px; font-weight:800; color:#3B82F6; text-transform:uppercase; letter-spacing:2px; margin-bottom:6px; display:flex; align-items:center; gap:6px; }

    /* ── FOOTER ── */
    .sw-footer { position:relative; z-index:1; text-align:center; padding:40px 20px; }
    .sw-footer-glass {
      display:inline-block; background:rgba(255,255,255,0.45); backdrop-filter:blur(16px);
      border:1px solid rgba(255,255,255,0.8); border-radius:100px; padding:14px 30px;
      font-size:13px; color:#2563EB; font-weight:500; box-shadow:0 4px 20px rgba(59,130,246,0.08);
    }
    .sw-footer-sanskrit { font-family:'Playfair Display',serif; font-style:italic; font-size:15px; color:#1D4ED8; font-weight:700; display:block; margin-bottom:4px; }

    /* ── MOBILE ── */
    @media (max-width:600px) {
      .sw-header { padding:40px 16px 60px; }
      .sw-header-title { font-size:2rem; }
      .sw-main { padding:0 14px 60px; }
      .sw-grid { grid-template-columns:1fr; gap:16px; }
      .sw-card { padding:24px; border-radius:22px; }
      .sw-drawer { max-width:100%; border-radius:24px 24px 0 0; top:auto; height:90vh; }
      .sw-drawer-closed { transform:translateY(100%); }
      .sw-drawer-open   { transform:translateY(0); }
      .sw-drawer-header { padding:24px 24px 20px; }
      .sw-drawer-date   { font-size:28px; }
      .sw-drawer-body   { padding:24px; }
      .sw-event-time-col { min-width:60px; }
      .sw-event-time { font-size:10px; }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="sw-page-wrap">
        <div className="sw-orb sw-orb-1" />
        <div className="sw-orb sw-orb-2" />
        <div className="sw-orb sw-orb-3" />

        {/* HEADER */}
        <header className="sw-header">
          <div className="sw-header-glass">
            <GraduationCap size={14} color="#2563EB" />
            Student Counselling Services · IIT (BHU), Varanasi
          </div>
          <h1 className="sw-header-title">Wellness Workshop<br />2026</h1>
          <a 
            href="https://maps.app.goo.gl/vgRxLdkkedWEfaHm8" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{textDecoration: "none"}}
          >
            <div className="sw-header-badge" style={{cursor: "pointer"}}>
              <MapPin size={15} color="#1D4ED8" />
              Venue: D & V Lecture Hall, IIT(BHU), Varanasi
            </div>
          </a>
          <p className="sw-header-subtitle">
            The programme follows a structured three-day design, wherein each day is dedicated to a distinct level of intervention as follows:
          </p>
        </header>

        {/* GRID */}
        <main className="sw-main">
          <p className="sw-section-label">Select a date to view schedule</p>
          <div className="sw-grid">
            {scheduleData.map((day) => (
              <div
                key={day.id}
                className="sw-card"
                onClick={() => setSelectedDay(day)}
                onMouseEnter={() => setHoveredCard(day.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="sw-card-icon-wrap">{day.icon}</div>
                <div className="sw-card-label">{day.label}</div>
                <h2 className="sw-card-date">{day.date}</h2>
                <p className="sw-card-theme">{day.theme}</p>
                <div className="sw-card-footer">
                  <Calendar size={14} color="#2563EB" />
                  View Schedule
                  <ChevronRight size={16} color="#2563EB" />
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* FOOTER */}
        <footer className="sw-footer">
          <div className="sw-footer-glass">
            <span className="sw-footer-sanskrit">"आयुष् एवं चैतन्य की ओर"</span>
            sakha.scs@iitbhu.ac.in
          </div>
        </footer>

        {/* BACKDROP */}
        <div
          className={`sw-backdrop ${selectedDay ? "sw-backdrop-visible" : "sw-backdrop-hidden"}`}
          onClick={() => setSelectedDay(null)}
        />

        {/* DRAWER */}
        <div className={`sw-drawer ${selectedDay ? "sw-drawer-open" : "sw-drawer-closed"}`}>
          {selectedDay && (
            <>
              <div className="sw-drawer-header">
                <button className="sw-close-btn" onClick={() => setSelectedDay(null)}>
                  <X size={18} />
                </button>
                <span className="sw-drawer-day-label">{selectedDay.label}</span>
                <h2 className="sw-drawer-date">{selectedDay.date}</h2>
                <p className="sw-drawer-theme">{selectedDay.theme}</p>
              </div>

              <div className="sw-drawer-body">
                {selectedDay.events.map((ev, i) => (
                  <div key={i} className="sw-event-item">
                    <div className="sw-event-time-col">
                      <span className="sw-event-time">{ev.time}</span>
                    </div>
                    <div className="sw-event-dot-col">
                      <div className={`sw-event-dot ${ev.isBreak ? "sw-event-dot-break" : ""}`} />
                      <div className="sw-event-line" />
                    </div>
                    <div className="sw-event-details">
                      <div className={`sw-event-card ${ev.isBreak ? "sw-event-card-break" : ""}`}>
                        <div className="sw-event-title-row">
                          {ev.icon && (
                            <span className="sw-icon-pill" style={{ background: ev.pillBg }}>
                              {ev.icon}
                            </span>
                          )}
                          <span className={`sw-event-title ${ev.isBreak ? "sw-event-title-break" : ""}`}>
                            {ev.title}
                          </span>
                        </div>
                        {ev.speaker && (
                          <div className="sw-event-speaker">
                            <User size={12} color="#64748B" />
                            {ev.speaker}
                          </div>
                        )}
                        {ev.desc && <p className="sw-event-desc">{ev.desc}</p>}
                      </div>
                    </div>
                  </div>
                ))}

                {/* <div className="sw-audience-box">
                  <div className="sw-audience-label">
                    <Users size={12} color="#3B82F6" />
                    Target Audience
                  </div>
                  {selectedDay.audience}
                </div> */}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}