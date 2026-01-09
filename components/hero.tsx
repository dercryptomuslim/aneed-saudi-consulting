"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-block rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-sm text-neutral-400 backdrop-blur-md">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Die Zukunft beginnt in Riad
          </div>
          
          <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl lg:text-8xl">
            Ihr Tor zum Erfolg in <br />
            <span className="text-emerald-500/90 glow-text">Saudi-Arabien</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400 md:text-xl">
            9 Jahre Expertise vor Ort. Wir navigieren Sie sicher durch Gründung, Investment und Auswanderung. Werden Sie Teil der Vision 2030.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-14 rounded-full bg-emerald-600 px-8 text-lg font-semibold text-white hover:bg-emerald-700 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300">
              <Link href="#kontakt">
                Kostenlose Beratung
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 rounded-full border-neutral-800 bg-black/50 px-8 text-lg text-neutral-300 hover:bg-neutral-900 hover:text-white backdrop-blur-sm">
              <Link href="#leistungen">
                Unsere Leistungen
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    </section>
  );
}
