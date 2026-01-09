import { MagicCard } from "@/components/ui/magic-card";
import { Building2, TrendingUp, Plane, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Firmengründung",
    description: "Starten Sie Ihr Business in Saudi-Arabien. 100% Eigentum, Lizenzen und Bankkonten aus einer Hand.",
    icon: Building2,
    features: ["Lizenzierung", "Bankkonto", "Steuern"],
    id: "gruendung",
    href: "#kontakt"
  },
  {
    title: "Investment",
    description: "Profitieren Sie vom Boom der Vision 2030. Exklusive Zugänge zu Immobilien und Unternehmensbeteiligungen.",
    icon: TrendingUp,
    features: ["Real Estate", "Private Equity", "Marktanalyse"],
    id: "investment",
    href: "#kontakt"
  },
  {
    title: "Auswanderung",
    description: "Ihr neues Leben im Königreich. Wir kümmern uns um Iqama, Wohnungssuche und das kulturelle Onboarding.",
    icon: Plane,
    features: ["Visa & Iqama", "Relocation", "Lifestyle"],
    id: "auswanderung",
    href: "#kontakt"
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
            Wir bieten High-End Consulting für Ihre Ambitionen im Königreich.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <MagicCard key={service.title} className="rounded-2xl h-full border-neutral-800">
              <div className="flex flex-col h-full">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                  <service.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-neutral-400 mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span key={feature} className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-900 text-neutral-300 border border-neutral-800">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={service.href} className="flex items-center text-sm font-semibold text-emerald-500 hover:text-emerald-400 transition-colors group">
                    Mehr erfahren <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
