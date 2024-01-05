"use client"

import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"

import MobileNav from "./mobile-nav"
import { buttonVariants } from "./ui/button"
import { Separator } from "./ui/separator"

export function SiteHeader() {
  return (
    <header className="dark sticky top-0 z-40 w-full border-b bg-background text-foreground">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MobileNav />
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end">
          <Image
            width={36}
            height={36}
            src="./gcc-logo-icon.svg"
            alt="Grace City Church"
            className="mr-3 block object-cover lg:hidden"
          />
          <nav className="flex items-center gap-4">
            <Link
              href="/login"
              className={cn(buttonVariants({ size: "sm" }), "hidden lg:flex")}
            >
              Member Log In
            </Link>
            <Separator orientation="vertical" className="h-8" />
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
      </div>
    </header>
  )
}
