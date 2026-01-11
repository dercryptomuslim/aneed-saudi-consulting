import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ConsultingFunnelLocalized } from "@/components/funnel/funnel-system";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request | Aneed Ashraf",
  description: "Check your options for company formation or consulting in Saudi Arabia.",
};

export default function RequestPageEn() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <section className="relative flex-1 flex flex-col items-center justify-center py-12 md:py-24 overflow-hidden min-h-[85dvh] bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Your path to Saudi Arabia
            </h1>
            <p className="text-lg text-slate-600">
              Find out in 2 minutes which options are possible for you.
            </p>
          </div>

          <ConsultingFunnelLocalized locale="en" />
        </div>
      </section>

      <Footer locale="en" />
    </main>
  );
}

