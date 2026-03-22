'use client'

import { useState } from "react"
import Image from "next/image"

// ─── Add your sessions here ───────────────────────────────────
// For each session, add the speaker details and the PDF path
// Place your PDFs in /public/repository/ folder
// e.g. image: "/speakers/Dr-Jitendra-Nagpal.jpg"
//      pdf:   "/repository/session1.pdf"
const sessions = [
  {
    speaker: "Prof. S.K. Chaturvedi",
    role: "Former Dean, Behavioral Sciences",
    org: "NIMHANS, Bangalore",
    image: "/speakers/SKC September 2024.JPG",
    session: "Essentials of Mental Wellbeing and a Healthy Supportive Ecosystem for Students in Professional Courses",
    date: "21st March 2026",
    pdf: "/repositories/Essentials of Mental Wellbeing and a Healthy Supportive Ecosystem for Students in Professional Courses.pdf",
  },
 
  {
    speaker: "Prof. Santanu Misra",
    role: "Head of Institute Counselling Service",
    org: "IIT Kanpur",
    image: "/speakers/WhatsApp Image 2026-03-14 at 8.02.03 PM.jpeg",
    session: "Wellbeing across the IIT system",
    date: "22nd March 2026",
    pdf: "/repositories/IIT_BHU_WellnessWorkshop_Mar26.pdf",
  },
  
]

function SessionCard({ session, onView }) {
  return (
    <div className="repo-card">
      {/* Speaker info row */}
      <div className="repo-card-top">
        <div className="repo-card-img-wrap">
          <Image
            src={session.image}
            alt={session.speaker}
            fill
            className="object-cover"
          />
        </div>
        <div className="repo-card-speaker">
          <p className="repo-speaker-name">{session.speaker}</p>
          <p className="repo-speaker-role">{session.role}</p>
          {session.org && <p className="repo-speaker-org">{session.org}</p>}
        </div>
      </div>

      {/* Session info */}
      <div className="repo-card-body">
        <p className="repo-session-label">Session</p>
        <p className="repo-session-name">{session.session}</p>
        <p className="repo-session-date">📅 {session.date}</p>
      </div>

      {/* Actions */}
      <div className="repo-card-actions">
        <button
          className="repo-btn-view"
          onClick={() => onView(session)}
        >
          📖 View PDF
        </button>
        <a
          href={session.pdf}
          download
          className="repo-btn-download"
        >
          ⬇ Download
        </a>
      </div>
    </div>
  )
}

