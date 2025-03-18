
import React from 'react';
import AnimatedSection from './AnimatedSection';
import Button from './Button';

const InfoSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <AnimatedSection animation="fade-in-left" className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-50 rounded-3xl transform rotate-3"></div>
              <div className="absolute -inset-4 bg-blue-100/30 rounded-3xl transform -rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Health monitoring app" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -right-6 -bottom-6 rounded-lg shadow-lg bg-white p-3 md:p-4 transform animate-float">
                <div className="flex space-x-3 items-center">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="h-5 w-5 rounded-full bg-green-500"></div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold">Health Score</div>
                    <div className="text-sm text-green-600 font-bold">Excellent</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-right" className="order-1 lg:order-2">
            <div className="badge bg-blue-100 text-blue-800 mb-4">
              How It Works
            </div>
            <h2 className="heading-lg mb-6">
              Smart Health Monitoring for Modern Life
            </h2>
            <p className="text-gray-600 mb-6">
              Our innovative system uses advanced sensors and analytics to provide you with a comprehensive view of your health in real-time. The intuitive dashboard makes it easy to understand your health metrics and take action.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                </div>
                <p>Continuous health monitoring with passive sensors</p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                </div>
                <p>AI-powered analysis of your health patterns</p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                </div>
                <p>Personalized recommendations based on your data</p>
              </li>
            </ul>
            <Button withArrow>Learn More</Button>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-in-left">
            <div className="badge bg-blue-100 text-blue-800 mb-4">
              Personalized Insights
            </div>
            <h2 className="heading-lg mb-6">
              Tailored Health Recommendations
            </h2>
            <p className="text-gray-600 mb-6">
              Our advanced AI algorithms analyze your unique health data to provide personalized recommendations that help you optimize your wellbeing and prevent health issues.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                </div>
                <p>Nutrition guidance based on your metabolic profile</p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                </div>
                <p>Custom activity recommendations that fit your lifestyle</p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                </div>
                <p>Sleep optimization strategies for better recovery</p>
              </li>
            </ul>
            <Button withArrow>Explore Insights</Button>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-right" className="relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-50 rounded-3xl transform -rotate-2"></div>
              <div className="absolute -inset-4 bg-blue-100/30 rounded-3xl transform rotate-2"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1542013936693-884638332954?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Health insights dashboard" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -left-6 -bottom-6 rounded-lg shadow-lg bg-white p-3 md:p-4 transform animate-float animation-delay-400">
                <div className="flex space-x-3 items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="h-5 w-5 rounded-full bg-blue-500"></div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold">Sleep Quality</div>
                    <div className="text-sm text-blue-600 font-bold">Improved 23%</div>
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
