'use client'

import Image from "next/image"

const speakers = [
  {
    name: "Prof. S.K. Chaturvedi",
    role: "Former Dean, Behavioral Sciences",
    org: "NIMHANS, Bangalore",
    link: "https://santoshchaturvedi.in/",
    image: "/speakers/SKC September 2024.JPG",
    desc: "Prof. S. K. Chaturvedi is a distinguished Indian psychiatrist and former Dean of Behavioural Sciences at the National Institute of Mental Health and Neurosciences (NIMHANS), Bengaluru. He has served as a Senior Professor of Psychiatry. He is widely recognized for his contributions to consultation-liaison psychiatry, psycho-oncology, palliative care, neuropsychiatry, and the study of culture and mental health. Prof. Chaturvedi has authored hundreds of research papers and several books and has played a major role in postgraduate medical training and mental-health research in India.",
  },
  {
    name: "Dr. Lokendra Sharma",
    role: "Senior Professor",
    org: "SMS Medical College, Jaipur",
    link: "https://www.linkedin.com/in/lokendra-sharma-2b81741b/?originalSubdomain=in",
    image: "/speakers/Screenshot 2026-03-13 141908.png",
    desc: "Dr. Lokendra Sharma has contributed extensively to the field of pharmacology, particularly in areas such as drug safety, pharmacodynamics, clinical pharmacokinetics, and pharmacovigilance. He has authored or co-authored numerous research papers and academic publications and has also been involved in teaching MBBS students under India's competency-based medical curriculum.",
  },
  {
    name: "Dr. Jitendra Nagpal",
    role: "Senior Consultant Psychiatrist",
    org: "Moolchand Medicity, New Delhi",
    link: "https://moolchandhealthcare.com/doctors/jitendra-nagpal",
    image: "/speakers/Dr-Jitendra-Nagpal.jpg",
    desc: "Dr. Jitendra Nagpal is a distinguished Senior Consultant Psychiatrist and the Head of the Institute of Mental Health and Life Skills Promotion at Moolchand Medcity, New Delhi. With over 25 years of clinical experience, he is a nationally recognized expert in child, adolescent, and adult psychiatry, known for his pioneering work in life skills education and school wellness through the Expressions India program. Dr. Nagpal serves as a key advisor to national bodies like the NCPCR and CBSE, and he is a frequent mental health commentator in prominent media outlets such as The Times of India and NDTV.",
  },
  {
    name: "Dr. Geeta Mehrotra",
    role: "Senior Advisor (Academics and Training)",
    org: "Expressions India",
    link: "https://expressionsindia.org/team.html",
    image: "/speakers/Screenshot 2026-03-13 143352.png",
    desc: "Ms. Geeta Mehrotra is a prominent National Resource Faculty in Life Skills, Positive Mental Health, and Wellbeing with Expressions India, a premier national program for wellness. A seasoned educator and counselor, she is widely recognized for her expertise in empowering adolescents and educators through impactful sessions on stress management, coping techniques, and resilience building. As a core member of the Expressions India technical resource group, she frequently collaborates with organizations like the CBSE to conduct regional summits and workshops aimed at fostering emotional and social wellbeing in young learners.",
  },
  {
    name: "Dr. Yatan Pal Singh Balhara",
    role: "Professor of Psychiatry",
    org: "AIIMS, New Delhi",
    link: "https://aiims.edu/index.php?option=com_content&view=article&id=1480&catid=201&lang=en",
    image: "/speakers/WhatsApp Image 2026-03-14 at 7.59.49 PM.jpeg",
    desc: "Dr. Yatan Pal Singh Balhara is a distinguished Professor of Psychiatry at the National Drug Dependence Treatment Centre (NDDTC), AIIMS, New Delhi, where he also serves as the Faculty-in-Charge of the Behavioural Addictions Clinic. A globally recognized expert in addiction psychiatry, dual diagnosis, and digital mental health, he provides technical consultancy to the World Health Organization (WHO) and UNODC, and acts as a Global Master Trainer for the Colombo Plan. Dr. Balhara holds an MD from AIIMS and an International Masters in Mental Health Policy and Services, and he has published over 300 research papers focusing on substance use disorders and the psychological impacts of digital engagement.",
  },
  {
    name: "Prof. Santanu Misra",
    role: "Head of Institute Counselling Service",
    org: "IIT Kanpur",
    link: "https://home.iitk.ac.in/~smisra/",
    image: "/speakers/WhatsApp Image 2026-03-14 at 8.02.03 PM.jpeg",
    desc: "Prof. Santanu Misra is a distinguished Professor in the Department of Earth Sciences at the Indian Institute of Technology (IIT), Kanpur, where he also serves as the Head of the Institute Counselling Service (ICS). A renowned structural geologist and a recipient of the prestigious DST Swarnajayanti Fellowship and the INSA Young Scientist Award, he leads the Experimental Rock Deformation Laboratory, a national facility. In his role at the ICS, Prof. Misra oversees crucial mental health initiatives, including suicide prevention workshops, de-addiction clinics, and extensive orientation programs for over 3,000 students annually.",
  },
  {
    name: "Dr. Krithika Chandrasekar",
    role: `Author of "Have You Heard the Sound of Your Own Voice?"`,
    org: "",
    link: "https://www.amazon.in/stores/author/B0978Q9RK1/about",
    image: "/speakers/WhatsApp Image 2026-03-14 at 7.54.00 PM.jpeg",
    desc: `Krithika Chandrasekar is a celebrated author and mental health advocate best known for her profound debut book, "Have You Heard the Sound of Your Own Voice?" Published in 2022, her work is a deeply personal exploration of self-discovery, healing, and emotional resilience, blending poetry and prose to address the complexities of the human experience. Beyond her writing, Krithika is a passionate mental health educator who frequently collaborates with platforms to conduct workshops on mindfulness and creative expression for students and educators. Her storytelling focuses on the power of vulnerability and introspection, encouraging individuals to reclaim their personal narratives and find solace in their unique journeys.`,
  },
]

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-20 px-8">

      {/* Title */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-slate-800">
          Distinguished Speakers
        </h1>
        <p className="mt-4 text-slate-500 text-lg">
          Experts guiding the Wellness Workshop 2026
        </p>
      </div>

      {/* Speaker List */}
      <div className="max-w-5xl mx-auto space-y-12">

        {speakers.map((speaker, index) => (
          <a
            key={index}
            href={speaker.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', display: 'block' }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-3xl shadow-lg p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">

              {/* Image */}
              <div className="relative w-[200px] h-[220px] flex-shrink-0 rounded-2xl overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">

                <h2 className="text-2xl font-semibold text-slate-800">
                  {speaker.name}
                </h2>

                <p className="text-blue-500 font-medium mt-1">
                  {speaker.role}
                </p>

                <p className="text-slate-500 text-sm mt-1">
                  {speaker.org}
                </p>

                <p className="text-slate-600 mt-4 leading-relaxed">
                  {speaker.desc}
                </p>

              </div>

            </div>
          </a>
        ))}

      </div>
    </div>
  )
}
