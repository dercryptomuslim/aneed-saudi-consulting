import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  TrendingUp,
  CheckCircle2,
  ArrowDown,
  Route,
  Building2,
  Users,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { Contact } from "@/components/contact";
import { localizeHref } from "@/lib/i18n";
import { BusinessJourney } from "@/components/business-journey";

export const metadata: Metadata = {
  title: "Services | Company Formation & Consulting Saudi Arabia",
  description: "Three pillars for your business: Business Setup & Market Management (formation, setup, management), investment opportunities, and strategic business consulting in Saudi Arabia.",
  alternates: {
    canonical: "/en/services",
    languages: {
      "de": "/services",
      "en": "/en/services",
    },
  },
  keywords: ["Services Saudi Arabia", "Company Formation", "MISA License", "Franchise Saudi Arabia", "Investment Saudi Arabia", "Business Consulting"],
  openGraph: {
    title: "Services | Company Formation Saudi Arabia",
    description: "Three pillars for your business: Business Setup & Market Management, investment opportunities, and strategic business consulting in Saudi Arabia.",
    url: "https://www.aneedashraf.de/en/services",
    siteName: "Aneed Ashraf",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Company Formation Saudi Arabia",
    description: "Three pillars for your business: Business Setup & Market Management, investment opportunities, and strategic business consulting.",
  },
};

const quickLinks = [
  { id: "reise-zum-business", title: "Business Setup & Market Management", icon: Route },
  { id: "investment", title: "Investment", icon: TrendingUp },
  { id: "beratung", title: "Business Consulting", icon: Briefcase },
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
            Our Services
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Three pillars for your business in Saudi Arabia: Business Setup & Market Management, investment opportunities, and strategic business consulting.
          </p>

          {/* Quick Links Grid (3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-12">
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

      {/* Pillar 1: Business Setup & Market Management */}
      <BusinessJourney locale="en" />

      {/* Pillar 2: Investment */}
      <section
        id="investment"
        className="py-16 md:py-24 border-t border-slate-100 bg-slate-50/50 scroll-mt-20"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700 shadow-sm mb-4 font-medium">
                  Pillar 2
                </div>
                <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-6">
                  <TrendingUp className="h-7 w-7 text-emerald-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">
                  Investment
                </h2>
                <p className="text-emerald-700 font-medium mb-8 text-lg">Ready-to-launch concepts</p>
                <Button
                  asChild
                  className="w-full md:w-auto bg-slate-900 text-white hover:bg-slate-800 shadow-md h-12 px-6 text-base"
                >
                  <Link href={href("/investieren-in-medina")}>Explore opportunities</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8 text-slate-600 leading-relaxed text-lg">
              <p>
                We develop our own market-ready concepts in selected industries. Each concept is thoroughly analysed, financially modelled, and operationally prepared for investors.
              </p>

              <div className="bg-white border border-slate-200 rounded-xl p-8 mt-8 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-6 text-xl">Your advantages:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Comprehensive business and financial plans</span>
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
                    <span>Professional implementation and ongoing operational support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Direct, practical access to the Saudi market</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Business Consulting */}
      <section
        id="beratung"
        className="py-16 md:py-24 border-t border-slate-100 scroll-mt-20 bg-white"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700 shadow-sm mb-4 font-medium">
                  Pillar 3
                </div>
                <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-6">
                  <Briefcase className="h-7 w-7 text-emerald-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">
                  Business Consulting
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
                For Saudi and international companies, we deliver strategic and operational consulting. We analyse business models, identify bottlenecks, and develop tailored, execution-ready strategies.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mt-8 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-6 text-xl">Focus areas:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Strategic growth planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Market entry and expansion strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Restructuring and process optimisation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Cost control and profitability analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Support for partnerships and joint ventures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OLD SECTIONS - REMOVED */}
      {/* 1. Company formation */}
      <section id="gruendung" className="py-16 md:py-24 border-t border-slate-100 scroll-mt-20 hidden">
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
                The foundation of a successful business in Saudi Arabia is a thorough, compliant setup. My team and I guide entrepreneurs and investors through every stage — from the initial concept to official registration and operational readiness.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mt-8 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-6 text-xl">What we handle:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Selecting the appropriate legal structure based on your industry and investor profile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Applying for all required licences, including MISA, commercial licences, and sector-specific permits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Coordinating with relevant authorities at both local and national levels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Managing commercial registry filings and ensuring full legal compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Establishing administrative, tax, and Zakat compliance frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Supporting bank account opening and structuring capitalisation effectively</span>
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
        className="py-16 md:py-24 border-t border-slate-100 scroll-mt-20 bg-slate-50/50 hidden"
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
                Formation is only the beginning — your business must be built both physically and operationally. My team and I manage the full implementation, ensuring a smooth and controlled market entry.
              </p>

              <div className="bg-white border border-slate-200 rounded-xl p-8 mt-8 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-6 text-xl">Operational execution:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Location selection and setup, including planning, fit-out, and infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Recruitment and workforce structuring, from scheduling to hiring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Product and service design, including pricing models and quality standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Marketing and launch planning, covering branding and market entry promotion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Development of operational processes to ensure efficient day-to-day execution</span>
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
        className="py-16 md:py-24 border-t border-slate-100 scroll-mt-20 hidden"
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
                After formation and setup comes ongoing operations — often the greatest challenge for entrepreneurs operating abroad. We manage and oversee your business, allowing you to focus on strategic direction and growth.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mt-8 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-6 text-xl">Ongoing management:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Day-to-day business operations, including organisation, process control, and quality management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Financial management, covering budgeting, bookkeeping, cost control, and Zakat/tax compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Team leadership, including training, motivation, and performance management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Profitability optimisation through KPI tracking and performance analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Strategic support for expansion projects or the launch of new locations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Business consulting - MOVED TO PILLAR 3 */}
      <section
        id="beratung-old"
        className="py-16 md:py-24 border-t border-slate-100 scroll-mt-20 bg-slate-50/50 hidden"
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
                For Saudi and international companies, we deliver strategic and operational consulting. We analyse business models, identify bottlenecks, and develop tailored, execution-ready strategies.
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
                    <span>Market entry and expansion strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Restructuring and process optimisation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Cost control and profitability analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Support for partnerships and joint ventures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Investment - MOVED TO PILLAR 2 */}
      <section
        id="investment-old"
        className="py-16 md:py-24 border-t border-slate-100 bg-slate-50/50 scroll-mt-20 hidden"
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
                We develop our own market-ready concepts in selected industries. Each concept is thoroughly analysed, financially modelled, and operationally prepared for investors.
              </p>

              <div className="bg-white border border-slate-200 rounded-xl p-8 mt-8 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-6 text-xl">Your advantages:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Comprehensive business and financial plans</span>
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
                    <span>Professional implementation and ongoing operational support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />{" "}
                    <span>Direct, practical access to the Saudi market</span>
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

