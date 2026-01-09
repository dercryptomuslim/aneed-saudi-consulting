"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export function Contact() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Implement form submission logic
    alert("Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze.");
  }

  return (
    <section id="kontakt" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Starten Sie jetzt Ihre Reise
          </h2>
          <p className="text-lg text-muted-foreground">
            Lassen Sie uns über Ihre Pläne sprechen. Vereinbaren Sie ein unverbindliches Erstgespräch.
          </p>
        </div>

        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle>Kontaktformular</CardTitle>
            <CardDescription>
              Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Vorname</Label>
                  <Input id="firstName" placeholder="Max" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nachname</Label>
                  <Input id="lastName" placeholder="Mustermann" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input id="email" type="email" placeholder="max@beispiel.de" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="topic">Thema</Label>
                <select 
                  id="topic" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                <Label htmlFor="message">Nachricht</Label>
                <Textarea 
                  id="message" 
                  placeholder="Erzählen Sie uns kurz von Ihrem Vorhaben..." 
                  className="min-h-[120px]"
                  required 
                />
              </div>

              <Button type="submit" className="w-full">
                Anfrage senden
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

