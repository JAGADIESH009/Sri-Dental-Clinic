"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import LocationMapWrapper from "@/components/home/LocationMapWrapper";
import { BookingSection } from "@/components/home/BookingSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
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
            <motion.p variants={FADE_UP} className="text-[10px] sm:text-xs font-medium tracking-[0.25em] uppercase text-white/70 mb-8 sm:mb-6">
              Sri Dental Clinic
            </motion.p>

            <motion.h1
              variants={FADE_UP}
              className="text-[38px] md:text-5xl lg:text-[72px] font-serif font-light text-white leading-[1.05] tracking-tight mb-5 sm:mb-8 drop-shadow-sm max-w-[340px] sm:max-w-none"
            >
              Bright Smiles,<br /> Rooted in <span className="italic text-white/90">Tradition.</span>
            </motion.h1>

            <motion.p variants={FADE_UP} className="text-[15px] md:text-lg text-white/80 font-light leading-[1.6] mb-10 max-w-[280px] sm:max-w-[480px]">
              A private dental studio in Yapral delivering sophisticated, precision-driven oral healthcare.
            </motion.p>

            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2 sm:mt-0">
              <a
                href="#book"
                className="group relative inline-flex items-center justify-center bg-[#fdfbf7] text-[#0a192f] px-7 py-3.5 rounded-full overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] w-auto max-w-[320px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                <span className="relative z-10 flex items-center font-medium text-[13px] tracking-wide">
                  BOOK A CONSULTATION
                  <ArrowRight className="ml-2.5 w-4 h-4 transition-transform group-hover:translate-x-1 opacity-80" />
                </span>
              </a>

              <a
                href="tel:+919866496237"
                className="group relative hidden lg:inline-flex items-center justify-center bg-transparent border border-white/30 text-white px-7 py-3.5 rounded-full overflow-hidden transition-all hover:bg-white/10 hover:border-white w-auto"
              >
                <span className="relative z-10 flex items-center font-medium text-[13px] tracking-wide">
                  CALL US
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRO (Typography-led) */}
      <section id="about" className="bg-[#fdfbf7] py-16 md:py-20 px-6 lg:px-12 w-full flex flex-col items-center">
        <motion.div
          className="max-w-[1200px] mx-auto text-center"
          initial="show" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.h2 variants={FADE_UP} className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-[#0a192f] leading-tight mb-8">
            Precision dentistry meets <br className="hidden md:block" /> uncommon comfort.
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-lg md:text-xl text-[#4a5568] max-w-2xl mx-auto font-light leading-relaxed">
            We believe that exceptional oral care should feel calm, unhurried, and entirely focused on your well-being. At Sri Dental Clinic, we merge advanced clinical expertise with a refined, patient-first philosophy.
          </motion.p>
        </motion.div>
      </section>

      {/* 3. CLINICAL EXPERTISE (Editorial Presentation) */}
      <section id="treatments" className="bg-primary text-primary-foreground py-32 px-6 lg:px-12 w-full">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-primary-foreground/10 pb-8"
            initial="show" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2 variants={FADE_UP} className="text-4xl md:text-6xl font-serif tracking-tight text-white">Clinical Expertise</motion.h2>
            <motion.p variants={FADE_UP} className="text-primary-foreground/80 max-w-sm text-left md:text-right hidden md:block font-light">
              Sophisticated, precision-driven oral healthcare designed for your lasting well-being.
            </motion.p>
          </motion.div>

          <div className="flex flex-col">

            {/* 01 — COSMETIC DENTISTRY (Image on Right) */}
            <motion.div
              className="group flex flex-col md:flex-row items-center gap-12 py-16 border-b border-primary-foreground/10"
              initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            >
              <div className="w-full md:w-1/2 pr-0 md:pr-12">
                <span className="text-accent font-mono text-xl md:text-2xl mb-6 block">01 —</span>
                <h3 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight transition-colors duration-500">
                  Cosmetic<br />Dentistry
                </h3>
                <p className="text-primary-foreground/80 text-lg font-light leading-relaxed max-w-md">
                  Elevating your natural aesthetics with precision-crafted veneers, crowns, and advanced restorative techniques tailored to your unique facial structure.
                </p>
              </div>
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-primary/50">
                  <Image src="/service_cosmetic.jpg" alt="Cosmetic Dentistry" fill className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
            </motion.div>

            {/* 02 — PEDIATRIC CARE (Image Left / Text Right) */}
            <motion.div
              className="group flex flex-col md:flex-row items-center gap-12 py-16 border-b border-primary-foreground/10"
              initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            >
              <div className="w-full md:w-5/12 order-2 md:order-1 mt-8 md:mt-0">
                <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-primary/50">
                  <Image src="/service_pediatric.jpg" alt="Pediatric Care" fill className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
              <div className="w-full md:w-7/12 order-1 md:order-2 pl-0 md:pl-12">
                <span className="text-accent font-mono text-xl md:text-2xl mb-6 block">02 —</span>
                <h3 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight transition-colors duration-500">
                  Pediatric<br />Care
                </h3>
                <p className="text-primary-foreground/80 text-lg font-light leading-relaxed max-w-md">
                  Gentle, preventative foundational care ensuring a lifetime of healthy smiles for our youngest patients in a calming, child-friendly environment.
                </p>
              </div>
            </motion.div>

            {/* 03 — SEDATION DENTISTRY (Wide Cinematic Image) */}
            <motion.div
              className="group flex flex-col py-16 border-b border-primary-foreground/10"
              initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col md:flex-row items-start mb-12">
                <div className="w-full md:w-1/3">
                  <span className="text-accent font-mono text-xl md:text-2xl mb-6 block">03 —</span>
                  <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight transition-colors duration-500 mb-6 md:mb-0">
                    Sedation<br />Dentistry
                  </h3>
                </div>
                <div className="w-full md:w-2/3 md:pl-24 pt-2 md:pt-12">
                  <p className="text-primary-foreground/80 text-xl md:text-2xl font-light leading-relaxed max-w-lg">
                    Experience uncommon comfort. We provide advanced sedation protocols for entirely anxiety-free and unhurried clinical interventions.
                  </p>
                </div>
              </div>
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-primary/50">
                <Image src="/service_sedation.jpg" alt="Sedation Dentistry" fill className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]" sizes="100vw" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. DOCTORS (Typography-based Editorial Pair) */}
      <section id="doctors" className="bg-[#fdfbf7] py-32 px-6 lg:px-12 text-[#0a192f] w-full">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* Left: Heading */}
            <div className="w-full lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="lg:sticky lg:top-32"
              >
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6 block">Our Doctors</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] mb-6">
                  Specialists<br className="hidden lg:block" />
                  behind every<br className="hidden lg:block" />
                  smile.
                </h2>
                <p className="text-[#0a192f]/70 font-light text-lg">
                  A distinguished team of specialists dedicated to advanced clinical care and sophisticated aesthetic results.
                </p>
              </motion.div>
            </div>

            {/* Right: Doctor List */}
            <div className="w-full lg:w-2/3 flex flex-col pt-4 lg:pt-0">

              {/* Doctor 01 */}
              <motion.div
                className="group border-b border-[#0a192f]/10 pb-12 mb-12 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute bottom-[-1px] left-0 w-0 h-[1px] bg-accent transition-all duration-700 ease-out group-hover:w-full" />

                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                  <div className="text-accent font-mono text-2xl md:text-3xl opacity-80">01</div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-5xl font-serif mb-4 transition-colors duration-500 group-hover:text-accent">Dr. Prasanthi</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                      <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#0a192f]/60">MDS</span>
                      <span className="hidden sm:block text-[#0a192f]/20">•</span>
                      <span className="text-[#0a192f]/80 font-light text-lg">Oral & Maxillofacial Surgeon</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Doctor 02 */}
              <motion.div
                className="group border-b border-[#0a192f]/10 pb-12 mb-12 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="absolute bottom-[-1px] left-0 w-0 h-[1px] bg-accent transition-all duration-700 ease-out group-hover:w-full" />

                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                  <div className="text-accent font-mono text-2xl md:text-3xl opacity-80">02</div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-5xl font-serif mb-4 transition-colors duration-500 group-hover:text-accent">Dr. Bharath Kumar</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                      <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#0a192f]/60">MDS</span>
                      <span className="hidden sm:block text-[#0a192f]/20">•</span>
                      <span className="text-[#0a192f]/80 font-light text-lg">Oral & Maxillofacial Surgeon</span>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. REVIEWS (Premium Editorial Layout) */}
      <ReviewsSection />

      {/* 6. VISIT THE CLINIC (Image/Map Side-by-Side) */}
      <section id="contact" className="bg-primary text-primary-foreground py-24 px-6 lg:px-12 w-full">
        <div className="max-w-[1200px] mx-auto bg-primary border border-primary-foreground/10 rounded-[2rem] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-none">

          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <motion.div
              className="flex flex-col w-full lg:w-1/2"
              initial={{ opacity: 1, x: 0 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-10">Visit the Clinic</h2>

              <div className="flex flex-col gap-8 mb-12">
                <div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase block mb-3">Address</span>
                  <p className="text-primary-foreground/80 leading-relaxed max-w-md font-light text-lg">
                    Ground Floor, Sri Krishna Enclave,<br />
                    5-9-470/92/93, Meherababa Colony,<br />
                    Panchasheel Enclave, Yapral,<br />
                    Secunderabad, Telangana 500087
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase block mb-3">Hours</span>
                  <p className="text-primary-foreground/80 leading-relaxed font-light text-lg">
                    10:00 AM – 2:00 PM<br />
                    5:00 PM – 8:30 PM
                  </p>
                </div>
              </div>

              <div>
                <a href="https://maps.app.goo.gl/yHsXn9T9p2PT61jc9" target="_blank" rel="noreferrer" className="inline-flex items-center text-white border-b border-white/30 pb-1 hover:border-white transition-colors font-medium">
                  Get Directions <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="relative w-full max-w-[500px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[inset_0_1px_1px_rgba(0,0,0,0.05)] mx-auto lg:mx-0 lg:ml-auto"
              initial={{ opacity: 1, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }}
            >
              <LocationMapWrapper />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 7. FAQ (Clean Accordion) */}
      <section id="faq" className="bg-[#fdfbf7] py-32 px-6 lg:px-12 w-full text-[#0a192f]">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="mb-16"
          >
            <motion.span variants={FADE_UP} className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">FAQ</motion.span>
            <motion.h2 variants={FADE_UP} className="text-4xl md:text-5xl font-serif text-[#0a192f]">
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
                  a: "We understand plans change. You can reschedule by calling our clinic directly or sending us a message via WhatsApp, ideally 24 hours in advance."
                },
                {
                  q: "Can I speak with the clinic before deciding on an appointment?",
                  a: "Of course. You can call our clinic or reach out via WhatsApp to discuss any concerns before scheduling your visit."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#0a192f]/10 py-4 group">
                  <AccordionTrigger className="text-lg md:text-xl font-serif text-[#0a192f] hover:no-underline hover:text-accent transition-colors text-left flex gap-4 md:gap-6 items-start">
                    <span className="text-accent/60 font-mono text-sm md:text-base mt-1 shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#0a192f]/70 text-base leading-relaxed font-light pt-2 pb-6 pl-[2.25rem] md:pl-[3.25rem]">
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
