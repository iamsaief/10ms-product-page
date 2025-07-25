"use client";

import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";
import { useTheme } from "./ThemeProvider";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

/**
 * Enhanced header with modern design
 */
export default function Header() {
  const { theme, toggleTheme } = useTheme();

  const router = useRouter();
  const searchParams = useSearchParams();

  const currentLang = searchParams.get("lang") || "en";

  // Toggle language by updating search params
  const toggleLanguage = () => {
    const params = new URLSearchParams(searchParams.toString());
    const nextLang = currentLang === "en" ? "bn" : "en";
    params.set("lang", nextLang);

    // Push the updated URL without reloading the page
    router.push(`?${params.toString()}`);
  };

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
            >
              10MS
            </Link>
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
            <Button variant="ghost" size="sm" onClick={toggleTheme} className="p-2">
              <Icon size="md">
                {theme === "light" ? (
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </Icon>
            </Button>

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
