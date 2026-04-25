import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "ai" | "category" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
        {
          "bg-np-blue text-white": variant === "default",
          "bg-np-red/10 text-np-red border border-np-red/20": variant === "ai",
          "bg-np-yellow/20 text-np-blue-dark": variant === "category",
          "border border-np-gray-300 text-np-gray-700": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}
