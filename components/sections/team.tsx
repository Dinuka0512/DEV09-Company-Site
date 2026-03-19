"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Team data
const team = [
  {
    name: "Dinuka Lakmal",
    role: "CEO & Founder",
    description: "Visionary leader with 15+ years in tech. Passionate about building innovative solutions that transform businesses.",
    image: "https://res.cloudinary.com/dgokbm0dx/image/upload/v1770409646/rq7g6nas7gyyjzbftwh4.jpg",
  },
  {
    name: "Hiruna Fernando",
    role: "Co-Founder",
    description: "Visionary leader with 15+ years in tech. Passionate about building innovative solutions that transform businesses.",
    image: "https://res.cloudinary.com/dgokbm0dx/image/upload/v1770409646/rq7g6nas7gyyjzbftwh4.jpg",
  },
  {
    name: "Sumuditha Janith",
    role: "Full Stack Developer",
    description: "A strong contributor with great team spirit, building solutions using modern technologies like React, Node.js, and MongoDB.",
    image: "https://res.cloudinary.com/dgokbm0dx/image/upload/v1773953483/WhatsApp_Image_2026-03-20_at_2.20.37_AM_dc9w4j.jpg",
  },
  {
    name: "Dilshan Hesara",
    role: "Full Stack Developer",
    description: "A strong contributor with great team spirit, building solutions using modern technologies like React, Node.js, and MongoDB.",
    image: "https://res.cloudinary.com/dgokbm0dx/image/upload/v1773953483/WhatsApp_Image_2026-03-20_at_2.20.37_AM_dc9w4j.jpg",
  },
  {
    name: "Akila Peris",
    role: "Front Developer",
    description: "A strong contributor with great team spirit, building solutions using modern technologies like React, Node.js, and MongoDB.",
    image: "https://res.cloudinary.com/dgokbm0dx/image/upload/v1773953483/WhatsApp_Image_2026-03-20_at_2.20.37_AM_dc9w4j.jpg",
  },
  {
    name: "Chamindu Chirantha",
    role: "Front Developer",
    description: "A strong contributor with great team spirit, building solutions using modern technologies like React, Node.js, and MongoDB.",
    image: "https://res.cloudinary.com/dgokbm0dx/image/upload/v1773953483/WhatsApp_Image_2026-03-20_at_2.20.37_AM_dc9w4j.jpg",
  },
  {
    name: "Sachindu Sooriya Arachchi",
    role: "BackEnd Developer",
    description: "A strong contributor with great team spirit, building solutions using modern technologies like React, Node.js, and MongoDB.",
    image: "https://res.cloudinary.com/dgokbm0dx/image/upload/v1773953483/WhatsApp_Image_2026-03-20_at_2.20.37_AM_dc9w4j.jpg",
  },
  {
    name: "Ayusha Vijerathna",
    role: "UI/UX Designer",
    description: "A strong contributor with great team spirit, building solutions using modern technologies like React, Node.js, and MongoDB.",
    image: "https://res.cloudinary.com/dgokbm0dx/image/upload/v1773953483/WhatsApp_Image_2026-03-20_at_2.20.37_AM_dc9w4j.jpg",
  },
  {
    name: "Vindya Madubashini",
    role: "UI/UX Designer",
    description: "A strong contributor with great team spirit, building solutions using modern technologies like React, Node.js, and MongoDB.",
    image: "https://res.cloudinary.com/dgokbm0dx/image/upload/v1773953483/WhatsApp_Image_2026-03-20_at_2.20.37_AM_dc9w4j.jpg",
  },
]

// ────────────────────────────────────────────────

const TeamCard = ({ member }: { member: (typeof team)[number] }) => {
  return (
    <div className="flex-shrink-0 w-[85vw] max-w-[320px] sm:w-[46vw] sm:max-w-[340px] lg:w-[31vw] lg:max-w-[380px] px-2 sm:px-3 lg:px-4">
      <div className="h-full p-5 sm:p-6 rounded-2xl bg-card border border-border text-center transition-all duration-400 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 group">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-5 sm:mb-6 overflow-hidden">
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

        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 truncate">
          {member.name}
        </h3>
        <p className="text-primary font-medium text-sm sm:text-base mb-3 sm:mb-4">
          {member.role}
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-4 sm:line-clamp-3">
          {member.description}
        </p>
      </div>
    </div>
  )
}

// ────────────────────────────────────────────────

export function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth
      if (width >= 1024) {
        setItemsPerView(3)   // desktop / large laptop
      } else if (width >= 640) {
        setItemsPerView(2)   // tablet / small laptop
      } else {
        setItemsPerView(1)   // mobile
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  const totalSlides = Math.ceil(team.length / itemsPerView)
  const maxIndex = totalSlides - 1

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(maxIndex, index)))
  }

  const prevSlide = () => goToSlide(currentIndex - 1)
  const nextSlide = () => goToSlide(currentIndex + 1)

  const isMobile = itemsPerView === 1

  return (
    <section className="py-16 sm:py-20 bg-secondary/20 relative overflow-hidden">
      {/* Optional decorative lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight">
            Meet The <span className="text-primary">Experts</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-2 sm:px-0">
            A passionate group of professionals committed to turning ideas into world-class digital products.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Arrows – hidden on mobile */}
          {!isMobile && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute -left-2 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground disabled:opacity-40 disabled:hover:bg-background/80 transition-all shadow-md"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                className="absolute -right-2 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground disabled:opacity-40 disabled:hover:bg-background/80 transition-all shadow-md"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}

          {/* Slider content */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIdx) => {
                const start = slideIdx * itemsPerView
                const end = start + itemsPerView
                const slideMembers = team.slice(start, end)

                return (
                  <div
                    key={slideIdx}
                    className="flex min-w-full justify-center gap-4 sm:gap-6 lg:gap-8 px-1 sm:px-2"
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

          {/* Dots navigation */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 lg:mt-12">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`
                    h-2.5 sm:h-3 rounded-full transition-all duration-400 cursor-pointer
                    min-w-[2.5rem] sm:min-w-[3rem] lg:min-w-[3.5rem]
                    ${
                      idx === currentIndex
                        ? "bg-red-600 shadow-md shadow-red-500/50"
                        : "bg-red-950/70 hover:bg-red-800/80 active:bg-red-700"
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