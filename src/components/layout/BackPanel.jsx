"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function BackPanel({
    topColor = "bg-point-1",
    bottomColor = "bg-gray-1",
}) {
    return (
        <div
            className="pointer-events-none absolute inset-0 z-0 flex flex-col"
            aria-hidden
        >
            <div className={cn("md:h-1/2 h-1/3 min-h-0", topColor)} />
            <div className={cn("md:h-1/2 h-2/3 min-h-0", bottomColor)} />
        </div>
    );
}
