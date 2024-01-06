import Image from "next/image"
import Link from "next/link"
import { Headphones } from "lucide-react"

import { cn } from "@/lib/utils"

import Container from "./container"
import { buttonVariants } from "./ui/button"

function ContentGrid() {
  return (
    <Container className="px-0 py-4 md:px-4 xl:py-20">
      <section className="grid grid-cols-1 grid-rows-[1fr_228px_228px] gap-4 md:grid-cols-2 md:grid-rows-[1fr_0.7fr_228px] xl:grid-cols-3 xl:gap-8">
        <div className="row-span-2 bg-white">
          <article className="dark group relative z-0 flex h-full min-h-[480px] flex-col justify-center overflow-hidden bg-background text-foreground">
            <div className="dark absolute -top-7 left-1/2 flex h-20 w-20 -translate-x-1/2 items-end justify-center rounded-full bg-background pb-3.5 text-sm">
              <span className="text-center text-xs font-semibold">
                Featured Blogpost
              </span>
            </div>
            <div className="mt-14 space-y-3 px-6 py-14">
              <time className="text-xs font-semibold">January 5, 2024</time>
              <p className="text-4xl font-bold">The Message of Salvation</p>
              <div className="space-x-2 text-xs font-semibold">
                <span>
                  By: <Link href="/">Pastor John De Guzman</Link>
                </span>
                <span>|</span>
                <span>
                  Topics: <Link href="/">salvation</Link>
                </span>
              </div>
            </div>
            <Image
              src="/blog.jpg"
              alt="featured blog"
              fill
              className="z-[-1] block object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 z-[-1] bg-black/50"
            ></div>
            <div className="mt-auto">
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "h-14 w-full bg-background font-semibold uppercase"
                )}
              >
                Read More
              </Link>
            </div>
            <Link href="/" className="absolute inset-0">
              <span className="sr-only">Link here</span>
            </Link>
          </article>
        </div>
        <div className="md:col-start-1">
          <article className="dark group relative z-0 flex h-full flex-col justify-center overflow-hidden bg-background text-foreground">
            <Image
              src="/series.webp"
              alt="current series banner"
              fill
              className="z-[-1] block object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 z-[-1] bg-black/40"
            ></div>
            <div className="mt-auto">
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "h-14 w-full bg-background font-semibold uppercase"
                )}
              >
                Current Series
              </Link>
            </div>
            <Link href="/" className="absolute inset-0">
              <span className="sr-only">Browse current series here</span>
            </Link>
          </article>
        </div>
        <div className="bg-muted md:col-start-2 md:row-span-1 md:row-start-1">
          <article className="dark group relative z-0 flex h-full min-h-[228px] flex-col justify-center overflow-hidden bg-background text-foreground">
            <p className="text-center text-3xl font-bold uppercase tracking-wide">
              The Gospel
            </p>
            <Image
              src="/gospel.webp"
              alt="the gospel banner"
              fill
              className="z-[-1] block object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 z-[-1] bg-black/40"
            ></div>
            <Link href="/the-gospel" className="absolute inset-0">
              <span className="sr-only">Read the Gospel here</span>
            </Link>
          </article>
        </div>
        <div className="bg-neutral-200 md:col-start-2 md:row-start-2">
          <article className="flex h-full min-h-[200px] transition-shadow hover:shadow-lg">
            <div className="flex h-full items-center border-r border-neutral-300 p-6">
              <Headphones className="h-6 w-6" />
            </div>
            <div className="flex flex-col justify-center space-y-3 px-6">
              <p className="text-xs uppercase text-muted-foreground">
                Featured Sermon
              </p>
              <p className="text-xl font-bold uppercase">The God Who Heals</p>
              <div className="text-xs uppercase text-muted-foreground">
                <time>January 5, 2024</time>
                <span>|</span>
                <span>By: Pastor John De Guzman</span>
              </div>
            </div>
          </article>
        </div>
        <div className="md:col-start-2">
          <article className="dark group relative z-0 flex h-full min-h-[228px] flex-col justify-center overflow-hidden bg-background text-foreground">
            <Image
              src="/hero.jpg"
              alt="latest event banner"
              fill
              className="z-[-1] block object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 z-[-1] bg-black/40"
            ></div>
            <div className="mt-auto">
              <Link
                href="/events"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "h-14 w-full bg-background font-semibold uppercase"
                )}
              >
                Latest Event : GCC Thanksgiving Service
              </Link>
            </div>
            <Link href="/events" className="absolute inset-0">
              <span className="sr-only">
                read more about the latest event here
              </span>
            </Link>
          </article>
        </div>
        <div className="bg-red-300 md:col-span-2 xl:col-span-1 xl:col-start-3 xl:row-span-3 xl:row-start-1">
          <article className="group relative z-0 flex h-full flex-col overflow-hidden bg-white text-foreground transition-shadow hover:shadow-lg">
            <div className="space-y-3 p-6 md:p-8">
              <h1 className="text-2xl font-bold">
                Leadership Training Level 1
              </h1>
              <p className="text-sm font-medium text-muted-foreground">
                @GCC Worship Center
              </p>
              <time className="inline-block text-sm font-medium text-muted-foreground">
                Sundays, 10:00 AM - 11:00 AM
              </time>
              <p className="text-justify text-sm">
                <strong>Leadership Level 1</strong> for{" "}
                <strong>Encounter God Retreat</strong> graduates will start on
                January 7, 2023, Sunday. The aim of this leadership training is
                to equip the new believers with the fundamental Biblical
                doctrines that every follower of the Lord Jesus Christ should
                know.
              </p>
            </div>
            <Image
              src="/events.jpg"
              alt="upcoming event banner"
              width={320}
              height={200}
              className="z-[-1] mt-auto block h-[320px] w-full object-cover"
            />
            <div className="mt-auto">
              <Link
                href="/events"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "dark h-14 w-full bg-background font-semibold uppercase"
                )}
              >
                Browse Events
              </Link>
            </div>
          </article>
        </div>
      </section>
    </Container>
  )
}

export default ContentGrid
