// # Changes
// N/A
//
// # URLs
// https://ui.shadcn.com/docs/components/input
import { JSX, splitProps } from "solid-js"

import { cn } from "~/lib/utils"

export function Input(props: JSX.InputHTMLAttributes<HTMLInputElement>) {
  const [_, rest] = splitProps(props, ["class"])
  return (
    <input
      class={cn(
        "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        props.class
      )}
      {...rest}
    />
  )
}
