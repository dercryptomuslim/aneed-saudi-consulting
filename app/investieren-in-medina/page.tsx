import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  Building2, 
  Users, 
  GraduationCap,
  Utensils,
  Plane,
  Gamepad2,
  CheckCircle2, 
  ArrowRight, 
  Shield,
  Clock,
  Wallet,
  FileCheck,
  Home,
  AlertTriangle,
  Target,
  Handshake
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Contact } from "@/components/contact";

export const metadata: Metadata = {
  title: "Investieren in Medina | Kapitalanlage Saudi-Arabien mit MISA-Lizenz",
  description: "Investieren und leben in Saudi-Arabien: Fertige Geschäftskonzepte für passive Investoren. Mudaraba-Modell, MISA-Lizenz, ROI 3-5 Jahre. Keine operative Verantwortung – wir übernehmen Aufbau und Führung.",
  alternates: {
    canonical: "/investieren-in-medina",
    languages: {
      "de": "/investieren-in-medina",
      "en": "/en/invest-in-medina",
    },
  },
  keywords: [
    "Investieren in Medina",
    "Kapitalanlage Saudi-Arabien", 
    "Investment Saudi-Arabien",
    "MISA Lizenz Investor",
    "Geschäftskonzepte Medina",
    "Leben in Saudi-Arabien",
    "Mudaraba Investment",
    "Passive Investition Saudi-Arabien",
    "Auswandern Medina Investor",
    "ROI Saudi-Arabien"
  ],
  openGraph: {
    title: "Investieren in Medina | Kapitalanlage Saudi-Arabien",
    description: "Fertige Geschäftskonzepte für Investoren: Mudaraba-Modell, MISA-Lizenz, ROI 3-5 Jahre. Leben & Investieren in Saudi-Arabien ohne operative Verantwortung.",
    url: "https://aneedashraf.de/investieren-in-medina",
    siteName: "Aneed Ashraf",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Investieren in Medina | Kapitalanlage Saudi-Arabien",
    description: "Fertige Geschäftskonzepte für passive Investoren. MISA-Lizenz, ROI 3-5 Jahre.",
  },
};

const focusAreas = [
  { name: "Food & Beverage", icon: Utensils, description: "Gastronomie & Cafés" },
  { name: "Tourismus & Hospitality", icon: Plane, description: "Hotels & Services" },
  { name: "Entertainment", icon: Gamepad2, description: "Freizeit & Events" },
  { name: "Child Education", icon: GraduationCap, description: "Bildung & Kinderbetreuung" },
];

const investorRequirements = [
  { text: "Freies Investitionskapital ab ca. 150.000 EUR", icon: Wallet },
  { text: "Nachweis, dass dieses Kapital tatsächlich verfügbar ist", icon: FileCheck },
  { text: "Bereitschaft, in den Aufbau eines Start-ups bzw. einer neuen Marke zu investieren", icon: Target },
  { text: "Langfristiges Denken und Verständnis für reale Marktbedingungen", icon: Clock },
];

const misaRequirements = [
  "Ein bestehendes Unternehmen außerhalb Saudi-Arabiens (z.B. Deutschland oder EU)",
  "Das Unternehmen ist seit mindestens 12 Monaten aktiv",
  "Ein offizieller Handelsregistereintrag liegt vor",
  "Ein nachweisbarer Bilanzwert zwischen ca. 50.000–100.000 EUR ist vorhanden",
];

const livingCosts = [
  { label: "Aufenthaltsgebühren", value: "ca. 2.500 EUR / Jahr" },
  { label: "Pro Person (monatlich)", value: "ca. 100 EUR / Monat" },
  { label: "Familie (5 Personen)", value: "ca. 3.000–4.000 EUR / Monat" },
];

