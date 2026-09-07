"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { motion } from "motion/react";

const reviews = [
  {
    name: "Saritha Athelli",
    text: "had my dental implant treatment done with Dr. Bharath at Sri Dental Clinic, Yapral, and I am very happy with the results. The doctor is highly skilled, explains everything clearly, and makes the patient feel comfortable throughout the procedure Thankyou"
  },
  {
    name: "Alekhya Reddy",
    text: "I have visited sri dental clinic in yapral for my first ever root canal treatment. I was feeling anxious but Dr.prasanthi was calm and explained the procedure in detail and ensured i was comfortable throughout the procedure."
  },
  {
    name: "Ridh Zee",
    text: "Good service , doctors are nice and very patient. They will explain everything in detail about procedure."
  }
];

const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] } }
};

export function ReviewsSection() {
  const featuredReview = reviews[0];
  const supportingReviews = reviews.slice(1);

  return (
    <section id="reviews" className="bg-[#fdfbf7] text-[#0a192f] w-full py-24 md:py-32 px-6 lg:px-12 flex flex-col items-center">
      
      {/* HEADER SECTION */}
      <motion.div
        initial="hidden" whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        className="max-w-[800px] flex flex-col items-center text-center mb-20"
      >
        <motion.span variants={FADE_UP} className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6 block">
          PATIENT EXPERIENCES
        </motion.span>
        
        <motion.h2 variants={FADE_UP} className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] tracking-tight mb-16 text-[#0a192f]">
          What our patients say.
        </motion.h2>

        <motion.div variants={FADE_UP} className="flex flex-col items-center justify-center">
          <h3 className="text-5xl md:text-6xl font-serif font-light text-[#0a192f] leading-none mb-3">
            4.9
          </h3>
          <div className="flex items-center gap-1.5 justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#0a192f] text-[#0a192f]" />
            ))}
          </div>
          <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#0a192f]/60">
            Google Rating
          </p>
        </motion.div>
      </motion.div>

      {/* EDITORIAL REVIEWS LAYOUT */}
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        
        {/* LEFT COLUMN: Featured Review */}
        <motion.div 
          className="lg:col-span-7 flex flex-col relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle giant decorative quote mark */}
          <span className="absolute -top-12 -left-6 md:-left-8 text-[140px] md:text-[180px] font-serif text-[#0a192f]/5 leading-none select-none pointer-events-none">
            &ldquo;
          </span>

          <div className="relative z-10 pt-6 md:pt-10">
            <p className="text-2xl md:text-4xl lg:text-[40px] font-serif text-[#0a192f] leading-[1.4] mb-12 font-light">
              &ldquo;{featuredReview.text}&rdquo;
            </p>
            <div className="flex items-center gap-6">
              <div className="h-[1px] w-8 md:w-12 bg-[#0a192f]/20" />
              <div className="flex flex-col gap-1.5">
                <span className="text-sm font-semibold tracking-[0.1em] uppercase text-[#0a192f]">
                  {featuredReview.name}
                </span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Supporting Reviews */}
        <div className="lg:col-span-5 flex flex-col mt-12 lg:mt-0 pt-16 lg:pt-0 border-t border-[#0a192f]/10 lg:border-t-0">
          {supportingReviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col pb-12 mb-12 border-b border-[#0a192f]/10 last:border-0 last:mb-0 last:pb-0"
            >
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent/80 text-accent/80" />
                ))}
              </div>
              
              <p className="text-lg md:text-xl font-light text-[#0a192f]/80 leading-relaxed mb-8">
                &ldquo;{review.text}&rdquo;
              </p>
              
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#0a192f]/60">
                {review.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}
