"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { trackFormSubmit } from "@/lib/analytics";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function Contact({ locale = "de" }: { locale?: Locale }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = (de: string, en: string) => (locale === "en" ? en : de);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupVariant, setPopupVariant] = useState<"success" | "error">("success");
  const [popupTitle, setPopupTitle] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const topic = String(formData.get("topic") || "");
    const topicLabel =
      locale === "en"
        ? (
            {
              gruendung: "Company formation",
              investment: "Investment",
              auswanderung: "Relocation",
              sonstiges: "Other",
            } as Record<string, string>
          )[topic] || topic
        : (
            {
              gruendung: "Firmengründung",
              investment: "Investment",
              auswanderung: "Auswanderung",
              sonstiges: "Sonstiges",
            } as Record<string, string>
          )[topic] || topic;

    const data = {
      name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      email: formData.get("email"),
      type: `${t("Kontaktformular", "Contact form")} - ${topicLabel}`,
      message: formData.get("message"),
    };

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Track successful form submission
        trackFormSubmit({
          formName: "contact_form",
          topic: topic,
        });
        
        setPopupVariant("success");
        setPopupTitle(t("Gesendet!", "Sent!"));
        setPopupMessage(
          t(
            "Danke für deine Anfrage! Wir melden uns in Kürze.",
            "Thanks for your request! We'll get back to you shortly."
          )
        );
        setPopupOpen(true);
        (e.target as HTMLFormElement).reset();
      } else {
        let details = "";
        try {
          const json = await response.json();
          details = json?.error ? ` (${json.error})` : "";
        } catch {
          // ignore
        }
        setPopupVariant("error");
        setPopupTitle(t("Fehler beim Senden", "Failed to send"));
        setPopupMessage(
          `${t("Bitte versuche es später erneut.", "Please try again later.")}${details}`
        );
        setPopupOpen(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setPopupVariant("error");
      setPopupTitle(t("Unerwarteter Fehler", "Unexpected error"));
      setPopupMessage(t("Bitte versuche es später erneut.", "Please try again later."));
      setPopupOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="kontakt" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            {t("Bereit für den nächsten Schritt?", "Ready for the Next Step?")}
          </h2>
          <p className="text-lg text-slate-600">
            {t(
              "Lass uns deine Vision besprechen. Diskret, direkt und zielorientiert.",
              "Let’s discuss your vision in confidence — discreet, focused, and driven by clear outcomes."
            )}
          </p>
        </div>

        <Card className="max-w-xl mx-auto border border-slate-200 bg-white shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-slate-900">{t("Kontakt aufnehmen", "Get in touch")}</CardTitle>
            <CardDescription className="text-slate-500 text-base">
              {t("Füll das Formular aus. Wir melden uns innerhalb von 24h.", "Fill out the form. We’ll respond within 24h.")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-slate-700 font-medium">{t("Vorname", "First name")}</Label>
                  <Input name="firstName" id="firstName" placeholder={t("Max", "John")} className="bg-slate-50 border-slate-200 text-slate-900 focus:ring-emerald-600 h-11" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-slate-700 font-medium">{t("Nachname", "Last name")}</Label>
                  <Input name="lastName" id="lastName" placeholder={t("Mustermann", "Doe")} className="bg-slate-50 border-slate-200 text-slate-900 focus:ring-emerald-600 h-11" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 font-medium">{t("E-Mail", "Email")}</Label>
                <Input name="email" id="email" type="email" placeholder="max@firma.de" className="bg-slate-50 border-slate-200 text-slate-900 focus:ring-emerald-600 h-11" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="topic" className="text-slate-700 font-medium">{t("Interesse an", "Interested in")}</Label>
                <select 
                  name="topic"
                  id="topic" 
                  className="flex h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">{t("Bitte wählen...", "Please select...")}</option>
                  <option value="gruendung">{t("Firmengründung", "Company formation")}</option>
                  <option value="investment">{t("Investment", "Investment")}</option>
                  <option value="auswanderung">{t("Auswanderung", "Relocation")}</option>
                  <option value="sonstiges">{t("Sonstiges", "Other")}</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-700 font-medium">{t("Nachricht", "Message")}</Label>
                <Textarea 
                  name="message"
                  id="message" 
                  placeholder={t("Wie können wir dich unterstützen?", "How can we help?")} 
                  className="min-h-[120px] bg-slate-50 border-slate-200 text-slate-900 focus:ring-emerald-600"
                  required 
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-slate-900 hover:bg-slate-800 text-white h-12 text-base font-semibold shadow-md">
                {isSubmitting ? t("Sende...", "Sending...") : t("Strategie-Gespräch anfragen", "Request a strategy call")}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Dialog open={popupOpen} onOpenChange={setPopupOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle
                className={popupVariant === "success" ? "text-emerald-800" : "text-red-700"}
              >
                {popupTitle}
              </DialogTitle>
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
    </section>
  );
}
