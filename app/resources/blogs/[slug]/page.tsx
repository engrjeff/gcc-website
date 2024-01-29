import Image from "next/image"
import { notFound } from "next/navigation"
import { getPost } from "@/services/posts"
import { format, parseISO } from "date-fns"

import { PostContent } from "../../_component/post-content"

function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)

  if (!post) return notFound()

  return (
    <div className="my-4 lg:my-20">
      <article className="container prose px-2">
        <div>
          <div className="not-prose relative mb-6 aspect-video">
            <Image
              src={post.bannerUrl}
              alt={post.title}
              fill
              className="block h-auto w-auto object-cover"
            />
          </div>
          <h1 className="mb-4 text-2xl">{post.title}</h1>
          <p className="mb-0 text-sm text-muted-foreground">
            By: {post.author}
          </p>
          <time className="text-xs text-muted-foreground">
            {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
          </time>
          <div className="mt-3 text-xs">
            <span className="font-semibold">Topics:</span>{" "}
            <span>{post.tags.join(", ")}</span>
          </div>
        </div>
        <PostContent post={post} />
      </article>
    </div>
  )
}

export default BlogPostPage
