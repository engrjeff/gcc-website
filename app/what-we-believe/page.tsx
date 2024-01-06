import { type Metadata } from "next"

import Banner from "@/components/banner"
import Container from "@/components/container"

export const metadata: Metadata = {
  title: "What We Believe",
}

function WhatWeBelievePage() {
  return (
    <>
      <Banner />
      <Container className="py-10">
        <section>
          <h1 className="text-lg font-bold">What We Believe</h1>
        </section>
      </Container>
    </>
  )
}

export default WhatWeBelievePage
