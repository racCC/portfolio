import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { PostCard } from "@/components/blog/post-card";

export const metadata = {
  title: "Blogs | Rachit Pednekar",
  description: "Thoughts on backend engineering, AI tooling, and cloud-native development.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Thoughts on backend engineering, AI tooling, and building things that scale.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet. Check back soon.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </main>
  );
}
