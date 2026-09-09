import React from "react";
import LocationMapWrapper from "@/components/home/LocationMapWrapper";

export const LocationSection = () => {
  return (
    <div id="contact" className="w-full bg-background">
      {/*  EDITORIAL MASTHEAD  */}
      <section className="border-b border-hairline">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-8 pb-8">
          {/*  Grand Editorial Heading  */}
          <div className="max-w-4xl pt-6">
            <h2 className="font-heading text-h2 sm:text-h1 lg:text-display tracking-tight text-primary font-normal leading-[1.12]">
              Visit our clinic
            </h2>
            <p className="font-heading italic text-h3 sm:text-h3 text-accent font-light mt-4 leading-relaxed max-w-2xl">
              A tranquil sanctuary in the heart of Bengaluru, curated for unhurried, thoughtful oral care.
            </p>
            {/*  Masthead Actions  */}
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <a
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-primary text-primary-foreground text-label font-medium tracking-widest  hover:bg-black transition-all rounded-full"
                href="https://www.google.com/maps/dir/?api=1&destination=12.9716,77.5946"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-body">near_me</span>
                <span className="">Get Directions</span>
              </a>

              <div className="flex items-center gap-4 pl-2 sm:pl-4 text-label text-secondary pt-2 sm:pt-0">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-body text-muted">local_parking</span>
                  <span className="text-muted">Valet Parking Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  CORE WAYFINDING & CARTOGRAPHY SPREAD (BALANCED 2-COLUMN)  */}
      <section className="border-b border-hairline" id="directions">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/*  LEFT COLUMN: Rich Monograph Schedule, Transit, & Concierge Details (7 cols)  */}
          <div className="lg:col-span-5 p-8 lg:p-12 lg:border-r border-hairline bg-background flex flex-col justify-between">
            <div className="space-y-8">
              {/*  Sanctuary Address & Identity  */}
              <div className="space-y-3">
                <div className="text-label font-mono tracking-widest  text-muted flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  <span className="">Clinic Location</span>
                </div>
                <div>
                  <h2 className="font-heading text-h2 sm:text-h2 text-primary font-normal tracking-tight leading-[1.15]">
                    Sri Dental Clinic
                  </h2>
                  <p className="text-label font-mono text-muted  tracking-wider mt-2">
                    Ground Floor • Central Bengaluru
                  </p>
                </div>
                <address className="not-italic text-ui sm:text-body text-secondary leading-relaxed font-sans font-light max-w-md pt-1">
                  Ground Floor, Sri Krishna Enclave<br />
                  Bengaluru, Karnataka, India
                </address>
              </div>

              {/*  Simplified Consultation Hours  */}
              <div className="border-t border-hairline pt-6 space-y-4">
                <div className="text-label font-mono tracking-widest  text-muted flex items-center justify-between">
                  <span className="">Consultation Hours</span>
                  <span className="text-accent font-sans lowercase text-label font-medium">● Open today</span>
                </div>
                <div className="space-y-2.5 text-ui max-w-xl font-light">
                  <div className="flex items-center justify-between py-1.5 border-b border-hairline gap-3">
                    <span className="text-primary font-medium">Monday – Saturday</span>
                    <div className="text-right font-mono text-label text-secondary">
                      <span className="">10:00 AM – 2:00 PM</span>
                      <span className="text-muted mx-2">|</span>
                      <span className="">5:00 PM – 8:30 PM</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-1 text-label text-muted font-mono gap-3">
                    <span className="">Sunday</span>
                    <span className="">By Prior Appointment</span>
                  </div>
                </div>
              </div>

              {/*  Minimal Horizontal Transit Strip  */}
              <div className="space-y-3 border-t border-hairline pt-6">
                <div className="text-label font-mono tracking-widest  text-muted">
                  <span className="">Arrival Notes</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-label text-secondary font-light">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-body text-accent">accessible</span>
                    <span className="">Step-free Ground Floor Entry</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  RIGHT COLUMN: Harmonious Architectural Cartographic Map Canvas (5 cols)  */}
          <div className="lg:col-span-7 relative bg-background flex flex-col p-6 lg:p-10 justify-center items-stretch border-t lg:border-t-0 min-h-[580px]">
            {/*  Corner Architectural Framing Accents  */}
            <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-[#75777c]/40 pointer-events-none hidden sm:block"></div>
            <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-[#75777c]/40 pointer-events-none hidden sm:block"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-[#75777c]/40 pointer-events-none hidden sm:block"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-[#75777c]/40 pointer-events-none hidden sm:block"></div>

            {/*  Sculptural Arch & Balanced Height Map Frame  */}
            <div className="w-full relative overflow-hidden border border-hairline shadow-sm flex flex-col bg-[#f5f4f0] transition-all h-full min-h-[520px]">
              {/*  Architectural Pill HUD overlay inside rectangular frame  */}
              <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                <div className="bg-background/95 backdrop-blur-md border border-hairline px-3 py-1 shadow-sm pointer-events-auto flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <span className="text-label font-mono tracking-wider  text-primary font-medium">Bengaluru</span>
                  <span className="text-muted text-label">|</span>
                  <span className="text-label font-mono text-muted">12.9716° N, 77.5946° E</span>
                </div>
                <div className="flex items-center gap-1.5 pointer-events-auto">
                  <a
                    className="bg-background/95 backdrop-blur-md border border-hairline px-3 py-1 text-label font-mono  tracking-wider text-primary hover:bg-surface-container transition-colors flex items-center gap-1 shadow-sm"
                    href="https://www.google.com/maps/dir/?api=1&destination=12.9716,77.5946"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-ui">directions</span>
                    <span className="">Navigate</span>
                  </a>
                </div>
              </div>

              {/*  Interactive Leaflet Map Canvas Container  */}
              <div className="w-full flex-1 relative h-full min-h-[480px]">
                <LocationMapWrapper />
              </div>

              {/*  Map Technical Legend Footer Strip  */}
              <div className="border-t border-hairline bg-background/95 backdrop-blur-sm px-4 py-2.5 flex flex-wrap items-center justify-between text-label font-mono text-muted z-20">
                <div className="flex items-center gap-2">
                  <span className="text-primary font-medium">SRI KRISHNA ENCLAVE</span>
                  <span className="">•</span>
                  <span className="">BENGALURU</span>
                </div>
                <div className="text-muted text-label tracking-widest flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-accent"></span>
                  <span className="">SURGICAL SUITE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  ARCHITECTURAL ESSAY & FACILITY MONOGRAPH  */}
      <section className="border-b border-hairline bg-background" id="philosophy">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-12">
          {/*  Two Column Manifesto intro  */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start border-b border-hairline pb-10">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9aeef1]/30 border border-[#00696c]/20 text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                <span className="text-label font-mono tracking-widest  font-semibold text-accent">Spatial Philosophy</span>
              </div>
              <h2 className="font-heading text-h2 sm:text-h2 lg:text-h1 text-primary leading-[1.15] font-normal">
                An unhurried space created for clinical stillness.
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4 pt-2 lg:pl-8 lg:border-l border-hairline">
              <p className="font-heading italic text-lead sm:text-h3 text-accent leading-relaxed font-light">
                We purposefully departed from the sterile, hurried tropes of conventional healthcare environments.
              </p>
              <p className="text-ui font-sans text-secondary leading-relaxed font-light">
                Sri Dental Clinic was conceived as an acoustic and sensory pause within central Bengaluru. Every surface and aperture is calibrated with filtered natural daylight, honed limestone, acoustic isolation dampers, and surgical-grade air changes to cultivate deep patient composure.
              </p>
              <div className="pt-3 flex flex-wrap items-center gap-6 text-label font-mono text-muted tracking-wider ">
                <span className="">Est. Central Bengaluru</span>
                <span className="">•</span>
                <span className="">Acoustic Envelope: 3-Stage Lamination</span>
                <span className="">•</span>
                <span className="">Air Volumetric: 18 ACH</span>
              </div>
            </div>
          </div>

          {/*  3 Precision Spatial Columns  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="pt-6 border-t border-hairline">
              <div className="space-y-3">
                <div className="text-label font-mono tracking-widest text-accent font-medium">
                  Acoustic Isolation
                </div>
                <h3 className="font-heading text-h3 text-primary font-normal">Sub-30dB Operatories</h3>
                <p className="text-label text-secondary leading-relaxed font-light">
                  Triple-glazed laminated acoustic glass and decoupled dampening walls eliminate traffic vibration, ensuring unbroken serenity throughout consultations.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-hairline">
              <div className="space-y-3">
                <div className="text-label font-mono tracking-widest text-accent font-medium">
                  Medical Air Sterility
                </div>
                <h3 className="font-heading text-h3 text-primary font-normal">HEPA-14 Cleanrooms</h3>
                <p className="text-label text-secondary leading-relaxed font-light">
                  Continuous laminar air flow with medical-grade six-stage particulate filtration and negative-pressure suites delivers air purity standard to specialized surgery environments.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-hairline">
              <div className="space-y-3">
                <div className="text-label font-mono tracking-widest text-accent font-medium">
                  Low-Dose Imaging
                </div>
                <h3 className="font-heading text-h3 text-primary font-normal">Integrated CBCT Suite</h3>
                <p className="text-label text-secondary leading-relaxed font-light">
                  Ultra-low dose 3D cone-beam computed tomography provides immediate microscopic sub-millimeter diagnostic precision on-site without external diagnostic transit.
                </p>
              </div>
            </div>
          </div>

          {/*  Atmospheric Image Triptych  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-hairline pt-10">
            <div className="space-y-3">
              <div className="aspect-[4/3] bg-[#efeeea] overflow-hidden">
                <img alt="Minimalist architectural photograph of dental clinic reception lounge in Bengaluru bathed in soft warm light" className="w-full h-full object-cover transition-all duration-700 hover:scale-[1.02]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDek_y5ORK_vpDeho1jeyxt5DXmyhyYMi0LjBeC4gfwr2tiqxJSHsGy-8dWt4bMRcexYjIUzPunvezshsGFxV_fZVMBKwYF6mvCUhOQ7F94aQN6RCEGDkcmPxYTtgXLixYQ7aLpGsPe3BeIIphMmwqA_JvMmfTWnqDBbksWvifUhauJAI7ucZhi6tjtFOU3bOk_xs6Z5wTCQhUhWA5pXcx8JSNfSq_WPjFYcwAHykQ6j1ZbJuiqgwkl" />
              </div>
              <div className="flex justify-between text-label font-mono">
                <span className="text-muted">FILTERED DAYLIGHT</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="aspect-[4/3] bg-[#efeeea] overflow-hidden">
                <img alt="Clean clinical operatory with ergonomic treatment chair and honed stone surfaces" className="w-full h-full object-cover transition-all duration-700 hover:scale-[1.02]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGnS4dtfz85eWVClqHX-J-nEB4F-KXmL8P45c3t-VKaCxwlyRIxzSmk8LwRvijCj0uQ1ZdRDJHzGAhspYV0iQ1R52pD9d_zS8lT02C4Cl0ZoDTuJtijP2HzThFoiumwH2JGqKX_WZS207F5VKM79X_XyBGQrDs5KIBsfYpDUYifxf03vEORmxthw0U_dOGXDIKHy88iV90hvO9LwGy3-O-5iBh6Irot1GTuXGksrEKy-yNjpD1Kate" />
              </div>
              <div className="flex justify-between text-label font-mono">
                <span className="text-muted">CALIBRATED ERGONOMICS</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="aspect-[4/3] bg-[#efeeea] overflow-hidden">
                <img alt="Architectural interior photography of state-of-the-art dental CBCT imaging suite and 3D diagnostic room" className="w-full h-full object-cover transition-all duration-700 hover:scale-[1.02]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjtd2l3eqvV1SSvVJqHr1DfUs6GYpm9-CbPMLN1z7CX-iC5Tk5ph6Zv5GlZGNdGRkdSurZ1YVpww_ra371wQ2eDOcq4n8yhRUJp01txvyNShMzcD5QKTululRMeZPootcuZXmb6sdmcmW_YjZ7M6Efi6MSsby5A7-QKK7D8KNjH9jV-13BhtYika9ZjhwTVFZ38dLVlV_d2YQO8Um2sWW7xmW6vhaeU0Le27xS0zP-W7UxQw99aUor" />
              </div>
              <div className="flex justify-between text-label font-mono">
                <span className="text-muted">3D SUB-VOXEL DIAGNOSTICS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
