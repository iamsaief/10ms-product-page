// Badge.tsx
// A badge component for status/labels.
// Supports theme variants, sizing.

import { cn } from "@/lib/utils";
import type React from "react";

// Props for customizing the badge's appearance
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode; // Text or icon to display inside the badge
  variant?: "default" | "secondary" | "success" | "warning" | "error"; // Visual status styles
  size?: "sm" | "md" | "lg"; // Controls padding and font size
}

export function Badge({ children, className, variant = "default", size = "md", ...props }: BadgeProps) {
  // Tailwind classes for each visual variant
  const variants = {
    default: "bg-blue-500/10 text-blue-500 border-blue-500/20 ",
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary text-secondary-foreground border-border",
    success:
      "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800",
    warning:
      "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800",
    error: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800",
  };

  // Tailwind classes for sizing presets
  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <div
      className={cn(
        // Base badge styles
        "inline-flex items-center rounded-full border font-medium transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
