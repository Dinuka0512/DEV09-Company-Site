"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Eye, Heart, Zap } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To deliver exceptional software solutions that empower businesses to achieve their digital transformation goals.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the leading technology partner for innovative companies worldwide, setting new standards in digital excellence.",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Integrity, innovation, and client success drive everything we do. We believe in building lasting partnerships.",
  },
  {
    icon: Zap,
    title: "Approach",
    description:
      "Agile methodology combined with cutting-edge technology ensures we deliver quality solutions on time, every time.",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
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
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Who We <span className="text-primary">Are</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg text-pretty">
            DEV09 is a premier software development company dedicated to crafting
            innovative digital solutions. With over a decade of experience, we have
            helped businesses of all sizes transform their ideas into reality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <div className="p-8 rounded-2xl bg-card border border-border">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2014, DEV09 started with a simple mission: to bridge the gap
              between complex technology and business needs. Today, we are proud to have
              served over 50 clients across multiple industries, delivering solutions
              that not only meet but exceed expectations. Our team of passionate
              developers, designers, and strategists work together to create software
              that makes a difference.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
