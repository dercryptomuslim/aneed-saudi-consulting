import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  Building2, 
  Users, 
  GraduationCap,
  Utensils,
  Plane,
  Gamepad2,
  CheckCircle2, 
  ArrowRight, 
  Shield,
  Clock,
  Wallet,
  FileCheck,
  Home,
  AlertTriangle,
  Target,
  Handshake
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Contact } from "@/components/contact";

export const metadata: Metadata = {
  title: "Invest in Medina | Capital Investment Saudi Arabia with MISA License",
  description: "Invest and live in Saudi Arabia: Ready-made business concepts for passive investors. Mudaraba model, MISA license, ROI 3-5 years. No operational responsibility – we handle setup and management.",
  alternates: {
    canonical: "/en/invest-in-medina",
    languages: {
      "de": "/investieren-in-medina",
      "en": "/en/invest-in-medina",
    },
  },
  keywords: [
    "Invest in Medina",
    "Capital investment Saudi Arabia",
    "Investment Saudi Arabia",
    "MISA License Investor",
    "Business concepts Medina",
    "Living in Saudi Arabia",
    "Mudaraba Investment",
    "Passive investment Saudi Arabia",
    "Relocate to Medina investor",
    "ROI Saudi Arabia"
  ],
  openGraph: {
    title: "Invest in Medina | Capital Investment Saudi Arabia",
    description: "Ready-made business concepts for investors: Mudaraba model, MISA license, ROI 3-5 years. Live & invest in Saudi Arabia without operational responsibility.",
    url: "https://aneedashraf.de/en/invest-in-medina",
    siteName: "Aneed Ashraf",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invest in Medina | Capital Investment Saudi Arabia",
    description: "Ready-made business concepts for passive investors. MISA license, ROI 3-5 years.",
  },
};

const focusAreas = [
  { name: "Food & Beverage", icon: Utensils, description: "Gastronomy & Cafés" },
  { name: "Tourism & Hospitality", icon: Plane, description: "Hotels & Services" },
  { name: "Entertainment", icon: Gamepad2, description: "Leisure & Events" },
  { name: "Child Education", icon: GraduationCap, description: "Education & Childcare" },
];

const investorRequirements = [
  { text: "Available investment capital starting from approx. 150,000 EUR", icon: Wallet },
  { text: "Proof that this capital is actually available", icon: FileCheck },
  { text: "Willingness to invest in building a start-up or new brand", icon: Target },
  { text: "Long-term thinking and understanding of real market conditions", icon: Clock },
];

const misaRequirements = [
  "An existing company outside Saudi Arabia (e.g. Germany or EU)",
  "The company has been active for at least 12 months",
  "An official commercial register entry exists",
  "A verifiable balance sheet value between approx. 50,000–100,000 EUR",
];

const livingCosts = [
  { label: "Residence fees", value: "approx. 2,500 EUR / year" },
  { label: "Per person (monthly)", value: "approx. 100 EUR / month" },
  { label: "Family (5 people)", value: "approx. 3,000–4,000 EUR / month" },
];

