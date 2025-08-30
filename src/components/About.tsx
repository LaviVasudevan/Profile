export default function About() {
  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "15+", label: "Projects Completed" },
    { number: "10+", label: "Technologies" },
    { number: "100%", label: "Dedication" }
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title text-gradient">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm a passionate full-stack developer based in India, dedicated to creating 
              exceptional digital experiences. My journey in web development started with curiosity 
              about how websites work, and it has evolved into a career focused on building 
              meaningful and impactful applications.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in modern web technologies including React, Next.js, and Node.js, 
              with a strong focus on writing clean, efficient code and creating intuitive user 
              interfaces. I believe in the power of technology to solve real-world problems 
              and improve people's lives.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing my knowledge with the developer community. 
              I'm always eager to take on new challenges and collaborate on exciting projects.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="/resume.pdf" target="_blank" className="btn-primary">
                Download Resume
              </a>
              <a href="#contact" className="btn-secondary">
                Let's Connect
              </a>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="card text-center hover:scale-105 transform transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
            
            {/* Achievement Highlights */}
            <div className="col-span-2 mt-6">
              <h4 className="text-lg font-semibold mb-4 text-center">Key Achievements</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 bg-gray-800 p-3 rounded-lg">
                  <span className="text-green-400">✓</span>
                  <span className="text-sm">Built scalable web applications serving 1000+ users</span>
                </div>
                <div className="flex items-center space-x-3 bg-gray-800 p-3 rounded-lg">
                  <span className="text-blue-400">🏆</span>
                  <span className="text-sm">Winner of multiple hackathons and coding competitions</span>
                </div>
                <div className="flex items-center space-x-3 bg-gray-800 p-3 rounded-lg">
                  <span className="text-purple-400">🚀</span>
                  <span className="text-sm">Contributed to 5+ open-source projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}