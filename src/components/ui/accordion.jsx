"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn(
            "border-b border-gray-2 max-md:last:border-b-0 odd:bg-gray-white even:bg-gray-1",
            "data-[state=open]:bg-[#D9D9D9]",
            className,
        )}
        {...props}
    />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
    ({ className, children, ...props }, ref) => (
        <AccordionPrimitive.Header className="flex group">
            <AccordionPrimitive.Trigger
                ref={ref}
                className={cn(
                    "flex flex-1 items-center justify-between p-[15px] text-left fz-12 font-medium transition-all",
                    "data-[state=open]:pb-0",
                    "[&[data-state=open]_.accordion-icon-expand]:hidden [&[data-state=open]_.accordion-icon-collapse]:block",
                    "[&[data-state=closed]_.accordion-icon-expand]:block [&[data-state=closed]_.accordion-icon-collapse]:hidden",
                    "max-md:py-[20px] max-md:px-[15px] max-md:data-[state=open]:pb-0",
                    className,
                )}
                {...props}
            >
                {children}
                <Button variant="ghost" size="icon" className=" p-0">
                    <Icon
                        name="expand_content"
                        size={24}
                        className="accordion-icon-expand text-gray-6"
                    />
                    <Icon
                        name="collapse_content"
                        size={24}
                        className="accordion-icon-collapse hidden text-gray-6"
                    />
                </Button>
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    ),
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
    ({ className, children, ...props }, ref) => (
        <AccordionPrimitive.Content
            ref={ref}
            className={cn(
                "text-sm text-[#474554]",
                "accordion-content-custom",
                "[&>div]:data-[state=open]:pt-0 [&>div]:data-[state=open]:px-[15px] [&>div]:data-[state=open]:pb-[15px]",
                "[&>div]:max-md:data-[state=open]:px-[15px] [&>div]:max-md:data-[state=open]:pb-[15px]",
                "[&>div]:data-[state=closed]:px-[15px] [&>div]:data-[state=closed]:pb-[12px]",
                "[&>div]:max-md:data-[state=closed]:px-[15px] [&>div]:max-md:data-[state=closed]:pb-[12px]",
                "[&>div]:data-[state=closed]:line-clamp-1",
                className,
            )}
            {...props}
        >
            <div>{children}</div>
        </AccordionPrimitive.Content>
    ),
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
