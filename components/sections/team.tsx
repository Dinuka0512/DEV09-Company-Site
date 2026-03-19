"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Github, Facebook, Instagram, Linkedin } from "lucide-react"

const team = [
  {
    name: "Dinuka Lakmal",
    role: "CEO & Founder",
    description:
      "Visionary leader with 15+ years in tech. Passionate about building innovative solutions that transform businesses.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    social: { github: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    description:
      "Full-stack architect with expertise in cloud and AI. Leads our technical strategy and innovation initiatives.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    social: { github: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Michael Park",
    role: "Lead Developer",
    description:
      "Senior engineer specializing in scalable systems. 10+ years building enterprise-grade applications.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    social: { github: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Emily Davis",
    role: "Design Lead",
    description:
      "Creative director crafting beautiful user experiences. Award-winning designer with a passion for accessibility.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    social: { github: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Sachindu Charas II",
    role: "DevOps Engineer",
    description:
      "Infrastructure specialist ensuring 99.99% uptime. Expert in CI/CD, Kubernetes, and cloud platforms.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    social: { github: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Lisa Wang",
    role: "Project Manager",
    description:
      "Agile certified PM with exceptional organizational skills. Ensures projects are delivered on time and within budget.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
    social: { github: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Alex Chen",
    role: "Marketing Director",
    description:
      "Strategic marketer with a knack for storytelling. Drives brand growth and market expansion through data-driven campaigns.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
    social: { github: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Maria Garcia",
    role: "Customer Success Manager",
    description:
      "Dedicated to client satisfaction and long-term partnerships. Ensures every customer achieves their goals with our solutions.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop&crop=face",
    social: { github: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "David Kim",
    role: "Data Scientist",
    description:
      "AI/ML expert turning complex data into actionable insights. Develops predictive models that drive business intelligence.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
    social: { github: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
]

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  )
}

const TeamCard = ({ member, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.08 }}
  >
    <div className="p-6 rounded-2xl bg-card border text-center hover:shadow-xl hover:-translate-y-2 transition">
      <img
        src={member.image}
        className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-bold">{member.name}</h3>
      <p className="text-primary mb-3">{member.role}</p>
      <p className="text-sm text-muted-foreground mb-4">{member.description}</p>

      <div className="flex justify-center gap-3">
        {[Github, Facebook, Instagram, Linkedin].map((Icon, i) => (
          <Icon key={i} className="w-5 h-5 cursor-pointer" />
        ))}
      </div>
    </div>
  </motion.div>
)

export function TeamSection() {
  const sectionRef = useRef(null)
  const carouselRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  const cardsPerSlide = 3
  const slides = chunkArray(team, cardsPerSlide)
  const slideCount = slides.length

  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(slideCount - 1) * 100}%`]
  )

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            Meet Our <span className="text-primary">Team</span>
          </h2>
        </motion.div>

        {/* Horizontal Scroll Section */}
        <div
          ref={carouselRef}
          style={{ height: `${slideCount * 100}vh` }} // ✅ FIXED
        >
          <div className="sticky bgye top-0 h-screen flex items-center overflow-hidden">
            <motion.div style={{ x }} className="flex w-full">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
                >
                  {slide.map((member, idx) => (
                    <TeamCard
                      key={member.name}
                      member={member}
                      index={idx}
                    />
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}