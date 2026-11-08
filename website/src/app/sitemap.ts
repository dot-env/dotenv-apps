import type { MetadataRoute } from "next";
import { cacheLife, cacheTag } from "next/cache";
import { desc, eq } from "drizzle-orm";
import { db } from "#/backend/db";
import { blogs } from "#/backend/db/schema";
import { siteConfig } from "#/configs/site";
import { services } from "#/data/services";

const STATIC_ROUTES = [
  "/",
  "/about-us",
  "/blog",
  "/contact-us",
  "/our-work",
  "/privacy-policy",
  "/services",
] as const;

function absoluteUrl(route: string) {
  if (route === "/") {
    return siteConfig.url;
  }

  return `${siteConfig.url}${route}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  "use cache";
  cacheLife("days");
  cacheTag("blog");

  const posts = await db
    .select({
      slug: blogs.slug,
      updatedAt: blogs.updatedAt,
    })
    .from(blogs)
    .where(eq(blogs.published, "published"))
    .orderBy(desc(blogs.updatedAt));

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
    url: absoluteUrl(route),
  }));

  const serviceEntries: MetadataRoute.Sitemap = Object.values(services).map(
    (service) => ({
      changeFrequency: "monthly",
      priority: 0.7,
      url: absoluteUrl(`/services/${service.id}`),
    }),
  );

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    changeFrequency: "monthly",
    lastModified: post.updatedAt,
    priority: 0.6,
    url: absoluteUrl(`/blog/${post.slug}`),
  }));

  return [...staticEntries, ...serviceEntries, ...postEntries];
}
