
import React from 'react';
import Button from './Button';
import AnimatedSection from './AnimatedSection';
import { BrainCircuit, ActivitySquare, Heart, Shield } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-36 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-2/3 h-2/3 bg-accent/5 rounded-full blur-3xl opacity-30 transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <AnimatedSection animation="fade-in-left" className="max-w-2xl">
            <div className="badge bg-accent/10 text-accent mb-6 backdrop-blur-sm">
              Advanced Preventive Health Monitoring
            </div>
            <h1 className="heading-hero mb-6">
              <span className="text-primary">Predict</span> Health Issues <br />Before They Begin
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Our AI-driven preventive health system continuously monitors your biometrics to detect potential health issues weeks before symptoms appear.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-primary/10">
                  <BrainCircuit className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm">Neural Processing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-primary/10">
                  <ActivitySquare className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm">24/7 Monitoring</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-primary/10">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm">Heart Analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-primary/10">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm">Data Protection</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" withArrow glow>Start Monitoring</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-right" delay="400" className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 rounded-3xl opacity-40"></div>
              
              <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-sm rounded-3xl overflow-hidden futuristic-border">
                <div className="absolute top-6 left-6 right-6 bottom-6 rounded-2xl overflow-hidden bg-white/60"></div>
                
                <div className="absolute top-0 left-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-accent/30 to-transparent"></div>
                <div className="absolute top-1/2 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                
                <div className="absolute top-8 left-8 data-display font-mono">
                  HR: 62 bpm <span className="inline-block w-2 h-2 rounded-full bg-green-400 ml-1"></span>
                </div>
                
                <div className="absolute top-8 right-8 data-display font-mono">
                  SpO2: 98% <span className="inline-block w-2 h-2 rounded-full bg-blue-400 ml-1"></span>
                </div>
                
                <div className="absolute bottom-8 left-8 data-display font-mono">
                  HRV: 68ms <span className="inline-block w-2 h-2 rounded-full bg-purple-400 ml-1"></span>
                </div>
                
                <div className="absolute bottom-8 right-8 data-display font-mono">
                  Sleep: 7.2h <span className="inline-block w-2 h-2 rounded-full bg-indigo-400 ml-1"></span>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border-2 border-primary/20 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full border-2 border-accent/20 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-center p-4">
                        <div>
                          <div className="text-3xl font-bold text-primary">98</div>
                          <div className="text-xs opacity-70 font-medium">Health Score</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Animated data points */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {[...Array(12)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-1 h-1 bg-primary/40 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `data-flow ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`
                      }}
                    />
                  ))}
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
