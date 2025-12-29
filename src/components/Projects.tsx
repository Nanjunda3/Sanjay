import { ExternalLink, Github, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Interactive Floor SaaS',
    company: 'BHT Technologies',
    description: 'Dynamic platform for real estate visualization with interactive floor plans. Implemented real-time updates and collaborative features that increased user engagement by 30%.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
    metrics: 'Scaled to 10K+ users | 30% engagement boost',
    liveUrl: '#',
    githubUrl: 'https://github.com/Nanjunda3/SaaS_product',
  },
  {
    title: 'Urbanrise Website',
    company: 'Freelance',
    description: 'SEO-optimized real estate website with advanced property search and filtering. Achieved 50% improvement in organic traffic within 3 months of launch.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'SEO'],
    metrics: '50% traffic increase | Mobile-first design',
    liveUrl: '#',
    githubUrl: 'https://github.com/Nanjunda3/urbanrise',
  },
  {
    title: 'Tahini',
    company: 'BHT Technologies',
    description: 'Modern UI/UX focused design portfolio platform with smooth animations and intuitive navigation. Features showcase and client testimonial sections.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop',
    tech: ['React', 'Framer Motion', 'CSS3', 'Firebase', 'ThreeJS'],
    metrics: 'Award-winning design | 95+ Lighthouse score',
    liveUrl: '#',
    githubUrl: 'https://github.com/Nanjunda3/Tahini',
  },
  {
    title: 'Comic Con 2023',
    company: 'BHT Technologies',
    description: 'Large-scale event platform with live streaming capabilities, attendee management, and interactive networking features for 500+ participants.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
    tech: ['React', 'Node.js', 'Express', 'AWS'],
    metrics: '500+ concurrent users | Zero downtime',
    liveUrl: '#',
    githubUrl: 'https://github.com/Nanjunda3/Comiccon_December_2023',
  },
  {
    title: 'Siemens 2023',
    company: 'BHT Technologies',
    description: 'Premium event showcase and management system with high-end culinary experiences. Engaging cutting edge user experience',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB'],
    metrics: 'Automated workflows | TD Integration',
    liveUrl: '#',
    githubUrl: 'https://github.com/Nanjunda3/Siemens_OSC',
  },
  // {
  //   title: 'E-Commerce Dashboard',
  //   company: 'Personal Project',
  //   description: 'Comprehensive admin dashboard for e-commerce management with analytics, inventory tracking, and order processing features.',
  //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
  //   tech: ['React', 'Chart.js', 'Redux', 'REST API'],
  //   metrics: 'Real-time analytics | Inventory management',
  //   liveUrl: '#',
  //   githubUrl: '#',
  // },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400 text-lg">Transforming ideas into impactful digital solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 bg-slate-900/80 flex items-center justify-center gap-4 animate-fade-in">
                      {/* <a
                        href={project.liveUrl}
                        target='_blank'
                        className="p-3 bg-teal-500 hover:bg-teal-600 rounded-full text-white transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a> */}
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full text-white transition-colors"
                        aria-label="View source code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-teal-400 text-sm">{project.company}</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-slate-900 text-teal-400 text-xs rounded-full border border-teal-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-amber-400 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>{project.metrics}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
