import Link from 'next/link'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className='flex justify-center items-center gap-6 mb-8'>
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

        <div className="border-t border-dashed border-primary/20 pt-8 flex justify-center items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Ali Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
