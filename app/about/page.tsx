'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { reveal, revealSoft, cardReveal, stagger } from '@/lib/motion'
import Link from 'next/link'

const About = () => {
  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Heading */}
        <motion.h1
          className="text-2xl font-medium text-foreground mb-6"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          About Me
        </motion.h1>

        <motion.div
          variants={cardReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl space-y-4 text-sm text-muted-foreground leading-relaxed"
        >

          <p>
            Hey, I’m <span className="text-foreground font-medium">Ali</span>.

            I’m a full-stack developer and AI-focused engineer who enjoys building things that actually work in the real world.
            I’m currently a Computer Science student, but most of what I know came from building projects, breaking systems,
            and fixing them again.
          </p>

          <p>
            I started coding about two years ago with web development. Over time, I got pulled toward AI because it feels like
            the future — and I want to be one of the people shaping it, not just watching from the sidelines.
          </p>

          <p>
            Before tech, I spent 5 years helping my father run a shoes business while studying. That experience taught me
            more than any course ever could — how to talk to people, understand real needs, understand customer mind, take responsibility, and stay honest
            even when things get messy.
          </p>

          <p>
            Today, I’m focused on getting really good at my craft — building production-ready applications, learning AI deeply,
            and working with people who care about creating real value.
          </p>
        </motion.div>

        {/* What I Do */}
        <motion.div
          variants={cardReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <motion.div
            variants={cardReveal}
            className="card-gradient p-5 border border-dashed rounded-md border-primary/10"
          >
            <h3 className="text-foreground font-medium mb-2">What I Do</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Build full-stack web applications (frontend + backend + deployment)</li>
              <li>• Develop AI-powered features, AI systems</li>
              <li>• Turn business ideas into working products</li>
            </ul>
          </motion.div>

          <motion.div
            variants={cardReveal}
            className="card-gradient p-5 border border-dashed rounded-md border-primary/10"
          >
            <h3 className="text-foreground font-medium mb-2">How I Work</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Understand the problem before touching code</li>
              <li>• Break big ideas into small, shippable steps</li>
              <li>• Communicate clearly and honestly</li>
              <li>• Treat client projects like my own</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div
          variants={cardReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-4 max-w-4xl card-gradient p-5 border border-dashed rounded-md border-primary/10"
        >
          <h3 className="text-foreground font-medium mb-2">Things I Believe In</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Learning by building.</li>
            <li>• Long-term thinking over short-term hype</li>
            <li>• Ethics, honesty, and responsibility in work</li>
            <li>• Technology should solve real problems</li>
          </ul>
        </motion.div>


        {/* Journey */}
        <motion.div
          variants={cardReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 max-w-4xl"
        >
          <h3 className="text-foreground font-medium mb-4">My Journey</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Grade 1-6: Didn't know anything, yes anything</li>
            <li>• Grade 6–10: Helped run a family shoe business while studying</li>
            <li>• College: Studied pre-medical</li>
            <li>• Now: Full-stack + AI-Engineering projects + client work ( also studying CS)</li>
            <li>• Future: Build a company creating meaningful AI products. Giving back to community</li>
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={revealSoft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 max-w-4xl"
        >
          <p className="text-sm text-muted-foreground">
            If you’re building something and want a developer who cares about quality,
            communication, and long-term value, I’d love to talk.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-4 text-sm text-foreground underline underline-offset-4 hover:text-primary"
          >
            Let’s talk →
          </Link>
        </motion.div>

      </section>
    </div>
  )
}

export default About
