'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image';
import { motion } from 'framer-motion'
import { reveal, revealSoft, cardReveal, stagger } from '@/lib/motion'


export const projects = [
  {
    id: 1,
    title: 'CulinaAI',
    description: 'AI powered fully fledged SAAS app to generate recipes using available grocceries images. Enjoy global recipes.',
    tech: ['React','Next.js', 'TypeScript', 'Postgresql', 'Clerk', 'Prisma', 'Shadcn', 'GeminiAPI', "NanoBanana", 'Imagekit'],
    link: 'https://github.com/salisai/recipes-app',
    image: '/culina.png',
    status: 'live',
    github: 'https://github.com/salisai/recipes-app'
  },
  {
    id: 2,
    title: 'Jewelary E-Store',
    description: 'Full-stack ecommerce website with admin dashboard',
    tech: ['Nextjs', 'Tailwindcss', 'Framer-motion', 'Supabase', 'Resend', 'Polar Payments', 'Gemini'],
    link: 'https://jewelary-estore.vercel.app',
    image: '/jew.png',
    status: 'live',
    github: 'https://github.com/salisai/jewelary_estore'

  },
  {
    id: 3,
    title: 'PDF-Chat using RAG',
    description: 'Upload your documents and ask any question, you will get answer, in statefull a conversation',
    tech: ['Next.js', 'Supabase', 'Pinecone', 'Gemini', 'LangChain', 'Shadcn', 'Framer-motion'],
    link: 'https://github.com/salisai/pdf-chat',
    image: '/RAG.png',
    status: 'dev',
    github: 'https://github.com/salisai/pdf-chat'
  },
  {
    id: 4,
    title: 'Book Translator',
    description: 'Currently this project is in building stage. It will make book translation easy. Anyone can then read book af any language in their own native langauge.',
    tech: ['React', 'Typescript','Tailwindcss', 'Flask', 'Langchain', 'Gemini', 'Postgesql', 'aws s3'],
    link: 'https://github.com/salisai/translate',
    image: '/translate.png',
    status: 'dev',
    github: 'https://github.com/salisai/translate  '

  },
  {
    id: 5,
    title: 'Interior Design',
    description: 'Simple and modern interior design website.',
    tech: ['React', 'Nextjs', 'Tailwindcss', 'Shadcn', 'Framer-motion'],
    link: 'https://nivara-zeta.vercel.app',
    image: '/design.png',
    status: 'dev',
    github: 'https://github.com/salisai/Nivara'
  },
  {
    id: 6,
    title: 'Authentication System',
    description: 'JWT based authentication system with password reset, and social login options.',
    tech: ['React', 'Tailwindcss', 'Nodejs', 'Express', 'MongoDB', 'JWT', 'OAuth'],
    link: 'https://github.com/salisai/Loginly',
    image: '/auth.png',
    status: 'dev',
    github: 'https://github.com/salisai/Loginly'
  }
]


export default function Projects() {

  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          className="text-2xl font-medium text-foreground mb-2"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Projects</motion.h1>

        <motion.p
          className="text-muted-foreground mb-6 text-sm max-w-2xl"
          variants={revealSoft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          A selection of my recent work across my domain.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-2"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              variants={cardReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className='bg-card'
            >
              <Card key={project.id} className="card-gradient-br h-full group border border-dashed rounded-[5px] border-primary/10 hover:border-primary/16 transition-colors duration-300 ease-in-out flex flex-col p-0">

                <div className="w-full aspect-[16/9] relative overflow-hidden rounded-t-[5px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>


                <div className="px-4 flex-1 flex flex-col">

                  <h3 className="text-foreground font-semibold text-[16px] mb-1">{project.title}</h3>


                  <p className="flex-1 text-muted-foreground text-sm mb-3 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary/5 text-primary border rounded-[4px] border-dashed border-primary/14 hover:bg-primary/15 text-xs px-2.5 py-1.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-4 pb-6">
                  <div className="flex gap-3">
                    <Button asChild className="flex-1 gap-2 rounded-[4px] border border-white">
                      <Link href={project.link}>
                        <>Live <ArrowRight className="w-4 h-4" /></>
                      </Link>
                    </Button>

                    <Button asChild className="flex items-center gap-2 rounded-[4px] border-[0.5px] border-[var(--btn-minimal-border)] bg-[var(--btn-minimal-bg)] text-foreground hover:bg-[var(--btn-minimal-bg)] px-3 shadow-none">
                      <Link href={project.github}>
                        <>
                          <Github className="w-4 h-4" />
                          GitHub
                        </>
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
