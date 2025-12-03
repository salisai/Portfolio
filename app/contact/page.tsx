'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import {toast} from "sonner";
import { Spinner } from '@/components/ui/spinner'


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
        <h1 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          I'm always interested in hearing about new projects and opportunities. Let's connect!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div className="space-y-4">
            <Card className="bg-card border border-primary/10 p-6">
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-foreground font-semibold mb-1">Email</h3>
                  <a href="mailto:sayeed51003@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                    sayeed51003@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="bg-card border border-primary/10 p-6">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-foreground font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">Islamabad, Pak</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border border-primary/10 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input border border-primary/5 text-[14px] placeholder:text-muted-foreground"
                  />
                  <Input
                    placeholder="Your Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input border border-primary/5 text-[14px] placeholder:text-muted-foreground"
                  />
                </div>

                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-input border border-primary/5 text-[14px] placeholder:text-muted-foreground min-h-32"
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
          </div>
        </div>
      </section>
    </div>
  )
}
