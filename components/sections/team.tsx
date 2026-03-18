"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Facebook, Instagram, Linkedin } from "lucide-react"

const team = [
  {
    name: "Dinuka Lakmal",
    role: "CEO & Founder",
    description:
      "Visionary leader with 15+ years in tech. Passionate about building innovative solutions that transform businesses.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    social: {
      github: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    description:
      "Full-stack architect with expertise in cloud and AI. Leads our technical strategy and innovation initiatives.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    social: {
      github: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Michael Park",
    role: "Lead Developer",
    description:
      "Senior engineer specializing in scalable systems. 10+ years building enterprise-grade applications.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    social: {
      github: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Emily Davis",
    role: "Design Lead",
    description:
      "Creative director crafting beautiful user experiences. Award-winning designer with a passion for accessibility.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    social: {
      github: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Sachindu Charas",
    role: "DevOps Engineer",
    description:
      "Infrastructure specialist ensuring 99.99% uptime. Expert in CI/CD, Kubernetes, and cloud platforms.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    social: {
      github: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Lisa Wang",
    role: "Project Manager",
    description:
      "Agile certified PM with exceptional organizational skills. Ensures projects are delivered on time and within budget.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
    social: {
      github: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  // New members
  {
    name: "Alex Chen",
    role: "Marketing Director",
    description:
      "Strategic marketer with a knack for storytelling. Drives brand growth and market expansion through data-driven campaigns.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
    social: {
      github: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Maria Garcia",
    role: "Customer Success Manager",
    description:
      "Dedicated to client satisfaction and long-term partnerships. Ensures every customer achieves their goals with our solutions.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop&crop=face",
    social: {
      github: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "David Kim",
    role: "Data Scientist",
    description:
      "AI/ML expert turning complex data into actionable insights. Develops predictive models that drive business intelligence.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
    social: {
      github: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
]

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="team" className="py-24 bg-secondary/30 relative overflow-hidden">
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
            Our Team
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Meet The <span className="text-primary">Experts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Our talented team of professionals is dedicated to delivering excellence
            in every project we undertake.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border text-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  {/* Profile Image */}
                  <div className="relative w-28 h-28 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/50 p-[3px]">
                      <div className="w-full h-full rounded-full overflow-hidden bg-card">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Name and Role */}
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.role}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {/* Social Icons */}
                  <div className="flex justify-center gap-3">
                    {[
                      { icon: Github, href: member.social.github },
                      { icon: Facebook, href: member.social.facebook },
                      { icon: Instagram, href: member.social.instagram },
                      { icon: Linkedin, href: member.social.linkedin },
                    ].map(({ icon: Icon, href }, i) => (
                      <motion.a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}