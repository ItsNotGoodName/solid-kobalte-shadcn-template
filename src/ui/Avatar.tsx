// # Changes
// N/A
//
// # URLs
// https://kobalte.dev/docs/core/components/image
// https://ui.shadcn.com/docs/components/avatar
import { Image } from "@kobalte/core/image";
import { ComponentProps, splitProps } from "solid-js";

import { cn } from "~/lib/utils";

export function AvatarRoot(props: ComponentProps<typeof Image>) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <Image
      class={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        props.class,
      )}
      {...rest}
    />
  );
}

export function AvatarImage(props: ComponentProps<typeof Image.Img>) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <Image.Img
      class={cn("aspect-square h-full w-full", props.class)}
      {...rest}
    />
  );
}

export function AvatarFallback(props: ComponentProps<typeof Image.Fallback>) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <Image.Fallback
      class={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        props.class,
      )}
      {...rest}
    />
  );
}
