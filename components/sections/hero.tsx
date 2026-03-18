"use client"

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { ArrowRight, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // Gentle spring physics for subtle parallax
  const springConfig = { damping: 40, stiffness: 80, mass: 0.8 }

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  // Very subtle movement ranges
  const bgX = useTransform(springX, [-0.5, 0.5], [-8, 8])
  const bgY = useTransform(springY, [-0.5, 0.5], [-8, 8])

  const orbX = useTransform(springX, [-0.5, 0.5], [-15, 15])
  const orbY = useTransform(springY, [-0.5, 0.5], [-15, 15])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to [-1, 1] range
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      mouseX.set(x)
      mouseY.set(y)
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Title for staggered animation
  const title = "Transform Your Ideas Into Powerful Software"
  const titleWords = title.split(" ")

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Subtle mouse-following glow */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.04) 0%, transparent 45%)`,
        }}
      />

      {/* Breathing background gradient with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ x: bgX, y: bgY }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5"
          animate={{
            scale: [1, 1.03, 1],
            opacity: [0.65, 0.85, 0.65],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Soft floating orbs with parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: orbX, y: orbY }}
      >
        <motion.div
          className="absolute top-[18%] left-[12%] w-[480px] h-[480px] bg-gradient-to-br from-primary/18 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[22%] right-[10%] w-[580px] h-[580px] bg-gradient-to-tl from-primary/12 via-indigo-400/8 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 35, 0],
            scale: [1, 1.09, 1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: 6,
          }}
        />
      </motion.div>

      {/* Main content – fully centered */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Staggered word animation */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.11 } },
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-balance"
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 38 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {word === "Powerful" ? (
                  <span className="text-primary">{word}</span>
                ) : (
                  word
                )}{" "}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We craft cutting-edge digital solutions that drive business growth.  
            From web applications to enterprise software, we bring your vision to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 group text-base px-8 py-6 min-w-[200px]"
            >
              Start Your Project
              <ArrowRight className="ml-2.5 w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#projects")}
              className="border-2 border-primary/40 text-base px-8 py-6 hover:bg-primary/5 hover:border-primary/60 transition-all duration-300 min-w-[200px]"
            >
              <Code2 className="mr-2.5 w-5 h-5" />
              View Our Work
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator – bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-12 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center pt-2"
        >
          <motion.div className="w-1.5 h-3 rounded-full bg-primary/80" />
        </motion.div>
      </motion.div>
    </section>
  )
}