import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

function MainNavLink({ navLink }: { navLink: NavItem }) {
  return (
    <Link
      href={navLink.href}
      className={cn(
        "flex items-center text-sm font-semibold uppercase text-foreground",
        navLink.disabled && "cursor-not-allowed opacity-80"
      )}
    >
      {navLink.title}
    </Link>
  )
}

export default MainNavLink
