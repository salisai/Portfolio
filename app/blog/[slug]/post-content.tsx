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
    <div className="min-h-screen bg-[#FDFBF7] pt-32 pb-40 selection:bg-primary/20">
      <article className="max-w-4xl mx-auto px-6 lg:px-8">

        {/* Back Button */}
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          className=""
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground/60 hover:text-foreground transition-colors font-light"
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
          <h1 className="blog-title mb-6">
            {post.title}
          </h1>
        </motion.div>

        {/* Feature Image */}
        {post.mainImage && (
          <motion.figure
            variants={reveal}
            initial="hidden"
            animate="show"
            className="mb-12"
          >
            <div className="relative w-full aspect-video overflow-hidden">
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
            className="max-w-none"
          >
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          </motion.div>
        )}
      </article>
    </div>
  )
}
