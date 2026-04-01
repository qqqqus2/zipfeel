"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const TabsChromeContext = React.createContext({
  variant: "underline",
  orientation: "horizontal",
});

function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((r) => {
      if (typeof r === "function") r(node);
      else if (r && "current" in r) r.current = node;
    });
  };
}

/** 슬라이딩 인디케이터: underline(하단 막대) · slash(사다리꼴) 만 */
const SLIDING_VARIANTS = new Set(["underline", "slash"]);

/** 활성 트리거 rect → 공통 CSS 변수 (--tab-ind-*) */
function useTabIndicatorPosition(listRef, enabled) {
  React.useLayoutEffect(() => {
    if (!enabled) return;

    const list = listRef.current;
    if (!list) return;

    const clear = () => {
      list.style.removeProperty("--tab-ind-left");
      list.style.removeProperty("--tab-ind-top");
      list.style.removeProperty("--tab-ind-width");
      list.style.removeProperty("--tab-ind-height");
      list.style.removeProperty("--tab-ind-line-top");
      list.style.removeProperty("--tab-ind-line-inset-left");
      list.style.removeProperty("--tab-ind-line-inset-width");
    };

    const update = () => {
      const active = list.querySelector('[role="tab"][data-state="active"]');
      if (!active) {
        clear();
        return;
      }
      const lr = list.getBoundingClientRect();
      const ar = active.getBoundingClientRect();
      const sl = list.scrollLeft;
      const st = list.scrollTop;
      const left = ar.left - lr.left + sl;
      const top = ar.top - lr.top + st;
      const w = ar.width;
      const h = ar.height;
      list.style.setProperty("--tab-ind-left", `${left}px`);
      list.style.setProperty("--tab-ind-top", `${top}px`);
      list.style.setProperty("--tab-ind-width", `${w}px`);
      list.style.setProperty("--tab-ind-height", `${h}px`);
      list.style.setProperty("--tab-ind-line-top", `${top + h - 4}px`);
      const inset = 12;
      list.style.setProperty("--tab-ind-line-inset-left", `${left + inset}px`);
      list.style.setProperty(
        "--tab-ind-line-inset-width",
        `${Math.max(0, w - inset * 2)}px`,
      );
    };

    update();

    const mo = new MutationObserver(update);
    mo.observe(list, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["data-state"],
    });

    const ro = new ResizeObserver(update);
    ro.observe(list);

    window.addEventListener("resize", update);

    return () => {
      mo.disconnect();
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [enabled, listRef]);
}

function UnderlineTabIndicatorLayer() {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute z-0 h-[3px] rounded-full bg-[color:var(--tabs-accent)]",
        "-bottom-px left-[var(--tab-ind-left,0px)] w-[var(--tab-ind-width,0px)]",
        "transition-[left,width] duration-200 ease-out motion-reduce:transition-none",
      )}
    />
  );
}

function SlashTabIndicatorLayer() {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute z-0 bg-[color:var(--tabs-accent)]",
        "left-[var(--tab-ind-left,0px)] top-[var(--tab-ind-top,0px)] h-[var(--tab-ind-height,0px)] w-[var(--tab-ind-width,0px)]",
        "transition-[left,top,width,height] duration-200 ease-out motion-reduce:transition-none",
      )}
      style={{
        clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
      }}
    />
  );
}

function TabIndicatorSlot({ variant }) {
  if (variant === "underline") return <UnderlineTabIndicatorLayer />;
  if (variant === "slash") return <SlashTabIndicatorLayer />;
  return null;
}

/** solidRounded: 리스트 뒤 둥근 배경 레이어 */
const tabsListSolidRoundedShellClassName = cn(
  "contents",
  "group-data-[variant=solidRounded]/tabs:relative group-data-[variant=solidRounded]/tabs:inline-flex",
  "group-data-[variant=solidRounded]/tabs:after:absolute group-data-[variant=solidRounded]/tabs:after:inset-0",
  "group-data-[variant=solidRounded]/tabs:after:translate-y-1 group-data-[variant=solidRounded]/tabs:after:bg-sub-3",
  "group-data-[variant=solidRounded]/tabs:after:rounded-l-full",
);

