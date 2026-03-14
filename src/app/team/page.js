'use client'

import Image from "next/image"

const facultyTeam = [
    {
    name: "Dr. Agnivesh P.",
    role: "Faculty Coordinator",
    org: "Wellness Council",
    org2: "Student Counselling Services",
    image: "/team/IMG_8373_0.jpeg",
  },
  {
    name: "Dr. Shreyans Kumar Jain",
    role: "Faculty Coordinator",
    org: "Wellness Council",
    org2: "Student Counselling Services",
    image: "/team/Ellipse_18.webp",
  },
  {
    name: "Dr. Ajit Kumar Mishra",
    role: "Faculty Coordinator",
    org: "Wellness Council",
    org2: "Student Counselling Services",
    image: "/team/akm passport photo.jpg",
  },
  {
    name: "Prof. Abhishek Kumar Srivastava",
    role: "Associate Dean of Student's Affairs",
    org: "Student Counselling Services",
    org2: "IIT (BHU), Varanasi",
    image: "/team/WhatsApp Image 2026-03-12 at 7.47.15 PM.jpeg",
  },
  {
    name: "Prof. Rajesh Kumar",
    role: "Dean of Student's Affairs",
    org: " ",
    org2: "IIT (BHU), Varanasi",
    image: "/team/dosa_current.jpg",
  },

]

const studentTeam = [
  {
    name: "Dev Gupta",
    role: "Convener",
    org: "Student Counselling Services",
    org2: "",
    image: "/team/WhatsApp Image 2026-01-31 at 8.18.30 PM.jpeg",
  },
  {
    name: "Ananya Agarwal",
    role: "Co-Convener",
    org: "Student Counselling Services",
    org2: "",
    image: "/team/WhatsApp Image 2026-03-13 at 10.05.31 PM.jpeg",
  },
  {
    name: "Suryansh Dixit",
    role: "Co-Convener",
    org: "Student Counselling Services",
    org2: "",
    image: "/team/IMG_20250108_265631.jpg",
  },
  {
    name: "Tushar Bansal",
    role: "Head",
    image: "/team/head1.jpg",
  },
  {
    name: "Choullapally Sai Nanda Gopal",
    role: "Co-Head",
    image: "/team/head2.jpg",
  },
  {
    name: "Pranjal Kabra",
    role: "Co-Head",
    image: "/team/head3.jpg",
  },
]

