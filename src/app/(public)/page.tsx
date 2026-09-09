"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookingSection } from "@/components/home/BookingSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { DoctorsSection } from "@/components/home/DoctorsSection";
import { LocationSection } from "@/components/home/LocationSection";
import { motion } from "motion/react";


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
  return (
    <div className="flex flex-col w-full">

      {/* 1. HERO SECTION (Photographic Editorial) */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-center pt-24 pb-28 px-6 lg:px-12 overflow-hidden">

        {/* Background Image Layer */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/hero_clinic_provided.jpg"
            alt="Sri Dental Clinic Interior"
            fill
            className="object-cover object-[94%_center] sm:object-right"
            priority
          />
        </div>

        {/* Gradient Overlay Layers */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#0a192f] from-[15%] via-[#0a192f]/80 via-[50%] to-transparent to-[85%]" />
        <div className="absolute inset-x-0 top-0 h-48 z-10 pointer-events-none bg-gradient-to-b from-[#0a192f]/80 via-[#0a192f]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 z-10 pointer-events-none bg-gradient-to-t from-[#0a192f]/30 to-transparent" />

        {/* Content Layer */}
        <div className="relative z-20 w-full max-w-[1600px] mx-auto mt-auto sm:mt-0 pb-12 sm:pb-0">
          <motion.div
            className="flex flex-col max-w-[480px]"
            initial="hidden" animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.p variants={FADE_UP} className="text-label sm:text-label font-medium tracking-[0.25em]  text-white/70 mb-8 sm:mb-6">
              Sri Dental Clinic
            </motion.p>

            <motion.h1
              variants={FADE_UP}
              className="text-h2 md:text-h1 lg:text-display font-serif font-light text-white leading-[1.05] tracking-tight mb-5 sm:mb-8 drop-shadow-sm max-w-[340px] sm:max-w-none"
            >
              Bright Smiles,<br /> Rooted in <span className="italic text-white/90">Tradition.</span>
            </motion.h1>

            <motion.p variants={FADE_UP} className="text-body md:text-lead text-white/80 font-light leading-[1.6] mb-10 max-w-[280px] sm:max-w-[480px]">
              A private dental studio delivering sophisticated, precision-driven oral healthcare.
            </motion.p>

            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2 sm:mt-0">
              <a
                href="#book"
                className="group relative inline-flex items-center justify-center bg-background text-primary px-7 py-3.5 rounded-full overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] w-auto max-w-[320px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                <span className="relative z-10 flex items-center font-medium text-ui tracking-wide">
                  Book a consultation
                  <ArrowRight className="ml-2.5 w-4 h-4 transition-transform group-hover:translate-x-1 opacity-80" />
                </span>
              </a>

              <a
                href="tel:+919000000000"
                className="group relative hidden lg:inline-flex items-center justify-center bg-transparent border border-white/30 text-white px-7 py-3.5 rounded-full overflow-hidden transition-all hover:bg-white/10 hover:border-white w-auto"
              >
                <span className="relative z-10 flex items-center font-medium text-ui tracking-wide">
                  CALL US
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRO (Typography-led) */}
      <section id="about" className="bg-background py-16 md:py-20 px-6 lg:px-12 w-full flex flex-col items-center">
        <motion.div
          className="max-w-[1200px] mx-auto text-center"
          initial="show" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.h2 variants={FADE_UP} className="text-h2 md:text-h1 lg:text-display font-serif font-light text-primary leading-tight mb-8">
            Precision dentistry meets <br className="hidden md:block" /> uncommon comfort.
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-lead md:text-h3 text-[#4a5568] max-w-2xl mx-auto font-light leading-relaxed">
            We believe that exceptional oral care should feel calm, unhurried, and entirely focused on your well-being. At Sri Dental Clinic, we merge advanced clinical expertise with a refined, patient-first philosophy.
          </motion.p>
        </motion.div>
      </section>

      {/* 3. CLINICAL EXPERTISE (Editorial Presentation) */}
      <section id="treatments" className="bg-background text-primary py-32 px-6 lg:px-12 w-full">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#0a192f]/10 pb-8"
            initial="show" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2 variants={FADE_UP} className="text-h2 md:text-display font-serif tracking-tight text-primary">Clinical Expertise</motion.h2>
            <motion.p variants={FADE_UP} className="text-primary/70 max-w-sm text-left md:text-right hidden md:block font-light">
              Sophisticated, precision-driven oral healthcare designed for your lasting well-being.
            </motion.p>
          </motion.div>

          <div className="flex flex-col">

            {/* 01 — COSMETIC DENTISTRY (Image on Right) */}
            <motion.div
              className="group flex flex-col md:flex-row items-center gap-12 py-16 border-b border-[#0a192f]/10"
              initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            >
              <div className="w-full md:w-1/2 pr-0 md:pr-12">
                <span className="text-accent font-mono text-h3 md:text-h3 mb-6 block">01 —</span>
                <h3 className="text-h2 md:text-h1 font-serif text-primary mb-6 leading-tight transition-colors duration-500">
                  Cosmetic<br />Dentistry
                </h3>
                <p className="text-primary/70 text-lead font-light leading-relaxed max-w-md">
                  Elevating your natural aesthetics with precision-crafted veneers, crowns, and advanced restorative techniques tailored to your unique facial structure.
                </p>
              </div>
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#e3e2df]">
                  <Image src="/service_cosmetic.jpg" alt="Cosmetic Dentistry" fill className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
            </motion.div>

            {/* 02 — PEDIATRIC CARE (Image Left / Text Right) */}
            <motion.div
              className="group flex flex-col md:flex-row items-center gap-12 py-16 border-b border-[#0a192f]/10"
              initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            >
              <div className="w-full md:w-5/12 order-2 md:order-1 mt-8 md:mt-0">
                <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-[#e3e2df]">
                  <Image src="/service_pediatric.jpg" alt="Pediatric Care" fill className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
              <div className="w-full md:w-7/12 order-1 md:order-2 pl-0 md:pl-12">
                <span className="text-accent font-mono text-h3 md:text-h3 mb-6 block">02 —</span>
                <h3 className="text-h2 md:text-h1 font-serif text-primary mb-6 leading-tight transition-colors duration-500">
                  Pediatric<br />Care
                </h3>
                <p className="text-primary/70 text-lead font-light leading-relaxed max-w-md">
                  Gentle, preventative foundational care ensuring a lifetime of healthy smiles for our youngest patients in a calming, child-friendly environment.
                </p>
              </div>
            </motion.div>

            {/* 03 — SEDATION DENTISTRY (Wide Cinematic Image) */}
            <motion.div
              className="group flex flex-col py-16 border-b border-[#0a192f]/10"
              initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col md:flex-row items-start mb-12">
                <div className="w-full md:w-1/3">
                  <span className="text-accent font-mono text-h3 md:text-h3 mb-6 block">03 —</span>
                  <h3 className="text-h2 md:text-h1 font-serif text-primary leading-tight transition-colors duration-500 mb-6 md:mb-0">
                    Sedation<br />Dentistry
                  </h3>
                </div>
                <div className="w-full md:w-2/3 md:pl-24 pt-2 md:pt-12">
                  <p className="text-primary/70 text-h3 md:text-h3 font-light leading-relaxed max-w-lg">
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

      <DoctorsSection />

      {/* 5. REVIEWS (Premium Editorial Layout) */}
      <ReviewsSection />

      {/* 6. VISIT THE CLINIC */}
      <LocationSection />

      {/* 7. FAQ (Clean Accordion) */}
      <section id="faq" className="bg-background py-32 px-6 lg:px-12 w-full text-primary">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="mb-16"
          >
            <motion.span variants={FADE_UP} className="text-label font-semibold tracking-[0.2em]  text-accent mb-4 block">FAQ</motion.span>
            <motion.h2 variants={FADE_UP} className="text-h2 md:text-h1 font-serif text-primary">
              Before your visit.
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Accordion type="single" className="w-full">
              {[
                {
                  q: "What happens during my first appointment?",
                  a: "Your first visit involves a comprehensive evaluation. We will review your dental history, perform necessary clinical exams, and discuss a personalized treatment plan with you."
                },
                {
                  q: "I’m not sure what treatment I need — can I still book?",
                  a: "Absolutely. You can select 'General Checkup/Consultation' when booking. Our specialists will diagnose your condition and recommend the appropriate clinical care."
                },
                {
                  q: "Can I choose a preferred appointment time?",
                  a: "Yes, our booking form allows you to select your preferred date. Once submitted, our team will contact you to confirm the exact time based on specialist availability."
                },
                {
                  q: "What should I bring to my first appointment?",
                  a: "Please bring any previous dental records, a list of your current medications, and relevant medical history."
                },
                {
                  q: "Can I book an appointment for my child?",
                  a: "Yes, we provide specialized pediatric care in a calm, welcoming environment to ensure children feel comfortable during their visit."
                },
                {
                  q: "What if I need to reschedule my appointment?",
                  a: "We understand plans change. You can reschedule by calling our clinic directly, ideally 24 hours in advance."
                },
                {
                  q: "Can I speak with the clinic before deciding on an appointment?",
                  a: "Of course. You can call our clinic to discuss any concerns before scheduling your visit."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#0a192f]/10 py-4 group">
                  <AccordionTrigger className="text-lead md:text-h3 font-serif text-primary hover:no-underline hover:text-accent transition-colors text-left flex gap-4 md:gap-6 items-start">
                    <span className="text-accent/60 font-mono text-ui md:text-body mt-1 shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-primary/70 text-body leading-relaxed font-light pt-2 pb-6 pl-[2.25rem] md:pl-[3.25rem]">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* 8. STRONG CTA */}
      <BookingSection />

    </div>
  );
}
