export default function Extracurriculars() {
  const activities = [
    {
      title: "Open Source Contributor",
      description: "Active contributor to various open-source projects on GitHub. Contributed to libraries used by thousands of developers worldwide.",
      icon: "🌟",
      period: "2022 - Present",
      highlights: ["50+ Pull Requests merged", "Maintained 3 popular repositories", "Helped 100+ developers"]
    },
    {
      title: "Tech Community Leader",
      description: "Organized and led tech meetups, workshops, and coding bootcamps for local developer community.",
      icon: "👥",
      period: "2023 - Present",
      highlights: ["Organized 10+ events", "Mentored 25+ developers", "Built community of 200+ members"]
    },
    {
      title: "Hackathon Participant",
      description: "Regular participant in hackathons and coding competitions, winning multiple awards and recognition.",
      icon: "🏆",
      period: "2022 - Present",
      highlights: ["Won 3 hackathons", "Top 10 in 8+ competitions", "Built 15+ prototypes in 48 hours"]
    },
    {
      title: "Tech Blogger & Speaker",
      description: "Write technical articles and speak at conferences about web development, sharing knowledge with the community.",
      icon: "✍️",
      period: "2023 - Present",
      highlights: ["Published 20+ articles", "10k+ monthly readers", "Spoke at 5+ conferences"]
    },
    {
      title: "Volunteer Web Developer",
      description: "Develop websites and digital solutions for non-profit organizations and local businesses pro bono.",
      icon: "❤️",
      period: "2022 - Present",
      highlights: ["Helped 8+ NGOs", "Built 12+ charity websites", "Donated 200+ hours of work"]
    },
    {
      title: "Coding Mentor",
      description: "Mentor aspiring developers through online platforms and local coding bootcamps, helping them start their careers.",
      icon: "🎓",
      period: "2023 - Present",
      highlights: ["Mentored 30+ students", "90% job placement rate", "Created learning resources"]
    }
  ]

  return (
    <section id="extracurriculars" className="section bg-gray-800/30">
      <div className="container">
        <h2 className="section-title text-gradient">
          Beyond Coding
        </h2>
        
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
          I believe in giving back to the community and continuously learning. Here are some of my 
          activities outside of professional work that keep me engaged and help others grow.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={activity.title}
              className="card group hover:scale-105 transform transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <span className="text-sm text-blue-400 bg-blue-500/20 px-2 py-1 rounded">
                  {activity.period}
                </span>
              </div>
              
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {activity.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-300">Key Highlights:</h4>
                <ul className="space-y-1">
                  {activity.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-xs text-gray-400 flex items-start">
                      <span className="text-green-400 mr-2 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Let's Collaborate!</h3>
            <p className="text-gray-300 mb-6">
              I'm always excited to work on meaningful projects, contribute to open-source, 
              or help fellow developers. If you have an interesting opportunity or project, 
              let's connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/yourusername" target="_blank" className="btn-primary">
                GitHub Profile
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" className="btn-secondary">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}