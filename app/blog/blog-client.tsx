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
    <div className="min-h-screen bg-background pt-32 selection:bg-primary/20">
      <section className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* --- TOP SECTION: ANIMATES ON LOAD --- */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="gap-4 border-b border-border/50"
        >
          <div className="">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">Blog</span>
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
            className="flex flex-col gap-3"
          >
            {posts.map((post: any) => (
              <Link
                href={`/blog/${post.slug.current}`}
                key={post._id}
                className="relative bg-background group flex flex-col gap-4 h-full border border-dotted border-white/20 transition-all duration-300 hover:bg-white/[0.02]"
              >
                {/* Corner Accents */}
                <span className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t border-l border-dotted border-white/40 group-hover:w-6 group-hover:h-6 group-hover:border-white transition-all duration-300" />
                <span className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t border-r border-dotted border-white/40 group-hover:w-6 group-hover:h-6 group-hover:border-white transition-all duration-300" />
                <span className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b border-l border-dotted border-white/40 group-hover:w-6 group-hover:h-6 group-hover:border-white transition-all duration-300" />
                <span className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b border-r border-dotted border-white/40 group-hover:w-6 group-hover:h-6 group-hover:border-white transition-all duration-300" />

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
      </section>
    </div>
  )

}
