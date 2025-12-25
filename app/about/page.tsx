'use client'

import React from 'react'
import {motion} from "framer-motion";
import { reveal, revealSoft, cardReveal, stagger } from '@/lib/motion'
import Link from 'next/link';

const About = () => {
  return (
     <div className="pt-24">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1 
          className="text-2xl font-medium text-foreground mb-2"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
        >
          About me</motion.h1>

          <div>
            <motion.section 
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{once: true, margin: "-80px"}}
              className="max-w-4xl py-1 mt-2 sm:mt-4">        

              <motion.div 
                variants={revealSoft}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                className="space-y-3 text-sm text-muted-foreground leading-relaxed"
              >
                <p>I’m Ali — a computer science student who enjoys building things that actually work and solve real problems. I’m especially interested in AI, not just as a buzzword, but as a tool that can create real value for people.</p> 
              
                <p>I’m not a complete beginner, but I’m still early in the journey — and I take that seriously. Most of my time goes into improving my full-stack and AI engineering skills, understanding how real products are designed, built, and scaled in the real world.</p> 
                
                <p>I believe growth comes from doing the work. I build projects, break things, fix them, and learn from every mistake. I like thinking deeply about systems, writing clean code, and continuously getting better at what I do.</p> 
                
                <p>I also enjoy <Link href="https://medium.com/@salisai" className="text-primary">writing</Link>{" "}about what I’m learning — it helps me think clearly and share value with others on the same path.</p> 
                
                <p>If you have an idea and want someone who will treat it with care, honesty, and real effort, I’m open to collaborating. Let’s <Link href="/contact" className="text-primary">build</Link>{" "}something meaningful.</p>
              </motion.div>

              <motion.div 
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-2"
              >
                <motion.div 
                  variants={cardReveal} 
                  initial="hidden" 
                  whileInView="show" 
                  viewport={{once: true}}
                  className="bg-card p-4 border border-dashed rounded-[5px] border-primary/20 hover:border-primary/24"
                >
                  <h3 className="text-foreground font-medium mb-2">Education</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>
                      <p className="text-foreground font-normal text-[12px]">B.S. Computer and Information Science</p>
                      <p className="text-xs">PIEAS, Islamabad, 23-27</p>
                    </li>
                    <li>
                      <p className="text-foreground font-normal text-[12px]">ML and DL Specializations</p>
                      <p className="text-xs">DeepLearning.ai, 2025</p>
                    </li>
                  </ul>
                </motion.div>

                <motion.div 
                  variants={cardReveal} 
                  initial="hidden" 
                  whileInView="show" 
                  viewport={{once: true}}
                  className="bg-card p-4 border border-dashed rounded-[5px] border-primary/20 hover:border-primary/24"
                >
                  <h3 className="text-foreground font-medium mb-2">Experience</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>
                      <p className="text-foreground font-normal">Freelance Full-Stack Developer</p>
                      <p className="text-xs">Upwork, 2024 - Present</p>
                    </li>
                    <li>
                      <p className="text-foreground font-normal">Freelance AI Engineer</p>
                      <p className="text-xs">Upwork, 2025-present</p>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.section>
          </div>
      </section>
    </div>
  )
}

export default About