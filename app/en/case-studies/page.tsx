import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Building2,
  TrendingUp,
  MapPin,
  Landmark,
  ArrowRight,
  CheckCircle2,
  Target,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { localizeHref } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Case Studies | Aneed Ashraf - Consulting Saudi Arabia",
  description:
    "Real case studies from Saudi Arabia: hospitality, expansion, restructuring and cultural projects.",
};

const caseStudies = [
  {
    id: "gastronomie-projekt",
    title: "Hospitality project in Saudi Arabia",
    category: "Operational execution",
    icon: Building2,
    image: "/laveu-logo.jpg",
    summary:
      "Turn-key execution of a hospitality concept with a fixed budget and a predefined location.",
    stats: ["€150k–€200k budget", "4 months build time", "Turn-key handover"],
    challenge: (
      <>
        The client approached me with a clearly defined budget of approximately €150,000–€200,000 to
        implement a hospitality project in Saudi Arabia.
        <br />
        <br />
        The constraints were clear: the location and construction company were already selected and
        could not be chosen by us. Our job was not “theory” — it was full operational execution
        under real conditions.
        <br />
        <br />
        After successful negotiations on framework conditions and responsibilities, my team and I
        took over the complete structuring, coordination, and delivery of the project.
        <br />
        <br />
        <strong>Location:</strong>{" "}
        <a
          href="https://maps.app.goo.gl/9W1HmihW438mBe1s5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 hover:underline"
        >
          Khalidiyah, Medina
        </a>
      </>
    ),
    phases: [
      {
        title: "1. Kick-off phase — analysis & foundation",
        description:
          "The focus was clarity, structure, and realistic decisions. We analyzed the project end-to-end and validated feasibility — taking into account the predefined location and existing construction partner.",
        list: [
          "Development of a viable hospitality concept",
          "Adapting the concept to location, target group, and budget",
          "Building the corporate identity (brand, positioning)",
          "Initial design and layout concepts",
          "Alignment with the construction company and local partners",
        ],
        goal:
          "The goal was to avoid wrong decisions early and build a solid foundation for execution.",
      },
      {
        title: "2. Launch phase — execution & build-out",
        description:
          "This phase was pure operations: we didn’t plan on paper — we built, organized, and made decisions.",
        list: [
          "Detailed design and final implementation of the look & feel",
          "Coordination and oversight of construction and remodeling work",
          "On-site steering of the construction phase",
          "Selection, procurement and installation of equipment (e.g. coffee machine, kitchen tech, furnishings)",
          "Building the operational infrastructure",
          "Recruiting and hiring staff",
          "Preparing internal workflows and processes",
        ],
        goal:
          "This phase required daily alignment, fast decisions, and continuous controlling — especially because location and construction company were predefined.",
      },
      {
        title: "3. Final phase — handover & operational readiness",
        description:
          "Focus was quality, functionality and readiness to operate. The goal was not a “finished object” but a functioning business that is ready to run.",
        list: [
          "Finalization of construction and design work",
          "Training and final hiring of staff",
          "Test runs of workflows and technical systems",
          "Quality assurance of all trades",
          "Key handover to the client",
        ],
        goal:
          "The project was delivered in 4 months — from first concept to an operational, ready-to-run business.",
      },
    ],
    result:
      "This project is a blueprint of how we work: no experiments, no theory — structured, real execution under real market conditions in Saudi Arabia.",
  },
  {
    id: "gewinnoptimierung-medina",
    title: "Profit optimization (hospitality, Medina)",
    category: "Restructuring",
    icon: TrendingUp,
    image: "/bakran.jpg",
    summary:
      "Turnaround for a 3-branch chain: revenue was there — profitability was improved sustainably.",
    stats: ["3 branches", "7-figure annual savings", "No quality loss"],
    challenge: (
      <>
        The client contacted me because — despite a mid six-figure annual revenue — he was unhappy
        with his profit.
        <br />
        The company operated three branches in Medina. Revenue existed, but profitability was not
        where it needed to be.
        <br />
        <br />
        The assignment was clear: identify root causes, fix structures, and deliver measurable
        results.
        <br />
        <br />
        <strong>Location:</strong>{" "}
        <a
          href="https://www.google.com/maps/search/Bakran/@24.4541429,39.6157317,14z?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 hover:underline"
        >
          Bakran, Medina
        </a>
      </>
    ),
    phases: [
      {
        title: "1. Analysis phase — transparency over assumptions",
        description:
          "We focused on facts, not opinions. My team and I examined the entire operation in depth.",
        list: [
          "Detailed process analysis across all branches",
          "Wastage analysis (COGS, losses, shrinkage)",
          "Workforce analysis (schedules, productivity, overstaffing)",
          "Cost analysis (fixed, variable, hidden costs)",
          "Recipe and costing analysis",
          "Structured interviews with staff and management",
        ],
        goal:
          "The goal was to make the real profit leaks visible — not symptoms, but root causes.",
      },
      {
        title: "2. Implementation phase — structure over actionism",
        description:
          "Based on the analysis, we developed practical measures and integrated them directly into ongoing operations.",
        list: [
          "Optimization of operational processes",
          "Reduction of COGS and wastage",
          "Adjustments to recipes and costing",
          "More efficient staffing structures and schedules",
          "Clear responsibilities and control mechanisms",
        ],
        goal:
          "Important: measures weren’t just recommended — they were implemented and accompanied operationally.",
      },
      {
        title: "3. Result phase — measurable financial impact",
        description: "The outcome was clear and measurable:",
        list: [
          "The client realized 7-figure annual savings — without quality loss and without revenue decline.",
        ],
        goal:
          "This project shows: high revenue means nothing if the structure is broken. Clear processes, clean costing, and operational control make a business truly profitable.",
      },
    ],
    result:
      "High revenue means nothing if the structure isn’t right. We created profitability through operational excellence.",
  },
  {
    id: "expansion-riyadh",
    title: "Expansion from Yanbu to Riyadh",
    category: "Expansion strategy",
    icon: MapPin,
    image: "/thecoffeefactory.jpg",
    summary:
      "Feasibility study for expanding a successful business into the capital — with risk minimization.",
    stats: ["Riyadh market analysis", "Feasibility study", "Risk minimization"],
    challenge: (
      <>
        The client was already very successful in Yanbu and planned to expand into Riyadh. Despite
        existing success, he didn’t want to decide “by gut” — he wanted a reliable foundation.
        <br />
        <br />
        The assignment: create a comprehensive feasibility study to realistically assess what to
        expect in Riyadh — financially, operationally, and strategically.
        <br />
        <br />
        <strong>Location:</strong>{" "}
        <a
          href="https://maps.app.goo.gl/qzMxwQZHUAtGzeCx8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 hover:underline"
        >
          Yanbu
        </a>
      </>
    ),
    phases: [
      {
        title: "1. Research phase — facts over assumptions",
        description:
          "We conducted a complete market and location analysis. The goal was to highlight opportunities and make risks transparent.",
        list: [
          "Market and competitive analysis for Riyadh",
          "Target group and location assessment",
          "Analysis of local conditions and cost structures",
          "Operational requirements for the new location",
          "Assessment of scalability of the existing business model",
        ],
        goal: "This phase formed the basis for all further decisions.",
      },
      {
        title: "2. Planning phase — structured decision base",
        description:
          "Based on the analysis, we created a full feasibility study covering all relevant chapters.",
        list: [
          "Detailed business and location description",
          "Operational concept for the Riyadh location",
          "Full financial plan (investment, cost and revenue structure)",
          "Break-even analysis and scenario planning",
          "Clear recommendations for location selection in Riyadh",
        ],
        goal:
          "We focused on numbers and realistic scenarios — not promises.",
      },
      {
        title: "3. Outcome phase — confidence for the decision",
        description:
          "The client now has a robust basis to plan the Riyadh expansion in a rational, traceable and strategic way.",
        list: [],
        goal:
          "This project shows: success in one city doesn’t guarantee success in another. A solid feasibility study creates clarity before investing capital, time and energy.",
      },
    ],
    result:
      "A solid feasibility study creates clarity — before capital, time and energy are invested.",
  },
  {
    id: "museum-prophet-moschee",
    title: "Prophet’s Mosque museum expansion",
    category: "Culture & strategy",
    icon: Landmark,
    image: "/masjidnabway.jpg",
    summary:
      "Developing sustainable revenue models for long-term operation without state funding.",
    stats: ["Sustainable models", "Cultural project", "Revenue growth"],
    challenge: (
      <>
        The museum of the Prophet’s Mosque was unsure how to secure long-term operations without
        state funding.
        <br />
        <br />
        The client approached us to develop viable income models and ensure the museum’s economic
        sustainability.
        <br />
        <br />
        <strong>Location:</strong>{" "}
        <a
          href="https://maps.app.goo.gl/15hSrUpj2mNgUVzm9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 hover:underline"
        >
          Medina
        </a>
      </>
    ),
    phases: [
      {
        title: "1. Analysis phase — identifying revenue potential",
        description:
          "We focused on realistic revenue streams and operational feasibility. Our work included:",
        list: [
          "Analysis of existing and potential revenue streams",
          "Evaluation of visitor numbers and ticket structures",
          "Assessment of merchandising, events, sponsorships and partnerships",
          "Benchmarking comparable institutions",
        ],
        goal:
          "The goal was to make all realistic options transparent to support sound decision-making.",
      },
      {
        title: "2. Concept phase — developing strategies",
        description:
          "Based on the analysis, we developed practical concepts to sustainably secure the museum’s operation:",
        list: [
          "Designing revenue plans from tickets and admissions",
          "Merchandising and shop concepts",
          "Planning special exhibitions, events and collaborations",
          "Recommendations for partnerships and sponsorship models",
        ],
        goal:
          "The concepts were not only created theoretically — they were validated for feasibility and partly implemented.",
      },
      {
        title: "3. Outcome phase — sustainable operational foundation",
        description:
          "Our work enabled the museum to leverage new income streams and establish a foundation for long-term operation without state funding.",
        list: [],
        goal:
          "This project shows: even in cultural and religious institutions, structure, analysis and operational execution matter. Only then do concepts work in reality — not just on paper.",
      },
    ],
    result:
      "Even in cultural and religious institutions, structure, analysis and operational execution matter. That’s how concepts work in reality — not just on paper.",
  },
];

