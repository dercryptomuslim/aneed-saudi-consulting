export type Locale = "de" | "en";

export const defaultLocale: Locale = "de";
export const supportedLocales: Locale[] = ["de", "en"];

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
    return hash ? `${normalizedPath}#${hash}` : normalizedPath;
  }

  // already localized
  const enPath =
    normalizedPath === "/"
      ? "/en"
      : normalizedPath === "/en" || normalizedPath.startsWith("/en/")
        ? normalizedPath
        : `/en${normalizedPath}`;

  return hash ? `${enPath}#${hash}` : enPath;
}
