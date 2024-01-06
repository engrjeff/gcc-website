import Link from "next/link"

import { cn } from "@/lib/utils"

import Container from "./container"
import { buttonVariants } from "./ui/button"

function NewHereCallToAction() {
  return (
    <div className="bg-white">
      <Container className="py-20">
        <h2 className="text-4xl font-bold">New Here?</h2>
        <p className="mb-6 text-muted-foreground md:text-lg">
          Join us in our Worship Service!
        </p>
        <Link
          href="/plan-your-visit"
          className={cn(buttonVariants(), "h-14 w-full max-w-sm font-semibold")}
        >
          Plan My Visit
        </Link>
      </Container>
    </div>
  )
}

export default NewHereCallToAction
