import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPostsDe } from "@/lib/blog-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Aneed Ashraf - Einblicke aus Saudi-Arabien",
  description: "Aktuelle Einblicke zu Firmengründung, Leben und Investment in Saudi-Arabien. Echte Erfahrung aus fast einem Jahrzehnt Unternehmertum in Medina.",
  alternates: {
    canonical: "/blog",
    languages: {
      "de": "/blog",
      "en": "/en/blog",
    },
  },
  keywords: ["Blog Saudi-Arabien", "Firmengründung Saudi-Arabien", "Leben in Medina", "Investment Saudi-Arabien", "Premium Residency"],
  openGraph: {
    title: "Blog | Einblicke aus Saudi-Arabien - Aneed Ashraf",
    description: "Aktuelle Einblicke zu Firmengründung, Leben und Investment in Saudi-Arabien. Echte Erfahrung aus Medina.",
    url: "https://www.aneedashraf.de/blog",
    siteName: "Aneed Ashraf",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Einblicke aus Saudi-Arabien",
    description: "Aktuelle Einblicke zu Firmengründung, Leben und Investment in Saudi-Arabien.",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Einblicke & Expertise
            </h1>
            <p className="text-lg text-slate-600">
              Keine Theorie. Geteilte Erfahrungen aus fast einem Jahrzehnt Unternehmertum in Saudi-Arabien.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPostsDe.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group h-full">
                <Card className="h-full flex flex-col border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  
                  {/* Blog Image */}
                  <div className="h-48 w-full relative overflow-hidden">
                    {post.image ? (
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="h-full w-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <span className="text-sm font-medium">BILD</span>
                      </div>
                    )}
                  </div>

                  <CardHeader className="space-y-4 pb-4">
                    <div className="flex items-center gap-4 text-xs text-slate-500 font-medium uppercase tracking-wider">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3 w-3" /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                      {post.title}
                    </h2>
                  </CardHeader>
                  
                  <CardContent className="pb-4 flex-grow">
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>

                  <CardFooter className="pt-0 pb-6">
                    <div className="text-sm font-semibold text-emerald-700 flex items-center gap-2 group-hover:gap-3 transition-all">
                      Jetzt weiterlesen <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
