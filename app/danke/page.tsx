import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danke | Aneed Ashraf",
  description: "Danke für deine Buchung. Wir melden uns in Kürze mit den Details.",
};

export default function DankePage() {
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
                  Danke für deine Buchung!
                </h1>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl">
                  Wir haben deine Terminbuchung erhalten. Du bekommst gleich eine Bestätigung per E‑Mail
                  mit allen Details (inkl. Google‑Meet Link).
                </p>

                <div className="w-full max-w-xl rounded-xl border border-slate-200 bg-slate-50 p-6 text-left">
                  <h2 className="text-slate-900 font-bold mb-3">Nächste Schritte</h2>
                  <ul className="space-y-2 text-slate-600">
                    <li>
                      - Checke bitte deinen Posteingang (und ggf. Spam/Promotions).
                    </li>
                    <li>
                      - Halte die wichtigsten Infos/Fragen bereit – wir gehen direkt in die Umsetzung.
                    </li>
                    <li>
                      - Falls du keine Bestätigung erhalten hast, schreibe uns an{" "}
                      <a className="text-emerald-700 hover:underline" href="mailto:info@oasisgate.de">
                        info@oasisgate.de
                      </a>.
                    </li>
                  </ul>
                </div>

                <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
                  <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white">
                    <Link href="/">
                      Zur Startseite <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-slate-200">
                    <Link href="/services">Leistungen ansehen</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}

