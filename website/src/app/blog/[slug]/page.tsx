import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeft, Calendar, UserRound } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { db } from "#/backend/db";
import { blogs } from "#/backend/db/schema";
import { eq } from "drizzle-orm";
import { JsonLd } from "#/components/json-ld";
import type { BlogPosting, WithContext } from "schema-dts";
import { siteConfig } from "#/configs/site";
import Author from "#/components/post/author";
import { cacheTag } from "next/cache";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

async function getPublishedSlugs() {
    "use cache";
    cacheTag("blog");
    const posts = await db
        .select({ slug: blogs.slug })
        .from(blogs)
        .where(eq(blogs.published, "published"));
    return posts;
}

async function getPost(slug: string) {
    "use cache";
    cacheTag("blog-post-" + slug);
    const [post] = await db.select().from(blogs).where(eq(blogs.slug, slug)).limit(1);
    return post;
}

export async function generateStaticParams() {
    const posts = await getPublishedSlugs();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} - Dotenv Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: post.imageUrl ? [{ url: post.imageUrl }] : undefined,
        },
    };
}

async function BlogPost({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post || post.published !== "published") {
        notFound();
    }

    const jsonLd: WithContext<BlogPosting> = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.imageUrl ? [post.imageUrl] : undefined,
        "datePublished": new Date(post.createdAt).toISOString(),
        "dateModified": new Date(post.updatedAt || post.createdAt).toISOString(),
        "author": [{
            "@type": "Person",
            "name": post.author || "Admin",
            "url": siteConfig.url
        }],
        "publisher": {
            "@type": "Organization",
            "name": "Dotenv",
            "logo": {
                "@type": "ImageObject",
                "url": `${siteConfig.url}/logo.png`
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteConfig.url}/blog/${post.slug}`
        }
    };

    return (
        <article className="pb-20 min-h-screen">
            <JsonLd data={jsonLd} />
            {/* Header / Hero section */}
            <div className="relative bg-background mb-12 pt-32 lg:pt-48 pb-20 lg:pb-32 border-b overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/5 opacity-30 bg-size-[30px_30px] mask-[radial-gradient(white,transparent_80%)]"></div>

                <div className="z-10 relative mx-auto px-4 md:px-6 max-w-4xl container">
                    <Link
                        href="/blog"
                        className="inline-flex items-center mb-8 font-medium text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                        <ArrowLeft className="mr-2 w-4 h-4" />
                        Back to all posts
                    </Link>

                    <h1 className="mb-6 font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                        <Author post={post} />

                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <time dateTime={new Date(post.createdAt).toISOString()}>
                                {new Intl.DateTimeFormat('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric'
                                }).format(new Date(post.createdAt))}
                            </time>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content section */}
            <div className="mx-auto px-4 md:px-6 max-w-4xl container">
                {post.imageUrl && (
                    <div className="bg-muted mb-12 border rounded-2xl w-full aspect-video overflow-hidden">
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                <div className="prose-pre:bg-muted/50 dark:prose-invert prose-img:border prose-pre:border prose-img:rounded-xl max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:underline prose-a:no-underline prose-headings:tracking-tight prose prose-neutral prose-lg">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            </div>
        </article>
    );
}

function BlogPostFallback() {
    return (
        <article className="pb-20 min-h-screen">
            <div className="relative bg-background mb-12 pt-32 lg:pt-48 pb-20 lg:pb-32 border-b overflow-hidden">
                <div className="z-10 relative mx-auto px-4 md:px-6 max-w-4xl container">
                    <div className="mb-8 h-5 w-36 rounded bg-muted" />
                    <div className="mb-6 h-12 w-3/4 rounded bg-muted" />
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <UserRound className="w-5 h-5" />
                        <div className="h-5 w-28 rounded bg-muted" />
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    return (
        <Suspense fallback={<BlogPostFallback />}>
            <BlogPost params={params} />
        </Suspense>
    );
}
