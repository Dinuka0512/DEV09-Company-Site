"use client"

import { motion, useAnimationControls } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "framer-motion" // still used for title entrance

const clients = [
  { name: "Dinukagrapics"},
  { name: "Huruwagraphy"},
  { name: "Tringledo"},
  { name: "MYBIZ"},
  { name: "Dillshan Oill Mill"},
  { name: "GearLog"},
  { name: "MKD"}
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
        x: [0, -width, 0],
        transition: {
          duration: 30,           // ~30s for full cycle (left then right)
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      })
    }

    animateMarquee()
  }, [controls])

  return (
    <section className="relative mt-7">
      <div className="container mx-auto" ref={ref}>
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
        <div className="relative overflow-hidden mb-10">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <motion.div
            ref={marqueeRef}
            animate={controls}
            className="flex gap-8 md:gap-12 whitespace-nowrap bg-red"
            initial={{ x: 0 }}
          >
            {/* First set */}
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex-shrink-0"
              >
                <div className="min-w-20 h-20 md:min-w-20 md:h-20 lg:min-w-[192px] lg:h-24 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:shadow-md transition-all duration-300 group">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    </span>
                    <p className="text-xs text-muted-foreground mt-2 transition-opacity">
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
                <div className="min-w-20 h-20 md:min-w-20 md:h-20 lg:min-w-[192px] lg:h-24 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:shadow-md transition-all duration-300 group">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                      {/* {client.logo} */}
                    </span>
                    <p className="text-xs text-muted-foreground mt-2 transition-opacity">
                      {client.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile/tablet static box fallback removed; animation-only as requested */}
      </div>
    </section>
  )
}