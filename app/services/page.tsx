import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  TrendingUp, 
  CheckCircle2, 
  ArrowDown,
  Route,
  Plane
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Contact } from "@/components/contact";
import { BusinessJourney } from "@/components/business-journey";

export const metadata: Metadata = {
  title: "Leistungen | Unternehmensgründung & Beratung Saudi-Arabien",
  description: "Vier Pfeiler für dein Business: Unternehmensaufbau & -führung (Gründung, Aufbau, Führung), Investment-Möglichkeiten, strategische Unternehmensberatung und Auswandern nach Saudi-Arabien.",
  alternates: {
    canonical: "/services",
    languages: {
      "de": "/services",
      "en": "/en/services",
    },
  },
  keywords: ["Leistungen Saudi-Arabien", "Unternehmensgründung", "MISA Lizenz", "Franchise Saudi-Arabien", "Investment Saudi-Arabien", "Unternehmensberatung", "Auswandern Saudi-Arabien", "Premium Residency"],
  openGraph: {
    title: "Leistungen | Unternehmensgründung Saudi-Arabien",
    description: "Vier Pfeiler für dein Business: Unternehmensaufbau & -führung, Investment-Möglichkeiten, strategische Unternehmensberatung und Auswandern nach Saudi-Arabien.",
    url: "https://www.aneedashraf.de/services",
    siteName: "Aneed Ashraf",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leistungen | Unternehmensgründung Saudi-Arabien",
    description: "Vier Pfeiler für dein Business: Unternehmensaufbau & -führung, Investment-Möglichkeiten, strategische Unternehmensberatung und Auswandern nach Saudi-Arabien.",
  },
};

