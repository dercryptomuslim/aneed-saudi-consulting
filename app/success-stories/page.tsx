import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  TrendingUp, 
  MapPin, 
  Landmark, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Users, 
  Clock, 
  Target 
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Erfolgsgeschichten | Aneed Ashraf - Consulting Saudi-Arabien",
  description: "Reale Case Studies aus Saudi-Arabien: Gastronomie, Expansion, Restrukturierung und kulturelle Projekte.",
};

const caseStudies = [
  {
    id: "gastronomie-projekt",
    title: "Gastronomieprojekt in Saudi-Arabien",
    category: "Operative Umsetzung",
    icon: Building2,
    summary: "Vollständige operative Umsetzung eines Gastronomie-Konzepts mit festem Budget und vorgegebener Location.",
    stats: ["150k-200k € Budget", "4 Monate Bauzeit", "Schlüsselfertige Übergabe"],
    challenge: "Der Kunde trat mit einem klar definierten Budget von ca. 150.000–200.000 Euro an uns heran. Location und Baufirma waren bereits festgelegt. Unser Auftrag bestand nicht in der Theorie, sondern in der vollständigen operativen Umsetzung unter realen Bedingungen.",
    phases: [
      {
        title: "1. Einführungsphase – Analyse & Fundament",
        description: "Analyse und Prüfung auf Umsetzbarkeit. Entwicklung eines tragfähigen Gastronomiekonzepts, Corporate Identity, Design- und Raumkonzepte sowie Abstimmung mit Bauunternehmen.",
      },
      {
        title: "2. Startphase – Umsetzung & Aufbau",
        description: "Operative Umsetzung vor Ort: Detaildesign, Koordination der Bauphase, Beschaffung aller Geräte, Rekrutierung des Teams und Aufbau der internen Prozesse.",
      },
      {
        title: "3. Endphase – Übergabe & Betriebsbereitschaft",
        description: "Finalisierung, Personalschulung, Testläufe und Qualitätskontrolle. Das Projekt wurde innerhalb von 4 Monaten von der Idee bis zur betriebsbereiten Übergabe realisiert.",
      }
    ],
    result: "Keine Experimente, keine Theorie – sondern strukturierte, reale Umsetzung unter echten Marktbedingungen.",
  },
  {
    id: "gewinnoptimierung-medina",
    title: "Gewinnoptimierung Gastronomie (Medina)",
    category: "Restrukturierung",
    icon: TrendingUp,
    summary: "Turnaround-Management für eine Kette mit 3 Filialen: Umsatz vorhanden, Profitabilität gesteigert.",
    stats: ["3 Filialen", "7-stellige Einsparung", "Kein Qualitätsverlust"],
    challenge: "Trotz mittlerem sechsstelligen Jahresumsatz war der Gewinn nicht zufriedenstellend. Der Auftrag war klar: Ursachen identifizieren, Strukturen korrigieren und messbare Ergebnisse liefern.",
    phases: [
      {
        title: "1. Analysephase – Transparenz statt Vermutungen",
        description: "Detaillierte Prozess-, Wastage- und Personalanalyse. Identifikation der 'Gewinnfresser' und versteckten Kosten durch strukturierte Audits.",
      },
      {
        title: "2. Umsetzungsphase – Struktur statt Aktionismus",
        description: "Optimierung operativer Prozesse, Reduktion von Wareneinsatz, Anpassung von Rezepturen, effizientere Personalstrukturen und Implementierung von Kontrollmechanismen.",
      },
      {
        title: "3. Ergebnisphase – Messbarer finanzieller Effekt",
        description: "Jährliche Einsparungen im siebenstelligen Bereich ohne Qualitätsverlust. Beweis dafür, dass erst klare Prozesse und saubere Kalkulation ein Unternehmen profitabel machen.",
      }
    ],
    result: "Hoher Umsatz bedeutet nichts, wenn die Struktur nicht stimmt. Wir haben Profitabilität durch operative Exzellenz geschaffen.",
  },
  {
    id: "expansion-riyadh",
    title: "Expansion Yanbu nach Riyadh",
    category: "Expansion Strategy",
    icon: MapPin,
    summary: "Feasibility Study für die Expansion eines erfolgreichen Unternehmens in die Hauptstadt.",
    stats: ["Marktanalyse Riyadh", "Feasibility Study", "Risiko-Minimierung"],
    challenge: "Ein in Yanbu erfolgreicher Kunde plante die Expansion nach Riyadh. Um Risiken zu minimieren, wurde eine umfassende Feasibility Study beauftragt, statt 'aus dem Bauch heraus' zu entscheiden.",
    phases: [
      {
        title: "1. Analyse- & Researchphase – Fakten statt Annahmen",
        description: "Vollständige Markt-, Wettbewerbs- und Standortanalyse für Riyadh. Bewertung lokaler Kostenstrukturen und Skalierbarkeit des Geschäftsmodells.",
      },
      {
        title: "2. Planungsphase – Strukturierte Entscheidungsgrundlage",
        description: "Erstellung einer detaillierten Feasibility Study inklusive operativem Konzept, Finanzplan (Investition, Kosten, Ertrag), Break-even-Analyse und Szenarienrechnung.",
      },
      {
        title: "3. Ergebnisphase – Sicherheit für die Entscheidung",
        description: "Der Kunde erhielt eine fundierte Grundlage für seine strategische Planung. Erfolg an einem Standort garantiert keinen Erfolg an einem anderen – Analyse schafft Sicherheit.",
      }
    ],
    result: "Eine saubere Feasibility Study schafft Klarheit – bevor Kapital, Zeit und Energie investiert werden.",
  },
  {
    id: "museum-prophet-moschee",
    title: "Museumserweiterung Prophet-Moschee",
    category: "Kultur & Strategie",
    icon: Landmark,
    summary: "Entwicklung nachhaltiger Einnahmemodelle für den dauerhaften Betrieb ohne staatliche Finanzierung.",
    stats: ["Nachhaltige Modelle", "Kulturelles Projekt", "Einnahmensteigerung"],
    challenge: "Das Museum plante eine Erweiterung und benötigte tragfähige Einkommensmodelle, um die wirtschaftliche Nachhaltigkeit unabhängig von staatlicher Finanzierung zu sichern.",
    phases: [
      {
        title: "1. Analysephase – Einnahmenpotenziale identifizieren",
        description: "Prüfung von Eintrittsstrukturen, Merchandising, Events und Sponsoring-Optionen. Benchmarking mit ähnlichen internationalen Einrichtungen.",
      },
      {
        title: "2. Konzeptionsphase – Strategien entwickeln",
        description: "Entwicklung konkreter Einnahmepläne, Shop-Konzepte, Veranstaltungsformate und Partnerschaftsmodelle. Direkte Prüfung auf Umsetzbarkeit.",
      },
      {
        title: "3. Ergebnisphase – Nachhaltige Grundlage",
        description: "Implementierung neuer Einkommensquellen für einen langfristig tragfähigen Betrieb. Beweis, dass auch kulturelle Institutionen operatives Management benötigen.",
      }
    ],
    result: "Selbst bei kulturellen Institutionen zählt Struktur. Nur so lassen sich Konzepte entwickeln, die tatsächlich funktionieren.",
  }
];

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col scroll-smooth">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-emerald-700 shadow-sm mb-6 font-medium">
            Case Studies
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            Erfolgsgeschichten
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Theorie ist gut, Praxis ist besser. Hier sehen Sie, wie wir Herausforderungen in Saudi-Arabien real gelöst haben.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <div className="container mx-auto px-4 lg:px-8 py-16 space-y-24">
        {caseStudies.map((study, index) => (
          <section key={study.id} id={study.id} className="scroll-mt-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Header & Stats */}
              <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
                <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold uppercase tracking-wider text-xs">
                  <study.icon className="h-4 w-4" />
                  {study.category}
                </div>
                
                <h2 className="text-3xl font-serif font-bold text-slate-900 leading-tight">
                  {study.title}
                </h2>
                
                <p className="text-slate-600 text-lg leading-relaxed">
                  {study.summary}
                </p>

                <div className="pt-6 border-t border-slate-100 space-y-3">
                  {study.stats.map((stat) => (
                    <div key={stat} className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>{stat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                   <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white shadow-md">
                    <Link href="/check">Ähnliches Projekt anfragen</Link>
                  </Button>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:col-span-8">
                <Card className="border border-slate-200 shadow-sm bg-white overflow-hidden">
                  <div className="p-8 md:p-10 space-y-10">
                    
                    {/* Challenge Section */}
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                      <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-3">
                        <Target className="h-5 w-5 text-emerald-600" />
                        Ausgangslage & Herausforderung
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Phases Timeline */}
                    <div className="space-y-8 relative">
                      <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-slate-100" />
                      
                      {study.phases.map((phase, i) => (
                        <div key={i} className="relative flex gap-6">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center z-10 shadow-sm">
                            <span className="text-xs font-bold text-emerald-700">{i + 1}</span>
                          </div>
                          <div className="space-y-2 pt-1">
                            <h4 className="text-lg font-bold text-slate-900">{phase.title}</h4>
                            <p className="text-slate-600 leading-relaxed">
                              {phase.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Result / Fazit */}
                    <div className="bg-emerald-50/50 rounded-xl p-6 border border-emerald-100/50">
                      <h3 className="text-lg font-bold text-emerald-900 mb-2">Fazit</h3>
                      <p className="text-emerald-800/80 font-medium italic leading-relaxed">
                        "{study.result}"
                      </p>
                    </div>

                  </div>
                </Card>
              </div>

            </div>
          </section>
        ))}
      </div>

      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
            Schreiben wir Ihre Erfolgsgeschichte?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Jedes Projekt ist einzigartig. Lassen Sie uns herausfinden, wie wir Ihre Vision in Saudi-Arabien realisieren können.
          </p>
          <Button asChild size="lg" className="h-14 rounded-full bg-slate-900 px-8 text-lg font-medium text-white hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300">
            <Link href="/check">
              Jetzt Beratung starten
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

