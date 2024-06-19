import solidLogo from './assets/solid.svg'
import { For, ParentProps, Show, createSignal, onCleanup } from 'solid-js'
import { Button } from './ui/Button'
import { provideTheme, toggleTheme } from './ui/theme'
import { ThemeIcon } from './ui/ThemeIcon'
import { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger } from './ui/Accordion'
import { RiEditorHashtag, RiMapRocketLine, RiMediaVolumeMuteLine, RiMediaVolumeUpLine, RiSystemAddLine, RiSystemAlertLine } from 'solid-icons/ri'
import { AlertRoot, AlertTitle, AlertDescription } from './ui/Alert'
import { AlertDialogRoot, AlertDialogTrigger, AlertDialogModal, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from './ui/AlertDialog'
import { AvatarRoot, AvatarImage, AvatarFallback } from './ui/Avatar'
import { Badge } from './ui/Badge'
import { CardRoot, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/Card'
import { CheckboxRoot, CheckboxControl, CheckboxLabel, CheckboxDescription, CheckboxErrorMessage } from './ui/Checkbox'
import { ComboboxRoot, ComboboxItem, ComboboxItemLabel, ComboboxLabel, ComboboxControl, ComboboxTrigger, ComboboxIcon, ComboboxState, ComboboxReset, ComboboxDescription, ComboboxErrorMessage, ComboboxContent, ComboboxInput, ComboboxListbox } from './ui/Combobox'
import { DialogRoot, DialogTrigger, DialogPortal, DialogOverlay, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogOverflow, DialogFooter } from './ui/Dialog'
import { DropdownMenuRoot, DropdownMenuTrigger, DropdownMenuPortal, DropdownMenuContent, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubTriggerIndicator, DropdownMenuSubContent, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuCheckboxItemIndicator, DropdownMenuGroup, DropdownMenuGroupLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuRadioItemIndicator, DropdownMenuArrow } from './ui/DropdownMenu'
import { HoverCardRoot, HoverCardTrigger, HoverCardContent, HoverCardArrow } from './ui/HoverCard'
import { Label } from './ui/Label'
import { MenubarRoot, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarShortcut, MenubarSub, MenubarSubTrigger, MenubarSubContent, MenubarSeparator, MenubarCheckboxItem, MenubarGroup, MenubarGroupLabel, MenubarRadioGroup, MenubarRadioItem } from './ui/Menubar'
import { PaginationRoot, PaginationItem, PaginationLink, PaginationEllipsis, PaginationPrevious, PaginationItems, PaginationNext } from './ui/Pagination'
import { ProgressRoot, ProgressLabel, ProgressValueLabel, ProgressTrack, ProgressFill } from './ui/Progress'
import { SelectRoot, SelectItem, SelectLabel, SelectTrigger, SelectValue, SelectDescription, SelectErrorMessage, SelectPortal, SelectContent, SelectListbox } from './ui/Select'
import { Seperator } from './ui/Seperator'
import { SheetRoot, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetOverflow, SheetFooter, SheetCloseButton } from './ui/Sheet'
import { Skeleton } from './ui/Skeleton'
import { SwitchRoot, SwitchControl, SwitchLabel, SwitchDescription, SwitchErrorMessage } from './ui/Switch'
import { TableRoot, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from './ui/Table'
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from './ui/Tabs'
import { TextFieldRoot, TextFieldLabel, TextFieldInput, TextFieldDescription, TextFieldErrorMessage, TextFieldTextArea } from './ui/TextField'
import { ToastCloseButton, ToastContent, ToastDescription, ToastList, ToastProgressFill, ToastProgressTrack, ToastRegion, ToastTitle, toast } from './ui/Toast'
import { Portal } from 'solid-js/web'
import { Toggle } from './ui/Toggle'
import { TooltipArrow, TooltipContent, TooltipRoot, TooltipTrigger } from './ui/Tooltip'

function App() {
  provideTheme()

  const [validationState, setValidationState] = createSignal<"valid" | "invalid">("valid")
  const toggleValidationState = () => validationState() == "valid" ? setValidationState("invalid") : setValidationState("valid")

  const [progress, setProgress] = createSignal(0)
  const timer = setInterval(() => setProgress((prev) => (prev + 10) % 100), 200)
  onCleanup(() => clearInterval(timer))

  return (
    <div class="flex flex-col gap-4 p-4">
      <div class='flex gap-2'>
        <Button size="icon" onClick={toggleTheme}>
          <ThemeIcon class='size-6' />
        </Button>
        <Button onClick={toggleValidationState} variant={validationState() == "valid" ? "outline" : "destructive"}>Toggle Validation State</Button>
      </div>

      <Section>
        <SectionTitle id="accordion">Accordion</SectionTitle>
        <SectionContent>
          <AccordionRoot collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Accordion</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </AccordionRoot>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="alert">Alert</SectionTitle>
        <SectionContent class='flex flex-col gap-2'>
          <AlertRoot>
            <RiMapRocketLine class="w-4 h-4" />
            <AlertTitle>Alert Title</AlertTitle>
            <AlertDescription>Alert Description</AlertDescription>
          </AlertRoot>
          <AlertRoot variant="destructive">
            <RiSystemAlertLine class="w-4 h-4" />
            <AlertTitle>Alert Title</AlertTitle>
            <AlertDescription>Alert Description</AlertDescription>
          </AlertRoot>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="alert-dialog">Alert Dialog</SectionTitle>
        <SectionContent>
          <AlertDialogRoot>
            <AlertDialogTrigger as={Button}>
              Alert Dialog
            </AlertDialogTrigger>
            <AlertDialogModal>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogModal>
          </AlertDialogRoot>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="avatar">Avatar</SectionTitle>
        <SectionContent>
          <AvatarRoot>
            <AvatarImage src={solidLogo} alt="Solid" />
            <AvatarFallback>SD</AvatarFallback>
          </AvatarRoot>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="badge">Badge</SectionTitle>
        <SectionContent class='flex gap-2'>
          <For each={["default", "secondary", "destructive", "outline"] satisfies Array<"default" | "secondary" | "destructive" | "outline">}>
            {variant =>
              <Badge variant={variant}>{variant}</Badge>
            }
          </For>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="breadcrumbs">Breadcrumbs</SectionTitle>
        <SectionContent>
          TODO
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="button">Button</SectionTitle>
        <SectionContent class='flex flex-col gap-2'>
          <For each={["sm", "default", "xs"] satisfies Array<"sm" | "default" | "xs">} >
            {size =>
              <div class='flex gap-2'>
                <Button size={size}>Default</Button>
                <Button size={size} variant="destructive">Destructive</Button>
                <Button size={size} variant="outline">Outline</Button>
                <Button size={size} variant="secondary">Secondary</Button>
                <Button size={size} variant="ghost">Ghost</Button>
                <Button size={size} variant="link">Link</Button>
              </div>
            }
          </For>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="card">Card</SectionTitle>
        <SectionContent>
          <CardRoot>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              Card Content
            </CardContent>
            <CardFooter>Card Footer</CardFooter>
          </CardRoot>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="checkbox">Checkbox</SectionTitle>
        <SectionContent>
          <CheckboxRoot validationState={validationState()} class="space-y-2">
            <div class="flex gap-2 items-center">
              <CheckboxControl />
              <CheckboxLabel>Checkbox Label</CheckboxLabel>
            </div>
            <CheckboxDescription>Checkbox Description</CheckboxDescription>
            <CheckboxErrorMessage>Checkbox Error Message</CheckboxErrorMessage>
          </CheckboxRoot>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="combobox">Combobox</SectionTitle>
        <SectionContent>
          <ComboboxRoot<string>
            multiple
            options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",]}
            placeholder="Fruits"
            itemComponent={props => (
              <ComboboxItem item={props.item}>
                <ComboboxItemLabel>{props.item.rawValue}</ComboboxItemLabel>
              </ComboboxItem>
            )}
            class="space-y-2"
            validationState={validationState()}
          >
            <ComboboxLabel>Combobox Label</ComboboxLabel>
            <ComboboxControl<string> aria-label="Fruits">
              {state => (
                <ComboboxTrigger>
                  <ComboboxIcon as={RiSystemAddLine} class="size-4" />
                  Fruits
                  <ComboboxState state={state} />
                  <ComboboxReset state={state} class="size-4" />
                </ComboboxTrigger>
              )}
            </ComboboxControl>
            <ComboboxDescription>Combobox Description</ComboboxDescription>
            <ComboboxErrorMessage>Combobox Error Message</ComboboxErrorMessage>
            <ComboboxContent >
              <ComboboxInput />
              <ComboboxListbox />
            </ComboboxContent>
          </ComboboxRoot>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="dialog">Dialog</SectionTitle>
        <SectionContent>
          <DialogRoot>
            <DialogTrigger as={Button}>
              Dialog
            </DialogTrigger>
            <DialogPortal>
              <DialogOverlay />
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Header Title</DialogTitle>
                  <DialogDescription>
                    Header Description
                  </DialogDescription>
                </DialogHeader>
                <DialogOverflow>
                  <For each={Array(100)}>
                    {() => <div>I will overflow.</div>}
                  </For>
                </DialogOverflow>
                <DialogFooter>
                  Footer
                </DialogFooter>
              </DialogContent>
            </DialogPortal>
          </DialogRoot>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="dropdown-menu">Dropdown Menu</SectionTitle>
        <SectionContent>
          <DropdownMenuRoot>
            <DropdownMenuTrigger as={Button}>
              Dropdown Menu
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  Commit <DropdownMenuShortcut>⌘+K</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Push <DropdownMenuShortcut>⇧+⌘+K</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  Update Project <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSub overlap gutter={4} shift={-8}>
                  <DropdownMenuSubTrigger>
                    GitHub
                    <DropdownMenuSubTriggerIndicator />
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        Create Pull Request…
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        View Pull Requests
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Sync Fork
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        Open on GitHub
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItemIndicator />
                  Show Git Log
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItemIndicator />
                  Show History
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuGroupLabel>
                    Branches
                  </DropdownMenuGroupLabel>
                  <DropdownMenuRadioGroup>
                    <DropdownMenuRadioItem value="main">
                      <DropdownMenuRadioItemIndicator />
                      main
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="develop">
                      <DropdownMenuRadioItemIndicator />
                      develop
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuGroup>
                <DropdownMenuArrow />
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenuRoot>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="form">Form</SectionTitle>
        <SectionContent>
          TODO
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="hover-card">Hover Card</SectionTitle>
        <SectionContent>
          <HoverCardRoot>
            <HoverCardTrigger as={Button} variant="link">
              Hover Card
            </HoverCardTrigger>
            <HoverCardContent class="w-80">
              <HoverCardArrow />
              Hover Card Content
            </HoverCardContent>
          </HoverCardRoot>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="input">Input</SectionTitle>
        <SectionContent>
          TODO
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="label">Label</SectionTitle>
        <SectionContent>
          <Label>Label</Label>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="menubar">Menubar</SectionTitle>
        <SectionContent>
          <MenubarRoot>
            <MenubarMenu>
              <MenubarTrigger>
                Git
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem >
                  Commit <MenubarShortcut>⌘+K</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Push <MenubarShortcut>⇧+⌘+K</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>
                  Update Project <MenubarShortcut>⌘+T</MenubarShortcut>
                </MenubarItem>
                <MenubarSub overlap gutter={4} shift={-8}>
                  <MenubarSubTrigger>
                    GitHub
                  </MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>
                      Create Pull Request…
                    </MenubarItem>
                    <MenubarItem>
                      View Pull Requests
                    </MenubarItem>
                    <MenubarItem>Sync Fork</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Open on GitHub
                    </MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarCheckboxItem
                >
                  Show Git Log
                </MenubarCheckboxItem>
                <MenubarCheckboxItem>
                  Show History
                </MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarGroup>
                  <MenubarGroupLabel>
                    Branches
                  </MenubarGroupLabel>
                  <MenubarRadioGroup>
                    <MenubarRadioItem value="main">
                      main
                    </MenubarRadioItem>
                    <MenubarRadioItem value="develop">
                      develop
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarGroup>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                File
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘+T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  New Window <MenubarShortcut>⌘+N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>
                  New Incognito Window
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSub overlap gutter={4} shift={-8}>
                  <MenubarSubTrigger>
                    Share
                  </MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>
                      Email Link
                    </MenubarItem>
                    <MenubarItem>
                      Messages
                    </MenubarItem>
                    <MenubarItem>
                      Notes
                    </MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>
                  Print... <MenubarShortcut>⌘+P</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                Edit
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Undo <MenubarShortcut>⌘+Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Redo <MenubarShortcut>⇧+⌘+Z</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSub overlap gutter={4} shift={-8}>
                  <MenubarSubTrigger>
                    Find
                  </MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>
                      Search The Web
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Find...
                    </MenubarItem>
                    <MenubarItem>
                      Find Next
                    </MenubarItem>
                    <MenubarItem>
                      Find Previous
                    </MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>
                  Cut
                </MenubarItem>
                <MenubarItem>
                  Copy
                </MenubarItem>
                <MenubarItem>
                  Paste
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </MenubarRoot>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="pagination">Pagination</SectionTitle>
        <SectionContent>
          <PaginationRoot
            count={10}
            itemComponent={props => (
              <PaginationItem page={props.page}>
                <PaginationLink>
                  {props.page}
                </PaginationLink>
              </PaginationItem>
            )}
            ellipsisComponent={() => (
              <PaginationEllipsis />
            )}
          >
            <PaginationPrevious />
            <PaginationItems />
            <PaginationNext />
          </PaginationRoot>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="popover">Popover</SectionTitle>
        <SectionContent>
          TODO
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="progress">Progress</SectionTitle>
        <SectionContent>
          <ProgressRoot value={progress()}>
            <div class="flex justify-between">
              <ProgressLabel>Loading</ProgressLabel>
              <ProgressValueLabel>
                {progress()}%
              </ProgressValueLabel>
            </div>
            <ProgressTrack>
              <ProgressFill />
            </ProgressTrack>
          </ProgressRoot>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="select">Select</SectionTitle>
        <SectionContent>
          <SelectRoot
            defaultValue="Apple"
            options={["Apple", "Banana", "Blueberry", "Grapes", "Pineapple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple",]}
            placeholder="Select a fruit…"
            itemComponent={props => (
              <SelectItem item={props.item}>
                {props.item.rawValue}
              </SelectItem>
            )}
            class="space-y-2"
            validationState={validationState()}
          >
            <SelectLabel>Select Label</SelectLabel>
            <SelectTrigger aria-label="Fruit">
              <SelectValue<string>>
                {state => state.selectedOption()}
              </SelectValue>
            </SelectTrigger>
            <SelectDescription>Select Description</SelectDescription>
            <SelectErrorMessage>Select Error Message</SelectErrorMessage>
            <SelectPortal>
              <SelectContent>
                <SelectListbox />
              </SelectContent>
            </SelectPortal>
          </SelectRoot>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="seperator">Seperator</SectionTitle>
        <SectionContent>
          <div>
            <div>Top Seperator</div>
            <Seperator />
            <div>Bottom Seperator</div>
          </div>
          <div class="flex">
            <div>Left Seperator</div>
            <Seperator orientation="vertical" />
            <div>Right Seperator</div>
          </div>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="sheet">Sheet</SectionTitle>
        <SectionContent>
          <SheetRoot>
            <SheetTrigger as={Button}>
              Sheet
            </SheetTrigger>
            <SheetContent class="p-4 sm:p-6">
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              <SheetOverflow>
                <For each={Array(100)}>
                  {() => <div>I will overflow.</div>}
                </For>
              </SheetOverflow>
              <SheetFooter>
                <SheetCloseButton as={Button}>
                  Save changes
                </SheetCloseButton>
              </SheetFooter>
            </SheetContent>
          </SheetRoot>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="skeleton">Skeleton</SectionTitle>
        <SectionContent>
          <Skeleton class="h-32" />
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="switch">Switch</SectionTitle>
        <SectionContent>
          <SwitchRoot class="space-y-2" validationState={validationState()}>
            <div class="flex items-center gap-2">
              <SwitchControl />
              <SwitchLabel>Switch</SwitchLabel>
            </div>
            <SwitchDescription>Switch Description</SwitchDescription>
            <SwitchErrorMessage>Switch Error Message</SwitchErrorMessage>
          </SwitchRoot>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="table">Table</SectionTitle>
        <SectionContent>
          <TableRoot>
            <TableCaption>Caption</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <CheckboxRoot>
                    <CheckboxControl />
                  </CheckboxRoot>
                </TableHead>
                <TableHead>Head</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <CheckboxRoot>
                    <CheckboxControl />
                  </CheckboxRoot>
                </TableCell>
                <TableCell>Cell</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CheckboxRoot>
                    <CheckboxControl />
                  </CheckboxRoot>
                </TableCell>
                <TableCell>Cell</TableCell>
              </TableRow>
            </TableBody>
          </TableRoot>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="tabs">Tabs</SectionTitle>
        <SectionContent>
          <TabsRoot>
            <TabsList>
              <TabsTrigger value="account">Tabs 1 Trigger</TabsTrigger>
              <TabsTrigger value="password">Tabs 2 Trigger</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Tabs 1 Content</TabsContent>
            <TabsContent value="password">Tabs 2 Content</TabsContent>
          </TabsRoot>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="text-field">TextField</SectionTitle>
        <SectionContent>
          <TextFieldRoot class="space-y-2" validationState={validationState()}>
            <TextFieldLabel>Text Field Label</TextFieldLabel>
            <TextFieldInput placeholder="Text Field Input" />
            <TextFieldDescription>Text Field Description</TextFieldDescription>
            <TextFieldErrorMessage>Text Field Error Message</TextFieldErrorMessage>
          </TextFieldRoot>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="textarea">Textarea</SectionTitle>
        <SectionContent>
          <TextFieldRoot class="space-y-2" validationState={validationState()}>
            <TextFieldLabel>Text Field Label</TextFieldLabel>
            <TextFieldTextArea placeholder="Text Field Text Area" />
            <TextFieldDescription>Text Field Description</TextFieldDescription>
            <TextFieldErrorMessage>Text Field Error Message</TextFieldErrorMessage>
          </TextFieldRoot>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="theme-icon">ThemeIcon</SectionTitle>
        <SectionContent>
          <ThemeIcon class="size-6" />
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="toast">Toast</SectionTitle>
        <SectionContent>
          <Portal>
            <ToastRegion >
              <ToastList />
            </ToastRegion>
          </Portal>
          <Button onClick={
            () =>
              toast.custom(() =>
                <ToastContent>
                  <ToastCloseButton />
                  <ToastTitle>Title</ToastTitle>
                  <ToastDescription>Description</ToastDescription>
                  <ToastProgressTrack>
                    <ToastProgressFill />
                  </ToastProgressTrack>
                </ToastContent>
              )
          }>Toast</Button>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="toggle">Toggle</SectionTitle>
        <SectionContent>
          <Toggle>
            {state => (
              <Show when={state.pressed()} fallback={<RiMediaVolumeUpLine class="size-6" />}>
                <RiMediaVolumeMuteLine class="size-6" />
              </Show>
            )}
          </Toggle>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle id="tooltip">Tooltip</SectionTitle>
        <SectionContent>
          <TooltipRoot>
            <TooltipTrigger>Tooltip</TooltipTrigger>
            <TooltipContent>
              <TooltipArrow />
              <p>Add to library</p>
            </TooltipContent>
          </TooltipRoot>
        </SectionContent>
      </Section>

    </div >
  )
}


function Section(props: ParentProps) {
  return (
    <div class='flex flex-col gap-2'>
      {props.children}
    </div>
  )
}

function SectionTitle(props: ParentProps & { id: string }) {
  return (
    <h2 id={props.id} class='flex-1 p-2 text-lg rounded shadow bg-secondary text-secondary-foreground'>
      <a href={`#${props.id}`} class='flex items-center hover:underline'>
        <RiEditorHashtag class='size-5' />
        {props.children}
      </a>
    </h2>
  )
}

function SectionContent(props: ParentProps & { class?: string }) {
  return (
    <div class={props.class}>
      {props.children}
    </div>
  )
}


export default App
