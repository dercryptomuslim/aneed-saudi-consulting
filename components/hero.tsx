import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32 lg:py-40">
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Ihr Tor zum Erfolg in <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Saudi-Arabien
            </span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Profitieren Sie von 9 Jahren Erfahrung vor Ort. Wir begleiten Sie professionell bei Firmengründung, Investment und Ihrer Auswanderung in das Königreich.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-12 w-full px-8 text-lg sm:w-auto">
              <Link href="#kontakt">
                Kostenlose Beratung
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 w-full px-8 text-lg sm:w-auto">
              <Link href="#leistungen">
                Unsere Leistungen
              </Link>
            </Button>
          </div>

          <div className="pt-8 text-sm text-muted-foreground">
            <p>Vertrauen Sie dem Experten mit nachweisbarer Erfahrung.</p>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[100px]" />
    </section>
  );
}

