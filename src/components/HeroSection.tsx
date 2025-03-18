
import React from 'react';
import Button from './Button';
import AnimatedSection from './AnimatedSection';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-2/3 h-2/3 bg-blue-50 rounded-full blur-3xl opacity-30 transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-50 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <AnimatedSection animation="fade-in-left" className="max-w-2xl">
            <div className="badge bg-blue-100 text-blue-800 mb-6">
              Revolutionizing Health Monitoring
            </div>
            <h1 className="heading-hero mb-6">
              Your Complete Health Picture in One Place
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Track, analyze, and improve your health with our comprehensive health monitoring system. Get personalized insights and take control of your wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" withArrow>Get Started</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-right" delay="400" className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl opacity-20 animate-pulse-slow"></div>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/40 backdrop-blur-sm rounded-3xl shadow-lg transform rotate-3 scale-95"></div>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg transform -rotate-3 scale-95"></div>
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden p-4 md:p-6 transform animate-float">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-gray-100 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Health dashboard" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                    </div>
                    <div>
                      <div className="h-3 w-24 bg-gray-200 rounded mb-2"></div>
                      <div className="h-2 w-16 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-12 bg-blue-50 rounded flex items-center justify-center p-2">
                      <div className="w-full h-2 bg-blue-200 rounded"></div>
                    </div>
                    <div className="h-12 bg-green-50 rounded flex items-center justify-center p-2">
                      <div className="w-full h-2 bg-green-200 rounded"></div>
                    </div>
                    <div className="h-12 bg-purple-50 rounded flex items-center justify-center p-2">
                      <div className="w-full h-2 bg-purple-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
