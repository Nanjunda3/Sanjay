import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    const timer1 = setInterval(() => {
      setCount1((prev) => (prev < 5 ? prev + 1 : prev));
    }, 200);
    const timer2 = setInterval(() => {
      setCount2((prev) => (prev < 10 ? prev + 1 : prev));
    }, 150);
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-white">Sanjay K S</span>
                <br />
                <span className="text-gradient">Full-Stack Developer</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Crafting Scalable Digital Experiences
              </p>
              <p className="text-slate-400 leading-relaxed max-w-2xl">
                I am a dedicated Full Stack Developer with a strong foundation in modern web
                technologies and a proven track record of delivering high-impact digital solutions.
                With experience in both product-based and client-focused environments, I have
                developed scalable, responsive, and user-centric web applications using React.js,
                Node.js, and CSS3. Specializing in React/Node apps that drive results. Let's build
                your next big thing.
              </p>

              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400">{count1}+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400">{count2}+</div>
                  <div className="text-sm text-slate-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400">BLR</div>
                  <div className="text-sm text-slate-400">Bangalore-Based</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  Contact Me
                </a>
              </div>

              <div className="flex gap-4 justify-center md:justify-start pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-300 hover:text-teal-400 transition-all hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-300 hover:text-teal-400 transition-all hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:sanjay@example.com"
                  className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-300 hover:text-teal-400 transition-all hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-500/30 shadow-2xl">
                  <img
                    src="https://via.placeholder.com/400x400/1e293b/64748b?text=Sanjay+K+S"
                    alt="Sanjay K S"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 hover:text-teal-400 transition-colors"
      >
        <ArrowDown className="w-8 h-8" />
      </a>
    </section>
  );
}
