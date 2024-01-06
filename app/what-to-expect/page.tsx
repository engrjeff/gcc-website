import { type Metadata } from "next"

import Banner from "@/components/banner"
import Container from "@/components/container"

export const metadata: Metadata = {
  title: "What To Expect",
}

function WhatToExpectPage() {
  return (
    <>
      <Banner />
      <Container className="py-10">
        <section>
          <h1 className="text-lg font-bold">What To Expect</h1>
        </section>
      </Container>
    </>
  )
}

export default WhatToExpectPage
