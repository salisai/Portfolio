'use client'

import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image';
import { Button } from '@/components/ui/button'

export default function Home() {

  const projects = [
    {
      id: 1,
      title: 'CulinaAI',
      description: 'AI powered fully fledged SAAS app to generate recipes using available grocceries images',
      tech: ['Next.js', 'TypeScript', 'NeonDB','Clerk','Prisma','Shadcn', 'GeminiAPI', "NanoBanana"],
      link: 'https://github.com/salisai/ai_recipes_app',
      image: '/project1.png'
    },
    {
      id: 2,
      title: 'Jewelary Store',
      description: 'Full-stack ecommerce website with admin dashboard',
      tech: ['React', 'Tailwindcss', 'Supabase', 'Resend', 'Stripe'],
      link: '#',
      image: '/project2.png'
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment processing and inventory management.',
      tech: ['Next.js', 'Stripe', 'MongoDB', 'Docker'],
      link: '#',
      image: ''
    },
    {
      id: 4,
      title: 'ML Image Recognition',
      description: 'Computer vision model for real-time object detection and classification.',
      tech: ['PyTorch', 'FastAPI', 'OpenCV', 'AWS'],
      link: '#',
      image: ''
    },
    {
      id: 5,
      title: 'Collaborative Notes App',
      description: 'Real-time collaborative note-taking with encryption and offline support.',
      tech: ['React', 'Firebase', 'Encryption', 'PWA'],
      link: '#',
      image: ''
    },
    {
      id: 6,
      title: 'DevOps Automation Tool',
      description: 'Kubernetes management tool for simplified deployment and scaling.',
      tech: ['Go', 'Kubernetes', 'gRPC', 'React'],
      link: '#',
      image: ''
    }
  ]

  return (
    <div className="pt-16 sm:pt-24">
      {/* Hero Section */}
      <section className="max-w-6xl px-4 sm:px-6 mx-auto lg:px-8 py-20 min-h-[80vh] flex items-center">
        <div className="space-y-8">

          <div className='mb-6'>
            <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-3">
              Full-Stack & AI {"\n"}Engineer
            </h1>
            <p className="sm:text-2xl text-muted-foreground mb-2 max-w-2xl text-balance">
              Building smart, scalable digital web experiences that create an impact for businesses.
            </p>
          </div>

          <div className="flex sm:flex-row gap-4 mb-0">
            <Link href="/projects">
              <Button size="lg" className="border border-primary/20 bg-black text-white hover:text-black transition-all duration-300 ease-in-out">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button size="lg" className='gap-2'>
                Get In Touch
              </Button>
            </Link>

          </div>


          <div>
            <section className="max-w-4xl py-16 mt-2 sm:mt-20">
              <div className="sm:hidden relative">
                <img 
                  src="/me.jpeg" 
                  alt="Ali" 
                  className="w-100 h-100 object-cover rounded-[5px] mb-14 shadow-sw"
                />

                <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none rounded-b-[10px]
                    bg-linear-to-b from-transparent to-black/90">
                </div>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">About Me</h1>

              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>I’m Ali — a full-stack developer and AI engineer pursuing bechelor's in computer science, passionate about turning bold ideas into intelligent, scalable products that make true difference.</p>
          
                <p>I love exploring the intersection of technology, design, and human behavior — always learning, improving, and building things that push boundaries. When I’m not coding, you’ll find me reading, 
                  {" "}
                  <Link 
                      href="https://medium.com/@salisai" 
                      className="text-primary"
                    >
                      writing
                    </Link>
                  , thinking about big ideas, and studying how technology drives human progress.</p>
                    
                <p>Right now, I’m focused on helping teams build smarter products that perform beautifully and deliver measurable results.</p>
                
                <p>If you’re looking for someone who can turn your AI or web idea into something users love and investors notice — let’s{" "}
                  <Link 
                      href="/contact" 
                      className="text-primary"
                    >
                      create
                    </Link>{" "}
                    it together.</p>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card p-6 border border-dashed border-primary/20 hover:border-primary/24">
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
                </div>

                <div className="bg-card p-6 border border-dashed border-primary/20 hover:border-primary/24">
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
                </div>
              </div>
            </section>
          </div>

          <div>
            <section className="max-w-6xl pt-10">
              <h1 className="text-4xl font-bold text-foreground mb-4">Projects</h1>
              <p className="text-muted-foreground mb-12 max-w-2xl">
                A selection of my recent work across web development, machine learning, and cloud infrastructure.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {projects.map((project) => (
                  
                  <Card key={project.id} className="bg-card border border-dashed border-primary/20 hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col p-0">
                    
                    <div className='w-full relative h-40 sm:h-52 lg:h-56'>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className='object-cover'
                      />
                    </div>
                                  
                    <div className="px-6 flex-1 flex flex-col">
                      <h3 className="text-foreground font-semibold text-lg mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3 flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
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

        </div>
      </section>
    </div>
  )
}
