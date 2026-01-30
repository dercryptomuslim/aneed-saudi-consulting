import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Oasis Gate LLC - Consulting Saudi Arabia",
  description: "Terms and conditions of Oasis Gate LLC for consulting services related to company formation in Saudi Arabia.",
  alternates: {
    canonical: "/en/terms",
    languages: {
      "de": "/agb",
      "en": "/en/terms",
    },
  },
  openGraph: {
    title: "Terms & Conditions | Oasis Gate LLC",
    description: "Terms and conditions of Oasis Gate LLC for consulting services related to company formation in Saudi Arabia.",
    url: "https://www.aneedashraf.de/en/terms",
    siteName: "Aneed Ashraf",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions | Oasis Gate LLC",
    description: "Terms and conditions of Oasis Gate LLC for consulting services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsEnPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col scroll-smooth">
      <Navbar />

      <section className="relative pt-32 pb-16 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Terms & Conditions
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="prose prose-slate lg:prose-lg mx-auto">
            
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Scope</h2>
            <p className="text-slate-600 mb-4">
              These Terms & Conditions apply to all contracts between <strong>Oasis Gate LLC</strong>, Medina,
              Saudi Arabia (the "Provider"), and the customers (the "Customer") concluded via the website{" "}
              <strong>aneedashraf.de</strong> and via the booking tool <strong>TidyCal</strong>.
            </p>
            <p className="text-slate-600 mb-4">They apply in particular to:</p>
            <ul className="list-disc pl-5 mb-4 text-slate-600 space-y-2">
              <li>Consulting services</li>
              <li>Online consulting meetings</li>
              <li>
                Strategic initial and expert consultations regarding company formation and business operations in Saudi
                Arabia
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Services</h2>
            <p className="text-slate-600 mb-4">
              Oasis Gate LLC provides <strong>entrepreneurial and strategic consulting services</strong> in the areas
              of:
            </p>
            <ul className="list-disc pl-5 mb-4 text-slate-600 space-y-2">
              <li>Company formation in Saudi Arabia</li>
              <li>Market entry and expansion</li>
              <li>Structuring, strategy and feasibility evaluation</li>
            </ul>
            <p className="text-slate-600 mb-4">
              The consultation is provided <strong>exclusively as a service</strong> (Dienstleistung), not as a
              success-based or work contract. No specific economic or legal outcome is owed. The consultation is
              provided to the best of our knowledge and belief; however, the Customer remains solely responsible for
              all decisions and actions.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Booking & Fees</h2>
            <ol className="list-decimal pl-5 mb-4 text-slate-600 space-y-2">
              <li>
                Appointments are booked exclusively online via{" "}
                <a
                  href="https://tidycal.com/medinabusiness/60-minute-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:underline"
                >
                  https://tidycal.com/medinabusiness/60-minute-meeting
                </a>
                .
              </li>
              <li>
                The price for a consultation is <strong>€249 (gross) per 60 minutes</strong>.
              </li>
              <li>Payment is due <strong>in advance</strong> and is a prerequisite for holding the appointment.</li>
              <li>
                The consultation takes place online via <strong>Google Meet</strong>. The access link will be provided
                in due time.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Important prerequisites for consultations on company formation in Saudi Arabia</h2>
            <ol className="list-decimal pl-5 mb-4 text-slate-600 space-y-2">
              <li>
                This format is aimed only at persons who are pursuing company formation or investment in Saudi Arabia{" "}
                <strong>realistically and in compliance with applicable law</strong>.
              </li>
              <li>
                For regular company formation, typical prerequisites include:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>An existing company <strong>outside Saudi Arabia</strong></li>
                  <li>Minimum existence: <strong>12 months</strong></li>
                  <li>Registration in the commercial register</li>
                  <li>
                    Verifiable balance sheet value of approx. <strong>€75,000–€100,000 or more</strong>
                  </li>
                </ul>
              </li>
              <li>
                Company formation in Saudi Arabia is <strong>capital-intensive</strong>. For example:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Hospitality businesses often require an investment volume of approx.{" "}
                    <strong>€120,000–€250,000</strong>, depending on concept, location and license.
                  </li>
                </ul>
              </li>
              <li>
                The consultation is <strong>not</strong> intended for finding circumvention solutions, substitute
                capital or unrealistic models.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">5. Customer responsibility & no refunds</h2>
            <ol className="list-decimal pl-5 mb-4 text-slate-600 space-y-2">
              <li>
                If the Customer books an appointment despite not meeting the stated prerequisites, they do so at{" "}
                <strong>their own responsibility</strong>.
              </li>
              <li>
                <strong>No refund</strong> of the consultation fee will be granted, regardless of whether:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>the Customer meets all prerequisites</li>
                  <li>the Customer is satisfied with the outcome or perceived benefit</li>
                </ul>
              </li>
              <li>
                The consultation does not guarantee economic success, approvals, license issuance, or a concrete
                implementation in Saudi Arabia. The Customer bears the full risk for all decisions and actions
                resulting from the consultation.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">6. Disclaimer</h2>
            <ol className="list-decimal pl-5 mb-4 text-slate-600 space-y-2">
              <li>
                Oasis Gate LLC assumes <strong>no liability</strong> for:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>economic outcomes</li>
                  <li>entrepreneurial decisions made by the Customer</li>
                  <li>
                    changes in legal, regulatory or tax requirements in Saudi Arabia that occur after the consultation
                  </li>
                  <li>approvals, license issuance or decisions of authorities</li>
                </ul>
              </li>
              <li>
                The consultation does <strong>not</strong> replace legal, tax or official advice by licensed
                professionals or authorities.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">7. Cancellations & no-shows</h2>
            <ol className="list-decimal pl-5 mb-4 text-slate-600 space-y-2">
              <li>
                If an appointment is not attended or is cancelled at short notice, there is <strong>no entitlement</strong>{" "}
                to a replacement or refund.
              </li>
              <li>Technical issues on the Customer's side (internet, hardware, access problems) are borne by the Customer.</li>
            </ol>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">8. Copyright & confidentiality</h2>
            <ol className="list-decimal pl-5 mb-4 text-slate-600 space-y-2">
              <li>All materials provided during the consultation are subject to copyright.</li>
              <li>Sharing with third parties is not permitted without explicit consent.</li>
              <li>Oasis Gate LLC treats all information received during the consultation as confidential.</li>
            </ol>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">9. Final provisions</h2>
            <ol className="list-decimal pl-5 mb-4 text-slate-600 space-y-2">
              <li>
                The law of the <strong>Kingdom of Saudi Arabia</strong> shall apply, unless mandatory legal
                provisions provide otherwise.
              </li>
              <li>
                Should individual provisions of these Terms be invalid, the validity of the remaining provisions
                remains unaffected.
              </li>
            </ol>

            <p className="text-slate-500 text-sm mt-12 border-t border-slate-200 pt-4">
              Last updated: January 2025
            </p>

          </div>
        </div>
      </section>

      <Footer locale="en" />
    </main>
  );
}