const tabsListBaseClassName = cn(
  "relative inline-flex items-center justify-center text-muted-foreground",
  "group-data-[orientation=vertical]/tabs:h-auto group-data-[orientation=vertical]/tabs:w-48 group-data-[orientation=vertical]/tabs:flex-col group-data-[orientation=vertical]/tabs:items-stretch group-data-[orientation=vertical]/tabs:justify-start",
);

const tabsListUnderlineClassName = cn(
  "group-data-[variant=underline]/tabs:h-10 group-data-[variant=underline]/tabs:gap-8 group-data-[variant=underline]/tabs:border-b group-data-[variant=underline]/tabs:border-border group-data-[variant=underline]/tabs:bg-transparent group-data-[variant=underline]/tabs:px-1",
);

const tabsListSolidClassName = cn(
  "group-data-[variant=solid]/tabs:gap-0 group-data-[variant=solid]/tabs:rounded-none",
  "group-data-[variant=solid]/tabs:bg-transparent group-data-[variant=solid]/tabs:p-0",
);

const tabsListSolidRoundedClassName = cn(
  "group-data-[variant=solidRounded]/tabs:z-10 group-data-[variant=solidRounded]/tabs:h-12 group-data-[variant=solidRounded]/tabs:gap-0",
  "group-data-[variant=solidRounded]/tabs:overflow-hidden group-data-[variant=solidRounded]/tabs:rounded-l-full",
  "group-data-[variant=solidRounded]/tabs:border-b group-data-[variant=solidRounded]/tabs:border-sub-3",
  "group-data-[variant=solidRounded]/tabs:bg-tabs-surface",
);

const tabsListSlashClassName = cn(
  "group-data-[variant=slash]/tabs:isolate group-data-[variant=slash]/tabs:h-10 group-data-[variant=slash]/tabs:gap-6 group-data-[variant=slash]/tabs:bg-transparent group-data-[variant=slash]/tabs:p-0",
);

const tabsTriggerBaseClassName = cn(
  "relative z-10 inline-flex items-center justify-center whitespace-nowrap text-sm font-normal ring-offset-background transition-colors",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none",
  "group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start",
);

/** 세로 + underline 일 때만 트리거 밑줄(가로는 슬라이딩 레이어) */
const tabsTriggerUnderlineClassName = cn(
  "group-data-[variant=underline]/tabs:disabled:text-gray-7",
  "group-data-[variant=underline]/tabs:h-10 group-data-[variant=underline]/tabs:px-2 group-data-[variant=underline]/tabs:text-gray-6",
  "group-data-[variant=underline]/tabs:data-[state=active]:text-black group-data-[variant=underline]/tabs:data-[state=active]:font-bold",
  "group-data-[orientation=vertical]/tabs:group-data-[variant=underline]/tabs:after:absolute group-data-[orientation=vertical]/tabs:group-data-[variant=underline]/tabs:after:left-0 group-data-[orientation=vertical]/tabs:group-data-[variant=underline]/tabs:after:right-0",
  "group-data-[orientation=vertical]/tabs:group-data-[variant=underline]/tabs:after:-bottom-[1px] group-data-[orientation=vertical]/tabs:group-data-[variant=underline]/tabs:after:h-[3px]",
  "group-data-[orientation=vertical]/tabs:group-data-[variant=underline]/tabs:after:rounded-full group-data-[orientation=vertical]/tabs:group-data-[variant=underline]/tabs:after:opacity-0",
  "group-data-[orientation=vertical]/tabs:group-data-[variant=underline]/tabs:after:transition-opacity",
  "group-data-[orientation=vertical]/tabs:group-data-[variant=underline]/tabs:after:bg-[color:var(--tabs-accent)]",
  "group-data-[orientation=vertical]/tabs:group-data-[variant=underline]/tabs:data-[state=active]:after:opacity-100",
);

const tabsTriggerSolidClassName = cn(
  "group-data-[variant=solid]/tabs:h-12 group-data-[variant=solid]/tabs:min-w-[180px] group-data-[variant=solid]/tabs:rounded-none",
  "group-data-[variant=solid]/tabs:bg-tabs-surface group-data-[variant=solid]/tabs:text-tabs-label-muted",
  "group-data-[variant=solid]/tabs:data-[state=active]:text-white",
  "group-data-[variant=solid]/tabs:border-b-4 group-data-[variant=solid]/tabs:border-b-transparent",
  "group-data-[variant=solid]/tabs:data-[state=active]:border-b-[color:var(--tabs-accent)]",
);

