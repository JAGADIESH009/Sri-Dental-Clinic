import React from "react";
import LocationMapWrapper from "@/components/home/LocationMapWrapper";
import { MapPin, CircleParking } from "lucide-react";

export const LocationSection = () => {
  return (
    <div id="contact" className="w-full bg-background">
      {/*  EDITORIAL MASTHEAD  */}
      <section className="border-b border-hairline">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16 pt-8 pb-8">
          {/*  Grand Editorial Heading  */}
          <div className="max-w-4xl pt-6">
            <h2 className="font-heading text-h2 sm:text-h1 lg:text-display tracking-tight text-primary font-normal leading-[1.12]">
              Visit our clinic
            </h2>
            <p className="font-heading italic text-h3 sm:text-h3 text-accent font-light mt-4 leading-relaxed max-w-2xl">
              A tranquil sanctuary in the heart of Vijayawada, curated for unhurried, thoughtful oral care.
            </p>
            {/*  Masthead Actions  */}
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <a
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-ui font-semibold hover:opacity-90 transition-opacity rounded-full"
                href="https://www.google.com/maps/dir/?api=1&destination=GJWQ%2BP8+Vijayawada,+Andhra+Pradesh"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/*  CORE WAYFINDING & CARTOGRAPHY SPREAD (BALANCED 2-COLUMN)  */}
      <section className="border-b border-hairline" id="directions">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/*  LEFT COLUMN: Rich Monograph Schedule, Transit, & Concierge Details (7 cols)  */}
          <div className="lg:col-span-5 p-8 lg:p-12 lg:border-r border-hairline bg-background flex flex-col justify-between">
            <div className="space-y-8">
              {/*  Sanctuary Address & Identity  */}
              <div className="space-y-3">
                <div className="text-label font-sans tracking-widest  text-muted flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  <span className="">Clinic Location</span>
                </div>
                <div>
                  <h2 className="font-heading text-h2 sm:text-h2 text-primary font-normal tracking-tight leading-[1.15]">
                    Unity Dental Clinics
                  </h2>
                  <p className="text-label font-sans text-muted  tracking-wider mt-2">
                    Vijayawada, Andhra Pradesh
                  </p>
                </div>
                <address className="not-italic text-ui sm:text-body text-secondary leading-relaxed font-sans font-light max-w-md pt-1">
                  43-106/1-60, Andhra Prabha Colony Rd<br />
                  Vijayawada, Andhra Pradesh 520015, India
                </address>
              </div>

              {/*  Simplified Consultation Hours  */}
              <div className="border-t border-hairline pt-6 space-y-4">
                <div className="text-label font-sans tracking-widest  text-muted flex items-center justify-between">
                  <span className="">Consultation Hours</span>
                  <span className="text-accent font-sans lowercase text-label font-medium">● Open today</span>
                </div>
                <div className="space-y-2.5 text-ui max-w-xl font-light">
                  <div className="flex items-center justify-between py-1.5 border-b border-hairline gap-3">
                    <span className="text-primary font-medium">Monday – Sunday</span>
                    <div className="text-right font-sans text-label text-secondary">
                      <span className="">Open today</span>
                      <span className="text-muted mx-2">|</span>
                      <span className="">Closes 9 PM</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-1 text-label text-muted font-sans gap-3">
                    <span className="">Contact</span>
                    <a href="tel:+918734934747" className="hover:text-primary transition-colors">+91 87349 34747</a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/*  RIGHT COLUMN: Harmonious Architectural Cartographic Map Canvas (5 cols)  */}
          <div className="lg:col-span-7 relative bg-background flex flex-col p-6 lg:p-10 justify-center items-stretch border-t lg:border-t-0 min-h-[580px]">


            <div className="w-full relative overflow-hidden border border-hairline shadow-sm flex flex-col bg-[#f5f4f0] transition-all h-full min-h-[520px]">
              {/*  Interactive Leaflet Map Canvas Container  */}
              <div className="w-full flex-1 relative h-full min-h-[480px]">
                <LocationMapWrapper />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
