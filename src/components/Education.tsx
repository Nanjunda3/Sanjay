import { GraduationCap, Award, BookOpen, Code, Music, Users, X } from 'lucide-react';
import { useState } from 'react';

const education = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Electronics & Communication',
    institution: 'Visvesvaraya Technological University',
    period: 'Aug 2022',
    gpa: '7.35 CGPA',
    icon: GraduationCap,
  },
  {
    degree: 'Pre-University Course',
    field: 'Science',
    institution: 'Pre-University Board',
    period: 'Mar 2018',
    gpa: '60%',
    icon: BookOpen,
  },
  {
    degree: 'Secondary School Certificate (SSLC)',
    field: 'General Studies',
    institution: 'Secondary School Board',
    period: 'Apr 2016',
    gpa: '88%',
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
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Music Enthusiast',
    description: 'Passionate about music production and sound design. Exploring the intersection of technology and music through creative audio projects.',
    icon: Music,
    color: 'from-rose-500 to-pink-500',
  },
  {
    title: 'Community Building',
    description: 'Active in developer communities, mentoring junior developers and organizing tech meetups. Believe in knowledge sharing and collaborative growth.',
    icon: Users,
    color: 'from-emerald-500 to-teal-500',
  },
];

export default function Education() {
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certifications[0] | null>(null);

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
            <p className="text-slate-400 text-lg">Academic background and certifications</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-teal-400 font-semibold text-sm mb-2">{edu.field}</p>
                    <p className="text-slate-400 text-sm mb-1">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <span className="text-xs text-slate-500">{edu.period}</span>
                      <span className="text-xs text-amber-400 font-semibold">{edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-teal-500/50 transition-all mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCertificate(cert)}
                  className="flex items-start gap-3 p-4 rounded-lg bg-slate-900 hover:bg-slate-800 hover:border-teal-500/50 transition-all cursor-pointer border border-slate-800 group"
                >
                  <cert.icon className="w-5 h-5 text-teal-400 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div className="flex-1">
                    <div className="font-semibold text-white text-sm group-hover:text-teal-400 transition-colors">{cert.title}</div>
                    <div className="text-slate-400 text-xs">{cert.issuer}</div>
                  </div>
                  <span className="text-xs text-slate-500">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="passions" className="space-y-8">
            <h3 className="text-3xl font-bold text-white text-center mb-8">My Passions</h3>
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-6 min-w-max px-0">
                {passions.map((passion, index) => (
                  <div
                    key={index}
                    className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-teal-500/50 transition-all hover:transform hover:scale-105 w-80 shrink-0"
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
            <p className="text-center text-slate-400 text-sm mt-4">Scroll to see more passions →</p>
          </div>
        </div>
      </div>

      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedCertificate(null)}>
          <div className="bg-slate-800 rounded-xl border border-slate-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 flex items-center justify-between p-6 bg-slate-800 border-b border-slate-700">
              <h3 className="text-2xl font-bold text-white">{selectedCertificate.title}</h3>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <div className="w-full h-96 bg-slate-900 rounded-lg border border-slate-700 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Award className="w-16 h-16 text-teal-400 mx-auto mb-3" />
                    <p className="text-slate-400">Certificate Placeholder</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-400 text-sm">Certificate Title</p>
                  <p className="text-white font-semibold">{selectedCertificate.title}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Issuer</p>
                  <p className="text-white font-semibold">{selectedCertificate.issuer}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Year Earned</p>
                  <p className="text-white font-semibold">{selectedCertificate.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
