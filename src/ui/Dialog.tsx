// # Changes
// - Content overflows in the Y direction
//
// # URLs
// https://kobalte.dev/docs/core/components/dialog
// https://ui.shadcn.com/docs/components/dialog
import { Dialog } from "@kobalte/core/dialog";
import { RiSystemCloseLine } from "solid-icons/ri";
import { ComponentProps, JSX, splitProps } from "solid-js";

import { cn } from "~/lib/utils"

export const DialogRoot = Dialog
export const DialogTrigger = Dialog.Trigger
export const DialogPortal = Dialog.Portal
export const DialogCloseButton = Dialog.CloseButton

export function DialogOverlay(props: ComponentProps<typeof Dialog.Overlay>) {
  const [_, rest] = splitProps(props, ["class"])
  return <Dialog.Overlay
    class={cn(
      "ui-expanded:animate-in ui-not-expanded:animate-out ui-not-expanded:fade-out-0 ui-expanded:fade-in-0 fixed inset-0 z-50 bg-black/80",
      props.class
    )}
    {...rest}
  />
}

export function DialogContent(props: ComponentProps<typeof Dialog.Content>) {
  const [_, rest] = splitProps(props, ["class", "children"])
  return <Dialog.Content
    class={cn(
      "bg-background ui-expanded:animate-in ui-not-expanded:animate-out ui-not-expanded:fade-out-0 ui-expanded:fade-in-0 ui-not-expanded:zoom-out-95 ui-expanded:zoom-in-95 ui-not-expanded:slide-out-to-left-1/2 ui-not-expanded:slide-out-to-top-[48%] ui-expanded:slide-in-from-left-1/2 ui-expanded:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 flex max-h-screen w-full max-w-lg translate-x-[-50%] translate-y-[-50%] flex-col gap-4 border p-4 shadow-lg duration-200 sm:rounded-lg sm:p-6",
      props.class
    )}
    {...rest}
  >
    {props.children}
    <Dialog.CloseButton class="absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none ring-offset-background ui-expanded:bg-accent ui-expanded:text-muted-foreground focus:ring-ring">
      <RiSystemCloseLine class="w-4 h-4" />
      <span class="sr-only">Close</span>
    </Dialog.CloseButton>
  </Dialog.Content>
}

export function DialogHeader(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [_, rest] = splitProps(props, ["class"])
  return <div
    class={cn(
      "flex flex-col gap-1.5 text-center sm:text-left",
      props.class
    )}
    {...rest}
  />
}

export function DialogTitle(props: ComponentProps<typeof Dialog.Title>) {
  const [_, rest] = splitProps(props, ["class"])
  return <Dialog.Title
    class={cn(
      "text-lg font-semibold leading-none tracking-tight",
      props.class
    )}
    {...rest}
  />
}

export function DialogDescription(props: ComponentProps<typeof Dialog.Description>) {
  const [_, rest] = splitProps(props, ["class"])
  return <Dialog.Description
    class={cn("text-muted-foreground text-sm", props.class)}
    {...rest}
  />
}

export function DialogOverflow(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [_, rest] = splitProps(props, ["class"])
  return <div
    class={cn("flex-grow overflow-y-auto p-1", props.class)}
    {...rest}
  />
}

export function DialogFooter(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [_, rest] = splitProps(props, ["class"])
  return <div
    class={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      props.class
    )}
    {...rest}
  />
}
