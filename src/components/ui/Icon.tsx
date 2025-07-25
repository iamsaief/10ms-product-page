// Icon.tsx
// A wrapper component for icon rendering
// Supports variant color sizes and custom class names.

import { cn } from "@/lib/utils";
import type React from "react";

// Props accepted by the Icon component
interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode; // Icon element or SVG
  size?: "sm" | "md" | "lg"; // Preset sizes
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "error"; // Color themes
}

export function Icon({ children, className, size = "md", variant = "default", ...props }: IconProps) {
  // Tailwind classes for size variants
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  // Tailwind classes for visual variants
  const variants = {
    default: "text-muted-foreground",
    primary: "text-primary",
    secondary: "text-secondary-foreground",
    success: "text-green-600 dark:text-green-400",
    warning: "text-yellow-600 dark:text-yellow-400",
    error: "text-red-600 dark:text-red-400",
  };

  // Render icon with calculated class names and additional props
  return (
    <span
      className={cn("inline-flex items-center justify-center", sizes[size], variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}
