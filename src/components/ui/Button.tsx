// Button.tsx
// A button component supporting variant, size, and loading states.

import { cn } from "@/lib/utils";
import type React from "react";

// Props for customizing button appearance and behavior
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; // Button label or icon
  variant?: "primary" | "secondary" | "outline" | "ghost"; // Visual style
  size?: "sm" | "md" | "lg"; // Padding and text size presets
  loading?: boolean; // Show spinner if true
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  ...props
}: ButtonProps) {
  // Variant styles using Tailwind class conventions
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    ghost: "hover:bg-secondary text-foreground",
  };

  // Size styles mapped to Tailwind padding and font sizes
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        // Base styles for accessibility, interactivity, and layout
        "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus-ring disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || loading} // Disable when explicitly set or loading is active
      {...props}
    >
      {loading && (
        // SVG spinner indicating loading state
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
}