export default function CaseStudiesEnPage() {
  const href = (raw: string) => localizeHref(raw, "en");

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-emerald-700 shadow-sm mb-6 font-medium">
            Case Studies
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            Real results
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Theory is good — execution is better. Here’s how we solved real challenges in Saudi
            Arabia.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16 space-y-16 md:space-y-24">
        {caseStudies.map((study) => (
          <section key={study.id} id={study.id} className="scroll-mt-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Header & Stats */}
              <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
                <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold uppercase tracking-wider text-xs">
                  <study.icon className="h-4 w-4" />
                  {study.category}
                </div>

                <h2 className="text-3xl font-serif font-bold text-slate-900 leading-tight">
                  {study.title}
                </h2>

                {/* Logo / Image for Case Study (if available) */}
                {/* @ts-ignore - Dynamic property check */}
                {study.image && (
                  <div
                    className={`relative w-full ${
                      study.id === "gewinnoptimierung-medina" ||
                      study.id === "expansion-riyadh" ||
                      study.id === "museum-prophet-moschee"
                        ? "aspect-square max-w-[250px] mx-auto"
                        : "h-48"
                    } rounded-xl overflow-hidden border border-slate-100 shadow-sm mb-6`}
                  >
                    <Image
                      /* @ts-ignore */
                      src={study.image}
                      /* @ts-ignore */
                      alt={`${study.title} logo`}
                      fill
                      className={`${
                        study.id === "gewinnoptimierung-medina" ||
                        study.id === "expansion-riyadh" ||
                        study.id === "museum-prophet-moschee"
                          ? "object-contain p-2"
                          : "object-cover"
                      }`}
                    />
                  </div>
                )}

                <p className="text-slate-600 text-lg leading-relaxed">{study.summary}</p>

                <div className="pt-6 border-t border-slate-100 space-y-3">
                  {study.stats.map((stat) => (
                    <div key={stat} className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>{stat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white shadow-md">
                    <Link href={href("/anfrage")}>Request a similar project</Link>
                  </Button>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:col-span-8">
                <Card className="border border-slate-200 shadow-sm bg-white overflow-hidden">
                  <div className="p-6 md:p-10 space-y-8 md:space-y-10">
                    {/* Challenge Section */}
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                      <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-3">
                        <Target className="h-5 w-5 text-emerald-600" />
                        Context & challenge
                      </h3>
                      <div className="text-slate-700 leading-relaxed">{study.challenge}</div>
                    </div>

                    {/* Phases Accordion */}
                    <div>
                      <h3 className="text-xl font-serif font-bold text-slate-900 mb-6">
                        Project timeline
                      </h3>
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full border border-slate-200 rounded-lg overflow-hidden bg-slate-50/50"
                      >
                        {study.phases.map((phase, i) => (
                          <AccordionItem
                            key={i}
                            value={`item-${i}`}
                            className="border-b border-slate-200 last:border-0 px-4 bg-white"
                          >
                            <AccordionTrigger className="hover:no-underline py-5 text-left">
                              <span className="text-base font-bold text-slate-900">{phase.title}</span>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="pb-6 pt-2 space-y-4 text-slate-600 leading-relaxed">
                                <p>{phase.description}</p>

                                {phase.list.length > 0 && (
                                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                    <p className="font-semibold text-slate-900 mb-2 text-sm">
                                      Our work:
                                    </p>
                                    <ul className="space-y-2">
                                      {phase.list.map((item, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm">
                                          <span className="block w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {phase.goal && (
                                  <div className="pt-2 text-emerald-700 font-medium italic border-t border-slate-100 mt-4">
                                    {phase.goal}
                                  </div>
                                )}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>

                    {/* Result */}
                    <div className="bg-emerald-50/50 rounded-xl p-6 border border-emerald-100/50">
                      <h3 className="text-lg font-bold text-emerald-900 mb-2">Outcome</h3>
                      <p className="text-emerald-800/80 font-medium italic leading-relaxed">
                        "{study.result}"
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
            Shall we write your success story?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Every project is unique. Let’s find out how we can realize your vision in Saudi Arabia.
          </p>
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full bg-slate-900 px-8 text-lg font-medium text-white hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href={href("/anfrage")}>
              Start now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer locale="en" />
    </main>
  );
}

