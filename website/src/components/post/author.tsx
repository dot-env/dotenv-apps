import type { Route } from "next";
import Image from "next/image";
import { UserRound } from "lucide-react";
import Link from "next/link";
import { type InferSelectModel } from "drizzle-orm";
import { blogs } from "#/backend/db/schema";

type Blog = InferSelectModel<typeof blogs>;

const Author = ({ post }: { post: Blog }) => {
    return (
        <>
            {post.authorUrl ? (
                <Link href={post.authorUrl as Route} target="_blank" className="flex items-center gap-2 hover:text-foreground hover:underline transition-colors">
                    {post.authorImage ? (
                        <Image
                            alt={post.author || "Admin"}
                            className="rounded-full w-5 h-5"
                            height={20}
                            src={post.authorImage}
                            width={20}
                        />
                    ) : (
                        <UserRound className="w-5 h-5" />
                    )}
                    <span>{post.author || "Admin"}</span>
                </Link>
            ) : (
                <div className="flex items-center gap-2">
                    {post.authorImage ? (
                        <Image
                            alt={post.author || "Admin"}
                            className="rounded-full w-5 h-5"
                            height={20}
                            src={post.authorImage}
                            width={20}
                        />
                    ) : (
                        <UserRound className="w-5 h-5" />
                    )}
                    <span>{post.author || "Admin"}</span>
                </div>
            )}
        </>
    );
};

export default Author;