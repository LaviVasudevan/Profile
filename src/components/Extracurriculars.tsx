'use client';

import { useState } from 'react';

export default function Extracurriculars() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const experiences = [
    {
      title: "ACM Student Chapter",
      role: "Editorial Head",
      period: "August 2025 - Present",
      duration: "1 month",
      organization: "SSN College of Engineering",
      color: "bg-yellow-100"
    },
    {
      title: "SSN Music Club",
      role: "Club President",
      period: "June 2025 - Present",
      duration: "3 months",
      organization: "SSN College of Engineering",
      color: "bg-pink-100"
    },
    {
      title: "English Literary Club",
      role: "Core Committee",
      period: "May 2024 - Present",
      duration: "1 year 4 months",
      organization: "SSN College of Engineering",
      color: "bg-blue-100"
    },
    {
      title: "National Service Scheme",
      role: "Volunteer",
      period: "November 2022 - Present",
      duration: "2 years 10 months",
      organization: "Chennai, Tamil Nadu, India",
      color: "bg-green-100"
    },
    {
      title: "Instincts, SSNCE",
      role: "Event Head",
      period: "March 2025",
      duration: "1 month",
      organization: "Chennai, Tamil Nadu, India",
      color: "bg-purple-100"
    },
    {
      title: "Gradient - SSN Design Club",
      role: "Core Committee",
      period: "May 2024 - May 2025",
      duration: "1 year 1 month",
      organization: "SSN College of Engineering",
      color: "bg-orange-100"
    },
    {
      title: "Invente, SSNCE",
      role: "Public Relations Head",
      period: "August 2024 - September 2024",
      duration: "2 months",
      organization: "SSN College of Engineering",
      color: "bg-red-100"
    },
    {
      title: "ACM Summer School",
      role: "Algorithmic Approaches to NP-Completeness",
      period: "July 2024 - July 2024",
      duration: "1 month",
      organization: "PSG College of Technology",
      color: "bg-cyan-100"
    }
  ];

  const photos = [
    {
      id: 1,
      src: "/pharm.jpg",
      rotation: 0,
      top: "5%",
      left: "18%"
    },
    {
      id: 2,
      src: "job.jpg",
      rotation: -3,
      top: "5%",
      left: "90%"
    },
    {
      id: 3,
      src: "game.png",
      rotation: -2,
      top: "56%",
      left: "62%"
    }
  ];

  return (
    <section id="extracurriculars" className="section bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Cork Board Texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(239, 234, 173, 0.1) 35px, rgba(158, 103, 103, 0.1) 70px)`,
        }}></div>
      </div>

      <div className="container relative z-10">
        <h2 className="section-title text-gradient mb-4">
          Beyond Coding
        </h2>
        
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16">
          My journey through leadership, community work, internships, and continuous learning at SSN College of Engineering and beyond.
        </p>

        {/* Notice Board Container */}
        <div className="relative min-h-screen">
          {/* Scattered Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective">
            {experiences.map((exp, index) => {
              const rotations = [-3, -1, 2, -4, 1, 3, 2, 4];
              const rotation = rotations[index % rotations.length];
              
              const yOffsets = [0, 20, -20, 40, -10, 30, -10, 15];
              const yOffset = yOffsets[index % yOffsets.length];

              return (
                <div
                  key={exp.title}
                  className={`${exp.color} p-6 rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 relative border-b-4 border-gray-300`}
                  style={{
                    transform: `rotate(${rotation}deg) translateY(${yOffset}px)`,
                    boxShadow: `${rotation > 0 ? '8px' : '-8px'} 8px 16px rgba(0,0,0,0.3)`,
                  }}
                >
                  {/* Pin */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="w-4 h-4 bg-red-500 rounded-full shadow-md border-2 border-red-600"></div>
                  </div>

                  {/* Content */}
                  <div className="text-gray-900">
                    <h3 className="text-lg font-bold mb-2 leading-tight">{exp.title}</h3>
                    
                    <div className="mb-3 pb-3 border-b-2 border-gray-400">
                      <p className="text-sm font-semibold text-gray-700">{exp.role}</p>
                    </div>

                    <div className="space-y-1 text-xs mb-3">
                      <p className="font-medium">{exp.period}</p>
                      <p className="text-gray-600">{exp.duration}</p>
                      <p className="italic text-gray-700 mt-2">{exp.organization}</p>
                    </div>

                    {/* Tape effect */}
                    <div className="absolute top-1/4 -left-2 w-8 h-6 bg-white/30 transform -rotate-45 pointer-events-none"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Polaroid Photos */}
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="absolute w-48 h-60 cursor-pointer transition-all duration-300 hover:scale-110 hover:z-30"
              style={{
                top: photo.top,
                left: photo.left,
                transform: `rotate(${photo.rotation}deg)`,
              }}
              onClick={() => setSelectedPhoto(photo.id)}
            >
              {/* Polaroid style card */}
              <div className="w-full h-full bg-white shadow-xl rounded-sm overflow-hidden flex flex-col">
                <div className="flex-1 bg-gray-300 overflow-hidden">
                  <img 
                    src={photo.src} 
                    alt={`Flork ${photo.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-12 bg-white flex items-center justify-center">
                  <p className="text-xs text-gray-500">Memory {photo.id}</p>
                </div>
              </div>

              {/* Tape at top */}
              <div className="absolute -top-4 left-1/4 w-16 h-3 bg-white/40 transform -rotate-12"></div>
              <div className="absolute -top-4 right-1/4 w-16 h-3 bg-white/40 transform rotate-12"></div>

              {/* Pin */}
              <div className="absolute -top-2 right-4 z-40">
                <div className="w-3 h-3 bg-red-400 rounded-full shadow-md border border-red-500"></div>
              </div>
            </div>
          ))}

          {/* Decorative pushpins */}
          <div className="absolute top-20 right-10 w-3 h-3 bg-blue-500 rounded-full shadow-md"></div>
          <div className="absolute bottom-32 left-16 w-3 h-3 bg-green-500 rounded-full shadow-md"></div>
          <div className="absolute top-1/2 right-20 w-3 h-3 bg-yellow-500 rounded-full shadow-md"></div>
        </div>
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="bg-white p-2 rounded-lg shadow-2xl max-w-lg w-full mx-4">
            <img 
              src={photos[selectedPhoto - 1].src} 
              alt={`Memory ${selectedPhoto}`}
              className="w-full h-auto rounded"
            />
            <p className="text-center text-gray-600 mt-3 text-sm">Click outside to close</p>
          </div>
        </div>
      )}
    </section>
  );
}