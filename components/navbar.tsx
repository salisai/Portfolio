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
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
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
      <aside
        className="hidden md:flex flex-col fixed left-0 top-0 h-full w-56 bg-[color:var(--background)]/80 backdrop-blur-md z-50 py-6"
      >
        {/* Logo */}
        <div className="flex items-center md:hidden justify-center mb-10">
          <Terminal className="h-7 w-7 text-[color:var(--primary)]" />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col mt-30 gap-6 p-10">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (

              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 group"
              >
                {/* Animated indicator */}
                <motion.div
                  layout
                  initial={false}
                  animate={{
                    width: active ? 32 : 20,
                    opacity: active ? 1 : 0.4,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className={cn(
                    "h-[2px] rounded-full",
                    active
                      ? "bg-[color:var(--primary)]"
                      : "bg-[color:var(--muted-foreground)] group-hover:bg-[color:var(--muted-foreground)]/70"
                  )}
                />

                {/* Nav text */}
                <motion.span
                  initial={false}
                  animate={{
                    x: active ? 4 : 0,
                    opacity: active ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "text-sm font-medium",
                    active
                      ? "text-[color:var(--primary)]"
                      : "text-[color:var(--muted-foreground)] group-hover:text-[color:var(--foreground)]"
                  )}
                >
                  {link.label}
                </motion.span>
              </Link>

            );
          })}

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
        </nav>
      </aside>

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
