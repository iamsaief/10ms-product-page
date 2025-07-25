import { cn } from "@/app/lib/utils"
import type React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
  glass?: boolean
}

export function Card({ children, className, hover = false, glass = false, ...props }: CardProps) {
  return (
    <div className={cn("card", hover && "card-hover", glass && "glass", className)} {...props}>
      {children}
    </div>
  )
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <div className={cn("p-6 pb-4", className)} {...props}>
      {children}
    </div>
  )
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function CardContent({ children, className, ...props }: CardContentProps) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  )
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export function CardTitle({ children, className, as: Component = "h2", ...props }: CardTitleProps) {
  return (
    <Component className={cn("text-2xl font-bold text-foreground mb-2", className)} {...props}>
      {children}
    </Component>
  )
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

export function CardDescription({ children, className, ...props }: CardDescriptionProps) {
  return (
    <p className={cn("text-muted-foreground", className)} {...props}>
      {children}
    </p>
  )
}
