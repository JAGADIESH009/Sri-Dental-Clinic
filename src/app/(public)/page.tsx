"use client";

import { ArrowRight, ShieldCheck, Clock, Stethoscope } from "lucide-react";
import Image from "next/image";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { DoctorsSection } from "@/components/home/DoctorsSection";
import { LocationSection } from "@/components/home/LocationSection";
import { BookingSection } from "@/components/home/BookingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { motion } from "motion/react";
import { useScrollToAppointment } from "@/hooks/useScrollToAppointment";


const FADE_UP = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }
  }
};

export default function Home() {
  const scrollToAppointment = useScrollToAppointment();

  return (
    <div className="flex flex-col w-full">

      {/* 1. HERO SECTION (Premium Editorial) */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-center pt-24 pb-28 px-6 lg:px-12 overflow-hidden">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/unity_hero_final.jpg"
            alt="Unity Dental Clinics Interior in Vijayawada"
            fill
            className="object-cover object-[95%_center] sm:object-center"
            priority
          />
        </div>

        {/* Sophisticated Overlay tailored for Unity text readability on left */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#021124] from-[20%] via-[#021124]/80 via-[40%] to-transparent to-[75%]" />

        {/* Content Layer */}
        <div className="relative z-20 w-full max-w-[1600px] mx-auto mt-auto sm:mt-0 pb-12 sm:pb-0">
          <motion.div 
            className="flex flex-col max-w-[600px]"
            initial="hidden" animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.div variants={FADE_UP} className="flex items-center gap-4 mb-6">
              <p className="text-label sm:text-label font-sans font-medium tracking-[0.25em] text-[#e3e2df]/60 uppercase">
                Unity Dental Clinics
              </p>
            </motion.div>

            <motion.h1 
              variants={FADE_UP}
              className="text-[clamp(42px,6vw,68px)] font-heading font-light text-white leading-[1.05] tracking-tight mb-4 drop-shadow-sm"
            >
              United by care.<br /> 
              Defined by <span className="italic font-normal text-[#9df1f3]">your smile.</span>
            </motion.h1>

            <motion.p variants={FADE_UP} className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#e3e2df] font-sans font-light leading-[1.5] mb-10 max-w-[320px] sm:max-w-[420px]">
              Thoughtful dental care for healthier, more confident smiles in Vijayawada.
            </motion.p>

            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2 sm:mt-0">
              <a 
                href="/#appointment"
                onClick={scrollToAppointment}
                className="group relative inline-flex items-center justify-center bg-white text-[#0047B3] px-7 py-3 sm:px-8 sm:py-3.5 rounded-full overflow-hidden transition-all hover:bg-white/90 shadow-[0_4px_14px_rgba(255,255,255,0.25)]"
              >
                <span className="relative z-10 flex items-center font-sans font-bold text-[15px] sm:text-ui tracking-wide">
                  Book a Consultation
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>

              <a 
                href="tel:+918734934747"
                className="hidden sm:inline-flex group relative items-center justify-center bg-transparent border border-white/30 text-white px-8 py-3.5 rounded-full overflow-hidden transition-all hover:bg-white/10"
              >
                <span className="relative z-10 flex items-center font-sans font-bold text-ui tracking-wide">
                  Call Us
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. PREMIUM BRAND STATEMENT */}
      <section id="about" className="bg-background pt-12 pb-24 md:pt-20 md:pb-32 px-6 lg:px-12 w-full flex flex-col items-center scroll-mt-[80px]">
        <motion.div 
          className="max-w-[1000px] mx-auto text-center flex flex-col items-center"
          initial="show" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div variants={FADE_UP} className="w-px h-12 bg-[#10B981]/30 mb-8" />
          <motion.h2 variants={FADE_UP} className="text-h2 md:text-[3rem] font-heading font-light text-primary leading-tight mb-8">
            “United by care.<br className="hidden md:block" /> Defined by your smile<span className="text-[#10B981]">.</span>”
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-body md:text-lead text-secondary max-w-3xl mx-auto font-sans font-light leading-relaxed">
            We believe that exceptional oral care should feel calm, unhurried, and entirely focused on your well-being. At Unity Dental Clinics, we merge advanced clinical expertise with a refined, patient-first philosophy in a beautifully serene environment.
          </motion.p>
        </motion.div>
      </section>

      {/* 3. SELECTED DENTAL CARE / TREATMENTS */}
      <section id="treatments" className="bg-background text-primary py-24 px-6 lg:px-12 w-full">
        <div className="max-w-[1200px] mx-auto">
          <motion.div 
            className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#0047B3]/10 pb-8"
            initial="show" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2 variants={FADE_UP} className="text-h2 md:text-h1 font-heading tracking-tight text-primary">Clinical Expertise</motion.h2>
            <motion.p variants={FADE_UP} className="text-body text-secondary max-w-sm text-left md:text-right hidden md:block font-sans font-light">
              Sophisticated, precision-driven oral healthcare designed for your lasting well-being.
            </motion.p>
          </motion.div>

          <div className="flex flex-col">
            
            {/* 01 — COSMETIC DENTISTRY */}
            <motion.div 
              className="group flex flex-col md:flex-row items-center gap-12 py-16 border-b border-[#0047B3]/10"
              initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            >
              <div className="w-full md:w-1/2 pr-0 md:pr-12">
                <span className="text-[#10B981] font-heading text-lead md:text-h3 mb-4 block">01 —</span>
                <h3 className="text-h3 md:text-h2 font-heading text-primary mb-4 leading-tight transition-colors duration-500">
                  Cosmetic<br />Dentistry
                </h3>
                <p className="text-secondary font-sans text-body font-light leading-relaxed max-w-md">
                  Elevating your natural aesthetics with precision-crafted veneers, crowns, and advanced restorative techniques tailored to your unique facial structure.
                </p>
              </div>
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#e3e2df]">
                  <Image src="/service_cosmetic.jpg" alt="Cosmetic Dentistry" fill className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
            </motion.div>

            {/* 02 — PEDIATRIC CARE */}
            <motion.div 
              className="group flex flex-col md:flex-row items-center gap-12 py-16 border-b border-[#0047B3]/10"
              initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            >
              <div className="w-full md:w-5/12 order-2 md:order-1 mt-8 md:mt-0">
                <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-[#e3e2df]">
                  <Image src="/service_pediatric.jpg" alt="Pediatric Care" fill className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
              <div className="w-full md:w-7/12 order-1 md:order-2 pl-0 md:pl-12">
                <span className="text-[#10B981] font-heading text-lead md:text-h3 mb-4 block">02 —</span>
                <h3 className="text-h3 md:text-h2 font-heading text-primary mb-4 leading-tight transition-colors duration-500">
                  Pediatric<br />Care
                </h3>
                <p className="text-secondary font-sans text-body font-light leading-relaxed max-w-md">
                  Gentle, preventative foundational care ensuring a lifetime of healthy smiles for our youngest patients in a calming, child-friendly environment.
                </p>
              </div>
            </motion.div>

            {/* 03 — SEDATION DENTISTRY */}
            <motion.div 
              className="group flex flex-col py-16 border-b border-[#0047B3]/10"
              initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col md:flex-row items-start mb-12">
                <div className="w-full md:w-1/3">
                  <span className="text-[#10B981] font-heading text-lead md:text-h3 mb-4 block">03 —</span>
                  <h3 className="text-h3 md:text-h2 font-heading text-primary leading-tight transition-colors duration-500 mb-6 md:mb-0">
                    Sedation<br />Dentistry
                  </h3>
                </div>
                <div className="w-full md:w-2/3 md:pl-24 pt-2 md:pt-12">
                  <p className="text-secondary text-lead font-sans font-light leading-relaxed max-w-lg">
                    Experience uncommon comfort. We provide advanced sedation protocols for entirely anxiety-free and unhurried clinical interventions.
                  </p>
                </div>
              </div>
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-[#e3e2df]">
                <Image src="/service_sedation.jpg" alt="Sedation Dentistry" fill className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]" sizes="100vw" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. WHY PATIENTS CHOOSE UNITY (NEW SECTION) */}
      <section className="bg-surface-container py-32 px-6 lg:px-12 w-full relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div 
            className="mb-12 md:mb-16 text-center max-w-2xl mx-auto"
            initial="show" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2 variants={FADE_UP} className="text-h2 md:text-h1 font-heading font-light text-primary mb-4">
              Why patients choose <br/><span className="italic text-[#0047B3]">Unity Dental Clinics</span>
            </motion.h2>
            <motion.p variants={FADE_UP} className="text-body text-secondary font-sans font-light">
              We have redefined the dental experience, shifting the focus from rushed appointments to lasting relationships built on precision, transparency, and comfort.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={FADE_UP} className="bg-background p-10 shadow-sm transition-all hover:shadow-md border border-[#0047B3]/5">
              <div className="w-12 h-12 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-8">
                <ShieldCheck className="w-6 h-6 text-[#10B981]" strokeWidth={1.5} />
              </div>
              <h3 className="text-h3 font-heading text-primary mb-4">Diagnostic Precision</h3>
              <p className="text-secondary font-sans font-light leading-relaxed">
                We utilize microscopic precision and advanced imaging to ensure every diagnosis is perfectly accurate before any treatment begins.
              </p>
            </motion.div>

            <motion.div variants={FADE_UP} className="bg-background p-10 shadow-sm transition-all hover:shadow-md border border-[#0047B3]/5">
              <div className="w-12 h-12 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-8">
                <Clock className="w-6 h-6 text-[#10B981]" strokeWidth={1.5} />
              </div>
              <h3 className="text-h3 font-heading text-primary mb-4">Unhurried Care</h3>
              <p className="text-secondary font-sans font-light leading-relaxed">
                Your appointments are designed with extensive buffers. We take the time to listen, explain, and execute without rushing.
              </p>
            </motion.div>

            <motion.div variants={FADE_UP} className="bg-background p-10 shadow-sm transition-all hover:shadow-md border border-[#0047B3]/5">
              <div className="w-12 h-12 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-8">
                <Stethoscope className="w-6 h-6 text-[#10B981]" strokeWidth={1.5} />
              </div>
              <h3 className="text-h3 font-heading text-primary mb-4">Specialist Led</h3>
              <p className="text-secondary font-sans font-light leading-relaxed">
                Every procedure is performed by verified specialists who bring decades of combined experience and sophisticated aesthetic judgement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. DOCTORS PREVIEW */}
      <DoctorsSection />

      {/* 6. FAQ SECTION */}
      <FAQSection />

      {/* 7. GOOGLE REVIEWS (Trust Statement) */}
      <ReviewsSection />

      {/* 8. APPOINTMENT BOOKING */}
      <BookingSection />

      {/* 9. LOCATION */}
      <LocationSection />

    </div>
  );
}
