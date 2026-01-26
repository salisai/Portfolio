'use client'

import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '@/lib/portableTextComponents'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { reveal, stagger } from '@/lib/motion'
import { urlFor } from '@/sanity/lib/image'

interface PostContentProps {
  post: {
    title: string
    description?: string
    publishedAt?: string
    authorName?: string
    mainImage?: any
    body?: any
    categories?: Array<{ title: string; slug?: { current: string } }>
  }
}

export function PostContent({ post }: PostContentProps) {
  return (
    <div className="min-h-screen bg-background pt-32 pb-40 selection:bg-primary/20">
      <article className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Back Button */}
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          className="mb-8"
        >
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mb-12 border-b border-border/50 pb-12"
        >
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground leading-[1.1] mb-6">
            {post.title}
          </h1>
          
          {post.description && (
            <p className="text-[14px] text-muted-foreground font-light leading-relaxed mb-6 max-w-2xl">
              {post.description}
            </p>
          )}

          <div className="flex items-center gap-4 text-sm text-muted-foreground font-light">
            {post.publishedAt && (
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            )}
            {post.authorName && (
              <>
                <span className="text-border">•</span>
                <span>{post.authorName}</span>
              </>
            )}
          </div>
        </motion.div>

        {/* Feature Image */}
        {post.mainImage && (
          <motion.figure
            variants={reveal}
            initial="hidden"
            animate="show"
            className="mb-12"
          >
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <Image
                src={urlFor(post.mainImage).width(1200).height(675).url()}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
              />
            </div>
            {post.mainImage.alt && (
              <figcaption className="text-center text-sm text-muted-foreground mt-3 font-light">
                {post.mainImage.alt}
              </figcaption>
            )}
          </motion.figure>
        )}

        {/* Article Content */}
        {post.body && (
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="prose prose-lg max-w-none"
          >
            <PortableText 
              value={post.body} 
              components={portableTextComponents}
            />
          </motion.div>
        )}

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="show"
            className="mt-12 pt-8 border-t border-border/50"
          >
            <div className="flex flex-wrap gap-2">
              {post.categories.map((category: any) => (
                <span
                  key={category.slug?.current}
                  className="bg-primary/5 text-primary border rounded-[4px] border-dashed border-primary/14 hover:bg-primary/15 text-[10px] px-2.5 py-1.5 font-mono"
                >
                  {category.title}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </article>
    </div>
  )
}
