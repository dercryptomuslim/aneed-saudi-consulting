import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { blogPostsEn } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { localizeHref } from "@/lib/i18n";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPostsEn.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsEn.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Article not found",
    };
  }

  return {
    title: `${post.title} | Aneed Ashraf`,
    description: post.excerpt,
  };
}

export default async function BlogPostEnPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPostsEn.find((p) => p.slug === slug);
  const href = (raw: string) => localizeHref(raw, "en");

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <article className="pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          
          <Link href={href("/blog")} className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to overview
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
            className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-emerald-700 hover:prose-a:text-emerald-800 prose-strong:text-slate-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              Ready for the next step?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
              Let's analyze your situation and find the best path for you. Discreet, direct, and based on real experience.
            </p>
            <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 shadow-lg">
              <Link href={href("/anfrage")}>
                Book an expert call <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

        </div>
      </article>

      <Footer locale="en" />
    </main>
  );
}
