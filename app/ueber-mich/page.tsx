import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, MapPin, Award, Briefcase, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über Mich | Aneed Ashraf - Consulting Saudi-Arabien",
  description: "Erfahre mehr über Aneed Ashraf: Unternehmer, Berater und Brückenbauer zwischen Deutschland und Saudi-Arabien.",
};

const skills = [
  { name: "Internationale Beratungsexzellenz", value: 100 },
  { name: "Unternehmerische Umsetzungserfahrung", value: 100 },
  { name: "Kulturelle Brückenkompetenz", value: 100 },
  { name: "Markt- & Behördenverständnis KSA", value: 100 },
];

const stats = [
  { label: "Jahre int. Erfahrung", value: "15+" },
  { label: "Jahre in Saudi-Arabien", value: "9+" },
  { label: "Verwaltetes Budget", value: "> 1 Mio. €" },
  { label: "Realisierte Einsparungen", value: "> 2 Mio. €" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col scroll-smooth">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Column: Intro */}
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <div className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-emerald-700 shadow-sm font-medium">
                Unternehmer & Berater
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
                Aneed Ashraf
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                Brückenbauer zwischen den Welten. Strategischer Partner für deinen Erfolg in Saudi-Arabien.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4 text-center md:text-left">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column: Placeholder/Empty to balance layout if needed or keep text focused */}
            <div className="lg:w-1/2 relative hidden lg:block">
               {/* Optional: Hier könnte eine Grafik oder ein Zitat stehen, 
                   aber wir haben das Bild nach unten verschoben. 
                   Lassen wir es leer für einen cleanen Look oder fügen ein Zitat ein. */}
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-md mx-auto italic text-slate-600 leading-relaxed relative">
                  <span className="absolute top-4 left-4 text-6xl text-emerald-100 font-serif -z-10">"</span>
                  Die Vision 2030 ist nicht nur ein Plan, sondern eine Einladung an alle, die Zukunft mitzugestalten. Ich helfe dir dabei, diese Einladung anzunehmen.
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Skills */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 space-y-8 text-lg text-slate-600 leading-relaxed">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Expertise aus zwei Welten
              </h2>
              
              <p>
                Als Unternehmer und Unternehmensberater bringe ich über 15 Jahre internationale Beratungserfahrung und mehr als 9 Jahre erfolgreiche operative Tätigkeit in Saudi-Arabien mit. Ergänzt wird diese Expertise durch einen Master in Projektmanagement und Zertifizierungen, die strukturierte Umsetzung, Planungssicherheit und professionelle Steuerung komplexer Projekte gewährleisten.
              </p>
              
              <p>
                Seit 2017 lebe und arbeite ich nun in Saudi-Arabien. Dort habe ich die erste deutsch-saudische Unternehmensberatung in Medina gegründet. Mein Team und ich haben dort zahlreiche Projekte mit einem Gesamtbudget von über 1 Million Euro verantwortet und mehr als 15 Unternehmen strategisch beraten.
              </p>

              <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-xl my-8">
                <p className="font-medium text-emerald-900 italic">
                  "Die Ergebnisse sprechen für sich: über 2 Millionen Euro an realisierten Kosteneinsparungen, deutliche Effizienzsteigerungen und nachhaltiges Gewinnwachstum bei unseren Kunden."
                </p>
              </div>

              <p>
                Mein Team und ich agieren nicht nur als Berater, sondern als strategische Partner, die Unternehmen, Investoren und Unternehmer sicher, effizient und nachhaltig durch den saudi-arabischen Markt führen.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Unternehmerischer Hintergrund</h3>
              
              {/* Image 1: Portrait moved here */}
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-lg bg-slate-200 mb-8 float-right ml-6">
                <Image
                  src="/aneed-10.jpg"
                  alt="Aneed Ashraf Portrait"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <p>
                Seit 2006 bin ich als Unternehmer aktiv und seit 2011 als Unternehmensberater tätig. In dieser Zeit habe ich über 100 Projekte und KMU in Deutschland, Österreich, der Schweiz, Großbritannien, Malaysia und Singapur begleitet und erfolgreich abgeschlossen.
              </p>
              <p>
                Ein besonderer Schwerpunkt meiner Arbeit liegt auf der Entwicklung praxisnaher Strukturen: Ich habe umfassende Inkubator- und Accelerator-Programme für Startups, Scale-ups und KMU konzipiert und geleitet. Dazu zählen mehrmonatige Programme mit über 140 strategischen Lerninhalten und mehr als 40 individuellen Umsetzungsaufgaben, die von über 50 Unternehmen im deutschsprachigen Raum erfolgreich durchlaufen wurden.
              </p>
            </div>

            {/* Right Column: Skills & Image 2 */}
            <div className="lg:col-span-5 space-y-12">
              
              {/* Skills Card */}
              <Card className="border-slate-200 shadow-lg bg-slate-900 text-white">
                <CardContent className="p-8 space-y-8">
                  <h3 className="text-xl font-bold font-serif mb-6">Kernkompetenzen</h3>
                  <div className="space-y-6">
                    {skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm font-medium text-slate-300">
                          <span>{skill.name}</span>
                          <span>{skill.value}%</span>
                        </div>
                        <Progress value={skill.value} className="h-2 bg-slate-700" indicatorClassName="bg-emerald-500" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Second Image (Square) */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/aneed-1.jpg"
                  alt="Aneed Ashraf"
                  fill
                  className="object-cover"
                />
              </div>

              {/* CTA */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Bereit für den Markteintritt?</h3>
                <p className="text-slate-600 mb-4">Lass uns deine Vision besprechen.</p>
                <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-md">
                  <Link href="/anfrage">
                    Termin vereinbaren <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
