// # Changes
// N/A
//
// # URLs
// https://kobalte.dev/docs/core/components/menubar
// https://ui.shadcn.com/docs/components/menubar
import { Menubar } from "@kobalte/core/menubar";
import {
  RiArrowsArrowRightSLine,
  RiSystemCheckLine,
  RiSystemCheckboxBlankCircleFill,
} from "solid-icons/ri";
import { ComponentProps, JSX, splitProps } from "solid-js";

import { cn } from "~/lib/utils";

export const MenubarMenu = Menubar.Menu;
export const MenubarGroup = Menubar.Group;
export const MenubarPortal = Menubar.Portal;
export const MenubarSub = Menubar.Sub;
export const MenubarRadioGroup = Menubar.RadioGroup;

export function MenubarRoot(props: ComponentProps<typeof Menubar>) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <Menubar
      class={cn(
        "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
        props.class,
      )}
      {...rest}
    />
  );
}

export function MenubarTrigger(props: ComponentProps<typeof Menubar.Trigger>) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <Menubar.Trigger
      class={cn(
        "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground ui-expanded:bg-accent ui-expanded:text-accent-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}

export function MenubarSubTrigger(
  props: ComponentProps<typeof Menubar.SubTrigger> & { inset?: boolean },
) {
  const [_, rest] = splitProps(props, ["class", "inset", "children"]);
  return (
    <Menubar.SubTrigger
      class={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground ui-expanded:bg-accent ui-expanded:text-accent-foreground",
        props.inset && "pl-8",
        props.class,
      )}
      {...rest}
    >
      {props.children}
      <RiArrowsArrowRightSLine class="ml-auto h-4 w-4" />
    </Menubar.SubTrigger>
  );
}

export function MenubarSubContent(
  props: ComponentProps<typeof Menubar.SubContent>,
) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <Menubar.Portal>
      <Menubar.SubContent
        class={cn(
          "z-50 min-w-[8rem] max-w-[var(--kb-popper-content-available-width)] origin-[var(--kb-menu-content-transform-origin)] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground ui-expanded:animate-in ui-expanded:fade-in-0 ui-expanded:zoom-in-95 ui-not-expanded:animate-out ui-not-expanded:fade-out-0 ui-not-expanded:zoom-out-95",
          props.class,
        )}
        {...rest}
      />
    </Menubar.Portal>
  );
}

export function MenubarContent(props: ComponentProps<typeof Menubar.Content>) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <Menubar.Portal>
      <Menubar.Content
        class={cn(
          "z-50 min-w-[12rem] max-w-[var(--kb-popper-content-available-width)] origin-[var(--kb-menu-content-transform-origin)] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md ui-expanded:animate-in ui-expanded:fade-in-0 ui-expanded:zoom-in-95 ui-not-expanded:animate-out ui-not-expanded:fade-out-0 ui-not-expanded:zoom-out-95",
          props.class,
        )}
        {...rest}
      />
    </Menubar.Portal>
  );
}

export function MenubarItem(
  props: ComponentProps<typeof Menubar.Item> & { inset?: boolean },
) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <Menubar.Item
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground ui-disabled:pointer-events-none ui-disabled:opacity-50",
        props.inset && "pl-8",
        props.class,
      )}
      {...rest}
    />
  );
}

export function MenubarCheckboxItem(
  props: ComponentProps<typeof Menubar.CheckboxItem>,
) {
  const [_, rest] = splitProps(props, ["class", "children", "checked"]);
  return (
    <Menubar.CheckboxItem
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground ui-disabled:pointer-events-none ui-disabled:opacity-50",
        props.class,
      )}
      checked={props.checked}
      {...rest}
    >
      <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <Menubar.ItemIndicator>
          <RiSystemCheckLine class="h-4 w-4" />
        </Menubar.ItemIndicator>
      </span>
      {props.children}
    </Menubar.CheckboxItem>
  );
}

export function MenubarRadioItem(
  props: ComponentProps<typeof Menubar.RadioItem>,
) {
  const [_, rest] = splitProps(props, ["class", "children"]);
  return (
    <Menubar.RadioItem
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground ui-disabled:pointer-events-none ui-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    >
      <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <Menubar.ItemIndicator>
          <RiSystemCheckboxBlankCircleFill class="h-2 w-2 fill-current" />
        </Menubar.ItemIndicator>
      </span>
      {props.children}
    </Menubar.RadioItem>
  );
}

export function MenubarGroupLabel(
  props: ComponentProps<typeof Menubar.GroupLabel> & { inset?: boolean },
) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <Menubar.GroupLabel
      class={cn(
        "px-2 py-1.5 text-sm font-semibold",
        props.inset && "pl-8",
        props.class,
      )}
      {...rest}
    />
  );
}

export function MenubarSeparator(
  props: ComponentProps<typeof Menubar.Separator>,
) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <Menubar.Separator
      class={cn("-mx-1 my-1 h-px bg-muted", props.class)}
      {...rest}
    />
  );
}

export function MenubarShortcut(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <span
      class={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}
