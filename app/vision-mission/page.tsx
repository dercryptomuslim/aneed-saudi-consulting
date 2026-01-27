import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision · Mission · Core Values | Aneed Ashraf",
  description: "Klarheit statt Illusion. Entscheidungen auf Basis realer Erfahrung. Erfahre mehr über unsere Vision, Mission und Grundwerte.",
  alternates: {
    canonical: "/vision-mission",
    languages: {
      "de": "/vision-mission",
      "en": "/en/vision-mission",
    },
  },
  keywords: ["Vision", "Mission", "Core Values", "Aneed Ashraf", "Saudi-Arabien Beratung", "Unternehmensberatung"],
  openGraph: {
    title: "Vision · Mission · Core Values | Aneed Ashraf",
    description: "Klarheit statt Illusion. Entscheidungen auf Basis realer Erfahrung.",
    url: "https://www.aneedashraf.de/vision-mission",
    siteName: "Aneed Ashraf",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision · Mission · Core Values | Aneed Ashraf",
    description: "Klarheit statt Illusion. Entscheidungen auf Basis realer Erfahrung.",
  },
};

const grundwerte = [
  { title: "Authentizität", description: "Kein Fake. Keine Theorie. Keine Experimente am Kunden." },
  { title: "Klarheit", description: "Ich spreche aus, was funktioniert – und was nicht." },
  { title: "Pragmatismus", description: "Ideen zählen nur, wenn sie umsetzbar sind." },
  { title: "Verantwortung", description: "Unternehmerische Entscheidungen haben Konsequenzen." },
  { title: "Langfristigkeit", description: "Strukturen, die auch unter realen Bedingungen tragen." },
  { title: "Konsequenz", description: "Klare Haltung – auch wenn es unbequem ist." },
];

