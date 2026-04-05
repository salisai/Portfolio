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
              AI Engineer. <br/>
              <span className="text-muted-foreground/50"> Builder.</span>
            </h1>
            <p className="text-[14px] text-muted-foreground font-light leading-relaxed">
              I build full-stack applications and wire in AI — LLMs, agents, APIs — so products actually work for the people using them.
            </p>
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
              I am an AI Engineer focused on the full spectrum — from LLM engineering and inference optimization to agentic systems, RAG pipelines, n8n automations, and full-stack web applications. I do not just integrate AI into products. I understand how the models work at a deep level, which means I can debug what others cannot, optimize what others leave slow, and architect systems that hold up in production rather than just in demos.
            </p>
            <p>
              My technical foundation covers machine learning theory, deep learning, MLOps, and deployment on cloud infrastructure including AWS. I have studied AI engineering from the ground up — not just the APIs on top, but the systems underneath.
            </p>
            <p>
              Before engineering, I spent five years working inside a real business — handling sales, logistics, and daily operations from the age of 12. That grounding shapes how I approach every project: I think about the business problem first and the technology second. I also study game theory and philosophy alongside engineering, which gives me an unusual ability to define the right problem before jumping to a solution.            </p>
            <p>Right now I am available for freelance AI engineering projects and actively looking for remote AI engineering roles where I can go deep, build fast, and contribute meaningfully from day one.</p>
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
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-foreground">Skills Set</h3>
              <ul className="space-y-2 text-[13px] text-muted-foreground font-light leading-relaxed">
                <li>LLM & Inference Engineering</li>
                <li>Agentic AI Systems</li>
                <li>RAG Pipeline Architecture</li>
                <li>n8n Workflow Automation</li>
                <li>Full-Stack AI Applications</li>
                <li>MLOps & Cloud Deployment</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-foreground">Workflow</h3>
              <ul className="space-y-2 text-[13px] text-muted-foreground font-light leading-relaxed">
                <li>Business Problem First</li>
                <li>Architecture Before Code</li>
                <li>Ship, Measure, Improve</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-foreground">Values</h3>
              <ul className="space-y-2 text-[13px] text-muted-foreground font-light leading-relaxed">
               <li>Depth Over Surface</li>
                <li>Production Over Prototype</li>
                <li>Client Outcome Over Deliverable</li>
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
                { year: "2015 — 2020", title: "Business Operations & Sales", desc: "Five years inside a real business — sales, logistics, and financial operations from age 12." },
                { year: "2023 — 2024", title: "Deep Technical Foundation", desc: "Machine learning, deep learning, MLOps, and full-stack development. Andrew Ng specializations. Computer Science.", active: false },
                { year: "2024 — 2025", title: "AI Engineering & LLM Systems", desc: "LLM engineering, inference optimization, agentic workflows, RAG pipelines, n8n automations, AWS deployment.", active: false },
                { year: "2025 — Now", title: "Freelance & Remote Engineering", desc: "Building AI systems for clients worldwide. Open to remote AI engineering roles.", active: true }
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
              Available for freelance AI engineering projects and open to remote AI engineering roles. let's talk.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-4 text-xl font-light text-foreground group"
            >
              Let's build
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