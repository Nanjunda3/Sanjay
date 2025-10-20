import { Code2, Database, Server, Wrench } from 'lucide-react';

const skillsData = [
  {
    category: 'Frontend',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', level: 95, projects: 8 },
      { name: 'HTML/CSS', level: 98, projects: 10 },
      { name: 'JavaScript', level: 92, projects: 10 },
      { name: 'Tailwind CSS', level: 90, projects: 6 },
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 88, projects: 7 },
      { name: 'Express', level: 85, projects: 6 },
      { name: 'REST APIs', level: 90, projects: 8 },
    ],
  },
  {
    category: 'Databases',
    icon: Database,
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'MongoDB', level: 85, projects: 5 },
      { name: 'Firebase', level: 80, projects: 4 },
      { name: 'MySQL', level: 75, projects: 3 },
    ],
  },
  {
    category: 'DevTools',
    icon: Wrench,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Git/GitHub', level: 92, projects: 10 },
      { name: 'VS Code', level: 95, projects: 10 },
      { name: 'Notion', level: 88, projects: 7 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
            <p className="text-slate-400 text-lg">Technologies I work with to build amazing products</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((category, idx) => (
              <div
                key={idx}
                className="bg-slate-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-teal-500/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-teal-400 text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <div className="text-xs text-slate-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Used in {skill.projects} projects
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
