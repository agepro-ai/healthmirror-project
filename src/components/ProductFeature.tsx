
import React from 'react';
import { BrainCircuit, Heart, ActivitySquare, Shield, Stethoscope, CircuitBoard } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const features = [
  {
    icon: <ActivitySquare className="h-6 w-6 text-primary" />,
    title: "Continuous Monitoring",
    description: "Track vitals, biomarkers, and activity patterns with clinical-grade precision 24/7."
  },
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    title: "Cardiovascular Analysis",
    description: "Advanced HRV analysis predicts cardiac events weeks before traditional symptoms appear."
  },
  {
    icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    title: "Neural Health AI",
    description: "Proprietary algorithms detect subtle cognitive changes through daily activity patterns."
  },
  {
    icon: <CircuitBoard className="h-6 w-6 text-primary" />,
    title: "Biometric Integration",
    description: "Seamlessly connects with 200+ health devices and wearables for comprehensive monitoring."
  },
  {
    icon: <Stethoscope className="h-6 w-6 text-primary" />,
    title: "Clinical Partnership",
    description: "Share preventive insights directly with your healthcare providers through secure channels."
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Military-Grade Security",
    description: "Your health data is protected with end-to-end encryption and zero-knowledge architecture."
  }
];

const ProductFeature: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-gradient-to-b from-white to-secondary/50">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="badge bg-accent/10 text-accent mb-4 backdrop-blur-sm">
            Predictive Technology
          </div>
          <h2 className="heading-xl mb-6">
            Advanced <span className="text-primary">Preventive</span> Health System
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-driven platform identifies potential health issues weeks before symptoms develop, giving you time to take preventive action.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={index} 
              delay={index % 3 === 0 ? 'none' : (index % 3 === 1 ? '200' : '400')}
              className="futuristic-card group"
            >
              <div className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm group-hover:bg-primary/5 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="heading-sm mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeature;
