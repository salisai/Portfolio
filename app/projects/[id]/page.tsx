import React from 'react'
import { projects } from '../page'
import Link from 'next/link'
import { ArrowLeft, Github, Globe } from 'lucide-react'
import Image from 'next/image'

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === parseInt(params.id))
  
  if (!project) {
    return (
      <div className="min-h-screen pt-32 px-6 flex items-center justify-center">
        <h1 className="text-2xl font-semibold">Project not found</h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-40">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to projects
        </Link>
        
        <div className="mb-12">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{project.title}</h1>
            <div className="flex gap-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="p-3 border border-white/10 rounded-sm hover:bg-white/[0.03] hover:border-white/30 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="p-3 border border-white/10 rounded-sm hover:bg-white/[0.03] hover:border-white/30 transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tech.map(t => (
              <span key={t} className="bg-primary/5 text-primary border border-dashed border-primary/20 text-xs px-3 py-1.5 rounded-sm font-mono tracking-wide">
                {t}
              </span>
            ))}
          </div>
          
          <div className="w-full aspect-video relative overflow-hidden rounded-sm border border-white/10 mb-16 shadow-2xl">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>

          <div className="prose prose-invert max-w-none prose-p:leading-relaxed prose-headings:font-semibold">
            <h2 className="text-2xl mb-6">Overview</h2>
            <p className="text-muted-foreground text-lg mb-10">{project.description}</p>
            
            <h2 className="text-2xl mb-6">Features & Implementation Details</h2>
            <p className="text-muted-foreground">
              This is a dynamic project document representing a detailed readme-style overview. In expanding this project, this section can be driven by MDX content containing deeper architectural analysis, specific implementation challenges overcomed, system design details, and related repository stats.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
