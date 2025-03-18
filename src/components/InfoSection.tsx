
import React from 'react';
import AnimatedSection from './AnimatedSection';
import Button from './Button';
import { Activity, Cpu, LineChart, Sparkles } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <AnimatedSection animation="fade-in-left" className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl transform rotate-3"></div>
              <div className="absolute -inset-4 bg-accent/5 rounded-3xl transform -rotate-3"></div>
              <div className="relative futuristic-border p-3 rounded-2xl overflow-hidden shadow-xl">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Health monitoring app" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="absolute -right-6 -bottom-6 rounded-lg shadow-lg bg-white/90 backdrop-blur-sm p-3 md:p-4 futuristic-border">
                <div className="flex space-x-3 items-center">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Activity className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold">Health Prediction</div>
                    <div className="text-sm text-green-600 font-bold">98.7% Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-right" className="order-1 lg:order-2">
            <div className="badge bg-accent/10 text-accent mb-4 backdrop-blur-sm">
              Predictive Technology
            </div>
            <h2 className="heading-lg mb-6">
              <span className="highlight-text">Neural</span> Health Monitoring for Preventive Care
            </h2>
            <p className="text-gray-600 mb-6">
              Our proprietary AI system processes billions of data points from your body's micro-patterns to identify potential health issues before symptoms develop, giving you weeks of advance warning.
            </p>
            <ul className="space-y-5 mb-8">
              <li className="flex items-start">
                <div className="mr-3 mt-1 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Cpu className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Neural Processing Engine</p>
                  <p className="text-sm text-gray-600">Processes 2.5TB of biometric data daily with medical-grade accuracy</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <LineChart className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Predictive Analytics</p>
                  <p className="text-sm text-gray-600">Identifies 98.7% of health anomalies 18-21 days before symptoms</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Personalized Intervention</p>
                  <p className="text-sm text-gray-600">Generates custom preventive protocols based on your unique biology</p>
                </div>
              </li>
            </ul>
            <Button withArrow variant="accent" glow>Explore Technology</Button>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-in-left">
            <div className="badge bg-accent/10 text-accent mb-4 backdrop-blur-sm">
              Personalized Prevention
            </div>
            <h2 className="heading-lg mb-6">
              <span className="highlight-text">Tailored</span> Health Protocols
            </h2>
            <p className="text-gray-600 mb-6">
              When our system detects a potential health issue, it generates a personalized prevention protocol designed specifically for your unique biological profile and lifestyle.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="futuristic-card p-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <div className="text-primary font-semibold">01</div>
                </div>
                <h3 className="font-medium mb-2">Early Detection</h3>
                <p className="text-sm text-gray-600">System identifies micro-changes in your biometrics</p>
              </div>
              <div className="futuristic-card p-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <div className="text-primary font-semibold">02</div>
                </div>
                <h3 className="font-medium mb-2">Risk Assessment</h3>
                <p className="text-sm text-gray-600">AI evaluates potential health implications</p>
              </div>
              <div className="futuristic-card p-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <div className="text-primary font-semibold">03</div>
                </div>
                <h3 className="font-medium mb-2">Protocol Creation</h3>
                <p className="text-sm text-gray-600">Custom prevention plan generated for your biology</p>
              </div>
              <div className="futuristic-card p-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <div className="text-primary font-semibold">04</div>
                </div>
                <h3 className="font-medium mb-2">Guided Implementation</h3>
                <p className="text-sm text-gray-600">Step-by-step support to implement changes</p>
              </div>
            </div>
            <Button withArrow variant="accent" glow>View Sample Protocol</Button>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-right" className="relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl transform -rotate-2"></div>
              <div className="absolute -inset-4 bg-accent/5 rounded-3xl transform rotate-2"></div>
              <div className="relative futuristic-border p-3 rounded-2xl overflow-hidden shadow-xl">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1542013936693-884638332954?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Health insights dashboard" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="absolute -left-6 -bottom-6 rounded-lg shadow-lg bg-white/90 backdrop-blur-sm p-3 md:p-4 futuristic-border">
                <div className="flex space-x-3 items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <LineChart className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold">Prevention Rate</div>
                    <div className="text-sm text-blue-600 font-bold">94% Effective</div>
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

export default InfoSection;
