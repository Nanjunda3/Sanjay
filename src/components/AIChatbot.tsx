import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const PORTFOLIO_INFO = {
  name: 'Sanjay K S',
  role: 'Full Stack Developer',
  location: 'Bengaluru, Karnataka, India',
  email: 'sanjayksnanjunda@gmail.com',
  phone: '+917892927125',
  linkedin: 'https://linkedin.com/in/sanjay-k-s-36291619a/',

  currentRole: {
    title: 'Technical Associate II',
    company: 'TTEC',
    location: 'Ahmedabad',
    period: 'Oct 2024 - Present',
    responsibilities: [
      'Provides real-time technical support ensuring quick issue resolution',
      'Diagnoses and troubleshoots technical issues effectively',
      'Maintains detailed logs of customer interactions',
      'Assists in process improvements and automation suggestions',
      'Manages multiple tasks and clients simultaneously'
    ]
  },

  previousRoles: [
    {
      title: 'Full Stack Developer',
      company: 'BHT Technologies',
      location: 'Bengaluru',
      period: 'Jul 2023 - Jul 2024',
      achievements: [
        'Developed QR-based registration for GOURMET LUXE 2023 (India\'s biggest hotel chain event)',
        'Created www.tahinigroup.com using React.js with interactive elements',
        'Built Interactive Floor SaaS solution, boosting client retention by 40%',
        'Increased user engagement by 45% using HTML, Node.js, jQuery, and Tailwind CSS',
        'Led Global Investor\'s Meet Government initiative, achieving 35% boost in participation',
        'Achieved 45% increase in visitor engagement through design improvements'
      ]
    }
  ],

  freelanceProjects: [
    {
      name: 'Spaceman Design Website',
      description: 'Fully responsive website using Vue.js with smooth navigation and optimized loading times',
      technologies: ['Vue.js', 'HTML', 'CSS', 'JavaScript']
    },
    {
      name: 'Urbanrise Website',
      description: 'Marketing website with lead generation focus, significantly increased organic traffic',
      technologies: ['Vue.js', 'HTML', 'CSS', 'JavaScript']
    }
  ],

  skills: {
    languages: ['JavaScript', 'Java', 'TypeScript'],
    frontend: ['React.js', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    backend: ['Node.js', 'Express.js', 'REST APIs'],
    databases: ['MongoDB', 'MySQL', 'Firebase'],
    tools: ['Git', 'GitHub', 'Bitbucket', 'Visual Studio Code', 'Figma', 'Canva']
  },

  education: {
    degree: 'Bachelor of Engineering in Electronics and Communication',
    university: 'Visvesvaraya Technological University',
    year: 'Aug 2022',
    cgpa: '7.35'
  }
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! I\'m Sanjay\'s AI assistant. I can answer questions about his experience, skills, projects, and how to contact him. Feel free to ask me anything!',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.match(/\b(hi|hello|hey|greetings|good morning|good afternoon|good evening)\b/)) {
      return `Hello! I'm Sanjay's AI assistant. I'm here to help you learn about his professional background, skills, and projects. What would you like to know?`;
    }

    if (q.includes('how are you') || q.includes('how do you do')) {
      return `I'm doing great, thank you for asking! I'm here to help you learn about Sanjay K S. Would you like to know about his experience, skills, or projects?`;
    }

    if (q.includes('thank') || q.includes('thanks')) {
      return `You're welcome! Is there anything else you'd like to know about Sanjay?`;
    }

    if (q.includes('bye') || q.includes('goodbye')) {
      return `Goodbye! Feel free to come back if you have more questions about Sanjay. You can also reach him at ${PORTFOLIO_INFO.email}`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('phone')) {
      return `You can contact Sanjay at:\n\nEmail: ${PORTFOLIO_INFO.email}\nPhone: ${PORTFOLIO_INFO.phone}\nLinkedIn: ${PORTFOLIO_INFO.linkedin}`;
    }

    if (q.includes('current') && (q.includes('job') || q.includes('role') || q.includes('position') || q.includes('work'))) {
      return `Sanjay is currently working as ${PORTFOLIO_INFO.currentRole.title} at ${PORTFOLIO_INFO.currentRole.company} in ${PORTFOLIO_INFO.currentRole.location} (since ${PORTFOLIO_INFO.currentRole.period}). He provides real-time technical support, diagnoses issues, and assists in process improvements.`;
    }

    if (q.includes('ttec')) {
      return `At TTEC (${PORTFOLIO_INFO.currentRole.period}), Sanjay works as ${PORTFOLIO_INFO.currentRole.title}. His responsibilities include: ${PORTFOLIO_INFO.currentRole.responsibilities.join(', ')}.`;
    }

    if (q.includes('bht') || q.includes('previous') && q.includes('experience')) {
      const role = PORTFOLIO_INFO.previousRoles[0];
      return `At BHT Technologies (${role.period}), Sanjay worked as ${role.title}. Key achievements include: developing QR-based registration for GOURMET LUXE 2023, creating www.tahinigroup.com, building the Interactive Floor SaaS solution (40% retention boost), and leading the Global Investor's Meet initiative (35% participation increase).`;
    }

    if (q.includes('experience') || q.includes('work history')) {
      return `Sanjay has ${new Date().getFullYear() - 2023} years of professional experience. Currently at TTEC as Technical Associate II (Oct 2024 - Present), previously Full Stack Developer at BHT Technologies (Jul 2023 - Jul 2024), plus freelance web development projects including Spaceman Design and Urbanrise websites.`;
    }

    if (q.includes('project') || q.includes('portfolio')) {
      return `Sanjay's notable projects include:\n\n1. Interactive Floor - SaaS solution that boosted client retention by 40%\n2. Tahini Group Website - Built with React.js\n3. GOURMET LUXE 2023 - QR-based registration system\n4. Spaceman Design - Responsive Vue.js website\n5. Urbanrise - Marketing website with lead generation\n\nHe also worked on the Global Investor's Meet Government initiative.`;
    }

    if (q.includes('freelance')) {
      const projects = PORTFOLIO_INFO.freelanceProjects.map(p =>
        `${p.name}: ${p.description}`
      ).join('\n\n');
      return `Sanjay has completed several freelance projects:\n\n${projects}`;
    }

    if (q.includes('skill') || q.includes('technolog') || q.includes('tech stack')) {
      return `Sanjay's technical skills include:\n\nFrontend: ${PORTFOLIO_INFO.skills.frontend.join(', ')}\nBackend: ${PORTFOLIO_INFO.skills.backend.join(', ')}\nDatabases: ${PORTFOLIO_INFO.skills.databases.join(', ')}\nLanguages: ${PORTFOLIO_INFO.skills.languages.join(', ')}\nTools: ${PORTFOLIO_INFO.skills.tools.join(', ')}`;
    }

    if (q.includes('react') || q.includes('vue') || q.includes('node')) {
      return `Yes, Sanjay has extensive experience with modern web technologies! He's proficient in React.js, Vue.js, and Node.js. He's used React.js for projects like the Tahini Group website, Vue.js for Spaceman Design and Urbanrise, and Node.js for backend development at BHT Technologies.`;
    }

    if (q.includes('education') || q.includes('degree') || q.includes('university') || q.includes('college')) {
      return `Sanjay holds a ${PORTFOLIO_INFO.education.degree} from ${PORTFOLIO_INFO.education.university} (${PORTFOLIO_INFO.education.year}) with a CGPA of ${PORTFOLIO_INFO.education.cgpa}.`;
    }

    if (q.includes('location') || q.includes('where') && (q.includes('based') || q.includes('live') || q.includes('located'))) {
      return `Sanjay is based in ${PORTFOLIO_INFO.location}.`;
    }

    if (q.includes('who') && (q.includes('sanjay') || q.includes('you'))) {
      return `Sanjay K S is a ${PORTFOLIO_INFO.role} with over ${new Date().getFullYear() - 2023} years of experience. He's currently working as ${PORTFOLIO_INFO.currentRole.title} at ${PORTFOLIO_INFO.currentRole.company}. He specializes in React.js, Vue.js, Node.js, and building full-stack web applications.`;
    }

    if (q.includes('interactive floor')) {
      return `The Interactive Floor is an innovative SaaS solution developed by Sanjay at BHT Technologies. It's one of his proudest achievements - it boosted client retention by 40% and contributed to a 25% increase in subscription renewals over 12 months.`;
    }

    if (q.includes('achievement') || q.includes('accomplishment')) {
      return `Sanjay's key achievements include:\n\n• 40% increase in client retention with Interactive Floor\n• 45% boost in user engagement through UI improvements\n• 35% increase in investor participation for Government initiative\n• 45% increase in visitor engagement through design revamp\n• Successfully delivered multiple high-impact freelance projects`;
    }

    if (q.includes('hire') || q.includes('available') || q.includes('looking for work')) {
      return `For inquiries about working with Sanjay, please contact him directly at ${PORTFOLIO_INFO.email} or ${PORTFOLIO_INFO.phone}. You can also connect with him on LinkedIn: ${PORTFOLIO_INFO.linkedin}`;
    }

    if (q.match(/\b(can|do|does|is|are|what|when|where|how|why)\b/)) {
      return `I can help you learn about Sanjay's:\n\n• Work experience and current role\n• Technical skills and expertise\n• Projects and achievements\n• Education background\n• Contact information\n\nWhat specifically would you like to know?`;
    }

    return `I'd be happy to help you learn more about Sanjay! You can ask me about his:\n\n• Work experience (current role at TTEC, previous role at BHT Technologies)\n• Technical skills (React, Vue, Node.js, etc.)\n• Projects (Interactive Floor, Tahini Group, freelance work)\n• Education and background\n• How to contact him\n\nWhat would you like to know?`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const query = inputValue;
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(query);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center gap-2 group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
            Ask me anything!
          </span>
        </button>
      )}

      {isOpen && (
        <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 flex flex-col w-96 h-[500px]">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">AI Assistant</h3>
                <p className="text-xs text-white/80">Ask about Sanjay</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.isBot
                      ? 'bg-slate-800 text-slate-200'
                      : 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-800 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 bg-slate-800 text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 border border-slate-700"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full p-2 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
