'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Plus, Globe, Mail } from 'lucide-react'
import Link from 'next/link'
import { toast } from "sonner"
import { Spinner } from '@/components/ui/spinner'
import { reveal, revealSoft, stagger } from '@/lib/motion'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        toast("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast("Failed to send message");
      }
    } catch (error) {
      toast("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-40 selection:bg-primary/20">
      <section className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* SECTION 01: HERO / CONTACT INTRO */}
        <motion.div 
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-12 gap-4 border-b border-border/50 pb-16"
        >
          <div className="md:col-span-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">Contact</span>
          </div>

          <div className="md:col-span-7">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground leading-[0.9] mb-8">
              Initiate <br />
              <span className="text-muted-foreground/50">Engagement.</span>
            </h1>
            <p className="text-[14px] text-muted-foreground font-light leading-relaxed">
              Available for technical partnerships and full-stack AI development. Reach out to start the integration.
            </p>
          </div>
          
          <div className="md:col-span-2 flex md:justify-end">
            <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center">
              <Plus className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </motion.div>

        {/* SECTION 02: INTAKE FORM */}
        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-b border-border/50"
        >
          <div className="md:col-span-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Inquiry Form</span>
          </div>
          
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="group relative">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60 group-focus-within:text-primary transition-colors">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full text-[14px] bg-transparent border-b border-border/50 py-4 focus:outline-none focus:border-primary transition-colors text-foreground font-light text-lg placeholder:text-muted-foreground/20"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="group relative">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60 group-focus-within:text-primary transition-colors">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="text-[14px] w-full bg-transparent border-b border-border/50 py-4 focus:outline-none focus:border-primary transition-colors text-foreground font-light text-lg placeholder:text-muted-foreground/20"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="group relative">
                <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60 group-focus-within:text-primary transition-colors">Project Brief</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows={4}
                  className="w-full text-[14px] bg-transparent border-b border-border/50 py-4 focus:outline-none focus:border-primary transition-colors text-foreground font-light text-lg resize-none placeholder:text-muted-foreground/20"
                  placeholder="Tell me about your vision..."
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="group flex items-center gap-4 text-lg font-light text-foreground hover:text-primary transition-all"
              >
                {loading ? <Spinner className="w-5 h-5" /> : "Send Inquiry"}
                <span className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 group-hover:text-background" />
                </span>
              </button>
            </form>
          </div>
          <div className="md:col-span-2" />
        </motion.div>

        {/* SECTION 03: CHANNELS & LOCATION */}
<motion.div 
  variants={stagger}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16"
>
  <div className="md:col-span-3">
    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground inline-block pt-[2px]">
      Channels
    </span>
  </div>
  
  <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-12">
    {/* Direct Column */}
    <div className="space-y-4">
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-foreground">Direct</h3>
      <div className="flex flex-col space-y-2 text-[13px] font-light text-muted-foreground">
        <a 
          href="mailto:sayeed51003@gmail.com" 
          className="hover:text-primary transition-colors duration-300 w-fit"
        >
          sayeed51003@gmail.com
        </a>
        <a 
          href="https://x.com/@salisdev" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors duration-300 w-fit"
        >
          X (Twitter)
        </a>
      </div>
    </div>

    {/* Social Column */}
    <div className="space-y-4">
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-foreground">Social</h3>
      <div className="flex flex-col space-y-2 text-[13px] font-light text-muted-foreground">
        <a 
          href="https://linkedin.com/in/sayed-ali-shah" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors duration-300 w-fit"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/salisai"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors duration-300 w-fit"
        >
          GitHub
        </a>
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-foreground">Presence</h3>
      <div className="space-y-2 text-[13px] font-light text-muted-foreground">
        <p>Peshawar, Pakistan</p>
        <p className="opacity-60">Remote / GMT +5</p>
      </div>
    </div>
  </div>
</motion.div>

      </section>
    </div>
  )
}