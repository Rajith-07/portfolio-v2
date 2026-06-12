import type { MetadataRoute } from "next";
import { navItems, profile } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return navItems.map((item) => ({ url: `${profile.site}${item.href === "/" ? "" : item.href}`, lastModified: new Date(), changeFrequency: "monthly", priority: item.href === "/" ? 1 : 0.8 }));
}
