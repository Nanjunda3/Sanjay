import { GraduationCap, Award, BookOpen, Code } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'University Name',
    period: '2018 - 2022',
    gpa: '8.5/10',
    icon: GraduationCap,
  },
];

const certifications = [
  {
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    year: '2023',
    icon: Award,
  },
  {
    title: 'Node.js Microservices',
    issuer: 'Pluralsight',
    year: '2023',
    icon: Award,
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2022',
    icon: Award,
  },
  {
    title: 'Modern UI/UX Design',
    issuer: 'Coursera',
    year: '2022',
    icon: Award,
  },
];

const passions = [
  {
    title: 'Open Source Contributor',
    description: 'Active contributor to React and Node.js ecosystem projects. Maintaining several npm packages with 1K+ weekly downloads.',
    icon: Code,
    color: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'Tech Blogging',
    description: 'Writing technical articles about web development, best practices, and modern frameworks. Published 20+ articles with 50K+ views.',
    icon: BookOpen,
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Continuous Learning',
    description: 'Constantly exploring new technologies and frameworks. Currently diving deep into Web3, AI integration, and serverless architectures.',
    icon: GraduationCap,
    color: 'from-blue-500 to-purple-500',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Education & Passions</h2>
            <p className="text-slate-400 text-lg">Academic background and what drives me</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-teal-500/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl">
                    <edu.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-teal-400 font-semibold mb-2">{edu.field}</p>
                    <p className="text-slate-400 mb-1">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <span className="text-sm text-slate-500">{edu.period}</span>
                      <span className="text-sm text-amber-400 font-semibold">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-teal-500/50 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-slate-900 hover:bg-slate-900/50 transition-colors"
                  >
                    <cert.icon className="w-5 h-5 text-teal-400 shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="font-semibold text-white text-sm">{cert.title}</div>
                      <div className="text-slate-400 text-xs">{cert.issuer}</div>
                    </div>
                    <span className="text-xs text-slate-500">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="passions" className="space-y-8">
            <h3 className="text-3xl font-bold text-white text-center mb-8">My Passions</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {passions.map((passion, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-teal-500/50 transition-all hover:transform hover:scale-105"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${passion.color} mb-4`}>
                    <passion.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{passion.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{passion.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Latest Blog Posts</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="#"
                className="group p-6 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors border border-slate-700 hover:border-teal-500/50"
              >
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  React Hooks Deep Dive: useEffect Best Practices
                </h4>
                <p className="text-slate-400 text-sm mb-3">
                  A comprehensive guide to mastering useEffect and avoiding common pitfalls in React applications.
                </p>
                <span className="text-teal-400 text-sm font-semibold">Read more →</span>
              </a>
              <a
                href="#"
                className="group p-6 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors border border-slate-700 hover:border-teal-500/50"
              >
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  Building Scalable Node.js APIs: Architecture Patterns
                </h4>
                <p className="text-slate-400 text-sm mb-3">
                  Learn how to design and build maintainable REST APIs with Node.js and Express.
                </p>
                <span className="text-teal-400 text-sm font-semibold">Read more →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
