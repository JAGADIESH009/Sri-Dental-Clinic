"use client";

import Link from "next/link";
import Image from "next/image";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Treatments", href: "/#treatments" },
    { name: "Doctors", href: "/#doctors" },
    { name: "FAQ", href: "/#faq" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-border/10">
      <div className="mx-auto max-w-7xl px-6 pb-28 lg:pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 bg-white rounded-full p-1 overflow-hidden">
                <Image src="/logo.png" alt="Unity Dental Clinics Logo" fill className="object-contain p-1" sizes="48px" />
              </div>
              <span className="font-heading font-semibold text-h3 tracking-tight text-white">
                Unity Dental Clinics
              </span>
            </div>
            <p className="text-ui leading-6 text-primary-foreground/80 max-w-xs font-heading font-medium tracking-wide">
              &quot;United by care. Defined by your smile.&quot;
            </p>
            <div className="flex space-x-6">
              {/* Social links if any */}
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-ui font-semibold leading-6 text-white font-heading tracking-wide ">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-ui leading-6 text-primary-foreground/70 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/appointment" className="text-ui leading-6 text-accent font-medium hover:text-accent/80 transition-colors">
                      Book Appointment
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-ui font-semibold leading-6 text-white font-heading tracking-wide ">Contact</h3>
                <ul role="list" className="mt-6 space-y-4 text-ui leading-6 text-primary-foreground/70">
                  <li>
                    43-106/1-60, Andhra Prabha Colony Rd,<br />
                    near Vishal Mart, Ajith, Ajit Singh Nagar,<br />
                    PNT Colony, Vijayawada,<br />
                    Andhra Pradesh 520015, India
                  </li>
                  <li>
                    <a href="tel:+918734934747" className="hover:text-white transition-colors">+91 87349 34747</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/unitydentalclinic_vijayawada/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-ui font-semibold leading-6 text-white font-heading tracking-wide ">Hours</h3>
                <ul role="list" className="mt-6 space-y-4 text-ui leading-6 text-primary-foreground/70">
                  <li>Everyday</li>
                  <li>10:00 AM - 2:00 PM</li>
                  <li>5:00 PM - 8:30 PM</li>
                  <li className="text-label mt-4 text-primary-foreground/50">Appointment Required</li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-ui font-semibold leading-6 text-white font-heading tracking-wide ">Payments & Facilities</h3>
                <ul role="list" className="mt-6 space-y-2 text-ui leading-6 text-primary-foreground/70">
                  <li>Credit & Debit Cards</li>
                  <li>Google Pay / UPI</li>
                  <li>Free Parking Available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-border/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-label leading-5 text-primary-foreground/50">
            &copy; {new Date().getFullYear()} Unity Dental Clinics. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
