"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Terminal, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion"

const navLinks = [
  { href: "/projects", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
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
      {/* DESKTOP */}
      <div className="max-w-3xl px-6 mx-auto lg:px-8 lg:flex fixed top-0 inset-x-0 z-50 justify-center bg-white">
        <nav
          className="
            flex items-center justify-between w-full gap-10
            py-6
            max-w-3xl text-muted-foreground font-light
          "
        >
          <Link
            href="/"
            className="text-[10px] tracking-wide"
          >
            Ali
          </Link>

          {/* RIGHT: NAV LINKS */}
          <div className="flex items-center gap-8 font-body">
            {navLinks.map((link) => {
              const active = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[10px] tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-300",
                    active
                      ? "text-black"
                      : "text-black/60 hover:text-black"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>


    </>
  );
}
