'use client'

import Image from "next/image"

const speakers = [
  {
    name: "Prof. S.K. Chaturvedi",
    role: "Designation",
    org: "Organization",
    image: "/speakers/SKC September 2024.JPG",
    desc: "Prof. S. K. Chaturvedi (Dr. Santosh Kumar Chaturvedi) is a distinguished Indian psychiatrist and former Dean of Behavioural Sciences at the National Institute of Mental Health and Neurosciences (NIMHANS), Bengaluru. He served as a Senior Professor of Psychiatry. He is widely recognized for his contributions to consultation-liaison psychiatry, psycho-oncology, palliative care, neuropsychiatry, and the study of culture and mental health. Prof. Chaturvedi has authored hundreds of research papers and several books and has played a major role in postgraduate medical training and mental-health research in India.",
  },
  {
    name: "Dr. Lokendra Sharma",
    role: "Senior Professor",
    org: "SMS Medical College, Jaipur",
    image: "/speakers/Screenshot 2026-03-13 141908.png",
    desc: "Dr. Sharma has contributed extensively to the field of pharmacology, particularly in areas such as drug safety, pharmacodynamics, clinical pharmacokinetics, and pharmacovigilance. He has authored or co-authored numerous research papers and academic publications and has also been involved in teaching MBBS students under India’s competency-based medical curriculum.",
  },
  {
    name: "Prof. Shantanu Misra",
    role: "Designation",
    org: "Organization",
    image: "/speakers/speaker5.jpg",
    desc: "Speaker description will be added here.",
  },
  
  {
    name: "Dr. Jitendra Nagpal",
    role: "Senior Consultant Psychiatrist",
    org: "Moolchand Medicity, New Delhi",
    image: "/speakers/Dr-Jitendra-Nagpal.jpg",
    desc: "Renowned psychiatrist with focus on child, adolescent and women mental health. Director of Expressions India and advisor to the Institute of Child Development and Adolescent Health.",
  },
  
  {
    name: "Dr. Geeta Mehrotra",
    role: "Senior Consultant Psychiatrist",
    org: "Moolchand Medicity, New Delhi",
    image: "/speakers/Screenshot 2026-03-13 143352.png",
    desc: "Renowned psychiatrist with focus on child, adolescent and women mental health. Director of Expressions India and advisor to the Institute of Child Development and Adolescent Health.",
  },

  {
    name: "Dr. Y.P. Balhara",
    role: "Designation",
    org: "Organization",
    image: "/speakers/speaker4.jpg",
    desc: "Speaker description will be added here.",
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
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-3xl shadow-lg p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition cursor-pointer"
          >

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
        ))}

      </div>
    </div>
  )
}