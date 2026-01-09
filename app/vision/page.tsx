import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1c] text-white overflow-hidden relative">
      <Navbar />

      {/* Background City Image (Layer 1) */}
      <div className="absolute inset-0 z-0">
        {/* Hier kommt das Stadtbild hin. Ich nutze vorerst einen Farbverlauf/Platzhalter */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0a0f1c] opacity-80" />
        {/* Grid Overlay für den Tech-Look */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      {/* Main Content Area */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-20 px-4">
        
        {/* Holographic Interface (Layer 3 - vor der Person) */}
        <div className="w-full max-w-6xl aspect-[16/9] relative perspective-[2000px]">
          <div className="relative w-full h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl overflow-hidden transform rotate-x-12 transition-transform duration-700 hover:rotate-x-0">
            
            {/* Fake UI Header inside the Glass Card */}
            <div className="flex justify-between items-center p-6 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs font-mono text-blue-300/80 tracking-widest">SYSTEM: ACTIVE</div>
            </div>

            {/* Content inside the Glass Card */}
            <div className="flex flex-col md:flex-row h-full p-8 md:p-16 items-center">
              
              {/* Left Side: Tech Elements */}
              <div className="w-full md:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  Vision 2030 Ready
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="block text-white drop-shadow-lg">Let's Go</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Beyond Borders</span>
                </h1>
                
                <p className="text-blue-100/70 text-lg max-w-md leading-relaxed">
                  Entdecken Sie Saudi-Arabien als Ihren nächsten Wachstumsmarkt. Wir bauen die digitale Brücke zwischen Ihrer Vision und der Realität vor Ort.
                </p>

                <div className="flex gap-4 pt-4">
                  <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 py-6 text-lg shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                    <Link href="/check">Start Your Journey</Link>
                  </Button>
                </div>
              </div>

              {/* Right Side: Headline like in the image */}
              <div className="w-full md:w-1/2 text-right mt-10 md:mt-0">
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
                  Top Consulting
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">
                  In Saudi Arabia
                </h3>
                <p className="text-xl text-blue-200/80 font-light">
                  For You To Choose From
                </p>
              </div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px]" />
          </div>
        </div>

        {/* The Person (Layer 2 - Behind UI, but in front of City) 
            In einer echten Implementation müsste das Bild freigestellt sein (PNG) und über das Interface ragen oder dahinter sitzen.
            Hier simuliere ich die Positionierung "Vor dem Screen" wie im Bild.
        */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-[600px] md:w-[800px] h-[500px] md:h-[700px] pointer-events-none">
           {/* HIER MUSS DAS BILD HIN: Eine freigestellte Person, Rückenansicht */}
           {/* Ich nutze einen Platzhalter, der andeutet, wo die Person sitzt */}
           <div className="w-full h-full relative">
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-80 bg-gradient-to-t from-black to-transparent opacity-80" />
             {/* 
                ANLEITUNG:
                Lade ein Bild hoch: "saudi-man-back.png" (Freigestellt!)
                Und entferne den Kommentar hier drunter:
             */}
             {/* 
             <Image 
               src="/saudi-man-back.png" 
               alt="Saudi Man watching screen" 
               fill 
               className="object-contain object-bottom"
             /> 
             */}
           </div>
        </div>

      </section>
    </main>
  );
}

