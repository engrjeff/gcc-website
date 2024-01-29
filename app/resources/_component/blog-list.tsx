import Image from "next/image"
import Link from "next/link"
import { getPosts } from "@/services/posts"

import { SideLinkItem, SideLinks } from "@/components/side-links"

function BlogList() {
  const posts = getPosts()

  return (
    <div className="flex gap-8">
      <div className="flex-1">
        <h2 className="my-6 text-3xl font-bold">Blogs</h2>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={`blog-post-${post._id}`}>
              <article className="group relative z-0 flex h-[240px] w-full items-center overflow-hidden shadow-sm lg:h-[310px]">
                <Image
                  src={post.bannerUrl}
                  alt={post.title}
                  fill
                  className="z-[-1] block h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="dark w-2/3 space-y-3 bg-background p-6 text-foreground lg:w-1/2">
                  <time className="text-xs font-semibold text-muted-foreground">
                    {post.publishedAt}
                  </time>
                  <h3 className="text-lg font-bold lg:text-2xl">
                    {post.title}
                  </h3>
                  <div className="text-xs font-semibold text-muted-foreground">
                    <span>
                      By: <Link href="/">{post.author}</Link>
                    </span>
                    <br />
                    <div>
                      Topics: <span>{post.tags.slice(0, 3).join(", ")}</span>
                    </div>
                  </div>
                </div>
                <Link href={post.url} className="absolute inset-0">
                  <span className="sr-only">Link here</span>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden w-[520px] shrink-0 grow-0 lg:block">
        <SideLinks title="Index">
          <SideLinkItem href="/">All</SideLinkItem>
          <SideLinkItem href="/">Scripture</SideLinkItem>
          <SideLinkItem href="/">Series</SideLinkItem>
          <SideLinkItem href="/">Topic</SideLinkItem>
        </SideLinks>
      </div>
    </div>
  )
}

export default BlogList
