import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

/**
 * Tabs variants
 * - underline: 밑줄형
 * - solid: 다크 솔리드형
 * - solidRounded: 다크 라운드형
 * - slash: 사선 탭
 *
 * theme는 `--tabs-accent` CSS 변수로 전달됩니다.
 */
const Tabs = React.forwardRef(
  (
    { className, orientation, variant = "underline", accentColor, ...props },
    ref,
  ) => (
    <TabsPrimitive.Root
      ref={ref}
      data-variant={variant}
      data-orientation={orientation}
      style={
        accentColor
          ? { "--tabs-accent": accentColor }
          : { "--tabs-accent": "rgb(var(--point-color-2))" }
      }
      className={cn(
        "group/tabs",
        orientation === "vertical" && "flex flex-row gap-4",
        className,
      )}
      orientation={orientation}
      {...props}
    />
  ),
);
Tabs.displayName = TabsPrimitive.Root.displayName;

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <div
    className={cn(
      // Default: don't create an extra box
      "contents",

      // solidRounded: outer layer draws the purple "shadow" (must remain visible)
      "group-data-[variant=solidRounded]/tabs:relative group-data-[variant=solidRounded]/tabs:inline-flex ",
      "group-data-[variant=solidRounded]/tabs:after:absolute group-data-[variant=solidRounded]/tabs:after:inset-0 ",
      "group-data-[variant=solidRounded]/tabs:after:translate-y-1 group-data-[variant=solidRounded]/tabs:after:bg-sub-3",
      "group-data-[variant=solidRounded]/tabs:after:rounded-l-full",
    )}
  >
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        // default (underline) base
        "relative inline-flex items-center justify-center text-muted-foreground",
        // vertical
        "group-data-[orientation=vertical]/tabs:h-auto group-data-[orientation=vertical]/tabs:w-48 group-data-[orientation=vertical]/tabs:flex-col group-data-[orientation=vertical]/tabs:items-stretch group-data-[orientation=vertical]/tabs:justify-start",

        // underline variants
        "group-data-[variant=underline]/tabs:h-10 group-data-[variant=underline]/tabs:gap-8 group-data-[variant=underline]/tabs:border-b group-data-[variant=underline]/tabs:border-border group-data-[variant=underline]/tabs:bg-transparent group-data-[variant=underline]/tabs:px-1",

        // solid variants
        "group-data-[variant=solid]/tabs:gap-0 group-data-[variant=solid]/tabs:rounded-none",
        "group-data-[variant=solid]/tabs:bg-transparent group-data-[variant=solid]/tabs:p-0",

        // solidRounded: inner layer handles rounding + clipping + dark bar + bottom accent line
        "group-data-[variant=solidRounded]/tabs:z-10 group-data-[variant=solidRounded]/tabs:h-12 group-data-[variant=solidRounded]/tabs:gap-0",
        "group-data-[variant=solidRounded]/tabs:overflow-hidden group-data-[variant=solidRounded]/tabs:rounded-l-full",
        "group-data-[variant=solidRounded]/tabs:bg-black/80",

        // slash variant (3 tabs header)
        "group-data-[variant=slash]/tabs:h-10 group-data-[variant=slash]/tabs:gap-6 group-data-[variant=slash]/tabs:bg-transparent group-data-[variant=slash]/tabs:p-0",

        className,
      )}
      {...props}
    />
  </div>
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "relative inline-flex items-center justify-center whitespace-nowrap text-sm font-normal ring-offset-background transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none",
      "group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start",

      // underline
      "group-data-[variant=underline]/tabs:disabled:text-gray-7",
      "group-data-[variant=underline]/tabs:h-10 group-data-[variant=underline]/tabs:px-2 group-data-[variant=underline]/tabs:text-gray-6",
      "group-data-[variant=underline]/tabs:data-[state=active]:text-black group-data-[variant=underline]/tabs:data-[state=active]:font-bold",
      "group-data-[variant=underline]/tabs:after:absolute group-data-[variant=underline]/tabs:after:left-0 group-data-[variant=underline]/tabs:after:right-0",
      "group-data-[variant=underline]/tabs:after:-bottom-[1px] group-data-[variant=underline]/tabs:after:h-[3px]",
      "group-data-[variant=underline]/tabs:after:rounded-full group-data-[variant=underline]/tabs:after:opacity-0 group-data-[variant=underline]/tabs:after:transition-opacity",
      "group-data-[variant=underline]/tabs:after:bg-[color:var(--tabs-accent)] data-[state=active]:after:opacity-100",

      // solid (dark)
      "group-data-[variant=solid]/tabs:h-12 group-data-[variant=solid]/tabs:min-w-[180px] group-data-[variant=solid]/tabs:rounded-none",
      "group-data-[variant=solid]/tabs:bg-neutral-800 group-data-[variant=solid]/tabs:text-white/70",
      "group-data-[variant=solid]/tabs:data-[state=active]:text-white",
      "group-data-[variant=solid]/tabs:border-b-4 group-data-[variant=solid]/tabs:border-b-[color:var(--tabs-accent)]",

      // // solidRounded (dark bar: container draws bg/underline; triggers only text)
      "group-data-[variant=solidRounded]/tabs:disabled:text-black",
      "group-data-[variant=solidRounded]/tabs:h-12 group-data-[variant=solidRounded]/tabs:px-6",
      "group-data-[variant=solidRounded]/tabs:bg-black/80 group-data-[variant=solidRounded]/tabs:text-white/70 group-data-[variant=solidRounded]/tabs:text-gray-3",
      "group-data-[variant=solidRounded]/tabs:data-[state=active]:text-white",

      // // slash (active only clip-path)
      "group-data-[variant=slash]/tabs:h-10 group-data-[variant=slash]/tabs:px-6 group-data-[variant=slash]/tabs:font-semibold",
      "group-data-[variant=slash]/tabs:text-foreground/80",
      "group-data-[variant=slash]/tabs:data-[state=active]:text-white",
      "group-data-[variant=slash]/tabs:data-[state=active]:bg-[color:var(--tabs-accent)]",
      "group-data-[variant=slash]/tabs:data-[state=active]:[clip-path:polygon(10px_0,100%_0,calc(100%-10px)_100%,0_100%)]",

      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "group-data-[orientation=vertical]/tabs:mt-0 group-data-[orientation=vertical]/tabs:min-w-0 group-data-[orientation=vertical]/tabs:flex-1",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
