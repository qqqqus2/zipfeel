"use client";

import * as React from "react";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

const InfoMessage = React.forwardRef(
    ({ title, items = [], color, className, ...props }, ref) => {
        const colorStyle = color ? { color: `rgb(${color})` } : {};
        const colorClass = !color ? "text-gray-6" : "";

        return (
            <div
                ref={ref}
                className={cn("flex flex-col", colorClass, className)}
                style={colorStyle}
                {...props}
            >
                {title && (
                    <p className="flex gap-1 items-start">
                        <Icon name="tooltip" size={20} className="shrink-0" />
                        <span className="text-xs leading-1.2">{title}</span>
                    </p>
                )}
                {items.length > 0 && (
                    <div className="flex flex-col gap-1 pl-6">
                        {items.map((item, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <span className="w-[3px] h-[3px] rounded-full bg-current shrink-0 mt-1.5" />
                                <span className="text-xs leading-1.2">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    },
);

InfoMessage.displayName = "InfoMessage";

export { InfoMessage };
