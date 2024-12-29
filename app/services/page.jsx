"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceOrb from "./ServiceOrb";
import ServiceDetails from "./ServiceDetails";
import BackgroundAnimation from "./BackgroundAnimation";

const colors = {
  red: "#c72229",
  purple: "#775090",
  blue: "#45487a",
  green: "#169e44",
};

const services = [
  {
    icon: "tutoring",
    title: "CBSE/ICSE Tutoring",
    color: "red",
    shortDesc:
      "Expert Faculty • Individual Attention • Daily Practice • Homework Help • Tests & Analysis • Study Material • Parent Communication",
    details: [
      "Highly qualified teachers with 10+ years experience in CBSE/ICSE curriculum, ensuring thorough subject expertise",
      "Personalized attention through small batch sizes (max 8 students) and individual doubt-clearing sessions",
      "Structured daily practice with supervised classwork and targeted exercises for concept mastery",
      "Dedicated homework assistance with step-by-step guidance and verified solutions",
      "Weekly tests with detailed performance analysis and improvement strategies for each student",
      "Comprehensive study materials including notes, worksheets, and digital resources aligned with board patterns",
      "Regular parent updates through meetings and progress reports with actionable feedback",
    ],
  },
  {
    icon: "programming",
    title: "Programming & IELTS/TOEFL",
    color: "purple",
    shortDesc:
      "Coding Fundamentals • Project Work • Interview Prep • Language Skills • Mock Tests • Speaking Practice • Score Targeting",
    details: [
      "Step-by-step coding instruction in Python, Java, and web development with hands-on practice sessions",
      "Real-world project development under guidance, building portfolio-ready applications",
      "Technical interview preparation covering DSA, system design, and coding best practices",
      "Intensive language training focused on all IELTS/TOEFL modules with proven scoring strategies",
      "Regular mock tests simulating actual exam conditions with detailed feedback and scoring",
      "One-on-one speaking sessions with certified trainers focusing on pronunciation and fluency",
      "Targeted preparation plans designed to achieve desired band scores/points within set timeframes",
    ],
  },
  {
    icon: "language",
    title: "CUET Exam Preparation",
    color: "blue",
    shortDesc:
      "Domain Coverage • NTA Pattern • Mock Series • Strategy Sessions • Past Papers • Error Analysis • Time Management",
    details: [
      "Comprehensive coverage of all CUET domains including language, domain-specific, and general tests",
      "Specialized training in NTA question patterns and marking schemes for optimal performance",
      "Extensive mock test series covering full syllabus with section-wise performance analysis",
      "Strategic sessions on question selection, attempt order, and scoring techniques",
      "Thorough analysis of previous years' papers with expert insights on pattern changes",
      "Detailed error analysis reports identifying weak areas and improvement strategies",
      "Time management workshops with sector-wise allocation strategies and speed enhancement techniques",
    ],
  },
  {
    icon: "counselling",
    title: "Career Counselling (DMIT)",
    color: "green",
    shortDesc:
      "Fingerprint Analysis • Intelligence Mapping • Career Matching • Skill Assessment • Personal Guidance • Action Planning • Future Roadmap",
    details: [
      "Scientific fingerprint analysis using advanced DMIT technology to identify innate talents and potential",
      "Comprehensive mapping of multiple intelligences including logical, spatial, linguistic, and interpersonal abilities",
      "Data-driven career recommendations aligned with individual strengths and market demands",
      "Detailed assessment of current skills, interests, and areas requiring development",
      "One-on-one counseling sessions with certified career experts to discuss findings and options",
      "Structured action plan development with short-term and long-term career goals",
      "Detailed roadmap creation including education path, skill development, and career progression stages",
    ],
  },
];

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white overflow-hidden relative">
      <BackgroundAnimation isExpanded={expandedService !== null} />
      <div className="max-w-[calc(1400px/1.2)] mx-auto px-2 py-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c72229] via-[#775090] to-[#45487a]">
            Our Services
          </span>
        </motion.h1>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative"
              animate={{
                opacity:
                  expandedService === null || expandedService === index
                    ? 1
                    : 0.3,
                y:
                  expandedService !== null && expandedService < index ? 100 : 0,
              }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex flex-col lg:grid lg:grid-cols-[auto_300px_1fr] gap-8 items-center pl-4">
                <div className="w-full flex justify-center lg:justify-start">
                  <ServiceOrb
                    service={service}
                    isActive={expandedService === index}
                    onClick={() =>
                      setExpandedService(
                        expandedService === index ? null : index
                      )
                    }
                  />
                </div>

                <motion.h3
                  className="text-2xl font-bold text-center lg:text-left w-full"
                  style={{ color: colors[service.color] }}
                  animate={{
                    scale: expandedService === index ? 1.1 : 1,
                    originX: 0,
                  }}
                >
                  {service.title}
                </motion.h3>

                <motion.div
                  animate={{
                    opacity: expandedService === index ? 0 : 1,
                  }}
                  className="flex flex-wrap gap-2.5 justify-center lg:justify-start w-full lg:min-w-[600px]"
                >
                  {service.shortDesc.split(" • ").map((point, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap
                      ${
                        service.color === "red"
                          ? "bg-red-50 text-[#c72229]"
                          : ""
                      }
                      ${
                        service.color === "purple"
                          ? "bg-purple-50 text-[#775090]"
                          : ""
                      }
                      ${
                        service.color === "blue"
                          ? "bg-blue-50 text-[#45487a]"
                          : ""
                      }
                      ${
                        service.color === "green"
                          ? "bg-green-50 text-[#169e44]"
                          : ""
                      }
                      hover:bg-opacity-75 transition-colors duration-300`}
                    >
                      {point}
                    </span>
                  ))}
                </motion.div>
              </div>

              <ServiceDetails
                service={service}
                isExpanded={expandedService === index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
