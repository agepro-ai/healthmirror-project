
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "HealthMirror has transformed how I approach my wellbeing. The insights are incredibly accurate and have helped me make meaningful changes to my lifestyle.",
    author: "Sarah Johnson",
    title: "Fitness Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    content: "As someone with a busy schedule, I appreciate how this platform simplifies health tracking. The personalized recommendations have been game-changing for my energy levels.",
    author: "David Chen",
    title: "Tech Executive",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    content: "I've tried many health apps, but this is the first one that actually provides actionable insights. The interface is beautiful and intuitive - exactly what I needed.",
    author: "Emma Rodriguez",
    title: "Healthcare Professional",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge bg-blue-100 text-blue-800 mb-4">
            Success Stories
          </div>
          <h2 className="heading-xl mb-6">
            Trusted by Health-Conscious Individuals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here's what our users have to say about their experience with our health monitoring platform.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={index} 
              delay={`${index * 200}` as '0' | '200' | '400' | '600' | '800' | '1000' | 'none'}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6 text-blue-500">
                <Quote className="h-8 w-8 opacity-50" />
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
