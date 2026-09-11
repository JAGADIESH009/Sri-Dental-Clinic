"use client";

import React from "react";
import Image from "next/image";
import { Newsreader, Manrope } from "next/font/google";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

function DoctorCard({ number, label, name, qualifications, initials }: { number: string, label: string, name: string, qualifications: string, initials: string }) {
  return (
    <div className="premium-glass relative flex flex-col justify-between rounded-xl transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:bg-background/95 group-hover:shadow-[0_12px_40px_rgba(2,12,27,0.08)] min-h-[460px] p-[1.5rem] lg:p-[2rem]">
      {/* Removed old heavy gradient */}
      
      <div className="relative z-10 flex items-start justify-between">
        <div className="flex flex-col">
          <span className="font-heading text-h3 leading-[30px] tracking-[-0.01em] font-[500] text-accent font-light tracking-tight transition-transform duration-300 group-hover:translate-x-0.5">{number}</span>
          <span className="font-sans text-label leading-[14px] tracking-[0.12em] font-[600] text-secondary/60 tracking-widest mt-[0.125rem]">{label}</span>
        </div>
      </div>

      <div className="relative z-10 flex-1 my-[2rem] w-full flex items-center justify-center">
        <span className="font-heading text-[120px] lg:text-[140px] leading-none text-primary/5 tracking-tighter select-none transition-transform duration-700 ease-out group-hover:scale-105 group-hover:text-primary/10">
          {initials}
        </span>
      </div>

      <div className="relative z-10 flex flex-col">
        <div className="w-12 h-px bg-accent/30 mb-[1.5rem] transition-all duration-500 ease-out group-hover:w-24 group-hover:bg-secondary"></div>
        <div className="flex items-baseline gap-[0.75rem] mb-[0.25rem]">
          <h3 className="font-heading text-h3 leading-[36px] tracking-[-0.015em] font-[400] text-primary tracking-tight group-hover:text-primary transition-colors">{name}</h3>
        </div>
        <div className="flex flex-wrap items-center gap-[0.75rem] mb-[0.5rem]">
          <span className="font-sans text-label leading-[16px] tracking-[0.08em] font-[600] tracking-wider text-accent font-semibold">{qualifications}</span>
        </div>
      </div>
    </div>
  );
}

export function DoctorsSection() {
  return (
    <section id="doctors" className={`relative w-full overflow-hidden px-[1.25rem] md:px-[2rem] lg:px-[4rem] py-[4rem] md:py-[6rem] ${newsreader.variable} ${manrope.variable}`}>
      {/* Ambient Structural Dental Arcs & Translucent Refractions */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        <svg className="absolute -right-24 -top-32 w-[680px] h-[680px] text-accent opacity-[0.035] transform rotate-12" fill="none" viewBox="0 0 500 500">
          <circle cx="250" cy="250" r="248" stroke="currentColor" strokeDasharray="4 8" strokeWidth="1" />
          <circle cx="250" cy="250" r="210" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 80,250 C 80,120 380,120 420,250 C 440,320 340,410 250,410 C 160,410 60,320 80,250 Z" stroke="currentColor" strokeWidth="0.75" />
        </svg>
        <div className="absolute left-1/3 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-[#9df1f3] opacity-40 blur-[130px]"></div>
        <div className="absolute right-10 bottom-10 w-[420px] h-[420px] rounded-full bg-[#e9e8e4] opacity-70 blur-[100px]"></div>
        <div className="absolute left-10 bottom-24 w-[360px] h-[360px] rounded-full bg-background opacity-60 blur-[90px]"></div>
        
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1b1c1a]/[0.06] to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#1b1c1a]/[0.06] to-transparent"></div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center items-center select-none z-0 overflow-hidden">
        <span className="font-heading text-[140px] md:text-[220px] lg:text-[300px] leading-none tracking-tighter text-primary/[0.03] whitespace-nowrap font-light select-none transform translate-y-8">
          DOCTORS
        </span>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col">
        {/* Upper Section Header & Framing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2rem] items-end mb-[3rem] lg:mb-[5rem]">
          <div className="lg:col-span-8 flex flex-col">
            <div className="inline-flex items-center gap-[0.5rem] self-start px-[0.75rem] py-[0.125rem] rounded bg-accent/[0.08] shadow-[0_2px_8px_rgba(0,105,108,0.04)] mb-[1.5rem]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              <span className="font-sans text-label leading-[14px] tracking-[0.12em] font-[600] text-accent uppercase">
                OUR DOCTORS
              </span>
            </div>
            <h2 className="font-heading lg:font-heading text-h2 leading-[44px] tracking-[-0.02em] font-[400] lg:text-h1 lg:leading-[56px] tracking-[-0.025em] font-[400] text-primary tracking-tight max-w-2xl text-balance">
              The people behind your <span className="italic font-heading font-light text-accent">care.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pb-[0.5rem] flex flex-col justify-end">
            <p className="font-sans text-body leading-[28px] tracking-[-0.005em] font-[400] text-secondary max-w-md leading-relaxed font-light">
              A dedicated team of specialists bringing advanced clinical care and sophisticated aesthetic results.
            </p>
          </div>
        </div>

        {/* Asymmetric Staggered Monolith Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] items-start pb-[4rem]">
          
          {/* Doctor 01: Left */}
          <div className="group relative flex flex-col">
            <DoctorCard 
              number="01"
              label="DENTAL SURGEON"
              name="Dr. B. Vinod Kumar"
              qualifications="BDS"
              initials="VK"
            />
          </div>

          {/* Doctor 02: Middle, offset down slightly */}
          <div className="group relative flex flex-col lg:mt-[4rem]">
            <DoctorCard 
              number="02"
              label="SPECIALIST"
              name="Dr. Kotayya Theruru"
              qualifications="MDS"
              initials="KT"
            />
          </div>

          {/* Doctor 03: Right, offset down further */}
          <div className="md:col-span-2 lg:col-span-1 md:w-1/2 lg:w-full md:mx-auto lg:mx-0 group relative flex flex-col lg:mt-[8rem]">
            <DoctorCard 
              number="03"
              label="DENTAL SURGEON"
              name="Dr. P. Srinivasulu"
              qualifications="BDS"
              initials="PS"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
