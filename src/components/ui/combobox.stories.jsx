import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "./button";
import { Combobox } from "./combobox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "@/lib/utils";

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function InputRowWithListDemo() {
  const [value, setValue] = React.useState("");

  const options = [
    { value: "1", label: "입력" },
    { value: "2", label: "입력 항목1" },
    { value: "3", label: "입력 항목2" },
    { value: "4", label: "입력 항목3" },
    { value: "5", label: "입력 항목4" },
    { value: "6", label: "입력 항목5" },
    { value: "7", label: "입력 항목6" },
    { value: "8", label: "입력 항목7" },
    { value: "9", label: "입력 항목8" },
    { value: "10", label: "입력 항목9" },
    { value: "11", label: "입력 항목10" },
  ];

  return (
    <div className="w-80 space-y-2">
      <Combobox
        prefixLabel="항목명"
        suffixLabel="항목명"
        placeholder="입력하세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        options={options}
        onSelect={(opt) => setValue(opt.label)}
      />
      <p className="text-xs text-muted-foreground">
        아이콘으로 패널을 열면 상단 &quot;입력&quot; 칸에서 목록을 필터할 수 있습니다.
      </p>
    </div>
  );
}

function ComboboxWithGroupsDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const options = [
    { value: "react", label: "React", category: "Framework" },
    { value: "vue", label: "Vue", category: "Framework" },
    { value: "angular", label: "Angular", category: "Framework" },
    { value: "typescript", label: "TypeScript", category: "Language" },
    { value: "javascript", label: "JavaScript", category: "Language" },
    { value: "tailwind", label: "Tailwind CSS", category: "Styling" },
    { value: "sass", label: "Sass", category: "Styling" },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between"
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : "Select technology..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search technology..." />
          <CommandList>
            <CommandEmpty>No technology found.</CommandEmpty>
            <CommandGroup heading="Framework">
              {options
                .filter((o) => o.category === "Framework")
                .map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === option.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
            </CommandGroup>
            <CommandGroup heading="Language">
              {options
                .filter((o) => o.category === "Language")
                .map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === option.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
            </CommandGroup>
            <CommandGroup heading="Styling">
              {options
                .filter((o) => o.category === "Styling")
                .map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === option.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function ComboboxLargeListDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus",
    "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
    "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cambodia", "Cameroon", "Canada", "Cape Verde", "Chad",
    "Chile", "China", "Colombia", "Comoros", "Congo",
  ].map((country) => ({
    value: country.toLowerCase().replace(/\s+/g, "-"),
    label: country,
  }));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between"
        >
          {value
            ? countries.find((country) => country.value === value)?.label
            : "Select country..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {countries.map((country) => (
                <CommandItem
                  key={country.value}
                  value={country.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === country.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {country.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

const meta = {
  title: "UI/Combobox",
  component: ComboboxDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  render: () => <ComboboxDemo />,
};

/** 텍스트 필드 + manage_search 아이콘으로 목록을 열고, 패널 상단에서 타이핑 필터 */
export const InputRowWithList = {
  name: "입력 행 + 검색 목록(Combobox)",
  render: () => <InputRowWithListDemo />,
};

export const WithGroups = {
  render: () => <ComboboxWithGroupsDemo />,
};

export const LargeList = {
  render: () => <ComboboxLargeListDemo />,
};
