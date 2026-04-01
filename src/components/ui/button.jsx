import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 cursor-pointer",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/40",
        oulinePoint1:
          "border border-point-1 text-point-1 bg-transparent hover:text-white hover:bg-point-2 hover:border-point-2 active:text-white active:bg-point-1 active:border-point-1 disabled:bg-transparent disabeld:text-point-3",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-gray-6 underline-offset-1 hover:underline hover:text-point-2 hover:font-bold active:text-point-1",
        // Figma design tokens
        point1: "bg-point-1 text-white shadow hover:bg-point-1/90",
        point2: "bg-point-2 text-white shadow hover:bg-point-2/90",
        point3: "bg-point-3 text-gray-6 shadow hover:bg-point-3/90",
        sub1: "bg-sub-1 text-white shadow hover:bg-sub-1/90",
        sub2: "bg-sub-2 text-white shadow hover:bg-sub-2/90",
        sub3: "bg-sub-3 text-white shadow hover:bg-sub-3/90",
        sub4: "bg-sub-4 text-gray-6 shadow hover:bg-sub-4/90",
        sub8: "bg-sub-8 text-gray-6 shadow hover:bg-sub-8/90",
      },
      size: {
        default: "h-10 px-4 text-base",
        sm: "h-8 px-3 text-sm [&_svg]:size-4",
        lg: "h-12 px-6 text-lg [&_svg]:size-7",
        full: "w-full h-12 px-6 text-lg [&_svg]:size-7",
        icon: "h-10 w-10 [&_svg]:size-6",
        iconSm: "h-8 w-8 [&_svg]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
