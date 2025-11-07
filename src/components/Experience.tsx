import { Briefcase, Code, Headphones } from 'lucide-react';

const timeline = [
  {
    icon: Headphones,
    title: 'Technical Associate II',
    company: 'TTEC | Ahmedabad',
    period: 'Oct 2024 - Present',
    color: 'from-teal-500 to-cyan-500',
    achievements: [
      'Provided real-time technical support, ensuring quick issue resolution and high customer satisfaction',
      'Diagnosed and troubleshot technical issues, guiding users through solutions effectively',
      'Maintained detailed logs of customer interactions, improving efficiency and resolution times',
      'Assisted in process improvements by identifying recurring issues and suggesting automation',
      'Managed multiple tasks and clients simultaneously, demonstrating strong multitasking skills',
    ],
  },
  {
    icon: Briefcase,
    title: 'Full Stack Developer',
    company: 'BHT Technologies | Bengaluru',
    period: 'Jul 2023 - Jul 2024',
    color: 'from-amber-500 to-orange-500',
    achievements: [
      'Continuous development of QR based registration for India\'s biggest hotel chain event GOURMET LUXE 2023',
      'Crafted www.tahinigroup.com using React.js with interactive elements and optimized performance',
      'Developed Interactive Floor SaaS solution, boosting client retention by 40% and increasing subscription renewals by 25%',
      'Engineered enhanced UI using HTML, Node.js, jQuery, and Tailwind CSS; increased user engagement by 45%',
      'Championed Global Investor\'s Meet Government initiative, resulting in 35% boost in investor participation',
      'Revamped design to highlight state\'s economic growth, achieving 45% increase in visitor engagement',
    ],
  },
  {
    icon: Code,
    title: 'Web Developer',
    company: 'Freelancing',
    period: '2021 - Present',
    color: 'from-blue-500 to-cyan-500',
    achievements: [
      'Spaceman Design: Developed fully responsive website using Vue.js with smooth navigation and optimized loading times',
      'Urbanrise Website: Created marketing website with focus on lead generation, resulting in significant increase in organic traffic',
      'Ensured cross-browser compatibility and mobile responsiveness across all projects',
      'Collaborated with designers to integrate design elements and functionality for cohesive final products',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Experience & Journey</h2>
            <p className="text-slate-400 text-lg">My professional path and achievements</p>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-blue-500 to-purple-500" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row gap-8"
                >
                  <div className="md:w-1/2 md:pr-12 flex justify-end md:justify-end">
                    {index % 2 === 0 && (
                      <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-teal-500/50 transition-all hover:shadow-xl w-full">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} shrink-0`}>
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                            <p className="text-teal-400 font-medium">{item.company}</p>
                            <p className="text-slate-500 text-sm mt-1">{item.period}</p>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                              <span className="text-teal-400 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-teal-500 rounded-full transform -translate-x-1.5 md:-translate-x-2 border-4 border-slate-800 shadow-lg top-0" />

                  <div className="md:w-1/2 md:pl-12">
                    {index % 2 !== 0 && (
                      <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-teal-500/50 transition-all hover:shadow-xl w-full">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} shrink-0`}>
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                            <p className="text-teal-400 font-medium">{item.company}</p>
                            <p className="text-slate-500 text-sm mt-1">{item.period}</p>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                              <span className="text-teal-400 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
