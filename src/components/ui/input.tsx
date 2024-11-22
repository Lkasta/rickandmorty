import * as React from "react"

import { cn } from "@/lib/utils"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, search, ...props }, ref,) => {
    return (
      <div
        className={cn(
          "flex items-center h-9 w-full rounded-md border bg-transparent px-3 py-1 border-gray-300 focus-within:border-gray-500",
          className
        )}
      >
        {search ? (
          <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 text-zinc-500" />
        ) : null}
        <input
          type={type}
          className={cn(
            "font-medium placeholder:font-normal bg-transparent group text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 truncate",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>

    )
  }
)
Input.displayName = "Input"

export { Input }