export default function VisionMissionPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Intro */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
                Klarheit statt Illusion.<br/>
                Entscheidungen auf Basis realer Erfahrung.
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Seit knapp 10 Jahren lebe und arbeite ich in Saudi-Arabien – und helfe Unternehmern, realistische Entscheidungen zu treffen, bevor sie Zeit, Kapital und Energie verlieren.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md px-6 py-3">
                  <Link href="/anfrage">
                    Beratung buchen <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-6 py-3">
                  <Link href="#mission">
                    So arbeite ich
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-slate-500 pt-2">
                Kein Fake. Keine Theorie. Reale Umsetzung.
              </p>
            </div>

            {/* Right Column: Portrait */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl aspect-[4/5] overflow-hidden shadow-lg">
                <Image
                  src="/images/Portrait (Hero-Bereich).JPG"
                  alt="Aneed Ashraf in Medina, Saudi-Arabien"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
              Unsere Vision
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Meine Vision ist es, <strong className="text-slate-900">Klarheit</strong> in einen Markt zu bringen, der oft von Halbwissen, falschen Versprechen und unrealistischen Erwartungen geprägt ist.
              </p>
              <p>
                Saudi-Arabien bietet enorme Chancen – aber nur für diejenigen, die bereit sind, Realität anzuerkennen und Verantwortung zu übernehmen.
              </p>
              <p>
                Nicht jeder Traum ist umsetzbar. Nicht jede Idee ist marktfähig. Genau diese Ehrlichkeit ist die Grundlage nachhaltigen Erfolgs.
              </p>
              <p>
                Ich glaube an eine unternehmerische Kultur, in der <strong className="text-slate-900">Realität wichtiger ist als Hoffnung</strong> und <strong className="text-slate-900">Struktur wichtiger als Motivation</strong>.
              </p>
            </div>
            
            {/* Vision Image */}
            <div className="mt-12">
              <div className="relative rounded-2xl aspect-[21/9] overflow-hidden shadow-lg">
                <Image
                  src="/images/Wüste_Horizont.png"
                  alt="Wüste Horizont - Klarheit, Realität, Verantwortung"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-xl font-medium tracking-wide z-10">
                  „Klarheit. Realität. Verantwortung."
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
              Unsere Mission
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Meine Mission ist es, Menschen durch <strong className="text-slate-900">reale unternehmerische Erfahrung</strong> Orientierung zu geben.
              </p>
              <p>
                Nicht aus Theorie. Nicht aus Modellen. Sondern aus eigener Umsetzung, eigenen Projekten, eigenen Fehlern, eigenen Kosten und eigenen Learnings.
              </p>
              <p>
                Seit knapp zehn Jahren bin ich operativ in Saudi-Arabien tätig. Ich habe Unternehmen gegründet, aufgebaut, restrukturiert und geführt – und genau diese Erfahrung bringe ich in jede Beratung ein.
              </p>

              <div className="pt-6">
                <p className="text-slate-900 font-semibold mb-4">
                  Ich begleite Unternehmer dabei:
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>realistisch einzuschätzen, ob ein Business in Saudi-Arabien Sinn macht</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>klare Strukturen für Gründung, Aufbau und Führung zu schaffen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Risiken frühzeitig zu erkennen und Fehlentscheidungen zu vermeiden</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200 mt-8">
                <p className="text-slate-900 font-semibold">
                  Mein Ziel ist nicht, Menschen von Saudi-Arabien zu überzeugen.
                </p>
                <blockquote className="mt-6 bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                  <p className="text-xl md:text-2xl font-serif text-emerald-800 italic leading-relaxed">
                    „Mein Ziel ist es, Klarheit zu schaffen – auch dann, wenn die ehrliche Antwort lautet: So macht das keinen Sinn."
                  </p>
                </blockquote>
              </div>
            </div>

            {/* Accordion - Was das in der Praxis bedeutet */}
            <div className="mt-12">
              <details className="group border border-slate-200 rounded-xl bg-white shadow-sm" open>
                <summary className="cursor-pointer px-6 py-4 font-bold text-slate-900 flex items-center justify-between">
                  Was das in der Praxis bedeutet
                  <span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 space-y-4">
                  <p>
                    <strong className="text-slate-900">Keine Erfolgsversprechen:</strong> Ich verspreche keine Ergebnisse. Ich liefere eine realistische Einschätzung und saubere Struktur.
                  </p>
                  <p>
                    <strong className="text-slate-900">Keine Abkürzungen:</strong> Behörden, Lizenzen und Marktregeln haben ihre Realität – ich arbeite innerhalb dieser Realität.
                  </p>
                  <p>
                    <strong className="text-slate-900">Keine Experimente am Kunden:</strong> Ich empfehle nur, was ich selbst umgesetzt habe oder was nachweislich in der Praxis funktioniert.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
            Unser Core Value
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-slate-900 leading-tight max-w-4xl mx-auto">
            Ich schaffe Klarheit durch reale Erfahrung –<br/>
            damit Menschen keine falschen Entscheidungen treffen.
          </p>
          <p className="text-sm text-slate-500 mt-6">
            Kein Fake. Keine Theorie. Reale Umsetzung.
          </p>
        </div>
      </section>

      {/* Grundwerte Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-12 text-center">
            Unsere Grundwerte
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {grundwerte.map((wert) => (
              <Card key={wert.title} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{wert.title}</h3>
                  <p className="text-slate-600">{wert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Haltung Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-10">
              Unsere Haltung
            </h2>
            <div className="space-y-3">
              <p className="text-2xl md:text-3xl font-semibold text-slate-800 leading-tight">
                Ich bin kein Coach.
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-slate-800 leading-tight">
                Ich bin kein Motivator.
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-slate-800 leading-tight">
                Ich bin kein Verkäufer von Hoffnung.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-emerald-600 leading-tight mt-4">
                Ich bin ein Filter für Realität.
              </p>
            </div>
            <p className="text-lg text-slate-600 mt-8 leading-relaxed">
              Meine Arbeit beginnt dort, wo Social Media aufhört und echte Verantwortung anfängt. Wer mit mir arbeitet, bekommt keine Versprechen – sondern ehrliche Einschätzungen, klare Strukturen und fundierte Entscheidungen.
            </p>

            {/* Video/Skyline Image */}
            <div className="mt-12">
              <div className="relative rounded-2xl aspect-video overflow-hidden shadow-lg">
                <Image
                  src="/images/Video.png"
                  alt="Medina Skyline"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-slate-100 border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                Klarheit ist der erste Schritt.
              </h2>
              <p className="text-lg text-slate-600">
                Wenn du wissen willst, ob ein Business in Saudi-Arabien für dich wirklich Sinn macht, dann lass uns sprechen.
              </p>
              <p className="text-sm text-slate-500 mt-4">
                Keine Garantie. Keine Abkürzungen. Reale Erfahrung.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md px-8 py-3">
                <Link href="/anfrage">
                  Beratung buchen <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="link" className="text-emerald-700 font-semibold">
                <Link href="/blog">
                  Voraussetzungen lesen
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
