import { Briefcase, Code, GraduationCap, Award } from 'lucide-react';

const timeline = [
  {
    icon: Briefcase,
    title: 'Full-Stack Developer',
    company: 'BHT Global',
    period: '2022 - Present',
    color: 'from-teal-500 to-cyan-500',
    achievements: [
      'Led development of Interactive Floor SaaS platform serving 1K+ users',
      'Architected scalable backend systems using Node.js and MongoDB',
      'Implemented real-time features increasing user engagement by 30%',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    icon: Code,
    title: 'Freelance Web Developer',
    company: 'Independent',
    period: '2021 - Present',
    color: 'from-amber-500 to-orange-500',
    achievements: [
      'Delivered 10+ client projects including Urbanrise and Spaceman Design',
      'Achieved 50% organic traffic improvement through SEO optimization',
      'Built responsive, mobile-first websites with modern frameworks',
      'Maintained 5-star client satisfaction rating',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Bachelor of Technology',
    company: 'Computer Science & Engineering',
    period: '2018 - 2022',
    color: 'from-blue-500 to-purple-500',
    achievements: [
      'Specialized in Full-Stack Web Development',
      'Completed advanced coursework in Data Structures and Algorithms',
      'Built multiple academic projects using MERN stack',
      'Active participant in coding competitions and hackathons',
    ],
  },
  {
    icon: Award,
    title: 'Certifications & Learning',
    company: 'Continuous Development',
    period: '2020 - Present',
    color: 'from-green-500 to-emerald-500',
    achievements: [
      'React Advanced Patterns & Best Practices',
      'Node.js Microservices Architecture',
      'AWS Cloud Practitioner',
      'Modern UI/UX Design Principles',
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
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="md:w-1/2 md:pr-12">
                    {index % 2 === 0 && (
                      <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-teal-500/50 transition-all hover:shadow-xl">
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

                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-teal-500 rounded-full transform -translate-x-1.5 md:-translate-x-2 border-4 border-slate-800 shadow-lg" />

                  <div className="md:w-1/2 md:pl-12">
                    {index % 2 !== 0 && (
                      <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-teal-500/50 transition-all hover:shadow-xl">
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
