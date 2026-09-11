"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQS: FAQ[] = [
  {
    question: "Do you accept new patients?",
    answer: "Yes, we are currently accepting new patients. We take pride in building long-term relationships and would be delighted to welcome you to our clinic."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can request an appointment using the 'Book Appointment' button on our website. Once you submit your details, we will contact you via WhatsApp or phone to confirm a suitable time."
  },
  {
    question: "What should I expect during my first visit?",
    answer: "Your initial consultation is designed to be unhurried and comprehensive. We will review your dental history, perform a precise diagnostic examination, and discuss a personalized treatment plan tailored to your needs."
  },
  {
    question: "Do you offer emergency dental care?",
    answer: "Yes, we understand that dental emergencies require prompt attention. Please call our clinic directly at +91 87349 34747 if you are experiencing severe pain or require immediate care."
  },
  {
    question: "Is sedation dentistry available?",
    answer: "Absolutely. We specialize in sedation dentistry to ensure our patients experience uncommon comfort and anxiety-free treatments."
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-background py-24 px-6 lg:px-12 scroll-mt-24 border-t border-border/10">
      <div className="max-w-[800px] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-h2 md:text-h1 font-heading font-light text-primary mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-body md:text-lead text-secondary font-sans font-light">
            Clear, transparent information about your care at Unity Dental Clinics.
          </p>
        </div>

        <div className="space-y-0 border-t border-border/40">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              <div 
                key={idx} 
                className="border-b border-border/40"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between py-6 md:py-8 px-2 text-left transition-colors hover:text-primary focus:outline-none"
                >
                  <h3 className="text-lead md:text-h3 font-heading font-normal text-primary pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="shrink-0 text-[#10B981]"
                  >
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-body font-sans text-secondary font-light leading-relaxed pb-8 px-2 max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
