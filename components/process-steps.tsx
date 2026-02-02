"use client";

import Link from "next/link";
import { MessageSquare, Search, Settings, Handshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";
import { motion } from "framer-motion";

const stepsDe = [
  {
    number: "01",
    title: "Erstgespräch",
    description: "Wir lernen uns kennen und besprechen deine Ziele, Situation und Fragen.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Analyse & Strategie",
    description: "Ich analysiere deine Möglichkeiten und entwickle einen klaren Fahrplan.",
    icon: Search,
  },
  {
    number: "03",
    title: "Umsetzung",
    description: "Strukturierte Umsetzung aller Schritte – von Dokumenten bis zur Gründung.",
    icon: Settings,
  },
  {
    number: "04",
    title: "Langfristige Begleitung",
    description: "Auch nach dem Start bin ich dein Partner für alle Fragen vor Ort.",
    icon: Handshake,
  },
];

const stepsEn = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We get to know each other and discuss your goals, situation, and questions.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Analysis & Strategy",
    description: "I analyze your options and develop a clear roadmap for success.",
    icon: Search,
  },
  {
    number: "03",
    title: "Implementation",
    description: "Structured execution of all steps – from documents to company formation.",
    icon: Settings,
  },
  {
    number: "04",
    title: "Long-term Partnership",
    description: "Even after launch, I remain your partner for all questions on the ground.",
    icon: Handshake,
  },
];

export function ProcessSteps({ locale = "de" }: { locale?: Locale }) {
  const t = (de: string, en: string) => (locale === "en" ? en : de);
  const href = (raw: string) => localizeHref(raw, locale);
  const steps = locale === "en" ? stepsEn : stepsDe;

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-emerald-400 tracking-wide uppercase mb-3 block">
            {t("Dein Weg mit mir", "Your Journey with Me")}
          </span>
          <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            {t("So arbeiten wir zusammen", "How We Work Together")}
          </h2>
          <p className="text-lg text-slate-400">
            {t(
              "Ein klarer Prozess für deinen Erfolg in Saudi-Arabien – von der ersten Idee bis zum laufenden Geschäft.",
              "A clear process for your success in Saudi Arabia – from the first idea to running operations."
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-emerald-500/50 to-slate-700" />
              )}
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 h-full hover:bg-slate-800 hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="text-4xl font-bold text-slate-700">{step.number}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-6">
            {t("Dein Erfolg beginnt mit einem Gespräch.", "Your success starts with a conversation.")}
          </p>
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 py-6 text-lg">
            <Link href={href("/anfrage")}>
              {t("Erstgespräch vereinbaren", "Schedule initial consultation")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
