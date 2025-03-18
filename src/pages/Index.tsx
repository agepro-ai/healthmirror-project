
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductFeature from '@/components/ProductFeature';
import InfoSection from '@/components/InfoSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';

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
      <section id="pricing" className="py-20 md:py-28">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge bg-blue-100 text-blue-800 mb-4">
              Pricing
            </div>
            <h2 className="heading-xl mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that's right for you and start monitoring your health with precision.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection 
              delay="0" 
              className="bg-white border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Basic</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="text-blue-500 mr-2">✓</div>
                  <span>Basic health tracking</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-500 mr-2">✓</div>
                  <span>30-day data history</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-500 mr-2">✓</div>
                  <span>Weekly health reports</span>
                </li>
              </ul>
              <Button variant="outline" fullWidth>
                Get Started
              </Button>
            </AnimatedSection>
            
            <AnimatedSection 
              delay="200" 
              className="bg-white border-2 border-blue-500 rounded-xl p-8 shadow-lg relative md:transform md:scale-105 md:-translate-y-2"
            >
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <div className="badge bg-blue-500 text-white">
                  Most Popular
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Premium</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="text-blue-500 mr-2">✓</div>
                  <span>Advanced health metrics</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-500 mr-2">✓</div>
                  <span>1-year data history</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-500 mr-2">✓</div>
                  <span>Daily health insights</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-500 mr-2">✓</div>
                  <span>Personalized recommendations</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-500 mr-2">✓</div>
                  <span>Priority support</span>
                </li>
              </ul>
              <Button fullWidth>
                Get Started
              </Button>
            </AnimatedSection>
            
            <AnimatedSection 
              delay="400" 
              className="bg-white border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="text-blue-500 mr-2">✓</div>
                  <span>All Premium features</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-500 mr-2">✓</div>
                  <span>Team management</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-500 mr-2">✓</div>
                  <span>API access</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-500 mr-2">✓</div>
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-500 mr-2">✓</div>
                  <span>Dedicated support</span>
                </li>
              </ul>
              <Button variant="outline" fullWidth>
                Contact Sales
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="heading-lg mb-6">
                Ready to Transform Your Health Journey?
              </h2>
              <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto">
                Join thousands of users who are taking control of their health with our comprehensive monitoring platform.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg"
              >
                Get Started Today
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
