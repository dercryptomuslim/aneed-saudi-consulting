import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision · Mission · Core Values | Aneed Ashraf",
  description: "Clarity over illusion. Decisions based on real experience. Learn more about our vision, mission and core values.",
  alternates: {
    canonical: "/en/vision-mission",
    languages: {
      "de": "/vision-mission",
      "en": "/en/vision-mission",
    },
  },
  keywords: ["Vision", "Mission", "Core Values", "Aneed Ashraf", "Saudi Arabia Consulting", "Business Consulting"],
  openGraph: {
    title: "Vision · Mission · Core Values | Aneed Ashraf",
    description: "Clarity over illusion. Decisions based on real experience.",
    url: "https://www.aneedashraf.de/en/vision-mission",
    siteName: "Aneed Ashraf",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision · Mission · Core Values | Aneed Ashraf",
    description: "Clarity over illusion. Decisions based on real experience.",
  },
};

const coreValues = [
  { title: "Authenticity", description: "No fake. No theory. No experiments on clients." },
  { title: "Clarity", description: "I speak out what works – and what doesn't." },
  { title: "Pragmatism", description: "Ideas only count if they're actionable." },
  { title: "Responsibility", description: "Entrepreneurial decisions have consequences." },
  { title: "Long-term thinking", description: "Structures that hold up under real conditions." },
  { title: "Consistency", description: "Clear stance – even when it's uncomfortable." },
];

export default function VisionMissionPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Intro */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
                Clarity over illusion.<br/>
                Decisions based on real experience.
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                For almost 10 years I have been living and working in Saudi Arabia – helping entrepreneurs make realistic decisions before they lose time, capital and energy.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md px-6 py-3">
                  <Link href="/en/inquiry">
                    Book a consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-6 py-3">
                  <Link href="#mission">
                    How I work
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-slate-500 pt-2">
                No fake. No theory. Real implementation.
              </p>
            </div>

            {/* Right Column: Portrait */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl aspect-[4/5] overflow-hidden shadow-lg">
                <Image
                  src="/images/Portrait (Hero-Bereich).JPG"
                  alt="Aneed Ashraf in Medina, Saudi Arabia"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
              Our Vision
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                My vision is to bring <strong className="text-slate-900">clarity</strong> to a market that is often characterized by half-knowledge, false promises and unrealistic expectations.
              </p>
              <p>
                Saudi Arabia offers enormous opportunities – but only for those who are willing to acknowledge reality and take responsibility.
              </p>
              <p>
                Not every dream is feasible. Not every idea is marketable. This honesty is the foundation of sustainable success.
              </p>
              <p>
                I believe in an entrepreneurial culture where <strong className="text-slate-900">reality is more important than hope</strong> and <strong className="text-slate-900">structure is more important than motivation</strong>.
              </p>
            </div>
            
            {/* Vision Image */}
            <div className="mt-12">
              <div className="relative rounded-2xl aspect-[21/9] overflow-hidden shadow-lg">
                <Image
                  src="/images/Wüste_Horizont.png"
                  alt="Desert Horizon - Clarity, Reality, Responsibility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-xl font-medium tracking-wide z-10">
                  "Clarity. Reality. Responsibility."
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
              Our Mission
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                My mission is to provide people with orientation through <strong className="text-slate-900">real entrepreneurial experience</strong>.
              </p>
              <p>
                Not from theory. Not from models. But from my own implementation, my own projects, my own mistakes, my own costs and my own learnings.
              </p>
              <p>
                For almost ten years I have been operationally active in Saudi Arabia. I have founded, built, restructured and managed companies – and I bring exactly this experience into every consultation.
              </p>

              <div className="pt-6">
                <p className="text-slate-900 font-semibold mb-4">
                  I help entrepreneurs to:
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>realistically assess whether a business in Saudi Arabia makes sense</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>create clear structures for founding, building and managing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>identify risks early and avoid wrong decisions</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200 mt-8">
                <p className="text-slate-900 font-semibold">
                  My goal is not to convince people of Saudi Arabia.
                </p>
                <blockquote className="mt-6 bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                  <p className="text-xl md:text-2xl font-serif text-emerald-800 italic leading-relaxed">
                    "My goal is to create clarity – even when the honest answer is: This doesn't make sense."
                  </p>
                </blockquote>
              </div>
            </div>

            {/* Accordion - What this means in practice */}
            <div className="mt-12">
              <details className="group border border-slate-200 rounded-xl bg-white shadow-sm" open>
                <summary className="cursor-pointer px-6 py-4 font-bold text-slate-900 flex items-center justify-between">
                  What this means in practice
                  <span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 space-y-4">
                  <p>
                    <strong className="text-slate-900">No success promises:</strong> I don't promise results. I deliver a realistic assessment and clean structure.
                  </p>
                  <p>
                    <strong className="text-slate-900">No shortcuts:</strong> Authorities, licenses and market rules have their reality – I work within this reality.
                  </p>
                  <p>
                    <strong className="text-slate-900">No experiments on clients:</strong> I only recommend what I have implemented myself or what demonstrably works in practice.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
            Our Core Value
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-slate-900 leading-tight max-w-4xl mx-auto">
            I create clarity through real experience –<br/>
            so that people don't make wrong decisions.
          </p>
          <p className="text-sm text-slate-500 mt-6">
            No fake. No theory. Real implementation.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coreValues.map((value) => (
              <Card key={value.title} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stance Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-10">
              Our Stance
            </h2>
            <div className="space-y-3">
              <p className="text-2xl md:text-3xl font-semibold text-slate-800 leading-tight">
                I am not a coach.
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-slate-800 leading-tight">
                I am not a motivator.
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-slate-800 leading-tight">
                I am not a seller of hope.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-emerald-600 leading-tight mt-4">
                I am a filter for reality.
              </p>
            </div>
            <p className="text-lg text-slate-600 mt-8 leading-relaxed">
              My work begins where social media ends and real responsibility starts. Those who work with me don't get promises – they get honest assessments, clear structures and well-founded decisions.
            </p>

            {/* Video/Skyline Image */}
            <div className="mt-12">
              <div className="relative rounded-2xl aspect-video overflow-hidden shadow-lg">
                <Image
                  src="/images/Video.png"
                  alt="Medina Skyline"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-slate-100 border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                Clarity is the first step.
              </h2>
              <p className="text-lg text-slate-600">
                If you want to know whether a business in Saudi Arabia really makes sense for you, let's talk.
              </p>
              <p className="text-sm text-slate-500 mt-4">
                No guarantees. No shortcuts. Real experience.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md px-8 py-3">
                <Link href="/en/inquiry">
                  Book a consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="link" className="text-emerald-700 font-semibold">
                <Link href="/en/blog">
                  Read more
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
