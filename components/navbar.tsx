"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

          {/* HIDE LOGO WHEN MENU IS OPEN */}
          <Link
            href="/"
            className={cn(
              "text-xl font-bold text-foreground transition-opacity",
              open && "opacity-0 pointer-events-none"
            )}
          >
          
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(true)}
              className={cn(
                "text-foreground hover:text-muted-foreground transition-colors",
                open && "opacity-0 pointer-events-none"
              )}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 bg-black/90 transition-opacity duration-300 md:hidden z-40",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* MOBILE MENU */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-2/3 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="text-white hover:text-gray-300 transition"
          >
            ✕
          </button>
        </div>

        {/* CENTERED NAV ITEMS */}
        <div className="flex flex-col gap-6 px-15 mt-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
