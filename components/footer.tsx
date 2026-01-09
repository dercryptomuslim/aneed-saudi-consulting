import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Aneed Ashraf</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Ihr strategischer Partner für Saudi-Arabien. <br/>
              Investment. Gründung. Zukunft.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6">Leistungen</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><Link href="#gruendung" className="hover:text-emerald-500 transition-colors">Firmengründung</Link></li>
              <li><Link href="#investment" className="hover:text-emerald-500 transition-colors">Investment</Link></li>
              <li><Link href="#auswanderung" className="hover:text-emerald-500 transition-colors">Auswanderung</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Rechtliches</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><Link href="#" className="hover:text-emerald-500 transition-colors">Impressum</Link></li>
              <li><Link href="#" className="hover:text-emerald-500 transition-colors">Datenschutz</Link></li>
              <li><Link href="#" className="hover:text-emerald-500 transition-colors">AGB</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Kontakt</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li className="flex items-center gap-2">Riyadh, Saudi Arabia 🇸🇦</li>
              <li className="hover:text-white transition-colors cursor-pointer">info@aneedashraf.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 border-t border-neutral-900 pt-8 text-center text-sm text-neutral-600">
          <p>&copy; {new Date().getFullYear()} Aneed Ashraf. Designed with Vision.</p>
        </div>
      </div>
    </footer>
  );
}
