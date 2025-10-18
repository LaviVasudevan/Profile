'use client';

import { useState } from 'react';

export default function Techstack() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const categories = [
    {
      id: 0,
      title: "Languages",
      hexColor: "#fef3c7",
      technologies: ["Java", "JavaScript", "Python", "C++", "C", "SQL", "Dart", "HTML5", "CSS3", "XML"]
    },
    {
      id: 1,
      title: "Frameworks & Libraries",
      hexColor: "#fed7aa",
      technologies: ["React", "Node.js", "Flask", "TensorFlow", "Scikit-Learn", "Flutter", "MongoDB", "OracleSQL", "PL/SQL", "REST Web Services"]
    },
    {
      id: 2,
      title: "Tools & Technologies",
      hexColor: "#e9d5ff",
      technologies: ["Git", "Docker", "Linux", "VSCode", "Android Studio", "Firebase", "Google Cloud Platform", "Eclipse", "IntelliJ", "Apache Tomcat"]
    },
    {
      id: 3,
      title: "Soft Skills",
      hexColor: "#fbcfe8",
      technologies: ["Public Speaking", "Creativity", "Critical Thinking", "Leadership", "Problem Solving", "Team Collaboration", "Communication", "Project Management"]
    }
  ];

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    const randomRotation = Math.floor(Math.random() * 360) + 360 * 5;
    const selectedIndex = Math.floor((randomRotation % 360) / 90) % 4;
    setTimeout(() => {
      setSelectedCategory(selectedIndex);
      setIsSpinning(false);
    }, 3000);
  };

  const selected = selectedCategory !== null ? categories[selectedCategory] : null;

  return (
    <section id="techstack" className="section">
      <div className="container">
        <h2 className="section-title text-gradient">Tech Stack & Skills</h2>

        {/* Spinning Wheel */}
        <div className="flex flex-col items-center mb-16">
          <p className="text-gray-300 mb-8 text-center max-w-2xl">
            Yay, you made it here. Now spin the wheel to explore my tech stack!
          </p>

          {/* Wheel Container */}
          <div className="relative w-full max-w-md aspect-square mb-8">

            {/* Pointer */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 z-10">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-white drop-shadow-lg"></div>
            </div>
            
            {/* Wheel */}
            <div
              className={`w-full h-full rounded-full shadow-2xl transition-transform ${
                isSpinning ? '' : 'cursor-pointer hover:scale-105'
              }`}
              style={{
                background:
                  'conic-gradient(from 45deg, #fef3c7 0deg 90deg, #fed7aa 90deg 180deg, #e9d5ff 180deg 270deg, #fbcfe8 270deg 360deg)',
                transform: isSpinning
                  ? `rotate(${Math.floor(Math.random() * 360) + 360 * 5}deg)`
                  : 'rotate(0deg)',
                transition: isSpinning
                  ? 'transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  : 'none',
              }}
            >
              {/* Segment Labels */}
              <div className="w-full h-full rounded-full flex items-center justify-center relative">
                {/* Languages - Right */}
                <div className="absolute right-8 flex items-center justify-center h-full">
                  <div className="text-black font-bold text-center">
                    <div className="text-lg font-semibold whitespace-nowrap">Languages</div>
                  </div>
                </div>
                {/* Frameworks - Bottom */}
                <div className="absolute bottom-8 flex items-center justify-center w-full">
                  <div className="text-black font-bold text-center">
                    <div className="text-lg font-semibold">Frameworks</div>
                  </div>
                </div>
                {/* Tools - Left */}
                <div className="absolute left-8 flex items-center justify-center h-full">
                  <div className="text-black font-bold text-center">
                    <div className="text-lg font-semibold">Tools</div>
                  </div>
                </div>
                {/* Soft Skills - Top */}
                <div className="absolute top-8 flex items-center justify-center w-full">
                  <div className="text-black font-bold text-center">
                    <div className="text-lg font-semibold">Soft Skills</div>
                  </div>
                </div>

                {/* Center Circle - Grey */}
                <div className="absolute w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center border-4 border-white">
                  <button
                    onClick={spinWheel}
                    disabled={isSpinning}
                    className={`w-20 h-20 rounded-full font-bold text-white text-sm transition-all ${
                      isSpinning
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-gray-800 hover:bg-gray-900 cursor-pointer'
                    }`}
                  >
                    {isSpinning ? 'SPINNING' : 'SPIN'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Selected Category Display */}
          {selected && (
            <div
              className="mt-12 w-full max-w-3xl p-8 rounded-lg shadow-xl animate-fadeIn"
              style={{ backgroundColor: selected.hexColor }}
            >
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-black">{selected.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {selected.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-black/10 hover:bg-black/20 text-black px-4 py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {!selected && (
            <div className="mt-12 w-full max-w-3xl p-8 rounded-lg bg-gray-800/50 text-center text-gray-400">
              <p>Click the SPIN button to discover a tech category!</p>
            </div>
          )}
        </div>

        {/* All Categories Quick View */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">All Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="p-6 rounded-lg cursor-pointer hover:shadow-lg transition-all hover:scale-105"
                style={{ backgroundColor: cat.hexColor }}
                onClick={() => {
                  setSelectedCategory(cat.id);
                }}
              >
                <h4 className="text-xl font-bold text-black mb-3">{cat.title}</h4>
                <div className="text-black/90 text-sm">
                  {cat.technologies.length} skills
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}