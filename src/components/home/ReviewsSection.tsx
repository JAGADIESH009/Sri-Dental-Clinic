"use client";

import * as React from "react";
import { Star, BadgeCheck } from "lucide-react";
import { motion } from "motion/react";

const featuredReview = {
  name: "Saritha Athelli",
  text: "Had my dental implant treatment done with Dr. Rohan at Sri Dental Clinic, and I am very happy with the results. The doctor is highly skilled, explains everything clearly, and makes the patient feel comfortable throughout the procedure.",
  treatment: "Dental Implants"
};

const supportingReviews = [
  {
    name: "Alekhya Reddy",
    text: "I visited Sri Dental Clinic for my first ever root canal treatment. I was feeling anxious but Dr. Ananya was calm, explained the procedure in detail and ensured I was comfortable.",
    treatment: "Root Canal Treatment",
    category: "Endodontics",
    bg: "bg-[#f4f2ea]",
    textCol: "text-primary",
    accent: "text-accent"
  },
  {
    name: "Ridh Zee",
    text: "Good service, doctors are nice and very patient. They will explain everything in detail about the procedure. The clinic feels more like a serene architectural space.",
    treatment: "General Consultation",
    category: "General Care",
    bg: "bg-[#9ab8b0]",
    textCol: "text-primary",
    accent: "text-[#0f2e2d]"
  },
  {
    name: "Karthik Ramanathan",
    text: "The doctors took the time to explain every detail of my treatment. Completely painless and exceptional attention to hygiene and comfort.",
    treatment: "Dental Restorations",
    category: "Prosthodontics",
    bg: "bg-[#f4f2ea]",
    textCol: "text-primary",
    accent: "text-accent"
  }
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative w-full overflow-hidden bg-background py-24 lg:py-32 font-manrope">
      {/* Ambient Subsurface Luster */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-[#9df1f3]/30 blur-3xl mix-blend-multiply"></div>
      <div className="pointer-events-none absolute -bottom-48 -left-20 h-[30rem] w-[30rem] rounded-full bg-[#e3e2df]/60 blur-3xl"></div>
      
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-8 lg:px-16">
        
        {/* Upper Section: Asymmetric Header & Featured Testimonial Anchor */}
        <div className="grid grid-cols-1 items-start gap-8 lg:gap-12 lg:grid-cols-12 mb-16 lg:mb-24">
          
          {/* Left Column: Editorial Eyebrow, Narrative & Metric Summary (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:col-span-7 pr-0 lg:pr-12"
          >
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-accent/10 px-4 py-1.5 mb-6">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent"></span>
              <span className="font-manrope text-label font-semibold  tracking-[0.18em] text-accent">Patient Experiences</span>
            </div>
            
            <h2 className="font-newsreader text-h2 md:text-h1 lg:text-h1 text-primary tracking-tight leading-[1.1]">
              Gentle dental care. <br className="hidden sm:inline" />
              <span className="italic font-light text-accent">Beautiful smiles.</span>
            </h2>
            
            <p className="mt-6 max-w-xl font-manrope text-lead text-secondary leading-relaxed">
              Patient experiences reflect our commitment to thoughtful, gentle dental care and precision aesthetic outcomes in a calm clinical atmosphere.
            </p>
            
            {/* Metric Summary & Trust Pill Anchor */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              {/* Google Aggregate Pane */}
              <div className="sm:col-span-7 flex items-center gap-6 rounded-xl bg-white p-6 shadow-sm border border-[#e3e2df]/50 transition-all duration-300 hover:shadow-md">
                <div className="flex flex-col items-start">
                  <div className="flex items-baseline gap-2">
                    <span className="font-newsreader text-h2 font-bold text-primary leading-none">4.9</span>
                    <span className="font-manrope text-label font-semibold text-secondary tracking-widest">/ 5.0</span>
                  </div>
                  <div aria-label="5 out of 5 stars" className="mt-2 flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="h-10 w-px bg-[#e3e2df]"></div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-primary font-manrope text-body font-bold">
                    <span>Google Rating</span>
                    <BadgeCheck className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-manrope text-ui text-secondary">Certified Patient Reviews</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column: Featured Anchor Testimonial Vitrine (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:col-span-5 mt-8 lg:mt-0"
          >
            <div className="relative flex flex-col justify-between overflow-hidden rounded-xl rounded-br-none bg-white text-primary p-8 md:p-10 shadow-sm border border-[#e3e2df] transition-all duration-500 hover:-translate-y-1 hover:shadow-lg min-h-[380px]">
              <div className="relative z-10 flex flex-col">
                <div className="flex items-center justify-between">
                  <div aria-label="5 stars" className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 font-manrope text-label font-semibold tracking-widest  text-accent">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    Verified Care
                  </span>
                </div>
                
                <blockquote className="mt-8 font-manrope text-lead md:text-lead text-primary leading-relaxed font-medium">
                  &ldquo;{featuredReview.text}&rdquo;
                </blockquote>
              </div>
              
              <div className="relative z-10 mt-12">
                <div className="w-full h-px bg-[#e3e2df] mb-6"></div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-manrope text-lead text-primary font-bold tracking-tight">&mdash; {featuredReview.name}</span>
                    <span className="font-manrope text-ui text-secondary mt-0.5">{featuredReview.treatment}</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-[#f2f1ed] px-3 py-1 text-secondary font-manrope text-label font-semibold tracking-widest ">
                    <span>Google Review</span>
                  </div>
                </div>
              </div>
              
              {/* Halftone Dot-Matrix Corner Triangle Pattern */}
              <div className="pointer-events-none absolute bottom-0 right-0 w-16 h-16 opacity-30">
                <svg className="w-full h-full text-primary fill-current" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern height="5" id="dot-grid-1" patternUnits="userSpaceOnUse" width="5" x="0" y="0">
                      <circle cx="2.5" cy="2.5" fill="currentColor" r="1.2"></circle>
                    </pattern>
                    <mask id="corner-mask-1">
                      <polygon fill="white" points="64,0 64,64 0,64"></polygon>
                    </mask>
                  </defs>
                  <polygon fill="url(#dot-grid-1)" mask="url(#corner-mask-1)" points="64,0 64,64 0,64"></polygon>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Lower Section: 3-Column Supporting Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportingReviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 + (idx * 0.1) }}
              className={`relative flex flex-col justify-between overflow-hidden rounded-xl rounded-br-none ${review.bg} ${review.textCol} p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg min-h-[340px]`}
            >
              <div className="relative z-10 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div aria-label="5 stars" className={`flex ${review.accent}`}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className={`font-manrope text-label font-bold tracking-widest ${review.accent}`}>
                    {review.category}
                  </span>
                </div>
                <p className="font-manrope text-body leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
              
              <div className="relative z-10 mt-12 pt-2">
                <div className={`w-full h-px ${review.textCol} opacity-20 mb-6`}></div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-manrope text-body font-bold">&mdash; {review.name}</span>
                    <span className="font-manrope text-ui opacity-80 mt-0.5">{review.treatment}</span>
                  </div>
                </div>
              </div>
              
              {/* Halftone Dot-Matrix Corner Pattern */}
              <div className="pointer-events-none absolute bottom-0 right-0 w-16 h-16 opacity-10">
                <svg className="w-full h-full fill-current" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern height="5" id={`dot-grid-sub-${idx}`} patternUnits="userSpaceOnUse" width="5" x="0" y="0">
                      <circle cx="2.5" cy="2.5" fill="currentColor" r="1.2"></circle>
                    </pattern>
                    <mask id={`corner-mask-sub-${idx}`}>
                      <polygon fill="white" points="64,0 64,64 0,64"></polygon>
                    </mask>
                  </defs>
                  <polygon fill={`url(#dot-grid-sub-${idx})`} mask={`url(#corner-mask-sub-${idx})`} points="64,0 64,64 0,64"></polygon>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
