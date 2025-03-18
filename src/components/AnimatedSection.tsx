
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'scale-in';
  delay?: 'none' | '200' | '400' | '600' | '800' | '1000';
  threshold?: number;
  children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-in',
  delay = 'none',
  threshold = 0.2,
  className,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? `animate-${animation}` : 'opacity-0',
        delay !== 'none' ? `animation-delay-${delay}` : '',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
