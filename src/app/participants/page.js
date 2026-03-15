'use client'

export default function ParticipantsPage() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(160deg, #EFF6FF 0%, #DBEAFE 40%, #BFDBFE 100%)" }}>

      <style>{`
        .pt-page { max-width: 1000px; margin: 0 auto; padding: 60px 24px 80px; }

        /* ── Header ── */
        .pt-header { text-align: center; margin-bottom: 56px; }
        .pt-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.5); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.85); border-radius: 100px;
          padding: 9px 20px; font-size: 11px; font-weight: 800; color: #2563EB;
          letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px;
          box-shadow: 0 4px 20px rgba(59,130,246,0.1);
        }
        .pt-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800; color: #1E3A8A;
          line-height: 1.1; letter-spacing: -1px; margin-bottom: 14px;
        }
        .pt-subtitle { font-size: 16px; color: #475569; max-width: 540px; margin: 0 auto; line-height: 1.7; }

        /* ── Section divider ── */
        .pt-section-divider {
          display: flex; align-items: center; gap: 16px; margin-bottom: 28px;
        }
        .pt-section-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, #93C5FD 40%, #93C5FD 60%, transparent);
        }
        .pt-section-label {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 22px; border-radius: 999px;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          text-transform: uppercase; white-space: nowrap; color: #fff;
        }
        .pt-section-label.students {
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          box-shadow: 0 4px 14px rgba(59,130,246,0.3);
        }
        .pt-section-label.faculty {
          background: linear-gradient(135deg, #065f46, #10b981);
          box-shadow: 0 4px 14px rgba(16,185,129,0.3);
        }

        /* ── Glass card ── */
        .pt-card {
          background: rgba(255,255,255,0.58);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.88);
          border-radius: 24px;
          box-shadow: 0 8px 32px rgba(59,130,246,0.08), inset 0 1px 0 rgba(255,255,255,0.9);
          padding: 36px 40px;
          margin-bottom: 40px;
        }

        /* ── List embed area ── */
        .pt-list-embed {
          width: 100%; min-height: 480px;
          border: none; border-radius: 14px;
          overflow: hidden;
        }

        /* ── Coming soon placeholder ── */
        .pt-coming-soon {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          min-height: 200px; gap: 14px; text-align: center;
          background: rgba(241,245,249,0.6); border-radius: 16px;
          border: 2px dashed rgba(147,197,253,0.5); padding: 40px 24px;
        }
        .pt-coming-soon-icon {
          width: 56px; height: 56px; border-radius: 18px;
          background: rgba(16,185,129,0.1); display: flex; align-items: center;
          justify-content: center; font-size: 26px;
        }
        .pt-coming-soon-title { font-size: 16px; font-weight: 700; color: #1e293b; }
        .pt-coming-soon-sub { font-size: 14px; color: #64748b; line-height: 1.6; max-width: 360px; }

        /* ── Note ── */
        .pt-note {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(254,242,242,0.7); border: 1px solid rgba(252,165,165,0.4);
          border-radius: 10px; padding: 8px 14px;
          font-size: 12px; font-weight: 600; color: #991b1b;
          margin-top: 16px;
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .pt-page { padding: 40px 16px 60px; }
          .pt-card { padding: 24px 18px; }
          .pt-list-embed { min-height: 360px; }
        }
      `}</style>

      <div className="pt-page">

        {/* Header */}
        <div className="pt-header">
          <div className="pt-pill">Wellness Workshop 2026</div>
          <h1 className="pt-title">Participants</h1>
          <p className="pt-subtitle">
            Registered students and faculty members attending the Wellness &amp; Wellbeing Capacity-Building Workshop.
          </p>
        </div>

        {/* ── Students Section ── */}
        <div className="pt-section-divider">
          <div className="pt-section-line" />
          <span className="pt-section-label students">🎓 Students List</span>
          <div className="pt-section-line" />
        </div>

        <div className="pt-card">
          <iframe
            className="pt-list-embed"
            src="https://docs.google.com/spreadsheets/u/3/d/e/2PACX-1vRpsQPfOS0GmaZoYHaJVmjd9nUx3kxeEaS07IEo2mjyr5T5u3yrISEY0lhNoRGdCiSlab2uU-2twz0Y/pubhtml?widget=true&amp;headers=false"
          />
          <p className="pt-note">⚠️ The complete list will be updated soon.</p>
        </div>

        {/* ── Faculty Section ── */}
        <div className="pt-section-divider">
          <div className="pt-section-line" />
          <span className="pt-section-label faculty">👨‍🏫 Faculty List</span>
          <div className="pt-section-line" />
        </div>

        <div className="pt-card">
          <div className="pt-coming-soon">
            <div className="pt-coming-soon-icon">📋</div>
            <p className="pt-coming-soon-title">Faculty List Coming Soon</p>
            <p className="pt-coming-soon-sub">
              The faculty participants list will be published here shortly. Please check back after the link is updated.
            </p>
          </div>
          <p className="pt-note">⚠️ The faculty list will be updated soon.</p>
        </div>

      </div>
    </div>
  )
}
