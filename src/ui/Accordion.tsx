// # Changes
// N/A
//
// # URLs
// https://kobalte.dev/docs/core/components/accordion
// https://ui.shadcn.com/docs/components/accordion
import { Accordion } from "@kobalte/core/accordion"
import { RiArrowsArrowDownSLine } from "solid-icons/ri"
import { ComponentProps, splitProps } from "solid-js"

import { cn } from "~/lib/utils"

export const AccordionRoot = Accordion

export function AccordionItem(props: ComponentProps<typeof Accordion.Item>) {
  const [_, rest] = splitProps(props, ["class"])
  return <Accordion.Item
    class={cn("border-b", props.class)}
    {...rest}
  />
}

export function AccordionTrigger(props: ComponentProps<typeof Accordion.Trigger>) {
  const [_, rest] = splitProps(props, ["class", "children"])
  return <Accordion.Header class="flex">
    <Accordion.Trigger
      class={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-expanded]>svg]:rotate-180",
        props.class
      )}
      {...rest}
    >
      {props.children}
      <RiArrowsArrowDownSLine class="h-4 w-4 shrink-0 transition-transform duration-200" />
    </Accordion.Trigger>
  </Accordion.Header>
}

export function AccordionContent(props: ComponentProps<typeof Accordion.Content>) {
  const [_, rest] = splitProps(props, ["class", "children"])
  return <Accordion.Content
    class="ui-not-expanded:animate-accordion-up ui-expanded:animate-accordion-down overflow-hidden text-sm transition-all"
    {...rest}
  >
    <div class={cn("pb-4 pt-0", props.class)}>{props.children}</div>
  </Accordion.Content>
}
