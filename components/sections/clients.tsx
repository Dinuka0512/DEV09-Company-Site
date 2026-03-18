"use client"

import { motion, useAnimationControls } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "framer-motion" // still used for title entrance

const clients = [
  { name: "TechCorp", logo: "TC" },
  { name: "InnovateLab", logo: "IL" },
  { name: "DataDrive", logo: "DD" },
  { name: "CloudFirst", logo: "CF" },
  { name: "NextGen", logo: "NG" },
  { name: "SmartSystems", logo: "SS" },
  { name: "FutureTech", logo: "FT" },
  { name: "GlobalNet", logo: "GN" },
]

export function ClientsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const controls = useAnimationControls()
  const marqueeRef = useRef<HTMLDivElement>(null)

  // Infinite slow scroll right → left
  useEffect(() => {
    const animateMarquee = async () => {
      if (!marqueeRef.current) return

      // Get full width of one set of logos
      const width = marqueeRef.current.scrollWidth / 2

      await controls.start({
        x: -width,
        transition: {
          duration: 60,           // ~60s for full cycle – slow & elegant
          ease: "linear",
          repeat: Infinity,
        },
      })
    }

    animateMarquee()
  }, [controls])

  // Pause on hover
  const handleHoverStart = () => controls.stop()
  const handleHoverEnd = () => {
    // Restart from current position
    controls.start({
      x: marqueeRef.current ? - (marqueeRef.current.scrollWidth / 2) : 0,
      transition: {
        duration: 60,
        ease: "linear",
        repeat: Infinity,
      },
    })
  }

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Trusted By
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Companies We <span className="text-primary">Work With</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            We are proud to partner with industry leaders and innovative startups alike.
          </p>
        </motion.div>

        {/* Infinite Marquee */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <motion.div
            ref={marqueeRef}
            animate={controls}
            className="flex gap-8 md:gap-12 whitespace-nowrap"
            initial={{ x: 0 }}
          >
            {/* First set */}
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex-shrink-0"
              >
                <div className="w-48 h-24 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:shadow-md transition-all duration-300 group">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                      {client.logo}
                    </span>
                    <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {client.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {clients.map((client) => (
              <div
                key={`dup-${client.name}`}
                className="flex-shrink-0"
              >
                <div className="w-48 h-24 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:shadow-md transition-all duration-300 group">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                      {client.logo}
                    </span>
                    <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {client.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile fallback – static grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden gap-6 mt-12">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="h-20 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm">
                <span className="text-2xl font-bold text-muted-foreground">
                  {client.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}