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
      "border-b border-gray-2 md:first:border-t max-md:last:border-b-0 odd:bg-gray-white even:bg-gray-1",
      "data-[state=open]:bg-gray-2 ",
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
          "flex flex-1 items-center justify-between p-[12px] text-left text-sm font-medium transition-all",
          "hover:text-point-3",
          "[&[data-state=open]_.accordion-icon-expand]:hidden [&[data-state=open]_.accordion-icon-collapse]:block",
          "[&[data-state=closed]_.accordion-icon-expand]:block [&[data-state=closed]_.accordion-icon-collapse]:hidden",
          "max-md:py-[20px] max-md:px-[15px]",
          className,
        )}
        {...props}
      >
        {children}
        <Button variant="ghost" size="icon" className=" p-0">
          <Icon
            name="expand_content"
            size={24}
            className="accordion-icon-expand text-gray-6 group-hover:text-point-3"
          />
          <Icon
            name="collapse_content"
            size={24}
            className="accordion-icon-collapse hidden text-gray-6 group-hover:text-point-3"
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
        "overflow-hidden text-sm p-[20px] max-md:p-[30px]",
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        "data-[state=open]:border-t-[2px]  data-[state=open]:border-dashed data-[state=open]:border-[rgba(71,69,84,0.4)]",
        className,
      )}
      {...props}
    >
      <div className={cn(className)}>{children}</div>
    </AccordionPrimitive.Content>
  ),
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
