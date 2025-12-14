'use client'

import { Card } from '@/components/ui/card'
import { Award } from 'lucide-react'
import {motion} from 'framer-motion';
import { reveal, revealSoft, cardReveal, stagger } from '@/lib/motion'


export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: 'The Complete Web Development Bootcamp',
      issuer: 'Udemy',
      date: '2024',
      link: 'https://www.udemy.com/certificate/UC-729435f2-bbad-44a9-864e-95fafede85ff/'
    },
    {
      id: 2,
      title: 'Machine Learning Specialization',
      issuer: 'DeepLearning.ai',
      date: '2025',
      link: '#'
    },
    {
      id: 3,
      title: 'Machine Learning in Production',
      issuer: 'DeepLearning.ai',
      date: '2025',
      link: '#'
    },
    {
      id: 4,
      title: 'Google Prompting Essentials',
      issuer: 'Google',
      date: '2025',
      link: '#'
    },
  ]

  return (
    <div className="pt-24">
      <motion.section 
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        
        <motion.h1 
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
          className="text-4xl font-bold text-foreground mb-4"
        >
          Certifications
        </motion.h1>

        <motion.p 
          variants={revealSoft}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
          className="text-muted-foreground mb-12 max-w-2xl"
        >
          Professional certifications and credentials that validate my expertise in various technologies and domains.
        </motion.p>

        <motion.div
           variants={cardReveal}
           initial="hidden"
           whileInView="show"
           viewport={{once: true}}
           className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {certifications.map((cert) => (
            <div className='p-0 m-0 bg-card'>
              <Card key={cert.id} className="border border-dashed border-primary/20 hover:border-primary/24 p-6 transition-all">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-foreground font-semibold text-lg">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{cert.issuer}</p>
                  <p className="text-muted-foreground text-xs mt-2 font-medium">{cert.date}</p>
                </div>
              </div>
            </Card>
            </div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  )
}
