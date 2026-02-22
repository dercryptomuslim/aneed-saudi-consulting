"use client";

import { Building2, Settings, Briefcase, ChevronDown, CheckCircle2, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface JourneyStep {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  shortDescription: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonHref: string;
}

interface BusinessJourneyProps {
  locale?: "de" | "en";
}

const journeyStepsDe: JourneyStep[] = [
  {
    id: "gruendung",
    number: 1,
    title: "Unternehmensgründung",
    subtitle: "Rechtlich, regulatorisch & steuerlich sicher",
    icon: Building2,
    shortDescription: "Rechtssichere Gründung & Lizenzen",
    description: "Der erste Schritt für ein erfolgreiches Business in Saudi-Arabien ist die gründliche und rechtssichere Unternehmensgründung. Mein Team und ich begleiten Unternehmer und Investoren durch alle notwendigen Schritte, von der ersten Idee bis zur offiziellen Registrierung.",
    features: [
      "Auswahl der passenden Rechtsform (abhängig von Branche & Investorentyp)",
      "Beantragung aller Lizenzen (MISA, Gewerbelizenzen, Genehmigungen)",
      "Abstimmung mit Behörden auf lokaler und nationaler Ebene",
      "Handelsregistereintragungen & Einhaltung gesetzlicher Vorgaben",
      "Einrichtung administrativer & steuerlicher Strukturen (Compliance, Zakat)",
      "Unterstützung bei Bankkontoeröffnung & Kapitalstruktur"
    ],
    buttonText: "Jetzt Gründung anfragen",
    buttonHref: "/anfrage"
  },
  {
    id: "aufbau",
    number: 2,
    title: "Unternehmensaufbau",
    subtitle: "Standort, Personal, Prozesse & Marketing",
    icon: Settings,
    shortDescription: "Operativer Aufbau vor Ort",
    description: "Mit der Gründung ist es nicht getan – ein Business muss physisch und operativ aufgebaut werden. Mein Team und ich übernehmen die komplette Umsetzung des Unternehmensaufbaus, damit dein Geschäft startklar wird. Wir beauftragen und kontrollieren Designer, Architekten, Baufirmen – alles.",
    features: [
      "Standortwahl & Aufbau (Raumplanung, Einrichtung, Infrastruktur)",
      "Beauftragung und Kontrolle von Designern, Architekten & Baufirmen",
      "Personalrekrutierung (Einsatzpläne bis Einstellung)",
      "Produkt- & Serviceentwicklung (z.B. Pricing, Qualitätsstandards)",
      "Marketing- & Launchplanung (Branding, Promotion)",
      "Aufbau operativer Prozesse für reibungslose Abläufe"
    ],
    buttonText: "Aufbau besprechen",
    buttonHref: "/anfrage"
  },
  {
    id: "fuehrung",
    number: 3,
    title: "Unternehmensführung",
    subtitle: "Betrieb, Finanzen & Controlling",
    icon: Briefcase,
    shortDescription: "Laufendes Management & Controlling",
    description: "Nach Gründung und Aufbau kommt die operative Führung – oft die größte Herausforderung für Unternehmer im Ausland. Mein Team und ich übernehmen das Management und Controlling deines Geschäfts, damit du dich auf strategische Entscheidungen konzentrieren kannst.",
    features: [
      "Geschäftsoperationen (Organisation, Prozesskontrolle, QM)",
      "Finanzmanagement (Budget, Buchhaltung, Kosten, Zakat/Steuer)",
      "Mitarbeiterführung (Schulung, Motivation, Controlling)",
      "Profitabilitäts-Optimierung (KPI-Monitoring, Performance)",
      "Unterstützung bei Expansionen oder neuen Standorten"
    ],
    buttonText: "Management anfragen",
    buttonHref: "/anfrage"
  }
];

const journeyStepsEn: JourneyStep[] = [
  {
    id: "gruendung",
    number: 1,
    title: "Company formation",
    subtitle: "Legally, regulatory & tax compliant",
    icon: Building2,
    shortDescription: "Compliant formation & licenses",
    description: "The foundation of a successful business in Saudi Arabia is a thorough, compliant setup. My team and I guide entrepreneurs and investors through every stage — from the initial concept to official registration and operational readiness.",
    features: [
      "Selecting the appropriate legal structure based on your industry and investor profile",
      "Applying for all required licences, including MISA, commercial licences, and sector-specific permits",
      "Coordinating with relevant authorities at both local and national levels",
      "Managing commercial registry filings and ensuring full legal compliance",
      "Establishing administrative, tax, and Zakat compliance frameworks",
      "Supporting bank account opening and structuring capitalisation effectively"
    ],
    buttonText: "Request formation",
    buttonHref: "/en/anfrage"
  },
  {
    id: "aufbau",
    number: 2,
    title: "Business setup",
    subtitle: "Location, team, processes & marketing",
    icon: Settings,
    shortDescription: "Operational setup on site",
    description: "Formation is only the beginning — your business must be built both physically and operationally. My team and I manage the full implementation, ensuring a smooth and controlled market entry. We commission and oversee designers, architects, construction companies – everything.",
    features: [
      "Location selection and setup, including planning, fit-out, and infrastructure",
      "Commissioning and overseeing designers, architects & construction companies",
      "Recruitment and workforce structuring, from scheduling to hiring",
      "Product and service design, including pricing models and quality standards",
      "Marketing and launch planning, covering branding and market entry promotion",
      "Development of operational processes to ensure efficient day-to-day execution"
    ],
    buttonText: "Discuss your setup",
    buttonHref: "/en/anfrage"
  },
  {
    id: "fuehrung",
    number: 3,
    title: "Operations & management",
    subtitle: "Operations, finance & controlling",
    icon: Briefcase,
    shortDescription: "Ongoing management & controlling",
    description: "After formation and setup comes ongoing operations — often the greatest challenge for entrepreneurs operating abroad. We manage and oversee your business, allowing you to focus on strategic direction and growth.",
    features: [
      "Day-to-day business operations, including organisation, process control, and quality management",
      "Financial management, covering budgeting, bookkeeping, cost control, and Zakat/tax compliance",
      "Team leadership, including training, motivation, and performance management",
      "Profitability optimisation through KPI tracking and performance analysis",
      "Strategic support for expansion projects or the launch of new locations"
    ],
    buttonText: "Request management",
    buttonHref: "/en/anfrage"
  }
];

export function BusinessJourney({ locale = "de" }: BusinessJourneyProps) {
  const [scrolledToStep, setScrolledToStep] = useState<number | null>(null);
  const steps = locale === "en" ? journeyStepsEn : journeyStepsDe;
  const t = (de: string, en: string) => (locale === "en" ? en : de);
  const journeyRef = useRef<HTMLDivElement>(null);

  const handleStepClick = (stepId: string, stepNumber: number) => {
    const detailElement = document.getElementById(stepId);
    if (detailElement) {
      detailElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setScrolledToStep(stepNumber);
      
      // Reset highlight after 3 seconds
      setTimeout(() => {
        setScrolledToStep(null);
      }, 3000);
    }
  };

  const scrollToTop = () => {
    if (journeyRef.current) {
      // Scroll zur Journey-Map mit Offset für Navbar
      const rect = journeyRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = rect.top + scrollTop - 100; // 100px Offset für Navbar
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="reise-zum-business" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-sm font-bold text-emerald-700 tracking-wide uppercase mb-3 block">
            {t("Pfeiler 1", "Pillar 1")}
          </span>
          <h2 className="text-3xl font-serif font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl mb-8">
            {t("Unternehmensaufbau & -führung", "Business Setup & Management")}
          </h2>
          
          {/* Quote Block - Green styled */}
          <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg p-6 md:p-8 shadow-sm">
            <p className="text-base md:text-lg text-emerald-900 leading-relaxed italic font-serif mb-4">
              {t(
                "Ich begleite Unternehmen in Saudi-Arabien ganzheitlich – von der Gründung bis zur operativen Führung.",
                "I accompany companies in Saudi Arabia holistically – from formation to operational management."
              )}
            </p>
            <p className="text-base md:text-lg text-emerald-900 leading-relaxed italic font-serif mb-4">
              {t(
                "Viele hören nach der Registrierung auf und verkaufen sie als Erfolg. Doch eine Eintragung im Handelsregister führt kein Unternehmen zum Erfolg – und genau dort beginnen die meisten Probleme.",
                "Many stop after registration and sell it as success. But an entry in the commercial register does not lead a company to success – and that's exactly where most problems begin."
              )}
            </p>
            <p className="text-base md:text-lg text-emerald-900 leading-relaxed italic font-serif">
              {t(
                "Erfolg entsteht durch Struktur, Führung und reale Umsetzung im Markt. Ich übernehme Verantwortung dort, wo es entscheidend wird – als Unternehmer vor Ort.",
                "Success comes through structure, management and real implementation in the market. I take responsibility where it becomes decisive – as an entrepreneur on site."
              )}
            </p>
          </div>
        </div>

        {/* Journey Steps */}
        <div ref={journeyRef} className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 text-center mb-8">
            {t("Deine Journey zum Erfolg", "Your Journey to Success")}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div key={step.id} className="relative">
                  {/* Connector Line (hidden on last item and mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-emerald-400/50 via-emerald-500/50 to-emerald-400/50 z-0" />
                  )}
                  
                  <div className="relative bg-white border border-slate-200 rounded-2xl p-6 h-full hover:border-emerald-400 hover:shadow-xl transition-all duration-300 group cursor-pointer" onClick={() => handleStepClick(step.id, step.number)}>
                    {/* Icon & Number */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-3xl font-bold text-slate-300 group-hover:text-emerald-400 transition-colors">{String(step.number).padStart(2, '0')}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {step.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-sm text-emerald-700 font-medium mb-3">
                      {step.subtitle}
                    </p>
                    
                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                      {step.shortDescription}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-sm font-semibold text-emerald-600 group-hover:text-emerald-700 mt-auto pt-4 border-t border-slate-100">
                      {t("Mehr erfahren", "Learn more")} <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>



        {/* Detailed Sections */}
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isScrolledTo = scrolledToStep === step.number;
          
          return (
            <div
              key={`detail-${step.id}`}
              id={step.id}
              className={`py-16 md:py-24 scroll-mt-20 transition-all duration-500 relative ${
                index % 2 === 0 ? "bg-white" : "bg-slate-50/50"
              } ${isScrolledTo ? "ring-2 ring-emerald-500 ring-offset-4 rounded-2xl" : ""}`}
            >
              {/* Back to Top Button */}
              <div className="absolute top-6 right-6">
                <button
                  onClick={scrollToTop}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg shadow-md transition-all hover:shadow-lg"
                  aria-label={t("Zurück nach oben", "Back to top")}
                >
                  <ArrowUp className="h-4 w-4" />
                  <span>{t("Zurück zur Journey", "Back to journey")}</span>
                </button>
              </div>

              <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/3">
                    <div className="sticky top-32">
                      <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-6">
                        <Icon className="h-7 w-7 text-emerald-600" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">
                        {step.number}. {step.title}
                      </h2>
                      <p className="text-emerald-700 font-medium mb-8 text-lg">
                        {step.subtitle}
                      </p>
                      <Button
                        asChild
                        className="w-full md:w-auto bg-slate-900 text-white hover:bg-slate-800 shadow-md h-12 px-6 text-base"
                      >
                        <Link href={step.buttonHref}>{step.buttonText}</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="lg:w-2/3 space-y-8 text-slate-600 leading-relaxed text-lg">
                    <p>{step.description}</p>
                    <div
                      className={`border border-slate-200 rounded-xl p-8 mt-8 shadow-sm ${
                        index % 2 === 0 ? "bg-slate-50" : "bg-white"
                      }`}
                    >
                      <h3 className="text-slate-900 font-bold mb-6 text-xl">
                        {t("Unsere Leistungen:", "What we handle:")}
                      </h3>
                      <ul className="space-y-4">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
