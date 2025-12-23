'use client'

import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
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
      skills: ['React', 'TypeScript', 'Next.js','Redux', 'Tailwindcss','Shadcn']
    },
    {
      title: 'Backend',
      skills: ['Node.js','Express', 'Flask', 'Prisma', 'PostgreSQL', 'MongoDB', 'Supabase', 'Pinecone', 'Weaviate']
    },
    {
      title: 'DevOps',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Nginx', 'Git', 'Vercel']
    },
    {
      title: 'AI',
      skills: ['TensorFlow', 'PyTorch', 'LLMs', 'RAG', 'AI Agents', 'LangChain', 'crewAI']
    }
  ]


  return (
    <div className="pt-20 sm:pt-20">
      <section className="max-w-6xl px-4 sm:px-6 mx-auto lg:px-8 py-20 min-h-[80vh] flex items-center">
        <div className="space-y-8 w-full">
          
          {/* HERO-SECTION */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            viewport={{once: true}}
          >

           <div className='flex flex-row items-center gap-4'>
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/me.jpeg"
                alt="Ali"
                className="w-20 h-20 object-cover rounded-[10px]"
              />
              <div className="absolute bottom-0 rounded-[10px] left-0 w-20 h-20 pointer-events-none
                  bg-linear-to-b from-transparent to-black/90">
              </div>
            </motion.div>

            <div>
              <motion.h1
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                className=" text-3xl sm:text-4xl font-bold tracking-tighter"
              >
                Sayed Ali Shah 
              </motion.h1>

              <motion.h2
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                className="font-body text-xl text-muted-foreground font-extralight"
              >
                Full Stack developer
              </motion.h2>
            </div>
            </div> 
          </motion.div>


          {/* ABOUT-SECTION */}
          <div>
            <motion.section 
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{once: true, margin: "-80px"}}
              className="max-w-4xl py-1 mt-2 sm:mt-4">        

              <motion.div 
                variants={revealSoft}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                className="space-y-3 text-muted-foreground leading-relaxed"
              >
                <p>I’m Ali — a computer science student who cares deeply about how technology creates real value in people’s lives.</p>

                <p>I’m early in my journey, but I don’t take it lightly. I spend my days improving my development and AI engineering skills, not just to write code, but to understand how real products are built, scaled, and used by real humans.</p>

                <p>I’m obsessed with growth — learning better, thinking deeper, and building things that matter. I read, I <Link href="/contact" className="text-primary">write</Link>{" "}, I experiment, I fail, and I improve.</p>
                <p>If you have an idea and you want someone who will treat it with care, honesty, and effort, I’m ready — let’s{" "}
                  <Link href="/contact" className="text-primary">make</Link>{" "}it real.
                </p>
              </motion.div>

              <motion.div 
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-2"
              >
                <motion.div 
                  variants={cardReveal} 
                  initial="hidden" 
                  whileInView="show" 
                  viewport={{once: true}}
                  className="bg-card p-4 border border-dashed rounded-[5px] border-primary/20 hover:border-primary/24"
                >
                  <h3 className="text-foreground font-medium mb-2">Education</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>
                      <p className="text-foreground font-normal">B.S. Computer and Information Science</p>
                      <p className="text-xs">PIEAS, Islamabad, 23-27</p>
                    </li>
                    <li>
                      <p className="text-foreground font-normal">ML and DL Specializations</p>
                      <p className="text-xs">DeepLearning.ai, 2025</p>
                    </li>
                  </ul>
                </motion.div>

                <motion.div 
                  variants={cardReveal} 
                  initial="hidden" 
                  whileInView="show" 
                  viewport={{once: true}}
                  className="bg-card p-4 border border-dashed rounded-[5px] border-primary/20 hover:border-primary/24"
                >
                  <h3 className="text-foreground font-medium mb-2">Experience</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>
                      <p className="text-foreground font-normal">Freelance Full-Stack Developer</p>
                      <p className="text-xs">Upwork, 2024 - Present</p>
                    </li>
                    <li>
                      <p className="text-foreground font-normal">Freelance AI Engineer</p>
                      <p className="text-xs">Upwork, 2025-present</p>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.section>
          </div>

          {/* tech stack  */}
          <section 
            className="max-w-4xl mx-auto pt-20">
            <motion.h1 
              variants={reveal} 
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
              className="text-2xl font-bold text-foreground mb-2"
            >Tech Stack</motion.h1>

            <motion.p 
              variants={revealSoft} 
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
              className="text-muted-foreground mb-6 max-w-2xl"
            >
              A comprehensive overview of technologies and tools I've mastered over my career.
            </motion.p>

            <motion.div 
              variants={cardReveal} 
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
              className="grid grid-cols-1 md:grid-cols-2 gap-2"
            >
              {skillCategories.map((category) => (
                <div className='bg-card flex'>
                  
                  <Card key={category.title} className="flex-1 p-4 border border-dashed rounded-[5px] border-primary/20 hover:border-primary/24 transition-all duration-300">
                  <h3 className="text-foreground font-semibold text-lg">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-primary/5 text-primary border border-dashed rounded-[4px] border-primary/18 hover:bg-primary/15 text-xs px-2.5 py-1.5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
                </div>
              ))}
            </motion.div>
          </section>

          {/* PROJECT-SECTION */}
          <div>
            <section className="max-w-6xl mx-auto pt-20">
              <motion.h1 
                className="text-2xl font-body font-bold text-foreground mb-2"
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
                Projects</motion.h1>
              
              <motion.p 
                className="text-muted-foreground mb-6 max-w-2xl"
                variants={revealSoft}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
                A selection of my recent work across web development, machine learning, and cloud infrastructure.
              </motion.p>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-2"
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
                    className='bg-card'
                  >
                    <Card key={project.id} className="h-full group border border-dashed rounded-[5px] border-primary/18 hover:border-primary/24 transition-all duration-300 overflow-hidden flex flex-col p-0">
                    
                    <div className='w-full aspect-[16/10] relative'>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className='object-cover p-2 pb-0'
                      />
                    </div>
                                  
                    <div className="px-4 flex-1 flex flex-col">
                      
                    <h3 className="text-foreground font-semibold text-lg mb-1">{project.title}</h3>
                    

                      <p className="text-muted-foreground text-sm mb-3 flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="bg-primary/5 text-primary border border-dashed rounded-[4px] border-primary/14 hover:bg-primary/15 text-xs px-2.5 py-1.5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
            
                    <div className="px-4 pb-6">
                      <Button 
                        asChild  
                        className="w-full gap-2 rounded-none border rounded-[4px] border-white">
                        
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

          

        </div>
      </section>
    </div>
  )
}
