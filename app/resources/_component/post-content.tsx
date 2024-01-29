"use client"

import { Post } from "@/.contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"

export function PostContent({ post }: { post: Post }) {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className="prose-blockquote:prose-quoteless lg:text-justify">
      <MDXContent />
    </div>
  )
}
