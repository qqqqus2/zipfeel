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

/**
 * 가로 탭이 많을 때 활성 트리거를 리스트 가로 **중앙**에 오도록 스크롤.
 * - `scrollIntoView({ inline: "nearest" })`는 이미 보이는 탭에서는 거의 안 움직여서 미적용처럼 보임.
 * - 스크롤 컨테이너는 TabsList 루트(`listRef`)로 고정해 window 스크롤에 의존하지 않음.
 */
function useScrollActiveTabIntoView(listRef, enabled) {
  React.useLayoutEffect(() => {
    if (!enabled) return;

    const list = listRef.current;
    if (!list) return;

    let raf1 = 0;
    let raf2 = 0;
    let didMountScroll = false;

    const applyScroll = () => {
      const active = list.querySelector('[role="tab"][data-state="active"]');
      if (!active || !list.contains(active)) return;

      const reduceMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const useInstant = !didMountScroll || reduceMotion;
      didMountScroll = true;

      const behavior = useInstant ? "auto" : "smooth";

      const maxScroll = list.scrollWidth - list.clientWidth;
      if (maxScroll <= 0) return;

      // offsetLeft는 flex·중첩 시 스크롤 박스와 불일치할 수 있음 → 뷰포트 기준 보정
      const listRect = list.getBoundingClientRect();
      const activeRect = active.getBoundingClientRect();
      const activeMid = activeRect.left + activeRect.width / 2;
      const listMid = listRect.left + listRect.width / 2;
      const delta = activeMid - listMid;

      const nextRaw = list.scrollLeft + delta;
      const next = Math.min(maxScroll, Math.max(0, nextRaw));

      list.scrollTo({ left: next, behavior });
    };

    const run = () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(applyScroll);
      });
    };

    run();

    const mo = new MutationObserver(run);
    mo.observe(list, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["data-state"],
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      mo.disconnect();
    };
  }, [enabled, listRef]);
}

/** 가로 스크롤이 있을 때만, 끝이 아닌 쪽에만 가장자리 그라데이션 표시 */
function useTabListEdgeFades(listRef, enabled) {
  const [edges, setEdges] = React.useState({ left: false, right: false });

  const update = React.useCallback(() => {
    const el = listRef.current;
    if (!el || !enabled) {
      setEdges({ left: false, right: false });
      return;
    }
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    const eps = 1;
    if (maxScroll <= eps) {
      setEdges({ left: false, right: false });
      return;
    }
    setEdges({
      left: scrollLeft > eps,
      right: scrollLeft < maxScroll - eps,
    });
  }, [enabled, listRef]);

  React.useLayoutEffect(() => {
    if (!enabled) return;
    const el = listRef.current;
    if (!el) return;

    update();

    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const ro = new ResizeObserver(update);
    ro.observe(el);

    const mo = new MutationObserver(update);
    mo.observe(el, { subtree: true, childList: true });

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      ro.disconnect();
      mo.disconnect();
    };
  }, [enabled, listRef, update]);

  return edges;
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

/** 가로 스크롤은 유지하되 스크롤바 트랙은 숨김(터치·트랙패드·shift+휠로 스크롤 가능) */
const tabsListHorizontalScrollClassName = cn(
  "group-data-[orientation=horizontal]/tabs:overflow-x-auto",
  "group-data-[orientation=horizontal]/tabs:overflow-y-hidden",
  "group-data-[orientation=horizontal]/tabs:[scrollbar-width:none]",
  "group-data-[orientation=horizontal]/tabs:[-ms-overflow-style:none]",
  "group-data-[orientation=horizontal]/tabs:[&::-webkit-scrollbar]:hidden",
);

const tabsListBaseClassName = cn(
  // 가로 넘침 + justify-center 조합은 스크롤 시작(left)이 잘려 scrollLeft=0에서도 왼쪽이 안 보임
  "relative inline-flex items-center justify-start text-muted-foreground",
  "max-w-full min-w-0",
  tabsListHorizontalScrollClassName,
  "group-data-[orientation=vertical]/tabs:h-auto group-data-[orientation=vertical]/tabs:w-48 group-data-[orientation=vertical]/tabs:flex-col group-data-[orientation=vertical]/tabs:items-stretch group-data-[orientation=vertical]/tabs:justify-start",
);

const tabsListUnderlineClassName = cn(
  "group-data-[variant=underline]/tabs:h-10 group-data-[variant=underline]/tabs:gap-8 group-data-[variant=underline]/tabs:border-b group-data-[variant=underline]/tabs:border-border group-data-[variant=underline]/tabs:bg-transparent",
  // 가로 스크롤 시 뷰포트 경계에 텍스트·포커스 링이 붙어 잘려 보이는 느낌 완화
  "group-data-[variant=underline]/tabs:px-3",
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
  "group-data-[variant=slash]/tabs:isolate group-data-[variant=slash]/tabs:h-10 group-data-[variant=slash]/tabs:gap-6 group-data-[variant=slash]/tabs:bg-transparent group-data-[variant=slash]/tabs:py-0 group-data-[variant=slash]/tabs:px-2",
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
  "group-data-[variant=solid]/tabs:h-12 group-data-[variant=solid]/tabs:min-w-32 group-data-[variant=solid]/tabs:shrink-0 sm:group-data-[variant=solid]/tabs:min-w-[180px] group-data-[variant=solid]/tabs:rounded-none",
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
          orientation === "vertical"
            ? "flex flex-row gap-4"
            : "min-w-0 max-w-full",
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
  useScrollActiveTabIntoView(
    listRef,
    orientation === "horizontal",
  );

  const horizontal = orientation === "horizontal";
  const { left: showLeftFade, right: showRightFade } = useTabListEdgeFades(
    listRef,
    horizontal,
  );

  const fadeClassName = cn(
    "pointer-events-none absolute inset-y-0 z-20 w-10 from-background to-transparent transition-opacity duration-200 motion-reduce:transition-none",
  );

  const listSection = (
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

  if (!horizontal) {
    return listSection;
  }

  return (
    <div className="relative w-full min-w-0">
      {listSection}
      <div
        aria-hidden
        className={cn(
          fadeClassName,
          "left-0 bg-gradient-to-r",
          showLeftFade ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        aria-hidden
        className={cn(
          fadeClassName,
          "right-0 bg-gradient-to-l",
          showRightFade ? "opacity-100" : "opacity-0",
        )}
      />
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
      "mt-2 min-w-0 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "group-data-[orientation=vertical]/tabs:mt-0 group-data-[orientation=vertical]/tabs:flex-1",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
