"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2, Clock, Award, Users, Headphones, Rocket, Languages } from "lucide-react"

const advantages = [
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect deadlines and deliver projects on schedule without compromising quality.",
    stat: "98%",
    statLabel: "On-time delivery rate",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous testing and code reviews ensure bug-free, reliable software.",
    stat: "100%",
    statLabel: "Quality guaranteed",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Senior developers with 8+ years average experience across diverse technologies.",
    stat: "10+",
    statLabel: "Expert developers",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock support to ensure your systems run smoothly at all times.",
    stat: "24/7",
    statLabel: "Support available",
  },
  {
    icon: Rocket,
    title: "Agile Development",
    description: "Flexible, iterative approach that adapts to your changing requirements.",
    stat: "2 week",
    statLabel: "Sprint cycles",
  },
  {
    icon: CheckCircle2,
    title: "Client Satisfaction",
    description: "Our success is measured by your success. We go above and beyond for every client.",
    stat: "4.9/5",
    statLabel: "Client rating",
  },
]

export function WhyUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="why-us" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            The DEV09 <span className="text-primary">Advantage</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            We combine technical excellence with a client-first approach to deliver
            solutions that truly make a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border h-full hover:border-primary/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <advantage.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        {advantage.stat}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {advantage.statLabel}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
