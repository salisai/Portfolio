import Link from 'next/link'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-foreground font-semibold mb-4">About</h3>
            <p className="text-muted-foreground text-sm">
              Full-Stack and AI Engineer passionate about building and shipping elegant, impactful solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
              <li><Link href="/skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <Link href="https://github.com/salisai" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              
              <Link href="https://linkedin.com/in/sayed-ali-shah" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
             
              <Link href="https://x.com/@salisdev" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              
              <Link 
                href="mailto:sayeed51003@gmail.com?subject=Contact%20from%20Portfolio" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Ali Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
