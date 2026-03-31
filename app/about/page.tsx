'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { reveal, revealSoft, stagger } from '@/lib/motion'
import { ArrowRight, Plus, Minus } from 'lucide-react'
import Link from 'next/link'

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-40 selection:bg-primary/20">
      <section className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* SECTION 01: HERO / IDENTITY */}
        <motion.div 
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-12 gap-4 border-b border-border/50 pb-16"
        >
          <div className="md:col-span-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">About</span>
          </div>

          <div className="md:col-span-7">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tighter text-body mb-8">
              Builder. Engineer. <br/>
              <span className="text-muted-foreground/50"> AI Integrator.</span>
            </h1>
            <p className="text-[14px] text-muted-foreground font-light leading-relaxed">
              I build full-stack applications and wire in AI — LLMs, agents, APIs — so products actually work for the people using them.
            </p>
          </div>
          <div className="md:col-span-2 flex md:justify-end">
            <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center">
              <Plus className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </motion.div>

        {/* SECTION 02: BIOGRAPHY */}
        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-b border-border/50"
        >
          <div className="md:col-span-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Narrative</span>
          </div>
          <div className="md:col-span-7 space-y-8 text-[14px] leading-relaxed text-muted-foreground font-light">
            <p>
              I'm a full-stack developer and AI engineer focused on AI integration — building the layer between powerful models and the products people actually use. Over the last two years I've gone deep on the LLM ecosystem: prompt engineering, agentic workflows, API design, model finetuning, dataset curation, model integration and shipping interfaces that make AI feel useful, not gimmicky.
            </p>
            <p>
              Before engineering, I spent five years running operations in a family business. That time taught me how real users think, what they trust, and what they ignore — a lens I bring to every product decision.
            </p>
          </div>
          <div className="md:col-span-2" />
        </motion.div>

        {/* SECTION 03: CAPABILITIES (GRID ALIGNED) */}
        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-b border-border/50"
        >
          <div className="md:col-span-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Capabilities</span>
          </div>
          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-foreground">Methods</h3>
              <ul className="space-y-2 text-[13px] text-muted-foreground font-light leading-relaxed">
                <li>LLM and Agent Integration</li>
                <li>Full-Stack Development</li>
                <li>API Design and Tooling</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-foreground">Workflow</h3>
              <ul className="space-y-2 text-[13px] text-muted-foreground font-light leading-relaxed">
                <li>Problem Analysis</li>
                <li>Rapid Prototyping</li>
                <li>Iterative Shipping</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-foreground">Values</h3>
              <ul className="space-y-2 text-[13px] text-muted-foreground font-light leading-relaxed">
                <li>Technical Honesty</li>
                <li>Long-term Value</li>
                <li>Owner Mindset</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* SECTION 04: CHRONOLOGY (TABLE ALIGNED) */}
        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-b border-border/50"
        >
          {/* The "Chronology" label now shares the exact same top alignment as the first list item */}
          <div className="md:col-span-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground inline-block pt-[2px]">
              Chronology
            </span>
          </div>

          <div className="md:col-span-9">
            <div className="space-y-0">
              {[
                { year: "2015 — 2020", title: "Family Business Ops", desc: "Real-world problem solving & customer psychology." },
                { year: "2021 — 2022", title: "Academic Foundation", desc: "Focus on biological sciences & pre-medical." },
                { year: "2023 — 2025", title: "Engineering Phase", desc: "Full-stack + AI development & Computer Science studies.", active: true },
                { year: "2026 — Future", title: "AI Product Founder", desc: "Building meaningful AI-first communities." }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="grid grid-cols-1 sm:grid-cols-12 py-8 sm:py-6 gap-4 border-b border-border/30 first:pt-0 first:border-t-0 group hover:bg-white/[0.01] transition-all duration-500"
                >
                  <div className="sm:col-span-2 flex items-start pt-[2px]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 group-hover:text-primary transition-colors">
                      {item.year}
                    </span>
                  </div>

                  <div className="sm:col-span-4 flex items-start gap-3 pt-0">
                    <span className={`text-[14px] tracking-tight font-medium leading-none ${item.active ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'} transition-colors`}>
                      {item.title}
                    </span>
                  </div>

                  <div className="sm:col-span-6 flex items-start pt-[1px]">
                    <p className="text-[14px] text-muted-foreground/70 font-light leading-snug group-hover:text-muted-foreground transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SECTION 05: CONNECT */}
        <motion.div 
          variants={revealSoft}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-16"
        >
          <div className="md:col-span-3" />
          <div className="md:col-span-7">
            <p className="text-sm text-muted-foreground font-light mb-8 max-w-md">
              Open to freelance projects, AI integration work, and building with teams who move fast.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-4 text-2xl font-light text-foreground group"
            >
              Start a conversation 
              <span className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <ArrowRight className="w-4 h-4 group-hover:text-background -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </span>
            </Link>
          </div>
          <div className="md:col-span-2" />
        </motion.div>

      </section>
    </div>
  )
}

export default About