import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { localizeHref } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Thank you for your booking | Aneed Ashraf",
  description: "Thanks for booking. You'll receive confirmation details shortly for your consultation call.",
  alternates: {
    canonical: "/en/thankyou",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Thank you for your booking | Aneed Ashraf",
    description: "Thanks for booking. You'll receive confirmation details shortly.",
    url: "https://www.aneedashraf.de/en/thankyou",
    siteName: "Aneed Ashraf",
    locale: "en_US",
    type: "website",
  },
};

export default function ThankYouPageEn() {
  const href = (raw: string) => localizeHref(raw, "en");

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <section className="flex-1 pt-28 pb-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-2xl mx-auto border border-slate-200 bg-white shadow-xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100">
                  <CheckCircle2 className="h-7 w-7 text-emerald-700" />
                </div>

                <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3">
                  Thank you for your booking!
                </h1>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl">
                  We’ve received your appointment booking. You’ll get a confirmation email shortly
                  with all details (including the Google Meet link).
                </p>

                <div className="w-full max-w-xl rounded-xl border border-slate-200 bg-slate-50 p-6 text-left">
                  <h2 className="text-slate-900 font-bold mb-3">Next steps</h2>
                  <ul className="space-y-2 text-slate-600">
                    <li>- Please check your inbox (and spam/promotions).</li>
                    <li>- Prepare your key questions — we’ll go straight into execution.</li>
                    <li>
                      - If you didn’t receive the confirmation, email{" "}
                      <a className="text-emerald-700 hover:underline" href="mailto:info@oasisgate.de">
                        info@oasisgate.de
                      </a>.
                    </li>
                  </ul>
                </div>

                <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
                  <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white">
                    <Link href={href("/")}>
                      Back to home <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-slate-200">
                    <Link href={href("/services")}>View services</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer locale="en" />
    </main>
  );
}

