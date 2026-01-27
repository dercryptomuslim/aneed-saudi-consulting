"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ChevronRight, Building2, TrendingUp, Briefcase, Store, ArrowRight, Users, BarChart3, User, Target } from "lucide-react";
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
import { usePathname, useRouter } from "next/navigation";
import { getLocaleFromPathname, localizeHref, switchLocalePath, type Locale } from "@/lib/i18n";

const servicesDe = [
  {
    title: "Unternehmensgründung",
    href: "/services#gruendung",
    description: "Rechtssicherer Start & Lizenzen.",
    icon: Building2
  },
  {
    title: "Unternehmensaufbau",
    href: "/services#aufbau",
    description: "Standort, Personal & Prozesse.",
    icon: Users
  },
  {
    title: "Unternehmensführung",
    href: "/services#fuehrung",
    description: "Betrieb, Finanzen & Controlling.",
    icon: BarChart3
  },
  {
    title: "Unternehmensberatung",
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

const servicesEn = [
  {
    title: "Company Formation",
    href: "/services#gruendung",
    description: "Licenses, structure & compliance.",
    icon: Building2,
  },
  {
    title: "Business Setup",
    href: "/services#aufbau",
    description: "Location, hiring & processes.",
    icon: Users,
  },
  {
    title: "Operations & Management",
    href: "/services#fuehrung",
    description: "Finance, KPIs & controlling.",
    icon: BarChart3,
  },
  {
    title: "Business Consulting",
    href: "/services#beratung",
    description: "Strategy for existing companies.",
    icon: Briefcase,
  },
  {
    title: "Investment",
    href: "/services#investment",
    description: "Invest in ready concepts.",
    icon: TrendingUp,
  },
  {
    title: "Franchise",
    href: "/services#franchise",
    description: "Scale systems into KSA.",
    icon: Store,
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const locale: Locale = getLocaleFromPathname(pathname || "/");

  const t = (de: string, en: string) => (locale === "en" ? en : de);

  const href = (raw: string) => localizeHref(raw, locale);
  const services = locale === "en" ? servicesEn : servicesDe;

  const switchLocale = (nextLocale: Locale) => {
    const nextPath = switchLocalePath(pathname || "/", nextLocale);
    router.push(nextPath);
  };

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
        <Link href={href("/")} className="flex items-center space-x-2 group relative z-50">
          <span className="text-2xl font-serif font-bold tracking-tight text-slate-900">
            Aneed Ashraf
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex md:items-center md:space-x-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href={href("/")} legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-slate-600 hover:text-slate-900 bg-transparent hover:bg-slate-50 font-medium")}>
                    {t("Startseite", "Home")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Leistungen - Custom Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={cn(
                  "inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  activeDropdown === 'services' ? "text-slate-900 bg-slate-50" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                )}>
                  {t("Leistungen", "Services")}
                  <ChevronRight className={cn("ml-1 h-3 w-3 transition-transform", activeDropdown === 'services' ? "rotate-[270deg]" : "rotate-90")} />
                </button>
                <div className={cn(
                  "absolute left-0 top-full pt-2 w-[600px] transition-all duration-150",
                  activeDropdown === 'services' ? "opacity-100 visible z-[60]" : "opacity-0 invisible pointer-events-none z-40"
                )}>
                  <ul className="grid grid-cols-2 gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-md">
                    {services.map((service) => (
                      <li key={service.title}>
                        <Link
                          href={href(service.href)}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-slate-900 group/item"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <service.icon className="h-4 w-4 text-slate-500 group-hover/item:text-emerald-600 transition-colors" />
                            <div className="text-sm font-semibold leading-none text-slate-900">{service.title}</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 pl-6">
                            {service.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                    <li className="col-span-2 pt-2 border-t border-slate-100">
                      <Link 
                        href={href("/services")} 
                        className="flex items-center justify-center w-full p-2 text-sm font-medium text-slate-900 hover:text-emerald-700 transition-colors"
                      >
                        {t("Alle Leistungen ansehen", "View all services")} <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <NavigationMenuItem>
                <Link href={href("/erfolgsgeschichten")} legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-slate-600 hover:text-slate-900 bg-transparent hover:bg-slate-50 font-medium")}>
                    {t("Erfolgsgeschichten", "Case Studies")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href={href("/blog")} legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-slate-600 hover:text-slate-900 bg-transparent hover:bg-slate-50 font-medium")}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Über Mich - Custom Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={cn(
                  "inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  activeDropdown === 'about' ? "text-slate-900 bg-slate-50" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                )}>
                  {t("Über Mich", "About")}
                  <ChevronRight className={cn("ml-1 h-3 w-3 transition-transform", activeDropdown === 'about' ? "rotate-[270deg]" : "rotate-90")} />
                </button>
                <div className={cn(
                  "absolute right-0 top-full pt-2 w-[280px] transition-all duration-150",
                  activeDropdown === 'about' ? "opacity-100 visible z-[60]" : "opacity-0 invisible pointer-events-none z-40"
                )}>
                  <ul className="grid gap-2 p-4 bg-white border border-slate-200 rounded-xl shadow-md">
                    <li>
                      <Link
                        href={href("/ueber-mich")}
                        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-slate-900 group/item"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <User className="h-4 w-4 text-slate-500 group-hover/item:text-emerald-600 transition-colors" />
                          <div className="text-sm font-semibold text-slate-900">{t("Über Mich", "About Me")}</div>
                        </div>
                        <p className="text-sm text-slate-500 pl-6">{t("Erfahrung & Hintergrund", "Experience & Background")}</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={href("/vision-mission")}
                        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-slate-900 group/item"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Target className="h-4 w-4 text-slate-500 group-hover/item:text-emerald-600 transition-colors" />
                          <div className="text-sm font-semibold text-slate-900">{t("Vision & Mission", "Vision & Mission")}</div>
                        </div>
                        <p className="text-sm text-slate-500 pl-6">{t("Werte & Haltung", "Values & Principles")}</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Language Switcher */}
          <div className="ml-4 flex items-center gap-2">
            <button
              type="button"
              onClick={() => switchLocale("de")}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-semibold border transition-colors",
                locale === "de"
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              )}
              aria-label="Deutsch"
            >
              DE
            </button>
            <button
              type="button"
              onClick={() => switchLocale("en")}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-semibold border transition-colors",
                locale === "en"
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              )}
              aria-label="English"
            >
              EN
            </button>
          </div>

          <Button asChild className="ml-4 bg-slate-900 text-white hover:bg-slate-800 rounded-full px-6 font-medium shadow-md hover:shadow-lg transition-all">
            <Link href={href("/anfrage")}>{t("Gespräch buchen", "Book a call")}</Link>
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
                <span className="text-xl font-serif font-bold text-slate-900">{t("Menü", "Menu")}</span>
                <SheetClose asChild>
                </SheetClose>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-6">
                {/* Language Switcher (Mobile) */}
                <div className="mb-6 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      switchLocale("de");
                      setIsOpen(false);
                    }}
                    className={cn(
                      "flex-1 rounded-lg px-3 py-2 text-sm font-semibold border transition-colors",
                      locale === "de"
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    )}
                  >
                    Deutsch (DE)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      switchLocale("en");
                      setIsOpen(false);
                    }}
                    className={cn(
                      "flex-1 rounded-lg px-3 py-2 text-sm font-semibold border transition-colors",
                      locale === "en"
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    )}
                  >
                    English (EN)
                  </button>
                </div>

                <div className="flex flex-col space-y-2">
                  <Link
                    href={href("/")}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between text-lg font-medium text-slate-900 py-4 border-b border-slate-100"
                  >
                    {t("Startseite", "Home")}
                    <ChevronRight className="h-5 w-5 text-slate-400" />
                  </Link>

                  <Accordion type="single" collapsible className="w-full border-b border-slate-100">
                    <AccordionItem value="services" className="border-none">
                      <AccordionTrigger className="text-lg font-medium text-slate-900 hover:no-underline py-4">
                        {t("Leistungen", "Services")}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-3 pl-2 pb-4 pt-2 bg-slate-50/50 rounded-lg mb-2">
                          {services.map((service) => (
                            <Link
                              key={service.title}
                              href={href(service.href)}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 text-slate-600 hover:text-emerald-700 transition-colors p-2 rounded-lg hover:bg-white"
                            >
                              <service.icon className="h-4 w-4 text-emerald-600" />
                              <span className="text-sm font-medium">{service.title}</span>
                            </Link>
                          ))}
                          <Link 
                            href={href("/services")} 
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium text-emerald-700 mt-2 pl-2 block hover:underline"
                          >
                                    {t("Alle Leistungen ansehen →", "View all services →")}
                                  </Link>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>

                          <Link
                            href={href("/erfolgsgeschichten")}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between text-lg font-medium text-slate-900 py-4 border-b border-slate-100"
                          >
                            {t("Erfolgsgeschichten", "Case Studies")}
                            <ChevronRight className="h-5 w-5 text-slate-400" />
                          </Link>

                          <Link
                            href={href("/blog")}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between text-lg font-medium text-slate-900 py-4 border-b border-slate-100"
                          >
                            Blog
                            <ChevronRight className="h-5 w-5 text-slate-400" />
                          </Link>

                          <Accordion type="single" collapsible className="w-full border-b border-slate-100">
                            <AccordionItem value="about" className="border-none">
                              <AccordionTrigger className="text-lg font-medium text-slate-900 hover:no-underline py-4">
                                {t("Über Mich", "About")}
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="flex flex-col space-y-3 pl-2 pb-4 pt-2 bg-slate-50/50 rounded-lg mb-2">
                                  <Link
                                    href={href("/ueber-mich")}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 text-slate-600 hover:text-emerald-700 transition-colors p-2 rounded-lg hover:bg-white"
                                  >
                                    <span className="text-sm font-medium">{t("Über Mich", "About Me")}</span>
                                  </Link>
                                  <Link
                                    href={href("/vision-mission")}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 text-slate-600 hover:text-emerald-700 transition-colors p-2 rounded-lg hover:bg-white"
                                  >
                                    <span className="text-sm font-medium">{t("Vision & Mission", "Vision & Mission")}</span>
                                  </Link>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50 mt-auto">
                 <Button asChild className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white text-base font-semibold rounded-lg shadow-sm">
                  <Link href={href("/anfrage")} onClick={() => setIsOpen(false)}>
                    {t("Gespräch buchen", "Book a call")}
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
