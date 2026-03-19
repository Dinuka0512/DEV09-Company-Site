"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Facebook, Instagram, Linkedin } from "lucide-react"

// Team data (same as before)
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

// Individual card component with fade‑in animation
const TeamCard = ({ member, index }: { member: typeof team[0]; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-full p-6 rounded-2xl bg-card border border-border text-center transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
        <div className="relative w-28 h-28 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/40 p-1">
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
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {member.description}
        </p>

        <div className="flex justify-center gap-4">
          {[Github, Facebook, Instagram, Linkedin].map((Icon, i) => (
            <a
              key={i}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function TeamSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Decorative lines (optional) */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Our Team
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Meet The <span className="text-primary">Experts</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our talented team of professionals is dedicated to delivering excellence
            in every project we undertake.
          </p>
        </motion.div>

        {/* Responsive Grid – 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}