function PdfModal({ session, onClose }) {
  if (!session) return null
  return (
    <div className="repo-modal-backdrop" onClick={onClose}>
      <div className="repo-modal" onClick={(e) => e.stopPropagation()}>
        {/* Modal header */}
        <div className="repo-modal-header">
          <div>
            <p className="repo-modal-title">{session.session}</p>
            <p className="repo-modal-sub">{session.speaker} · {session.org}</p>
          </div>
          <button className="repo-modal-close" onClick={onClose}>✕</button>
        </div>
        {/* PDF embed */}
        <div className="repo-modal-body">
          <iframe
            src={`https://docs.google.com/viewer?url=${encodeURIComponent(
              `https://scswellnessworkshop2026.com${session.pdf}`
            )}&embedded=true`}
            className="repo-pdf-iframe"
            title={session.session}
          />
        </div>
        {/* Modal footer */}
        <div className="repo-modal-footer">
          <a href={session.pdf} download className="repo-btn-download">
            ⬇ Download PDF
          </a>
          <button className="repo-btn-close-text" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default function RepositoryPage() {
  const [activeSession, setActiveSession] = useState(null)

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(160deg, #EFF6FF 0%, #DBEAFE 40%, #BFDBFE 100%)" }}>

      <style>{`
        /* ── Page layout ── */
        .repo-page { max-width: 1200px; margin: 0 auto; padding: 60px 24px 80px; }

        /* ── Header ── */
        .repo-header { text-align: center; margin-bottom: 56px; }
        .repo-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.5); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.85); border-radius: 100px;
          padding: 9px 20px; font-size: 11px; font-weight: 800; color: #2563EB;
          letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px;
          box-shadow: 0 4px 20px rgba(59,130,246,0.1);
        }
        .repo-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800; color: #1E3A8A;
          line-height: 1.1; letter-spacing: -1px; margin-bottom: 14px;
        }
        .repo-subtitle {
          font-size: 16px; color: #475569;
          max-width: 560px; margin: 0 auto; line-height: 1.7;
        }

        /* ── Grid ── */
        .repo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }

        /* ── Card ── */
        .repo-card {
          background: rgba(255,255,255,0.65);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.9);
          border-radius: 24px;
          box-shadow: 0 4px 24px rgba(59,130,246,0.08), inset 0 1px 0 rgba(255,255,255,0.9);
          padding: 24px;
          display: flex; flex-direction: column; gap: 16px;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .repo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(59,130,246,0.14), inset 0 1px 0 rgba(255,255,255,0.9);
        }

        /* Speaker row */
        .repo-card-top { display: flex; align-items: center; gap: 14px; }
        .repo-card-img-wrap {
          position: relative; width: 60px; height: 60px;
          border-radius: 50%; overflow: hidden; flex-shrink: 0;
          border: 2px solid #e0eaff; background: #f1f5f9;
        }
        .repo-card-speaker { flex: 1; }
        .repo-speaker-name {
          font-family: Georgia, serif; font-size: 14px; font-weight: 700;
          color: #1e293b; line-height: 1.3;
        }
        .repo-speaker-role { font-size: 12px; font-weight: 600; color: #3b82f6; margin-top: 2px; }
        .repo-speaker-org { font-size: 11px; color: #94a3b8; margin-top: 2px; }

        /* Session info */
        .repo-card-body {
          background: rgba(239,246,255,0.6); border-radius: 14px;
          padding: 14px 16px; border: 1px solid rgba(147,197,253,0.3);
        }
        .repo-session-label {
          font-size: 10px; font-weight: 800; letter-spacing: 0.1em;
          text-transform: uppercase; color: #3b82f6; margin-bottom: 6px;
        }
        .repo-session-name {
          font-size: 14px; font-weight: 700; color: #1e293b; line-height: 1.4;
        }
        .repo-session-date { font-size: 12px; color: #64748b; margin-top: 6px; }

        /* Actions */
        .repo-card-actions { display: flex; gap: 10px; }
        .repo-btn-view {
          flex: 1; padding: 10px 16px; border-radius: 12px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: #fff; font-size: 13px; font-weight: 700;
          border: none; cursor: pointer; text-align: center;
          box-shadow: 0 4px 12px rgba(59,130,246,0.3);
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .repo-btn-view:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(59,130,246,0.4); }
        .repo-btn-view:active { transform: scale(0.97); }
        .repo-btn-download {
          padding: 10px 16px; border-radius: 12px;
          background: rgba(255,255,255,0.8); border: 1px solid rgba(147,197,253,0.5);
          color: #1d4ed8; font-size: 13px; font-weight: 700;
          text-decoration: none; text-align: center; white-space: nowrap;
          transition: background 0.15s, transform 0.15s;
        }
        .repo-btn-download:hover { background: rgba(219,234,254,0.8); transform: translateY(-2px); }

        /* ── Modal ── */
        .repo-modal-backdrop {
          position: fixed; inset: 0; z-index: 100;
          background: rgba(15,23,42,0.6);
          backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          padding: 16px;
          animation: repo-fade-in 0.2s ease;
        }
        @keyframes repo-fade-in { from { opacity: 0; } to { opacity: 1; } }
        .repo-modal {
          background: #fff; border-radius: 24px; width: 100%; max-width: 900px;
          max-height: 90vh; display: flex; flex-direction: column;
          box-shadow: 0 32px 80px rgba(0,0,0,0.3);
          animation: repo-slide-up 0.25s cubic-bezier(0.34,1.56,0.64,1);
          overflow: hidden;
        }
        @keyframes repo-slide-up { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .repo-modal-header {
          display: flex; align-items: flex-start; justify-content: space-between;
          padding: 20px 24px 16px; border-bottom: 1px solid #e2e8f0; gap: 16px;
        }
        .repo-modal-title { font-family: Georgia, serif; font-size: 17px; font-weight: 700; color: #1e293b; }
        .repo-modal-sub { font-size: 13px; color: #64748b; margin-top: 4px; }
        .repo-modal-close {
          width: 32px; height: 32px; border-radius: 8px; border: none;
          background: #f1f5f9; color: #64748b; cursor: pointer; font-size: 14px;
          flex-shrink: 0; transition: background 0.15s;
        }
        .repo-modal-close:hover { background: #e2e8f0; }
        .repo-modal-body { flex: 1; overflow: hidden; min-height: 0; }
        .repo-pdf-iframe { width: 100%; height: 100%; min-height: 500px; border: none; }
        .repo-modal-footer {
          display: flex; align-items: center; justify-content: flex-end; gap: 12px;
          padding: 16px 24px; border-top: 1px solid #e2e8f0;
        }
        .repo-btn-close-text {
          padding: 10px 20px; border-radius: 10px; border: 1px solid #e2e8f0;
          background: #f8fafc; color: #475569; font-size: 13px; font-weight: 600;
          cursor: pointer; transition: background 0.15s;
        }
        .repo-btn-close-text:hover { background: #e2e8f0; }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .repo-page { padding: 40px 16px 60px; }
          .repo-grid { grid-template-columns: 1fr; }
          .repo-modal { max-height: 95vh; border-radius: 20px; }
          .repo-pdf-iframe { min-height: 380px; }
          .repo-card-actions { flex-direction: column; }
        }
      `}</style>

      <div className="repo-page">

        {/* Header */}
        <div className="repo-header">
          <div className="repo-pill">📚 Wellness Workshop 2026</div>
          <h1 className="repo-title">Knowledge Repository</h1>
          <p className="repo-subtitle">
            Session presentations and resources from our distinguished speakers.
            View or download PDFs directly from here.
          </p>
        </div>

        {/* Cards grid */}
        <div className="repo-grid">
          {sessions.map((session, i) => (
            <SessionCard
              key={i}
              session={session}
              onView={setActiveSession}
            />
          ))}
        </div>

      </div>

      {/* PDF Modal */}
      <PdfModal
        session={activeSession}
        onClose={() => setActiveSession(null)}
      />

    </div>
  )
}
