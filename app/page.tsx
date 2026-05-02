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
      <section className="max-w-6xl px-4 sm:px-6 mx-auto lg:px-8 pt-20 min-h-[80vh] flex items-center">
        <div className="space-y-6 w-full">

          {/* SECTION 01: HERO / IDENTITY */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="border-b border-border/50 pb-16"
          >
            <div className="">
              <h1
                className="text-3xl md:text-4xl font-light tracking-tighter text-foreground leading-[0.8] mb-8"
              >
                Sayed Ali Shah. <br />
                <span className="text-muted-foreground/50 font-light text-xl md:text-2xl tracking-tight">
                  AI Engineering and Research
                </span>
              </h1>
              <p className='text-[16px] text-foreground font-light leading-relaxed'>
                  Hey, I'm Ali. I build full-stack web apps and wire AI into them — LLMs, agentic workflows, 
                  and API integrations that make products smarter without getting in the user's way. Currently open to freelance projects and full-stack roles. If you're building something real, 
                  <span className="text-primary/80 font-medium"> let's talk.</span>
                </p>
            </div>
          </motion.div> 


          {/* SECTION 04: RECENT NOTES (BLOG) */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="border-b border-border/50 py-18"
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
                className="w-full gap-3"
              >
                {posts.map((post: any) => (
                  <Link
                    href={`/blog/${post.slug.current}`}
                    key={post._id}
                    className="relative bg-background group flex flex-col gap-4 h-full border border-dotted border-white/20 transition-all duration-300 hover:bg-white/[0.02]"
                  >
                    <div className="flex-1 flex flex-col pt-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="blog-title flex items-center gap-2">
                          {post.title}
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 -rotate-45" />
                        </h3>
                      </div>
                      <p className="blog-body flex-1">
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
                className="group inline-flex items-center gap-4 text-[14px] text-muted-foreground font-light"
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