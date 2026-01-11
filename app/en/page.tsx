import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { SuccessStoriesTeaser } from "@/components/success-stories-teaser";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function HomeEn() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Hero locale="en" />
        <About locale="en" />
        <Services locale="en" />
        <SuccessStoriesTeaser locale="en" />
        <Contact locale="en" />
      </div>
      <Footer locale="en" />
    </main>
  );
}

