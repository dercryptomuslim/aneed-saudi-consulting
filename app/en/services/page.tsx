import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Briefcase,
  TrendingUp,
  Store,
  CheckCircle2,
  ArrowDown,
  Users,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { Contact } from "@/components/contact";
import { localizeHref } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Services | Aneed Ashraf - Consulting Saudi Arabia",
  description:
    "Our 6 core capabilities: formation, setup, operations, consulting, investment and franchise in Saudi Arabia.",
};

const quickLinks = [
  { id: "gruendung", title: "Company formation", icon: Building2 },
  { id: "aufbau", title: "Business setup", icon: Users },
  { id: "fuehrung", title: "Operations & management", icon: BarChart3 },
  { id: "beratung", title: "Business consulting", icon: Briefcase },
  { id: "investment", title: "Investment", icon: TrendingUp },
  { id: "franchise", title: "Franchise", icon: Store },
];

export default function ServicesEnPage() {
  const href = (raw: string) => localizeHref(raw, "en");
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-emerald-700 shadow-sm mb-6 font-medium">
            End-to-end support
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            Our services in detail
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            From formation to setup and ongoing operations. We cover the full lifecycle of your
            business in Saudi Arabia.
          </p>

          {/* Quick Links Grid (2x3) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-12">
            {quickLinks.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center text-emerald-600 mb-3 group-hover:scale-110 transition-transform group-hover:bg-emerald-50">
                  <link.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-bold text-slate-700 group-hover:text-emerald-700">
                  {link.title}
                </span>
                <ArrowDown className="h-4 w-4 text-slate-400 mt-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Company formation */}
      <section id="gruendung" className="py-16 md:py-24 border-t border-slate-100 scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-6">
                  <Building2 className="h-7 w-7 text-emerald-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">
                  1. Company formation
                </h2>
                <p className="text-emerald-700 font-medium mb-8 text-lg">
                  Legally, regulatory & tax compliant
                </p>
                <Button
                  asChild
                  className="w-full md:w-auto bg-slate-900 text-white hover:bg-slate-800 shadow-md h-12 px-6 text-base"
                >
                  <Link href={href("/anfrage")}>Request formation</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8 text-slate-600 leading-relaxed text-lg">
              <p>
                The first step to a successful business in Saudi Arabia is a thorough and compliant
                setup. My team and I guide entrepreneurs and investors through every step — from
                the initial idea to official registration.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mt-8 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-6 text-xl">What we handle:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Choosing the right legal structure (based on industry & investor type)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Applying for all required licenses (MISA, commercial licenses, permits)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Coordination with authorities on local and national level</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Commercial registry filings & legal compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Administrative & tax setup (compliance, Zakat)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Support with bank account opening & capitalization structure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Business setup */}
      <section
        id="aufbau"
        className="py-16 md:py-24 border-t border-slate-100 scroll-mt-20 bg-slate-50/50"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-6">
                  <Users className="h-7 w-7 text-emerald-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">
                  2. Business setup
                </h2>
                <p className="text-emerald-700 font-medium mb-8 text-lg">
                  Location, team, processes & marketing
                </p>
                <Button
                  asChild
                  className="w-full md:w-auto bg-slate-900 text-white hover:bg-slate-800 shadow-md h-12 px-6 text-base"
                >
                  <Link href={href("/anfrage")}>Discuss your setup</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8 text-slate-600 leading-relaxed text-lg">
              <p>
                Formation is only the beginning — your business must be built physically and
                operationally. My team and I handle the full implementation so you can launch
                smoothly.
              </p>

              <div className="bg-white border border-slate-200 rounded-xl p-8 mt-8 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-6 text-xl">Operational execution:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Location selection & setup (planning, fit-out, infrastructure)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Recruiting (from scheduling to hiring)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Product & service design (e.g., pricing, quality standards)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Marketing & launch planning (branding, promotion)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Building operational processes for smooth day-to-day execution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Operations & management */}
      <section
        id="fuehrung"
        className="py-16 md:py-24 border-t border-slate-100 scroll-mt-20"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-6">
                  <BarChart3 className="h-7 w-7 text-emerald-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">
                  3. Operations & management
                </h2>
                <p className="text-emerald-700 font-medium mb-8 text-lg">
                  Operations, finance & controlling
                </p>
                <Button
                  asChild
                  className="w-full md:w-auto bg-slate-900 text-white hover:bg-slate-800 shadow-md h-12 px-6 text-base"
                >
                  <Link href={href("/anfrage")}>Request management</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8 text-slate-600 leading-relaxed text-lg">
              <p>
                After formation and setup comes ongoing operations — often the biggest challenge for
                entrepreneurs abroad. We can manage and control your business, so you can focus on
                strategic decisions.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mt-8 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-6 text-xl">Ongoing management:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Business operations (organization, process control, quality management)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Financial management (budget, bookkeeping, costs, Zakat/tax)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Team leadership (training, motivation, performance control)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Profitability optimization (KPI monitoring, performance)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Support for expansions or new locations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Business consulting */}
      <section
        id="beratung"
        className="py-16 md:py-24 border-t border-slate-100 scroll-mt-20 bg-slate-50/50"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-6">
                  <Briefcase className="h-7 w-7 text-emerald-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">
                  4. Business consulting
                </h2>
                <p className="text-emerald-700 font-medium mb-8 text-lg">Strategy & optimization</p>
                <Button
                  asChild
                  className="w-full md:w-auto bg-slate-900 text-white hover:bg-slate-800 shadow-md h-12 px-6 text-base"
                >
                  <Link href={href("/anfrage")}>Book a strategy call</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8 text-slate-600 leading-relaxed text-lg">
              <p>
                For Saudi and international companies, we provide strategic and operational
                consulting. We analyze business models, identify bottlenecks, and develop tailored
                strategies.
              </p>

              <div className="bg-white border border-slate-200 rounded-xl p-8 mt-8 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-6 text-xl">Focus areas:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Strategic growth planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Market entry & expansion strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Restructuring & process optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Cost & profitability analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Support for partnerships & joint ventures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Investment */}
      <section
        id="investment"
        className="py-16 md:py-24 border-t border-slate-100 bg-slate-50/50 scroll-mt-20"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-6">
                  <TrendingUp className="h-7 w-7 text-emerald-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">
                  5. Investment
                </h2>
                <p className="text-emerald-700 font-medium mb-8 text-lg">Ready-to-launch concepts</p>
                <Button
                  asChild
                  className="w-full md:w-auto bg-slate-900 text-white hover:bg-slate-800 shadow-md h-12 px-6 text-base"
                >
                  <Link href={href("/anfrage")}>Explore opportunities</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8 text-slate-600 leading-relaxed text-lg">
              <p>
                We develop our own market-ready concepts in selected industries. They’re thoroughly
                analyzed, financially modeled, and operationally prepared for investors.
              </p>

              <div className="bg-white border border-slate-200 rounded-xl p-8 mt-8 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-6 text-xl">Your advantages:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Detailed business & financial plans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Transparent cost & revenue models</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Clearly defined roles & participation structures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Professional implementation & operational support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Direct access to the Saudi market</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Franchise */}
      <section id="franchise" className="py-16 md:py-24 border-t border-slate-100 scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-6">
                  <Store className="h-7 w-7 text-emerald-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">
                  6. Franchise in Saudi Arabia
                </h2>
                <p className="text-emerald-700 font-medium mb-8 text-lg">Expansion & system build</p>
                <Button
                  asChild
                  className="w-full md:w-auto bg-slate-900 text-white hover:bg-slate-800 shadow-md h-12 px-6 text-base"
                >
                  <Link href={href("/anfrage")}>Discuss franchise</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8 text-slate-600 leading-relaxed text-lg">
              <p>
                I support entrepreneurs and investors in successfully launching franchise models in
                Saudi Arabia — from strategic planning to operational expansion.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mt-8 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-6 text-xl">Franchise services:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Analysis of existing concepts for the KSA market</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Advisory on legal form, licenses & contracts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Location selection, setup & partner selection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Implementation of operational processes & standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Training for franchisees & staff</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Ongoing support & monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <div id="kontakt-form">
        <Contact locale="en" />
      </div>

      <Footer locale="en" />
    </main>
  );
}

