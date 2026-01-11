import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Aneed Ashraf",
  description: "English case studies page coming soon.",
};

export default function CaseStudiesEnPlaceholder() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <section className="flex-1 pt-28 pb-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Case Studies (EN) — coming soon
            </h1>
            <p className="text-slate-600 mb-8">
              We’re currently preparing the full English version of this page.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white">
                <Link href="/erfolgsgeschichten">View in German</Link>
              </Button>
              <Button asChild variant="outline" className="border-slate-200">
                <Link href="/en">Back to English home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </main>
  );
}

