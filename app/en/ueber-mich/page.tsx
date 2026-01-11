import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { localizeHref } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "About | Aneed Ashraf - Consulting Saudi Arabia",
  description:
    "Learn more about Aneed Ashraf: entrepreneur, consultant and bridge-builder between Germany and Saudi Arabia.",
};

const skills = [
  { name: "International consulting excellence", value: 100 },
  { name: "Hands-on entrepreneurial execution", value: 100 },
  { name: "Cultural bridge competence", value: 100 },
  { name: "Market & authorities know-how (KSA)", value: 100 },
];

const stats = [
  { label: "Years int. experience", value: "15+" },
  { label: "Years in Saudi Arabia", value: "9+" },
  { label: "Managed budget", value: "> €1M" },
  { label: "Realized savings", value: "> €2M" },
];

export default function AboutEnPage() {
  const href = (raw: string) => localizeHref(raw, "en");

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-12 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Column: Intro */}
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <div className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-emerald-700 shadow-sm font-medium">
                Entrepreneur & consultant
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
                Aneed Ashraf
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                Bridge-builder between worlds. Strategic partner for your success in Saudi Arabia.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 text-center md:text-left">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Quote */}
            <div className="lg:w-1/2 relative hidden lg:block">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-md mx-auto italic text-slate-600 leading-relaxed relative">
                <span className="absolute top-4 left-4 text-6xl text-emerald-100 font-serif -z-10">
                  "
                </span>
                Vision 2030 isn’t just a plan — it’s an invitation to shape the future. I help you
                accept that invitation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Skills */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 space-y-8 text-lg text-slate-600 leading-relaxed">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Expertise from two worlds
              </h2>

              <p>
                As an entrepreneur and business consultant, I bring 15+ years of international
                consulting experience and more than 9 years of successful hands-on work in Saudi
                Arabia. This expertise is complemented by a Master’s in Project Management and
                certifications — ensuring structured execution, planning certainty, and professional
                steering of complex projects.
              </p>

              <p>
                Since 2017, I’ve lived and worked in Saudi Arabia. I founded the first German-Saudi
                consulting firm in Medina. My team and I have led numerous projects with a total
                budget exceeding €1 million and advised 15+ companies strategically.
              </p>

              <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-xl my-8">
                <p className="font-medium text-emerald-900 italic">
                  "The results speak for themselves: over €2 million in realized cost savings,
                  significant efficiency gains, and sustainable profit growth for our clients."
                </p>
              </div>

              <p>
                My team and I don’t act as “classic consultants” — we work as strategic partners who
                guide companies, investors, and entrepreneurs safely, efficiently, and sustainably
                through the Saudi market.
              </p>

              {/* Skills Card (Mobile Only) */}
              <div className="lg:hidden mt-8 mb-8">
                <Card className="border-slate-200 shadow-lg bg-slate-900 text-white">
                  <CardContent className="p-6 space-y-6">
                    <h3 className="text-xl font-bold font-serif mb-4">Core competencies</h3>
                    <div className="space-y-4">
                      {skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between text-sm font-medium text-slate-300">
                            <span>{skill.name}</span>
                            <span>{skill.value}%</span>
                          </div>
                          <Progress
                            value={skill.value}
                            className="h-2 bg-slate-700"
                            indicatorClassName="bg-emerald-500"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
                Entrepreneurial background
              </h3>

              <p>
                I’ve been active as an entrepreneur since 2006 and as a business consultant since
                2011. During this time, I supported and successfully completed 100+ projects and
                SME engagements across Germany, Austria, Switzerland, the UK, Malaysia, and
                Singapore.
              </p>

              <p>
                A key focus of my work is building practical, executable structures. I designed and
                led comprehensive incubator and accelerator programs for startups, scale-ups, and
                SMEs — including multi-month programs with 140+ strategic learning modules and 40+
                individual implementation tasks, completed successfully by 50+ companies in the
                German-speaking region.
              </p>
            </div>

            {/* Right Column: Skills & Image */}
            <div className="lg:col-span-5 space-y-12">
              {/* Skills Card (Desktop Only) */}
              <Card className="hidden lg:block border-slate-200 shadow-lg bg-slate-900 text-white">
                <CardContent className="p-8 space-y-8">
                  <h3 className="text-xl font-bold font-serif mb-6">Core competencies</h3>
                  <div className="space-y-6">
                    {skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm font-medium text-slate-300">
                          <span>{skill.name}</span>
                          <span>{skill.value}%</span>
                        </div>
                        <Progress
                          value={skill.value}
                          className="h-2 bg-slate-700"
                          indicatorClassName="bg-emerald-500"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Second Image (Square) */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image src="/aneed-1.jpg" alt="Aneed Ashraf" fill className="object-cover" />
              </div>

              {/* CTA */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Ready to enter the market?</h3>
                <p className="text-slate-600 mb-4">Let’s discuss your vision.</p>
                <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-md">
                  <Link href={href("/anfrage")}>
                    Book a call <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </main>
  );
}

