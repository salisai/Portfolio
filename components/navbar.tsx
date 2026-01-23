"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Terminal, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion"

const navLinks = [
  { href: "/projects", label: "Projects" },
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
      <div className="lg:flex fixed top-0 inset-x-0 z-50 justify-center">
        <nav
          className="
            flex items-center justify-between w-full gap-10
             py-6
             px-4 sm:px-6
            bg-black
            text-white max-w-4xl
          "
        >
          <Link
            href="/"
            className="font-mono uppercase text-[10px] tracking-wide text-white/90"
          >
            ~/Ali
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
                    "text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-300",
                    active
                      ? "text-white"
                      : "text-white/60 hover:text-white"
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
