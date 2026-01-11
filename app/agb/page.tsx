import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB | Oasis Gate LLC",
  description: "Allgemeine Geschäftsbedingungen (AGB) von Oasis Gate LLC.",
};

export default function AgbPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col scroll-smooth">
      <Navbar />

      <section className="relative pt-32 pb-16 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">AGB</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Allgemeine Geschäftsbedingungen (Oasis Gate LLC)
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="prose prose-slate lg:prose-lg mx-auto">
            <h2>Allgemeine Geschäftsbedingungen (AGB) – Oasis Gate LLC</h2>

            <h3>1. Geltungsbereich</h3>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen{" "}
              <strong>Oasis Gate LLC</strong>, Medina, Saudi-Arabien (nachfolgend „Anbieter“) und den
              Kunden (nachfolgend „Kunde“), die über die Website <strong>aneedashraf.de</strong>{" "}
              sowie über das Buchungstool <strong>TidyCal</strong> abgeschlossen werden.
            </p>
            <p>Sie gelten insbesondere für:</p>
            <ul>
              <li>Beratungsleistungen</li>
              <li>Online-Beratungsgespräche</li>
              <li>
                Strategische Erst- und Fachgespräche zur Unternehmensgründung und Geschäftstätigkeit
                in Saudi-Arabien
              </li>
            </ul>

            <h3>2. Leistungsgegenstand</h3>
            <p>
              Oasis Gate LLC erbringt <strong>unternehmerische und strategische Beratungsleistungen</strong>{" "}
              im Bereich:
            </p>
            <ul>
              <li>Unternehmensgründung in Saudi-Arabien</li>
              <li>Markteintritt und Expansion</li>
              <li>Strukturierung, Strategie und Machbarkeitsbewertung</li>
            </ul>
            <p>
              Die Beratung erfolgt <strong>ausschließlich als Dienstleistung</strong>, nicht als
              Erfolgs- oder Werkvertrag. Ein konkreter wirtschaftlicher oder rechtlicher Erfolg wird{" "}
              <strong>nicht geschuldet</strong>. Die Beratung erfolgt nach bestem Wissen und Gewissen,
              jedoch <strong>unterliegt der Kunde selbst der Verantwortung für Entscheidungen und Handlungen</strong>.
            </p>

            <h3>3. Terminbuchung &amp; Vergütung</h3>
            <ol>
              <li>
                Beratungstermine werden ausschließlich online über das Buchungstool{" "}
                <a
                  href="https://tidycal.com/medinabusiness/60-minute-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
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

            <h3>4. Wichtige Voraussetzungen für Beratungsgespräche zur Unternehmensgründung in Saudi-Arabien</h3>
            <ol>
              <li>
                Das Beratungsformat richtet sich ausschließlich an Personen, die sich{" "}
                <strong>realistisch und rechtskonform</strong> mit einer Unternehmensgründung oder Investition
                in Saudi-Arabien befassen.
              </li>
              <li>
                Für eine reguläre Unternehmensgründung gelten u. a. folgende Voraussetzungen:
                <ul>
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
                <ul>
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

            <h3>5. Eigenverantwortung &amp; Ausschluss der Rückerstattung</h3>
            <ol>
              <li>
                Bucht der Kunde einen Termin, obwohl die genannten Voraussetzungen nicht erfüllt sind, erfolgt
                dies <strong>auf eigene Verantwortung</strong>.
              </li>
              <li>
                <strong>Eine Rückerstattung der Beratungsgebühr ist ausgeschlossen</strong>, unabhängig davon, ob:
                <ul>
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

            <h3>6. Haftungsausschluss</h3>
            <ol>
              <li>
                Oasis Gate LLC übernimmt <strong>keine Haftung</strong> für:
                <ul>
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

            <h3>7. Terminabsage &amp; Nichterscheinen</h3>
            <ol>
              <li>
                Wird ein Termin nicht wahrgenommen oder kurzfristig abgesagt, besteht <strong>kein Anspruch</strong>{" "}
                auf Ersatz oder Rückerstattung.
              </li>
              <li>Technische Probleme auf Kundenseite (Internet, Hardware, Zugangsprobleme) gehen zu Lasten des Kunden.</li>
            </ol>

            <h3>8. Urheberrecht &amp; Vertraulichkeit</h3>
            <ol>
              <li>Alle im Rahmen der Beratung bereitgestellten Inhalte unterliegen dem Urheberrecht.</li>
              <li>Eine Weitergabe an Dritte ist ohne ausdrückliche Zustimmung nicht gestattet.</li>
              <li>
                Oasis Gate LLC verpflichtet sich zur vertraulichen Behandlung aller im Gespräch erhaltenen Informationen.
              </li>
            </ol>

            <h3>9. Schlussbestimmungen</h3>
            <ol>
              <li>
                Es gilt das Recht der <strong>Bundesrepublik Deutschland</strong>, sofern keine zwingenden gesetzlichen
                Vorschriften entgegenstehen.
              </li>
              <li>
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Regelungen
                unberührt.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

