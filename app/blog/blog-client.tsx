'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { ArrowRight, Plus } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { stagger } from '@/lib/motion'
import { urlFor } from '@/sanity/lib/image'
import { Reveal } from '@/components/ui/Reveal'

interface BlogClientProps {
  posts: any[]
}

export function BlogClient({ posts }: BlogClientProps) {
  return (
    <div className="min-h-screen bg-background pt-32 pb-40 selection:bg-primary/20">
      <section className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* --- TOP SECTION: ANIMATES ON LOAD --- */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-12 gap-4 border-b border-border/50 pb-16 mb-12"
        >
          <div className="md:col-span-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">Blog</span>
          </div>

          <div className="md:col-span-7">
            <h1
              className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground leading-[0.9] mb-8"
            >
              Tech and <br />
              <span className="text-muted-foreground/50">Business Notes.</span>
            </h1>
            <p
              className="text-[14px] text-muted-foreground font-light leading-relaxed max-w-xl"
            >
              Notes on how code, math, engineering and business principles come together to build real-world systems.
            </p>
          </div>

          <div className="md:col-span-2 flex md:justify-end">
            <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center">
              <Plus className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </motion.div>

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
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
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

                {post.mainImage && (
                  <div className="w-full aspect-[16/9] relative overflow-hidden bg-muted/10">
                    <Image
                      src={urlFor(post.mainImage).width(800).height(450).url()}
                      alt={post.title || 'Article image'}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

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
      </section>
    </div>
  )
}
