import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.SITE_URL || "http://localhost:3000";
  const now = new Date();

  const tours = await prisma.tour.findMany({
    select: { slug: true, updatedAt: true },
  });

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/tours`, lastModified: now },
    { url: `${base}/about`, lastModified: now },
    { url: `${base}/contact`, lastModified: now },
    { url: `${base}/policies/terms`, lastModified: now },
    { url: `${base}/policies/privacy`, lastModified: now },
    { url: `${base}/policies/cancellation`, lastModified: now },
  ];

  const tourPages: MetadataRoute.Sitemap = tours.map((t) => ({
    url: `${base}/tours/${t.slug}`,
    lastModified: t.updatedAt ?? now,
  }));

  return [...staticPages, ...tourPages];
}
