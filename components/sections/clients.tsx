"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
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

        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-8 animate-scroll"
          >
            {/* First set */}
            {clients.map((client, index) => (
              <motion.div
                key={`first-${client.name}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex-shrink-0"
              >
                <div className="w-48 h-24 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary/50 transition-all duration-300 group">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                      {client.logo}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {client.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Second set for infinite scroll */}
            {clients.map((client) => (
              <div key={`second-${client.name}`} className="flex-shrink-0">
                <div className="w-48 h-24 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary/50 transition-all duration-300 group">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                      {client.logo}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {client.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Static Grid for Mobile */}
        <div className="grid grid-cols-2 md:hidden gap-4 mt-8">
          {clients.slice(0, 4).map((client, index) => (
            <motion.div
              key={`mobile-${client.name}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-20 rounded-xl bg-card border border-border flex items-center justify-center">
                <span className="text-2xl font-bold text-muted-foreground">
                  {client.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .animate-scroll {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
