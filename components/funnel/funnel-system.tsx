"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, ArrowRight, ArrowLeft, Building2, Globe, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

// Definition der möglichen Schritte (States)
type Step = 
  | "START"
  | "AUSLAND_FIRMA_CHECK"
  | "BILANZ_CHECK"
  | "KOSTEN_AWARENESS_DIRECT"
  | "RISIKO_WARNUNG"
  | "KOSTEN_AWARENESS_RISK"
  | "FIRMENKAUF_OPTION"
  | "KOSTEN_AWARENESS_KAUF"
  | "BERATUNG_TROTZDEM"
  | "EXISTING_KSA_CHECK" // Pfad B Auswahl
  | "VALIDATION_FORM" // Pfad B Formular
  | "BOOKING_FORM" // Finales Formular Pfad A
  | "REJECTED"; // Ende ohne Buchung

export function ConsultingFunnel() {
  const [step, setStep] = useState<Step>("START");
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    unn: "", // Unified National Number
    iqama: "", // Iqama Number
    entityType: "" as "COMPANY" | "RESIDENCY" | "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Navigation Helper
  const goTo = (nextStep: Step) => {
    setDirection(1);
    setStep(nextStep);
  };

  const goBack = (prevStep: Step) => {
    setDirection(-1);
    setStep(prevStep);
  };

  // Validierung für Pfad B
  const validateKsaId = () => {
    const newErrors: Record<string, string> = {};
    
    if (formData.entityType === "COMPANY") {
      // UNN muss mit 7 beginnen und 10 Zeichen lang sein
      if (!/^7\d{9}$/.test(formData.unn)) {
        newErrors.unn = "Die Unified National Number muss mit 7 beginnen und 10 Ziffern haben.";
      }
    } else if (formData.entityType === "RESIDENCY") {
      // Iqama muss mit 2 beginnen und 10 Zeichen lang sein
      if (!/^2\d{9}$/.test(formData.iqama)) {
        newErrors.iqama = "Die Iqama-Nummer muss mit 2 beginnen und 10 Ziffern haben.";
      }
    }

    if (!formData.name) newErrors.name = "Name ist erforderlich";
    if (!formData.email) newErrors.email = "E-Mail ist erforderlich";
    if (!formData.phone) newErrors.phone = "Telefonnummer ist erforderlich";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleValidationSubmit = () => {
    if (validateKsaId()) {
      alert("Validierung erfolgreich! Anfrage wird gesendet...");
      // Hier würde der API Call kommen
    }
  };

  // Animations-Varianten
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* 
            ------------------------------------------------
            START
            ------------------------------------------------
          */}
          {step === "START" && (
            <Card className="p-8 border-neutral-800 bg-neutral-900/50 backdrop-blur-md">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Wo stehst du aktuell?</h2>
              <div className="grid gap-4">
                <Button 
                  onClick={() => goTo("AUSLAND_FIRMA_CHECK")}
                  className="h-auto p-6 text-left flex items-start gap-4 bg-neutral-800 hover:bg-neutral-700 hover:border-emerald-500 border border-transparent transition-all"
                >
                  <Globe className="h-6 w-6 text-emerald-500 mt-1 shrink-0" />
                  <div>
                    <div className="font-semibold text-lg">Ich möchte gründen</div>
                    <div className="text-neutral-400 font-normal text-sm">Ich komme aus dem Ausland und habe noch keine Firma in KSA.</div>
                  </div>
                </Button>

                <Button 
                  onClick={() => goTo("EXISTING_KSA_CHECK")}
                  className="h-auto p-6 text-left flex items-start gap-4 bg-neutral-800 hover:bg-neutral-700 hover:border-emerald-500 border border-transparent transition-all"
                >
                  <ShieldCheck className="h-6 w-6 text-emerald-500 mt-1 shrink-0" />
                  <div>
                    <div className="font-semibold text-lg">Ich bin bereits in KSA</div>
                    <div className="text-neutral-400 font-normal text-sm">Ich habe bereits eine Firma oder Premium Residency.</div>
                  </div>
                </Button>
              </div>
            </Card>
          )}

          {/* 
            ------------------------------------------------
            PFAD A: GRÜNDUNG (AUSLAND)
            ------------------------------------------------
          */}
          {step === "AUSLAND_FIRMA_CHECK" && (
            <StepCard 
              question="Hast Du eine Firma außerhalb von Saudi-Arabien?"
              subtext="Die Firma muss im Handelsregister eingetragen und seit mindestens 1 Jahr aktiv sein."
              onBack={() => goBack("START")}
            >
              <div className="grid grid-cols-2 gap-4">
                <OptionButton onClick={() => goTo("BILANZ_CHECK")}>Ja</OptionButton>
                <OptionButton onClick={() => goTo("FIRMENKAUF_OPTION")}>Nein</OptionButton>
              </div>
            </StepCard>
          )}

          {step === "BILANZ_CHECK" && (
            <StepCard 
              question="Wie hoch ist der Bilanzwert?"
              subtext="Liegt der Wert zwischen 75.000 € und 100.000 €?"
              onBack={() => goBack("AUSLAND_FIRMA_CHECK")}
            >
              <div className="grid grid-cols-2 gap-4">
                <OptionButton onClick={() => goTo("KOSTEN_AWARENESS_DIRECT")}>Ja</OptionButton>
                <OptionButton onClick={() => goTo("RISIKO_WARNUNG")}>Nein</OptionButton>
              </div>
            </StepCard>
          )}

          {step === "RISIKO_WARNUNG" && (
            <StepCard 
              question="Hinweis zur Gründung"
              subtext="Ohne entsprechenden Bilanzwert wird eine Gründung schwierig. Wir können es versuchen, aber es gibt keine Garantie. Möchtest Du fortfahren?"
              icon={<AlertCircle className="h-12 w-12 text-yellow-500 mb-4 mx-auto" />}
              onBack={() => goBack("BILANZ_CHECK")}
            >
              <div className="grid grid-cols-2 gap-4">
                <OptionButton onClick={() => goTo("KOSTEN_AWARENESS_RISK")}>Ja, versuchen</OptionButton>
                <OptionButton onClick={() => goTo("FIRMENKAUF_OPTION")}>Nein, abbrechen</OptionButton>
              </div>
            </StepCard>
          )}

          {step === "FIRMENKAUF_OPTION" && (
            <StepCard 
              question="Alternative: Firmenkauf"
              subtext="Es gibt die Möglichkeit, ein bestehendes Unternehmen zu kaufen. Die Kosten liegen hierbei bei ca. 15.000 € für den Kauf. Ist das eine Option für dich?"
              onBack={() => goBack("AUSLAND_FIRMA_CHECK")}
            >
              <div className="grid grid-cols-2 gap-4">
                <OptionButton onClick={() => goTo("KOSTEN_AWARENESS_KAUF")}>Ja</OptionButton>
                <OptionButton onClick={() => goTo("BERATUNG_TROTZDEM")}>Nein</OptionButton>
              </div>
            </StepCard>
          )}

          {step === "BERATUNG_TROTZDEM" && (
            <StepCard 
              question="Keine direkte Gründungs-Option"
              subtext="Aktuell sehen wir keine direkte Möglichkeit für eine Standard-Gründung. Möchtest Du dennoch ein kostenpflichtiges Beratungsgespräch, um individuelle Wege zu prüfen?"
              icon={<AlertCircle className="h-12 w-12 text-red-500 mb-4 mx-auto" />}
              onBack={() => goBack("FIRMENKAUF_OPTION")}
            >
              <div className="grid grid-cols-2 gap-4">
                <OptionButton onClick={() => goTo("BOOKING_FORM")}>Ja, Gespräch buchen</OptionButton>
                <OptionButton onClick={() => goTo("REJECTED")}>Nein, beenden</OptionButton>
              </div>
            </StepCard>
          )}

          {step === "REJECTED" && (
            <Card className="p-8 border-neutral-800 bg-neutral-900/50 backdrop-blur-md text-center">
              <h2 className="text-xl font-bold text-white mb-4">Vielen Dank für Dein Interesse.</h2>
              <p className="text-neutral-400 mb-6">
                Aktuell scheinen die Voraussetzungen für eine Zusammenarbeit noch nicht erfüllt zu sein. 
                Wir wünschen Dir viel Erfolg auf Deinem Weg.
              </p>
              <Button asChild variant="outline" className="border-neutral-700 text-white hover:bg-neutral-800">
                <a href="/">Zurück zur Startseite</a>
              </Button>
            </Card>
          )}

          {/* Kosten Awareness Steps (alle führen zum Booking Form) */}
          {(step === "KOSTEN_AWARENESS_DIRECT" || step === "KOSTEN_AWARENESS_RISK" || step === "KOSTEN_AWARENESS_KAUF") && (
             <StepCard 
               question="Kostentransparenz"
               subtext={
                 step === "KOSTEN_AWARENESS_KAUF" 
                 ? "Ist Dir bewusst, dass eine Unternehmensgründung (z.B. Restaurant mit 40 Plätzen) in KSA zwischen 120.000 € und 250.000 € kostet (zzgl. zum Kaufpreis von 15.000 €)?"
                 : "Ist Dir bewusst, dass eine Unternehmensgründung (z.B. Restaurant mit 40 Plätzen) in KSA zwischen 120.000 € und 250.000 € kostet?"
               }
               onBack={() => goBack("START")} // Vereinfacht
             >
               <div className="grid gap-4">
                 <Button onClick={() => goTo("BOOKING_FORM")} className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 text-lg">
                   Ja, ich bin mir dessen bewusst
                 </Button>
                 <Button onClick={() => goBack("START")} variant="ghost" className="text-neutral-400">
                   Nein, das ist zu teuer
                 </Button>
               </div>
             </StepCard>
          )}

          {/* 
            ------------------------------------------------
            FINAL: BOOKING FORM (PFAD A)
            ------------------------------------------------
          */}
          {step === "BOOKING_FORM" && (
            <Card className="p-8 border-neutral-800 bg-neutral-900/50 backdrop-blur-md">
              <h2 className="text-2xl font-bold text-white mb-2">Beratungsgespräch buchen</h2>
              <p className="text-emerald-500 mb-6">Deine Angaben wurden vorqualifiziert.</p>
              
              <div className="space-y-4">
                 {/* Hier würde man Kalender-Integration (Calendly) oder Formular einbauen */}
                 <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-sm mb-4">
                    Hinweis: Dies ist ein kostenpflichtiges Expertengespräch. Die Gebühr wird bei Beauftragung verrechnet.
                 </div>
                 
                 <Button className="w-full bg-white text-black hover:bg-neutral-200 h-12 text-lg font-semibold">
                   Jetzt Termin auswählen & bezahlen
                 </Button>
                 
                 <Button onClick={() => goBack("START")} variant="link" className="text-neutral-500 w-full">
                   Zurück
                 </Button>
              </div>
            </Card>
          )}


          {/* 
            ------------------------------------------------
            PFAD B: BESTANDSKUNDEN KSA
            ------------------------------------------------
          */}
          {step === "EXISTING_KSA_CHECK" && (
             <StepCard 
               question="Welchen Status hast Du?"
               subtext="Bitte wähle aus, was auf dich zutrifft."
               onBack={() => goBack("START")}
             >
               <div className="grid gap-4">
                 <Button 
                   onClick={() => {
                     setFormData({...formData, entityType: "COMPANY"});
                     goTo("VALIDATION_FORM");
                   }}
                   className="h-auto p-4 text-left border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 hover:border-emerald-500"
                 >
                   <Building2 className="mr-3 h-5 w-5 text-emerald-500" />
                   Ich habe bereits ein Unternehmen
                 </Button>
                 <Button 
                   onClick={() => {
                     setFormData({...formData, entityType: "RESIDENCY"});
                     goTo("VALIDATION_FORM");
                   }}
                   className="h-auto p-4 text-left border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 hover:border-emerald-500"
                 >
                   <ShieldCheck className="mr-3 h-5 w-5 text-emerald-500" />
                   Ich habe eine Premium Residency
                 </Button>
               </div>
             </StepCard>
          )}

          {step === "VALIDATION_FORM" && (
            <Card className="p-8 border-neutral-800 bg-neutral-900/50 backdrop-blur-md">
              <h2 className="text-2xl font-bold text-white mb-6">Verifizierung erforderlich</h2>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Vollständiger Name</Label>
                  <Input 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Dein Name" 
                    className={cn("bg-neutral-950 border-neutral-800", errors.name && "border-red-500")}
                  />
                  {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label>Telefonnummer</Label>
                  <Input 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+966..." 
                    type="tel"
                    className={cn("bg-neutral-950 border-neutral-800", errors.phone && "border-red-500")}
                  />
                  {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <Label>E-Mail Adresse</Label>
                  <Input 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="name@firma.com" 
                    type="email"
                    className={cn("bg-neutral-950 border-neutral-800", errors.email && "border-red-500")}
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                </div>

                {formData.entityType === "COMPANY" && (
                  <div className="space-y-2">
                    <Label>Unified National Number (UNN)</Label>
                    <Input 
                      value={formData.unn}
                      onChange={(e) => setFormData({...formData, unn: e.target.value})}
                      placeholder="Beginnt mit 7 (10 Ziffern)" 
                      className={cn("bg-neutral-950 border-neutral-800", errors.unn && "border-red-500")}
                    />
                    {errors.unn && <p className="text-xs text-red-500">{errors.unn}</p>}
                    <p className="text-xs text-neutral-500">Muss mit 7 beginnen und 10 Zeichen lang sein.</p>
                  </div>
                )}

                {formData.entityType === "RESIDENCY" && (
                  <div className="space-y-2">
                    <Label>Iqama Nummer</Label>
                    <Input 
                      value={formData.iqama}
                      onChange={(e) => setFormData({...formData, iqama: e.target.value})}
                      placeholder="Beginnt mit 2 (10 Ziffern)" 
                      className={cn("bg-neutral-950 border-neutral-800", errors.iqama && "border-red-500")}
                    />
                    {errors.iqama && <p className="text-xs text-red-500">{errors.iqama}</p>}
                    <p className="text-xs text-neutral-500">Muss mit 2 beginnen und 10 Zeichen lang sein.</p>
                  </div>
                )}

                <div className="space-y-2">
                  <Label>Deine Frage</Label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Wie können wir helfen?" 
                    className="bg-neutral-950 border-neutral-800 min-h-[100px]"
                  />
                </div>

                <div className="pt-4 flex gap-3">
                  <Button variant="outline" onClick={() => goBack("EXISTING_KSA_CHECK")} className="w-1/3 border-neutral-700">
                    Zurück
                  </Button>
                  <Button onClick={handleValidationSubmit} className="w-2/3 bg-emerald-600 hover:bg-emerald-700">
                    Anfrage senden
                  </Button>
                </div>
              </div>
            </Card>
          )}

        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Hilfs-Komponente für einheitliches Design der Frage-Karten
function StepCard({ question, subtext, children, icon, onBack }: { question: string, subtext?: string, children: React.ReactNode, icon?: React.ReactNode, onBack?: () => void }) {
  return (
    <Card className="p-8 border-neutral-800 bg-neutral-900/50 backdrop-blur-md shadow-2xl">
      {onBack && (
        <button onClick={onBack} className="flex items-center text-sm text-neutral-500 hover:text-white mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-1" /> Zurück
        </button>
      )}
      <div className="text-center mb-8">
        {icon}
        <h2 className="text-2xl font-bold text-white mb-3">{question}</h2>
        {subtext && <p className="text-neutral-400 text-lg leading-relaxed">{subtext}</p>}
      </div>
      {children}
    </Card>
  );
}

function OptionButton({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
  return (
    <Button 
      onClick={onClick} 
      className="h-16 text-lg font-medium bg-neutral-800 hover:bg-emerald-600/20 hover:text-emerald-500 hover:border-emerald-500 border border-transparent transition-all"
    >
      {children}
    </Button>
  );
}

