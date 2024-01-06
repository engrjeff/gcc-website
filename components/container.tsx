import React from "react"

import { cn } from "@/lib/utils"

function Container({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("container max-w-[1490px] px-4", className)} {...props}>
      {children}
    </div>
  )
}

export default Container
