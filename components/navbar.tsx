"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ChevronDown, Building2, TrendingUp, Briefcase, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Unternehmensgründung",
    href: "/services#gruendung",
    description: "Rechtssicherer Markteintritt & MISA-Lizenzierung für Firmen.",
    icon: Building2
  },
  {
    title: "Unternehmensberatung",
    href: "/services#beratung",
    description: "Strategische Planung & Prozessoptimierung vor Ort.",
    icon: Briefcase
  },
  {
    title: "Investment",
    href: "/services#investment",
    description: "Investition in ausgearbeitete, skalierbare Geschäftskonzepte.",
    icon: TrendingUp
  },
  {
    title: "Franchise",
    href: "/services#franchise",
    description: "Aufbau & Expansion von Franchise-Systemen in Saudi-Arabien.",
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
                        Alle Leistungen ansehen
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

          <Button asChild className="ml-6 bg-white text-black hover:bg-neutral-200 rounded-full px-6">
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
            <SheetContent side="right" className="bg-black border-l border-white/10 text-white w-[300px]">
              <div className="flex flex-col space-y-6 mt-8">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-neutral-400 hover:text-white transition-colors"
                >
                  Startseite
                </Link>
                
                <div className="space-y-3">
                  <div className="text-lg font-medium text-white mb-2">Leistungen</div>
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      onClick={() => setIsOpen(false)}
                      className="block pl-4 py-1 text-sm text-neutral-400 hover:text-emerald-500 transition-colors border-l border-neutral-800 hover:border-emerald-500"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/#ueber-mich"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-neutral-400 hover:text-white transition-colors"
                >
                  Über Mich
                </Link>

                <Button asChild className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/check" onClick={() => setIsOpen(false)}>
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
