"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"

function LoginForm() {
  return (
    <div className="mx-auto min-h-[70vh] max-w-screen-md lg:max-w-md">
      <div className="mb-6 text-center">
        <h2 className="my-1 text-2xl font-semibold">GCC Members Login</h2>
        <p className="text-muted-foreground">Log in to your GCC account</p>
      </div>
      <Button type="button" variant="outline" size="lg" className="w-full">
        <Icons.google className="mr-3" /> Continue With Google
      </Button>
      <div className="relative my-6 border-b">
        <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-2.5 text-xs text-muted-foreground">
          OR
        </span>
      </div>
      <form>
        <fieldset className="space-y-3">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <Label htmlFor="password">Phone Number</Label>
            <Input
              name="password"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="pt-3 lg:pt-6">
            <Button size="lg" className="w-full">
              Log In
            </Button>
          </div>
        </fieldset>
      </form>

      <div className="mt-6">
        <p className="text-sm">
          New here?{" "}
          <Link
            href="/plan-your-visit"
            className="font-semibold text-primary hover:underline"
          >
            Visit Us
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
