// Card.tsx
// A UI component set for building consistent card layouts—includes support for hover and glass effects,
// structured header, content, title, and description elements.

// Utility function for conditional className
import { cn } from "@/lib/utils";
import type React from "react";

// Core card container with optional hover and glass styling
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean; // Add hover styles if true
  glass?: boolean; // Apply glassmorphism styles if true
}

export function Card({ children, className, hover = false, glass = false, ...props }: CardProps) {
  return (
    <div className={cn("card", hover && "card-hover", glass && "glass", className)} {...props}>
      {children}
    </div>
  );
}

// Section for placing content like titles or actions at the top of the card
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <div className={cn("p-6 pb-4", className)} {...props}>
      {children}
    </div>
  );
}

// Main content area of the card, typically follows the header
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardContent({ children, className, ...props }: CardContentProps) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
}

// Title element with semantic tag support and bold styling
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; // Render heading as appropriate level
}

export function CardTitle({ children, className, as: Component = "h2", ...props }: CardTitleProps) {
  return (
    <Component className={cn("text-2xl font-bold text-foreground mb-2", className)} {...props}>
      {children}
    </Component>
  );
}

// Description or subtitle text placed below the title
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function CardDescription({ children, className, ...props }: CardDescriptionProps) {
  return (
    <p className={cn("text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
}
