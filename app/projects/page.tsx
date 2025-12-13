'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image';
import { motion } from 'framer-motion'
import { reveal, revealSoft, cardReveal, stagger } from '@/lib/motion'


export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'CulinaAI',
      description: 'AI powered fully fledged SAAS app to generate recipes using available grocceries images',
      tech: ['Next.js', 'TypeScript', 'NeonDB','Clerk','Prisma','Shadcn', 'GeminiAPI', "NanoBanana"],
      link: 'https://github.com/salisai/recipes-app',
      image: '/project1.png',
      status: 'live'
    },
    {
      id: 2,
      title: 'Jewelary Store',
      description: 'Full-stack ecommerce website with admin dashboard',
      tech: ['React', 'Tailwindcss', 'Supabase', 'Resend', 'Stripe'],
      link: 'https://github.com/salisai/jewelary_estore',
      image: '/project2.png',
      status: 'live'

    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment processing and inventory management.',
      tech: ['Next.js', 'Stripe', 'MongoDB', 'Docker'],
      link: '#',
      image: '',
      status: 'live'
    },
    {
      id: 4,
      title: 'ML Image Recognition',
      description: 'Computer vision model for real-time object detection and classification.',
      tech: ['PyTorch', 'FastAPI', 'OpenCV', 'AWS'],
      link: '#',
      image: '',
      status: 'live'

    },
    {
      id: 5,
      title: 'Collaborative Notes App',
      description: 'Real-time collaborative note-taking with encryption and offline support.',
      tech: ['React', 'Firebase', 'Encryption', 'PWA'],
      link: '#',
      image: '',
      status: 'live'

    },
    {
      id: 6,
      title: 'DevOps Automation Tool',
      description: 'Kubernetes management tool for simplified deployment and scaling.',
      tech: ['Go', 'Kubernetes', 'gRPC', 'React'],
      link: '#',
      image: '', 
      status: 'dev'
    }
  ]



  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1 
          className="text-4xl font-bold text-foreground mb-4"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
        >
          Projects</motion.h1>
        
        <motion.p 
          className="text-muted-foreground mb-12 max-w-2xl"
          variants={revealSoft}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
        >
          A selection of my recent work across web development, machine learning, and cloud infrastructure.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
        >
          {projects.map((project) => (   
            <motion.div
              variants={cardReveal}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
            >
              <Card key={project.id} className="flex flex-col h-full group bg-card border border-dashed border-primary/18 hover:border-primary/24 transition-all duration-300 overflow-hidden flex flex-col p-0">
              
              <div className='w-full aspect-[16/9] relative'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='object-cover p-2 pb-0'
                />
              </div>
                            
              <div className="px-4 flex-1 flex flex-col">
                
              <h3 className="text-foreground font-semibold text-lg mb-1">{project.title}</h3>
               

                <p className="flex-1 text-muted-foreground text-sm mb-3 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/5 text-primary border border-dashed border-primary/14 hover:bg-primary/15 text-xs px-2.5 py-1.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
      
              <div className="px-4 pb-6">
                <Button 
                  asChild  
                  className="w-full gap-2 rounded-none border border-white">
                  
                  <Link href={project.link}>
                    {project.status === 'live' ? 'Live Demo' : 'View on Github'}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
