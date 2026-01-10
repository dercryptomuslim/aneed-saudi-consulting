import Link from "next/link";
import { Instagram, Youtube, Linkedin } from "lucide-react";

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
                      <li className="hover:text-white transition-colors cursor-pointer">
                        <a href="mailto:info@oasisgate.de">info@oasisgate.de</a>
                      </li>
                    </ul>
                    
                    <div className="flex gap-4 mt-6">
                      <a href="https://www.instagram.com/ashrafbusiness/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </a>
                      <a href="https://www.youtube.com/channel/UCMqDVsIAsY2E9z35FACnBMg" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <Youtube className="h-5 w-5" />
                        <span className="sr-only">YouTube</span>
                      </a>
                      <a href="https://www.linkedin.com/in/aneed-ashraf/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-slate-900 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Aneed Ashraf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
