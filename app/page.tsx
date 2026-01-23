'use client'

import { Card } from '@/components/ui/card'
import { ArrowRight, Github , Plus} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { reveal, revealSoft, cardReveal, stagger } from '@/lib/motion'
import { projects } from './projects/page'

export default function Home() {

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Redux', 'Tailwindcss', 'Shadcn']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Flask', 'Prisma', 'PostgreSQL', 'MongoDB', 'Supabase', 'vectorDBs']
    },
    {
      title: 'DevOps',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Git', 'Vercel']
    },
    {
      title: 'AI',
      skills: ['PyTorch', 'LLMs', 'RAG', 'AI Agents', 'LangChain', 'crewAI']
    }
  ]


  return (
    <div className="pt-16">
      <section className="max-w-6xl px-4 sm:px-6 mx-auto lg:px-8 py-20 min-h-[80vh] flex items-center">
        <div className="space-y-6 w-full">

          {/* SECTION 01: HERO / IDENTITY */}
          <motion.div 
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-12 gap-4 border-b border-border/50 pb-16"
          >
            <div className="md:col-span-3">
              <div className="relative inline-block">
                <img
                  src="/me.jpeg"
                  alt="Sayed Ali Shah"
                  className="w-24 h-24 object-cover rounded-full border border-border"
                />
                <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-primary rounded-full border-2 border-background animate-pulse" />
              </div>
            </div>

            <div className="md:col-span-7">
              <h1 
                className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground leading-[0.8] mb-8"
              >
                Sayed Ali Shah. <br />
                <span className="text-muted-foreground/40 italic font-light text-xl md:text-2xl tracking-tight">
                  Full Stack & AI.
                </span>
              </h1>
              <p 
                className="text-[14px] text-muted-foreground font-light leading-relaxed max-w-xl"
              >
                Building technical architectures with human-centric design. Currently learning and scaling intelligent systems on web.
              </p>
            </div>

            {/* Right Column: Status/Plus Icon */}
            <div className="md:col-span-2 flex md:justify-end">
              <div  className="flex flex-col items-end gap-4">
                <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center">
                  <Plus className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </motion.div>


          {/* SECTION 02 - about */}
          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-b border-border/50"
          >

            <div className="md:col-span-3">
              <span 
                className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground/60"
              >
                Background
              </span>
            </div>

            <div className="md:col-span-7">
              <div
                className="space-y-6 text-[14px] text-muted-foreground font-light leading-relaxed mb-12"
              >
                <p>
                  Hey, I am Ali. I build <span className="text-foreground">full-stack web apps</span> and <span className="text-foreground">AI products</span> that solve, augment real business problems. I've been coding for more than two years — breaking things, fixing them, and learning from every mistake along the way.
                </p>
                <p>
                  From Idea to production — I focus on clean code, scalable systems, and real results.
                </p>
                <p>
                  Right now, I'm looking for projects and full-stack roles where I can build something meaningful. Need something solid, <span className="text-primary/80 font-medium italic">let's make it happen.</span>
                </p>
              </div>


              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* SECTION: EDUCATION */}
                <div className="group relative p-5 border border-dashed border-primary/10 bg-card/20 rounded-[4px] transition-all duration-500 hover:border-primary/30 hover:bg-card/40">

                  <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                    <Plus className="w-3 h-3 text-primary" />
                  </div>

                  <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
                    <span className="h-[1px] w-4 bg-primary/30" />
                    Education
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      { title: "B.S. Computer Science", sub: "PIEAS, Islamabad", year: "2023—2027" },
                      { title: "ML Specializations", sub: "DeepLearning.ai", year: "2025" }
                    ].map((item, idx) => (
                      <div key={idx} className="relative pl-4 border-l border-border/50 group-hover:border-primary/30 transition-colors">
                        <p className="text-[13px] font-medium text-foreground leading-none tracking-tight">
                          {item.title}
                        </p>
                        <div className="flex justify-between items-center mt-1.5">
                          <span className="text-[11px] text-muted-foreground/60 font-light">{item.sub}</span>
                          <span className="text-[10px] font-mono text-muted-foreground/30">{item.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SECTION: EXPERIENCE */}
                <div className="group relative p-5 border border-dashed border-primary/10 bg-card/20 rounded-[4px] transition-all duration-500 hover:border-primary/30 hover:bg-card/40">
                  <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                    <Plus className="w-3 h-3 text-primary" />
                  </div>

                  <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
                    <span className="h-[1px] w-4 bg-primary/30" />
                    Experience
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      { title: "Freelance Full-Stack", sub: "Upwork", year: "2024—Present" },
                      { title: "Freelance AI Engineer", sub: "Upwork", year: "2025—Present" }
                    ].map((item, idx) => (
                      <div key={idx} className="relative pl-4 border-l border-border/50 group-hover:border-primary/30 transition-colors">
                        <p className="text-[13px] font-medium text-foreground leading-none tracking-tight">
                          {item.title}
                        </p>
                        <div className="flex justify-between items-center mt-1.5">
                          <span className="text-[11px] text-muted-foreground/60 font-light">{item.sub}</span>
                          <span className="text-[10px] font-mono text-muted-foreground/30">{item.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2" />
          </motion.div>

          {/* SECTION 03: TECH STACK (REFINED ARCHITECTURAL) */}
          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 py-20 border-b border-border/50"
          >
            <div className="md:col-span-3 flex flex-col justify-between py-1">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground/60">
                  Capabilities
                </span>
                <p className="text-[9px] font-mono text-muted-foreground/40 uppercase tracking-widest">
                  System / Stack
                </p>
              </div>
            </div>

            <div className="md:col-span-9">
              <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-12">
                {skillCategories.map((category, idx) => (
                  <div 
                    key={category.title} 
                    className="group relative"
                  >

                    <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-foreground mb-4 flex items-center gap-2">
                      <span className="shrink-0">{category.title}</span>
                      <div className="h-[1px] w-full bg-border/30 group-hover:bg-primary/30 transition-colors" />
                    </h3>

                    <ul className="space-y-2.5">
                      {category.skills.map((skill) => (
                        <li 
                          key={skill} 
                          className="flex items-center gap-2 group/item"
                        >
                          {/* Minimalist Dot Indicator */}
                          <div className="h-1 w-1 rounded-full bg-border group-hover/item:bg-primary transition-colors shrink-0" />
                          
                          <span className="text-[12px] sm:text-[13px] text-muted-foreground/80 font-light group-hover/item:text-foreground transition-all truncate">
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          
          {/* SECTION 04: FEATURED PROJECTS (ARCHITECTURAL ALIGNMENT) */}
          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16"
          >
            <div className="md:col-span-3">
              <span 
                className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground/60"
              >
                Projects
              </span>
            </div>

            <div className="md:col-span-9">
              <div className="mb-12 max-w-2xl">
                <h2 className="text-xl font-medium text-foreground mb-2">Selected Implementations</h2>
                <p className="text-[14px] text-muted-foreground font-light leading-relaxed">
                  A selection of my recent work across full-stack engineering and machine learning interfaces.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {projects.slice(0, 4).map((project) => (
                  <div
                    key={project.id}
                    className='bg-card'
                  >
                    <Card className="card-gradient-br h-full group border border-dashed rounded-[5px] border-primary/10 hover:border-primary/16 transition-colors duration-300 ease-in-out flex flex-col p-0">
                      <div className="w-full aspect-[16/9] relative overflow-hidden rounded-t-[5px]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="px-4 flex-1 flex flex-col pt-4">
                        <h3 className="text-foreground font-semibold text-[16px] mb-1">{project.title}</h3>
                        <p className="flex-1 text-muted-foreground text-sm mb-3 font-light leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="bg-primary/5 text-primary border rounded-[4px] border-dashed border-primary/14 hover:bg-primary/15 text-[10px] px-2.5 py-1.5 font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="px-4 pb-6 mt-auto">
                        <div className="flex gap-3">
                          <Button asChild className="flex-1 gap-2 rounded-[4px] border border-white cursor-pointer">
                            <Link href={project.link}>
                              Live <ArrowRight className="w-4 h-4" />
                            </Link>
                          </Button>

                          <Button asChild className="flex items-center gap-2 rounded-[4px] border-[0.5px] border-primary/10 bg-secondary/50 text-foreground hover:bg-secondary px-3 shadow-none cursor-pointer">
                            <Link href={project.github}>
                              <Github className="w-4 h-4" />
                              GitHub
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                  <Link 
                    href="/projects" 
                    className="group inline-flex items-center gap-4 text-lg font-light text-foreground"
                  >
                    View Full Archive 
                    <span className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <ArrowRight className="w-4 h-4 group-hover:text-background -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </span>
                  </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}