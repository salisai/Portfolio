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


  return (
    <div className="pt-16 sm:pt-24">
      <section className="max-w-6xl px-4 sm:px-6 mx-auto lg:px-8 py-20 min-h-[80vh] flex items-center">
        <div className="space-y-8 w-full">
          
          {/* HERO-SECTION */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            viewport={{once: true}}
            className="mb-6 space-y-4"
          >
            <motion.div 
              variants={revealSoft}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
              className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="font-body font-medium text-muted-foreground tracking-wide uppercase">Available for Projects</span>
            </motion.div>

            <motion.h1
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
              className="text-5xl sm:text-7xl font-bold tracking-tight"
            >
              Full-Stack & AI <br className="hidden sm:block" />
              <span className="font-heading text-primary/80">Engineer.</span>
            </motion.h1>

            <motion.p
              variants={revealSoft}
              className="sm:text-xl text-muted-foreground max-w-2xl text-balance leading-relaxed"
            >
              I build pixel-perfect, engaging, and accessible digital experiences.
              Bridging the gap between design and technology to create products that matter.
            </motion.p>
          </motion.div>

          <motion.div
            variants={revealSoft}
            initial="hidden"
            animate="show"
            className="flex sm:flex-row gap-4 mb-0"
          >
            <Link href="/projects">
              <Button size="lg" className="gap-2 rounded-none">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button size="lg" className="border rounded-none border-primary/20 bg-black text-white hover:text-black transition-all duration-300 ease-in-out">
                Get In Touch
              </Button>
            </Link>
          </motion.div>


          {/* ABOUT-SECTION */}
          <div>
            <motion.section 
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{once: true, margin: "-80px"}}
              className="max-w-4xl py-16 mt-2 sm:mt-20">
              
              <motion.div
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="sm:hidden relative"
              >
                <img
                  src="/me.jpeg"
                  alt="Ali"
                  className="w-100 h-100 object-cover rounded-[5px] mb-14 shadow-sw"
                />
                <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none rounded-b-[10px]
                    bg-linear-to-b from-transparent to-black/90">
                </div>
              </motion.div>


              <motion.h1 
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                className="text-4xl font-bold text-foreground mb-4"
              >
                About Me
              </motion.h1>

              <motion.div 
                variants={revealSoft}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                className="space-y-6 text-muted-foreground leading-relaxed"
              >
                <p>I’m Ali — a full-stack developer and AI engineer pursuing bechelor's in computer science, passionate about turning bold ideas into intelligent, scalable products that make true difference.</p>

                <p>I love exploring the intersection of technology, design, and human behavior — always learning, improving, and building things that push boundaries. When I’m not coding, you’ll find me reading,{" "}
                  <Link href="https://medium.com/@salisai" className="text-primary">writing</Link>, thinking about big ideas, and studying how technology drives human progress.
                </p>

                <p>Right now, I’m focused on helping teams build smarter products that perform beautifully and deliver measurable results.</p>

                <p>If you’re looking for someone who can turn your AI or web idea into something users love and investors notice — let’s{" "}
                  <Link href="/contact" className="text-primary">create</Link>{" "}it together.
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
                  className="bg-card p-6 border border-dashed border-primary/20 hover:border-primary/24"
                >
                  <h3 className="text-foreground font-semibold mb-4 text-lg">Education</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>
                      <p className="text-foreground font-medium">B.S. Computer and Information Science</p>
                      <p className="text-xs">PIEAS, Islamabad, 23-27</p>
                    </li>
                    <li>
                      <p className="text-foreground font-medium">ML and DL Specializations</p>
                      <p className="text-xs">DeepLearning.ai, 2025</p>
                    </li>
                  </ul>
                </motion.div>

                <motion.div 
                  variants={cardReveal} 
                  initial="hidden" 
                  whileInView="show" 
                  viewport={{once: true}}
                  className="bg-card p-6 border border-dashed border-primary/20 hover:border-primary/24"
                >
                  <h3 className="text-foreground font-semibold mb-4 text-lg">Experience</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>
                      <p className="text-foreground font-medium">Freelance Full-Stack Developer</p>
                      <p className="text-xs">Upwork, 2024 - Present</p>
                    </li>
                    <li>
                      <p className="text-foreground font-medium">Freelance AI Engineer</p>
                      <p className="text-xs">Upwork, 2025-present</p>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.section>
          </div>

          {/* PROJECT-SECTION */}
          <div>
            <section className="max-w-6xl mx-auto">
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
                    <Card key={project.id} className="h-full group border border-dashed border-primary/18 hover:border-primary/24 transition-all duration-300 overflow-hidden flex flex-col p-0">
                    
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

          

        </div>
      </section>
    </div>
  )
}
