"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Send, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "@emailjs/browser";
import { id } from "date-fns/locale"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

    useEffect(()=> {
      emailjs.init("jZQU_K7Z5Jj3iM9vZ");
    }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await emailjs.send(
        "service_4jhbtbl",
        "template_hwcxrkn",
        data,
        "jZQU_K7Z5Jj3iM9vZ"
      );

      console.log("✅ Email sent successfully!", response);

      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("❌ Failed to send email:", error);
    } finally {
      setIsLoading(false);
    }
};   
  

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Let&apos;s Start A <span className="text-primary">Project</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Ready to transform your ideas into reality? Get in touch with us and
            let&apos;s discuss how we can help your business grow.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Have a project in mind or just want to say hello? We&apos;d love to
                hear from you. Fill out the form or use our contact information
                below.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@dev09.com",
                  href: "mailto:hello@dev09.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+1 (555) 123-4567",
                  href: "tel:+15551234567",
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value: "123 Tech Street, San Francisco, CA 94105",
                  href: "#",
                },
              ].map((contact) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <contact.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="font-medium text-foreground">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-8 rounded-2xl bg-card border border-border">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We&apos;ll get back to you within 24
                    hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        
                        className="bg-secondary border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="bg-secondary border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      required
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      required
                      rows={5}
                      className="bg-secondary border-border focus:border-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