export default function InvestorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col scroll-smooth">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300 shadow-sm mb-8 font-medium backdrop-blur-sm">
              <TrendingUp className="inline-block h-4 w-4 mr-2 -mt-0.5" />
              Investment & Living in Saudi Arabia
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Become an Investor in Medina
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
              Structured investments without your own concept
            </p>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              You want to invest in Saudi Arabia and live there, but have no business idea, no ready concept, or no desire for operational work?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 rounded-full bg-emerald-600 px-8 text-lg font-medium text-white hover:bg-emerald-500 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                <Link href="/en/inquiry">
                  Submit Inquiry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 rounded-full px-8 text-lg font-medium border-slate-600 text-white hover:bg-white/10 backdrop-blur-sm">
                <Link href="#concepts">
                  Discover Concepts
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
                That's exactly why we offer <span className="font-semibold text-emerald-700">structured, investment-ready business concepts</span> that are already market-tested, economically calculated, and operationally prepared.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-slate-600">
                <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600" /> No theory</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600" /> No generic concepts</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600" /> Real market data</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment-ready Business Concepts */}
      <section id="concepts" className="py-16 md:py-24 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-emerald-700 shadow-sm mb-6 font-medium">
              Investment-Ready Business Concepts
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Invest in Functioning Structures
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our concepts are aimed at investors who want to invest in functioning structures – not ideas on paper. Each concept is designed as a future brand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {focusAreas.map((area) => (
              <Card key={area.name} className="group border-slate-200 bg-white hover:border-emerald-500 hover:shadow-lg transition-all duration-300 cursor-default">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
                    <area.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{area.name}</h3>
                  <p className="text-sm text-slate-500">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 md:p-8 text-center max-w-3xl mx-auto">
            <p className="text-lg text-emerald-900 font-medium">
              The concepts are structured so that you are <span className="font-bold">an investor, not an operator</span>.
            </p>
          </div>

        </div>
      </section>

      {/* Economics & Time Horizon */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-emerald-700 shadow-sm mb-6 font-medium">
                <Clock className="inline-block h-4 w-4 mr-2 -mt-0.5" />
                Economics
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                ROI of 3–5 Years
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Most concepts are designed for a realistic Return on Investment (ROI) of approximately 3–5 years.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                The focus is not on short-term profits, but on <span className="font-semibold text-slate-900">sustainable, marketable business models</span> that can last long-term and be further developed.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-emerald-900 rounded-2xl p-8 md:p-10 text-white shadow-xl">
                <div className="text-6xl md:text-7xl font-bold mb-2">3–5</div>
                <div className="text-2xl font-light text-slate-300 mb-6">Years to ROI</div>
                <div className="space-y-4 text-slate-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span>Sustainable business models</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span>Long-term viability</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span>Scaling potential</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements for Investors */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-emerald-700 shadow-sm mb-6 font-medium">
              Requirements
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Requirements for Investors
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Clear minimum requirements apply for participation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {investorRequirements.map((req, i) => (
              <Card key={i} className="border-slate-200 bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <req.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <p className="text-slate-700 leading-relaxed pt-2">{req.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 max-w-4xl mx-auto flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-900">
              <span className="font-semibold">Important:</span> Proof of capital is necessary to ensure the seriousness, feasibility, and legal viability of the project.
            </p>
          </div>
        </div>
      </section>

      {/* MISA License Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: MISA Info */}
            <div>
              <div className="inline-block rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-emerald-700 shadow-sm mb-6 font-medium">
                <Shield className="inline-block h-4 w-4 mr-2 -mt-0.5" />
                Legal Framework
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                MISA License – Mandatory Requirement
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                A separate MISA license is applied for each investment. This license forms the legal basis for the respective business idea and is mandatory to operate a company in Saudi Arabia in compliance with the law.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <p className="text-red-900 font-medium">
                  <AlertTriangle className="inline-block h-5 w-5 mr-2 -mt-0.5" />
                  Without a MISA license, there is no legal security – neither for the investment, nor for operational business, nor for residence in the country.
                </p>
              </div>
            </div>

            {/* Right: MISA Requirements */}
            <div>
              <Card className="border-slate-200 bg-slate-50 h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Requirements for MISA License</h3>
                  <ul className="space-y-4">
                    {misaRequirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <p className="text-sm text-slate-500 italic">
                      These requirements are not recommendations but part of the regulatory requirements for a legally viable corporate structure.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Participation Structure & Role Distribution */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300 shadow-sm mb-6 font-medium">
                <Handshake className="inline-block h-4 w-4 mr-2 -mt-0.5" />
                Partnership
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Participation Structure & Role Distribution
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                The offered projects are our own developed business concepts. 
                We act as the operational party and take full responsibility for implementation, management, and operations.
              </p>
            </div>

            {/* Mudaraba Concept */}
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 mb-12 text-center">
              <p className="text-lg text-emerald-200 leading-relaxed">
                <span className="font-semibold">Structurally, the model follows the principle of a Mudaraba contract:</span><br />
                One party provides the capital, the other party manages and operates the business.
              </p>
            </div>

            {/* Two Roles Side by Side */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Investor Role */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
                    <Wallet className="h-7 w-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6">Investor Role</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Capital participation in the company</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>No operational responsibility</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>No involvement in day-to-day operations</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Participation in a brand / startup, not in a single business</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-sm text-slate-400 italic">
                      Participation always occurs at the company level and is oriented long-term.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Operational Party Role */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
                    <Users className="h-7 w-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6">Our Role (Operational Party)</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Development and ownership of the concept</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Building and managing the company</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Operational implementation, management and scaling</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Strategic direction and brand development</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-sm text-slate-400 italic">
                      We bear operational responsibility and ensure the company is built and run under real market conditions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Participation Level */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="md:col-span-1 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                <div className="text-5xl font-bold text-white mb-2">up to 30%</div>
                <div className="text-emerald-100 font-medium">Maximum Participation</div>
                <p className="text-emerald-200/80 text-sm mt-4">
                  Depending on investment amount
                </p>
              </div>
              <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-4">Why this structure?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Ensure clear responsibilities</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Preserve operational agility</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Build the brand consistently long-term</span>
                  </li>
                </ul>
                <p className="text-sm text-slate-400 mt-6 italic">
                  Majority and operational control remain with us.
                </p>
              </div>
            </div>

            {/* Important Understanding */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-8">
              <h3 className="text-lg font-bold text-amber-300 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Important Understanding
              </h3>
              <p className="text-slate-200 leading-relaxed mb-6">
                The investor does <span className="font-semibold text-white">not invest in a single business</span>, 
                but in the <span className="font-semibold text-white">building and development of a brand with scaling potential</span>.
              </p>
              <div className="pt-6 border-t border-amber-500/20">
                <p className="text-sm text-slate-300 mb-3">This model is aimed at investors who:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>Want to participate entrepreneurially</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>Want responsibility clearly separated</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>Think long-term and don't seek short-term co-determination</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living in Saudi Arabia */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-emerald-700 shadow-sm mb-6 font-medium">
                <Home className="inline-block h-4 w-4 mr-2 -mt-0.5" />
                Residence & Living
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                Living in Saudi Arabia Through Investment
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                An investment can simultaneously create the foundation for legal residence in Saudi Arabia.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 md:p-10 mb-12">
              <p className="text-lg text-emerald-900 leading-relaxed text-center">
                As an investor, it is possible to <span className="font-bold">be employed through the company</span> and thereby obtain a residence and work permit.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {livingCosts.map((cost) => (
                <Card key={cost.label} className="border-slate-200 bg-slate-50 text-center">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-slate-900 mb-2">{cost.value}</div>
                    <div className="text-slate-600">{cost.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 text-center">
              <p className="text-slate-700">
                <span className="font-semibold">Realistic estimate:</span> For a family of five, you should realistically budget approximately 3,000–4,000 EUR per month to live stably and without restrictions in Saudi Arabia – especially in Medina.
              </p>
              <p className="text-sm text-slate-500 mt-4 italic">
                This estimate is based on real experience, not theoretical assumptions.
              </p>
            </div>

            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6 flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-amber-900">
                Living in Saudi Arabia is possible <span className="font-semibold">as long as the company actively exists and is operated</span>.
              </p>
            </div>

            {/* CTA 2 */}
            <div className="mt-12 bg-slate-900 rounded-2xl p-8 md:p-10 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Is this model right for you?</h3>
              <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                Let's clarify in a personal conversation whether an investment in Saudi Arabia fits your goals.
              </p>
              <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-500 shadow-md h-12 px-8 text-base rounded-full">
                <Link href="/en/inquiry">
                  Request a consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-10 md:py-14 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-emerald-700 shadow-sm mb-6 font-medium">
              Our Commitment
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
              No Dreams. No Shortcuts.
            </h2>
            
            <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm mb-8">
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                We don't sell dreams, shortcuts, or theoretical models.
              </p>
              <p className="text-xl text-slate-700 leading-relaxed font-semibold">
                We create clear, legally secure, and realistic investment structures.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6">
              <p className="text-emerald-900 text-lg">
                Not every investment suits everyone. Our goal is to <span className="font-bold">create clarity before the decision</span> – so no wrong decisions are made.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full border border-slate-200 rounded-xl overflow-hidden">
              <AccordionItem value="item-1" className="border-b border-slate-200 px-6 bg-white">
                <AccordionTrigger className="hover:no-underline py-5 text-left">
                  <span className="text-base font-bold text-slate-900">Do I need my own business ideas?</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pb-6 text-slate-600 leading-relaxed">
                    No. We offer ready, market-tested business concepts. You invest in an already developed concept and don't need to bring your own idea.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-slate-200 px-6 bg-white">
                <AccordionTrigger className="hover:no-underline py-5 text-left">
                  <span className="text-base font-bold text-slate-900">Do I have to be operationally active?</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pb-6 text-slate-600 leading-relaxed">
                    No. The concepts are structured so that you are an investor – not an operator. Operational management is organized separately.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-slate-200 px-6 bg-white">
                <AccordionTrigger className="hover:no-underline py-5 text-left">
                  <span className="text-base font-bold text-slate-900">Can I move to Saudi Arabia with my family?</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pb-6 text-slate-600 leading-relaxed">
                    Yes. As an investor, you can be employed through the company and receive a residence and work permit that can also include your family.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="px-6 bg-white">
                <AccordionTrigger className="hover:no-underline py-5 text-left">
                  <span className="text-base font-bold text-slate-900">What is the minimum investment?</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pb-6 text-slate-600 leading-relaxed">
                    Free investment capital should be available starting from approx. 150,000 EUR. Additionally, formation costs of approx. 10,000 EUR apply for the MISA license.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div id="contact-form">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
