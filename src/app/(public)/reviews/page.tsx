"use client";

import * as React from "react";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { motion } from "motion/react";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-background text-primary flex flex-col w-full overflow-hidden selection:bg-primary selection:text-primary-foreground">
      
      {/* Use the shared Reviews component integrated on the homepage */}
      <ReviewsSection />

      {/* BOTTOM NAVY SECTION (Optional calm visual break) */}
      <section className="bg-primary text-primary-foreground py-24 px-6 lg:px-12 w-full mt-auto">
        <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-h2 md:text-h1 font-serif font-light text-white leading-tight mb-8">
              Experience the difference of calm, precision-driven care.
            </h2>
            <Link 
              href="/#book" 
              className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-full font-medium text-ui tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              BOOK A CONSULTATION
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
