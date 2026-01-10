import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, TrendingUp, Briefcase, Store, ArrowUpRight, Users, BarChart3 } from "lucide-react";
import Link from "next/link";

const services = [
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

export function Services() {
  return (
    <section id="leistungen" className="pt-8 md:pt-12 pb-16 md:pb-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl mb-6">
            Unsere Expertise. Dein Vorteil.
          </h2>
          <p className="text-lg text-slate-600">
            Wir übernehmen die komplette Unternehmensgründung in Medina – von A bis Z. Dazu gehören MISA-Lizenz, Behördenabstimmungen, rechtliche und steuerliche Grundlagen sowie die Vorbereitung & Durchführung für den operativen Geschäftsbetrieb.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group block h-full">
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
                    Details ansehen <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
