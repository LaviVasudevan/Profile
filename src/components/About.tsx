export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title text-gradient">About Me</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hey there! I’m Lavanya Vasudevan, a Computer Science engineer and an all-around curious learner. I’m super into picking up new concepts and tinkering with cool tools while diving into different projects.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              When I’m not glued to my laptop, you can catch me writing, doodling cartoons (one on the right's mine), belting out some tunes, or jamming to my favorite artists and podcasts (seriously, check out the Broke Studio Podcast). Oh, and I'm also working on my badminton skills—gotta get that footwork down! On my off days, I'm just chilling and binge-watching on Netflix.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="btn-primary">
                Let's Connect
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md">
              {/* Placeholder image container with gradient border */}
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/30 overflow-hidden flex items-center justify-center">
                <img
                  src="/lavi.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}