"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "MYBIZ – Complete Business Management Solution",
    category: "E-commerce",
    description:
      "MYBIZ – Complete Business Management Solution \nIt's a powerful and user-friendly business management application designed to streamline daily business operations. Built for entrepreneurs, small businesses, and growing enterprises, MYBIZ helps you manage your business efficiently from a single platform.",
    image: "https://res.cloudinary.com/dgokbm0dx/image/upload/v1774279949/MY_BIZ_App_banner_qurmal.jpg",
    tags: ["React native", "Expo", "Fierbase", "NativeWind"],
  },
  {
    title: "GearLog - Smart Vehicle Maintenance & Expense Tracker",
    category: "Productivity",
    description:
      "GearLog is a comprehensive mobile application designed to simplify vehicle ownership. It allows users to track maintenance records, monitor fuel costs, manage vehicle documents, and receive timely reminders for services and insurance renewals. Built for performance and reliability using React Native (Expo) and Firebase. Copyright © 2026 Dilshan Hesara. All Rights Reserved.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    tags: ["React Native", "Expo", "Firebase", "TypeScript", "TailwindCSS"],
  },
  {
    title: "MKD-Cinemas-Complete-Cinema-Management-System",
    category: "E-commerce",
    description:
      "A comprehensive, full-stack web application designed for modern cinema management. This system features a seamless Customer Booking Portal, a powerful Super Admin Dashboard for resource management, and a Receptionist POS for handling counter sales and shift reports.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    tags: ["MongoDB", "Express", "React", "Node"],
  },
  {
    title: "Dilshan Coconut Oil Mill Management System",
    category: "Logistics",
    description:
      "Real-time fleet management and logistics optimization system with GPS tracking and route planning.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    tags: ["React Native", "Go", "PostgreSQL", "Maps API"],
  },
  {
    title: "Library Management System",
    category: "E-commerce",
    description:
      "Gnanapradeepa Public Library This is a Java-based Library Management System developed for Gnanapradeepa Public Library, Bandaragama. The system follows a layered architecture and provides efficient management of library operations.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["Next.js", "Stripe", "Elasticsearch", "ML"],
  },
  {
    title: "TaskMaster Pro",
    category: "Productivity",
    description:
      "Enterprise project management tool with team collaboration, time tracking, and resource allocation.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    tags: ["Angular", "NestJS", "GraphQL", "Azure"],
  },
  {
    title: "SecurePay",
    category: "Fintech",
    description:
      "Advanced payment processing platform with AI fraud prevention, instant transfers, and global currency support.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b273d2?w=600&h=400&fit=crop",
    tags: ["Next.js", "Node.js", "Stripe", "TensorFlow"],
  },
  {
    title: "WellnessTrack",
    category: "Healthcare",
    description:
      "AI-powered wellness platform for remote patient monitoring, personalized health plans, and telemedicine integration.",
    image: "https://images.unsplash.com/photo-1559757148-5e995136c7b2?w=600&h=400&fit=crop",
    tags: ["React Native", "Firebase", "Machine Learning", "IoT"],
  },
  {
    title: "LearnForge",
    category: "Education",
    description:
      "Innovative learning management system with AI-powered tutoring, interactive simulations, and global student collaboration.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
    tags: ["Vue.js", "Flask", "WebSockets", "AI"],
  },
]

const categories = ["All", "Fintech", "Healthcare", "Education", "Logistics", "E-commerce", "Productivity"]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState("All")
  const [showAll, setShowAll] = useState(false)

  // Reset to first 6 cards whenever the filter changes
  useEffect(() => {
    setShowAll(false)
  }, [activeFilter])

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6)

  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Explore our latest work and see how we have helped businesses achieve
            their digital goals.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category)}
              className={
                activeFilter === category
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid – Only 6 shown initially */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/50 shadow-md hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="w-9 h-9 rounded-full bg-background/90 hover:bg-background backdrop-blur-md border border-white/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="w-9 h-9 rounded-full bg-background/90 hover:bg-background backdrop-blur-md border border-white/20"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-secondary/80 text-secondary-foreground rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button – visible when there are more than 6 projects and not showing all */}
        {!showAll && filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <Button
              onClick={() => setShowAll(true)}
              size="lg"
              variant="outline"
              className="px-10 py-6 text-base font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-destructive hover:text-destructive-foreground"
            >
              Show More Projects
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        )}

        {/* Show Less Button – visible when showing all and there are more than 6 projects */}
        {showAll && filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <Button
              onClick={() => setShowAll(false)}
              size="lg"
              variant="outline"
              className="px-10 py-6 text-base font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-destructive hover:text-destructive-foreground"
            >
              Show Less
              <ChevronUp className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}