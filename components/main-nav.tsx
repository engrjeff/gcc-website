"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { buttonVariants } from "./ui/button"

interface MainNavProps {
  items: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()

  return (
    <div className="hidden gap-4 lg:flex lg:items-center">
      <Image
        width={36}
        height={36}
        src="./gcc-logo-icon.svg"
        alt="Grace City Church"
        className="object-cover"
      />
      <NavigationMenu>
        <NavigationMenuList>
          {items.map((navLink) => (
            <NavigationMenuItem key={navLink.title}>
              {!navLink.submenu ? (
                <Link href={navLink.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle({
                      className: cn(
                        navLink.href === pathname
                          ? "text-primary hover:bg-background hover:text-primary"
                          : ""
                      ),
                    })}
                  >
                    {navLink.title}
                  </NavigationMenuLink>
                </Link>
              ) : (
                <NavigationMenuTrigger>{navLink.title}</NavigationMenuTrigger>
              )}
              {navLink.submenu ? (
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    {navLink.submenu.map((submenu) => (
                      <li key={submenu.title}>
                        <Link
                          href={submenu.href}
                          className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "inline-block h-full w-full",
                            submenu.href === pathname
                              ? "text-primary hover:bg-background hover:text-primary"
                              : ""
                          )}
                        >
                          {submenu.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              ) : null}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
