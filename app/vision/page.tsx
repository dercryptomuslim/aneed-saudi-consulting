import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1c] text-white overflow-hidden relative">
      <Navbar />

      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/vision-bg.png"
          alt="Saudi Vision Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Optional: Overlay für bessere Lesbarkeit von Texten, falls nötig */}
        {/* <div className="absolute inset-0 bg-black/30" /> */}
      </div>

      {/* Content Overlay (Invisible Buttons on top of the image UI if needed) */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-20 px-4">
        
        {/* Hier könnten wir interaktive Elemente über das Bild legen, 
            z.B. genau dort wo im Bild die "Buttons" sind. 
            Fürs erste lasse ich nur einen zentralen CTA da. */}
        
        <div className="absolute bottom-20 md:bottom-32">
          <Button asChild className="bg-emerald-600/90 hover:bg-emerald-600 text-white rounded-full px-8 py-6 text-lg shadow-[0_0_30px_rgba(16,185,129,0.4)] backdrop-blur-sm border border-white/10 transition-all hover:scale-105">
            <Link href="/check">Start Your Journey</Link>
          </Button>
        </div>

      </section>
    </main>
  );
}
