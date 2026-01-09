"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Startseite", href: "/" },
    { name: "Gründung", href: "#gruendung" },
    { name: "Investment", href: "#investment" },
    { name: "Auswanderung", href: "#auswanderung" },
    { name: "Über Mich", href: "#ueber-mich" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300 border-b border-transparent",
      scrolled ? "bg-black/50 backdrop-blur-xl border-white/5" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-500 transition-colors">
            Aneed Ashraf
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="bg-white text-black hover:bg-neutral-200">
            <Link href="#kontakt">Gespräch buchen</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-l border-white/10 text-white">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700">
                  <Link href="#kontakt" onClick={() => setIsOpen(false)}>
                    Gespräch buchen
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
