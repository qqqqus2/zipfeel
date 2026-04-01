"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const shellClass =
  "flex h-10 w-full items-center gap-2 rounded-md border border-input bg-background px-3 text-base ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2";

const innerInputClass =
  "min-w-0 flex-1 border-0 bg-transparent p-0 text-base shadow-none outline-none placeholder:text-muted-foreground focus-visible:ring-0 disabled:cursor-not-allowed";

const addonClass = "shrink-0 text-sm font-medium text-foreground select-none";

const invalidShellClass =
  "has-[input[aria-invalid=true]]:border-destructive has-[input[aria-invalid=true]]:focus-within:ring-destructive/40";

function normalizeOptions(options) {
  if (!options?.length) return [];
  return options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt,
  );
}

const Combobox = React.forwardRef(
  (
    {
      className,
      options: optionsProp,
      onSelect,
      prefixLabel,
      suffixLabel,
      open: openProp,
      onOpenChange,
      commandPlaceholder = "입력",
      triggerAriaLabel = "항목 검색",
      emptyMessage = "검색할 항목이 없습니다.",
      filterEmptyMessage = "검색 결과가 없습니다.",
      disabled,
      type = "text",
      ...inputProps
    },
    ref,
  ) => {
    const options = normalizeOptions(optionsProp);
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
    const open = openProp !== undefined ? openProp : uncontrolledOpen;
    const setOpen = React.useCallback(
      (next) => {
        onOpenChange?.(next);
        if (openProp === undefined) setUncontrolledOpen(next);
      },
      [onOpenChange, openProp],
    );

    const [panelKey, setPanelKey] = React.useState(0);
    const wasOpen = React.useRef(false);
    React.useEffect(() => {
      if (open && !wasOpen.current) {
        setPanelKey((k) => k + 1);
      }
      wasOpen.current = open;
    }, [open]);

    return (
      <div
        className={cn(
          shellClass,
          invalidShellClass,
          disabled && "cursor-not-allowed opacity-50",
          className,
        )}
      >
        {prefixLabel ? <span className={addonClass}>{prefixLabel}</span> : null}
        <input
          type={type}
          disabled={disabled}
          className={innerInputClass}
          ref={ref}
          {...inputProps}
        />
        {suffixLabel ? <span className={addonClass}>{suffixLabel}</span> : null}
        <Popover open={open} onOpenChange={setOpen} modal={false}>
          <PopoverTrigger asChild>
            <button
              type="button"
              disabled={disabled}
              className={cn(
                "flex shrink-0 rounded-sm p-0.5 text-foreground outline-none hover:bg-accent/60 focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
              )}
              aria-label={triggerAriaLabel}
              aria-expanded={open}
              aria-haspopup="listbox"
            >
              <Icon name="manage_search" size={22} />
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="w-[var(--radix-popover-trigger-width)] min-w-[240px] p-0"
          >
            <Command key={panelKey}>
              <CommandInput
                hideIcon
                autoFocus
                placeholder={commandPlaceholder}
                className="h-10 py-2 text-sm"
              />
              <CommandList className="max-h-72">
                {options.length === 0 ? (
                  <div className="px-2 py-6 text-center text-sm text-muted-foreground">
                    {emptyMessage}
                  </div>
                ) : (
                  <>
                    <CommandEmpty className="py-6 text-sm text-muted-foreground">
                      {filterEmptyMessage}
                    </CommandEmpty>
                    <CommandGroup className="p-1">
                      {options.map((opt) => (
                        <CommandItem
                          key={opt.value}
                          value={`${opt.label} ${opt.value}`}
                          onSelect={() => {
                            onSelect?.(opt);
                            setOpen(false);
                          }}
                          className="cursor-pointer"
                        >
                          {opt.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </>
                )}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
);
Combobox.displayName = "Combobox";

export { Combobox };
