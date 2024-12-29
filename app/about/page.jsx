"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import ShinyButton from "@/components/ui/shiny-button";
import {
  BookOpen,
  Users,
  Target,
  Building,
  Award,
  Lightbulb,
  GraduationCap,
} from "lucide-react";

const colors = {
  red: "#c72229",
  purple: "#775090",
  blue: "#45487a",
  green: "#169e44",
};

// Define a reusable floating animation configuration
const floatingAnimationConfig = {
  y: [0, -20, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Floating Bubble Component - Creates individual animated circles
const FloatingBubble = ({ size, color, position, delay = 0 }) => {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-10"
      animate={{
        ...floatingAnimationConfig,
        transition: {
          ...floatingAnimationConfig.transition,
          delay: delay,
        },
      }}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        ...position,
      }}
    />
  );
};

// StatCard Component - Displays individual statistics
const StatCard = ({ number, label, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
    >
      <h3 className="text-3xl font-bold mb-2 text-white">{number}</h3>
      <p className="text-white/90">{label}</p>
    </motion.div>
  );
};

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Define the floating bubbles configuration
  const bubbles = [
    {
      size: 200,
      color: "#c72229",
      position: { top: "10%", left: "15%" },
      delay: 0,
    },
    {
      size: 300,
      color: "#775090",
      position: { top: "20%", right: "15%" },
      delay: 0.5,
    },
    {
      size: 250,
      color: "#45487a",
      position: { bottom: "10%", left: "30%" },
      delay: 1,
    },
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Header Section - Gradient Background */}
      <section className="relative py-24 lg:py-32 bg-[#c72229] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {bubbles.map((bubble, index) => (
            <FloatingBubble key={index} {...bubble} />
          ))}
        </div>

        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-white opacity-5 blur-3xl"
            animate={floatingAnimationConfig}
            style={{ top: "10%", left: "60%" }}
          />
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full bg-white opacity-5 blur-3xl"
            animate={floatingAnimationConfig}
            style={{ top: "40%", left: "20%" }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full bg-white opacity-5 blur-3xl"
            animate={floatingAnimationConfig}
            style={{ top: "70%", left: "70%" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
            About our Institution
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            A center of excellence dedicated to transformative education
          </p>
        </motion.div>
      </section>

      {/* Mission Section - White Background */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r  from-[#c72229] to-[#775090]  inline-block text-transparent bg-clip-text">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                At our institution, we transcend traditional education
                paradigms. Our commitment lies in cultivating critical thinking,
                nurturing confidence, and igniting a perpetual passion for
                knowledge.
              </p>
            </motion.div>

            <div className="relative h-[400px]">
              {[
                { color: "#c72229", delay: 0, text: "Critical Thinking" },
                { color: "#775090", delay: 0.2, text: "Innovation" },
                { color: "#45487a", delay: 0.4, text: "Excellence" },
              ].map((orb, index) => (
                <motion.div
                  key={index}
                  className="absolute w-32 h-32 rounded-full flex items-center justify-center cursor-pointer"
                  style={{
                    left: `${30 + index * 25}%`,
                    top: `${20 + index * 20}%`,
                    backgroundColor: `${orb.color}15`,
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ delay: orb.delay, duration: 0.3 }}
                >
                  <div className="text-sm font-medium text-gray-700">
                    {orb.text}
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ border: `2px solid ${orb.color}` }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Educational Philosophy - Gradient Background */}
      <section className="py-24 lg:py-32 bg-[#775090]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-white">
                Educational Philosophy
              </h2>
              <p className="text-lg text-white/90">
                Our institution stands at the forefront of educational
                innovation, embracing a methodology that combines traditional
                academic excellence with modern pedagogical approaches.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-6 h-6 text-white" />
                  <span className="text-white/90">Expert Faculty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-6 h-6 text-white" />
                  <span className="text-white/90">Innovation Focus</span>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "15+", label: "Years of Excellence" },
                { number: "1000+", label: "Student Success Stories" },
                { number: "50+", label: "Expert Educators" },
                { number: "95%", label: "Success Rate" },
              ].map((stat, index) => (
                <StatCard key={index} {...stat} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section - White Background */}
      {/* Founders Section - White Background */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#c72229] to-[#775090] inline-block text-transparent bg-clip-text"
          >
            Visionary Leadership
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Founder Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                {" "}
                {/* Added h-full */}
                <div className="flex flex-col items-center gap-6">
                  {" "}
                  {/* Removed md:flex-row to keep consistent layout */}
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#c72229]/10">
                    {" "}
                    {/* Standardized image size */}
                    <img
                      src="/blogpic/b2.jpeg"
                      alt="CA Anjali Agrawal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center">
                    {" "}
                    {/* Made all content centered */}
                    <h3 className="text-2xl font-bold text-[#c72229]">
                      CA Anjali Agrawal
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-600 mb-3">
                      Founder Director
                    </h4>
                    <div className="space-y-2">
                      <p className="text-gray-700">
                        24+ years of expertise in Finance & Accounting
                      </p>
                      <p className="text-gray-700">
                        Passionate about creating nurturing educational
                        environments
                      </p>
                      <p className="text-gray-700">
                        Leading strategic partnerships with premier institutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Founder Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                {" "}
                {/* Added h-full */}
                <div className="flex flex-col items-center gap-6">
                  {" "}
                  {/* Removed md:flex-row to keep consistent layout */}
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#775090]/10">
                    {" "}
                    {/* Standardized image size */}
                    <img
                      src="/blogpic/b4.png"
                      alt="Mehak D Thakur"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center">
                    {" "}
                    {/* Made all content centered */}
                    <h3 className="text-2xl font-bold text-[#775090]">
                      Mehak D Thakur
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-600 mb-3">
                      Founder Business Head
                    </h4>
                    <div className="space-y-2">
                      <p className="text-gray-700">
                        8+ years in Education & IT sectors
                      </p>
                      <p className="text-gray-700">
                        Established G D Goenka & Ramagya Schools
                      </p>
                      <p className="text-gray-700">
                        Driving innovation in educational methodology
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Gradient Background */}
      <section className="py-24 lg:py-32 bg-[#45487a]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Excellence",
                description:
                  "Rigorous academic standards and innovative teaching methodologies that foster deep understanding and critical thinking.",
                icon: Award,
              },
              {
                title: "Personal Growth",
                description:
                  "Focus on character development, leadership skills, and emotional intelligence to shape well-rounded individuals.",
                icon: Users,
              },
              {
                title: "Global Perspective",
                description:
                  "International curriculum elements that prepare students for success in an interconnected world.",
                icon: Target,
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-xl bg-white/10 backdrop-blur-sm">
                  <value.icon className="w-8 h-8 mb-4 text-white" />
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {value.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs & Facilities - White Background */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#c72229] to-[#775090] inline-block text-transparent bg-clip-text">
                Academic Programs
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: BookOpen,
                    title: "Comprehensive Curriculum",
                    description:
                      "Expert-designed programs covering all major academic subjects.",
                  },
                  {
                    icon: Target,
                    title: "Specialized Courses",
                    description:
                      "Advanced placement options and specialized tracks.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <item.icon className="w-6 h-6 text-[#775090] mt-1" />
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r  from-[#c72229] to-[#775090]  inline-block text-transparent bg-clip-text">
                Modern Facilities
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Building,
                    title: "State-of-the-Art Infrastructure",
                    description: "Modern classrooms and advanced laboratories.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Technology Integration",
                    description: "Digital learning tools and smart classrooms.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <item.icon className="w-6 h-6 text-[#775090] mt-1" />
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action - green Background */}
      <section className="py-24 lg:py-32 bg-[#169e44]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">Start Your Journey With Us</h2>
            <p className="text-xl opacity-90">
              Join our community of learners and discover your true potential
            </p>
            <ShinyButton className="px-8 py-3 bg-white text-[#cb314e] hover:bg-white/90 transition-colors">
              Schedule a Visit
            </ShinyButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
