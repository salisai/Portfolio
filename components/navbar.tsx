"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Terminal } from "lucide-react";

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
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-full w-56 bg-background/80 backdrop-blur-md border-r border-dashed border-primary/20 z-50 py-6">
        
        {/* Logo */}
        <div className="flex items-center md:hidden justify-center mb-10">
          <Terminal className="h-7 w-7 text-primary" />
        </div>

        {/* Sidebar Nav */}
        <nav className="flex flex-col mt-30 gap-6 p-10">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 group"
              >
                <div
                  className={cn(
                    "h-[22px] w-[3px] rounded-full transition-all",
                    active ? "bg-primary" : "bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
                  )}
                ></div>

                {/* label */}
                <span
                  className={cn(
                    "text-sm font-medium transition-colors",
                    active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  )}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* TOP NAV (Mobile Only) */}
      <nav className="md:hidden fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="mx-auto px-4 py-4 flex items-center justify-between">

          <Link href="/" className="text-xl font-bold text-foreground">
            <Terminal className="h-6 w-6" />
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="text-foreground hover:text-muted-foreground transition"
          >
            ☰
          </button>
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
          "fixed top-0 right-0 h-full w-2/3 bg-black text-white z-50 transform transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="text-white hover:text-gray-300 transition"
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