function MemberCard({ member }) {
  return (
    <div className="team-card">
      <div className="team-card-img-wrap">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="team-card-info">
        <p className="team-card-name">{member.name}</p>
        <p className="team-card-role">{member.role}</p>
        {member.org && (
          <>
            <p className="team-card-org">{member.org}</p>
            <p className="team-card-org">{member.org2}</p>
          </>
        )}
      </div>

      <style>{`
        .team-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #ffffff;
          border-radius: 20px;
          padding: 20px 16px 18px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.04);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
          cursor: default;
        }
        .team-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 28px rgba(59,130,246,0.13), 0 0 0 1px rgba(59,130,246,0.08);
        }
        .team-card-img-wrap {
          position: relative;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #e0eaff;
          background: #f1f5f9;
          flex-shrink: 0;
        }
        .team-card-info {
          margin-top: 14px;
          text-align: center;
        }
        .team-card-name {
          font-size: 14.5px;
          font-weight: 700;
          color: #1e293b;
          font-family: Georgia, serif;
          line-height: 1.3;
        }
        .team-card-role {
          font-size: 12.5px;
          font-weight: 600;
          color: #3b82f6;
          margin-top: 4px;
          letter-spacing: 0.01em;
        }
        .team-card-org {
          font-size: 11.5px;
          color: #94a3b8;
          margin-top: 3px;
          line-height: 1.4;
        }
      `}</style>
    </div>
  )
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      <style>{`
        /* ── Page header ── */
        .team-page-header {
          background: linear-gradient(135deg, #eff6ff 0%, #f8fafc 60%, #e0f2fe 100%);
          border-bottom: 1px solid #e2e8f0;
          padding: 64px 32px 48px;
          text-align: center;
        }
        .team-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: 999px;
          background: rgba(59,130,246,0.08);
          border: 1px solid rgba(59,130,246,0.18);
          color: #2563eb;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .team-page-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 700;
          color: #1e293b;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }
        .team-page-sub {
          margin-top: 12px;
          font-size: 16px;
          color: #64748b;
          max-width: 590px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        /* ── Section ── */
        .team-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 56px 24px;
        }

        .section-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 36px;
        }
        .section-divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, #cbd5e1 40%, #cbd5e1 60%, transparent);
        }
        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .section-label.faculty {
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          color: #fff;
          box-shadow: 0 4px 14px rgba(59,130,246,0.3);
        }
        .section-label.student {
          background: linear-gradient(135deg, #065f46, #10b981);
          color: #fff;
          box-shadow: 0 4px 14px rgba(16,185,129,0.3);
        }

        /* ── Faculty grid ── */
        .faculty-grid-row1 {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 20px;
        }
        .faculty-grid-row2 {
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        .faculty-grid-row1 .team-card,
        .faculty-grid-row2 .team-card {
          width: 280px;
        }
        @media (min-width: 1000px) {
          .faculty-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* ── Role groups for students ── */
        .student-role-group {
          margin-bottom: 40px;
        }
        .role-group-title {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 16px;
          padding-left: 2px;
          display: flex;
          align-items: center;
          justify-content: center;  
          gap: 8px;
        }
        .role-group-title::before {      
          content: '';
          flex: 1;
          height: 1px;
          background: #e2e8f0;
        }
        .role-group-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e2e8f0;
        }
        .student-grid .team-card {
          width: 100%;
          min-width: 200px;  /* was 160px */
        }
        .student-grid {
          display: grid;
          justify-content: center;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }
        
        @media (min-width: 768px) {
          .student-grid.cols-2 {
            grid-template-columns: repeat(2, 280px);  /* fixed smaller width */
            justify-content: center;                   /* 👈 center the 2 cards */
          }
          .student-grid.cols-1 {
            grid-template-columns: repeat(1, 280px);
            justify-content: center;
          }
          .student-grid.cols-3 {
            grid-template-columns: repeat(3, 280px);
          }
        }

        /* ── Separator between sections ── */
        .section-sep {
          max-width: 1100px;
          margin: 0 auto 0;
          padding: 0 24px;
          border-bottom: 1px solid #e2e8f0;
        }
      `}</style>

      {/* Header */}
      <div className="team-page-header">
        <div className="team-badge">🌿 Wellness Workshop 2026</div>
        <h1 className="team-page-title">Event Coordination Team</h1>
        
      </div>

      {/* ── Faculty Section ── */}
      <div className="team-section">
        <div className="section-divider">
          <div className="section-divider-line" />
          <span className="section-label faculty">🎓 Faculties</span>
          <div className="section-divider-line" />
        </div>

        {/* Row 1 — last 3 cards */}
        <div className="faculty-grid-row2">
          {facultyTeam.slice(2, 5).map((m, i) => (
            <MemberCard key={i} member={m} />
          ))}
        </div>

        {/* Row 2 — first 2 cards */}
        <div className="faculty-grid-row1">
          {facultyTeam.slice(0, 2).map((m, i) => (
            <MemberCard key={i} member={m} />
          ))}
        </div>


      </div>

      <div className="section-sep" />

      {/* ── Student Section ── */}
      <div className="team-section">
        <div className="section-divider">
          <div className="section-divider-line" />
          <span className="section-label student">🌱 Students</span>
          <div className="section-divider-line" />
        </div>

        {/* Heads */}
        <div className="student-role-group">
          <p className="role-group-title">Heads (Wellness Council)</p>
          <div className="student-grid cols-3">
            {studentTeam.slice(3, 6).map((m, i) => (
              <MemberCard key={i} member={m} />
            ))}
          </div>
        </div>

        {/* Convener */}
        <div className="student-role-group">
          <p className="role-group-title">Convener</p>
          <div className="student-grid cols-1">
            <MemberCard member={studentTeam[0]} />
          </div>
        </div>

        {/* Co-conveners */}
        <div className="student-role-group">
          <p className="role-group-title">Co-Conveners</p>
          <div className="student-grid cols-2">
            {studentTeam.slice(1, 3).map((m, i) => (
              <MemberCard key={i} member={m} />
            ))}
          </div>
        </div>



        // {/* Co-Heads */}
        // <div className="student-role-group">
        //   <p className="role-group-title">Co-Heads</p>
        //   <div className="student-grid cols-3">
        //     {studentTeam.slice(6).map((m, i) => (
        //       <MemberCard key={i} member={m} />
        //     ))}
        //   </div>
        // </div>

      </div>
    </div>
  )
}
