import { type Metadata } from "next"

import Banner from "@/components/banner"
import Container from "@/components/container"

import ResourcesTabs from "./_component/resources-tabs"

export const metadata: Metadata = {
  title: "Resources",
}

function ResourcesPage() {
  return (
    <>
      <Banner />
      <div className="my-2 h-[120px] w-full bg-resources-banner bg-cover bg-center bg-no-repeat md:h-[320px] lg:my-6"></div>
      <Container className="lg:px-10">
        <section className="pb-10">
          <h1 className="my-10 text-center text-3xl font-bold">Resources</h1>
          <ResourcesTabs />
        </section>
      </Container>
    </>
  )
}

export default ResourcesPage
