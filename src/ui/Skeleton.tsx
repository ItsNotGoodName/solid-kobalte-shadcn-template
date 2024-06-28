// # Changes
// N/A
//
// # URLs
// https://ui.shadcn.com/docs/components/skeleton
import { JSX, splitProps } from "solid-js";
import { cn } from "~/lib/utils";

export function Skeleton(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <div
      class={cn("animate-pulse rounded-md bg-muted", props.class)}
      {...rest}
    />
  );
}
