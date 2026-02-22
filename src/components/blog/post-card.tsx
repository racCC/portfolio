import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Post } from "@/lib/blog";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="rounded-xl border border-border/50 bg-card transition-colors hover:border-border">
      <CardContent className="p-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-wider font-medium text-muted-foreground">
            {formattedDate}
          </p>
          <h2 className="text-xl font-semibold tracking-tight">
            <Link
              href={`/blog/${post.slug}`}
              className="hover:text-muted-foreground transition-colors"
            >
              {post.title}
            </Link>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {post.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-normal">
                {tag}
              </Badge>
            ))}
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            Read more
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
