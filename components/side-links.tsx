"use client"

import { ComponentProps, type ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function SideLinks({
  children,
  title,
}: {
  children: ReactNode
  title: string
}) {
  return (
    <aside className="p-6">
      <p className="mb-4 text-xl font-bold uppercase">{title}</p>
      <ul>{children}</ul>
    </aside>
  )
}

export function SideLinkItem({
  className,
  ...props
}: ComponentProps<typeof Link>) {
  const pathname = usePathname()

  return (
    <li>
      <Link
        className={cn(
          "block border-b py-4 text-sm font-semibold uppercase text-muted-foreground transition-colors hover:text-primary",
          { "text-primary": props.href === pathname },
          className
        )}
        {...props}
      />
    </li>
  )
}
