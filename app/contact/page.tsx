'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import {toast} from "sonner";
import { Spinner } from '@/components/ui/spinner'
import {motion} from "framer-motion";
import { reveal, revealSoft, cardReveal, stagger } from '@/lib/motion'


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
      })
      
      if(res.ok){
        toast("Message sent successfully!")
        setFormData({ name: '', email: '', message: '' })
      }else{
        toast("Failed to send message")
      }

    } catch (error) {
      toast("Failed to send message")
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.h1 
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
          className="text-2xl font-medium text-foreground mb-2"
        >Get In Touch
        </motion.h1>

        <motion.p 
          variants={revealSoft}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}

          className="text-muted-foreground text-sm mb-6 max-w-2xl"
        >
          I'm always interested in hearing about new projects and opportunities. Let's connect!
        </motion.p>

        <div className="max-w-4xl">
          <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
          className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-2 mb-16 items-stretch"
        >
          {/* Contact Info */}
          <motion.div
           variants={revealSoft}
           initial="hidden"
           whileInView="show"
           viewport={{once: true}}
           className="space-y-2 lg:h-full flex flex-col"
          >
            <Card className="card-gradient border border-dashed rounded-[5px] border-primary/18 p-6 pr-16 flex-1">
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <h3 className="text-foreground font-normal text-[14px]">Email</h3>
                  <a href="mailto:sayeed51003@example.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    sayeed51003@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="card-gradient border border-dashed rounded-[5px] border-primary/18 p-6 pr-16 flex-1">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <h3 className="text-foreground text-[14px] font-normal">Location</h3>
                  <p className="text-muted-foreground text-sm">Peshawer, Pakistan</p>
                </div>
              </div>
            </Card>
            
            <Card className="card-gradient border border-dashed rounded-[5px] border-primary/18 p-6 pr-16 flex-1">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 shrink-0" />
                <div>
                  <h3 className="text-foreground font-normal text-[14px]">Available</h3>
                  <p className="text-muted-foreground text-sm">For projects</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
           variants={reveal}
           initial="hidden"
           whileInView="show"
           viewport={{once: true}}
           className="lg:h-full"
          >
            <Card className="card-gradient border rounded-[5px] border-dashed border-primary/18 p-8 h-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className=" border border-dashed border-primary/10 text-sm placeholder:text-muted-foreground"
                  />
                  <Input
                    placeholder="Your Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className=" border border-dashed border-primary/10 text-sm placeholder:text-muted-foreground"
                  />
                </div>

                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="
                    border border-dashed border-primary/10
                    text-sm
                    placeholder:text-muted-foreground
                    min-h-32
                    resize-none
                    focus:outline-none
                    focus:ring-0
                    box-border
                  "
                />


                <Button type='submit' size='lg' className='w-full cursor-pointer' disabled={loading}>
                  {loading ? (
                    <div className='flex items-center justify-center gap-2'>
                      <Spinner className='w-5 h-5 text-white'/>
                      Sending...
                    </div>
                  ):(
                    "Send Message"
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </motion.div>
        </div>
      </section>
    </div>
  )
}
