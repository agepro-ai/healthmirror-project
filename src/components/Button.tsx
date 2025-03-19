
import React from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  fullWidth?: boolean;
  glow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  fullWidth = false,
  glow = false,
  ...props
}) => {
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 relative',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-white/10 bg-transparent hover:bg-accent/10 hover:text-accent-foreground transition-colors',
    ghost: 'hover:bg-accent/10 hover:text-accent-foreground',
    accent: 'bg-accent text-white hover:bg-accent/90'
  };

  const sizes = {
    sm: 'h-8 rounded-md px-3 text-xs',
    md: 'h-10 rounded-md px-4 py-2',
    lg: 'h-12 rounded-md px-6 py-3 text-lg'
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        glow && 'shadow-[0_0_10px_rgba(var(--primary)/30)]',
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {withArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </button>
  );
};

export default Button;
