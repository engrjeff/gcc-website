import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function Hero() {
  return (
    <section className="dark relative h-[320px] bg-background bg-hero bg-cover bg-center bg-no-repeat lg:h-[520px]">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-4 bg-black/70 p-6 text-white">
        <h1 className="text-center font-semibold italic lg:text-xl">
          God-exalting. Christ-centered. Spirit-led. Gospel-saturated.
        </h1>
        <h2 className="mb-6 text-center text-3xl font-extrabold uppercase tracking-widest lg:text-5xl">
          Making Disciples of All Nations
        </h2>
        <Link
          href="/who-we-are"
          className={cn(buttonVariants({ size: "lg" }), "h-14 font-semibold")}
        >
          Learn More About Us
        </Link>
      </div>
    </section>
  )
}

export default Hero
