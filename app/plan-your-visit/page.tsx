import { type Metadata } from "next"

import Banner from "@/components/banner"
import Container from "@/components/container"

export const metadata: Metadata = {
  title: "Plan Your Visit",
}

function PlanYourVisitPage() {
  return (
    <>
      <Banner />
      <Container className="py-10">
        <section>
          <h1 className="text-lg font-bold">Plan Your Visit</h1>
        </section>
      </Container>
    </>
  )
}

export default PlanYourVisitPage
