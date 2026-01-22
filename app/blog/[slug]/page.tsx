import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { blogPostsDe } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Script from "next/script";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPostsDe.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsDe.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Artikel nicht gefunden",
    };
  }

  return {
    title: `${post.title} | Aneed Ashraf`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    keywords: [post.title, "Saudi-Arabien", "Unternehmensgründung", "Medina", "Blog"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.aneedashraf.de/blog/${post.slug}`,
      siteName: "Aneed Ashraf",
      locale: "de_DE",
      type: "article",
      publishedTime: post.date,
      authors: ["Aneed Ashraf"],
      images: post.image ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

function generateArticleJsonLd(post: { slug: string; title: string; date: string; excerpt: string; image?: string; readTime: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image ? `https://www.aneedashraf.de${post.image}` : undefined,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": "Aneed Ashraf",
      "url": "https://www.aneedashraf.de/ueber-mich"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Aneed Ashraf - Oasis Gate LLC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.aneedashraf.de/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.aneedashraf.de/blog/${post.slug}`
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPostsDe.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = generateArticleJsonLd(post);

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      
      <article className="pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          
          <Link href="/blog" className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" /> Zurück zur Übersicht
          </Link>

          <header className="mb-10">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-slate-500 font-medium uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> {post.readTime}
              </span>
            </div>
          </header>

          <div 
            className="max-w-none font-serif text-slate-900
              [&_h2]:text-[30px] [&_h2]:leading-[1.15] [&_h2]:font-extrabold [&_h2]:mt-[38px] [&_h2]:mb-[14px] [&_h2]:tracking-[-0.2px]
              [&_h3]:text-[32px] [&_h3]:leading-[1.15] [&_h3]:font-extrabold [&_h3]:mt-[18px] [&_h3]:mb-[10px] [&_h3]:tracking-[-0.2px]
              [&_p]:text-[18px] [&_p]:leading-[1.45] [&_p]:mb-[14px]
              [&_ul]:my-[10px] [&_ul]:ml-[44px] [&_ul]:text-[18px] [&_ul]:leading-[1.45]
              [&_li]:my-[6px]
              [&_strong]:font-extrabold
              [&_em]:italic
              [&_a]:text-emerald-700 [&_a:hover]:text-emerald-800 [&_a]:underline
              [&_figure]:my-12
              [&_figcaption]:text-sm [&_figcaption]:text-slate-500 [&_figcaption]:mt-3 [&_figcaption]:text-center
              [&_img]:w-full [&_img]:rounded-xl [&_img]:shadow-lg
              [&_.lead]:text-xl [&_.lead]:text-slate-700 [&_.lead]:mb-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              Bereit für den nächsten Schritt?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
              Lass uns deine Situation analysieren und den besten Weg für dich finden. Diskret, direkt und basierend auf echter Erfahrung.
            </p>
            <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 shadow-lg">
              <Link href="/anfrage">
                Jetzt Expertengespräch anfragen <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}
