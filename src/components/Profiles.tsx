'use client';

const profiles = [
  { 
    name: 'LinkedIn', 
    url: 'https://linkedin.com/in/lavanya-vasudevan',
    icon: '💼',
    description: 'Professional network and career updates'
  },
  { 
    name: 'GitHub', 
    url: 'https://github.com/LaviVasudevan',
    icon: '🐙',
    description: 'Code repositories and open source contributions'
  },
  { 
    name: 'Twitter', 
    url: 'https://twitter.com/lavanya_dev',
    icon: '🐦',
    description: 'Tech thoughts and industry insights'
  },
  { 
    name: 'Instagram', 
    url: 'https://instagram.com/lavanya.codes',
    icon: '📷',
    description: 'Behind the scenes and personal moments'
  }
];

export default function Profiles() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title text-gradient">
          Connect With Me
        </h2>
        
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Follow me across different platforms to stay updated with my work, 
          thoughts, and journey in tech.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card group hover:scale-105 transform transition-all duration-300 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {profile.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {profile.name}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {profile.description}
              </p>
              
              <div className="mt-4 text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                Follow →
              </div>
            </a>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 max-w-xl mx-auto">
            <h3 className="text-lg font-bold mb-2">Let's Build Something Together</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Have an interesting project or opportunity? I'd love to hear about it!
            </p>
            <a 
              href="#contact" 
              className="btn-primary"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}