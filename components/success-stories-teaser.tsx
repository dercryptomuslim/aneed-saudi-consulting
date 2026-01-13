import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, TrendingUp, Landmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";

const storiesDe = [
  {
    title: "Gastronomieprojekt",
    category: "Operative Umsetzung",
    image: "/laveu-logo.jpg",
    description: "Schlüsselfertige Umsetzung eines Café-Konzepts in Medina unter festem Budget.",
    href: "/erfolgsgeschichten#gastronomie-projekt",
    icon: Building2
  },
  {
    title: "Gewinnoptimierung",
    category: "Restrukturierung",
    image: "/bakran.jpg",
    description: "7-stellige Einsparung und Prozessoptimierung für eine Restaurantkette mit 3 Filialen.",
    href: "/erfolgsgeschichten#gewinnoptimierung-medina",
    icon: TrendingUp
  },
  {
    title: "Museum Prophet-Moschee",
    category: "Kultur & Strategie",
    image: "/masjidnabway.jpg",
    description: "Entwicklung nachhaltiger Einnahmemodelle für den dauerhaften Betrieb.",
    href: "/erfolgsgeschichten#museum-prophet-moschee",
    icon: Landmark
  }
];

const storiesEn = [
  {
    title: "Hospitality Project",
    category: "Operational Execution",
    image: "/laveu-logo.jpg",
    description: "Turn-key delivery of a café concept in Medina within a fixed budget.",
    href: "/erfolgsgeschichten#gastronomie-projekt",
    icon: Building2,
  },
  {
    title: "Profit Optimization",
    category: "Restructuring",
    image: "/bakran.jpg",
    description: "7-figure annual savings and process optimization for a 3-branch restaurant chain.",
    href: "/erfolgsgeschichten#gewinnoptimierung-medina",
    icon: TrendingUp,
  },
  {
    title: "Prophet’s Mosque Museum",
    category: "Culture & Strategy",
    image: "/masjidnabway.jpg",
    description: "Designing sustainable revenue models for long-term operation.",
    href: "/erfolgsgeschichten#museum-prophet-moschee",
    icon: Landmark,
  },
];

export function SuccessStoriesTeaser({ locale = "de" }: { locale?: Locale }) {
  const t = (de: string, en: string) => (locale === "en" ? en : de);
  const href = (raw: string) => localizeHref(raw, locale);
  const stories = locale === "en" ? storiesEn : storiesDe;
  return (
    <section className="py-16 md:py-24 bg-white relative pb-8 md:pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl mb-4">
              {t("Echte Ergebnisse.", "Real results.")}
            </h2>
            <p className="text-lg text-slate-600">
              {t(
                "Theorie ist gut, Praxis ist besser. Hier siehst du, wie wir Herausforderungen in Saudi-Arabien real gelöst haben.",
                "Theory has its place. Practice delivers results. Discover how we have solved real-world challenges in Saudi Arabia."
              )}
            </p>
          </div>
          
          <Button asChild variant="outline" className="hidden md:flex border-slate-200 hover:bg-slate-50 hover:text-emerald-700 hover:border-emerald-200">
            <Link href={href("/erfolgsgeschichten")}>
              {t("Alle Case Studies ansehen", "View all case studies")} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((story) => (
            <Link key={story.title} href={href(story.href)} className="group h-full">
              <Card className="h-full overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-slate-50">
                
                {/* Image Area */}
                <div className="relative h-48 w-full bg-white border-b border-slate-100 p-6 flex items-center justify-center">
                   {/* @ts-ignore - Dynamic property check */}
                   {story.image && (
                    <div className="relative h-full w-full max-w-[180px]">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-emerald-700 border border-slate-100 shadow-sm flex items-center gap-1.5">
                    <story.icon className="h-3 w-3" />
                    {story.category}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {story.description}
                  </p>
                  <div className="flex items-center text-sm font-semibold text-emerald-700 mt-auto">
                    {t("Case Study lesen", "Read case study")} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Button asChild variant="outline" className="w-full border-slate-200 hover:bg-slate-50 hover:text-emerald-700">
            <Link href={href("/erfolgsgeschichten")}>
              {t("Alle Case Studies ansehen", "View all case studies")} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}

