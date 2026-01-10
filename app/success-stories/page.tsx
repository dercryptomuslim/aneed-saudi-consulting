import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Building2, 
  TrendingUp, 
  MapPin, 
  Landmark, 
  ArrowRight, 
  CheckCircle2, 
  Target 
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        description: "In der Einführungsphase lag der Fokus auf Klarheit, Struktur und realistischen Entscheidungen. Mein Team und ich haben das Projekt vollständig analysiert und auf Umsetzbarkeit geprüft – unter Berücksichtigung der vorgegebenen Location und der bestehenden Baufirma.",
        list: [
          "Entwicklung eines tragfähigen Gastronomiekonzepts",
          "Anpassung des Konzepts an Standort, Zielgruppe und Budget",
          "Aufbau der Corporate Identity (Markenauftritt, Positionierung)",
          "Erste Design- und Raumkonzepte",
          "Abstimmung mit Bauunternehmen und lokalen Partnern"
        ],
        goal: "Ziel dieser Phase war es, Fehlentscheidungen frühzeitig zu vermeiden und eine belastbare Grundlage für die Umsetzung zu schaffen."
      },
      {
        title: "2. Startphase – Umsetzung & Aufbau",
        description: "In der Startphase ging es in die operative Umsetzung. Hier wurde nicht geplant, sondern gebaut, organisiert und entschieden.",
        list: [
          "Detaildesign und finale Gestaltungsumsetzung",
          "Koordination und Überwachung der Bau- und Umbaumaßnahmen",
          "Steuerung der Construction-Phase vor Ort",
          "Auswahl, Beschaffung und Installation aller Geräte (u. a. Kaffeemaschine, Küchentechnik, Ausstattung)",
          "Aufbau der operativen Infrastruktur",
          "Rekrutierung und Einstellung der Mitarbeiter",
          "Vorbereitung der internen Abläufe und Prozesse"
        ],
        goal: "Diese Phase erforderte tägliche Abstimmung, klare Entscheidungen und permanentes Controlling – insbesondere, da Location und Baufirma vorgegeben waren."
      },
      {
        title: "3. Endphase – Übergabe & Betriebsbereitschaft",
        description: "In der Endphase lag der Fokus auf Qualität, Funktionalität und Betriebsfähigkeit. Ziel war es, kein „fertiges Objekt“, sondern ein startklar funktionierendes Geschäft zu übergeben.",
        list: [
          "Finalisierung aller Bau- und Designarbeiten",
          "Schulung und finale Einstellung des Personals",
          "Testläufe der Abläufe und technischen Systeme",
          "Qualitätskontrolle aller Gewerke",
          "Schlüsselübergabe an den Kunden"
        ],
        goal: "Das Projekt wurde innerhalb von 4 Monaten vollständig umgesetzt – von der ersten Konzeptidee bis zur betriebsbereiten Übergabe."
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
        description: "In der ersten Phase ging es nicht um Meinungen, sondern um Fakten. Mein Team und ich haben das gesamte Unternehmen operativ durchleuchtet.",
        list: [
          "Detaillierte Prozessanalysen in allen Filialen",
          "Wastage-Analyse (Wareneinsatz, Verluste, Fehlmengen)",
          "Personalanalyse (Einsatzpläne, Produktivität, Überbesetzung)",
          "Kostenanalyse (Fixkosten, variable Kosten, versteckte Kosten)",
          "Rezept- und Kalkulationsanalyse",
          "Strukturierte Interviews mit Mitarbeitern und Management"
        ],
        goal: "Ziel dieser Phase war es, die realen Gewinnfresser sichtbar zu machen – nicht nur Symptome, sondern Ursachen."
      },
      {
        title: "2. Umsetzungsphase – Struktur statt Aktionismus",
        description: "Auf Basis der Analyse entwickelten mein Team und ich konkrete, umsetzbare Konzepte, die direkt in den laufenden Betrieb integriert wurden.",
        list: [
          "Optimierung der operativen Prozesse",
          "Reduktion von Wareneinsatz und Wastage",
          "Anpassung von Rezepturen und Kalkulationen",
          "Effizientere Personalstrukturen und Einsatzpläne",
          "Klare Verantwortlichkeiten und Kontrollmechanismen"
        ],
        goal: "Wichtig: Die Maßnahmen wurden nicht theoretisch empfohlen, sondern operativ umgesetzt und begleitet."
      },
      {
        title: "3. Ergebnisphase – Messbarer finanzieller Effekt",
        description: "Das Ergebnis war eindeutig und messbar:",
        list: [
          "Der Kunde konnte jährliche Einsparungen im siebenstelligen Bereich realisieren – ohne Qualitätsverlust und ohne Umsatzrückgang."
        ],
        goal: "Dieses Projekt zeigt deutlich: Hoher Umsatz bedeutet nichts, wenn die Struktur nicht stimmt. Erst klare Prozesse, saubere Kalkulation und operative Kontrolle machen ein Unternehmen wirklich profitabel."
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
        description: "In der ersten Phase haben mein Team und ich eine vollständige Markt- und Standortanalyse durchgeführt. Ziel war es, nicht nur Chancen aufzuzeigen, sondern auch Risiken transparent zu machen.",
        list: [
          "Markt- und Wettbewerbsanalyse für Riyadh",
          "Zielgruppen- und Standortbewertung",
          "Analyse lokaler Rahmenbedingungen und Kostenstrukturen",
          "Operative Anforderungen für den neuen Standort",
          "Bewertung der Skalierbarkeit des bestehenden Geschäftsmodells"
        ],
        goal: "Diese Phase bildete die Grundlage für alle weiteren Entscheidungen."
      },
      {
        title: "2. Planungsphase – Strukturierte Entscheidungsgrundlage",
        description: "Auf Basis der Analyse erstellten mein Team und ich eine vollständige Feasibility Study mit allen relevanten Kapiteln.",
        list: [
          "Detaillierte Geschäfts- und Standortbeschreibung",
          "Operatives Konzept für den Standort in Riyadh",
          "Vollständiger Finanzplan (Investitions-, Kosten- und Ertragsstruktur)",
          "Break-even-Analyse und Szenarienrechnung",
          "Klare Handlungsempfehlungen für die Standortwahl in Riyadh"
        ],
        goal: "Der Fokus lag darauf, dem Kunden keine Versprechen, sondern klare Zahlen und realistische Szenarien zu liefern."
      },
      {
        title: "3. Ergebnisphase – Sicherheit für die Entscheidung",
        description: "Der Kunde verfügt nun über eine fundierte Entscheidungsgrundlage, auf der er seine Expansion nach Riyadh sachlich, nachvollziehbar und strategisch begründet planen kann.",
        list: [],
        goal: "Dieses Projekt zeigt: Erfolg in einer Stadt garantiert keinen Erfolg in einer anderen. Eine saubere Feasibility Study schafft Klarheit – bevor Kapital, Zeit und Energie investiert werden."
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
        description: "In der ersten Phase lag der Fokus auf realistischen Einnahmequellen und operativer Umsetzbarkeit.",
        list: [
          "Analyse bestehender und potenzieller Einnahmequellen",
          "Bewertung der Besucherzahlen und Eintrittsstrukturen",
          "Prüfung von Merchandising, Events, Sponsoring- und Kooperationsmöglichkeiten",
          "Benchmarking ähnlicher Einrichtungen"
        ],
        goal: "Ziel war es, alle realistischen Optionen transparent zu machen, um eine fundierte Grundlage für Entscheidungen zu schaffen."
      },
      {
        title: "2. Konzeptionsphase – Strategien entwickeln",
        description: "Auf Basis der Analyse entwickelten mein Team und ich konkrete Konzepte, die den Betrieb des Museums nachhaltig sichern können:",
        list: [
          "Entwicklung von Einnahmeplänen aus Eintrittsgeldern und Ticketmodellen",
          "Merchandising- und Shop-Konzepte",
          "Planung von Sonderausstellungen, Veranstaltungen und Kooperationen",
          "Empfehlung von Partnerschaften und Sponsorenmodellen"
        ],
        goal: "Die Konzepte wurden nicht nur theoretisch erstellt, sondern auf Umsetzbarkeit geprüft und teilweise direkt implementiert."
      },
      {
        title: "3. Ergebnisphase – Nachhaltige Grundlage",
        description: "Durch unsere Arbeit konnte das Museum nun teilweise neue Einkommensquellen nutzen und die Grundlage für einen langfristig tragfähigen Betrieb ohne staatliche Finanzierung legen.",
        list: [],
        goal: "Dieses Projekt zeigt: Selbst bei kulturellen und religiösen Institutionen zählt Struktur, Analyse und operatives Handeln. Nur so lassen sich Konzepte entwickeln, die tatsächlich funktionieren – und nicht nur auf dem Papier bestehen."
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
        {caseStudies.map((study) => (
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

                    {/* Phases Accordion */}
                    <div>
                      <h3 className="text-xl font-serif font-bold text-slate-900 mb-6">Projektverlauf</h3>
                      <Accordion type="single" collapsible className="w-full border border-slate-200 rounded-lg overflow-hidden bg-slate-50/50">
                        {study.phases.map((phase, i) => (
                          <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-200 last:border-0 px-4 bg-white">
                            <AccordionTrigger className="hover:no-underline py-5 text-left">
                              <span className="text-base font-bold text-slate-900">{phase.title}</span>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="pb-6 pt-2 space-y-4 text-slate-600 leading-relaxed">
                                <p>{phase.description}</p>
                                
                                {phase.list.length > 0 && (
                                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                    <p className="font-semibold text-slate-900 mb-2 text-sm">Unsere Aufgaben:</p>
                                    <ul className="space-y-2">
                                      {phase.list.map((item, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm">
                                          <span className="block w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                
                                {phase.goal && (
                                  <div className="pt-2 text-emerald-700 font-medium italic border-t border-slate-100 mt-4">
                                    {phase.goal}
                                  </div>
                                )}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
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
