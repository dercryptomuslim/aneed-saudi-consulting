"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      email: formData.get("email"),
      type: `Kontaktformular - ${formData.get("topic")}`,
      message: formData.get("message"),
    };

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Danke für deine Anfrage! Wir melden uns in Kürze.");
        (e.target as HTMLFormElement).reset();
      } else {
        alert("Fehler beim Senden. Bitte versuche es später erneut.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Ein unerwarteter Fehler ist aufgetreten.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="kontakt" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-lg text-slate-600">
            Lass uns deine Vision besprechen. Diskret, direkt und zielorientiert.
          </p>
        </div>

        <Card className="max-w-xl mx-auto border border-slate-200 bg-white shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-slate-900">Kontakt aufnehmen</CardTitle>
            <CardDescription className="text-slate-500 text-base">
              Füll das Formular aus. Wir melden uns innerhalb von 24h.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-slate-700 font-medium">Vorname</Label>
                  <Input name="firstName" id="firstName" placeholder="Max" className="bg-slate-50 border-slate-200 text-slate-900 focus:ring-emerald-600 h-11" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-slate-700 font-medium">Nachname</Label>
                  <Input name="lastName" id="lastName" placeholder="Mustermann" className="bg-slate-50 border-slate-200 text-slate-900 focus:ring-emerald-600 h-11" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 font-medium">E-Mail</Label>
                <Input name="email" id="email" type="email" placeholder="max@firma.de" className="bg-slate-50 border-slate-200 text-slate-900 focus:ring-emerald-600 h-11" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="topic" className="text-slate-700 font-medium">Interesse an</Label>
                <select 
                  name="topic"
                  id="topic" 
                  className="flex h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Bitte wählen...</option>
                  <option value="gruendung">Firmengründung</option>
                  <option value="investment">Investment</option>
                  <option value="auswanderung">Auswanderung</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-700 font-medium">Nachricht</Label>
                <Textarea 
                  name="message"
                  id="message" 
                  placeholder="Wie können wir dich unterstützen?" 
                  className="min-h-[120px] bg-slate-50 border-slate-200 text-slate-900 focus:ring-emerald-600"
                  required 
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-slate-900 hover:bg-slate-800 text-white h-12 text-base font-semibold shadow-md">
                {isSubmitting ? "Sende..." : "Strategie-Gespräch anfragen"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
