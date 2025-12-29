import { ArrowUp, Mail, Phone, MapPin, Linkedin, Github, Instagram, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    setError('');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing.');
      }

      // Send newsletter subscription notification
      const templateParams = {
        from_name: 'Newsletter Subscriber',
        from_email: email,
        message: `New newsletter subscription from: ${email}`,
        to_email: 'sanjaysnanjunda@gmail.com',
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    } catch (error: any) {
      console.error('Error subscribing:', error);
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gradient mb-4">Sanjay K S</h3>
              <p className="text-slate-400 mb-6 max-w-md">
                Full-stack developer specializing in React and Node.js. Building scalable web applications that make a difference.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/sanjayks-developer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-teal-400 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Nanjunda3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-teal-400 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/x_sanju._2?igsh=Y3lzc2R2N3huZWN1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-teal-400 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-slate-400 hover:text-teal-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-400 hover:text-teal-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#education" className="text-slate-400 hover:text-teal-400 transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-400 hover:text-teal-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4 shrink-0 mt-1 text-teal-400" />
                  <span>Bengaluru, Karnataka</span>
                </li>
                <li className="flex items-start gap-2 text-slate-400 text-sm">
                  <Phone className="w-4 h-4 shrink-0 mt-1 text-teal-400" />
                  <a href="tel:+917892927125" className="hover:text-teal-400 transition-colors">
                    (+91) 7892927125
                  </a>
                </li>
                <li className="flex items-start gap-2 text-slate-400 text-sm">
                  <Mail className="w-4 h-4 shrink-0 mt-1 text-teal-400" />
                  <a href="mailto:sanjaysnanjunda@gmail.com" className="hover:text-teal-400 transition-colors">
                    sanjaysnanjunda@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="mb-8">
              <h4 className="font-bold text-white mb-4 text-center">Subscribe to Dev Tips Newsletter</h4>
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                {error && (
                  <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    disabled={isSubscribing || subscribed}
                    className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-500 transition-colors disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing || subscribed}
                    className="px-6 py-2 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {subscribed ? 'Subscribed!' : isSubscribing ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
              </form>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">
                © {currentYear} Sanjay K S. All rights reserved.
              </p>
              <button
                onClick={scrollToTop}
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-teal-400 transition-all"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}