'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClapperboardIcon as ChalkboardTeacher, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import SparklesText from "@/components/ui/sparkles-text"
import { RainbowButton } from "@/components/ui/rainbow-button"

export default function Contact({ 
  imageHeight = 400, 
  imageWidth = 500, 
  cardHeight = 600,
  cardWidth = 1000
}) {
  const [activeTab, setActiveTab] = useState("students")

  const sparklesColors = {
    first: '#8e93e6',
    second: '#393a62'
  }

  // Calculate 25% darker version of #dd262e
  const darkerRed = '#a61c23'

  return (
    <section className="py-16 px-4 md:px-6 bg-[#64437f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-lg md:text-xl lg:text-2xl font-bold text-white max-w-4xl mx-auto">
            <SparklesText 
              text="Are you ready to become a part of the Alpha Brains family?"
              sparklesCount={10}
              colors={sparklesColors}
              className="leading-relaxed tracking-normal text-4xl"
            />
          </div>
          <span className="block text-white/90 mt-2 text-3xl md:text-4xl font-bold">
            Join us today!
          </span>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 rounded-full overflow-hidden bg-white/20 border border-white/30">
            <TabsTrigger 
              value="students" 
              className="text-lg py-3 data-[state=active]:bg-black/90 data-[state=active]:text-white text-black hover:bg-white/30 transition-colors"
            >
              <GraduationCap className="mr-2 h-5 w-5" />
              For Students
            </TabsTrigger>
            <TabsTrigger 
              value="teachers" 
              className="text-lg py-3 data-[state=active]:bg-black/90 data-[state=active]:text-white text-black hover:bg-white/30 transition-colors"
            >
              <ChalkboardTeacher className="mr-2 h-5 w-5" />
              For Teachers
            </TabsTrigger>
          </TabsList>
          <div className="flex justify-center">
            <TabsContent value="students" className="w-full">
              <Card 
                className="overflow-hidden rounded-2xl mx-auto bg-white/10 backdrop-blur-sm" 
                style={{ height: cardHeight, width: cardWidth }}
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div 
                    className="relative flex items-center justify-center"
                    style={{ minWidth: imageWidth }}
                  >
                    <div className="relative" style={{ width: imageWidth, height: imageHeight }}>
                      <Image
                        src="/students.png"
                        alt="Students studying together"
                        width={imageWidth}
                        height={imageHeight}
                        className="object-cover ml-5"
                        priority
                      />
                    </div>
                  </div>
                  <div className="flex flex-col p-6 md:p-8 flex-1">
                    <CardHeader>
                      <CardTitle className="text-2xl text-white">Excel in Your Studies</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="font-medium text-white/90">
                        Get comprehensive education support for all subjects under one roof, with both CBSE and ICSE curriculum coverage.
                      </p>
                      <div className="space-y-3">
                        <p className="font-semibold text-white">Why Students & Parents Choose Alpha Brains:</p>
                        <div className="space-y-2">
                          <p className="text-white/90">✨ <span className="font-medium">Comprehensive Learning:</span> Access quality education across all grades and subjects, with expert teachers for both CBSE and ICSE boards.</p>
                          <p className="text-white/90">✨ <span className="font-medium">Holistic Development:</span> Beyond academics, receive personalized counseling support to navigate educational and career choices.</p>
                          <p className="text-white/90">✨ <span className="font-medium">All-In-One Solution:</span> Everything you need in one place - from subject tutoring to doubt clearing sessions and career guidance.</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="mt-4">
                      <RainbowButton className="rounded-full bg-white hover:bg-white/90 text-white service-btn px-6 py-2">
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight lg:text-lg">
                          Begin Your Learning Journey
                        </span>
                      </RainbowButton>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="teachers" className="w-full">
              <Card 
                className="overflow-hidden rounded-2xl mx-auto bg-white/10 backdrop-blur-sm" 
                style={{ height: cardHeight, width: cardWidth }}
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div 
                    className="relative flex items-center justify-center"
                    style={{ minWidth: imageWidth }}
                  >
                    <div className="relative" style={{ width: imageWidth, height: imageHeight }}>
                      <Image
                        src="/teachers.png"
                        alt="Teacher in a classroom"
                        width={imageWidth}
                        height={imageHeight}
                        className="object-cover ml-5"
                        priority
                      />
                    </div>
                  </div>
                  <div className="flex flex-col p-6 md:p-8 flex-1">
                    <CardHeader>
                      <CardTitle className="text-2xl text-white">Empower Young Minds</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="font-medium text-white/90">
                        Join Alpha Brains and focus on what you do best - teaching. We take care of everything else.
                      </p>
                      <div className="space-y-3">
                        <p className="font-semibold text-white">Why Teachers Choose Alpha Brains:</p>
                        <div className="space-y-2 ">
                          <p className="text-white/90">✨ <span className="font-medium">Hassle-Free Platform:</span> All administrative tasks handled - from student management to scheduling, letting you dedicate your energy to teaching.</p>
                          <p className="text-white/90">✨ <span className="font-medium">Flexible Teaching:</span> Choose your hours and teach both CBSE and ICSE curricula while reaching students across different grades and subjects.</p>
                          <p className="text-white/90">✨ <span className="font-medium">Growth & Support:</span> Access professional development resources, teaching tools, and a supportive community of fellow educators.</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="mt-4">
                      <RainbowButton className="rounded-full bg-white hover:bg-white/90 text-white service-btn px-6 py-2">
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight lg:text-lg">
                          Start Your Teaching Journey
                        </span>
                      </RainbowButton>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  )
}