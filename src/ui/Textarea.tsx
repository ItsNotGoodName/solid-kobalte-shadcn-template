// # Changes
// N/A
//
// # URLs
// https://ui.shadcn.com/docs/components/textarea
import { JSX, splitProps } from "solid-js"

import { cn } from "~/lib/utils"

export type TextareaProps = JSX.TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea(props: TextareaProps) {
  const [_, rest] = splitProps(props, ["class"])
  return <textarea
    class={cn(
      "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      props.class
    )}
    {...rest}
  />
}
