export type Locale = "de" | "en";

export const defaultLocale: Locale = "de";
export const supportedLocales: Locale[] = ["de", "en"];

const deToEnPaths: Record<string, string> = {
  "/ueber-mich": "/about",
  "/erfolgsgeschichten": "/case-studies",
  "/anfrage": "/inquiry",
  "/impressum": "/imprint",
  "/datenschutz": "/privacy",
  "/agb": "/terms",
  "/terminbuchung": "/booking",
  "/danke": "/thankyou",
  "/blog": "/blog"
};

const enToDePaths: Record<string, string> = Object.entries(deToEnPaths).reduce((acc, [de, en]) => {
  acc[en] = de;
  return acc;
}, {} as Record<string, string>);

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de";
}

export function stripLocaleFromPathname(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.replace(/^\/en/, "") || "/";
  return pathname || "/";
}

export function localizeHref(href: string, locale: Locale): string {
  // external / mailto / tel
  if (/^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }
  // hash-only href stays on current page
  if (href.startsWith("#")) return href;

  const [path, hash] = href.split("#");
  const normalizedPath = path || "/";

  if (locale === "de") {
    // For German, we assume the input href is already the German path (standard Next.js behavior)
    // But if we accidentally pass an English path like "/about", we should try to map it back?
    // Ideally, we always pass German paths as "keys".
    return hash ? `${normalizedPath}#${hash}` : normalizedPath;
  }

  // English localization
  let enPathPart = normalizedPath;
  
  // Check if we have a translation for this specific path
  if (deToEnPaths[normalizedPath]) {
    enPathPart = deToEnPaths[normalizedPath];
  }

  const enPath =
    enPathPart === "/"
      ? "/en"
      : `/en${enPathPart}`;

  return hash ? `${enPath}#${hash}` : enPath;
}

export function switchLocalePath(currentPathname: string, targetLocale: Locale): string {
  const currentLocale = getLocaleFromPathname(currentPathname);
  
  if (currentLocale === targetLocale) return currentPathname;

  let basePath = stripLocaleFromPathname(currentPathname);

  // Wenn wir aktuell auf Englisch sind, ist basePath z.B. "/about".
  // Wir müssen das erst in "/ueber-mich" (Deutsch/Base) zurückübersetzen.
  if (currentLocale === "en") {
    if (enToDePaths[basePath]) {
      basePath = enToDePaths[basePath];
    }
  }

  // Jetzt ist basePath der deutsche Pfad (oder neutral, wenn keine Übersetzung existiert).
  // Dann lokalisieren wir ihn für das Ziel.
  return localizeHref(basePath, targetLocale);
}
