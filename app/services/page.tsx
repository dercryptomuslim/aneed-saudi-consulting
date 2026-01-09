import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Spotlight } from "@/components/ui/spotlight";
import { MagicCard } from "@/components/ui/magic-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Briefcase, TrendingUp, Store, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen | Aneed Ashraf - Consulting Saudi-Arabien",
  description: "Umfassende Beratung für Saudi-Arabien: Unternehmensgründung (MISA), Strategieberatung, Investment-Konzepte und Franchise-Systeme. Ihr Experte vor Ort.",
};

const services = [
  {
    title: "Unternehmensgründung in Saudi-Arabien",
    subtitle: "Rechtssicherer Markteintritt für saudische & internationale Firmen",
    description: "Die Gründung im Königreich bietet enorme Chancen, erfordert jedoch präzises Wissen um MISA-Lizenzen und lokale Regularien. Wir führen Sie strukturiert von der Idee zur operativen Firma.",
    icon: Building2,
    details: [
      "Wahl der optimalen Rechtsform & MISA-Lizenzierung",
      "Behördenmanagement & Handelsregistereintragung",
      "Bankkontoeröffnung & Kapitalstrukturierung",
      "Visa, Iqama & Sponsoring-Lösungen",
      "Steuer- & Zakat-Compliance",
      "Standortanalyse & operative Infrastruktur"
    ]
  },
  {
    title: "Unternehmensberatung & Strategie",
    subtitle: "Wachstumsimpulse für bestehende Firmen",
    description: "Für Unternehmen, die bereits vor Ort sind oder expandieren wollen: Wir analysieren Geschäftsmodelle und optimieren Prozesse für den saudischen Markt.",
    icon: Briefcase,
    details: [
      "Strategische Wachstumsplanung & Skalierung",
      "Restrukturierung & Prozessoptimierung",
      "Markteintritts- & Expansionsstrategien",
      "Kosten- & Profitabilitätsanalysen",
      "Partnerschaften & Joint Venture Begleitung"
    ]
  },
  {
    title: "Investment in Geschäftskonzepte",
    subtitle: "Turnkey-Investments in geprüfte Modelle",
    description: "Wir entwickeln marktreife, kalkulierte Business-Konzepte in Wachstumsbranchen. Investieren Sie direkt in fertig strukturierte Projekte mit transparentem ROI.",
    icon: TrendingUp,
    details: [
      "Vollständige Business- & Finanzpläne",
      "Transparente Kosten- & Ertragsmodelle",
      "Klare Beteiligungsstrukturen",
      "Operative Begleitung & Implementierung",
      "Zugang zu exklusiven Off-Market Chancen"
    ]
  },
  {
    title: "Franchise-Systeme",
    subtitle: "Expansion & Systemaufbau im Königreich",
    description: "Saudi-Arabien liebt starke Marken. Wir adaptieren Ihr Franchise-Konzept rechtlich und operativ für den lokalen Markt und begleiten den Rollout.",
    icon: Store,
    details: [
      "Analyse & Anpassung bestehender Konzepte",
      "Rechtliche Strukturierung & Lizenzierung",
      "Standortwahl & Partner-Akquise",
      "Operative Prozess-Implementierung",
      "Schulung & Qualitätsmanagement",
      "Laufendes Monitoring & Wachstumsbegleitung"
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-foreground flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-sm text-emerald-500 backdrop-blur-md mb-6">
            Umfassende Expertise
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-6">
            Meine Services für Ihren Erfolg
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            Ob Gründung, Investment oder Expansion: Wir bieten maßgeschneiderte Lösungen, die auf 9 Jahren Erfahrung im saudi-arabischen Markt basieren.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <MagicCard key={index} className="h-full border-neutral-800 bg-neutral-900/20 backdrop-blur-sm p-8">
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                      <service.icon className="h-7 w-7 text-emerald-500" />
                    </div>
                    <span className="text-xs font-mono text-neutral-600 border border-neutral-800 px-2 py-1 rounded">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-emerald-500 text-sm font-medium mb-4">{service.subtitle}</p>
                  <p className="text-neutral-400 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-auto space-y-3">
                    {service.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </MagicCard>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="inline-flex flex-col items-center p-8 rounded-3xl border border-neutral-800 bg-neutral-900/30 backdrop-blur-sm max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Bereit für den Markteintritt?</h3>
              <p className="text-neutral-400 mb-8">
                Lassen Sie uns Ihre individuelle Strategie besprechen. Ich stehe Ihnen als strategischer Partner zur Seite.
              </p>
              <Button asChild size="lg" className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                <Link href="/#kontakt">
                  Unverbindliches Erstgespräch vereinbaren
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

