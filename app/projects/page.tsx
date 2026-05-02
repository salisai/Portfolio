'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Plus, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image';
import { motion } from 'framer-motion'
import { reveal, revealSoft, cardReveal, stagger } from '@/lib/motion'
import { Reveal } from '@/components/ui/Reveal'

export const projects = [
  {
    id: 1,
    title: 'CulinaAI',
    description: 'AI powered fully fledged SAAS app to generate recipes using available grocceries images. Enjoy global recipes.',
    tech: ['React', 'Next.js', 'TypeScript', 'Postgresql', 'Clerk', 'Prisma', 'Shadcn', 'GeminiAPI', "NanoBanana", 'Imagekit'],
    link: 'https://github.com/salisai/recipes-app',
    image: '/culina.png',
    status: 'live',
    github: 'https://github.com/salisai/recipes-app'
  },
  {
    id: 2,
    title: 'Jewelary E-Store',
    description: 'Full-stack ecommerce website with admin dashboard',
    tech: ['Nextjs', 'Tailwindcss', 'Framer-motion', 'Supabase', 'Resend', 'Polar Payments', 'Gemini'],
    link: 'https://jewelary-estore.vercel.app',
    image: '/jew.png',
    status: 'live',
    github: 'https://github.com/salisai/jewelary_estore'

  },
  {
    id: 3,
    title: 'PDF-Chat using RAG',
    description: 'Upload your documents and ask any question, you will get answer, in statefull a conversation',
    tech: ['Next.js', 'Supabase', 'Pinecone', 'Gemini', 'LangChain', 'Shadcn', 'Framer-motion'],
    link: 'https://github.com/salisai/pdf-chat',
    image: '/RAG.png',
    status: 'dev',
    github: 'https://github.com/salisai/pdf-chat'
  },
  {
    id: 4,
    title: 'Book Translator',
    description: 'Currently this project is in building stage. It will make book translation easy. Anyone can then read book af any language in their own native langauge.',
    tech: ['React', 'Typescript', 'Tailwindcss', 'Flask', 'Langchain', 'Gemini', 'Postgesql', 'aws s3'],
    link: 'https://github.com/salisai/translate',
    image: '/translate.png',
    status: 'dev',
    github: 'https://github.com/salisai/translate  '

  },
  {
    id: 5,
    title: 'Interior Design',
    description: 'Simple and modern interior design website.',
    tech: ['React', 'Nextjs', 'Tailwindcss', 'Shadcn', 'Framer-motion'],
    link: 'https://nivara-zeta.vercel.app',
    image: '/design.png',
    status: 'dev',
    github: 'https://github.com/salisai/Nivara'
  },
  {
    id: 6,
    title: 'Authentication System',
    description: 'JWT based authentication system with password reset, and social login options.',
    tech: ['React', 'Tailwindcss', 'Nodejs', 'Express', 'MongoDB', 'JWT', 'OAuth'],
    link: 'https://github.com/salisai/Loginly',
    image: '/auth.png',
    status: 'dev',
    github: 'https://github.com/salisai/Loginly'
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-40 selection:bg-primary/20">
      <section className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* --- TOP SECTION: ANIMATES ON LOAD --- */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="gap-4 border-b border-border/50"
        >
          <div className="md:col-span-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">Work</span>
          </div>
        </motion.div>

        <Reveal
          stagger={0.1}
          delay={0.2}
          offset={0}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <Link
              href={project.link}
              key={project.id}
              className="relative bg-background group md:pr-5 flex flex-col gap-4 h-full border border-dotted border-white/20 transition-all duration-300 hover:bg-white/[0.02]"
            >
              {/* Corner Accents */}
              <span className="absolute -top-[1px] -left-[1px] w-3 h-3 border-dotted border-t border-l border-white/40 group-hover:w-6 group-hover:h-6 group-hover:border-white transition-all duration-300" />
              <span className="absolute -top-[1px] -right-[1px] w-3 h-3 border-dotted border-t border-r border-white/40 group-hover:w-6 group-hover:h-6 group-hover:border-white transition-all duration-300" />
              <span className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-dotted border-b border-l border-white/40 group-hover:w-6 group-hover:h-6 group-hover:border-white transition-all duration-300" />
              <span className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-dotted border-b border-r border-white/40 group-hover:w-6 group-hover:h-6 group-hover:border-white transition-all duration-300" />


              <div className="flex-1 flex flex-col pt-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-foreground font-semibold text-lg flex items-center gap-2 group-hover:text-primary transition-colors">
                    {project.title}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 -rotate-45" />
                  </h3>
                  {project.github && (
                    <object>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub Repository"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github  className="w-4 h-4" />
                      </a>
                    </object>
                  )}
                </div>
                <p className="flex-1 text-muted-foreground text-sm font-light leading-relaxed">{project.description}</p>
              </div>
            </Link>
          ))}
        </Reveal>
      </section>
    </div>
  )
}