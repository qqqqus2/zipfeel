import * as React from "react";

import { cn } from "@/lib/utils";

const ButtonWrap = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center gap-2.5 ", className)}
        {...props}
    />
));
ButtonWrap.displayName = "ButtonWrap";

export { ButtonWrap };
