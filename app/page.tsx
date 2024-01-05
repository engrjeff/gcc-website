import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <>
      <section className="dark flex h-40 items-center justify-center bg-background py-2 lg:h-[200px]">
        <Link href="/">
          <span className="sr-only">go to home</span>
          <Image
            width={200}
            height={200}
            src="./gcc-logo.svg"
            alt="Grace City Church"
            className="block"
          />
        </Link>
      </section>
      <section className="relative h-[520px] bg-hero bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-4 bg-black/80 p-6 text-white">
          <h1 className="text-center font-semibold italic lg:text-xl">
            God-exalting. Christ-centered. Spirit-led. Gospel-saturated.
          </h1>
          <h2 className="mb-6 text-center text-4xl font-extrabold uppercase tracking-widest lg:text-5xl">
            Making Disciples of All Nations
          </h2>
          <Link
            href="/who-we-are"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </>
  )
}
