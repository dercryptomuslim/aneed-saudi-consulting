import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Briefcase, 
  TrendingUp, 
  Store, 
  CheckCircle2, 
  ArrowDown, 
  Users, 
  BarChart3 
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Contact } from "@/components/contact";

export const metadata: Metadata = {
  title: "Leistungen | Aneed Ashraf - Consulting Saudi-Arabien",
  description: "Unsere 6 Kernkompetenzen: Gründung, Aufbau, Führung, Beratung, Investment und Franchise in Saudi-Arabien.",
};

const quickLinks = [
  { id: "gruendung", title: "Gründung", icon: Building2 },
  { id: "aufbau", title: "Aufbau", icon: Users },
  { id: "fuehrung", title: "Führung", icon: BarChart3 },
  { id: "beratung", title: "Beratung", icon: Briefcase },
  { id: "investment", title: "Investment", icon: TrendingUp },
  { id: "franchise", title: "Franchise", icon: Store },
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
            Unsere Services im Detail
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Von der Gründung über den Aufbau bis zur operativen Führung. Wir decken den gesamten Lebenszyklus deines Unternehmens in Saudi-Arabien ab.
          </p>

          {/* Quick Links Grid (2x3) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-12">
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

      {/* 1. Unternehmensgründung */}
      <section id="gruendung" className="py-16 md:py-24 border-t border-slate-100 scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                        <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-6">
                          <Building2 className="h-7 w-7 text-emerald-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">1. Unternehmensgründung</h2>
                        <p className="text-emerald-700 font-medium mb-8 text-lg">Rechtlich, regulatorisch & steuerlich sicher</p>
                        <Button asChild className="w-full md:w-auto bg-slate-900 text-white hover:bg-slate-800 shadow-md h-12 px-6 text-base">
                          <Link href="/saudi-check">Jetzt Gründung anfragen</Link>
                        </Button>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8 text-slate-600 leading-relaxed text-lg">
              <p>
                Der erste Schritt für ein erfolgreiches Business in Saudi-Arabien ist die gründliche und rechtssichere Unternehmensgründung. Mein Team und ich begleiten Unternehmer und Investoren durch alle notwendigen Schritte, von der ersten Idee bis zur offiziellen Registrierung.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mt-8 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-6 text-xl">Unsere Leistungen:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Auswahl der passenden Rechtsform (abhängig von Branche & Investorentyp)</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Beantragung aller Lizenzen (MISA, Gewerbelizenzen, Genehmigungen)</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Abstimmung mit Behörden auf lokaler und nationaler Ebene</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Handelsregistereintragungen & Einhaltung gesetzlicher Vorgaben</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Einrichtung administrativer & steuerlicher Strukturen (Compliance, Zakat)</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Unterstützung bei Bankkontoeröffnung & Kapitalstruktur</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Unternehmensaufbau */}
      <section id="aufbau" className="py-16 md:py-24 border-t border-slate-100 scroll-mt-20 bg-slate-50/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                        <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-6">
                          <Users className="h-7 w-7 text-emerald-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">2. Unternehmensaufbau</h2>
                        <p className="text-emerald-700 font-medium mb-8 text-lg">Standort, Personal, Prozesse & Marketing</p>
                        <Button asChild className="w-full md:w-auto bg-slate-900 text-white hover:bg-slate-800 shadow-md h-12 px-6 text-base">
                          <Link href="/saudi-check">Aufbau besprechen</Link>
                        </Button>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8 text-slate-600 leading-relaxed text-lg">
              <p>
                        Mit der Gründung ist es nicht getan – ein Business muss physisch und operativ aufgebaut werden. Mein Team und ich übernehmen die komplette Umsetzung des Unternehmensaufbaus, damit dein Geschäft startklar wird.
              </p>
              
              <div className="bg-white border border-slate-200 rounded-xl p-8 mt-8 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-6 text-xl">Operative Umsetzung:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Standortwahl & Aufbau (Raumplanung, Einrichtung, Infrastruktur)</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Personalrekrutierung (Einsatzpläne bis Einstellung)</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Produkt- & Serviceentwicklung (z.B. Pricing, Qualitätsstandards)</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Marketing- & Launchplanung (Branding, Promotion)</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Aufbau operativer Prozesse für reibungslose Abläufe</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Unternehmensführung */}
      <section id="fuehrung" className="py-16 md:py-24 border-t border-slate-100 scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                        <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-6">
                          <BarChart3 className="h-7 w-7 text-emerald-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">3. Unternehmensführung</h2>
                        <p className="text-emerald-700 font-medium mb-8 text-lg">Betrieb, Finanzen & Controlling</p>
                        <Button asChild className="w-full md:w-auto bg-slate-900 text-white hover:bg-slate-800 shadow-md h-12 px-6 text-base">
                          <Link href="/saudi-check">Management anfragen</Link>
                        </Button>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8 text-slate-600 leading-relaxed text-lg">
              <p>
                        Nach Gründung und Aufbau kommt die operative Führung – oft die größte Herausforderung für Unternehmer im Ausland. Mein Team und ich übernehmen das Management und Controlling deines Geschäfts, damit du dich auf strategische Entscheidungen konzentrieren kannst.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mt-8 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-6 text-xl">Laufendes Management:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Geschäftsoperationen (Organisation, Prozesskontrolle, QM)</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Finanzmanagement (Budget, Buchhaltung, Kosten, Zakat/Steuer)</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Mitarbeiterführung (Schulung, Motivation, Controlling)</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Profitabilitäts-Optimierung (KPI-Monitoring, Performance)</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Unterstützung bei Expansionen oder neuen Standorten</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Unternehmensberatung */}
      <section id="beratung" className="py-16 md:py-24 border-t border-slate-100 scroll-mt-20 bg-slate-50/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                        <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-6">
                          <Briefcase className="h-7 w-7 text-emerald-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">4. Unternehmensberatung</h2>
                        <p className="text-emerald-700 font-medium mb-8 text-lg">Strategie & Optimierung</p>
                        <Button asChild className="w-full md:w-auto bg-slate-900 text-white hover:bg-slate-800 shadow-md h-12 px-6 text-base">
                          <Link href="/saudi-check">Strategiegespräch buchen</Link>
                        </Button>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8 text-slate-600 leading-relaxed text-lg">
              <p>
                Für bestehende saudische und internationale Firmen bieten wir strategische und operative Beratung. Wir analysieren Geschäftsmodelle, identifizieren Schwachstellen und entwickeln maßgeschneiderte Strategien.
              </p>
              
              <div className="bg-white border border-slate-200 rounded-xl p-8 mt-8 shadow-sm">
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

      {/* 5. Investment */}
      <section id="investment" className="py-16 md:py-24 border-t border-slate-100 bg-slate-50/50 scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                        <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-6">
                          <TrendingUp className="h-7 w-7 text-emerald-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">5. Investment</h2>
                        <p className="text-emerald-700 font-medium mb-8 text-lg">Ausgearbeitete Geschäftskonzepte</p>
                        <Button asChild className="w-full md:w-auto bg-slate-900 text-white hover:bg-slate-800 shadow-md h-12 px-6 text-base">
                          <Link href="/saudi-check">Investitionsmöglichkeiten</Link>
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

      {/* 6. Franchise */}
      <section id="franchise" className="py-16 md:py-24 border-t border-slate-100 scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                        <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-6">
                          <Store className="h-7 w-7 text-emerald-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">6. Franchise in Saudi-Arabien</h2>
                        <p className="text-emerald-700 font-medium mb-8 text-lg">Expansion & Systemaufbau</p>
                        <Button asChild className="w-full md:w-auto bg-slate-900 text-white hover:bg-slate-800 shadow-md h-12 px-6 text-base">
                          <Link href="/saudi-check">Franchise besprechen</Link>
                        </Button>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8 text-slate-600 leading-relaxed text-lg">
              <p>
                Ich unterstütze Unternehmer und Investoren dabei, Franchise-Modelle erfolgreich in Saudi-Arabien umzusetzen – von der strategischen Planung bis zur operativen Expansion.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mt-8 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-6 text-xl">Leistungen für Franchise-Systeme:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Analyse bestehender Konzepte für den SA-Markt</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Beratung zu Rechtsform, Lizenzen & Verträgen</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Standortwahl, Aufbau & Partnerauswahl</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Implementierung operativer Prozesse & Standards</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Schulung von Franchisenehmern & Personal</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0"/> <span>Laufende Betreuung & Monitoring</span></li>
                </ul>
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
