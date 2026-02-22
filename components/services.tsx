import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Briefcase, Store, ArrowUpRight, Users, BarChart3, ArrowRight, Plane } from "lucide-react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";

const servicesDe = [
  {
    title: "Unternehmensaufbau & -führung",
    description: "Von der Gründung über den Aufbau bis zur operativen Führung. Du bestimmst, wie weit die Reise geht.",
    icon: Building2,
    features: ["Unternehmensgründung", "Unternehmensaufbau", "Unternehmensführung"],
    href: "/services#reise-zum-business"
  },
  {
    title: "Investment",
    description: "Investition in ausgearbeitete Geschäftskonzepte mit transparenten Finanzplänen.",
    icon: TrendingUp,
    features: ["Businesspläne", "Kalkulation & ROI", "Operative Begleitung"],
    href: "/services#investment"
  },
  {
    title: "Unternehmensberatung",
    description: "Strategie für bestehende Firmen. Markteintritt, Expansion und Prozessoptimierung.",
    icon: Briefcase,
    features: ["Strategie & Wachstum", "Restrukturierung", "Joint Ventures"],
    href: "/services#beratung"
  },
  {
    title: "Auswandern nach Saudi-Arabien",
    description: "Wir unterstützen Menschen dabei, legal, strukturiert und langfristig nach Saudi-Arabien auszuwandern.",
    icon: Plane,
    features: ["Unternehmensgründung", "Premium Residency", "Langfristiger Aufenthalt"],
    href: "/services#auswandern"
  },
];

const servicesEn = [
  {
    title: "Business Setup & Management",
    description: "From formation through setup to operational management. You decide how far the journey goes.",
    icon: Building2,
    features: ["Company Formation", "Business Setup", "Operations & Management"],
    href: "/services#reise-zum-business",
  },
  {
    title: "Investment",
    description: "Invest in ready-to-launch concepts with transparent financial planning.",
    icon: TrendingUp,
    features: ["Business plans", "Modeling & ROI", "Operational support"],
    href: "/services#investment",
  },
  {
    title: "Business Consulting",
    description: "Strategy for existing companies: market entry, expansion, and process optimization.",
    icon: Briefcase,
    features: ["Strategy & growth", "Restructuring", "Joint ventures"],
    href: "/services#beratung",
  },
  {
    title: "Immigrate to Saudi Arabia",
    description: "We support people in immigrating to Saudi Arabia legally, structured and long-term.",
    icon: Plane,
    features: ["Company Formation", "Premium Residency", "Long-term Stay"],
    href: "/services#auswandern",
  },
];

export function Services({ locale = "de" }: { locale?: Locale }) {
  const t = (de: string, en: string) => (locale === "en" ? en : de);
  const href = (raw: string) => localizeHref(raw, locale);
  const services = locale === "en" ? servicesEn : servicesDe;
  return (
    <section id="leistungen" className="pt-8 md:pt-12 pb-16 md:pb-20 bg-slate-50 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl mb-6">
            {t("Unsere Expertise. Dein Vorteil.", "Our Expertise. Your Advantage.")}
          </h2>
          <div className="text-lg text-slate-600 space-y-4 text-center">
            <p>
              {t(
                "Wir übernehmen die komplette Unternehmensgründung in Medina – von A bis Z. Dazu gehören MISA-Lizenz, Behördenabstimmungen, rechtliche und steuerliche Grundlagen sowie die Vorbereitung & Durchführung für den operativen Geschäftsbetrieb.",
                "We manage the entire company formation process in Medina — from start to finish. This includes securing the MISA licence, coordinating with all relevant authorities, establishing the legal and tax framework, and preparing & implementing for operational business operations."
              )}
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Link key={service.title} href={href(service.href)} className="group block h-full">
              <Card className="h-full border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                      {t("Pfeiler", "Pillar")} {index + 1}
                    </span>
                  </div>
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
        <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-2">
              {t("Individuelle Beratung für dein Vorhaben", "Individual consulting for your project")}
            </h3>
            <p className="text-slate-600">
              {t(
                "Wir analysieren deine Situation und entwickeln gemeinsam einen klaren Plan.",
                "We analyze your situation and develop a clear plan together."
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
