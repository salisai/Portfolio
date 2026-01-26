import React from 'react'
import { Card } from '@/components/ui/card'
import { ArrowRight, Plus } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { BlogClient } from './blog-client'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  description,
  mainImage,
  "authorName": author->name
}`

async function getPosts() {
  try {
    const posts = await client.fetch(POSTS_QUERY, {}, { next: { revalidate: 60 } })
    return posts || []
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export default async function BlogPage() {
  const posts = await getPosts()

  return <BlogClient posts={posts} />
}
