import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB | Oasis Gate LLC - Beratung Saudi-Arabien",
  description: "Allgemeine Geschäftsbedingungen (AGB) von Oasis Gate LLC für Beratungsleistungen zur Unternehmensgründung in Saudi-Arabien.",
  alternates: {
    canonical: "/agb",
  },
  openGraph: {
    title: "AGB | Oasis Gate LLC",
    description: "Allgemeine Geschäftsbedingungen (AGB) von Oasis Gate LLC für Beratungsleistungen zur Unternehmensgründung in Saudi-Arabien.",
    url: "https://www.aneedashraf.de/agb",
    siteName: "Aneed Ashraf",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary",
  title: "AGB | Oasis Gate LLC",
    description: "Allgemeine Geschäftsbedingungen (AGB) von Oasis Gate LLC für Beratungsleistungen.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AgbPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col scroll-smooth">
      <Navbar />

      <section className="relative pt-32 pb-16 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Allgemeine Geschäftsbedingungen
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="prose prose-slate lg:prose-lg mx-auto">

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Geltungsbereich</h2>
            <p className="text-slate-600 mb-4">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen{" "}
              <strong>Oasis Gate LLC</strong>, Medina, Saudi-Arabien (nachfolgend „Anbieter") und den
              Kunden (nachfolgend „Kunde"), die über die Website <strong>aneedashraf.de</strong>{" "}
              sowie über das Buchungstool <strong>TidyCal</strong> abgeschlossen werden.
            </p>
            <p className="text-slate-600 mb-4">Sie gelten insbesondere für:</p>
            <ul className="list-disc pl-5 mb-4 text-slate-600 space-y-2">
              <li>Beratungsleistungen</li>
              <li>Online-Beratungsgespräche</li>
              <li>
                Strategische Erst- und Fachgespräche zur Unternehmensgründung und Geschäftstätigkeit
                in Saudi-Arabien
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Leistungsgegenstand</h2>
            <p className="text-slate-600 mb-4">
              Oasis Gate LLC erbringt <strong>unternehmerische und strategische Beratungsleistungen</strong>{" "}
              im Bereich:
            </p>
            <ul className="list-disc pl-5 mb-4 text-slate-600 space-y-2">
              <li>Unternehmensgründung in Saudi-Arabien</li>
              <li>Markteintritt und Expansion</li>
              <li>Strukturierung, Strategie und Machbarkeitsbewertung</li>
            </ul>
            <p className="text-slate-600 mb-4">
              Die Beratung erfolgt <strong>ausschließlich als Dienstleistung</strong>, nicht als
              Erfolgs- oder Werkvertrag. Ein konkreter wirtschaftlicher oder rechtlicher Erfolg wird{" "}
              <strong>nicht geschuldet</strong>. Die Beratung erfolgt nach bestem Wissen und Gewissen,
              jedoch <strong>unterliegt der Kunde selbst der Verantwortung für Entscheidungen und Handlungen</strong>.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Terminbuchung & Vergütung</h2>
            <ol className="list-decimal pl-5 mb-4 text-slate-600 space-y-2">
              <li>
                Beratungstermine werden ausschließlich online über das Buchungstool{" "}
                <a
                  href="https://tidycal.com/medinabusiness/60-minute-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:underline"
                >
                  https://tidycal.com/medinabusiness/60-minute-meeting
                </a>{" "}
                gebucht.
              </li>
              <li>
                Der Preis für ein Beratungsgespräch beträgt: <strong>249 Euro brutto pro 60 Minuten</strong>.
              </li>
              <li>Die Zahlung ist <strong>im Voraus</strong> fällig und Voraussetzung für die Durchführung des Termins.</li>
              <li>
                Das Beratungsgespräch findet <strong>online via Google Meet</strong> statt. Der entsprechende
                Zugangslink wird rechtzeitig zur Verfügung gestellt.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Wichtige Voraussetzungen für Beratungsgespräche zur Unternehmensgründung in Saudi-Arabien</h2>
            <ol className="list-decimal pl-5 mb-4 text-slate-600 space-y-2">
              <li>
                Das Beratungsformat richtet sich ausschließlich an Personen, die sich{" "}
                <strong>realistisch und rechtskonform</strong> mit einer Unternehmensgründung oder Investition
                in Saudi-Arabien befassen.
              </li>
              <li>
                Für eine reguläre Unternehmensgründung gelten u. a. folgende Voraussetzungen:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Bestehendes Unternehmen <strong>außerhalb Saudi-Arabiens</strong></li>
                  <li>Mindestbestehensdauer: <strong>12 Monate</strong></li>
                  <li>Eintrag im Handelsregister</li>
                  <li>
                    Nachweisbarer Bilanzwert von ca. <strong>75.000–100.000 Euro oder mehr</strong>
                  </li>
                </ul>
              </li>
              <li>
                Eine Unternehmensgründung in Saudi-Arabien ist <strong>kapitalintensiv</strong>. Beispielhaft:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Gastronomiebetriebe erfordern regelmäßig ein Investitionsvolumen von{" "}
                    <strong>ca. 120.000–250.000 Euro</strong>, abhängig von Konzept, Standort und Lizenz.
                  </li>
                </ul>
              </li>
              <li>
                Das Beratungsgespräch dient <strong>nicht</strong> der Suche nach Umgehungslösungen, Kapitalersatz
                oder unrealistischen Modellen.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">5. Eigenverantwortung & Ausschluss der Rückerstattung</h2>
            <ol className="list-decimal pl-5 mb-4 text-slate-600 space-y-2">
              <li>
                Bucht der Kunde einen Termin, obwohl die genannten Voraussetzungen nicht erfüllt sind, erfolgt
                dies <strong>auf eigene Verantwortung</strong>.
              </li>
              <li>
                <strong>Eine Rückerstattung der Beratungsgebühr ist ausgeschlossen</strong>, unabhängig davon, ob:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>der Kunde alle Voraussetzungen erfüllt</li>
                  <li>der Kunde mit dem Ergebnis oder Nutzen der Beratung zufrieden ist</li>
                </ul>
              </li>
              <li>
                Die Beratung stellt keine Garantie für wirtschaftlichen Erfolg, Genehmigungen, Lizenzerteilungen
                oder eine konkrete Umsetzung in Saudi-Arabien dar. <strong>Der Kunde trägt das volle Risiko</strong>{" "}
                für alle Entscheidungen und Handlungen, die aus der Beratung resultieren.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">6. Haftungsausschluss</h2>
            <ol className="list-decimal pl-5 mb-4 text-slate-600 space-y-2">
              <li>
                Oasis Gate LLC übernimmt <strong>keine Haftung</strong> für:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>wirtschaftliche Ergebnisse</li>
                  <li>unternehmerische Entscheidungen des Kunden</li>
                  <li>
                    Änderungen von rechtlichen, regulatorischen oder steuerlichen Anforderungen in Saudi-Arabien,
                    die nach Durchführung der Beratung eintreten
                  </li>
                  <li>Genehmigungen, Lizenzerteilungen oder Behördenentscheidungen</li>
                </ul>
              </li>
              <li>
                Die Beratung ersetzt <strong>keine rechtliche, steuerliche oder behördliche Beratung</strong> durch
                zugelassene Stellen oder Behörden.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">7. Terminabsage & Nichterscheinen</h2>
            <ol className="list-decimal pl-5 mb-4 text-slate-600 space-y-2">
              <li>
                Wird ein Termin nicht wahrgenommen oder kurzfristig abgesagt, besteht <strong>kein Anspruch</strong>{" "}
                auf Ersatz oder Rückerstattung.
              </li>
              <li>Technische Probleme auf Kundenseite (Internet, Hardware, Zugangsprobleme) gehen zu Lasten des Kunden.</li>
            </ol>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">8. Urheberrecht & Vertraulichkeit</h2>
            <ol className="list-decimal pl-5 mb-4 text-slate-600 space-y-2">
              <li>Alle im Rahmen der Beratung bereitgestellten Inhalte unterliegen dem Urheberrecht.</li>
              <li>Eine Weitergabe an Dritte ist ohne ausdrückliche Zustimmung nicht gestattet.</li>
              <li>
                Oasis Gate LLC verpflichtet sich zur vertraulichen Behandlung aller im Gespräch erhaltenen Informationen.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">9. Schlussbestimmungen</h2>
            <ol className="list-decimal pl-5 mb-4 text-slate-600 space-y-2">
              <li>
                Es gilt das Recht des <strong>Königreichs Saudi-Arabien</strong>, sofern keine zwingenden gesetzlichen
                Vorschriften entgegenstehen.
              </li>
              <li>
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Regelungen
                unberührt.
              </li>
            </ol>

            <p className="text-slate-500 text-sm mt-12 border-t border-slate-200 pt-4">
              Stand: Januar 2025
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
