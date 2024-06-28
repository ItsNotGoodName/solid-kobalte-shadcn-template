// # Changes
// N/A
//
// # URLs
// https://kobalte.dev/docs/core/components/combobox
// https://ui.shadcn.com/docs/components/combobox
import { Combobox, ComboboxListboxProps } from "@kobalte/core/combobox";
import {
  RiSystemCheckLine,
  RiSystemCloseLine,
  RiSystemSearchLine,
} from "solid-icons/ri";
import {
  Accessor,
  ComponentProps,
  For,
  Show,
  mergeProps,
  splitProps,
} from "solid-js";
import { cva } from "class-variance-authority";

import { buttonVariants } from "./Button";
import { cn } from "~/lib/utils";
import { Seperator } from "./Seperator";
import { labelVariants } from "./Label";

export interface ComboboxControlState<T> {
  /** The selected options. */
  selectedOptions: Accessor<T[]>;
  /** A function to remove an option from the selection. */
  remove: (option: T) => void;
  /** A function to clear the selection. */
  clear: () => void;
}

const tagVariants = cva(
  "inline-flex items-center rounded-sm border border-transparent bg-secondary px-1 py-0.5 text-xs font-normal text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
);

export function ComboboxRoot<Option, OptGroup = never>(
  props: ComponentProps<typeof Combobox<Option, OptGroup>>,
) {
  return <Combobox placement="bottom-start" allowsEmptyCollection {...props} />;
}

export function ComboboxItem(props: ComponentProps<typeof Combobox.Item>) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <Combobox.Item
      class={cn(
        "group relative flex w-full cursor-default select-none items-center justify-start gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground ui-disabled:pointer-events-none ui-disabled:opacity-50 ui-highlighted:bg-accent ui-highlighted:text-accent-foreground",
        props.class,
      )}
      {...rest}
    >
      <div class="flex size-4 shrink-0 items-center justify-center rounded-sm border border-primary group-data-[selected]:bg-primary group-data-[selected]:text-primary-foreground">
        <Combobox.ItemIndicator class="flex items-center justify-center text-current">
          <RiSystemCheckLine class="size-4" />
        </Combobox.ItemIndicator>
      </div>
      {props.children}
    </Combobox.Item>
  );
}

export const ComboboxControl = Combobox.Control;

export function ComboboxLabel(props: ComponentProps<typeof Combobox.Label>) {
  const [_, rest] = splitProps(props, ["class"]);
  return <Combobox.Label class={cn(labelVariants(), props.class)} {...rest} />;
}
export function ComboboxDescription(
  props: ComponentProps<typeof Combobox.Description>,
) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <Combobox.Description
      class={cn("text-sm text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function ComboboxErrorMessage(
  props: ComponentProps<typeof Combobox.ErrorMessage>,
) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <Combobox.ErrorMessage
      class={cn("text-sm font-medium text-destructive", props.class)}
      {...rest}
    />
  );
}

export function ComboboxTrigger(
  props: ComponentProps<typeof Combobox.Trigger>,
) {
  const [_, rest] = splitProps(props, ["class", "children"]);
  return (
    <Combobox.Trigger
      class={cn(
        buttonVariants({ variant: "outline" }),
        "flex items-center gap-2",
        props.class,
      )}
      {...rest}
    >
      {props.children}
    </Combobox.Trigger>
  );
}

export const ComboboxIcon = Combobox.Icon;

export function ComboboxState<Option>(props: {
  state: ComboboxControlState<Option>;
  getOptionString?: (option: Option) => string;
}) {
  const mergedProps = mergeProps(
    { getOptionString: (option: any) => option as string },
    props,
  );
  return (
    <Show when={mergedProps.state.selectedOptions().length > 0}>
      <Seperator orientation="vertical" class="h-4" />
      <div class={cn(tagVariants(), "lg:hidden")}>
        {mergedProps.state.selectedOptions().length}
      </div>
      <div class="hidden space-x-1 lg:flex">
        <Show
          when={mergedProps.state.selectedOptions().length < 3}
          fallback={
            <span class={tagVariants()}>
              {mergedProps.state.selectedOptions().length} selected
            </span>
          }
        >
          <For each={mergedProps.state.selectedOptions()}>
            {(option) => (
              <span class={tagVariants()}>
                {mergedProps.getOptionString(option)}
              </span>
            )}
          </For>
        </Show>
      </div>
    </Show>
  );
}

export function ComboboxReset<Option>(props: {
  class?: string;
  state: ComboboxControlState<Option>;
}) {
  return (
    <Show when={props.state.selectedOptions().length > 0}>
      <button
        class="h-full"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={props.state.clear}
      >
        <RiSystemCloseLine class={props.class} />
        <span class="sr-only">Reset</span>
      </button>
    </Show>
  );
}

export const ComboboxItemLabel = Combobox.ItemLabel;

export function ComboboxContent(
  props: ComponentProps<typeof Combobox.Content>,
) {
  const [_, rest] = splitProps(props, ["class"]);
  return (
    <Combobox.Portal>
      <Combobox.Content
        class={cn(
          "z-50 w-[200px] max-w-[var(--kb-popper-content-available-width)] origin-[var(--kb-combobox-content-transform-origin)] rounded-md border bg-popover text-popover-foreground shadow-md outline-none ui-expanded:animate-in ui-expanded:fade-in-0 ui-expanded:zoom-in-95 ui-not-expanded:animate-out ui-not-expanded:fade-out-0 ui-not-expanded:zoom-out-95",
          props.class,
        )}
        {...rest}
      />
    </Combobox.Portal>
  );
}

export function ComboboxInput(
  props: Omit<ComponentProps<typeof Combobox.Input>, "class">,
) {
  return (
    <div class="flex items-center gap-2 border-b px-3">
      <RiSystemSearchLine class="size-4 shrink-0 opacity-50" />
      <Combobox.Input
        class="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        {...props}
      />
    </div>
  );
}

export function ComboboxListbox<Option, OptGroup>(
  props: Omit<ComboboxListboxProps<Option, OptGroup>, "class">,
) {
  return <Combobox.Listbox class="max-h-48 overflow-y-auto p-1" {...props} />;
}
