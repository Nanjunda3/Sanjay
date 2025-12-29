import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Github, Instagram, Twitter, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    portfolio: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Get EmailJS credentials from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Validate environment variables
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your .env file.');
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        portfolio_review: formData.portfolio ? 'Yes' : 'No',
        to_email: 'sanjaysnanjunda@gmail.com', // Your email
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', result.text);
      
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '', portfolio: false });
      }, 3000);
    } catch (error: any) {
      console.error('Error sending email:', error);
      setError(error.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-slate-400 text-lg">
              Ready to collaborate? I reply within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-slate-900 rounded-xl p-8 border border-slate-700 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal-500/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Address</div>
                      <div className="text-slate-400 text-sm">
                        No. 648 1st Main Road<br />
                        Kempegowda Nagar T, Dasarahalli<br />
                        Bengaluru 560057 Karnataka India
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal-500/10 rounded-lg">
                      <Phone className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Phone</div>
                      <a href="tel:+917892927125" className="text-slate-400 text-sm hover:text-teal-400 transition-colors">
                        (+91) 7892927125
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal-500/10 rounded-lg">
                      <Mail className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Email</div>
                      <a href="mailto:sanjaysnanjunda@gmail.com" className="text-slate-400 text-sm hover:text-teal-400 transition-colors">
                        sanjaysnanjunda@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-700">
                  <div className="font-semibold text-white mb-4">Follow Me</div>
                  <div className="flex gap-3">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-teal-400 transition-all hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-teal-400 transition-all hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-teal-400 transition-all hover:scale-110"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-teal-400 transition-all hover:scale-110"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-xl p-6 border border-teal-500/30">
                <h4 className="text-lg font-bold text-white mb-2">Available for Freelance</h4>
                <p className="text-slate-400 text-sm">
                  Currently accepting new projects. Let's discuss how I can help bring your ideas to life.
                </p>
              </div>
            </div>

            <div>
              <form ref={formRef} onSubmit={handleSubmit} className="bg-slate-900 rounded-xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-slate-400 text-center">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    {error && (
                      <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        <p className="text-red-400 text-sm">{error}</p>
                      </div>
                    )}

                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-500 transition-colors"
                          placeholder="Charles"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-500 transition-colors"
                          placeholder="charles@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-500 transition-colors resize-none"
                          placeholder="Tell me about your project..."
                        />
                      </div>

                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="portfolio"
                          name="portfolio"
                          checked={formData.portfolio}
                          onChange={handleChange}
                          className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-teal-500 focus:ring-teal-500 focus:ring-offset-slate-900"
                        />
                        <label htmlFor="portfolio" className="text-sm text-slate-400">
                          I'm interested in a portfolio review
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}