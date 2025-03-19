
import React from 'react';
import { BrainCircuit, Heart, ActivitySquare, Shield, Stethoscope, CircuitBoard, Database, TrendingUp, Zap, UserCheck } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const features = [
  {
    icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    title: "AI-Powered Preventive Health",
    description: "Biomarker-based risk detection with personalized nutrition, sleep, fitness, and supplementation plans."
  },
  {
    icon: <ActivitySquare className="h-6 w-6 text-primary" />,
    title: "Continuous Health Monitoring",
    description: "Wearable tech integration, AI-driven alerts, and dynamic health interventions."
  },
  {
    icon: <UserCheck className="h-6 w-6 text-primary" />,
    title: "24/7 Expert-Led Care",
    description: "Virtual access to doctors, nutritionists, and health coaches for proactive management."
  },
  {
    icon: <Database className="h-6 w-6 text-primary" />,
    title: "Seamless, Smart Care",
    description: "A centralized dashboard for real-time insights, coordination with providers, and ongoing optimization."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-primary" />,
    title: "Proactive Health Management",
    description: "Moving beyond treatment to continuous monitoring, predictive risk detection, and personalized interventions."
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Scalable Tech-Driven Solution",
    description: "Our AI-powered, asset-light model is globally scalable, targeting India's 24.65M preventive health seekers."
  }
];

const ProductFeature: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/10 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs font-medium border border-primary/20 rounded-full bg-primary/5 text-primary">
            The Future of Preventive Health
          </div>
          <h2 className="heading-xl mb-6">
            Proactive <span className="text-primary">AI-Driven</span> Healthcare Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SIHA delivers continuous monitoring, predictive analytics, and personalized interventions to empower millions to live healthier, better quality lives.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={index} 
              delay={index % 3 === 0 ? 'none' : (index % 3 === 1 ? '200' : '400')}
            >
              <div className="p-6 rounded-lg border border-white/5 bg-secondary/20 hover:bg-secondary/30 transition-colors">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeature;
