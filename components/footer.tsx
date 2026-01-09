import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Aneed Ashraf</h3>
            <p className="text-sm text-muted-foreground">
              Ihr Experte für Saudi-Arabien. Gründung, Investment und Auswanderung aus einer Hand.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#gruendung" className="hover:text-primary">Firmengründung</Link></li>
              <li><Link href="#investment" className="hover:text-primary">Investment</Link></li>
              <li><Link href="#auswanderung" className="hover:text-primary">Auswanderung</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary">Impressum</Link></li>
              <li><Link href="#" className="hover:text-primary">Datenschutz</Link></li>
              <li><Link href="#" className="hover:text-primary">AGB</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Riyadh, Saudi Arabia</li>
              <li>info@aneedashraf.com</li>
              <li>+966 50 000 0000</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aneed Ashraf. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}

