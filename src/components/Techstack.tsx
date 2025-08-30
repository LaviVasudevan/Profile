export default function Techstack() {
  const techCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      technologies: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      technologies: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "MongoDB", level: 75 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      technologies: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Vercel", level: 85 },
        { name: "Figma", level: 80 },
        { name: "VS Code", level: 95 }
      ]
    }
  ]

  const ProgressBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  )

  return (
    <section id="techstack" className="section">
      <div className="container">
        <h2 className="section-title text-gradient">
          Tech Stack & Skills
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div key={category.title} className="card">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={tech.name}
                    className="animate-fadeIn"
                    style={{ 
                      animationDelay: `${(categoryIndex * 0.2) + (techIndex * 0.1)}s` 
                    }}
                  >
                    <ProgressBar name={tech.name} level={tech.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Responsive Design', 'UI/UX Design', 'API Development', 
              'Database Design', 'Testing', 'Agile Methodology',
              'Problem Solving', 'Team Collaboration', 'Code Review',
              'Performance Optimization', 'SEO', 'Accessibility'
            ].map((skill) => (
              <span 
                key={skill} 
                className="bg-gray-700 hover:bg-blue-600 text-gray-300 hover:text-white px-4 py-2 rounded-full transition-colors duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}