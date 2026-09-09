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

export function DoctorsSection() {
  return (
    <section className="relative w-full overflow-hidden px-[1.25rem] md:px-[2rem] lg:px-[4rem] py-[2rem]">
{/* Ambient Structural Dental Arcs & Translucent Refractions */}
<div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
{/* Large Optical Arc (Cranial / Mandibular curvature motif) */}
<svg className="absolute -right-24 -top-32 w-[680px] h-[680px] text-accent opacity-[0.035] transform rotate-12" fill="none" viewBox="0 0 500 500">
<circle cx="250" cy="250" r="248" stroke="currentColor" strokeDasharray="4 8" strokeWidth="1" />
<circle cx="250" cy="250" r="210" stroke="currentColor" strokeWidth="1.5" />
<path d="M 80,250 C 80,120 380,120 420,250 C 440,320 340,410 250,410 C 160,410 60,320 80,250 Z" stroke="currentColor" strokeWidth="0.75" />
</svg>
{/* Subsurface Frosted Glow Discs */}
<div className="absolute left-1/3 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-[#9df1f3] opacity-40 blur-[130px]"></div>
<div className="absolute right-10 bottom-10 w-[420px] h-[420px] rounded-full bg-[#e9e8e4] opacity-70 blur-[100px]"></div>
<div className="absolute left-10 bottom-24 w-[360px] h-[360px] rounded-full bg-background opacity-60 blur-[90px]"></div>
{/* Linear Cadence Grid Guides (Strictly No standard borders, uses optical alignment rules) */}
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1b1c1a]/[0.06] to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#1b1c1a]/[0.06] to-transparent"></div>
</div>
{/* Monumental Translucent Watermark Typography (Rear Layer) */}
<div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center items-center select-none z-0 overflow-hidden">
<span className="font-heading text-[140px] md:text-[220px] lg:text-[300px] leading-none tracking-tighter text-primary/[0.03]  whitespace-nowrap font-light select-none transform translate-y-8">
        SPECIALISTS
      </span>
</div>
{/* Content Choreography */}
<div className="relative z-10 max-w-[88rem] mx-auto flex flex-col">
{/* Upper Section Header & Framing */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-[2rem] items-end mb-[2rem]">
<div className="lg:col-span-8 flex flex-col">
{/* Curatorial Pill Badge */}
<div className="inline-flex items-center gap-[0.5rem] self-start px-[0.75rem] py-[0.125rem] rounded bg-accent/[0.08] shadow-[0_2px_8px_rgba(0,105,108,0.04)] mb-[1rem]">
<span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
<span className="font-sans text-label leading-[14px] tracking-[0.12em] font-[600] tracking-[0.2em]  text-accent">
              OUR DOCTORS
            </span>
</div>
{/* Monumental Headline */}
<h2 className="font-heading lg:font-heading text-h2 leading-[44px] tracking-[-0.02em] font-[400] lg:text-h1 lg:leading-[56px] lg:tracking-[-0.025em] lg:font-[400] text-primary tracking-tight max-w-2xl text-balance">
            Specialists behind every <span className="italic font-heading font-light text-accent">smile.</span>
</h2>
</div>
{/* Terse Description in Disciplined Sans */}
<div className="lg:col-span-4 lg:pb-[0.5rem] flex flex-col justify-end">
<p className="font-sans text-body leading-[28px] tracking-[-0.005em] font-[400] text-secondary max-w-md leading-relaxed font-light">
            A distinguished team of specialists dedicated to advanced clinical care and sophisticated aesthetic results.
          </p>
</div>
</div>
{/* Asymmetric Staggered Monolith Canvas */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-[1.5rem] lg:gap-[2rem] items-start">
{/* Left Structural Spacer / Curatorial Cadence (Col 1-2 on Desktop) */}
<div className="hidden lg:flex lg:col-span-2 flex-col justify-between self-stretch py-[1rem]">
<div className="flex items-center gap-[0.5rem] text-secondary/40 font-sans text-label leading-[14px] tracking-[0.12em] font-[600] tracking-widest  [writing-mode:vertical-rl] rotate-180">
<span className="">SURGICAL ATELIER</span>
<span className="w-8 h-px bg-secondary/20"></span>
<span className="">Restore • Reconstruct</span>
</div>
<div className="font-sans text-label leading-[14px] tracking-[0.12em] font-[600] text-secondary/40 tracking-widest ">
            EST. 2025
          </div>
</div>
{/* Doctor 01: Elevated Vertical Glass Monolith (Col 3-7 on Desktop) */}
<div className="md:col-span-6 lg:col-span-5 group relative flex flex-col">
<div className="relative flex flex-col justify-between rounded-xl bg-background/70 backdrop-blur-2xl shadow-[0_20px_50px_rgba(18,28,41,0.05),0_1px_2px_rgba(255,255,255,0.9)_inset] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:bg-surface-container-lowest/85 group-hover:shadow-[0_28px_60px_rgba(18,28,41,0.09),0_1px_3px_rgba(255,255,255,1)_inset] min-h-[460px] p-[1.5rem] lg:p-[2rem]">
<div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/80 via-transparent to-[#e3e2df]/20 opacity-70"></div>
<div className="relative z-10 flex items-start justify-between">
<div className="flex flex-col">
<span className="font-heading text-h3 leading-[30px] tracking-[-0.01em] font-[500] text-accent font-light tracking-tight transition-transform duration-300 group-hover:translate-x-0.5">01</span>
<span className="font-sans text-label leading-[14px] tracking-[0.12em] font-[600] text-secondary/60 tracking-widest mt-[0.125rem]">SURGEON DOSSIER</span>
</div>
<div className="w-10 h-10 rounded-full bg-[#e9e8e4]/60 backdrop-blur-md flex items-center justify-center text-secondary/70 shadow-sm group-hover:text-secondary group-hover:bg-secondary-fixed/50 transition-colors duration-300">
<span className="material-symbols-outlined text-lead">verified</span>
</div>
</div>
<div className="relative z-10 my-[1rem] w-full overflow-hidden rounded-xl bg-[#e9e8e4]/40 aspect-[4/3] flex items-center justify-center shadow-sm">
  <img src="/doctors/bharath.jpg" alt="Dr. Prasanthi" className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" />
</div>
<div className="relative z-10 flex flex-col">
<div className="w-12 h-px bg-accent/30 mb-[1.5rem] transition-all duration-500 ease-out group-hover:w-24 group-hover:bg-secondary"></div>
<div className="flex items-baseline gap-[0.75rem] mb-[0.25rem]">
<h3 className="font-heading text-h3 leading-[36px] tracking-[-0.015em] font-[400] text-primary tracking-tight group-hover:text-primary transition-colors">Dr. Priya Sharma</h3>
</div>
<div className="flex flex-wrap items-center gap-[0.75rem] mb-[0.5rem]">
<span className="font-sans text-label leading-[16px] tracking-[0.08em] font-[600] tracking-wider  text-accent font-semibold">MDS</span>
<span className="w-1 h-1 rounded-full bg-secondary/30"></span>
<span className="font-sans text-body leading-[24px] tracking-[0em] font-[400] text-secondary font-medium">Oral &amp; Maxillofacial Surgeon</span>
</div>
</div>
</div>
</div>
{/* Doctor 02: Staggered Offset Monolith (Col 8-12 on Desktop, offset vertically) */}
<div className="md:col-span-6 lg:col-span-5 group relative flex flex-col md:mt-16">
<div className="relative flex flex-col justify-between rounded-xl bg-background/70 backdrop-blur-2xl shadow-[0_20px_50px_rgba(18,28,41,0.05),0_1px_2px_rgba(255,255,255,0.9)_inset] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:bg-surface-container-lowest/85 group-hover:shadow-[0_28px_60px_rgba(18,28,41,0.09),0_1px_3px_rgba(255,255,255,1)_inset] min-h-[460px] p-[1.5rem] lg:p-[2rem]">
<div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/80 via-transparent to-[#e3e2df]/20 opacity-70"></div>
<div className="relative z-10 flex items-start justify-between">
<div className="flex flex-col">
<span className="font-heading text-h3 leading-[30px] tracking-[-0.01em] font-[500] text-accent font-light tracking-tight transition-transform duration-300 group-hover:translate-x-0.5">02</span>
<span className="font-sans text-label leading-[14px] tracking-[0.12em] font-[600] text-secondary/60 tracking-widest mt-[0.125rem]">SURGEON DOSSIER</span>
</div>
<div className="w-10 h-10 rounded-full bg-[#e9e8e4]/60 backdrop-blur-md flex items-center justify-center text-secondary/70 shadow-sm group-hover:text-secondary group-hover:bg-secondary-fixed/50 transition-colors duration-300">
<span className="material-symbols-outlined text-lead">verified</span>
</div>
</div>
<div className="relative z-10 my-[1rem] w-full overflow-hidden rounded-xl bg-[#e9e8e4]/40 aspect-[4/3] flex items-center justify-center shadow-sm">
  <img src="/doctors/prasanthi.jpg" alt="Dr. Bharath Kumar" className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" />
</div>
<div className="relative z-10 flex flex-col">
<div className="w-12 h-px bg-accent/30 mb-[1.5rem] transition-all duration-500 ease-out group-hover:w-24 group-hover:bg-secondary"></div>
<div className="flex items-baseline gap-[0.75rem] mb-[0.25rem]">
<h3 className="font-heading text-h3 leading-[36px] tracking-[-0.015em] font-[400] text-primary tracking-tight group-hover:text-primary transition-colors">Dr. Arjun Patel</h3>
</div>
<div className="flex flex-wrap items-center gap-[0.75rem] mb-[0.5rem]">
<span className="font-sans text-label leading-[16px] tracking-[0.08em] font-[600] tracking-wider  text-accent font-semibold">MDS</span>
<span className="w-1 h-1 rounded-full bg-secondary/30"></span>
<span className="font-sans text-body leading-[24px] tracking-[0em] font-[400] text-secondary font-medium">Oral &amp; Maxillofacial Surgeon</span>
</div>
</div>
</div>
</div>
</div>
{/* Subtle Footnote Cadence Indicator */}
<div className="flex items-center justify-between mt-[2rem]">
<div className="flex items-center gap-[1rem]">
<span className="w-8 h-px bg-secondary/20"></span>
<span className="font-sans text-label leading-[14px] tracking-[0.12em] font-[600] tracking-widest text-secondary/60">
            Aethel Clinical Faculty
          </span>
</div>
<div className="flex items-center gap-[0.5rem] font-sans text-label leading-[14px] tracking-[0.12em] font-[600]  tracking-wider text-accent">
<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
<span className="">Maxillofacial Precision</span>
</div>
</div>
</div>
</section>
  );
}
