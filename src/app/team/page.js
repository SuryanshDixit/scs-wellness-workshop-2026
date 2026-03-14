'use client'

import Image from "next/image"

const patron = {
  name: "Prof. Amit Patra",
  role: "Director, IIT (BHU), Varanasi",
  link: "https://www.iitbhu.ac.in/dept/eee/people/amitpatra",
  image: "/team/eee_faculty_amit.png",
  desc: "Prof. Amit Patra is the Director of Indian Institute of Technology (BHU), Varanasi. A distinguished academician and researcher, he has made significant contributions to the fields of electrical engineering. Under his visionary leadership, IIT (BHU) continues to advance its mission of excellence in technical education, research, and holistic student development.",
}

const facultyTeam = [
  {
    name: "Dr. Agnivesh P.",
    role: "Faculty Coordinator",
    org: "Wellness Council",
    org2: "Student Counselling Services",
    link: "https://prev.iitbhu.ac.in/dept/civ/people/agniveshciv",
    image: "/team/IMG_8373_0.jpeg",
  },
  {
    name: "Dr. Shreyans Kumar Jain",
    role: "Faculty Coordinator",
    org: "Wellness Council",
    org2: "Student Counselling Services",
    link: "https://prev.iitbhu.ac.in/dept/phe/people/sjainphe",
    image: "/team/Ellipse_18.webp",
  },
  {
    name: "Dr. Ajit Kumar Mishra",
    role: "Faculty Coordinator",
    org: "Wellness Council",
    org2: "Student Counselling Services",
    link: "https://prev.iitbhu.ac.in/dept/hss/people/akmishrahss",
    image: "/team/akm passport photo.jpg",
  },
  {
    name: "Prof. Abhishek Kumar Srivastava",
    role: "Associate Dean of Student's Affairs",
    org: "Student Counselling Services",
    org2: "IIT (BHU), Varanasi",
    link: "https://prev.iitbhu.ac.in/dept/app/people/asrivastavaapp",
    image: "/team/WhatsApp Image 2026-03-12 at 7.47.15 PM.jpeg",
  },
  {
    name: "Prof. Rajesh Kumar",
    role: "Dean of Student's Affairs",
    org: " ",
    org2: "IIT (BHU), Varanasi",
    link: "https://iitbhu.ac.in/dean/dosa/people",
    image: "/team/dosa_current.jpg",
  },
]

const studentTeam = [
  {
    name: "Dev Gupta",
    role: "Convener",
    org: "Student Counselling Services",
    org2: "",
    link: "https://www.linkedin.com/in/dev-gupta-7b5190271/?originalSubdomain=in",
    image: "/team/WhatsApp Image 2026-01-31 at 8.18.30 PM.jpeg",
  },
  {
    name: "Ananya Agarwal",
    role: "Co-Convener",
    org: "Student Counselling Services",
    org2: "",
    link: "https://www.linkedin.com/in/ananya-agarwal-4869402a7/",
    image: "/team/WhatsApp Image 2026-03-13 at 10.05.31 PM.jpeg",
  },
  {
    name: "Suryansh Dixit",
    role: "Co-Convener",
    org: "Student Counselling Services",
    org2: "",
    link: "https://www.linkedin.com/in/suryanshdixit/",
    image: "/team/IMG_20250108_265631.jpg",
  },
  {
    name: "Tushar Bansal",
    role: "Head",
    link: "https://www.linkedin.com/in/tushar-bansal-25n05/",
    image: "/team/WhatsApp Image 2026-03-14 at 7.49.50 PM.jpeg",
  },
  {
    name: "Choullapally Sai Nanda Gopal",
    role: "Co-Head",
    link: "https://www.linkedin.com/in/choulapally-sai-nanda-gopal-b26683213/",
    image: "/team/WhatsApp Image 2026-03-14 at 7.54.34 PM.jpeg",
  },
  {
    name: "Pranjal Kabra",
    role: "Co-Head",
    link: "https://www.linkedin.com/in/pranjalkabra26/",
    image: "/team/WhatsApp Image 2026-03-14 at 7.46.47 PM.jpeg",
  },
]

