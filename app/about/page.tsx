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
          className="border-b border-border/50 pb-16"
        >
          <div className="">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">About</span>
          </div>

          <div className="">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tighter text-body mb-8">
              AI Engineer. <br/>
              <span className="text-muted-foreground/50"> Building</span>
            </h1>

              <p className='text-[14px] md:text-[16px]'>
                I work across the full AI stack. LLM engineering, agentic systems, RAG pipelines, inference optimization, n8n automations, and enough full-stack to ship things end to end. I care about understanding how models actually work, not just how to prompt them. That ends up mattering more than people expect when something breaks in production or needs to run faster than it does.
              </p>
              <br/>
              <p className='text-[14px] md:text-[16px]'>
                My foundation is proper. Machine learning theory, deep learning, certain MLOps things, cloud deployment on AWS. I studied the systems underneath. I think that difference shows up in the work.
              </p>
              <br/>
              <p className='text-[14px] md:text-[16px]'>
                Before any of this, I spent five years working inside a real business from age 12. Sales, logistics, keeping things running. I did not plan for it to be useful later but it is. I think about the actual problem before reaching for a technical solution, which is a habit most engineers do not build until much later.
              </p>
              <br/>

              <p className='text-[14px] md:text-[16px]'>
                Right now I am open to freelance AI engineering projects and remote roles. I want to work on something real, go deep on it, and be useful from day one.
              </p>
          </div>
        </motion.div>

        {/* SECTION 04: CHRONOLOGY (TABLE ALIGNED) */}
        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-16 border-b border-border/50"
        >
          {/* The "Chronology" label now shares the exact same top alignment as the first list item */}
          <div className="">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground inline-block pt-[2px]">
              Chronology
            </span>
          </div>

          <div className="">
            <div className="space-y-0">
              {[
                { year: "2015 — 2020", title: "Business Operations & Sales", desc: "Five years inside a real business — sales, logistics, and financial operations from age 12." },
                { year: "2023 — 2024", title: "Deep Technical Foundation", desc: "Machine learning, deep learning, MLOps, and full-stack development. Andrew Ng specializations. Computer Science.", active: false },
                { year: "2024 — 2025", title: "AI Engineering & LLM Systems", desc: "LLM engineering, inference optimization, agentic workflows, RAG pipelines, n8n automations, AWS deployment.", active: false },
                { year: "2025 — Now", title: "Freelance & Remote Engineering", desc: "Building AI systems for clients worldwide. Open to remote AI engineering roles.", active: true }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="grid grid-cols-1 py-8 gap-4 border-b border-border/30 first:pt-0 first:border-t-0 group hover:bg-white/[0.01] transition-all duration-500"
                >
                  <div className="flex items-start pt-[2px]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 group-hover:text-primary transition-colors">
                      {item.year}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 pt-0">
                    <span className={`text-[14px] tracking-tight font-medium leading-none ${item.active ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'} transition-colors`}>
                      {item.title}
                    </span>
                  </div>

                  <div className="flex items-start pt-[1px]">
                    <p className="text-[14px] text-muted-foreground/70 font-light leading-snug group-hover:text-muted-foreground transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </section>
    </div>
  )
}

export default About