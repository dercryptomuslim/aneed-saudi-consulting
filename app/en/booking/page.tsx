import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function BookingPageEn() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <div className="flex-grow pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6 md:p-8 text-center border-b border-slate-100">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Book your consultation
            </h1>
            <p className="text-slate-600">
              Choose a suitable time for your expert consultation.
            </p>
          </div>
          <div className="p-4 md:p-8 flex justify-center min-h-[600px]">
            <div className="w-full">
              <div className="tidycal-embed" data-path="medinabusiness/60-minute-meeting-en"></div>
              <script src="https://asset-tidycal.b-cdn.net/js/embed.js" async></script>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
