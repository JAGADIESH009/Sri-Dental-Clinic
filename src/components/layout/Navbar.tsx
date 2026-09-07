"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Treatments", href: "#treatments" },
  { name: "Doctors", href: "#doctors" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
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
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border py-3 shadow-sm"
            : "bg-transparent pt-6 pb-4 md:py-6"
        )}
      >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <span className="sr-only">Sri Dental Clinic</span>
            <div className={cn("relative h-10 w-10 md:h-12 md:w-12 shrink-0 transition-all", !isScrolled && "drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]")}>
              <Image src="/logo.png" alt="Sri Dental Clinic Logo" fill className="object-contain" sizes="(max-width: 768px) 40px, 48px" priority />
            </div>
            <span className={cn(
              "font-heading font-semibold text-lg tracking-tight transition-colors hidden sm:block",
              isScrolled ? "text-primary" : "text-white"
            )}>
              Sri Dental Clinic
            </span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className={cn("-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors", isScrolled ? "text-primary" : "text-white/90")}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium leading-6 transition-colors",
                isScrolled ? "text-primary/80 hover:text-accent" : "text-white/80 hover:text-white"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#book">
            <Button 
              size="sm" 
              variant={isScrolled ? "default" : "secondary"}
              className={cn(
                "rounded-full px-6 font-medium shadow-sm transition-all",
                !isScrolled && "bg-white text-primary hover:bg-white/90"
              )}
            >
              Book Appointment
            </Button>
          </a>
        </div>
      </nav>

      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-background flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-6 border-b border-border shrink-0">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
               <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white font-heading font-bold text-sm">
                SD
              </div>
              <span className="font-heading font-semibold text-primary">Sri Dental Clinic</span>
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
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary hover:bg-secondary"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-primary hover:bg-secondary"
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
