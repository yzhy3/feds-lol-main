import * as React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes < HTMLInputElement > {
  icon ? : string;
}

const Input = React.forwardRef < HTMLInputElement,
  InputProps > (
    ({ className, type, icon, ...props }, ref) => {
      return (
        <div className="relative flex w-full items-center">
        {icon && (
          <Icon
            icon={icon}
            className="pointer-events-none absolute left-3 h-4 w-4 text-neutral-500"
          />
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-700 disabled:cursor-not-allowed disabled:opacity-50",
            icon && "pl-9",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
      );
    }
  );
Input.displayName = "Input";

export { Input };