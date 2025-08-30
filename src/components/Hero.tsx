'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const roles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver']
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    setMounted(true)
    
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fadeIn">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl font-bold animate-float">
            YN
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="text-gradient">Your Name</span>
          </h1>

          {/* Dynamic Role */}
          <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
            <span className="inline-block transition-all duration-500">
              {roles[currentRole]}
            </span>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Passionate about creating beautiful, functional, and user-centered digital experiences.
            I love turning complex problems into simple, elegant solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}