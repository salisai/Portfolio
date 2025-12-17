"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Terminal, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <div className="absolute hidden lg:flex top-6 left-1/2 -translate-x-1/2 z-50">
        <nav
          className="
            relative flex items-center gap-2
            rounded-full px-4 py-1.5
            bg-[(--background)]/70
            backdrop-blur-xl
            border border-white/10
            shadow-lg
          "
        >
          {navLinks.map((link) => {
            const active = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium"
              >
                {/* Active pill */}
                {active && (
                  <motion.div
                    layoutId="active-pill"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="
                      absolute inset-0
                      rounded-full
                      bg-white/10
                    "
                  />
                )}

                {/* Label */}
                <span
                  className={cn(
                    "relative z-10 transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </span>
              </Link>
            )
          })}

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="
              ml-2 p-2 rounded-full
              text-[color:var(--muted-foreground)]
              hover:text-[color:var(--foreground)]
              transition
            "
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </nav>
      </div>

      {/* MOBILE TOP NAV */}
      <nav className="md:hidden fixed top-0 w-full bg-[color:var(--background)]/80 backdrop-blur-md z-50">
        <div className="mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[color:var(--foreground)]">
            <Terminal className="h-6 w-6 text-[color:var(--foreground)]" />
          </Link>

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-sm transition text-[color:var(--foreground)] hover:text-[color:var(--primary)]"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="text-[color:var(--foreground)] hover:text-[color:var(--muted-foreground)] transition"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 bg-black/50 md:hidden z-40 transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* MOBILE MENU */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-2/3 bg-[color:var(--card)] text-[color:var(--card-foreground)] z-50 transform transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="hover:text-[color:var(--muted-foreground)] transition"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-6 px-10 mt-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium hover:text-[color:var(--primary)] transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
