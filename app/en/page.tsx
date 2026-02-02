import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { SuccessStoriesTeaser } from "@/components/success-stories-teaser";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { StatsSection } from "@/components/stats-section";
import { ProcessSteps } from "@/components/process-steps";
import { BlogTeaser } from "@/components/blog-teaser";

export default function HomeEn() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Hero locale="en" />
        <About locale="en" />
        <StatsSection locale="en" />
        <Services locale="en" />
        <ProcessSteps locale="en" />
        <SuccessStoriesTeaser locale="en" />
        <BlogTeaser locale="en" />
        <Contact locale="en" />
      </div>
      <Footer locale="en" />
    </main>
  );
}

