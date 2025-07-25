"use client";

import { Button } from "./ui/Button";

/**
 * Enhanced header with modern design
 */
export default function Header() {
  const toggleLanguage = () => {
    const currentUrl = new URL(window.location.href);
    const currentLang = currentUrl.searchParams.get("lang") || "en";
    const newLang = currentLang === "en" ? "bn" : "en";
    currentUrl.searchParams.set("lang", newLang);
    window.location.href = currentUrl.toString();
  };

  const currentLang =
    typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("lang") || "en" : "en";

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              10MS
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Courses
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Skills
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Admission
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Books
            </a>
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            {/* Language Toggle */}
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="text-sm font-medium">
              {currentLang === "en" ? "বাং" : "EN"}
            </Button>

            {/* Theme Toggle */}

            {/* Login Button */}
            <Button variant="primary" size="sm">
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
