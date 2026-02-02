import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";

export function About({ locale = "de" }: { locale?: Locale }) {
  const t = (de: string, en: string) => (locale === "en" ? en : de);
  const href = (raw: string) => localizeHref(raw, locale);
  return (
    <section id="ueber-mich" className="py-12 md:py-24 bg-white relative overflow-hidden pt-4 md:pt-24">
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image / Stats Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl bg-slate-100 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
              <Image 
                src="/aneed-portrait.jpg" 
                alt={t("Aneed Ashraf Portrait", "Aneed Ashraf portrait")}
                fill
                className="object-cover object-top"
                priority
              />
              
              {/* Stats Overlay (White Style) */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-xl border border-slate-200 shadow-lg">
                <div className="flex items-end gap-3">
                  <span className="text-5xl font-bold text-slate-900 tracking-tighter">9+</span>
                  <span className="text-sm font-semibold text-slate-600 mb-1.5 leading-tight">
                    {t("Jahre Erfahrung", "Years of experience")}
                    <br />
                    {t("in Saudi-Arabien", "in Saudi Arabia")}
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-8 right-8 w-full h-full border-2 border-slate-100 rounded-2xl hidden md:block" />
          </div>
          
          {/* Content Side */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <span className="text-sm font-bold text-emerald-700 tracking-wide uppercase mb-3 block">
                {t("Über Aneed Ashraf", "About Aneed Ashraf")}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                {t("Brückenbauer zwischen", "A Bridge Between")} <br/>
                <span className="text-slate-500">{t("Deutschland & Saudi-Arabien", "Germany & Saudi Arabia")}</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                {t(
                  "Saudi-Arabien ist mehr als nur ein Markt – es ist eine Kultur des Vertrauens. Wer hier erfolgreich sein will, braucht mehr als nur Kapital: Er braucht Zugang und Verständnis.",
                  "Saudi Arabia is more than a market — it is a culture built on trust. Success here requires more than capital; it demands access, cultural understanding, and credibility."
                )}
              </p>
              <p>
                {t(
                  "Keine Theorie, kein Fake – ich bin Unternehmer und Unternehmensberater mit über 15 Jahren internationaler Erfahrung und seit 10 Jahren operativ in Saudi-Arabien tätig und davon alleine 8 Jahre in Medina.",
                  "No theory. No hype. I am an entrepreneur and business consultant with over 15 years of international experience and a decade of operational expertise in Saudi Arabia, including eight years based in Medina."
                )}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 pt-6">
              {[
                t("Exklusives Netzwerk", "Exclusive network"),
                t("Kulturelle Kompetenz", "Cultural expertise"),
                t("Direkter Marktzugang", "Direct market access"),
                t("Strategische Weitsicht", "Strategic foresight")
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                  </div>
                  <span className="text-slate-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button asChild variant="outline" className="border-slate-200 hover:bg-slate-50 hover:text-emerald-700">
                <Link href={href("/ueber-mich")}>
                  {t("Mehr über Aneed erfahren", "Learn more about Aneed")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
