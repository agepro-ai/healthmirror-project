
import React from 'react';
import { Activity, Heart, BarChart4, Brain, Smartphone, ShieldCheck } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const features = [
  {
    icon: <Activity className="h-6 w-6 text-blue-600" />,
    title: "Activity Tracking",
    description: "Track steps, workouts, and daily movement with precision and reliability."
  },
  {
    icon: <Heart className="h-6 w-6 text-blue-600" />,
    title: "Heart Health",
    description: "Monitor heart rate, variability, and recovery to optimize cardiovascular health."
  },
  {
    icon: <BarChart4 className="h-6 w-6 text-blue-600" />,
    title: "Health Analytics",
    description: "Get personalized insights based on your unique health data and patterns."
  },
  {
    icon: <Brain className="h-6 w-6 text-blue-600" />,
    title: "Cognitive Health",
    description: "Track focus, mental energy, and cognitive performance over time."
  },
  {
    icon: <Smartphone className="h-6 w-6 text-blue-600" />,
    title: "Mobile Integration",
    description: "Seamlessly connect with your devices for continuous health monitoring."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
    title: "Privacy Protection",
    description: "Your health data is encrypted and protected with military-grade security."
  }
];

const ProductFeature: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="badge bg-blue-100 text-blue-800 mb-4">
            Premium Features
          </div>
          <h2 className="heading-xl mb-6">
            Complete Health Monitoring System
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform offers everything you need to track, analyze, and improve your health with precision and ease.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={index} 
              delay={`${(index % 3) * 200}` as '0' | '200' | '400' | '600' | '800' | '1000' | 'none'}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="heading-sm mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeature;
