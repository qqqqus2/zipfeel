"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system", resolvedTheme } = useTheme();

  // Sonner는 보통 light/dark를 기대합니다. system은 resolvedTheme로 해석해서 전달합니다.
  const sonnerTheme = theme === "system" ? (resolvedTheme ?? "light") : theme;

  return (
    <Sonner
      theme={sonnerTheme}
      className="toaster group"
      toastOptions={{
        // headless: Sonner 기본(data-styled) 스타일 제거
        unstyled: true,
        classNames: {
          toast: [
            "relative flex min-w-[330px] max-w-[calc(100vw-2rem)] items-start gap-3 rounded-lg",
            "bg-gray-6 text-white shadow-lg",
            "px-5 py-4",
            // close 버튼 공간
            "pr-12",
          ].join(" "),
          title: "text-base font-semibold leading-6",
          description: "mt-1 text-sm leading-5 text-gray-3",
          actionButton:
            "inline-flex h-10 items-center justify-center rounded-md bg-point-1 px-4 text-sm font-medium text-white shadow-sm hover:bg-point-1/90",
          cancelButton:
            "inline-flex h-10 items-center justify-center rounded-md border border-point-1 bg-transparent px-4 text-sm font-medium text-point-1 shadow-sm hover:bg-white/10",
          closeButton:
            "absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-sm text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
