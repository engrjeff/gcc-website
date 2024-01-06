"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"

import Container from "./container"
import LogoLink from "./logo-link"
import MobileNav from "./mobile-nav"
import { buttonVariants } from "./ui/button"
import { Separator } from "./ui/separator"

export function SiteHeader() {
  return (
    <header className="dark sticky top-0 z-40 w-full border-b bg-background text-foreground">
      <Container className="flex h-16 items-center sm:space-x-0 lg:justify-between">
        <MobileNav />
        <div className="flex-1 text-center lg:hidden">
          <LogoLink />
        </div>
        <MainNav items={siteConfig.mainNav} />
        <div className="flex items-center justify-end">
          <nav className="flex items-center gap-4">
            <Link
              href="/login"
              className={cn(buttonVariants({ size: "sm" }), "hidden lg:flex")}
            >
              Member Log In
            </Link>
            <Separator orientation="vertical" className="hidden h-8 lg:block" />
            <Link
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              <Icons.facebook className="h-4 w-4 fill-current" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href={siteConfig.links.youtube}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              <Icons.youtube className="h-4 w-4" />
              <span className="sr-only">YouTube</span>
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}
