import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Briefcase, TrendingUp, Store, CheckCircle2, ArrowDown } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Contact } from "@/components/contact";

export const metadata: Metadata = {
  title: "Leistungen | Aneed Ashraf - Consulting Saudi-Arabien",
  description: "Detaillierte Übersicht unserer Leistungen: Unternehmensgründung, Beratung, Investment und Franchise in Saudi-Arabien.",
};

const quickLinks = [
  { id: "gruendung", title: "Gründung", icon: Building2 },
  { id: "beratung", title: "Beratung", icon: Briefcase },
  { id: "investment", title: "Investment", icon: TrendingUp },
  { id: "franchise", title: "Franchise", icon: Store },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-foreground flex flex-col scroll-smooth">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-sm text-emerald-500 backdrop-blur-md mb-6">
            Ganzheitliche Betreuung
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-6">
            Meine Services im Detail
          </h1>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto mb-10">
            Transparenz, Expertise und klare Strukturen. Hier erfahren Sie genau, wie wir Ihren Erfolg in Saudi-Arabien sicherstellen.
          </p>

          {/* Quick Links / Inhaltsverzeichnis */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
            {quickLinks.map((link) => (
              <Link 
                key={link.id} 
                href={`#${link.id}`}
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-neutral-900/30 border border-neutral-800 hover:border-emerald-500/50 hover:bg-neutral-900/60 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-3 group-hover:scale-110 transition-transform">
                  <link.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-neutral-300 group-hover:text-white">{link.title}</span>
                <ArrowDown className="h-3 w-3 text-neutral-600 mt-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Unternehmensgründung */}
      <section id="gruendung" className="py-24 border-t border-neutral-900 bg-neutral-950/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="h-16 w-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-6">
                  <Building2 className="h-8 w-8 text-emerald-500" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Unternehmensgründung in Saudi-Arabien</h2>
                <p className="text-emerald-500 font-medium mb-6">Von A bis Z</p>
                <Button asChild className="w-full md:w-auto bg-white text-black hover:bg-neutral-200">
                  <Link href="#kontakt-form">Jetzt Gründung anfragen</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8 text-neutral-300 leading-relaxed">
              <p className="text-lg font-medium text-white">
                Für saudische und nicht-saudische Unternehmen
              </p>
              <p>
                Die Unternehmensgründung in Saudi-Arabien bietet enorme Chancen, ist jedoch mit komplexen rechtlichen, regulatorischen und operativen Anforderungen verbunden. Mein Team und ich begleiten Unternehmen ganzheitlich und strukturiert durch den gesamten Gründungsprozess – von der ersten Idee bis zur vollständig operativen Firma.
              </p>
              <p>
                Unser Ziel ist es, unseren Kunden einen rechtssicheren, effizienten und nachhaltigen Markteintritt zu ermöglichen – ohne Umwege, Verzögerungen oder unnötige Risiken.
              </p>
              
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 mt-8">
                <h3 className="text-white font-semibold mb-6">Unsere Leistungen im Überblick:</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="text-emerald-500 text-sm uppercase tracking-wide">Planung & Umsetzung</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Auswahl der passenden Rechtsform</li>
                      <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Beantragung aller Lizenzen (z.B. MISA)</li>
                      <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Abstimmung mit Behörden</li>
                      <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Handelsregistereintragung</li>
                      <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Einrichtung administrativer Strukturen</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-emerald-500 text-sm uppercase tracking-wide">Operativer Support</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Standort- und Marktanalysen</li>
                      <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Gesellschaftsverträge & Shareholder</li>
                      <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Bankkonto & Kapitalstruktur</li>
                      <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Visa, Iqama & Sponsoring</li>
                      <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Steuer & Zakat Compliance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Unternehmensberatung */}
      <section id="beratung" className="py-24 border-t border-neutral-900 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="h-16 w-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-6">
                  <Briefcase className="h-8 w-8 text-emerald-500" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Unternehmensberatung</h2>
                <p className="text-emerald-500 font-medium mb-6">Strategie & Wachstum</p>
                <Button asChild className="w-full md:w-auto bg-white text-black hover:bg-neutral-200">
                  <Link href="#kontakt-form">Beratungstermin vereinbaren</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8 text-neutral-300 leading-relaxed">
              <p className="text-lg font-medium text-white">
                Für bestehende saudische und internationale Firmen
              </p>
              <p>
                Mein Team und ich bieten strategische und operative Unternehmensberatung für Firmen, die bereits in Saudi-Arabien tätig sind oder ihre Aktivitäten ausbauen möchten. Dabei beraten wir sowohl lokale saudische Unternehmen als auch internationale Firmen, die ihre Marktposition stärken, Prozesse optimieren oder expandieren wollen.
              </p>
              <p>
                Unsere Beratung ist praxisnah, marktorientiert und auf langfristigen Erfolg ausgerichtet. Wir analysieren bestehende Geschäftsmodelle, identifizieren Schwachstellen und entwickeln maßgeschneiderte Strategien, die den lokalen Marktgegebenheiten und regulatorischen Rahmenbedingungen entsprechen.
              </p>
              <p>
                Durch unsere tiefe Marktkenntnis, lokale Netzwerke und Erfahrung aus zahlreichen Projekten agieren wir als strategischer Sparringspartner für Unternehmer, Geschäftsführer und Investoren in Saudi-Arabien.
              </p>

              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 mt-8">
                <h4 className="text-emerald-500 text-sm uppercase tracking-wide mb-4">Beratungsleistungen</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Partnerschaften & Joint Ventures</li>
                    <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Strategische Unternehmensplanung</li>
                    <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Markteintritts-Strategien</li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Restrukturierung & Optimierung</li>
                    <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Kosten- & Profitabilitätsanalysen</li>
                    <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Organisationsstrukturen</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Investment */}
      <section id="investment" className="py-24 border-t border-neutral-900 bg-neutral-950/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="h-16 w-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-6">
                  <TrendingUp className="h-8 w-8 text-emerald-500" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Investment in Geschäftskonzepte</h2>
                <p className="text-emerald-500 font-medium mb-6">Strukturierte Chancen</p>
                <Button asChild className="w-full md:w-auto bg-white text-black hover:bg-neutral-200">
                  <Link href="#kontakt-form">Investitionsmöglichkeiten prüfen</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8 text-neutral-300 leading-relaxed">
              <p className="text-lg font-medium text-white">
                Strukturierte Investitionsmöglichkeiten in Saudi-Arabien
              </p>
              <p>
                Neben Beratung und Unternehmensgründung entwickeln mein Team und ich eigene, marktreife Geschäftskonzepte in ausgewählten Branchen. Diese Konzepte werden umfassend analysiert, wirtschaftlich kalkuliert und operativ vorbereitet, sodass Investoren die Möglichkeit erhalten, in fertig strukturierte und professionell ausgearbeitete Projekte zu investieren.
              </p>
              <p>
                Unser Fokus liegt auf nachhaltigen, skalierbaren Geschäftsmodellen mit klarem Marktbedarf in Saudi-Arabien. Jedes Investmentkonzept basiert auf fundierten Marktanalysen, realistischen Finanzmodellen und klaren operativen Strukturen.
              </p>
              <p>
                Mein Team und ich fungieren dabei nicht nur als Konzeptentwickler, sondern auch als strategischer Partner, der den Aufbau, die Implementierung und – je nach Modell – die operative Begleitung sicherstellt.
              </p>

              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 mt-8">
                <h4 className="text-emerald-500 text-sm uppercase tracking-wide mb-4">Vorteile für Investoren</h4>
                <div className="grid gap-4">
                  <div className="flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-neutral-800">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500"/>
                    <span className="text-sm">Ausgearbeitete Business- und Finanzpläne</span>
                  </div>
                  <div className="flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-neutral-800">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500"/>
                    <span className="text-sm">Transparente Kosten- und Ertragsmodelle</span>
                  </div>
                  <div className="flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-neutral-800">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500"/>
                    <span className="text-sm">Klar definierte Rollen und Beteiligungsstrukturen</span>
                  </div>
                  <div className="flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-neutral-800">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500"/>
                    <span className="text-sm">Professionelle Umsetzung & direkter Marktzugang</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Franchise */}
      <section id="franchise" className="py-24 border-t border-neutral-900 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="h-16 w-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-6">
                  <Store className="h-8 w-8 text-emerald-500" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Franchise in Saudi-Arabien</h2>
                <p className="text-emerald-500 font-medium mb-6">Expansion & Systemaufbau</p>
                <Button asChild className="w-full md:w-auto bg-white text-black hover:bg-neutral-200">
                  <Link href="#kontakt-form">Franchise-Optionen besprechen</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8 text-neutral-300 leading-relaxed">
              <p className="text-lg font-medium text-white">
                Mein Angebot für Franchise-Geber und Nehmer
              </p>
              <p>
                Ich unterstütze Unternehmer, Investoren und Unternehmen dabei, Franchise-Modelle erfolgreich in Saudi-Arabien umzusetzen. Mein Team und ich begleiten Sie von der strategischen Planung über rechtliche und regulatorische Anforderungen bis hin zur operativen Umsetzung und Expansion Ihres Franchise-Netzwerks.
              </p>
              <p>
                Saudi-Arabien ist ein dynamischer Markt mit stark wachsender Nachfrage nach etablierten, qualitativ hochwertigen Franchise-Konzepten. Ich sehe darin enorme Chancen – gleichzeitig erfordert der Eintritt in den Markt tiefgehendes Verständnis der lokalen Gesetze, Behördenstrukturen und kulturellen Besonderheiten.
              </p>
              <p>
                Genau hier setzen mein Team und ich an: Wir sorgen dafür, dass Ihr Franchise rechtssicher, effizient und nachhaltig etabliert wird.
              </p>
              <p className="text-white italic border-l-2 border-emerald-500 pl-4 my-6">
                "Ich stehe dafür, dass Franchise-Unternehmen nicht nur starten, sondern langfristig wachsen und im Markt bestehen."
              </p>

              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 mt-8">
                <h4 className="text-emerald-500 text-sm uppercase tracking-wide mb-4">Leistungen für Franchise-Partner</h4>
                <ul className="grid gap-3">
                  <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Analyse bestehender Konzepte für den SA-Markt</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Beratung zu Rechtsform, Lizenzen & Verträgen</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Standortwahl, Aufbau & Partnerauswahl</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Operative Prozesse & Qualitätsstandards</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Schulung von Franchisenehmern & Personal</li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0"/> Laufende Betreuung & Wachstums-Monitoring</li>
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
