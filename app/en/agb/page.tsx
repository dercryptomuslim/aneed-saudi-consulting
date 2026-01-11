import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms (AGB) | Oasis Gate LLC",
  description: "Terms and conditions (AGB) of Oasis Gate LLC.",
};

export default function TermsEnPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col scroll-smooth">
      <Navbar />

      <section className="relative pt-32 pb-16 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Terms &amp; Conditions (AGB)
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Convenience English version. In case of discrepancies, the German version prevails.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="prose prose-slate lg:prose-lg mx-auto">
            <h2>General Terms &amp; Conditions (AGB) – Oasis Gate LLC</h2>

            <h3>1. Scope</h3>
            <p>
              These Terms &amp; Conditions apply to all contracts between <strong>Oasis Gate LLC</strong>, Medina,
              Saudi Arabia (the “Provider”), and the customers (the “Customer”) concluded via the website{" "}
              <strong>aneedashraf.de</strong> and via the booking tool <strong>TidyCal</strong>.
            </p>
            <p>They apply in particular to:</p>
            <ul>
              <li>Consulting services</li>
              <li>Online consulting meetings</li>
              <li>
                Strategic initial and expert consultations regarding company formation and business operations in Saudi
                Arabia
              </li>
            </ul>

            <h3>2. Services</h3>
            <p>
              Oasis Gate LLC provides <strong>entrepreneurial and strategic consulting services</strong> in the areas
              of:
            </p>
            <ul>
              <li>Company formation in Saudi Arabia</li>
              <li>Market entry and expansion</li>
              <li>Structuring, strategy and feasibility evaluation</li>
            </ul>
            <p>
              The consultation is provided <strong>exclusively as a service</strong> (Dienstleistung), not as a
              success-based or work contract. No specific economic or legal outcome is owed. The consultation is
              provided to the best of our knowledge and belief; however, the Customer remains solely responsible for
              all decisions and actions.
            </p>

            <h3>3. Booking &amp; Fees</h3>
            <ol>
              <li>
                Appointments are booked exclusively online via{" "}
                <a
                  href="https://tidycal.com/medinabusiness/60-minute-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
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

            <h3>4. Important prerequisites for consultations on company formation in Saudi Arabia</h3>
            <ol>
              <li>
                This format is aimed only at persons who are pursuing company formation or investment in Saudi Arabia{" "}
                <strong>realistically and in compliance with applicable law</strong>.
              </li>
              <li>
                For regular company formation, typical prerequisites include:
                <ul>
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
                <ul>
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

            <h3>5. Customer responsibility &amp; no refunds</h3>
            <ol>
              <li>
                If the Customer books an appointment despite not meeting the stated prerequisites, they do so at{" "}
                <strong>their own responsibility</strong>.
              </li>
              <li>
                <strong>No refund</strong> of the consultation fee will be granted, regardless of whether:
                <ul>
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

            <h3>6. Disclaimer</h3>
            <ol>
              <li>
                Oasis Gate LLC assumes <strong>no liability</strong> for:
                <ul>
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

            <h3>7. Cancellations &amp; no-shows</h3>
            <ol>
              <li>
                If an appointment is not attended or is cancelled at short notice, there is <strong>no entitlement</strong>{" "}
                to a replacement or refund.
              </li>
              <li>Technical issues on the Customer’s side (internet, hardware, access problems) are borne by the Customer.</li>
            </ol>

            <h3>8. Copyright &amp; confidentiality</h3>
            <ol>
              <li>All materials provided during the consultation are subject to copyright.</li>
              <li>Sharing with third parties is not permitted without explicit consent.</li>
              <li>Oasis Gate LLC treats all information received during the consultation as confidential.</li>
            </ol>

            <h3>9. Final provisions</h3>
            <ol>
              <li>
                The law of the <strong>Federal Republic of Germany</strong> shall apply, unless mandatory legal
                provisions provide otherwise.
              </li>
              <li>
                Should individual provisions of these Terms be invalid, the validity of the remaining provisions
                remains unaffected.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </main>
  );
}

