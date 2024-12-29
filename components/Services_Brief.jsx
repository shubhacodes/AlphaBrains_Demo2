"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { RainbowButton } from "@/components/ui/rainbow-button";



export default function EducationServices({
  imageWidth = 450,  
  imageHeight = 256  
}) {
  const ref = useRef(null);

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
    <section ref={ref} className="w-full pb-6 md:py-16 lg:py-16 relative overflow-hidden">

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.h2 
            className="text-4xl font-bold tracking-tighter sm:text-5xl mt-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <span className="bg-gradient-to-r from-[#cb314e] via-[#4d5089] to-[#85599f] inline-block text-transparent bg-clip-text animate-rainbow-text">
              Empower Your Academic Journey
            </span>
          </motion.h2>
          <motion.p 
            className="max-w-[900px] text-[#393a62]/95 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            Good education comes from great guidance.
          </motion.p>
        </div>
        <motion.div 
          className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex flex-col items-start space-y-4" variants={itemVariants}>
            <div className="relative w-full h-64 overflow-hidden rounded-lg">
              <Image
                src="/counselling.png"
                alt="Academic Counselling"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <h3 className="text-2xl font-bold text-[#393a62]">Are you ready to unlock your full academic potential?</h3>
            <p className="text-[#393a62]/95 text-justify">
              With expert counselling, we provide the tools and strategies you need to enhance your academic journey and reach new heights.
            </p>
            <RainbowButton className="rounded-full bg-[#85599f] hover:bg-[#85599f]/90 text-white service-btn px-6 py-2">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight lg:text-lg">
                Read More   
              </span>
            </RainbowButton>
          </motion.div>
          <motion.div className="flex flex-col items-start space-y-4" variants={itemVariants}>
            <div className="relative w-full h-64 overflow-hidden rounded-lg">
              <Image
                src="/coaching.png"
                alt="Subject Coaching"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <h3 className="text-2xl font-bold text-[#393a62]">Ready to strengthen your fundamentals and conquer challenges?</h3>
            <p className="text-[#393a62]/95 text-justify">
            Experience subject coaching that builds skills, and ensures success through proven teaching methods and individual attention.
            </p>
            <RainbowButton className="rounded-full bg-[#85599f] hover:bg-[#85599f]/90 text-white service-btn px-6 py-2">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight lg:text-lg">
                Read More
              </span>
            </RainbowButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

