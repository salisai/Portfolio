'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { ArrowRight, Plus } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { stagger } from '@/lib/motion'
import { urlFor } from '@/sanity/lib/image'

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
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-2"
          >
            {posts.map((post: any) => (
              <div
                key={post._id}
                className='bg-card'
              >
                <Card className="card-gradient-br h-full group border border-dashed rounded-[5px] border-primary/10 hover:border-primary/16 transition-colors duration-300 ease-in-out flex flex-col p-0">
                  {post.mainImage && (
                    <div className="w-full aspect-[16/9] relative overflow-hidden rounded-t-[5px]">
                      <Image
                        src={urlFor(post.mainImage).width(800).height(450).url()}
                        alt={post.title || 'Article image'}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="px-4 flex-1 flex flex-col pt-4">
                    <h3 className="text-foreground font-semibold text-[16px] mb-1">{post.title}</h3>
                    <p className="flex-1 text-muted-foreground text-sm mb-3 font-light leading-relaxed">
                      {post.description || 'No description available.'}
                    </p>
                    {post.publishedAt && (
                      <p className="text-[10px] text-muted-foreground/60 font-mono mb-3">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    )}
                  </div>

                  <div className="px-4 pb-6 mt-auto">
                    <Link href={`/blog/${post.slug.current}`}>
                      <div className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium cursor-pointer group/link">
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </motion.div>
        )}
      </section>
    </div>
  )
}
