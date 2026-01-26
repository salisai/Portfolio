import { client } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'
import { PostContent } from './post-content'

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  description,
  mainImage,
  body,
  "authorName": author->name,
  "authorImage": author->image,
  categories[]->{
    title,
    slug
  }
}`

async function getPost(slug: string) {
  try {
    const post = await client.fetch(POST_QUERY, { slug }, { next: { revalidate: 60 } })
    return post
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export async function generateStaticParams() {
  try {
    const posts = await client.fetch(
      `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`,
      {},
      { next: { revalidate: 60 } }
    )
    return posts.map((post: any) => ({ slug: post.slug }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return <PostContent post={post} />
}
