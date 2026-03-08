import { UserRound } from "lucide-react";
import Link from "next/link";
import { type InferSelectModel } from "drizzle-orm";
import { blogs } from "#/backend/db/schema";

type Blog = InferSelectModel<typeof blogs>;

const Author = ({ post }: { post: Blog }) => {
    return (
        <>
            {post.authorUrl ? (
                <Link href={post.authorUrl as any} target="_blank" className="flex items-center gap-2 hover:text-foreground hover:underline transition-colors">
                    {post.authorImage ? (
                        <img src={post.authorImage} alt={post.author || "Admin"} className="rounded-full w-5 h-5" />
                    ) : (
                        <UserRound className="w-5 h-5" />
                    )}
                    <span>{post.author || "Admin"}</span>
                </Link>
            ) : (
                <div className="flex items-center gap-2">
                    {post.authorImage ? (
                        <img src={post.authorImage} alt={post.author || "Admin"} className="rounded-full w-5 h-5" />
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