"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollToAppointment } from "@/hooks/useScrollToAppointment";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Treatments", href: "/#treatments" },
  { name: "Doctors", href: "/#doctors" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const scrollToAppointment = useScrollToAppointment();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  React.useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          (isScrolled || !isHomePage)
            ? "bg-[#021124]/95 backdrop-blur-xl border-b border-white/5 py-4 shadow-sm"
            : "bg-transparent pt-8 pb-6 md:py-8"
        )}
      >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 shrink-0">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <span className="sr-only">Unity Dental Clinics</span>
            <div className={cn("relative h-10 w-10 md:h-12 md:w-12 shrink-0 transition-all", (!isScrolled && isHomePage) && "drop-shadow-sm")}>
              <Image src="/logo.png" alt="Unity Dental Clinics Logo" fill className="object-contain" sizes="(max-width: 768px) 40px, 48px" priority />
            </div>
            <span className="font-heading font-semibold text-[17px] min-[390px]:text-[19px] md:text-lead tracking-tight transition-colors text-white whitespace-nowrap">
              Unity Dental Clinics
            </span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className={cn("-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors", (isScrolled || !isHomePage) ? "text-primary" : "text-white/90")}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-10 items-center">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (pathname === '/' && item.name === 'Home');
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-ui font-medium leading-6 transition-colors relative py-1",
                  isActive ? "text-[#9df1f3]" : "text-white/80 hover:text-white"
                )}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#9df1f3] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/#appointment" onClick={scrollToAppointment} className="group relative inline-flex items-center justify-center bg-white text-[#0047B3] px-6 py-2.5 rounded-full overflow-hidden transition-all hover:bg-white/90 shadow-sm">
            <span className="relative z-10 flex items-center font-sans font-bold text-ui tracking-wide">
              Book Appointment
            </span>
          </a>
        </div>
      </nav>

      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-background flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-6 border-b border-border shrink-0">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
               <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white font-heading font-bold text-ui">
                UDC
              </div>
              <span className="font-heading font-semibold text-primary">Unity Dental Clinics</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root px-6 flex-1">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-body font-semibold leading-7 text-primary hover:bg-secondary"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/#appointment"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    scrollToAppointment(e);
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-body font-semibold leading-7 text-primary hover:bg-secondary"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
