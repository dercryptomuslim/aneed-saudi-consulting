import type { MetadataRoute } from "next";
import { blogPostsDe, blogPostsEn } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.aneedashraf.de";
  const now = new Date();

  const staticRoutes = [
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
    "/blog",
    "/en",
    "/en/services",
    "/en/case-studies",
    "/en/about",
    "/en/inquiry",
    "/en/booking",
    "/en/imprint",
    "/en/privacy",
    "/en/terms",
    "/en/thankyou",
    "/en/blog",
  ];

  const blogRoutesDe = blogPostsDe.map((post) => `/blog/${post.slug}`);
  const blogRoutesEn = blogPostsEn.map((post) => `/en/blog/${post.slug}`);

  const allRoutes = [...staticRoutes, ...blogRoutesDe, ...blogRoutesEn];

  return allRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
