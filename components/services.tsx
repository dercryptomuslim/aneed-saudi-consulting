import { MagicCard } from "@/components/ui/magic-card";
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
    <section id="leistungen" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            Unsere Expertise. Ihr Vorteil.
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Wir bieten High-End Consulting für Ihre Ambitionen im Königreich – von der Gründung bis zur Marktführerschaft.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <MagicCard key={service.title} className="rounded-2xl h-full border-neutral-800 flex flex-col">
              <div className="flex flex-col h-full">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                  <service.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-neutral-400 mb-6 flex-grow leading-relaxed text-sm">
                  {service.description}
                </p>

                <div className="space-y-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span key={feature} className="px-2 py-1 text-[10px] font-medium rounded-full bg-neutral-900 text-neutral-300 border border-neutral-800">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={service.href} className="flex items-center text-sm font-semibold text-emerald-500 hover:text-emerald-400 transition-colors group pt-2">
                    Details ansehen <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
}
