import { cn } from "@/lib/utils";
import type React from "react";

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "error";
}

export function Icon({ children, className, size = "md", variant = "default", ...props }: IconProps) {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const variants = {
    default: "text-muted-foreground",
    primary: "text-primary",
    secondary: "text-secondary-foreground",
    success: "text-green-600 dark:text-green-400",
    warning: "text-yellow-600 dark:text-yellow-400",
    error: "text-red-600 dark:text-red-400",
  };

  return (
    <div
      className={cn("inline-flex items-center justify-center", sizes[size], variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}
