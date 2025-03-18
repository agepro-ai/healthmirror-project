
import React from 'react';
import { Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    title: "Cardiologist, Metro Health",
    quote: "The predictive accuracy of this platform has transformed how we approach preventive cardiology. We've seen a 40% reduction in emergency cardiac events among our patients using this system.",
    image: "https://randomuser.me/api/portraits/women/23.jpg"
  },
  {
    name: "Michael Chen",
    title: "HealthTech Investor",
    quote: "After reviewing dozens of health monitoring platforms, this is the only one that delivers truly actionable preventive insights instead of just data. This is the future of healthcare.",
    image: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    name: "Emily Rodriguez",
    title: "Preventive Health Patient",
    quote: "The system alerted me to a potential cardiac issue three weeks before I would have noticed symptoms. My doctor confirmed the early detection likely prevented a major health event.",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30 pointer-events-none grid-bg"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge bg-accent/20 text-accent mb-4 backdrop-blur-sm border border-accent/10">
            Success Stories
          </div>
          <h2 className="heading-xl mb-6">
            Leaders <span className="text-primary">Trust</span> Our Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from healthcare professionals and users who have experienced the power of our preventive health platform.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={index} 
              delay={index === 0 ? 'none' : (index === 1 ? '200' : '400')}
              className="futuristic-card group"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="mr-4 border-2 border-primary/30 rounded-full p-0.5">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <div className="flex-1 text-muted-foreground mb-2 relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20 opacity-50" />
                  <p className="relative z-10">{testimonial.quote}</p>
                </div>
                <div className="cyber-line mt-auto"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
