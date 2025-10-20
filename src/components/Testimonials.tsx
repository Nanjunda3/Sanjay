import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, Urbanrise Properties',
    image: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=0d9488&color=fff&size=128',
    rating: 5,
    text: 'Sanjay delivered our website ahead of schedule and exceeded all expectations. The SEO optimization brought a 50% increase in organic traffic within just 3 months. A true game-changer for our business!',
  },
  {
    name: 'Priya Sharma',
    role: 'Product Manager, BHT Global',
    image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=1e3a8a&color=fff&size=128',
    rating: 5,
    text: "Working with Sanjay on the Interactive Floor SaaS was outstanding. His technical expertise and attention to detail helped us scale to 1000+ users with zero downtime. Highly recommended!",
  },
  {
    name: 'Michael Chen',
    role: 'Founder, Spaceman Design',
    image: 'https://ui-avatars.com/api/?name=Michael+Chen&background=f59e0b&color=fff&size=128',
    rating: 5,
    text: 'Sanjay transformed our vision into a stunning, award-winning website. His UI/UX sensibility and technical skills are top-notch. Our client engagement has never been better!',
  },
  {
    name: 'Anjali Desai',
    role: 'Marketing Director, Tech Startup',
    image: 'https://ui-avatars.com/api/?name=Anjali+Desai&background=8b5cf6&color=fff&size=128',
    rating: 5,
    text: 'Professional, reliable, and incredibly talented. Sanjay built our entire platform from scratch and continues to provide excellent support. Worth every penny!',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-slate-400 text-lg">What people say about working with me</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-slate-900 rounded-2xl p-8 md:p-12 border border-slate-700 max-w-4xl mx-auto">
                      <Quote className="w-12 h-12 text-teal-500 mb-6" />

                      <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 italic">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full border-2 border-teal-500"
                        />
                        <div>
                          <div className="font-bold text-white text-lg">{testimonial.name}</div>
                          <div className="text-teal-400 text-sm">{testimonial.role}</div>
                          <div className="flex gap-1 mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-teal-500 w-8'
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Featured on GitHub</h3>
                <p className="text-slate-400">500+ Stars across repositories</p>
              </div>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all hover:shadow-xl"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
