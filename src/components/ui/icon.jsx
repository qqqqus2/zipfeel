"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * SVG sprite icon.
 * - `name`: symbol id (filename without .svg)
 * - `size`: number (px) or CSS size string
 */
export function Icon({ name, size = 24, className, ...props }) {
  const s = typeof size === "number" ? `${size}px` : size;

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={cn("inline-block shrink-0", className)}
      style={{ width: s, height: s }}
      {...props}
    >
      <use href={`/icon/sprite.svg#${name}`} xlinkHref={`/icon/sprite.svg#${name}`} />
    </svg>
  );
}

