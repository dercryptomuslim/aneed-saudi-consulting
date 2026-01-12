import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.aneedashraf.de";
  const now = new Date();

  const routes = [
    "",
    "/services",
    "/erfolgsgeschichten",
    "/ueber-mich",
    "/anfrage",
    "/impressum",
    "/datenschutz",
    "/agb",
    "/terminbuchung",
    "/danke",
    "/en",
    "/en/services",
    "/en/erfolgsgeschichten",
    "/en/ueber-mich",
    "/en/anfrage",
    "/en/booking",
    "/en/impressum",
    "/en/datenschutz",
    "/en/agb",
    "/en/thankyou",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}


