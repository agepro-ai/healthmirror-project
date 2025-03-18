
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductFeature from '@/components/ProductFeature';
import InfoSection from '@/components/InfoSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';
import { Check, ShieldCheck } from 'lucide-react';

const Index = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isAnchor = target.tagName === 'A' && target.hasAttribute('href') && target.getAttribute('href')?.startsWith('#');
      
      if (isAnchor) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductFeature />
      <InfoSection />
      <Testimonials />
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-28 bg-gradient-to-b from-white to-secondary/50">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge bg-accent/10 text-accent mb-4 backdrop-blur-sm">
              Pricing
            </div>
            <h2 className="heading-xl mb-6">
              Invest in <span className="text-primary">Preventive</span> Health
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your preventive health monitoring plan and start detecting potential health issues weeks before symptoms appear.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection 
              delay="none" 
              className="futuristic-card group hover:border-primary/20 transition-all duration-300"
            >
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Essential</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="text-primary mr-2 mt-0.5"><Check className="h-4 w-4" /></div>
                    <span>Core health monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary mr-2 mt-0.5"><Check className="h-4 w-4" /></div>
                    <span>30-day data history</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary mr-2 mt-0.5"><Check className="h-4 w-4" /></div>
                    <span>Weekly prediction reports</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary mr-2 mt-0.5"><Check className="h-4 w-4" /></div>
                    <span>Basic prevention protocols</span>
                  </li>
                </ul>
                <Button variant="outline" fullWidth>
                  Get Started
                </Button>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            </AnimatedSection>
            
            <AnimatedSection 
              delay="200" 
              className="futuristic-border p-1 rounded-2xl relative md:transform md:scale-105 md:-translate-y-2"
            >
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <div className="badge bg-accent text-white">
                  Most Popular
                </div>
              </div>
              <div className="futuristic-card h-full">
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-primary">Advanced</h3>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">$79</span>
                      <span className="text-gray-500 ml-2">/month</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <div className="text-accent mr-2 mt-0.5"><Check className="h-4 w-4" /></div>
                      <span>Comprehensive monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-accent mr-2 mt-0.5"><Check className="h-4 w-4" /></div>
                      <span>1-year data history</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-accent mr-2 mt-0.5"><Check className="h-4 w-4" /></div>
                      <span>Daily prediction updates</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-accent mr-2 mt-0.5"><Check className="h-4 w-4" /></div>
                      <span>Personalized prevention protocols</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-accent mr-2 mt-0.5"><Check className="h-4 w-4" /></div>
                      <span>Human health specialist review</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-accent mr-2 mt-0.5"><Check className="h-4 w-4" /></div>
                      <span>Priority support</span>
                    </li>
                  </ul>
                  <Button fullWidth glow>
                    Get Started
                  </Button>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection 
              delay="400" 
              className="futuristic-card group hover:border-primary/20 transition-all duration-300"
            >
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Enterprise</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">$199</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="text-primary mr-2 mt-0.5"><Check className="h-4 w-4" /></div>
                    <span>All Advanced features</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary mr-2 mt-0.5"><Check className="h-4 w-4" /></div>
                    <span>Team health monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary mr-2 mt-0.5"><Check className="h-4 w-4" /></div>
                    <span>Dedicated MD consultations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary mr-2 mt-0.5"><Check className="h-4 w-4" /></div>
                    <span>Full API access</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary mr-2 mt-0.5"><Check className="h-4 w-4" /></div>
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary mr-2 mt-0.5"><Check className="h-4 w-4" /></div>
                    <span>On-demand clinical support</span>
                  </li>
                </ul>
                <Button variant="outline" fullWidth>
                  Contact Sales
                </Button>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593217188322-1291b42944d1?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-block mb-6 rounded-xl border border-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Preventive Health Revolution</span>
                </div>
              </div>
              <h2 className="heading-lg mb-6 text-white">
                Stop Reacting to Health Issues.<br />Start Preventing Them.
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands using neural health monitoring to predict and prevent health issues before they begin.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90"
                  glow
                >
                  Start Prevention Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-white border-white/30 hover:bg-white/10"
                >
                  Book a Demo
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
