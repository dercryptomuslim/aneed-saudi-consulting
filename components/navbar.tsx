"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ChevronRight, Building2, TrendingUp, Briefcase, Store, ArrowRight, Users, BarChart3 } from "lucide-react";
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
    title: "Gründung",
    href: "/services#gruendung",
    description: "Rechtssicherer Start & Lizenzen.",
    icon: Building2
  },
  {
    title: "Aufbau",
    href: "/services#aufbau",
    description: "Standort, Personal & Prozesse.",
    icon: Users
  },
  {
    title: "Führung",
    href: "/services#fuehrung",
    description: "Betrieb, Finanzen & Controlling.",
    icon: BarChart3
  },
  {
    title: "Beratung",
    href: "/services#beratung",
    description: "Strategie für bestehende Firmen.",
    icon: Briefcase
  },
  {
    title: "Investment",
    href: "/services#investment",
    description: "Investition in fertige Konzepte.",
    icon: TrendingUp
  },
  {
    title: "Franchise",
    href: "/services#franchise",
    description: "Expansion von Systemen.",
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
      "fixed top-0 z-50 w-full transition-all duration-300 border-b",
      scrolled ? "bg-white/90 backdrop-blur-md border-slate-200 shadow-sm" : "bg-white border-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group relative z-50">
          <span className="text-2xl font-serif font-bold tracking-tight text-slate-900">
            Aneed Ashraf
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex md:items-center md:space-x-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-slate-600 hover:text-slate-900 bg-transparent hover:bg-slate-50 font-medium")}>
                    Startseite
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-600 hover:text-slate-900 bg-transparent hover:bg-slate-50 font-medium">
                  Leistungen
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[700px] bg-white border border-slate-100 rounded-xl shadow-xl">
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
                    <li className="col-span-2 pt-2 border-t border-slate-100">
                      <Link 
                        href="/services" 
                        className="flex items-center justify-center w-full p-2 text-sm font-medium text-slate-900 hover:text-emerald-700 transition-colors"
                      >
                        Alle Leistungen ansehen <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/erfolgsgeschichten" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-slate-600 hover:text-slate-900 bg-transparent hover:bg-slate-50 font-medium")}>
                    Erfolgsgeschichten
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/ueber-mich" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-slate-600 hover:text-slate-900 bg-transparent hover:bg-slate-50 font-medium")}>
                    Über Mich
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button asChild className="ml-6 bg-slate-900 text-white hover:bg-slate-800 rounded-full px-6 font-medium shadow-md hover:shadow-lg transition-all">
            <Link href="/anfrage">Gespräch buchen</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-900 hover:bg-slate-50">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" className="w-full sm:w-[400px] bg-white border-l border-slate-200 p-0 flex flex-col">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <span className="text-xl font-serif font-bold text-slate-900">Menü</span>
                <SheetClose asChild>
                </SheetClose>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-6">
                <div className="flex flex-col space-y-2">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between text-lg font-medium text-slate-900 py-4 border-b border-slate-100"
                  >
                    Startseite
                    <ChevronRight className="h-5 w-5 text-slate-400" />
                  </Link>

                  <Accordion type="single" collapsible className="w-full border-b border-slate-100">
                    <AccordionItem value="services" className="border-none">
                      <AccordionTrigger className="text-lg font-medium text-slate-900 hover:no-underline py-4">
                        Leistungen
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-3 pl-2 pb-4 pt-2 bg-slate-50/50 rounded-lg mb-2">
                          {services.map((service) => (
                            <Link
                              key={service.title}
                              href={service.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 text-slate-600 hover:text-emerald-700 transition-colors p-2 rounded-lg hover:bg-white"
                            >
                              <service.icon className="h-4 w-4 text-emerald-600" />
                              <span className="text-sm font-medium">{service.title}</span>
                            </Link>
                          ))}
                          <Link 
                            href="/services" 
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium text-emerald-700 mt-2 pl-2 block hover:underline"
                          >
                                    Alle Leistungen ansehen →
                                  </Link>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>

                          <Link
                            href="/erfolgsgeschichten"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between text-lg font-medium text-slate-900 py-4 border-b border-slate-100"
                          >
                            Erfolgsgeschichten
                            <ChevronRight className="h-5 w-5 text-slate-400" />
                          </Link>

                          <Link
                            href="/ueber-mich"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between text-lg font-medium text-slate-900 py-4 border-b border-slate-100"
                          >
                            Über Mich
                            <ChevronRight className="h-5 w-5 text-slate-400" />
                          </Link>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50 mt-auto">
                 <Button asChild className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white text-base font-semibold rounded-lg shadow-sm">
                  <Link href="/anfrage" onClick={() => setIsOpen(false)}>
                    Gespräch buchen
                  </Link>
                </Button>
                <div className="mt-6 text-center text-sm text-slate-400">
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50 focus:text-slate-900 group",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 mb-1">
            <Icon className="h-4 w-4 text-slate-500 group-hover:text-emerald-600 transition-colors" />
            <div className="text-sm font-semibold leading-none text-slate-900">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 pl-6">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
