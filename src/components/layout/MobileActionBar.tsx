"use client";

import { Phone, CalendarPlus } from "lucide-react";

export function MobileActionBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 bg-background border-t border-border shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 flex items-center h-16">
      <a 
        href="tel:+919866496237"
        className="flex-1 flex flex-col items-center justify-center gap-1 text-primary hover:text-accent transition-colors border-r border-border h-full"
      >
        <Phone className="h-5 w-5" />
        <span className="text-[10px] font-semibold tracking-wider uppercase">Call</span>
      </a>
      
      <a 
        href="https://wa.me/9866496237"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 text-primary hover:text-accent transition-colors border-r border-border h-full"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="20" 
          height="20" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="lucide lucide-message-circle"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
        <span className="text-[10px] font-semibold tracking-wider uppercase">WhatsApp</span>
      </a>

      <a 
        href="#book"
        className="flex-[1.5] bg-accent text-accent-foreground flex flex-col items-center justify-center gap-1 hover:bg-accent/90 transition-colors h-full"
      >
        <CalendarPlus className="h-5 w-5" />
        <span className="text-[10px] font-semibold tracking-wider uppercase">Book</span>
      </a>
    </div>
  );
}
