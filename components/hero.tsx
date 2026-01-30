"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";
import { trackCtaClick } from "@/lib/analytics";

export function Hero({ locale = "de" }: { locale?: Locale }) {
  const t = (de: string, en: string) => (locale === "en" ? en : de);
  const href = (raw: string) => localizeHref(raw, locale);
  return (
    <section className="relative flex min-h-[85dvh] w-full items-center justify-center overflow-hidden bg-white pt-24 md:pt-32 pb-24 md:pb-32">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-8 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm">
            <span className="mr-2 flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {t("Deine Zukunft beginnt in Medina", "Your future begins in Medina")}
          </div>
          
          <h1 className="text-5xl font-serif font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl mb-8">
            {locale === "en" ? (
              <>
                Your Gateway to Success in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900">
                  Saudi Arabia
                </span>
              </>
            ) : (
              <>
                Dein Tor zum Erfolg in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900">
                  Saudi-Arabien
                </span>
              </>
            )}
          </h1>
          
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 md:text-xl leading-relaxed">
            {t(
              "9 Jahre Expertise direkt aus Medina. Ich begleite dich sicher durch Gründung, Investment und Auswanderung in ganz Saudi-Arabien.",
              "9 years of expertise directly from Medina. I guide you safely through company formation, investment, and relocation across Saudi Arabia."
            )}{" "}
            <br className="hidden md:block" />
            <span className="font-medium text-slate-800">
              {t(
                "Keine Theorie, kein Testen an Kunden – echte Erfahrung aus Saudi-Arabien.",
                "No theory. No experimentation on clients. Just proven, real-world experience from Saudi Arabia."
              )}
            </span>
          </p>

          {/* Quote Highlight */}
          <div className="mx-auto mt-8 max-w-2xl">
            <blockquote className="border-l-4 border-emerald-500 bg-emerald-50/50 pl-5 pr-6 py-4 rounded-r-lg">
              <p className="text-base md:text-lg font-medium text-slate-700 italic">
                {t(
                  "Als erster deutscher Unternehmer habe ich eine Unternehmensberatung in Medina aufgebaut.",
                  "As the first German entrepreneur, I built a consulting firm in Medina."
                )}
              </p>
            </blockquote>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              asChild 
              size="lg" 
              className="h-14 rounded-full bg-slate-900 px-8 text-lg font-medium text-white hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => trackCtaClick({ 
                buttonText: t("Expertengespräch anfragen", "Request an expert call"), 
                location: "hero", 
                destination: "/anfrage" 
              })}
            >
              <Link href={href("/anfrage")}>
                {t("Expertengespräch anfragen", "Request an expert call")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="h-14 rounded-full border-slate-200 bg-white px-8 text-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 shadow-sm"
              onClick={() => trackCtaClick({ 
                buttonText: t("Unsere Leistungen", "Our services"), 
                location: "hero", 
                destination: "/services" 
              })}
            >
              <Link href={href("/services")}>
                {t("Unsere Leistungen", "Our services")}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
