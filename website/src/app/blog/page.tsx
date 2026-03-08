import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

import { Heading } from "#/components/page-header";
import { db } from "#/backend/db";
import { blogs } from "#/backend/db/schema";
import { desc, eq } from "drizzle-orm";
import { JsonLd } from "#/components/json-ld";
import type { Blog, WithContext } from "schema-dts";
import { siteConfig } from "#/configs/site";
import { cacheTag } from "next/cache";

export const metadata: Metadata = {
    title: "Blog",
    description: "Dive into the latest in software development, cloud architecture, and cybersecurity. Professional insights to engineer success.",
    openGraph: {
        title: "Blog - Dotenv",
        description: "Dive into the latest in software development, cloud architecture, and cybersecurity. Professional insights to engineer success.",
    }
};


export default async function Page() {
    "use cache";
    const allBlogs = await db
        .select()
        .from(blogs)
        .where(eq(blogs.published, "published"))
        .orderBy(desc(blogs.createdAt));

    const blogJsonLd: WithContext<Blog> = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Dotenv Blog",
        "description": "Dive into the latest in software development, cloud architecture, and cybersecurity.",
        "url": `${siteConfig.url}/blog`,
        "publisher": {
            "@type": "Organization",
            "name": "Dotenv",
            "logo": {
                "@type": "ImageObject",
                "url": `${siteConfig.url}/logo.png`
            }
        },
        "blogPost": allBlogs.map((post) => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "url": `${siteConfig.url}/blog/${post.slug}`,
            "datePublished": new Date(post.createdAt).toISOString()
        }))
    };

    cacheTag("blog");

    return (
        <>
            <JsonLd data={blogJsonLd} />
            <Heading
                link="#blogs"
                name="Blog"
                pageDescription="Dive into the latest in software development, cloud architecture, and cybersecurity. From technical deep dives to industry trends, we’ve got you covered."
                pageTitleBold="Insights That "
                pageTitleLight="Engineer Success"
            />
            <section id="blogs" className="mx-auto px-4 md:px-6 py-12 container">
                {allBlogs.length === 0 ? (
                    <div className="py-20 text-muted-foreground text-center">
                        <p className="text-lg">No blog posts found. Check back later!</p>
                    </div>
                ) : (
                    <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {allBlogs.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}` as any}
                                className="group flex flex-col justify-between bg-background hover:shadow-md border hover:border-foreground/20 rounded-2xl overflow-hidden transition-all"
                            >
                                {post.imageUrl ? (
                                    <div className="bg-muted w-full aspect-video overflow-hidden">
                                        <img
                                            src={post.imageUrl}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ) : (
                                    <div className="flex justify-center items-center bg-muted/50 w-full aspect-video">
                                        <div className="text-muted-foreground text-sm">No image</div>
                                    </div>
                                )}
                                <div className="flex flex-col flex-1 p-6">
                                    <div className="flex items-center gap-2 mb-3 text-muted-foreground text-xs">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>
                                            {new Intl.DateTimeFormat('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            }).format(new Date(post.createdAt))}
                                        </span>
                                    </div>
                                    <h2 className="mb-2 font-bold text-xl decoration-primary group-hover:underline underline-offset-4 tracking-tight">
                                        {post.title}
                                    </h2>
                                    <p className="flex-1 mb-4 text-muted-foreground text-sm line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center mt-auto font-medium text-primary text-sm">
                                        Read post <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </>
    );
}
