import { type Metadata } from "next"

import Banner from "@/components/banner"
import Container from "@/components/container"

export const metadata: Metadata = {
  title: "Who We Are",
}

function WhoWeArePage() {
  return (
    <>
      <Banner />
      <Container className="py-10">
        <section>
          <h1 className="text-lg font-bold">Who We Are</h1>
        </section>
      </Container>
    </>
  )
}

export default WhoWeArePage
