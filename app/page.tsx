'use client'

import { Card } from '@/components/ui/card'
import { ArrowRight, Github, Plus } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { reveal, revealSoft, cardReveal, stagger } from '@/lib/motion'
import { useState, useEffect } from 'react'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Reveal } from '@/components/ui/Reveal'

export default function Home() {

  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    async function fetchPosts() {
      try {
        const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...4] {
          _id, title, slug, publishedAt, description, mainImage
        }`
        const fetched = await client.fetch(POSTS_QUERY)
        setPosts(fetched)
      } catch (e) {
        console.error(e)
      }
    }
    fetchPosts()
  }, [])

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Redux', 'Tailwindcss', 'Shadcn']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Flask', 'Prisma', 'PostgreSQL', 'MongoDB', 'Supabase', 'vectorDBs']
    },
    {
      title: 'DevOps',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Git', 'Vercel']
    },
    {
      title: 'AI',
      skills: ['PyTorch', 'LLMs', 'RAG', 'AI Agents', 'LangChain', 'crewAI']
    }
  ]

  return (
    <div className="pt-16">
      <section className="max-w-6xl px-4 sm:px-6 mx-auto lg:px-8 py-20 min-h-[80vh] flex items-center">
        <div className="space-y-6 w-full">

          {/* SECTION 01: HERO / IDENTITY */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-12 gap-4 border-b border-border/50 pb-16"
          >
            <div className="md:col-span-3">
              <div className="relative inline-block">
                <img
                  src="/me.jpeg"
                  alt="Sayed Ali Shah"
                  className="w-24 h-24 object-cover rounded-full border border-border"
                />
                <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-primary rounded-full border-2 border-background animate-pulse" />
              </div>
            </div>

            <div className="md:col-span-7">
              <h1
                className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground leading-[0.8] mb-8"
              >
                Sayed Ali Shah. <br />
                <span className="text-muted-foreground/40 italic font-light text-xl md:text-2xl tracking-tight">
                  Full Stack & AI.
                </span>
              </h1>
              <p
                className="text-[14px] text-muted-foreground font-light leading-relaxed max-w-xl"
              >
                Building web and AI apps with human-centric design. Currently learning and scaling intelligent systems on web.
              </p>
            </div>

            {/* Right Column: Status/Plus Icon */}
            <div className="md:col-span-2 flex md:justify-end">
              <div className="flex flex-col items-end gap-4">
                <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center">
                  <Plus className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </motion.div>


          {/* SECTION 02 - about */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-b border-border/50"
          >

            <div className="md:col-span-3">
              <span
                className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground/60"
              >
                Background
              </span>
            </div>

            <div className="md:col-span-7">
              <div
                className="space-y-6 text-[14px] text-muted-foreground font-light leading-relaxed mb-12"
              >
                <p>
                  Hey, I am Ali. I build <span className="text-foreground">full-stack web apps</span> and <span className="text-foreground">AI products</span> that solve, augment real business problems. I've been coding for more than two years — breaking things, fixing them, and learning from every mistake along the way.
                </p>
                <p>
                  From Idea to production — I focus on clean code, scalable systems, and real results.
                </p>
                <p>
                  Right now, I'm looking for projects and full-stack roles where I can build something meaningful. Need something solid, <span className="text-primary/80 font-medium italic">let's make it happen.</span>
                </p>
              </div>


              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* SECTION: EDUCATION */}
                <div className="group relative p-5 border border-dashed border-primary/10 bg-card/20 rounded-[4px] transition-all duration-500 hover:border-primary/30 hover:bg-card/40">

                  <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                    <Plus className="w-3 h-3 text-primary" />
                  </div>

                  <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
                    <span className="h-[1px] w-4 bg-primary/30" />
                    Education
                  </h3>

                  <div className="space-y-6">
                    {[
                      { title: "B.S. Computer Science", sub: "PIEAS, Islamabad", year: "2023—2027" },
                      { title: "ML and DL Specializations", sub: "DeepLearning.ai", year: "2025" }
                    ].map((item, idx) => (
                      <div key={idx} className="relative pl-4 border-l border-border/50 group-hover:border-primary/30 transition-colors">
                        <p className="text-[13px] font-medium text-foreground leading-none tracking-tight">
                          {item.title}
                        </p>
                        <div className="flex justify-between items-center mt-1.5">
                          <span className="text-[11px] text-muted-foreground/60 font-light">{item.sub}</span>
                          <span className="text-[10px] font-mono text-muted-foreground/30">{item.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SECTION: EXPERIENCE */}
                <div className="group relative p-5 border border-dashed border-primary/10 bg-card/20 rounded-[4px] transition-all duration-500 hover:border-primary/30 hover:bg-card/40">
                  <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                    <Plus className="w-3 h-3 text-primary" />
                  </div>

                  <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
                    <span className="h-[1px] w-4 bg-primary/30" />
                    Experience
                  </h3>

                  <div className="space-y-6">
                    {[
                      { title: "Freelance Full-Stack", sub: "Upwork", year: "2024—Present" },
                      { title: "Freelance AI Engineer", sub: "Upwork", year: "2025—Present" }
                    ].map((item, idx) => (
                      <div key={idx} className="relative pl-4 border-l border-border/50 group-hover:border-primary/30 transition-colors">
                        <p className="text-[13px] font-medium text-foreground leading-none tracking-tight">
                          {item.title}
                        </p>
                        <div className="flex justify-between items-center mt-1.5">
                          <span className="text-[11px] text-muted-foreground/60 font-light">{item.sub}</span>
                          <span className="text-[10px] font-mono text-muted-foreground/30">{item.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2" />
          </motion.div>

          {/* SECTION 03: TECH STACK (REFINED ARCHITECTURAL) */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 py-20 border-b border-border/50"
          >
            <div className="md:col-span-3 flex flex-col justify-between py-1">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground/60">
                  Capabilities
                </span>
                <p className="text-[9px] font-mono text-muted-foreground/40 uppercase tracking-widest">
                  System / Stack
                </p>
              </div>
            </div>

            <div className="md:col-span-9">
              <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-12">
                {skillCategories.map((category, idx) => (
                  <div
                    key={category.title}
                    className="group relative"
                  >

                    <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-foreground mb-4 flex items-center gap-2">
                      <span className="shrink-0">{category.title}</span>
                      <div className="h-[1px] w-full bg-border/30 group-hover:bg-primary/30 transition-colors" />
                    </h3>

                    <ul className="space-y-2.5">
                      {category.skills.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center gap-2 group/item"
                        >
                          {/* Minimalist Dot Indicator */}
                          <div className="h-1 w-1 rounded-full bg-border group-hover/item:bg-primary transition-colors shrink-0" />

                          <span className="text-[12px] sm:text-[13px] text-muted-foreground/80 font-light group-hover/item:text-foreground transition-all truncate">
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>


          {/* SECTION 04: RECENT NOTES (BLOG) */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="border-b border-border/50 pb-16 py-18 mb-12"
          >
            <div className="mb-12 max-w-2xl">
              <span
                className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground/60 block mb-4"
              >
                Blog
              </span>
              <p className="text-[14px] text-muted-foreground font-light leading-relaxed">
                Notes on how code, math, engineering and business principles come together to build real-world systems.
              </p>
            </div>

            {/* --- GRID: ANIMATES ON VIEWPORT/SCROLL --- */}
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-sm font-light">
                  No articles yet. Check back soon!
                </p>
              </div>
            ) : (
              <Reveal
                stagger={0.1}
                delay={0.2}
                offset={0}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
              >
                {posts.map((post: any) => (
                  <Link
                    href={`/blog/${post.slug.current}`}
                    key={post._id}
                    className="relative bg-background group p-5 flex flex-col gap-4 h-full border border-dotted border-white/20 transition-all duration-300 hover:bg-white/[0.02]"
                  >
                    {/* Corner Accents */}
                    <span className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t border-l border-white/40 group-hover:w-6 group-hover:h-6 group-hover:border-white transition-all duration-300" />
                    <span className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t border-r border-white/40 group-hover:w-6 group-hover:h-6 group-hover:border-white transition-all duration-300" />
                    <span className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b border-l border-white/40 group-hover:w-6 group-hover:h-6 group-hover:border-white transition-all duration-300" />
                    <span className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b border-r border-white/40 group-hover:w-6 group-hover:h-6 group-hover:border-white transition-all duration-300" />


                    <div className="flex-1 flex flex-col pt-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-foreground font-semibold text-lg flex items-center gap-2 group-hover:text-primary transition-colors">
                          {post.title}
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 -rotate-45" />
                        </h3>
                      </div>
                      <p className="flex-1 text-muted-foreground text-sm font-light leading-relaxed">
                        {post.description || 'No description available.'}
                      </p>
                      {post.publishedAt && (
                        <p className="text-[10px] text-muted-foreground/60 font-mono mt-4">
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </Reveal>
            )}

            <div className="mt-12">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-4 text-lg font-light text-foreground"
              >
                View All Notes
                <span className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:text-background -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}