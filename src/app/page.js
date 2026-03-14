'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Schedule", href: "/schedule" },
    { label: "Speakers", href: "/speakers" },
    { label: "About SCS", href: "/about-scs" },
  ];

  return (
    <div className="min-h-screen max-w-full bg-[#F8FAFC] antialiased">
      {/* Hero Section */}
      <div className="w-full min-h-[calc(100vh-96px)] p-8 md:p-12 mt-4">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-12">

          {/* Text */}
          <div>
            <h1 className="text-5xl md:text-7xl mb-4 font-serif text-slate-800 leading-tight">
              Wellness Workshop 2026 <br />
              
            </h1>
            <span className="text-blue-500 mt-2 text-2xl font-bold italic">आयुष एवं चैतन्य की ओर</span>
            <br/>
            <div className="px-5 py-2 mt-4 mb-4 auto inline-flex items-center gap-2.5 rounded-full bg-blue-100/60 text-blue-800 font-medium text-sm backdrop-blur-lg shadow-inner ring-1 ring-blue-200/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-md"></div>
              <span className="relative z-10">21<sup>st</sup> - 22<sup>nd</sup> March, 2026</span>
            </div>
            <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-lg leading-relaxed">
              A capacity-building programme to promote mental wellbeing, strengthen coping abilities, and cultivate a compassionate campus support ecosystem.
            </p>

            <div className="mt-10 flex gap-4">
              <Link href="/schedule">
                <button className="px-8 py-4 bg-blue-500 text-white rounded-full font-bold shadow-lg hover:bg-blue-600 transition cursor-pointer">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white/50">
            <Image
              src="/welcome.jpg"
              alt="Welcome to Sakha Wellness"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

        </div>

      </div>
      {/* Motivation Section */}
      <div className="w-full py-20 px-8 md:px-12 bg-white">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <Link href="https://www.instagram.com/p/DVyWzlCiaAZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="relative block w-full h-full">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/WhatsApp Image 2026-03-12 at 7.30.50 PM.jpeg"
                alt="Workshop Motivation"
                fill
                className="object-cover"
              />
            </div>
          </Link>

          {/* Text */}
          <div className="text-slate-700 text-lg leading-relaxed space-y-6">

            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-2">
              Motivation & Vision
            </h2>

            <p>
              Young adults and students constitute a vital human resource and play a
              central role in shaping the nation’s future. Higher Educational
              Institutions serve not only as spaces for academic learning but also as
              environments where individuals develop resilience, emotional maturity,
              ethical grounding, and life skills essential for long-term wellbeing.
            </p>

            <p>
              In alignment with the National Education Policy (NEP) 2020, which
              emphasizes the intrinsic linkage between education and mental health,
              Student Counselling Services (SCS), IIT (BHU), Varanasi, functioning as
              <span className="font-semibold"> SAKHA – a supportive companion </span>
              in students’ college journey, is organising a
              two-day Wellness & Wellbeing Capacity-Building Workshop.
            </p>

              <p>
                This in-person programme is designed to promote 
                <span className="font-semibold text-slate-800"> mental wellbeing</span>, 
                strengthen students’ coping capacities, and enable the 
                <span className="font-semibold text-slate-800"> early identification of psychosocial concerns </span> 
                within the campus community. The workshop aims to build a trained group of students and faculty members who can 
                responsibly support peers and contribute to a 
                <span className="font-semibold text-slate-800"> healthier college environment</span>. The programme follows a 
                <span className="font-semibold text-slate-800"> multi-level mental health framework </span> 
                focusing on awareness, early intervention, prevention & professional management.
              </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Page;
