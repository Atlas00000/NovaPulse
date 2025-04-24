// apps/client/components/Header.tsx
"use client";

import Link from "next/link";
import { DarkModeSwitch } from "./DarkModeSwitch";

export function Header() {
  const navItems = [
    { label: "Tech", href: "/categories/tech" },
    { label: "Business", href: "/categories/business" },
    { label: "Science", href: "/categories/science" },
    { label: "Politics", href: "/categories/politics" },
    { label: "Culture", href: "/categories/culture" },
    { label: "Sports", href: "/categories/sports" },
    { label: "Future", href: "/categories/future" },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-gray-900 border-b">
      {/* Top Bar: Logo, Search, Dark Mode */}
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">NovaPulse</Link>

        {/* Search & Toggle */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-full py-1 px-3 pl-8 text-sm focus:outline-none focus:ring"
            />
            <svg
              className="w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
            </svg>
          </div>

          {/* Dark/Light Toggle */}
          <DarkModeSwitch />
        </div>
      </div>

      {/* Navigation Bar (always visible) */}
      <nav className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="container mx-auto flex overflow-x-auto space-x-6 p-3">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
);
}
