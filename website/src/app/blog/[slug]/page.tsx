import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, UserRound } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { db } from "#/backend/db";
import { blogs } from "#/backend/db/schema";
import { eq } from "drizzle-orm";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;

    // Using string interpolation or eq isn't directly compatible in findFirst unless mapped.
    const [post] = await db.select().from(blogs).where(eq(blogs.slug, slug)).limit(1);

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

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const [post] = await db.select().from(blogs).where(eq(blogs.slug, slug)).limit(1);

    if (!post || post.published !== "published") {
        notFound();
    }

    return (
        <article className="pb-20 min-h-screen">
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
                        <div className="flex items-center gap-2">
                            <UserRound className="w-5 h-5" />
                            <span>{post.author || "Admin"}</span>
                        </div>
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
