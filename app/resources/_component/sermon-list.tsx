import Image from "next/image"
import Link from "next/link"

import { SideLinkItem, SideLinks } from "@/components/side-links"

function SermonList() {
  return (
    <div className="flex gap-8">
      <div className="flex-1">
        <h2 className="my-6 text-3xl font-bold">Sermons</h2>
        <ul className="space-y-6">
          {Array.from(Array(8).keys()).map((n) => (
            <li key={`sermon-${n + 1}`}>
              <article className="group relative z-0 flex h-[240px] w-full items-center overflow-hidden shadow-sm lg:h-[310px]">
                <Image
                  src="/resources-banner.jpg"
                  alt="sermon banner"
                  fill
                  className="z-[-1] block h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="dark w-2/3 space-y-3 bg-background p-6 text-foreground lg:w-1/2">
                  <time className="text-xs font-semibold text-muted-foreground">
                    January 5, 2024
                  </time>
                  <h3 className="text-lg font-bold lg:text-2xl">
                    Dominion: Part 3
                  </h3>
                  <div className="text-xs font-semibold text-muted-foreground">
                    <span>
                      By: <Link href="/">Pastor John De Guzman</Link>
                    </span>
                    <br />
                    <span>
                      Topics: <Link href="/">salvation</Link>
                    </span>
                  </div>
                </div>
                <Link href="/" className="absolute inset-0">
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

export default SermonList
