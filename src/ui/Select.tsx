// # Changes
// N/A
//
// # URLs
// https://kobalte.dev/docs/core/components/select
// https://ui.shadcn.com/docs/components/select
import { Select } from "@kobalte/core/select"
import { RiArrowsArrowDownSLine, RiSystemCheckLine } from "solid-icons/ri"
import { ComponentProps, JSX, splitProps } from "solid-js"

import { cn } from "~/lib/utils"
import { labelVariants } from "./Label"

export const SelectRoot = Select

export const SelectValue = Select.Value

export function SelectLabel(props: ComponentProps<typeof Select.Label>) {
  const [_, rest] = splitProps(props, ["class"])
  return <Select.Label
    class={cn(labelVariants(), props.class)}
    {...rest}
  />
}

export function SelectDescription(props: ComponentProps<typeof Select.Description>) {
  const [_, rest] = splitProps(props, ["class"])
  return <Select.Description
    class={cn("text-muted-foreground text-sm", props.class)}
    {...rest}
  />
}

export function SelectErrorMessage(props: ComponentProps<typeof Select.Description>) {
  const [_, rest] = splitProps(props, ["class"])
  return <Select.ErrorMessage
    class={cn("text-destructive text-sm font-medium")}
    {...rest}
  />
}

export function SelectTrigger(props: ComponentProps<typeof Select.Trigger>) {
  const [_, rest] = splitProps(props, ["class", "children"])
  return <Select.Trigger
    class={cn(
      "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      props.class
    )}
    {...rest}
  >
    {props.children}
    <Select.Icon as={RiArrowsArrowDownSLine} class="w-4 h-4 opacity-50" />
  </Select.Trigger>
}

export const SelectPortal = Select.Portal

export function SelectContent(props: ComponentProps<typeof Select.Content>) {
  const [_, rest] = splitProps(props, ["class"])
  return <Select.Content
    class={cn(
      "bg-popover text-popover-foreground ui-expanded:animate-in ui-not-expanded:animate-out ui-not-expanded:fade-out-0 ui-expanded:fade-in-0 ui-not-expanded:zoom-out-95 ui-expanded:zoom-in-95 relative z-50 min-w-[8rem] max-w-[var(--kb-popper-content-available-width)] origin-[var(--kb-select-content-transform-origin)] overflow-hidden rounded-md border shadow-md",
      props.class
    )}
    {...rest}
  />
}

export function SelectListbox<Option, OptGroup = never>(props: ComponentProps<typeof Select.Listbox<Option, OptGroup>>) {
  const [_, rest] = splitProps(props, ["class"])
  return <Select.Listbox class={cn("max-h-96 overflow-y-auto p-1", props.class)} {...rest} />
}

export function SelectItem(props: ComponentProps<typeof Select.Item>) {
  const [_, rest] = splitProps(props, ["children", "class"])
  return <Select.Item
    class={cn("focus:bg-accent focus:text-accent-foreground ui-disabled:pointer-events-none ui-disabled:opacity-50 relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none", props.class)}
    {...rest}
  >
    <span class="flex absolute left-2 justify-center items-center w-3.5 h-3.5">
      <Select.ItemIndicator>
        <RiSystemCheckLine class="w-4 h-4" />
      </Select.ItemIndicator>
    </span>
    <Select.ItemLabel>{props.children}</Select.ItemLabel>
  </Select.Item>
}

export function SelectSeparator(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [_, rest] = splitProps(props, ["class"])
  return <div
    class={cn("bg-muted -mx-1 my-1 h-px", props.class)}
    {...rest}
  />
}
