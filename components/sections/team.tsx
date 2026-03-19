"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Team data
const team = [
  // your original team array here (9 members)
  // ... paste all 9 objects ...
  {
    name: "Dinuka Lakmal",
    role: "CEO & Founder",
    description: "Visionary leader with 15+ years in tech...",
    image: "https://res.cloudinary.com/dgokbm0dx/image/upload/v1770409646/rq7g6nas7gyyjzbftwh4.jpg",
    social: { github: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Dinuka Lakmal",
    role: "CEO & Founder",
    description: "Visionary leader with 15+ years in tech...",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    social: { github: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Sumuditha Janith",
    role: "Full Stack Developer",
    description: "A strong contributor with great team spirit, building solutions using modern technologies like React, Node.js, and MongoDB.",
    image: "https://res.cloudinary.com/dgokbm0dx/image/upload/v1773953483/WhatsApp_Image_2026-03-20_at_2.20.37_AM_dc9w4j.jpg",
    social: { github: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Dinuka Lakmal",
    role: "CEO & Founder",
    description: "Visionary leader with 15+ years in tech...",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    social: { github: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Dinuka Lakmal",
    role: "CEO & Founder",
    description: "Visionary leader with 15+ years in tech...",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    social: { github: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Dinuka Lakmal",
    role: "CEO & Founder",
    description: "Visionary leader with 15+ years in tech...",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    social: { github: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Dinuka Lakmal",
    role: "CEO & Founder",
    description: "Visionary leader with 15+ years in tech...",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    social: { github: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Dinuka Lakmal",
    role: "CEO & Founder",
    description: "Visionary leader with 15+ years in tech...",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    social: { github: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Dinuka Lakmal",
    role: "CEO & Founder",
    description: "Visionary leader with 15+ years in tech...",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    social: { github: "#", facebook: "#", instagram: "#", linkedin: "#" },
  }
]

// ────────────────────────────────────────────────

const TeamCard = ({ member }: { member: (typeof team)[number] }) => {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[340px] lg:w-[380px] px-3 md:px-4">
      <div className="h-full p-6 rounded-2xl bg-card border border-border text-center transition-all duration-400 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-2 group">
        <div className="relative w-28 h-28 mx-auto mb-6 overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/50 to-transparent p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-card">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
        <p className="text-primary font-medium mb-4">{member.role}</p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
          {member.description}
        </p>

        <div className="flex justify-center gap-4">
          {["Github", "Facebook", "Instagram", "Linkedin"].map((name, i) => {
            const Icon = require("lucide-react")[name as keyof typeof import("lucide-react")]
            return (
              <a
                key={i}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-secondary/70 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label={`${name} profile`}
              >
                <Icon className="w-5 h-5" />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ────────────────────────────────────────────────

export function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)

  // Update items per view based on screen size
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth >= 1024) return setItemsPerView(3)
      if (window.innerWidth >= 640) return setItemsPerView(2)
      return setItemsPerView(1)
    }

    updateItems()
    window.addEventListener("resize", updateItems)
    return () => window.removeEventListener("resize", updateItems)
  }, [])

  const totalSlides = Math.ceil(team.length / itemsPerView)
  const maxIndex = totalSlides - 1

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(maxIndex, index)))
  }

  const prevSlide = () => goToSlide(currentIndex - 1)
  const nextSlide = () => goToSlide(currentIndex + 1)

  return (
    <section className="py-20 bg-secondary/20 relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto  bg-amber-300 md:mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5">
            Meet The <span className="text-primary">Experts</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            A passionate group of professionals committed to turning ideas into world-class digital products.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-4 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-4 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider content */}
          <div className="overflow-hidden pt-2">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIdx) => {
                const start = slideIdx * itemsPerView
                const end = start + itemsPerView
                const slideMembers = team.slice(start, end)

                return (
                  <div
                    key={slideIdx}
                    className="flex min-w-full"
                    style={{ width: "100%" }}
                  >
                    {slideMembers.map((member, cardIdx) => (
                      <TeamCard
                        key={`${member.name}-${start + cardIdx}`}
                        member={member}
                      />
                    ))}
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Dots – active bright red, inactive dark red */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-3.5 mt-10 md:mt-12">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`
                    w-10 h-1.5 rounded-full transition-all duration-400 ease-in-out cursor-pointer
                    ${
                      idx === currentIndex
                        ? "bg-red-600 scale-125 shadow-md shadow-red-500/40 ring-1 ring-red-400/20"
                        : "bg-red-950/70 hover:bg-red-800/80 hover:scale-110"
                    }
                  `}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}