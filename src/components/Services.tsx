import { Check, Sparkles, Zap, Crown } from 'lucide-react';

const services = [
  {
    name: 'Consultation',
    icon: Sparkles,
    price: '$200',
    period: 'per hour',
    description: 'Expert guidance for your web development needs',
    features: [
      'Technical architecture review',
      'Technology stack recommendations',
      'Performance optimization strategies',
      'Best practices guidance',
      'Code review sessions',
    ],
    popular: false,
  },
  {
    name: 'Web App Development',
    icon: Zap,
    price: '$2K - $5K',
    period: 'per project',
    description: 'Complete web application from concept to deployment',
    features: [
      'Custom React/Node.js applications',
      'Responsive design & development',
      'API integration & development',
      'Database design & implementation',
      'Testing & quality assurance',
      'Deployment & hosting setup',
      '30 days post-launch support',
    ],
    popular: true,
  },
  {
    name: 'Full Custom Solution',
    icon: Crown,
    price: '$10K+',
    period: 'enterprise',
    description: 'Comprehensive solution tailored to your business',
    features: [
      'Everything in Web App package',
      'Advanced features & integrations',
      'Scalable architecture design',
      'Payment gateway integration',
      'Admin dashboard & analytics',
      'SEO optimization',
      'Ongoing maintenance & support',
      'Priority support channel',
    ],
    popular: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Services & Packages</h2>
            <p className="text-slate-400 text-lg">Flexible solutions to bring your vision to life</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative bg-slate-800 rounded-2xl p-8 border-2 transition-all duration-300 hover:transform hover:scale-105 ${
                  service.popular
                    ? 'border-teal-500 shadow-2xl shadow-teal-500/20'
                    : 'border-slate-700 hover:border-teal-500/50'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-2xl mb-4 ${
                    service.popular
                      ? 'bg-gradient-to-br from-teal-500 to-blue-600'
                      : 'bg-slate-700'
                  }`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{service.description}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-teal-400">{service.price}</span>
                    <span className="text-slate-500 text-sm">/ {service.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    service.popular
                      ? 'bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4">Not sure which package is right for you?</p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
