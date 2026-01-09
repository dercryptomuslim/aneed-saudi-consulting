import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="ueber-mich" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image / Stats Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl">
              {/* Hier kommt das echte Bild rein */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-950">
                <span className="text-neutral-600 text-lg font-medium">Aneed Ashraf</span>
                <span className="text-neutral-700 text-sm">Portrait</span>
              </div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                <div className="flex items-end gap-2">
                  <span className="text-6xl font-bold text-white">9+</span>
                  <span className="text-lg font-medium text-emerald-500 mb-2">Jahre Erfahrung<br/>im Kingdom</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-emerald-500 tracking-wide uppercase mb-2">Über Aneed Ashraf</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Brückenbauer zwischen <br/>
                <span className="text-neutral-400">Deutschland & Saudi-Arabien</span>
              </h3>
            </div>
            
            <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
              <p>
                Saudi-Arabien ist mehr als nur ein Markt – es ist eine Kultur des Vertrauens. Wer hier erfolgreich sein will, braucht mehr als nur Kapital: Er braucht Zugang und Verständnis.
              </p>
              <p>
                Seit über 9 Jahren lebe und arbeite ich vor Ort. Ich habe den Wandel der Vision 2030 hautnah miterlebt und ein belastbares Netzwerk zu Entscheidungsträgern aufgebaut.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 pt-4">
              {[
                "Exklusives Netzwerk",
                "Kulturelle Kompetenz",
                "Direkter Marktzugang",
                "Strategische Weitsicht"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  </div>
                  <span className="text-neutral-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