const quickLinks = [
  { id: "reise-zum-business", title: "Unternehmensaufbau & -führung", icon: Route },
  { id: "investment", title: "Investment", icon: TrendingUp },
  { id: "beratung", title: "Unternehmensberatung", icon: Briefcase },
  { id: "auswandern", title: "Auswandern nach Saudi-Arabien", icon: Plane },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col scroll-smooth">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-emerald-700 shadow-sm mb-6 font-medium">
            Ganzheitliche Betreuung
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            Unsere Leistungen
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Vier Pfeiler für dein Business in Saudi-Arabien: Unternehmensaufbau & -führung, Investment-Möglichkeiten, strategische Unternehmensberatung und Auswandern nach Saudi-Arabien.
          </p>

          {/* Quick Links Grid (4 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mt-12">
            {quickLinks.map((link) => (
              <Link 
                key={link.id} 
                href={`#${link.id}`}
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center text-emerald-600 mb-3 group-hover:scale-110 transition-transform group-hover:bg-emerald-50">
                  <link.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-bold text-slate-700 group-hover:text-emerald-700">{link.title}</span>
                <ArrowDown className="h-4 w-4 text-slate-400 mt-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pfeiler 1: Unternehmensaufbau & -führung */}
      <BusinessJourney locale="de" />

      {/* Pfeiler 2: Investment */}
      <section id="investment" className="py-16 md:py-24 border-t border-slate-100 bg-slate-50/50 scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                        <div className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700 shadow-sm mb-4 font-medium">
                          Pfeiler 2
                        </div>
                        <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-6">
                          <TrendingUp className="h-7 w-7 text-emerald-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">Investment</h2>
                        <p className="text-emerald-700 font-medium mb-8 text-lg">Ausgearbeitete Geschäftskonzepte</p>
                        <Button asChild className="w-full md:w-auto bg-slate-900 text-white hover:bg-slate-800 shadow-md h-12 px-6 text-base">
                          <Link href="/investieren-in-medina">Investitionsmöglichkeiten</Link>
                        </Button>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8 text-slate-600 leading-relaxed text-lg">
              <p>
                Wir entwickeln eigene, marktreife Geschäftskonzepte in ausgewählten Branchen. Diese sind umfassend analysiert, wirtschaftlich kalkuliert und operativ vorbereitet für Investoren.
              </p>
              
              <div className="bg-white border border-slate-200 rounded-xl p-8 mt-8 shadow-sm">
                        <h3 className="text-slate-900 font-bold mb-6 text-xl">Deine Vorteile:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Ausgearbeitete Business- & Finanzpläne</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Transparente Kosten- & Ertragsmodelle</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Klar definierte Rollen & Beteiligungsstrukturen</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Professionelle Umsetzung & operative Begleitung</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Direkter Zugang zum saudi-arabischen Markt</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pfeiler 3: Unternehmensberatung */}
      <section id="beratung" className="py-16 md:py-24 border-t border-slate-100 scroll-mt-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                        <div className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700 shadow-sm mb-4 font-medium">
                          Pfeiler 3
                        </div>
                        <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-6">
                          <Briefcase className="h-7 w-7 text-emerald-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">Unternehmensberatung</h2>
                        <p className="text-emerald-700 font-medium mb-8 text-lg">Strategie & Optimierung</p>
                        <Button asChild className="w-full md:w-auto bg-slate-900 text-white hover:bg-slate-800 shadow-md h-12 px-6 text-base">
                          <Link href="/anfrage">Strategiegespräch buchen</Link>
                        </Button>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8 text-slate-600 leading-relaxed text-lg">
              <p>
                Für bestehende saudische und internationale Firmen bieten wir strategische und operative Beratung. Wir analysieren Geschäftsmodelle, identifizieren Schwachstellen und entwickeln maßgeschneiderte Strategien.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mt-8 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-6 text-xl">Beratungsfelder:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Strategische Wachstumsplanung</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Markteintritts- & Expansionsstrategien</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Restrukturierung & Prozessoptimierung</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Kosten- & Profitabilitätsanalysen</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Begleitung bei Partnerschaften & Joint Ventures</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pfeiler 4: Auswandern nach Saudi-Arabien */}
      <section id="auswandern" className="py-16 md:py-24 border-t border-slate-100 scroll-mt-20 bg-slate-50/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700 shadow-sm mb-4 font-medium">
                  Pfeiler 4
                </div>
                <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-6">
                  <Plane className="h-7 w-7 text-emerald-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">Auswandern nach Saudi-Arabien</h2>
                <p className="text-emerald-700 font-medium mb-8 text-lg">Legal, strukturiert & langfristig</p>
                <Button asChild className="w-full md:w-auto bg-slate-900 text-white hover:bg-slate-800 shadow-md h-12 px-6 text-base">
                  <Link href="/anfrage">Beratung anfragen</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8 text-slate-600 leading-relaxed text-lg">
              <p>
                Wir unterstützen Menschen dabei, <Link href="/anfrage" className="text-emerald-700 hover:text-emerald-800 font-medium underline decoration-1 underline-offset-2">legal, strukturiert und langfristig</Link> nach Saudi-Arabien auszuwandern.
              </p>
              
              <p>
                Ein dauerhafter Aufenthalt im Königreich erfordert eine klare rechtliche Grundlage. Genau hier setzen wir an – mit unternehmerischen Lösungen, die rechtlich tragfähig und operativ umsetzbar sind.
              </p>

              <div className="bg-white border border-slate-200 rounded-xl p-8 mt-8 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-6 text-xl">Drei mögliche Wege:</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-emerald-500 pl-6">
                    <h4 className="text-slate-900 font-bold mb-2 text-lg">
                      <Link href="/services#reise-zum-business" className="hover:text-emerald-700 transition-colors underline decoration-2 underline-offset-4">
                        1. Unternehmensgründung als Aufenthaltsbasis
                      </Link>
                    </h4>
                    <p className="text-slate-600 mb-3">
                      Wir gründen für dich ein eigenes Unternehmen in Saudi-Arabien – inklusive MISA-Lizenz, rechtlicher Struktur und operativer Vorbereitung.
                    </p>
                    <p className="text-slate-600 mb-3">
                      Über diese Unternehmensstruktur kann eine Aufenthalts- und Arbeitserlaubnis aufgebaut werden, sofern alle regulatorischen Voraussetzungen erfüllt sind.
                    </p>
                    <p className="text-slate-600">
                      <span className="font-bold">Dieser Weg</span> richtet sich an Unternehmer mit einem bestehenden, aktiven Business außerhalb Saudi-Arabiens, die in Saudi-Arabien leben möchten, ohne dort eine neue operative Geschäftstätigkeit aufzunehmen.
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-6">
                    <h4 className="text-slate-900 font-bold mb-2 text-lg">
                      <Link href="/services#reise-zum-business" className="hover:text-emerald-700 transition-colors underline decoration-2 underline-offset-4">
                        2. Aufbau eines marktfähigen Business
                      </Link>
                    </h4>
                    <p className="text-slate-600 mb-3">
                      Du möchtest nicht nur gründen, sondern ein funktionierendes Geschäftsmodell aufbauen?
                    </p>
                    <p className="text-slate-600 mb-3">
                      Wir begleiten dich vom Konzept über Standort, Personal und Prozesse bis zur operativen Führung.
                    </p>
                    <p className="text-slate-600">
                      Ziel ist es, nicht nur einen Aufenthalt zu ermöglichen, sondern ein wirtschaftlich tragfähiges Unternehmen zu etablieren.
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-6">
                    <h4 className="text-slate-900 font-bold mb-2 text-lg">
                      <Link href="/blog/saudi-premium-residency" className="hover:text-emerald-700 transition-colors underline decoration-2 underline-offset-4">
                        3. Beantragung der Saudi Premium Residency
                      </Link>
                    </h4>
                    <p className="text-slate-600 mb-3">
                      Für qualifizierte Personen oder Investoren besteht alternativ die Möglichkeit der <Link href="/blog/saudi-premium-residency" className="text-emerald-700 hover:text-emerald-800 font-medium underline decoration-1 underline-offset-2">Saudi Premium Residency</Link>.
                    </p>
                    <p className="text-slate-600 mb-3">
                      Wir unterstützen dich bei der strukturierten Vorbereitung und Beantragung – einschließlich Prüfung der Voraussetzungen, Dokumentation und Einreichung.
                    </p>
                    <p className="text-slate-600">
                      <span className="font-bold">Dieser Weg</span> ist besonders geeignet für Personen, die langfristig in Saudi-Arabien leben möchten, ohne zwingend operativ tätig zu sein.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 mt-8 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-4 text-xl">Unser Ansatz</h3>
                <p className="text-slate-700 mb-4 font-semibold">
                  Wir verkaufen keine „Visa-Lösungen".
                </p>
                <p className="text-slate-700 mb-6">
                  Wir schaffen rechtlich belastbare Strukturen, auf deren Basis ein Aufenthalt möglich wird.
                </p>
                <p className="text-slate-700 mb-4 font-semibold">
                  Jeder Fall ist individuell.
                </p>
                <p className="text-slate-700 mb-4">
                  Deshalb prüfen wir zunächst deine individuelle Situation. <Link href="/anfrage" className="text-emerald-700 hover:text-emerald-800 font-semibold underline decoration-1 underline-offset-2">Buche ein Gespräch</Link>, um deine Möglichkeiten zu besprechen.
                </p>
                <p className="text-slate-700 mb-4">
                  Wir analysieren:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Deine finanzielle Ausgangssituation</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Deine unternehmerischen Ziele</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Die regulatorischen Voraussetzungen</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Die langfristige Tragfähigkeit des Vorhabens</span></li>
                </ul>
              </div>

              <div className="bg-slate-900 text-white rounded-xl p-8 mt-8 shadow-lg">
                <p className="text-xl font-serif font-bold text-center">
                  Auswandern nach Saudi-Arabien ist möglich –<br />
                  aber nur mit der richtigen Struktur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontaktformular */}
      <div id="kontakt-form">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