export default function InvestorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col scroll-smooth">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300 shadow-sm mb-8 font-medium backdrop-blur-sm">
              <TrendingUp className="inline-block h-4 w-4 mr-2 -mt-0.5" />
              Investment & Leben in Saudi-Arabien
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Investor werden in Medina
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
              Strukturierte Investments ohne eigenes Konzept
            </p>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              Du möchtest in Saudi-Arabien investieren und dort leben, hast aber keine eigene Geschäftsidee, kein fertiges Konzept oder keine Lust auf operative Arbeit?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 rounded-full bg-emerald-600 px-8 text-lg font-medium text-white hover:bg-emerald-500 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                <Link href="/anfrage">
                  Jetzt Anfrage stellen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 rounded-full px-8 text-lg font-medium border-slate-600 text-white hover:bg-white/10 backdrop-blur-sm">
                <Link href="#konzepte">
                  Konzepte entdecken
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
                Genau dafür bieten wir <span className="font-semibold text-emerald-700">strukturierte, investitionsbereite Geschäftskonzepte</span>, die bereits marktgeprüft, wirtschaftlich kalkuliert und operativ vorbereitet sind.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-slate-600">
                <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600" /> Keine Theorie</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600" /> Keine generischen Konzepte</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600" /> Reale Marktdaten</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wir übernehmen den gesamten Aufbau */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300 shadow-sm mb-6 font-medium">
                Full-Service Umsetzung
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Wir übernehmen den gesamten Aufbau für dich
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-4">
                Viele wollen in Medina investieren. Die wenigsten wissen, was es wirklich bedeutet, ein Projekt von null auf betriebsbereit aufzubauen.
              </p>
              <p className="text-slate-400">
                Ein Business entsteht nicht durch Kapital allein – es entsteht durch Struktur, Planung, Umsetzung und operative Führung.
              </p>
            </div>

            {/* Was wir übernehmen - Grid */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-12">
              <p className="text-center text-slate-300 mb-6">Wenn du in Medina investierst, übernimmst du <strong className="text-white">nicht selbst</strong>:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white/5 rounded-xl p-4">
                  <Building2 className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-sm text-slate-300">Baukoordination</span>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <FileCheck className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-sm text-slate-300">Architektenabstimmung</span>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <Home className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-sm text-slate-300">Interior Design</span>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <Handshake className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-sm text-slate-300">Lieferantensuche</span>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <Users className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-sm text-slate-300">Personalrekrutierung</span>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <Target className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-sm text-slate-300">Operative Führung</span>
                </div>
              </div>
            </div>

            {/* 5 Phasen Akkordeon */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-2 text-center">Von der Idee bis zum laufenden Betrieb – alles aus einer Hand</h3>
              <p className="text-emerald-400 font-semibold text-center mb-6">Wir übernehmen alles.</p>
              
              <Accordion type="single" collapsible className="w-full space-y-3">
                <AccordionItem value="phase-1" className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
                  <AccordionTrigger className="hover:no-underline px-6 py-5 text-left">
                    <div className="flex items-center gap-4">
                      <span className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">1</span>
                      <span className="text-base font-bold text-white">Standortanalyse & Konzeptentwicklung</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-6 pb-6 text-slate-300">
                      <p className="mb-4">Bevor gebaut wird, wird analysiert. Wir prüfen:</p>
                      <div className="grid md:grid-cols-2 gap-2">
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Standort</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Zielgruppe</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Mietstruktur</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Wettbewerbssituation</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Preisniveau</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Nachfragepotenzial</div>
                      </div>
                      <p className="mt-4 text-sm text-slate-400">Auf dieser Basis entwickeln wir ein tragfähiges Konzept – kein Trendmodell, sondern ein wirtschaftlich kalkuliertes Geschäftsmodell.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="phase-2" className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
                  <AccordionTrigger className="hover:no-underline px-6 py-5 text-left">
                    <div className="flex items-center gap-4">
                      <span className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">2</span>
                      <span className="text-base font-bold text-white">Bauphase & Design – professionelle Umsetzung</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-6 pb-6 text-slate-300">
                      <p className="mb-4">Ein großes Risiko für Investoren liegt im Bauprozess. Verzögerungen, Budgetüberschreitungen, falsche Materialentscheidungen – das kostet Zeit und Geld. Wir übernehmen:</p>
                      <div className="grid md:grid-cols-2 gap-2">
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Auswahl & Koordination der Baufirma</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Abstimmung mit Behörden</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Design- & Innenraumkonzept</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Budgetkontrolle</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Zeitplanung</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Qualitätssicherung</div>
                      </div>
                      <p className="mt-4 text-sm text-slate-400">Du musst nicht vor Ort sein. Du brauchst keinen Bauleiter. Du bekommst Transparenz und Reporting.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="phase-3" className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
                  <AccordionTrigger className="hover:no-underline px-6 py-5 text-left">
                    <div className="flex items-center gap-4">
                      <span className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">3</span>
                      <span className="text-base font-bold text-white">Lizenzierung & rechtliche Struktur</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-6 pb-6 text-slate-300">
                      <p className="mb-4">Parallel zur Bauphase kümmern wir uns um:</p>
                      <div className="grid md:grid-cols-2 gap-2">
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> MISA-Lizenz</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Commercial Registration</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Steuerliche Registrierung</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Behördenprozesse</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Vertragsstrukturen</div>
                      </div>
                      <p className="mt-4 text-sm text-slate-400">Das Projekt läuft rechtlich sauber – von Anfang an.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="phase-4" className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
                  <AccordionTrigger className="hover:no-underline px-6 py-5 text-left">
                    <div className="flex items-center gap-4">
                      <span className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">4</span>
                      <span className="text-base font-bold text-white">Personalrekrutierung & Teamaufbau</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-6 pb-6 text-slate-300">
                      <p className="mb-4">Ein Business steht und fällt mit dem Team. Wir übernehmen:</p>
                      <div className="grid md:grid-cols-2 gap-2">
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Recruiting</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Vertragsgestaltung</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Schulung</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Operative Prozesse</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Führungsstruktur</div>
                      </div>
                      <p className="mt-4 text-sm text-slate-400">Du bekommst kein improvisiertes Team, sondern ein strukturiertes Setup.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="phase-5" className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
                  <AccordionTrigger className="hover:no-underline px-6 py-5 text-left">
                    <div className="flex items-center gap-4">
                      <span className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">5</span>
                      <span className="text-base font-bold text-white">Operative Führung – wir betreiben das Projekt</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-6 pb-6 text-slate-300">
                      <p className="mb-4">Viele Investoren unterschätzen den operativen Alltag. Ein Projekt ist nicht nach der Eröffnung fertig – es beginnt dort erst. Wir übernehmen auf Wunsch:</p>
                      <div className="grid md:grid-cols-2 gap-2">
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Operative Geschäftsführung</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Kostenkontrolle</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Reporting</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Prozessoptimierung</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Strategische Weiterentwicklung</div>
                      </div>
                      <p className="mt-4 text-sm text-slate-400">Du bist Investor. Wir sind operativer Partner.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 text-center">
              <p className="text-emerald-300 font-medium">
                Unser Ansatz ist nicht theoretisch. Wir entwickeln keine PowerPoint-Konzepte, sondern <strong className="text-white">reale, umsetzbare Projekte</strong> mit klarer wirtschaftlicher Grundlage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investitionsbereite Geschäftskonzepte */}
      <section id="konzepte" className="py-16 md:py-24 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-emerald-700 shadow-sm mb-6 font-medium">
              Investitionsbereite Geschäftskonzepte
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              In funktionierende Strukturen investieren
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Unsere Konzepte richten sich an Investoren, die in funktionierende Strukturen investieren möchten – nicht in Ideen auf dem Papier. Jedes Konzept ist als zukünftige Marke aufgebaut.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {focusAreas.map((area) => (
              <Card key={area.name} className="group border-slate-200 bg-white hover:border-emerald-500 hover:shadow-lg transition-all duration-300 cursor-default">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
                    <area.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{area.name}</h3>
                  <p className="text-sm text-slate-500">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 md:p-8 text-center max-w-3xl mx-auto">
            <p className="text-lg text-emerald-900 font-medium">
              Die Konzepte sind so strukturiert, dass du <span className="font-bold">Investor bist, nicht Betreiber</span>.
            </p>
          </div>

        </div>
      </section>

      {/* Wirtschaftlichkeit & Zeithorizont */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-emerald-700 shadow-sm mb-6 font-medium">
                <Clock className="inline-block h-4 w-4 mr-2 -mt-0.5" />
                Wirtschaftlichkeit
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                ROI von 3–5 Jahren
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Die meisten Konzepte sind auf einen realistischen Return on Investment (ROI) von ca. 3–5 Jahren ausgelegt.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Der Fokus liegt nicht auf kurzfristigen Gewinnen, sondern auf <span className="font-semibold text-slate-900">nachhaltigen, marktfähigen Geschäftsmodellen</span>, die langfristig Bestand haben und weiterentwickelt werden können.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-emerald-900 rounded-2xl p-8 md:p-10 text-white shadow-xl">
                <div className="text-6xl md:text-7xl font-bold mb-2">3–5</div>
                <div className="text-2xl font-light text-slate-300 mb-6">Jahre bis ROI</div>
                <div className="space-y-4 text-slate-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span>Nachhaltige Geschäftsmodelle</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span>Langfristiger Bestand</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span>Skalierungspotenzial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voraussetzungen für Investoren */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-emerald-700 shadow-sm mb-6 font-medium">
              Voraussetzungen
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Voraussetzungen für Investoren
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Für eine Beteiligung gelten klare Mindestvoraussetzungen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {investorRequirements.map((req, i) => (
              <Card key={i} className="border-slate-200 bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <req.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <p className="text-slate-700 leading-relaxed pt-2">{req.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 max-w-4xl mx-auto flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-900">
              <span className="font-semibold">Wichtig:</span> Der Kapitalnachweis ist notwendig, um die Seriosität, Umsetzbarkeit und rechtliche Tragfähigkeit des Projekts sicherzustellen.
            </p>
          </div>
        </div>
      </section>

      {/* MISA-Lizenz Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: MISA Info */}
            <div>
              <div className="inline-block rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-emerald-700 shadow-sm mb-6 font-medium">
                <Shield className="inline-block h-4 w-4 mr-2 -mt-0.5" />
                Rechtlicher Rahmen
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                MISA-Lizenz – Zwingende Voraussetzung
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Für jedes Investment wird eine eigene MISA-Lizenz beantragt. Diese Lizenz bildet die rechtliche Grundlage für die jeweilige Geschäftsidee und ist zwingend erforderlich, um ein Unternehmen in Saudi-Arabien rechtskonform zu betreiben.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <p className="text-red-900 font-medium">
                  <AlertTriangle className="inline-block h-5 w-5 mr-2 -mt-0.5" />
                  Ohne MISA-Lizenz besteht keine rechtliche Sicherheit – weder für das Investment, noch für den operativen Betrieb oder den Aufenthalt im Land.
                </p>
              </div>
            </div>

            {/* Right: MISA Requirements */}
            <div>
              <Card className="border-slate-200 bg-slate-50 h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Voraussetzungen für die MISA-Lizenz</h3>
                  <ul className="space-y-4">
                    {misaRequirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <p className="text-sm text-slate-500 italic">
                      Diese Anforderungen sind keine Empfehlung, sondern Teil der regulatorischen Vorgaben für eine rechtlich belastbare Unternehmensstruktur.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Beteiligungsstruktur & Rollenverteilung */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300 shadow-sm mb-6 font-medium">
                <Handshake className="inline-block h-4 w-4 mr-2 -mt-0.5" />
                Partnerschaft
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Beteiligungsstruktur & Rollenverteilung
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Die angebotenen Projekte sind eigene, von uns entwickelte Geschäftskonzepte. 
                Wir treten als operative Partei auf und übernehmen die vollständige Umsetzung, Steuerung und operative Verantwortung.
              </p>
            </div>

            {/* Mudaraba Konzept */}
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 mb-12 text-center">
              <p className="text-lg text-emerald-200 leading-relaxed">
                <span className="font-semibold">Strukturell entspricht das Modell dem Prinzip eines Mudaraba-Vertrags:</span><br />
                Eine Partei stellt das Kapital, die andere Partei führt und operiert das Geschäft.
              </p>
            </div>

            {/* Zwei Rollen nebeneinander */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Rolle des Investors */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
                    <Wallet className="h-7 w-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6">Rolle des Investors</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Kapitalbeteiligung am Unternehmen</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Keine operative Verantwortung</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Keine Einbindung in das Tagesgeschäft</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Beteiligung an einem Brand / Startup, nicht an einem einzelnen Geschäft</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-sm text-slate-400 italic">
                      Die Beteiligung erfolgt stets auf Unternehmensebene und ist langfristig ausgerichtet.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Rolle der operativen Partei */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
                    <Users className="h-7 w-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6">Unsere Rolle (operative Partei)</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Entwicklung und Eigentum des Konzepts</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Aufbau und Führung des Unternehmens</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Operative Umsetzung, Management und Skalierung</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Strategische Steuerung und Markenentwicklung</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-sm text-slate-400 italic">
                      Wir tragen die operative Verantwortung und stellen sicher, dass das Unternehmen unter realen Marktbedingungen geführt wird.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Beteiligungshöhe */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="md:col-span-1 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                <div className="text-5xl font-bold text-white mb-2">bis 30%</div>
                <div className="text-emerald-100 font-medium">Maximale Beteiligung</div>
                <p className="text-emerald-200/80 text-sm mt-4">
                  Abhängig von der Investitionssumme
                </p>
              </div>
              <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-4">Warum diese Struktur?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Klare Verantwortlichkeiten sicherstellen</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Operative Handlungsfähigkeit bewahren</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Die Marke langfristig konsistent aufbauen</span>
                  </li>
                </ul>
                <p className="text-sm text-slate-400 mt-6 italic">
                  Mehrheit und operative Kontrolle verbleiben bei uns.
                </p>
              </div>
            </div>

            {/* Wichtiges Verständnis */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-8">
              <h3 className="text-lg font-bold text-amber-300 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Wichtiges Verständnis
              </h3>
              <p className="text-slate-200 leading-relaxed mb-6">
                Der Investor investiert <span className="font-semibold text-white">nicht in ein einzelnes Geschäft</span>, 
                sondern in den <span className="font-semibold text-white">Aufbau und die Entwicklung einer Marke mit Skalierungspotenzial</span>.
              </p>
              <div className="pt-6 border-t border-amber-500/20">
                <p className="text-sm text-slate-300 mb-3">Dieses Modell richtet sich an Investoren, die:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>Unternehmerisch beteiligt sein möchten</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>Verantwortung klar getrennt wissen wollen</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>Langfristig denken und nicht kurzfristige Mitbestimmung suchen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leben in Saudi-Arabien */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-emerald-700 shadow-sm mb-6 font-medium">
                <Home className="inline-block h-4 w-4 mr-2 -mt-0.5" />
                Aufenthalt & Leben
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                Leben in Saudi-Arabien über das Investment
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Ein Investment kann gleichzeitig die Grundlage für ein legales Leben in Saudi-Arabien schaffen.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 md:p-10 mb-12">
              <p className="text-lg text-emerald-900 leading-relaxed text-center">
                Als Investor ist es möglich, <span className="font-bold">über das Unternehmen angestellt zu werden</span> und dadurch eine Aufenthalts- und Arbeitsberechtigung zu erhalten.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {livingCosts.map((cost) => (
                <Card key={cost.label} className="border-slate-200 bg-slate-50 text-center">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-slate-900 mb-2">{cost.value}</div>
                    <div className="text-slate-600">{cost.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 text-center">
              <p className="text-slate-700">
                <span className="font-semibold">Realistische Einschätzung:</span> Für eine fünfköpfige Familie sollte realistisch mit ca. 3.000–4.000 EUR pro Monat gerechnet werden, um in Saudi-Arabien – insbesondere in Medina – stabil und ohne Einschränkungen leben zu können.
              </p>
              <p className="text-sm text-slate-500 mt-4 italic">
                Diese Einschätzung basiert auf realen Erfahrungswerten und nicht auf theoretischen Annahmen.
              </p>
            </div>

            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6 flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-amber-900">
                Ein Leben in Saudi-Arabien ist möglich, <span className="font-semibold">solange das Unternehmen aktiv besteht und betrieben wird</span>.
              </p>
            </div>

            {/* CTA 2 */}
            <div className="mt-12 bg-slate-900 rounded-2xl p-8 md:p-10 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Passt dieses Modell zu dir?</h3>
              <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                Lass uns in einem persönlichen Gespräch klären, ob ein Investment in Saudi-Arabien zu deinen Zielen passt.
              </p>
              <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-500 shadow-md h-12 px-8 text-base rounded-full">
                <Link href="/anfrage">
                  Beratungsgespräch anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Unser Anspruch */}
      <section className="py-10 md:py-14 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-emerald-700 shadow-sm mb-6 font-medium">
              Unser Anspruch
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
              Keine Träume. Keine Abkürzungen.
            </h2>
            
            <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm mb-8">
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                Wir verkaufen keine Träume, keine Abkürzungen und keine theoretischen Modelle.
              </p>
              <p className="text-xl text-slate-700 leading-relaxed font-semibold">
                Wir schaffen klare, rechtssichere und realistische Investmentstrukturen.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6">
              <p className="text-emerald-900 text-lg">
                Nicht jedes Investment passt zu jedem Menschen. Unser Ziel ist es, <span className="font-bold">vor der Entscheidung Klarheit zu schaffen</span> – damit keine falschen Entscheidungen getroffen werden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                Häufige Fragen
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full border border-slate-200 rounded-xl overflow-hidden">
              <AccordionItem value="item-1" className="border-b border-slate-200 px-6 bg-white">
                <AccordionTrigger className="hover:no-underline py-5 text-left">
                  <span className="text-base font-bold text-slate-900">Brauche ich eigene Geschäftsideen?</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pb-6 text-slate-600 leading-relaxed">
                    Nein. Wir bieten fertige, marktgeprüfte Geschäftskonzepte an. Du investierst in ein bereits ausgearbeitetes Konzept und musst keine eigene Idee mitbringen.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-slate-200 px-6 bg-white">
                <AccordionTrigger className="hover:no-underline py-5 text-left">
                  <span className="text-base font-bold text-slate-900">Muss ich operativ tätig sein?</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pb-6 text-slate-600 leading-relaxed">
                    Nein. Die Konzepte sind so strukturiert, dass du Investor bist – nicht Betreiber. Das operative Management wird separat organisiert.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-slate-200 px-6 bg-white">
                <AccordionTrigger className="hover:no-underline py-5 text-left">
                  <span className="text-base font-bold text-slate-900">Kann ich mit meiner Familie nach Saudi-Arabien ziehen?</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pb-6 text-slate-600 leading-relaxed">
                    Ja. Als Investor kannst du über das Unternehmen angestellt werden und erhältst dadurch eine Aufenthalts- und Arbeitsberechtigung, die auch deine Familie einschließen kann.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="px-6 bg-white">
                <AccordionTrigger className="hover:no-underline py-5 text-left">
                  <span className="text-base font-bold text-slate-900">Wie hoch ist das Mindestinvestment?</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pb-6 text-slate-600 leading-relaxed">
                    Das freie Investitionskapital sollte ab ca. 150.000 EUR verfügbar sein. Zusätzlich fallen Gründungskosten von ca. 10.000 EUR für die MISA-Lizenz an.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
