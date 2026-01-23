'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { revealSoft, stagger } from '@/lib/motion'

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24h-2.19L17.61 20.644Z" />
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-background border-t border-border/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <motion.div variants={revealSoft} className="order-2 md:order-1">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
              &copy; {currentYear} — Sayed Ali Shah
            </p>
          </motion.div>

          {/* Social Links Section */}
          <motion.div variants={revealSoft} className="flex items-center gap-8 order-1 md:order-2">
            {[
              { icon: Github, href: "https://github.com/salisai", label: "GH" },
              { icon: Linkedin, href: "https://linkedin.com/in/sayed-ali-shah", label: "LN" },
              { icon: XIcon, href: "https://x.com/@salisdev", label: "X" },
              { icon: Mail, href: "mailto:sayeed51003@gmail.com?subject=Contact%20from%20Portfolio", label: "ML" }
            ].map((social, i) => (
              <Link 
                key={i}
                href={social.href} 
                target="_blank"
                className="group relative flex flex-col items-center gap-2"
              >
                <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:-translate-y-1" />
                <span className="text-[8px] font-mono text-muted-foreground/0 group-hover:text-muted-foreground/60 transition-all duration-300 absolute -bottom-4">
                  {social.label}
                </span>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}