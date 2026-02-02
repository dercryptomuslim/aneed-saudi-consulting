import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPostsDe, blogPostsEn, sortByDateDesc } from "@/lib/blog-data";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";

export function BlogTeaser({ locale = "de" }: { locale?: Locale }) {
  const t = (de: string, en: string) => (locale === "en" ? en : de);
  const href = (raw: string) => localizeHref(raw, locale);
  const posts = locale === "en" ? blogPostsEn : blogPostsDe;
  
  // Die 3 neuesten Artikel (sortiert nach Datum)
  const latestPosts = sortByDateDesc(posts).slice(0, 3);

  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-emerald-700 tracking-wide uppercase mb-3 block">
              {t("Blog & Wissen", "Blog & Knowledge")}
            </span>
            <h2 className="text-3xl font-serif font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl mb-4">
              {t("Aktuelle Einblicke", "Latest Insights")}
            </h2>
            <p className="text-lg text-slate-600">
              {t(
                "Echte Erfahrungen und praktisches Wissen aus fast einem Jahrzehnt Unternehmertum in Saudi-Arabien.",
                "Real experiences and practical knowledge from nearly a decade of entrepreneurship in Saudi Arabia."
              )}
            </p>
          </div>
          
          <Button asChild variant="outline" className="hidden md:flex border-slate-200 hover:bg-slate-50 hover:text-emerald-700 hover:border-emerald-200">
            <Link href={href("/blog")}>
              {t("Alle Artikel ansehen", "View all articles")} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {latestPosts.map((post) => (
            <Link key={post.slug} href={href(`/blog/${post.slug}`)} className="group h-full">
              <Card className="h-full overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-slate-50">
                
                {/* Image Area */}
                <div className="relative h-48 w-full overflow-hidden">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="h-full w-full bg-slate-200 flex items-center justify-center">
                      <span className="text-slate-400 text-sm">BILD</span>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium uppercase tracking-wider mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm font-semibold text-emerald-700 mt-auto">
                    {t("Artikel lesen", "Read article")} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Button asChild variant="outline" className="w-full border-slate-200 hover:bg-slate-50 hover:text-emerald-700">
            <Link href={href("/blog")}>
              {t("Alle Artikel ansehen", "View all articles")} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
