import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, TrendingUp, Plane } from "lucide-react";

const services = [
  {
    title: "Firmengründung",
    description: "Starten Sie Ihr Business in Saudi-Arabien. Wir übernehmen den kompletten Prozess für Sie.",
    icon: Building2,
    features: [
      "100% Eigentum (wo möglich)",
      "Lizenzierung & Behördengänge",
      "Bankkontoeröffnung",
      "Steuerberatung & Compliance"
    ],
    id: "gruendung"
  },
  {
    title: "Investment",
    description: "Nutzen Sie das Wachstum der Vision 2030. Wir identifizieren lukrative Möglichkeiten.",
    icon: TrendingUp,
    features: [
      "Immobilien-Investments",
      "Unternehmensbeteiligungen",
      "Marktanalyse & Strategie",
      "Netzwerk zu lokalen Partnern"
    ],
    id: "investment"
  },
  {
    title: "Auswanderung",
    description: "Ihr nahtloser Start in ein neues Leben. Wir kümmern uns um alle Formalitäten.",
    icon: Plane,
    features: [
      "Visa-Service (Iqama)",
      "Wohnungssuche & Schulen",
      "Führerschein & ID",
      "Kulturelles Onboarding"
    ],
    id: "auswanderung"
  },
];

export function Services() {
  return (
    <section id="leistungen" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Unsere Expertise für Ihre Ziele
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wir bieten Ihnen ein Rundum-Sorglos-Paket für Ihren erfolgreichen Start im Königreich Saudi-Arabien.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col h-full border-none shadow-lg" id={service.id}>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-muted-foreground">
                      <div className="mr-3 h-2 w-2 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

