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
    ghost: "hover:bg-secondary dark:hover:bg-gray-900/70 text-foreground",
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
        "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus-ring cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || loading} // Disable when explicitly set or loading is active
      {...props}
    >
      {loading && (
        // SVG spinner indicating loading state
        <svg viewBox={`0 0 24 24`} className="animate-spin -ml-1 mr-3 h-5 w-5">
          {/* Background circle (track) */}
          <circle className="opacity-25" cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth={3} />

          {/* Spinning half circle */}
          <circle
            className="opacity-75"
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeDasharray={10 * 2 * Math.PI}
            strokeDashoffset={(10 * 2 * Math.PI) / 2}
          />
        </svg>
      )}
      {children}
    </button>
  );
}
