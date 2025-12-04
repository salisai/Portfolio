'use client'

import { Card } from '@/components/ui/card'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js','Redux', 'Tailwindcss','Shadcn']
    },
    {
      title: 'Backend',
      skills: ['Node.js','Express', 'Flask', 'Prisma', 'PostgreSQL', 'MongoDB', 'Supabase', 'Pinecone', 'Weaviate']
    },
    {
      title: 'DevOps',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Nginx', 'Git', 'Vercel']
    },
    {
      title: 'AI',
      skills: ['TensorFlow', 'PyTorch', 'LLMs', 'RAG', 'AI Agents', 'LangChain', 'crewAI']
    }
  ]

  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-foreground mb-4">Tech Stack</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A comprehensive overview of technologies and tools I've mastered over my career.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-card p-4 border border-dashed border-primary/20 hover:border-primary/24 transition-all duration-300">
              <h3 className="text-foreground font-semibold text-lg">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary/5 text-primary border border-dashed border-primary/18 hover:bg-primary/15 text-xs px-2.5 py-1.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-card border border-dashed border-primary/14 p-8">
          <h3 className="text-foreground font-semibold text-lg mb-6">Proficiency Levels</h3>
          <div className="space-y-4">
            {[
              { area: 'Full-Stack Development', level: 95 },
              { area: 'AI Engineering', level: 80 },
              { area: 'DevOps & Infrastructure', level: 75 }
            ].map((item) => (
              <div key={item.area}>
                <div className="flex justify-between mb-2">
                  <p className="text-foreground text-sm font-medium">{item.area}</p>
                  <p className="text-muted-foreground text-sm">{item.level}%</p>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
