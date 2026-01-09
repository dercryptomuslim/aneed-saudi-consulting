import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="ueber-mich" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
              {/* Placeholder for Aneed Ashraf Image */}
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-200 text-zinc-400">
                <span className="text-lg">Bild von Aneed Ashraf</span>
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold">9+</p>
              <p className="text-sm font-medium">Jahre Erfahrung<br/>in Saudi-Arabien</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ihr vertrauensvoller Partner vor Ort
            </h2>
            <p className="text-lg text-muted-foreground">
              Mit fast einem Jahrzehnt Erfahrung im Königreich Saudi-Arabien kenne ich nicht nur die geschäftlichen Prozesse, sondern auch die kulturellen Feinheiten, die für Ihren Erfolg entscheidend sind.
            </p>
            <p className="text-lg text-muted-foreground">
              Mein Ziel ist es, Ihnen den Weg zu ebnen – sei es für die Gründung Ihres Unternehmens, strategische Investments oder Ihren privaten Neustart. Ich begleite Sie persönlich und transparent.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Umfassendes Netzwerk",
                "Transparente Prozesse",
                "Persönliche Betreuung",
                "Nachhaltige Strategien"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

