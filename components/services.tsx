import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Briefcase, Store, ArrowUpRight, Users, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";

const servicesDe = [
  {
    title: "1. Unternehmensgründung",
    description: "Rechtssicherer Start in Saudi-Arabien. Wahl der Rechtsform, Lizenzen (MISA) und Behördenmanagement.",
    icon: Building2,
    features: ["Rechtsform & Lizenzen", "Behörden & Register", "Steuern & Compliance"],
    href: "/services#gruendung"
  },
  {
    title: "2. Unternehmensaufbau",
    description: "Operativer Aufbau vor Ort. Standortwahl, Personalrekrutierung und Prozess-Implementierung.",
    icon: Users,
    features: ["Standort & Büro", "Recruiting & HR", "Marketing & Launch"],
    href: "/services#aufbau"
  },
  {
    title: "3. Unternehmensführung",
    description: "Laufendes Management und Controlling. Finanzen, Mitarbeiterführung und Profitabilitäts-Optimierung.",
    icon: BarChart3,
    features: ["Finanzen & Controlling", "Operations & QM", "Wachstumsstrategie"],
    href: "/services#fuehrung"
  },
  {
    title: "4. Unternehmensberatung",
    description: "Strategie für bestehende Firmen. Markteintritt, Expansion und Prozessoptimierung.",
    icon: Briefcase,
    features: ["Strategie & Wachstum", "Restrukturierung", "Joint Ventures"],
    href: "/services#beratung"
  },
  {
    title: "5. Investment",
    description: "Investition in ausgearbeitete Geschäftskonzepte mit transparenten Finanzplänen.",
    icon: TrendingUp,
    features: ["Businesspläne", "Kalkulation & ROI", "Operative Begleitung"],
    href: "/services#investment"
  },
  {
    title: "6. Franchise",
    description: "Systematisierte Expansion. Aufbau und Anpassung von Franchise-Systemen für den saudischen Markt.",
    icon: Store,
    features: ["System-Analyse", "Recht & Verträge", "Rollout & Schulung"],
    href: "/services#franchise"
  },
];

const servicesEn = [
  {
    title: "1. Company Formation",
    description: "A compliant start in Saudi Arabia: legal structure, licenses (MISA), and authority coordination.",
    icon: Building2,
    features: ["Legal form & licenses", "Authorities & registry", "Tax & compliance"],
    href: "/services#gruendung",
  },
  {
    title: "2. Business Setup",
    description: "Operational setup on the ground: location, hiring, and process implementation.",
    icon: Users,
    features: ["Location & office", "Recruiting & HR", "Marketing & launch"],
    href: "/services#aufbau",
  },
  {
    title: "3. Operations & Management",
    description: "Ongoing operations and controlling: finance, leadership, and profitability optimization.",
    icon: BarChart3,
    features: ["Finance & controlling", "Operations & quality", "Growth strategy"],
    href: "/services#fuehrung",
  },
  {
    title: "4. Business Consulting",
    description: "Strategy for existing companies: market entry, expansion, and process optimization.",
    icon: Briefcase,
    features: ["Strategy & growth", "Restructuring", "Joint ventures"],
    href: "/services#beratung",
  },
  {
    title: "5. Investment",
    description: "Invest in ready-to-launch concepts with transparent financial planning.",
    icon: TrendingUp,
    features: ["Business plans", "Modeling & ROI", "Operational support"],
    href: "/services#investment",
  },
  {
    title: "6. Franchise",
    description: "Systematic expansion: adapt and launch franchise systems for the Saudi market.",
    icon: Store,
    features: ["System analysis", "Legal & contracts", "Rollout & training"],
    href: "/services#franchise",
  },
];

export function Services({ locale = "de" }: { locale?: Locale }) {
  const t = (de: string, en: string) => (locale === "en" ? en : de);
  const href = (raw: string) => localizeHref(raw, locale);
  const services = locale === "en" ? servicesEn : servicesDe;
  return (
    <section id="leistungen" className="pt-8 md:pt-12 pb-16 md:pb-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl mb-6">
            {t("Unsere Expertise. Dein Vorteil.", "Our Expertise. Your Advantage.")}
          </h2>
          <p className="text-lg text-slate-600">
            {t(
              "Wir übernehmen die komplette Unternehmensgründung in Medina – von A bis Z. Dazu gehören MISA-Lizenz, Behördenabstimmungen, rechtliche und steuerliche Grundlagen sowie die Vorbereitung & Durchführung für den operativen Geschäftsbetrieb.",
              "We manage the entire company formation process in Medina — from start to finish. This includes securing the MISA licence, coordinating with all relevant authorities, establishing the legal and tax framework, and preparing your business for full operational readiness."
            )}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.title} href={href(service.href)} className="group block h-full">
              <Card className="h-full border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-900 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full justify-between">
                  <div>
                    <CardDescription className="text-slate-600 mb-6 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature) => (
                        <span key={feature} className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm font-semibold text-emerald-700 mt-auto pt-4 border-t border-slate-100">
                    {t("Details ansehen", "View details")} <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-2">
              {t("Du weißt, was du willst – aber nicht, wo anfangen?", "You know what you want – but not where to start?")}
            </h3>
            <p className="text-slate-600">
              {t(
                "In einem intensiven Gespräch analysieren wir deine Situation und entwickeln einen klaren Plan.",
                "In an in-depth conversation, we analyze your situation and develop a clear plan."
              )}
            </p>
          </div>
          <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 whitespace-nowrap">
            <Link href={href("/anfrage")}>
              {t("Gespräch anfragen", "Request consultation")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
