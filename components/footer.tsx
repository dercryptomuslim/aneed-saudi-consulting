import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 text-slate-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white">Aneed Ashraf</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Dein strategischer Partner für Saudi-Arabien. <br/>
              Investment. Gründung. Zukunft.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6">Leistungen</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/services#gruendung" className="hover:text-white transition-colors">Firmengründung</Link></li>
              <li><Link href="/services#investment" className="hover:text-white transition-colors">Investment</Link></li>
              <li><Link href="/services#auswanderung" className="hover:text-white transition-colors">Auswanderung</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Rechtliches</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/impressum" className="hover:text-emerald-500 transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-emerald-500 transition-colors">Datenschutz</Link></li>
              <li><Link href="#" className="hover:text-emerald-500 transition-colors">AGB</Link></li>
            </ul>
          </div>

          <div>
                    <h4 className="font-semibold text-white mb-6">Kontakt</h4>
                    <ul className="space-y-3 text-sm text-slate-400">
                      <li className="flex items-center gap-2">Medina, Saudi Arabia 🇸🇦</li>
                      <li className="hover:text-white transition-colors cursor-pointer">info@aneedashraf.de</li>
                    </ul>
          </div>
        </div>
        
        <div className="mt-16 border-t border-slate-900 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Aneed Ashraf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
