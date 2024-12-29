'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Class 11th Student",
    image: "/reviews/girl1.png?height=64&width=64",
    quote: "The teachers at Alpha Brains helped me understand complex Physics and Chemistry concepts clearly. My grades have improved a lot, and I feel more confident about my upcoming board exams."
  },
  {
    name: "Arjun Patel",
    role: "Class 10th Student",
    image: "/reviews/guy1.png?height=64&width=64",
    quote: "I was struggling with Maths, but after joining Alpha Brains, everything became easier to understand. The practice questions really helped me prepare for my board exams."
  },
  {
    name: "Neha Reddy",
    role: "Class 8th Student",
    image: "/reviews/girl2.png?height=64&width=64",
    quote: "I love how the teachers explain things with fun examples. Science has become my favorite subject now! The online classes are very interactive and interesting. 10/10 rating!"
  },
  {
    name: "Aditya Kumar",
    role: "Class 10th Student",
    image: "/reviews/guy2.png?height=64&width=64",
    quote: "The study materials and mock tests at Alpha Brains are really helpful. I feel much more prepared for my boards now. The teachers are always there for support."
  },
  {
    name: "Anjali Iyer",
    role: "Class 9th Student",
    image: "/reviews/girl3.png?height=64&width=64",
    quote: "Before joining Alpha Brains, I found it hard to keep up in class. Now I understand all my subjects better, especially Math and Science. 10/10!"
  },
  {
    name: "Rohan Malhotra",
    role: "Class 11th Student",
    image: "/reviews/guy3.png?height=64&width=64",
    quote: "The course preparation course here is excellent. The teachers break down complex topics into simple parts. The weekly tests help me track my progress regularly."
  }
]

export default function AnimatedReviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section 
      ref={ref} 
      className="pb-16 px-4 md:px-6 bg-white pt-16 relative overflow-hidden"
    >
      {/* Oval shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#680d9d] opacity-4 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#680d9d] opacity-10 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h4 className="text-md font-bold text-[#393a62] mb-2">Testimonials</h4>
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#cb314e] via-[#4d5089] to-[#85599f]  inline-block text-transparent bg-clip-text animate-rainbow-text">
            What our Students Say
              </span>
          </h2>
          <p className="text-[#4d5089]">
            Learning at Alpha Brains has made us feel more confident and helped us to achieve our goals.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="p-6 shadow-md bg-white">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-#393a62">
                  "{testimonial.quote}"
                </blockquote>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}