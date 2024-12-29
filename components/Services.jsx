"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";
import { motion, useInView } from 'framer-motion';
import { RainbowButton } from "@/components/ui/rainbow-button";

const Services = ({ 
  imageWidth = 450,
  imageHeight = 423
}) => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#4d5089");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#4d5089");
  }, [resolvedTheme]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-16 bg-gray-25">
      <div className="container mx-auto px-4">
        <motion.div 
          className="space-y-24 flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="w-full max-w-7xl">
            <div className="flex flex-col md:flex-row items-center gap-8 relative">
              <div className="w-full md:w-1/2 relative">
                <div className="relative flex items-center justify-center w-full">
                  <Image
                    src="/counselling.png"
                    alt="Counselling Services"
                    width={imageWidth}
                    height={imageHeight}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <Particles
                  className="absolute inset-0 pointer-events-none"
                  quantity={20}
                  ease={100}
                  color={color}
                  refresh={false}
                  size={1.0}
                />
                <div className="relative z-10">
                  <h3 className="text-2xl text-black font-bold mb-2">Educational Counselling</h3>
                  <p className="text-black text-md mb-4">Helping students understand their potential.</p>
                  <p className="text-black text-justify mb-4">
                    We offer complete guidance for students through our detailed assessment programs. Our services include:
                  </p>
                  <ol className="space-y-2 text-black text-justify mb-6">
                    <li>1. <span className="font-bold">Psychometric Assessments:</span> Personalized tests that help understand your learning style, interests, and strengths</li>
                    <li>2. <span className="font-bold">DMIT Analysis:</span> Modern brain mapping technique to identify natural talents and learning patterns</li>
                    <li>3. <span className="font-bold">Complete Assessment Package:</span> A thorough evaluation that covers personality traits, career interests, and academic abilities</li>
                  </ol>
                  <RainbowButton className="rounded-full bg-[#2e2e4e] hover:bg-[#2e2e4e]/90 text-white service-btn px-6 py-2">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight lg:text-lg">
                      Read More   
                    </span>
                  </RainbowButton>
                </div>
              </div>
            </div>
          </motion.div>
        
          <motion.div variants={itemVariants} className="w-full max-w-7xl">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 relative">
              <div className="w-full md:w-1/2 relative">
                <div className="relative flex items-center justify-center w-full">
                  <Image
                    src="/coaching.png"
                    alt="Coaching Services"
                    width={imageWidth}
                    height={imageHeight}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <Particles
                  className="absolute inset-0 pointer-events-none"
                  quantity={20}
                  ease={100}
                  color={color}
                  refresh={false}
                  size={1.0}
                />
                <div className="relative z-10">
                  <h3 className="text-2xl text-black font-bold mb-2">Academic Coaching</h3>
                  <p className="text-black text-md mb-4">Supporting students from classes 4th to 12th</p>
                  <p className="text-black text-justify mb-4">
                    We provide comprehensive academic support for CBSE and ICSE board students. Our coaching program features:
                  </p>
                  <ol className="space-y-2 text-black text-justify mb-6">
                    <li>1. <span className="font-bold">All Subjects Coverage:</span> Expert teaching in Mathematics, Science, English, Social Studies, and other core subjects</li>
                    <li>2. <span className="font-bold">Board-Specific Approach:</span> Tailored teaching methods aligned with CBSE and ICSE curriculum requirements</li>
                    <li>3. <span className="font-bold">Regular Progress Tracking:</span> Continuous assessment and feedback to ensure steady improvement</li>
                  </ol>
                  <RainbowButton className="rounded-full bg-[#2e2e4e] hover:bg-[#2e2e4e]/90 text-white service-btn px-6 py-2">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight lg:text-lg">
                      Read More
                    </span>
                  </RainbowButton>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;