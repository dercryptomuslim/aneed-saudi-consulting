"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ChevronRight, Building2, TrendingUp, Briefcase, Store, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Unternehmensgründung",
    href: "/services#gruendung",
    description: "Rechtssicherer Markteintritt & MISA-Lizenzierung.",
    icon: Building2
  },
  {
    title: "Unternehmensberatung",
    href: "/services#beratung",
    description: "Strategische Planung & Prozessoptimierung.",
    icon: Briefcase
  },
  {
    title: "Investment",
    href: "/services#investment",
    description: "Investition in ausgearbeitete Konzepte.",
    icon: TrendingUp
  },
  {
    title: "Franchise",
    href: "/services#franchise",
    description: "Aufbau & Expansion von Franchise-Systemen.",
    icon: Store
  },
];

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

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300 border-b border-transparent",
      scrolled ? "bg-black/80 backdrop-blur-xl border-white/5" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group relative z-50">
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-500 transition-colors">
            Aneed Ashraf
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-neutral-400 hover:text-white hover:bg-white/5 focus:bg-white/5")}>
                    Startseite
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-neutral-400 hover:text-white hover:bg-white/5 focus:bg-white/5 data-[state=open]:bg-white/5">
                  Leistungen
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black border border-neutral-800 rounded-xl">
                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                        icon={service.icon}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                    <li className="col-span-2 pt-2 border-t border-neutral-800">
                      <Link 
                        href="/services" 
                        className="flex items-center justify-center w-full p-2 text-sm font-medium text-emerald-500 hover:text-emerald-400 transition-colors"
                      >
                        Alle Leistungen ansehen <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/#ueber-mich" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-neutral-400 hover:text-white hover:bg-white/5 focus:bg-white/5")}>
                    Über Mich
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button asChild className="ml-6 bg-white text-black hover:bg-neutral-200 rounded-full px-6 font-medium">
            <Link href="/check">Gespräch buchen</Link>
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
            
            {/* Vollbild Mobile Menu */}
            <SheetContent side="right" className="w-full sm:w-[400px] bg-black border-l border-neutral-800 p-0 flex flex-col">
              <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
                <span className="text-xl font-bold text-white">Menü</span>
                <SheetClose asChild>
                  {/* Close button is handled by Sheet automatically, but we can style header here */}
                </SheetClose>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-6">
                <div className="flex flex-col space-y-2">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between text-2xl font-bold text-white py-4 border-b border-neutral-900 active:text-emerald-500"
                  >
                    Startseite
                    <ChevronRight className="h-5 w-5 text-neutral-600" />
                  </Link>

                  <Accordion type="single" collapsible className="w-full border-b border-neutral-900">
                    <AccordionItem value="services" className="border-none">
                      <AccordionTrigger className="text-2xl font-bold text-white hover:no-underline py-4">
                        Leistungen
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-4 pl-2 pb-4">
                          {services.map((service) => (
                            <Link
                              key={service.title}
                              href={service.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 text-neutral-400 hover:text-emerald-500 transition-colors p-2 rounded-lg hover:bg-neutral-900"
                            >
                              <service.icon className="h-5 w-5 text-emerald-500" />
                              <span className="text-base font-medium">{service.title}</span>
                            </Link>
                          ))}
                          <Link 
                            href="/services" 
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium text-emerald-500 mt-2 pl-2"
                          >
                            Alle Leistungen ansehen →
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Link
                    href="/#ueber-mich"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between text-2xl font-bold text-white py-4 border-b border-neutral-900 active:text-emerald-500"
                  >
                    Über Mich
                    <ChevronRight className="h-5 w-5 text-neutral-600" />
                  </Link>
                </div>
              </div>

              <div className="p-6 border-t border-neutral-800 bg-neutral-900/30 mt-auto">
                 <Button asChild className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold rounded-xl">
                  <Link href="/check" onClick={() => setIsOpen(false)}>
                    Gespräch buchen
                  </Link>
                </Button>
                <div className="mt-6 text-center text-sm text-neutral-500">
                  © {new Date().getFullYear()} Aneed Ashraf
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ElementType }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-900 hover:text-accent-foreground focus:bg-neutral-900 focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 mb-1">
            <Icon className="h-4 w-4 text-emerald-500 group-hover:text-emerald-400" />
            <div className="text-sm font-medium leading-none text-white">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground pl-6">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
