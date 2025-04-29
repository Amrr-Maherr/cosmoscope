// components/Navbar.js (or any other path you prefer)
"use client"
// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';

// --- Shadcn UI Imports ---
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// --- Lucide React Icon Imports ---
import { Menu, X, ChevronDown, Search } from 'lucide-react'; // <-- Import icons

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black/30 fixed  backdrop-blur-lg border-b border-white/10 text-white  top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* === Mobile Menu Button === */}
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <Button // Use Shadcn Button for the toggle as well
              variant="ghost"
              size="icon" // Use icon size
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:bg-white/10 hover:text-white focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-0"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" /> // <-- Use X icon
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" /> // <-- Use Menu icon
              )}
            </Button>
          </div>

          {/* === Logo & Desktop Links === */}
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* Logo */}
            <div className="flex flex-shrink-0 items-center">
              <Link
                href="/"
                className="text-xl font-bold hover:text-gray-300 transition duration-150 ease-in-out"
              >
                CosmoScope
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              <Link
                href="/apod"
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10 transition duration-150 ease-in-out"
                aria-current="page" // Add logic
              >
                Picture of the Day
              </Link>
              <Link
                href="/neos"
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10 transition duration-150 ease-in-out"
              >
                Near Earth Objects
              </Link>

              {/* Shadcn Dropdown Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="inline-flex items-center gap-x-1 px-3 py-2 text-sm font-medium text-white hover:bg-white/10 hover:text-white focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-0"
                  >
                    Explore
                    <ChevronDown
                      className="ml-1 h-4 w-4 opacity-70"
                      aria-hidden="true"
                    />{" "}
                    {/* <-- Use ChevronDown icon */}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-48 mt-2 bg-gray-900/90 backdrop-blur-sm border-gray-700 text-white"
                  align="end"
                >
                  <DropdownMenuItem
                    asChild
                    className="cursor-pointer focus:bg-gray-700 focus:text-white"
                  >
                    <Link href="/apod/archive">APOD Archive</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    asChild
                    className="cursor-pointer focus:bg-gray-700 focus:text-white"
                  >
                    <Link href="/mars">Mars Rover Photos</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* === Search Button (Desktop) === */}
          <div className="hidden md:ml-4 md:flex md:items-center">
            <Link href="/search" passHref>
              <Button
                variant="ghost"
                size="icon" // Use icon size for search button
                className="text-gray-300 hover:bg-white/10 hover:text-white focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-0"
                aria-label="Search"
              >
                <Search className="h-5 w-5" /> {/* <-- Use Search icon */}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* === Mobile Menu Panel === */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-950" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {/* Mobile links remain the same, text is often clearer here */}
            <Link
              href="/apod"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
              aria-current="page"
              onClick={toggleMobileMenu}
            >
              Picture of the Day
            </Link>
            <Link
              href="/neos"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={toggleMobileMenu}
            >
              Near Earth Objects
            </Link>
            <Link
              href="/apod/archive"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={toggleMobileMenu}
            >
              APOD Archive
            </Link>
            <Link
              href="/mars"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={toggleMobileMenu}
            >
              Mars Rover Photos
            </Link>
            {/* Mobile Search Link - Can also include icon */}
            <Link
              href="/search"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" // Added flex for icon
              onClick={toggleMobileMenu}
            >
              <Search className="h-5 w-5" />{" "}
              {/* <-- Optional Search icon for mobile link */}
              Search
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;