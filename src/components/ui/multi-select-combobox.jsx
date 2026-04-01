"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function MultiSelectCombobox({
  label,
  options,
  value,
  onValueChange,
  placeholder = "선택하세요",
  searchable = false,
  searchPlaceholder = "검색…",
  className,
  disabled,
  required = false,
  invalid = false,
  "aria-invalid": ariaInvalidProp,
}) {
  const ariaInvalid =
    ariaInvalidProp === true || invalid === true ? true : undefined;
  const [open, setOpen] = React.useState(false);
  const selectedCount = value.length;

  const toggle = React.useCallback(
    (v) => {
      if (value.includes(v)) onValueChange(value.filter((x) => x !== v));
      else onValueChange([...value, v]);
    },
    [onValueChange, value]
  );

  return (
    <Popover open={open} onOpenChange={setOpen} modal={false}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          type="button"
          role="combobox"
          aria-expanded={open}
          aria-required={required}
          aria-invalid={ariaInvalid}
          disabled={disabled}
          className={cn(
            "h-11 w-full justify-between gap-3 rounded-md border border-input px-4",
            className
          )}
        >
          <span className="flex min-w-0 flex-1 items-center gap-3 text-left">
            <span className="shrink-0 text-sm font-medium text-foreground">
              {label}
            </span>
            <span
              className={cn(
                "min-w-0 flex-1 truncate text-sm",
                selectedCount === 0 ? "text-muted-foreground" : "text-foreground"
              )}
            >
              {selectedCount === 0 ? placeholder : `${selectedCount}건 선택`}
            </span>
          </span>
          <ChevronDown className="size-4 shrink-0 opacity-60" />
        </Button>
      </PopoverTrigger>

      <PopoverContent align="start" className="w-[--radix-popover-trigger-width] p-0">
        <Command>
          {searchable ? <CommandInput placeholder={searchPlaceholder} /> : null}
          <CommandList>
            {searchable ? <CommandEmpty>검색 결과가 없습니다.</CommandEmpty> : null}
            <CommandGroup>
              {options.map((opt) => {
                const checked = value.includes(opt.value);
                return (
                  <CommandItem
                    key={opt.value}
                    value={opt.value}
                    disabled={opt.disabled}
                    onSelect={() => toggle(opt.value)}
                    className="py-2"
                  >
                    <Checkbox
                      checked={checked}
                      onCheckedChange={() => toggle(opt.value)}
                      className="mr-3"
                      aria-label={checked ? "선택됨" : "선택 안 됨"}
                    />
                    <span className="flex-1">{opt.label}</span>
                    <Check
                      className={cn(
                        "ml-2 h-4 w-4",
                        checked ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
