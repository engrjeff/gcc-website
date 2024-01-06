import { type Metadata } from "next"

import Banner from "@/components/banner"
import Container from "@/components/container"
import { SideLinkItem, SideLinks } from "@/components/side-links"
import VisitorForm from "@/components/visitor-form"

export const metadata: Metadata = {
  title: "Plan Your Visit",
}

function PlanYourVisitPage() {
  return (
    <>
      <Banner />
      <div className="my-2 h-[120px] w-full bg-plan-visit-banner bg-cover bg-top bg-no-repeat md:h-[320px] lg:my-6"></div>
      <Container className="max-w-6xl lg:px-10">
        <section className="pb-10">
          <h1 className="my-10 text-center text-3xl font-bold">
            Plan Your Visit
          </h1>
          <div className="flex gap-10">
            <div className="flex-1">
              <VisitorForm />
            </div>
            <div className="hidden lg:block">
              <SideLinks title="I'm New">
                <SideLinkItem href="/what-to-expect">
                  What To Expect
                </SideLinkItem>
                <SideLinkItem href="/plan-your-visit">
                  Plan Your Visit
                </SideLinkItem>
                <SideLinkItem href="/service-time-directions">
                  Service Times & Directions
                </SideLinkItem>
                <SideLinkItem href="/contact-us">Contact Us</SideLinkItem>
              </SideLinks>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

export default PlanYourVisitPage
