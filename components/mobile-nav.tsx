"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { Button, buttonVariants } from "./ui/button"
import { Separator } from "./ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

function MobileNav() {
  const [open, setOpen] = useState(false)

  const pathname = usePathname()

  return (
    <div className="block -translate-x-3 lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <span className="sr-only">menu</span>
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-0">
          <SheetHeader className="px-8 text-left">
            <SheetTitle className="text-xs uppercase tracking-wider">
              Menu
            </SheetTitle>
            <SheetClose aria-label="close menu" />
          </SheetHeader>
          <nav>
            {siteConfig.mainNav.map((navLink) =>
              navLink.submenu ? (
                <Accordion
                  key={`mobile-navlink-${navLink.title}`}
                  type="single"
                  collapsible
                  className="w-full"
                >
                  <AccordionItem value={navLink.title} className="border-none">
                    <AccordionTrigger
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "lg" }),
                        "w-full justify-between hover:no-underline"
                      )}
                    >
                      {navLink.title}
                    </AccordionTrigger>
                    <AccordionContent className="ml-8 border-l">
                      {navLink.submenu.map((submenu) => (
                        <Link
                          key={`mobile-navlink-submenu-${submenu.title}`}
                          href={submenu.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            buttonVariants({
                              variant:
                                pathname === submenu.href
                                  ? "secondary"
                                  : "ghost",
                              size: "lg",
                            }),
                            "w-full justify-start px-4"
                          )}
                        >
                          {submenu.title}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Link
                  key={`mobile-navlink-${navLink.title}`}
                  href={navLink.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants({
                      variant:
                        pathname === navLink.href ? "secondary" : "ghost",
                      size: "lg",
                    }),
                    "w-full justify-start"
                  )}
                >
                  {navLink.title}
                </Link>
              )
            )}

            <div className="mt-6 px-8" onClick={() => setOpen(false)}>
              <Link
                href="/login"
                className={cn(buttonVariants({ size: "lg" }), "w-full")}
              >
                Member Log In
              </Link>
              <Separator className="my-6" />
              <p className="text-sm font-semibold text-muted-foreground">
                Follow Us
              </p>
              <div className="flex items-center gap-4 py-4">
                <Link
                  href={siteConfig.links.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  <Icons.facebook className="h-5 w-5 fill-muted-foreground" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href={siteConfig.links.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  <Icons.youtube className="h-5 w-5 fill-muted-foreground" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
