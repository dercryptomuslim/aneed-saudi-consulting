"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export function Contact() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze.");
  }

  return (
    <section id="kontakt" className="py-24 bg-black relative">
       {/* Gradient Glow Background */}
       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-lg text-neutral-400">
            Lassen Sie uns Ihre Vision besprechen. Diskret, direkt und zielorientiert.
          </p>
        </div>

        <Card className="max-w-xl mx-auto border-neutral-800 bg-neutral-900/50 backdrop-blur-xl shadow-2xl">
          <CardHeader>
            <CardTitle className="text-white">Kontakt aufnehmen</CardTitle>
            <CardDescription className="text-neutral-400">
              Füllen Sie das Formular aus. Wir melden uns innerhalb von 24h.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-neutral-300">Vorname</Label>
                  <Input id="firstName" placeholder="Max" className="bg-neutral-950 border-neutral-800 text-white placeholder:text-neutral-600 focus:border-emerald-500/50 focus:ring-emerald-500/20" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-neutral-300">Nachname</Label>
                  <Input id="lastName" placeholder="Mustermann" className="bg-neutral-950 border-neutral-800 text-white placeholder:text-neutral-600 focus:border-emerald-500/50 focus:ring-emerald-500/20" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-neutral-300">E-Mail</Label>
                <Input id="email" type="email" placeholder="max@firma.de" className="bg-neutral-950 border-neutral-800 text-white placeholder:text-neutral-600 focus:border-emerald-500/50 focus:ring-emerald-500/20" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="topic" className="text-neutral-300">Interesse an</Label>
                <select 
                  id="topic" 
                  className="flex h-10 w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/20 focus-visible:border-emerald-500/50 disabled:cursor-not-allowed disabled:opacity-50"
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
                <Label htmlFor="message" className="text-neutral-300">Nachricht</Label>
                <Textarea 
                  id="message" 
                  placeholder="Wie können wir Sie unterstützen?" 
                  className="min-h-[120px] bg-neutral-950 border-neutral-800 text-white placeholder:text-neutral-600 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                  required 
                />
              </div>

              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-11 text-base font-medium">
                Strategie-Gespräch anfragen
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
