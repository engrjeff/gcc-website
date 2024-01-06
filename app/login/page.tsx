import { type Metadata } from "next"

import Container from "@/components/container"
import LoginForm from "@/app/login/_components/login-form"

export const metadata: Metadata = {
  title: "Login",
}

function MemberLoginPage() {
  return (
    <>
      <Container className="px-2 py-10">
        <section>
          <LoginForm />
        </section>
      </Container>
    </>
  )
}

export default MemberLoginPage
