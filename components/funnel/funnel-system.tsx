"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle, ArrowLeft, Building2, Globe, ShieldCheck, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";
import { trackFunnelComplete, trackBookingClick, trackFormSubmit } from "@/lib/analytics";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Definition der möglichen Schritte (States)
type Step = 
  | "START"
  | "AUSLAND_FIRMA_CHECK"
  | "BILANZ_CHECK"
  | "KOSTEN_AWARENESS_DIRECT"
  | "RISIKO_WARNUNG"
  | "KOSTEN_AWARENESS_RISK"
  | "LOW_BUDGET_WARNING"
  | "KOSTEN_AWARENESS_KAUF"
  | "HAS_BRAND_CHECK"
  | "BRAND_NAME_INPUT"
  | "BERATUNG_TROTZDEM"
  | "EXISTING_KSA_CHECK"
  | "VALIDATION_FORM"
  | "BOOKING_FORM"
  | "REJECTED";

export function ConsultingFunnel() {
  return <ConsultingFunnelInnerCompat />;
}

// Backwards-compatible wrapper: existing imports keep working (German default).
function ConsultingFunnelInnerCompat() {
  return <ConsultingFunnelLocalized locale="de" />;
}

export function ConsultingFunnelLocalized({ locale = "de" }: { locale?: Locale }) {
  const [step, setStep] = useState<Step>("START");
  const [direction, setDirection] = useState(1);
  const [stepPath, setStepPath] = useState<Step[]>(["START"]);
  const [funnelAnswers, setFunnelAnswers] = useState({
    startChoice: "" as "WANT_TO_FOUND" | "ALREADY_IN_KSA" | "",
    hasForeignCompany: "" as "YES" | "NO" | "",
    balanceWithinRange: "" as "YES" | "NO" | "",
    proceedDespiteRisk: "" as "YES" | "NO" | "",
    companyPurchaseOption: "" as "YES" | "NO" | "",
    costAwarenessAccepted: "" as "YES" | "NO" | "YES_DESPITE_WARNING" | "",
    hasExistingBrand: "" as "YES" | "NO" | "",
    wantsPaidConsultationAnyway: "" as "YES" | "NO" | "",
    outcome: "" as "BOOKING" | "REJECTED" | "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    unn: "", 
    iqama: "", 
    brandName: "",
    entityType: "" as "COMPANY" | "RESIDENCY" | "",
    dataConsent: true,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  const t = (de: string, en: string) => (locale === "en" ? en : de);
  const href = (raw: string) => localizeHref(raw, locale);
  const bookingUrl =
    locale === "en"
      ? "/en/booking"
      : "/terminbuchung";

  const goTo = (nextStep: Step) => {
    setDirection(1);
    setStep(nextStep);
    setStepPath((prev) => (prev[prev.length - 1] === nextStep ? prev : [...prev, nextStep]));
  };

  const goBack = () => {
    if (stepPath.length <= 1) return;
    const newPath = [...stepPath];
    newPath.pop(); // Remove current step
    const prevStep = newPath[newPath.length - 1];
    
    setDirection(-1);
    setStep(prevStep);
    setStepPath(newPath);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (formData.entityType === "COMPANY" && !/^7\d{9}$/.test(formData.unn)) {
      newErrors.unn = t("Die UNN muss mit 7 beginnen und 10 Ziffern haben.", "UNN must start with 7 and have 10 digits.");
    } else if (formData.entityType === "RESIDENCY" && !/^2\d{9}$/.test(formData.iqama)) {
      newErrors.iqama = t("Die Iqama-Nummer muss mit 2 beginnen und 10 Ziffern haben.", "Iqama number must start with 2 and have 10 digits.");
    }
    if (!formData.name) newErrors.name = t("Name ist erforderlich", "Name is required");
    if (!formData.email) newErrors.email = t("E-Mail ist erforderlich", "Email is required");
    if (!formData.phone) newErrors.phone = t("Telefonnummer ist erforderlich", "Phone number is required");
    if (!formData.message) newErrors.message = t("Bitte gib deine Frage ein.", "Please enter your question.");
    if (!formData.dataConsent) newErrors.dataConsent = t("Bitte stimme der Datenverarbeitung zu.", "Please agree to data processing.");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleValidationSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const payload = {
        ...formData,
        source: "funnel",
        locale,
        bookingUrl,
        funnel: {
          ...funnelAnswers,
          stepPath: stepPath.join(" -> "),
          entityType: formData.entityType || "",
          unn: formData.unn || "",
          iqama: formData.iqama || "",
          brandName: formData.brandName || "",
        },
      };
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Track funnel form submission
        trackFormSubmit({
          formName: "funnel_validation_form",
          topic: formData.entityType || "new_company",
        });
        trackFunnelComplete({
          outcome: funnelAnswers.outcome,
          stepPath: stepPath.join(" -> "),
        });
        
        // Erfolgreich gespeichert -> Weiter zum Buchen
        goTo("BOOKING_FORM");
      } else {
        let details = "";
        try {
          const json = await response.json();
          details = json?.error ? ` (${json.error})` : "";
        } catch {
          // ignore
        }
        setPopupTitle(t("Fehler beim Senden", "Failed to send"));
        setPopupMessage(
          `${t("Bitte versuche es später erneut.", "Please try again later.")}${details}`
        );
        setPopupOpen(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setPopupTitle(t("Unerwarteter Fehler", "Unexpected error"));
      setPopupMessage(t("Bitte versuche es später erneut.", "Please try again later."));
      setPopupOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 20 : -20, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? 20 : -20, opacity: 0 })
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 md:px-0">
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
          {step === "START" && (
            <Card className="p-5 md:p-8 border border-slate-200 bg-white shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 text-center">
                {t("Wo stehst du aktuell?", "Where are you right now?")}
              </h2>
              <div className="grid gap-4">
                <Button 
                  onClick={() => {
                    setFunnelAnswers((prev) => ({ ...prev, startChoice: "WANT_TO_FOUND" }));
                    goTo("AUSLAND_FIRMA_CHECK");
                  }}
                  className="h-auto min-h-[80px] p-4 md:p-6 text-left flex items-start gap-4 bg-slate-50 hover:bg-slate-100 hover:border-emerald-500 border border-slate-200 transition-all whitespace-normal shadow-sm group"
                >
                  <Globe className="h-6 w-6 text-emerald-600 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-base md:text-lg mb-1 text-slate-900">
                      {t("Ich möchte gründen", "I want to start a company")}
                    </div>
                    <div className="text-slate-500 font-normal text-sm leading-snug">
                      {t("Ich komme aus dem Ausland und habe noch keine Firma in KSA.", "I’m abroad and don’t have a company in KSA yet.")}
                    </div>
                  </div>
                </Button>

                <Button 
                  onClick={() => {
                    setFunnelAnswers((prev) => ({ ...prev, startChoice: "ALREADY_IN_KSA" }));
                    goTo("EXISTING_KSA_CHECK");
                  }}
                  className="h-auto min-h-[80px] p-4 md:p-6 text-left flex items-start gap-4 bg-slate-50 hover:bg-slate-100 hover:border-emerald-500 border border-slate-200 transition-all whitespace-normal shadow-sm group"
                >
                  <ShieldCheck className="h-6 w-6 text-emerald-600 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-base md:text-lg mb-1 text-slate-900">
                      {t("Ich bin bereits in KSA", "I’m already in KSA")}
                    </div>
                    <div className="text-slate-500 font-normal text-sm leading-snug">
                      {t("Ich habe bereits eine Firma oder Premium Residency.", "I already have a company or Premium Residency.")}
                    </div>
                  </div>
                </Button>
              </div>
            </Card>
          )}

          {step === "AUSLAND_FIRMA_CHECK" && (
            <StepCard 
              question={t("Hast du eine Firma außerhalb von Saudi-Arabien?", "Do you have a company outside Saudi Arabia?")}
              subtext={t("Die Firma muss im Handelsregister eingetragen und seit mindestens 1 Jahr aktiv sein.", "The company must be registered and active for at least 1 year.")}
              onBack={goBack}
              locale={locale}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <OptionButton
                  onClick={() => {
                    setFunnelAnswers((prev) => ({ ...prev, hasForeignCompany: "YES" }));
                    goTo("BILANZ_CHECK");
                  }}
                >
                  {t("Ja", "Yes")}
                </OptionButton>
                <OptionButton
                  onClick={() => {
                    setFunnelAnswers((prev) => ({ ...prev, hasForeignCompany: "NO" }));
                    goTo("BERATUNG_TROTZDEM");
                  }}
                >
                  {t("Nein", "No")}
                </OptionButton>
              </div>
            </StepCard>
          )}

          {step === "BILANZ_CHECK" && (
            <StepCard 
              question={t("Wie hoch ist der Bilanzwert?", "What is your balance sheet value?")}
              subtext={t("Liegt der Wert zwischen 75.000 € und 100.000 €?", "Is it between €75,000 and €100,000?")}
              onBack={goBack}
              locale={locale}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <OptionButton
                  onClick={() => {
                    setFunnelAnswers((prev) => ({ ...prev, balanceWithinRange: "YES" }));
                    goTo("KOSTEN_AWARENESS_DIRECT");
                  }}
                >
                  {t("Ja", "Yes")}
                </OptionButton>
                <OptionButton
                  onClick={() => {
                    setFunnelAnswers((prev) => ({ ...prev, balanceWithinRange: "NO" }));
                    goTo("RISIKO_WARNUNG");
                  }}
                >
                  {t("Nein", "No")}
                </OptionButton>
              </div>
            </StepCard>
          )}

          {step === "RISIKO_WARNUNG" && (
            <StepCard 
              question={t("Hinweis zur Gründung", "Important note")}
              subtext={t(
                "Ohne entsprechenden Bilanzwert wird eine Gründung schwierig. Wir können es versuchen, aber es gibt keine Garantie. Möchtest Du fortfahren?",
                "Without sufficient balance sheet value, formation can be difficult. We can try, but there’s no guarantee. Do you want to continue?"
              )}
              icon={<AlertCircle className="h-12 w-12 text-yellow-500 mb-4 mx-auto" />}
              onBack={goBack}
              locale={locale}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <OptionButton
                  onClick={() => {
                    setFunnelAnswers((prev) => ({ ...prev, proceedDespiteRisk: "YES" }));
                    goTo("KOSTEN_AWARENESS_RISK");
                  }}
                >
                  {t("Ja, versuchen", "Yes, try")}
                </OptionButton>
                <OptionButton
                  onClick={() => {
                    setFunnelAnswers((prev) => ({ ...prev, proceedDespiteRisk: "NO" }));
                    goTo("BERATUNG_TROTZDEM");
                  }}
                >
                  {t("Nein, abbrechen", "No, cancel")}
                </OptionButton>
              </div>
            </StepCard>
          )}

          {step === "BERATUNG_TROTZDEM" && (
            <StepCard 
              question={t("Keine direkte Gründungs-Option", "No direct formation option")}
              subtext={t(
                "Aktuell sehen wir keine direkte Möglichkeit für eine Standard-Gründung. Möchtest Du dennoch ein kostenpflichtiges Beratungsgespräch, um individuelle Wege zu prüfen?",
                "At the moment, there’s no direct standard formation path. Do you still want a paid consultation to explore individual options?"
              )}
              icon={<AlertCircle className="h-12 w-12 text-red-500 mb-4 mx-auto" />}
              onBack={goBack}
              locale={locale}
            >
              <div className="grid grid-cols-1 gap-4">
                <OptionButton
                  onClick={() => {
                    setFunnelAnswers((prev) => ({ ...prev, wantsPaidConsultationAnyway: "YES", outcome: "BOOKING" }));
                    // Capture lead details before sending to the calendar
                    goTo("VALIDATION_FORM");
                  }}
                >
                  {t("Ja, Gespräch buchen", "Yes, book a call")}
                </OptionButton>
                <OptionButton
                  onClick={() => {
                    setFunnelAnswers((prev) => ({ ...prev, wantsPaidConsultationAnyway: "NO", outcome: "REJECTED" }));
                    goTo("REJECTED");
                  }}
                >
                  {t("Nein, beenden", "No, finish")}
                </OptionButton>
              </div>
            </StepCard>
          )}

          {step === "REJECTED" && (
            <Card className="p-6 md:p-8 border border-slate-200 bg-white shadow-xl text-center">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                {t("Vielen Dank für dein Interesse.", "Thank you for your interest.")}
              </h2>
              <p className="text-slate-500 mb-6">
                {t(
                  "Aktuell scheinen die Voraussetzungen für eine Zusammenarbeit noch nicht erfüllt zu sein. Wir wünschen dir viel Erfolg auf deinem Weg.",
                  "At the moment, the prerequisites for working together don’t seem to be met. We wish you success on your journey."
                )}
              </p>
              <Button asChild variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 w-full md:w-auto h-auto py-3">
                <a href={href("/")}>{t("Zurück zur Startseite", "Back to home")}</a>
              </Button>
            </Card>
          )}

          {(step === "KOSTEN_AWARENESS_DIRECT" || step === "KOSTEN_AWARENESS_RISK" || step === "KOSTEN_AWARENESS_KAUF") && (
             <StepCard 
               question={t("Kostentransparenz", "Cost transparency")}
               subtext={
                 step === "KOSTEN_AWARENESS_KAUF" 
                 ? t(
                    "Ist Dir bewusst, dass eine Unternehmensgründung (z.B. Restaurant mit 40 Plätzen) in KSA zwischen 120.000 € und 250.000 € kostet (zzgl. zum Kaufpreis von 15.000 €)?",
                    "Are you aware that starting a company (e.g., a 40-seat restaurant) in KSA costs between €120,000 and €250,000 (plus €15,000 purchase price)?"
                  )
                 : t(
                    "Ist Dir bewusst, dass eine Unternehmensgründung (z.B. Restaurant mit 40 Plätzen) in KSA zwischen 120.000 € und 250.000 € kostet?",
                    "Are you aware that starting a company (e.g., a 40-seat restaurant) in KSA costs between €120,000 and €250,000?"
                  )
               }
               onBack={goBack}
               locale={locale}
             >
               <div className="grid gap-4">
                 <Button
                   onClick={() => {
                     setFunnelAnswers((prev) => ({ ...prev, costAwarenessAccepted: "YES" }));
                     goTo("HAS_BRAND_CHECK");
                   }}
                   className="w-full bg-slate-900 hover:bg-slate-800 text-white h-auto py-4 text-base md:text-lg whitespace-normal leading-tight"
                 >
                   {t("Ja, ich bin mir dessen bewusst", "Yes, I understand")}
                 </Button>
                 <Button
                   onClick={() => {
                     // NEW LOGIC: Show budget warning instead of immediate rejection
                     goTo("LOW_BUDGET_WARNING");
                   }}
                   variant="ghost"
                   className="text-slate-500 h-auto py-3 hover:text-slate-900"
                 >
                   {t("Nein, das ist zu teuer", "No, that's too expensive")}
                 </Button>
               </div>
             </StepCard>
          )}

          {step === "LOW_BUDGET_WARNING" && (
            <StepCard 
              question={t("Budget-Warnung", "Budget Warning")}
              subtext={t(
                "Eine Gründung einer Firma unterhalb dieser Summe ist schwierig in Saudi Arabien, gerade wenn es um die Gastronomie geht. Es ist sehr Konzept abhängig aber 90% der Konzepte liegen in dieser Range. Möchtest Du trotzdem fortfahren?",
                "Starting a company below this amount is difficult in Saudi Arabia, especially when it comes to gastronomy. It is very concept-dependent but 90% of concepts lie in this range. Do you still want to proceed?"
              )}
              icon={<AlertCircle className="h-12 w-12 text-yellow-500 mb-4 mx-auto" />}
              onBack={goBack}
              locale={locale}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <OptionButton
                  onClick={() => {
                    setFunnelAnswers((prev) => ({ ...prev, costAwarenessAccepted: "YES_DESPITE_WARNING" }));
                    goTo("HAS_BRAND_CHECK");
                  }}
                >
                  {t("Ja, trotzdem fortfahren", "Yes, proceed anyway")}
                </OptionButton>
                <OptionButton
                  onClick={() => {
                    setFunnelAnswers((prev) => ({ ...prev, costAwarenessAccepted: "NO", outcome: "REJECTED" }));
                    goTo("REJECTED");
                  }}
                >
                  {t("Nein, abbrechen", "No, cancel")}
                </OptionButton>
              </div>
            </StepCard>
          )}

          {step === "HAS_BRAND_CHECK" && (
            <StepCard 
              question={t("Bestehendes Unternehmen / bestehende Marke", "Existing Company / Brand")}
              subtext={t(
                "Hast du bereits ein Unternehmen oder eine Marke, die du in Saudi-Arabien aufbauen oder eröffnen möchtest?",
                "Do you already have a company or brand that you want to build or open in Saudi Arabia?"
              )}
              onBack={goBack}
              locale={locale}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <OptionButton
                  onClick={() => {
                    setFunnelAnswers((prev) => ({ ...prev, hasExistingBrand: "YES" }));
                    goTo("BRAND_NAME_INPUT");
                  }}
                >
                  {t("Ja, habe ich", "Yes, I do")}
                </OptionButton>
                <OptionButton
                  onClick={() => {
                    setFunnelAnswers((prev) => ({ ...prev, hasExistingBrand: "NO", outcome: "BOOKING" }));
                    goTo("VALIDATION_FORM");
                  }}
                >
                  {t("Nein, ich will was Neues starten", "No, I want to start something new")}
                </OptionButton>
              </div>
            </StepCard>
          )}

          {step === "BRAND_NAME_INPUT" && (
            <Card className="p-5 md:p-8 border border-slate-200 bg-white shadow-xl">
              <button onClick={goBack} className="flex items-center text-sm text-slate-500 hover:text-slate-900 mb-4 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-1" /> {t("Zurück", "Back")}
              </button>
              <div className="text-center mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                  {t("Wie heißt das Unternehmen/Brand?", "What is the name of the company/brand?")}
                </h2>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                  {t("Bitte gib den Namen deines Unternehmens oder deiner Brand ein.", "Please enter the name of your company or brand.")}
                </p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-slate-700">
                    {t("Name des Unternehmens/Brand", "Company/Brand Name")} <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    value={formData.brandName}
                    onChange={(e) => setFormData({...formData, brandName: e.target.value})}
                    placeholder={t("z.B. Mein Café, Meine Marke...", "e.g. My Café, My Brand...")} 
                    className="bg-slate-50 border-slate-200 h-12 text-base text-slate-900"
                  />
                </div>
                <Button
                  onClick={() => {
                    if (formData.brandName.trim()) {
                      setFunnelAnswers((prev) => ({ ...prev, outcome: "BOOKING" }));
                      goTo("VALIDATION_FORM");
                    }
                  }}
                  disabled={!formData.brandName.trim()}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white h-12 font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {t("Weiter", "Continue")}
                </Button>
              </div>
            </Card>
          )}

          {step === "BOOKING_FORM" && (
            <Card className="p-6 md:p-8 border border-slate-200 bg-white shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 text-center">
                {t("Ziel des Beratungsgesprächs", "Purpose of the Consultation")}
              </h2>
              
              <div className="space-y-6 text-slate-600 mb-8">
                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-lg text-emerald-900 font-medium">
                   {t(
                    "Kein Fake, keine Theorie: Die Inhalte dieses Gesprächs basieren ausschließlich auf realer Erfahrung aus eigener unternehmerischer Praxis in Saudi-Arabien – nicht auf Annahmen oder Modellen aus Büchern.",
                    "No fake, no theory: the content of this consultation is based exclusively on real, hands-on entrepreneurial experience in Saudi Arabia – not on assumptions or textbook models."
                   )}
                </div>

                <p>
                  {t(
                    "Ziel dieses Gesprächs ist es, dir eine klare, realistische und strukturierte Einschätzung zu geben, ob das Leben und der Aufbau eines Unternehmens in Saudi-Arabien für dich sinnvoll ist.",
                    "The purpose of this session is to provide you with a clear, realistic, and structured assessment of whether living in Saudi Arabia and building a business there makes sense for you."
                  )}
                </p>

                <div className="space-y-2">
                  <p className="font-semibold text-slate-900">{t("Im Rahmen des Gesprächs erkläre ich dir:", "During the consultation, I will explain:")}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>{t("welche Möglichkeiten es gibt, in Saudi-Arabien zu leben, und welche realen Rahmenbedingungen damit verbunden sind", "the available options for living in Saudi Arabia and the real-world conditions that come with them")}</li>
                    <li>{t("wie eine Unternehmensgründung in Saudi-Arabien in der Praxis abläuft", "how company formation in Saudi Arabia works in practice")}</li>
                    <li>{t("welche Chancen bestehen und welche Risiken berücksichtigt werden müssen", "which opportunities exist and which risks must be taken into account")}</li>
                    <li>{t("wie der konkrete Weg zum Markteintritt Schritt für Schritt aussieht", "what the concrete path to market entry looks like, step by step")}</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <p className="font-semibold text-slate-900">{t("Darüber hinaus gehen wir realistisch auf die finanziellen Aspekte ein, unter anderem:", "In addition, we will take a realistic look at the financial aspects, including:")}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>{t("welches Investitionsvolumen erforderlich ist", "the level of investment typically required")}</li>
                    <li>{t("welche Kostenstrukturen typischerweise anfallen", "common cost structures")}</li>
                    <li>{t("wann ein Return on Investment (ROI) realistisch zu erwarten ist", "when a return on investment (ROI) can realistically be expected")}</li>
                  </ul>
                </div>

                <p>
                  {t(
                    "Zusätzlich analysiere ich deine Geschäftsidee im Detail und prüfe, ob sie für den saudi-arabischen Markt geeignet ist oder ob Anpassungen am Konzept notwendig sind.",
                    "Furthermore, I will analyse your business idea in detail and assess whether it is suitable for the Saudi market or whether the concept needs to be adjusted."
                  )}
                </p>

                <div className="flex items-center gap-2 text-slate-900 font-bold">
                   <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                   <span>{t("Ziel des Gesprächs ist Klarheit.", "The goal of this consultation is clarity.")}</span>
                </div>

                <p className="italic text-slate-500 text-sm">
                   {t(
                    "Am Ende des Beratungsgesprächs weißt du genau, ob und in welcher Form ein Business in Saudi-Arabien für dich sinnvoll und umsetzbar ist – auf Basis von Fakten, nicht von Annahmen.",
                    "By the end of the session, you will know exactly whether — and in what form — starting a business in Saudi Arabia is realistic and sensible for you, based on facts rather than assumptions."
                   )}
                </p>
              </div>
                 
              <Button 
                asChild 
                className="w-full bg-slate-900 hover:bg-slate-800 text-white h-auto min-h-[56px] py-4 text-base md:text-lg font-semibold whitespace-normal leading-tight shadow-md"
                onClick={() => trackBookingClick({ source: "funnel", bookingType: "consultation" })}
              >
                <a href={bookingUrl}>
                  {t("Jetzt Termin auswählen & bezahlen", "Select a time & pay")}
                </a>
              </Button>
              
              <Button onClick={goBack} variant="link" className="text-slate-500 w-full py-3 h-auto">
                {t("Zurück", "Back")}
              </Button>
            </Card>
          )}

          {step === "EXISTING_KSA_CHECK" && (
             <StepCard 
                question={t("Welchen Status hast du?", "What is your status?")}
               subtext={t("Bitte wähle aus, was auf dich zutrifft.", "Please choose what applies to you.")}
               onBack={goBack}
               locale={locale}
             >
               <div className="grid gap-4">
                 <Button 
                   onClick={() => {
                     setFormData({...formData, entityType: "COMPANY"});
                     goTo("VALIDATION_FORM");
                   }}
                   className="h-auto min-h-[72px] p-4 text-left border border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-emerald-500 whitespace-normal flex items-start text-slate-900"
                 >
                   <Building2 className="mr-3 h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                   <span className="flex-1 text-base md:text-lg">
                     {t("Ich habe bereits ein Unternehmen", "I already have a company")}
                   </span>
                 </Button>
                 <Button 
                   onClick={() => {
                     setFormData({...formData, entityType: "RESIDENCY"});
                     goTo("VALIDATION_FORM");
                   }}
                   className="h-auto min-h-[72px] p-4 text-left border border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-emerald-500 whitespace-normal flex items-start text-slate-900"
                 >
                   <ShieldCheck className="mr-3 h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                   <span className="flex-1 text-base md:text-lg">
                     {t("Ich habe eine Premium Residency", "I have Premium Residency")}
                   </span>
                 </Button>
               </div>
             </StepCard>
          )}

          {step === "VALIDATION_FORM" && (
            <Card className="p-6 md:p-8 border border-slate-200 bg-white shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                {t("Verifizierung erforderlich", "Verification required")}
              </h2>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-slate-700">
                    {t("Vollständiger Name", "Full name")} <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder={t("Dein Name", "Your name")} 
                    className={cn("bg-slate-50 border-slate-200 h-12 text-base text-slate-900", errors.name && "border-red-500")}
                  />
                  {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-700">
                    {t("Telefonnummer", "Phone number")} <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+966..." 
                    type="tel"
                    className={cn("bg-slate-50 border-slate-200 h-12 text-base text-slate-900", errors.phone && "border-red-500")}
                  />
                  {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-700">
                    {t("E-Mail Adresse", "Email address")} <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="name@firma.com" 
                    type="email"
                    className={cn("bg-slate-50 border-slate-200 h-12 text-base text-slate-900", errors.email && "border-red-500")}
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                </div>

                {formData.entityType === "COMPANY" && (
                  <div className="space-y-2">
                    <Label className="text-slate-700">Unified National Number (UNN)</Label>
                    <Input 
                      value={formData.unn}
                      onChange={(e) => setFormData({...formData, unn: e.target.value})}
                      placeholder={t("Beginnt mit 7 (10 Ziffern)", "Starts with 7 (10 digits)")} 
                      className={cn("bg-slate-50 border-slate-200 h-12 text-base text-slate-900", errors.unn && "border-red-500")}
                    />
                    {errors.unn && <p className="text-xs text-red-500">{errors.unn}</p>}
                    <p className="text-xs text-slate-500">{t("Muss mit 7 beginnen und 10 Zeichen lang sein.", "Must start with 7 and be 10 characters long.")}</p>
                  </div>
                )}

                {formData.entityType === "RESIDENCY" && (
                  <div className="space-y-2">
                    <Label className="text-slate-700">{t("Iqama Nummer", "Iqama number")}</Label>
                    <Input 
                      value={formData.iqama}
                      onChange={(e) => setFormData({...formData, iqama: e.target.value})}
                      placeholder={t("Beginnt mit 2 (10 Ziffern)", "Starts with 2 (10 digits)")} 
                      className={cn("bg-slate-50 border-slate-200 h-12 text-base text-slate-900", errors.iqama && "border-red-500")}
                    />
                    {errors.iqama && <p className="text-xs text-red-500">{errors.iqama}</p>}
                    <p className="text-xs text-slate-500">{t("Muss mit 2 beginnen und 10 Zeichen lang sein.", "Must start with 2 and be 10 characters long.")}</p>
                  </div>
                )}

                <div className="space-y-2">
                  <Label className="text-slate-700">
                    {t("Deine Frage", "Your question")} <span className="text-red-500">*</span>
                  </Label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder={t("Wie können wir helfen?", "How can we help?")} 
                    className={cn("bg-slate-50 border-slate-200 min-h-[100px] text-base text-slate-900", errors.message && "border-red-500")}
                  />
                  {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                </div>

                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox 
                    id="terms" 
                    checked={formData.dataConsent}
                    onCheckedChange={(checked) => setFormData({...formData, dataConsent: checked as boolean})}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-700"
                    >
                      {t("Ich stimme der Verarbeitung meiner Daten zu.", "I agree to the processing of my data.")}
                    </label>
                    {errors.dataConsent && <p className="text-xs text-red-500">{errors.dataConsent}</p>}
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <Button variant="outline" onClick={goBack} className="w-1/3 border-slate-300 h-12 text-slate-700">
                    {t("Zurück", "Back")}
                  </Button>
                  <Button onClick={handleValidationSubmit} disabled={isSubmitting} className="w-2/3 bg-slate-900 hover:bg-slate-800 text-white h-12 font-semibold shadow-md">
                    {isSubmitting ? t("Leite weiter...", "Redirecting...") : t("Jetzt zur Terminbuchung", "Proceed to booking")}
                  </Button>
                </div>
              </div>
            </Card>
          )}

        </motion.div>
      </AnimatePresence>

      <Dialog open={popupOpen} onOpenChange={setPopupOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-red-700">{popupTitle}</DialogTitle>
            <DialogDescription className="text-slate-600">{popupMessage}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              type="button"
              onClick={() => setPopupOpen(false)}
              className="bg-slate-900 hover:bg-slate-800 text-white"
            >
              {t("OK", "OK")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function StepCard({
  question,
  subtext,
  children,
  icon,
  onBack,
  locale = "de",
}: {
  question: string;
  subtext?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onBack?: () => void;
  locale?: Locale;
}) {
  const t = (de: string, en: string) => (locale === "en" ? en : de);
  return (
    <Card className="p-5 md:p-8 border border-slate-200 bg-white shadow-xl w-full">
      {onBack && (
        <button onClick={onBack} className="flex items-center text-sm text-slate-500 hover:text-slate-900 mb-4 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-1" /> {t("Zurück", "Back")}
        </button>
      )}
      <div className="text-center mb-6 md:mb-8">
        {icon}
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{question}</h2>
        {subtext && <p className="text-slate-600 text-base md:text-lg leading-relaxed">{subtext}</p>}
      </div>
      {children}
    </Card>
  );
}

function OptionButton({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
  return (
    <Button 
      onClick={onClick} 
      className="h-auto min-h-[64px] py-4 px-4 text-base md:text-lg font-medium bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-emerald-500 text-slate-900 transition-all w-full whitespace-normal leading-tight shadow-sm group"
    >
      {children}
    </Button>
  );
}
