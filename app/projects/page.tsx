'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AI Chat Platform',
      description: 'Real-time chat application with AI-powered responses, built with Next.js and WebSockets.',
      tech: ['Next.js', 'TypeScript', 'WebSocket', 'TensorFlow'],
      link: '#'
    },
    {
      id: 2,
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for real-time data visualization and business intelligence.',
      tech: ['React', 'Python', 'PostgreSQL', 'D3.js'],
      link: '#'
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment processing and inventory management.',
      tech: ['Next.js', 'Stripe', 'MongoDB', 'Docker'],
      link: '#'
    },
    {
      id: 4,
      title: 'ML Image Recognition',
      description: 'Computer vision model for real-time object detection and classification.',
      tech: ['PyTorch', 'FastAPI', 'OpenCV', 'AWS'],
      link: '#'
    },
    {
      id: 5,
      title: 'Collaborative Notes App',
      description: 'Real-time collaborative note-taking with encryption and offline support.',
      tech: ['React', 'Firebase', 'Encryption', 'PWA'],
      link: '#'
    },
    {
      id: 6,
      title: 'DevOps Automation Tool',
      description: 'Kubernetes management tool for simplified deployment and scaling.',
      tech: ['Go', 'Kubernetes', 'gRPC', 'React'],
      link: '#'
    }
  ]

  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-foreground mb-4">Projects</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A selection of my recent work across web development, machine learning, and cloud infrastructure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {projects.map((project) => (
            <Card key={project.id} className="bg-card border border-primary/10 hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-foreground font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/5 text-primary border border-primary/10 hover:bg-primary/15 text-xs px-2.5 py-1.5 rounded-[5px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-6">
                <Button asChild  className="w-full gap-2 border border-white  hover:bg-white hover:text-black">
                  <Link href={project.link}>
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