function MemberCard({ member }) {
  return (
    <a
      href={member.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', display: 'block' }}
    >
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
            cursor: pointer;
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
    </a>
  )
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      <style>{`
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
        .section-label.patron {
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          color: #fff;
          box-shadow: 0 4px 14px rgba(124,58,237,0.3);
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

        /* ── Patron card ── */
        .patron-card {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 40px;
          background: #ffffff;
          border-radius: 24px;
          padding: 36px 40px;
          box-shadow: 0 4px 24px rgba(124,58,237,0.10), 0 0 0 1px rgba(124,58,237,0.07);
          max-width: 860px;
          margin: 0 auto;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
          text-decoration: none;
          cursor: pointer;
        }
        .patron-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(124,58,237,0.15), 0 0 0 1px rgba(124,58,237,0.1);
        }
        .patron-img-wrap {
          position: relative;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #ede9fe;
          background: #f5f3ff;
          flex-shrink: 0;
        }
        .patron-info { flex: 1; }
        .patron-name {
          font-family: Georgia, serif;
          font-size: 22px;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.2;
        }
        .patron-role {
          font-size: 14px;
          font-weight: 600;
          color: #7c3aed;
          margin-top: 5px;
          letter-spacing: 0.01em;
        }
        .patron-desc {
          font-size: 14px;
          color: #64748b;
          margin-top: 14px;
          line-height: 1.75;
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

        /* ── Role groups for students ── */
        .student-role-group { margin-bottom: 40px; }
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
        .role-group-title::before { content: ''; flex: 1; height: 1px; background: #e2e8f0; }
        .role-group-title::after  { content: ''; flex: 1; height: 1px; background: #e2e8f0; }
        .student-grid .team-card { width: 100%; min-width: 200px; }
        .student-grid {
          display: grid;
          justify-content: center;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }
        @media (min-width: 768px) {
          .student-grid.cols-2 { grid-template-columns: repeat(2, 280px); justify-content: center; }
          .student-grid.cols-1 { grid-template-columns: repeat(1, 280px); justify-content: center; }
          .student-grid.cols-3 { grid-template-columns: repeat(3, 280px); }
        }

        .section-sep {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          border-bottom: 1px solid #e2e8f0;
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .team-page-header { padding: 40px 16px 28px !important; }
          .team-page-title  { font-size: 1.9rem !important; }
          .team-section     { padding: 32px 16px !important; }
          .patron-card {
            flex-direction: column !important;
            text-align: center !important;
            padding: 24px 20px !important;
            gap: 20px !important;
          }
          .patron-img-wrap  { width: 130px !important; height: 130px !important; }
          .patron-name      { font-size: 18px !important; }
          .faculty-grid-row1, .faculty-grid-row2 {
            flex-direction: column !important;
            align-items: center !important;
            gap: 16px !important;
          }
          .faculty-grid-row1 .team-card,
          .faculty-grid-row2 .team-card { width: 100% !important; max-width: 300px !important; }
          .student-grid.cols-1,
          .student-grid.cols-2,
          .student-grid.cols-3 { grid-template-columns: 1fr !important; justify-items: center !important; }
          .student-grid .team-card { width: 100% !important; max-width: 300px !important; }
          .team-card-img-wrap { width: 120px !important; height: 120px !important; }
          .section-label { font-size: 11px !important; padding: 6px 14px !important; }
        }
      `}</style>

      {/* Header */}
      <div className="team-page-header">
        <div className="team-badge"> Wellness Workshop 2026</div>
        <h1 className="team-page-title">Event Coordinators</h1>
      </div>

      {/* ── Patron Section ── */}
      <div className="team-section">
        <div className="section-divider">
          <div className="section-divider-line" />
          <span className="section-label patron">⭐ Patron</span>
          <div className="section-divider-line" />
        </div>

        <a
          href={patron.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', display: 'block' }}
        >
          <div className="patron-card">
            <div className="patron-img-wrap">
              <Image
                src={patron.image}
                alt={patron.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="patron-info">
              <p className="patron-name">{patron.name}</p>
              <p className="patron-role">{patron.role}</p>
              <p className="patron-desc">{patron.desc}</p>
            </div>
          </div>
        </a>
      </div>

      <div className="section-sep" />

      {/* ── Faculty Section ── */}
      <div className="team-section">
        <div className="section-divider">
          <div className="section-divider-line" />
          <span className="section-label faculty">🎓 Faculties</span>
          <div className="section-divider-line" />
        </div>

        {/* Row 1 — 3 Faculty Coordinators */}
        <div className="faculty-grid-row2">
          {facultyTeam.slice(0, 3).map((m, i) => (
            <MemberCard key={i} member={m} />
          ))}
        </div>

        {/* Row 2 — Associate Dean + Dean */}
        <div className="faculty-grid-row1" style={{marginTop: "20px"}}>
          {facultyTeam.slice(3, 5).map((m, i) => (
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

      </div>
    </div>
  )
}
