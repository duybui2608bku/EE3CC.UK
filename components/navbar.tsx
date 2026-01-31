"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { getAllCategories } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const categories = getAllCategories();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <Image
              src="http://e3eec.uk/wp-content/uploads/2018/08/E3-LOGO-TEXT-1.png"
              alt="E3 Audio Logo"
              width={160}
              height={40}
              className="h-8 w-auto"
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground flex items-center gap-1 cursor-pointer py-2">
                Categories
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Invisible bridge to prevent gap */}
              <div className="absolute left-0 top-full w-full h-2 opacity-0 pointer-events-none"></div>
              <div className="absolute left-0 top-full pt-2 w-56 opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none">
                <div className="rounded-lg border bg-popover p-2">
                  <div className="grid gap-1">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/category/${category.slug}`}
                        className="rounded-md px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                      >
                        {category.name} ({category.count})
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 rounded-lg border border-input bg-background pl-10 pr-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </form>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground transition-colors hover:text-primary cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-accent cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="px-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </form>
            <div className="space-y-1">
              <div className="px-3 py-2 text-sm font-semibold text-muted-foreground">
                Categories
              </div>
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="block rounded-md px-6 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {category.name} ({category.count})
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
