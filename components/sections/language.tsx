"use client"

import { motion, useAnimationControls } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"

// All technologies with correct slugs for Simple Icons CDN
const technologies = [
  { name: "Java", slug: "java" },
  { name: "Python", slug: "python" },
  { name: "React", slug: "react" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Express", slug: "express" },
  { name: "JavaScript", slug: "javascript" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css3" },
  { name: "Expo", slug: "expo" },
  { name: "Spring", slug: "spring" },
  { name: "Hibernate", slug: "hibernate" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "MySQL", slug: "mysql" },
  { name: "Bootstrap", slug: "bootstrap" },
  { name: "Unity", slug: "unity" },
  { name: "C#", slug: "csharp" },
  { name: "JavaEE", slug: "java" },        // Uses same Java icon
  { name: "Firebase", slug: "firebase" },
  { name: "GitHub", slug: "github" },
  { name: "JWT", slug: "jsonwebtokens" },
  { name: "Cloudinary", slug: "cloudinary" },
  { name: "Docker", slug: "docker" },
]

export function LanguagesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const controls = useAnimationControls()
  const marqueeRef = useRef<HTMLDivElement>(null)

  // Infinite reverse scroll (left ↔ right)
  useEffect(() => {
    const animateMarquee = async () => {
      if (!marqueeRef.current) return

      // Width of one complete set
      const width = marqueeRef.current.scrollWidth / 2

      await controls.start({
        x: [-0, -width, 0], // go left, then back right
        transition: {
          duration: 30,      // 30 seconds for full cycle (left + right)
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop", // we use an array to define the keyframes
        },
      })
    }

    animateMarquee()
  }, [controls])

  // Pause on hover
  const handleHoverStart = () => controls.stop()
  const handleHoverEnd = () => {
    if (!marqueeRef.current) return
    const width = marqueeRef.current.scrollWidth / 2
    controls.start({
      x: [-0, -width, 0],
      transition: {
        duration: 70,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    })
  }

  return (
    <section className="bg-background relative py-12">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Infinite Marquee */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <motion.div
            ref={marqueeRef}
            animate={controls}
            className="flex gap-6 md:gap-8 whitespace-nowrap"
            initial={{ x: 0 }}
          >
            {/* First set */}
            {technologies.map((tech) => (
              <div key={tech.name} className="flex-shrink-0">
                <div className="w-36 h-16 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:shadow-md transition-all duration-300 group">
                  <div className="text-center flex flex-col items-center">
                    <img
                      src={`https://cdn.simpleicons.org/${tech.slug}/white`}
                      alt={tech.name}
                      className="w-6 h-6 mb-1 transition-transform group-hover:scale-110"
                      loading="lazy"
                    />
                    <span className="text-[10px] text-muted-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {technologies.map((tech) => (
              <div key={`dup-${tech.name}`} className="flex-shrink-0">
                <div className="w-36 h-16 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:shadow-md transition-all duration-300 group">
                  <div className="text-center flex flex-col items-center">
                    <img
                      src={`https://cdn.simpleicons.org/${tech.slug}/white`}
                      alt={tech.name}
                      className="w-6 h-6 mb-1 transition-transform group-hover:scale-110"
                      loading="lazy"
                    />
                    <span className="text-[10px] text-muted-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile fallback – static grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:hidden gap-3 mt-8">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.02 }}
            >
              <div className="h-16 rounded-lg bg-card border border-border flex items-center justify-center shadow-sm">
                <div className="text-center flex flex-col items-center">
                  <img
                    src={`https://cdn.simpleicons.org/${tech.slug}/white`}
                    alt={tech.name}
                    className="w-5 h-5 mb-1"
                    loading="lazy"
                  />
                  <span className="text-[9px] text-muted-foreground">
                    {tech.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}