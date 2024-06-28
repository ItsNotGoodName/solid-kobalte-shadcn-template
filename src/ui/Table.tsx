// # Changes
// N/A
//
// # URLs
// https://ui.shadcn.com/docs/components/table
import { JSX, splitProps } from "solid-js";

import { cn } from "~/lib/utils";

export function TableRoot(props: JSX.HTMLAttributes<HTMLTableElement>) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <div class="relative w-full overflow-auto">
      <table
        class={cn("w-full caption-bottom text-sm", props.class)}
        {...rest}
      />
    </div>
  );
}

export function TableHeader(
  props: JSX.HTMLAttributes<HTMLTableSectionElement>,
) {
  const [_, rest] = splitProps(props, ["class"]);
  return <thead class={cn("[&_tr]:border-b", props.class)} {...rest} />;
}

export function TableBody(props: JSX.HTMLAttributes<HTMLTableSectionElement>) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <tbody class={cn("[&_tr:last-child]:border-0", props.class)} {...rest} />
  );
}

export function TableFooter(
  props: JSX.HTMLAttributes<HTMLTableSectionElement>,
) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <tfoot
      class={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        props.class,
      )}
      {...rest}
    />
  );
}

export function TableRow(props: JSX.HTMLAttributes<HTMLTableRowElement>) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <tr
      class={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        props.class,
      )}
      {...rest}
    />
  );
}

export function TableHead(props: JSX.ThHTMLAttributes<HTMLTableCellElement>) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <th
      class={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        props.class,
      )}
      {...rest}
    />
  );
}

export function TableCell(props: JSX.TdHTMLAttributes<HTMLTableCellElement>) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <td
      class={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", props.class)}
      {...rest}
    />
  );
}

export function TableCaption(props: JSX.HTMLAttributes<HTMLElement>) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <caption
      class={cn("mt-4 text-sm text-muted-foreground", props.class)}
      {...rest}
    />
  );
}
