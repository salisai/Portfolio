'use client'

import { PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import { urlFor } from '@/sanity/lib/image'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <figure className="my-8">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src={urlFor(value).width(1200).height(675).url()}
              alt={value.alt || 'Article image'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-sm text-muted-foreground mt-2 font-light">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
    codeBlock: ({ value }: any) => {
      if (!value || !value.code) return null
      
      const [copied, setCopied] = useState(false)
      
      const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText(value.code || '')
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        } catch (err) {
          console.error('Failed to copy:', err)
        }
      }

      return (
        <div className="my-8 relative group">
          {value.filename && (
            <div className="bg-foreground/5 border-b border-border px-4 py-2 text-xs font-mono text-muted-foreground">
              {value.filename}
            </div>
          )}
          <div className="relative">
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 z-10 p-2 bg-foreground/10 hover:bg-foreground/20 rounded transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Copy code"
            >
              {copied ? (
                <Check className="w-4 h-4 text-primary" />
              ) : (
                <Copy className="w-4 h-4 text-foreground" />
              )}
            </button>
            <SyntaxHighlighter
              language={value.language || 'text'}
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                borderRadius: value.filename ? '0 0 0.5rem 0.5rem' : '0.5rem',
                padding: '1.5rem',
                fontSize: '0.875rem',
                lineHeight: '1.6',
              }}
              showLineNumbers
            >
              {value.code}
            </SyntaxHighlighter>
          </div>
        </div>
      )
    },
    mathFormula: ({ value }: any) => {
      if (!value?.formula) return null

      try {
        const html = katex.renderToString(value.formula, {
          throwOnError: false,
          displayMode: value.displayMode !== false,
        })

        return (
          <div
            className={`my-6 ${value.displayMode !== false ? 'text-center' : 'inline-block'}`}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )
      } catch (error) {
        return (
          <div className="my-6 p-4 bg-destructive/10 border border-destructive/20 rounded text-destructive text-sm">
            Math formula error: {value.formula}
          </div>
        )
      }
    },
    youtube: ({ value }: any) => {
      if (!value?.url) return null

      // Extract video ID from various YouTube URL formats
      const getVideoId = (url: string) => {
        const patterns = [
          /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/,
          /youtube\.com\/embed\/([^"&?\/\s]{11})/,
        ]
        
        for (const pattern of patterns) {
          const match = url.match(pattern)
          if (match) return match[1]
        }
        return null
      }

      const videoId = getVideoId(value.url)
      if (!videoId) {
        return (
          <div className="my-6 p-4 bg-destructive/10 border border-destructive/20 rounded text-destructive text-sm">
            Invalid YouTube URL: {value.url}
          </div>
        )
      }

      return (
        <figure className="my-8">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-background/5">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-sm text-muted-foreground mt-2 font-light">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground mt-12 mb-6 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tighter text-foreground mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl font-semibold tracking-tight text-foreground mt-6 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-[14px] text-muted-foreground font-light leading-relaxed mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary/30 pl-6 my-6 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 my-6 text-[14px] text-muted-foreground font-light leading-relaxed">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 my-6 text-[14px] text-muted-foreground font-light leading-relaxed">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-primary underline hover:text-primary/80 transition-colors"
        >
          {children}
        </a>
      )
    },
  },
}
