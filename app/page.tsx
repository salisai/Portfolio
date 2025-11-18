'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[80vh] flex items-center justify-center">
        <div className="text-center space-y-8">
          <div>
            <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-4 text-balance">
              Full-Stack & AI Engineer
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Building smart, scalable digital experiences that create an impact for businesses.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button size="lg" className="gap-2">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className='border border-primary/20 bg-black text-white hover:text-black transition-all duration-300 ease-in-out'>
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-3 gap-4 mt-16 text-center text-sm">
            <div>
              <p className="text-primary font-semibold text-lg">14+</p>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <p className="text-primary font-semibold text-lg">2+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="text-primary font-semibold text-lg">100%</p>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
