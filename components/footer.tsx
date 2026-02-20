"use client";

import Link from "next/link";
import { Instagram, Youtube, Linkedin } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";
import { trackEmailClick, trackExternalLinkClick } from "@/lib/analytics";

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.59 7.29c-1.2-.7-2.16-1.66-2.86-2.86-.34-.58-.58-1.22-.7-1.9h-3.18v13.05c0 1.44-1.17 2.62-2.62 2.62-1.44 0-2.62-1.17-2.62-2.62 0-1.44 1.17-2.62 2.62-2.62.27 0 .54.04.79.12V9.85c-.26-.04-.52-.06-.79-.06-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8 5.8-2.6 5.8-5.8V9.5c1.2.86 2.67 1.37 4.26 1.37V7.74c-.63 0-1.25-.16-1.78-.45z" />
    </svg>
  );
}

export function Footer({ locale = "de" }: { locale?: Locale }) {
  const t = (de: string, en: string) => (locale === "en" ? en : de);
  const href = (raw: string) => localizeHref(raw, locale);
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 text-slate-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white">Aneed Ashraf</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t("Dein strategischer Partner für Saudi-Arabien.", "Your strategic partner for Saudi Arabia.")} <br/>
              {t("Investment. Gründung. Zukunft.", "Investment. Setup. Future.")}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6">{t("Leistungen", "Services")}</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href={href("/services#reise-zum-business")} className="hover:text-white transition-colors">{t("Unternehmensaufbau & Marktführung", "Business Setup & Market Management")}</Link></li>
              <li><Link href={href("/services#gruendung")} className="hover:text-white transition-colors pl-4 text-xs">{t("→ Unternehmensgründung", "→ Company formation")}</Link></li>
              <li><Link href={href("/services#aufbau")} className="hover:text-white transition-colors pl-4 text-xs">{t("→ Unternehmensaufbau", "→ Business setup")}</Link></li>
              <li><Link href={href("/services#fuehrung")} className="hover:text-white transition-colors pl-4 text-xs">{t("→ Unternehmensführung", "→ Operations & management")}</Link></li>
              <li><Link href={href("/services#investment")} className="hover:text-white transition-colors">{t("Investment", "Investment")}</Link></li>
              <li><Link href={href("/services#beratung")} className="hover:text-white transition-colors">{t("Unternehmensberatung", "Business consulting")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">{t("Rechtliches", "Legal")}</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href={href("/impressum")} className="hover:text-emerald-500 transition-colors">{t("Impressum", "Imprint")}</Link></li>
              <li><Link href={href("/datenschutz")} className="hover:text-emerald-500 transition-colors">{t("Datenschutz", "Privacy")}</Link></li>
              <li><Link href={href("/agb")} className="hover:text-emerald-500 transition-colors">{t("AGB", "Terms")}</Link></li>
            </ul>
          </div>

          <div>
                    <h4 className="font-semibold text-white mb-6">{t("Kontakt", "Contact")}</h4>
                    <ul className="space-y-3 text-sm text-slate-400">
                      <li className="flex items-center gap-2">Medina, Saudi Arabia 🇸🇦</li>
                      <li className="hover:text-white transition-colors cursor-pointer">
                        <a 
                          href="mailto:info@oasisgate.de"
                          onClick={() => trackEmailClick("info@oasisgate.de")}
                        >
                          info@oasisgate.de
                        </a>
                      </li>
                    </ul>
                    
                    <div className="flex gap-4 mt-6">
                      <a 
                        href="https://www.instagram.com/aneedashraf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-400 hover:text-white transition-colors"
                        onClick={() => trackExternalLinkClick({ url: "https://www.instagram.com/aneedashraf", linkText: "Instagram" })}
                      >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </a>
                      <a 
                        href="https://www.youtube.com/@aneed-ashraf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-400 hover:text-white transition-colors"
                        onClick={() => trackExternalLinkClick({ url: "https://www.youtube.com/@aneed-ashraf", linkText: "YouTube" })}
                      >
                        <Youtube className="h-5 w-5" />
                        <span className="sr-only">YouTube</span>
                      </a>
                      <a 
                        href="https://tiktok.com/@aneedashraf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-400 hover:text-white transition-colors"
                        onClick={() => trackExternalLinkClick({ url: "https://tiktok.com/@aneedashraf", linkText: "TikTok" })}
                      >
                        <TikTokIcon className="h-5 w-5" />
                        <span className="sr-only">TikTok</span>
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/aneed-ashraf/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-400 hover:text-white transition-colors"
                        onClick={() => trackExternalLinkClick({ url: "https://www.linkedin.com/in/aneed-ashraf/", linkText: "LinkedIn" })}
                      >
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
