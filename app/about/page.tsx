'use client'
import Link from "next/link"

export default function About() {
  return (
    <div className="pt-24">
      <section className="max-w-4xl px-4 sm:px-6  lg:px-8 py-20">
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

          <div className="bg-card p-6 border border-dashed border-primary/18 hover:border-primary/24">
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
  )
}