const tabsTriggerSolidRoundedClassName = cn(
  "group-data-[variant=solidRounded]/tabs:disabled:text-gray-5",
  "group-data-[variant=solidRounded]/tabs:h-12 group-data-[variant=solidRounded]/tabs:px-6",
  "group-data-[variant=solidRounded]/tabs:bg-tabs-surface group-data-[variant=solidRounded]/tabs:text-tabs-label-muted",
  "group-data-[variant=solidRounded]/tabs:data-[state=active]:text-white group-data-[variant=solidRounded]/tabs:data-[state=active]:font-semibold",
  "group-data-[variant=solidRounded]/tabs:after:pointer-events-none group-data-[variant=solidRounded]/tabs:after:absolute group-data-[variant=solidRounded]/tabs:after:bottom-[-2px]",
  "group-data-[variant=solidRounded]/tabs:after:left-3 group-data-[variant=solidRounded]/tabs:after:right-3 group-data-[variant=solidRounded]/tabs:after:h-1",
  "group-data-[variant=solidRounded]/tabs:after:rounded-sm group-data-[variant=solidRounded]/tabs:after:bg-[color:var(--tabs-accent)]",
  "group-data-[variant=solidRounded]/tabs:after:opacity-0 group-data-[variant=solidRounded]/tabs:after:transition-opacity",
  "group-data-[variant=solidRounded]/tabs:data-[state=active]:after:opacity-100",
);

const tabsTriggerSlashClassName = cn(
  "group-data-[variant=slash]/tabs:h-10 group-data-[variant=slash]/tabs:px-6 group-data-[variant=slash]/tabs:font-semibold",
  "group-data-[variant=slash]/tabs:bg-transparent group-data-[variant=slash]/tabs:text-muted-foreground",
  "group-data-[variant=slash]/tabs:data-[state=active]:text-white",
  "group-data-[variant=slash]/tabs:transition-colors group-data-[variant=slash]/tabs:duration-200",
);

/**
 * Tabs variants
 *
 * - 슬라이딩 인디케이터: **underline**, **slash** 만 (가로 탭).
 * - solid / solidRounded: 트리거 자체 스타일(보더·::after).
 * - 세로 탭: 슬라이딩 끔 → 트리거 `::after` 등으로 표시.
 *
 * 강조색은 `--tabs-accent` (또는 `accentColor` prop).
 */
const Tabs = React.forwardRef(
  (
    {
      className,
      orientation = "horizontal",
      variant = "underline",
      accentColor,
      ...props
    },
    ref,
  ) => (
    <TabsChromeContext.Provider value={{ variant, orientation }}>
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
    </TabsChromeContext.Provider>
  ),
);
Tabs.displayName = TabsPrimitive.Root.displayName;

const TabsList = React.forwardRef(({ className, children, ...props }, ref) => {
  const { variant, orientation } = React.useContext(TabsChromeContext);
  const listRef = React.useRef(null);
  const mergedRef = React.useMemo(() => mergeRefs(ref, listRef), [ref]);

  const useSliding =
    orientation !== "vertical" && SLIDING_VARIANTS.has(variant);

  useTabIndicatorPosition(listRef, useSliding);

  return (
    <div className={tabsListSolidRoundedShellClassName}>
      <TabsPrimitive.List
        ref={mergedRef}
        className={cn(
          tabsListBaseClassName,
          tabsListUnderlineClassName,
          tabsListSolidClassName,
          tabsListSolidRoundedClassName,
          useSliding && "isolate",
          tabsListSlashClassName,
          className,
        )}
        {...props}
      >
        {useSliding ? <TabIndicatorSlot variant={variant} /> : null}
        {children}
      </TabsPrimitive.List>
    </div>
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      tabsTriggerBaseClassName,
      tabsTriggerUnderlineClassName,
      tabsTriggerSolidClassName,
      tabsTriggerSolidRoundedClassName,
      tabsTriggerSlashClassName,
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
