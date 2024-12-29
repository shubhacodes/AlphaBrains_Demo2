import React from 'react'
import Image from 'next/image'
import WordRotate from "@/components/ui/word-rotate"
import { BorderBeam } from "@/components/ui/border-beam"
import { RainbowButton } from "@/components/ui/rainbow-button"

const Hero = ({ photoOffsetY = 0 }) => {
  const colors = {
    red: '#c72229',
    purple: '#775090',
    blue: '#45487a',
    green: '#169e44',
    white: '#f8f8f8'
  }

  const gradientStyle = {
    background: `
      radial-gradient(circle at 30% 20%, ${colors.red} 0%, transparent 40%),
      radial-gradient(circle at 70% 60%, ${colors.purple} 0%, transparent 45%),
      radial-gradient(circle at 40% 80%, ${colors.blue} 0%, transparent 40%),
      radial-gradient(circle at 80% 30%, ${colors.green} 0%, transparent 20%),
      radial-gradient(circle at 20% 50%, ${colors.white} 0%, transparent 35%),
      radial-gradient(circle at 90% 80%, ${colors.red} 0%, transparent 40%),
      radial-gradient(circle at 10% 90%, ${colors.purple} 0%, transparent 45%),
      linear-gradient(135deg, ${colors.red} 0%, ${colors.purple} 30%, ${colors.blue} 60%, ${colors.green} 85%, ${colors.white} 100%)
    `,
    backgroundColor: colors.purple
  }

  return (
    <div className="relative min-h-[550px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-screen flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0" style={gradientStyle} />
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/10">
        <Image
          src="/hero_bg_7.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="sm:object-center object-right-top mix-blend-overlay opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 py-8 sm:py-12 md:py-16">
        {/* Text Content - Left side */}
        <div className="w-full md:w-1/2 text-white space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight flex flex-col gap-2">
            <span>Welcome to</span>
            <span>AlphaBrains,</span>
            <span>India's best</span>
            <div className="flex items-center">
              <div className="inline-flex items-center">
                <div className="w-[153px] sm:w-[187px] md:w-[221px] lg:w-[255px]">
              <WordRotate 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black inline-block h-[1.2em]" 
                    words={[
                      "Coaching",
                      "Counselling"
                    ]}
                  />
                </div>
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Centre</span>
              </div>
            </div>
          </h1>
          <p className="text-base text-black sm:text-md md:text-lg lg:text-xl max-w-2xl">
            Experience the joy of learning with Alpha Brains. Our expert tutors and personalized learning plans ensure you achieve your goals.
          </p>
          <div className="pt-2">
            <RainbowButton className="rounded-full bg-white hover:bg-white/90 text-white service-btn px-6 py-2">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight lg:text-lg">
                Connect With Us
              </span>
            </RainbowButton>
          </div>
        </div>

        {/* Image Placeholder - Right side - Hidden on mobile */}
        <div className="hidden md:block w-full md:w-1/2 relative">
          <div className="relative mx-auto">
            <div className="relative rounded-lg overflow-hidden backdrop-blur-sm bg-white/10">
              <Image
                src="/hero_image.png"
                alt="Classroom full of students"
                width={460}
                height={307}
                className="rounded-lg drop-shadow-xl object-contain md:w-[560px] md:h-[373px] lg:w-[660px] lg:h-[440px]"
              />
              <div className="absolute inset-0">
                <BorderBeam 
                  size={150}
                  duration={8} 
                  delay={0.8}
                  borderWidth={5}
                  colorFrom="#000000" 
                  colorMiddle="#333333"
                  colorTo="#666666"
                  className="opacity-75 md:size-[175] lg:size-[200]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero