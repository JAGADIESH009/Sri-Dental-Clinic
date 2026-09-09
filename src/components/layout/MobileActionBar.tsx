"use client";

import { Phone, CalendarPlus } from "lucide-react";

export function MobileActionBar() {
  return (
    <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[360px] z-40 flex items-center justify-center pb-[env(safe-area-inset-bottom)]">
      <div className="w-full bg-white/95 backdrop-blur-md border border-[#0a192f]/10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full flex items-center p-1.5 gap-1">
        
        <a 
          href="tel:+919000000000"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full text-primary hover:bg-black/5 transition-colors"
        >
          <Phone className="h-[15px] w-[15px]" strokeWidth={2.5} />
          <span className="text-label font-medium tracking-wide">Call</span>
        </a>
        


        <a 
          href="#book"
          className="flex-[1.1] flex items-center justify-center gap-1.5 bg-accent text-accent-foreground py-2.5 px-2 rounded-full shadow-sm hover:bg-accent/90 transition-all ml-1 shrink-0"
        >
          <CalendarPlus className="h-[15px] w-[15px]" strokeWidth={2.5} />
          <span className="text-label font-semibold tracking-wide">Book</span>
        </a>
        
      </div>
    </div>
  );
}
