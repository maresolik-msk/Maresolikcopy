import React from 'react';
import { motion } from 'motion/react';
import { cn } from './utils';

interface SciFiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const SciFiButton = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className,
  ...props
}: SciFiButtonProps) => {
  
  const baseStyles = "relative group inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  
  const variants = {
    primary: "bg-[#021020] text-white hover:bg-[#0a2540]",
    secondary: "bg-white text-[#021020] hover:bg-gray-100",
    outline: "bg-transparent border border-current hover:bg-current/10",
    ghost: "bg-transparent hover:bg-current/5",
  };
  
  const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-12 px-6 text-sm",
    lg: "h-14 px-8 text-base",
  };

  // angled corners clip-path
  const clipPathStyle = {
    clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)"
  };

  return (
    <motion.div
      role="button"
      tabIndex={0}
      whileHover="hover"
      whileTap="tap"
      variants={{
        hover: { y: -1 },
        tap: { y: 1 }
      }}
      className={cn(baseStyles, variants[variant], sizes[size], className, "transform-gpu")}
      style={variant !== 'ghost' ? clipPathStyle : undefined}
      {...props as any}
    >
      {/* Technical decorative markers for primary/secondary */}
      {(variant === 'primary' || variant === 'secondary') && (
        <>
          <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-current opacity-30 group-hover:opacity-100 transition-opacity" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-current opacity-30 group-hover:opacity-100 transition-opacity" />
        </>
      )}

      <span className="relative flex items-center gap-3 z-10 uppercase tracking-[0.1em]">
        {children}
        {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
      </span>
      
      {/* Background sweep effect for outline */}
      {variant === 'outline' && (
        <span className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0" />
      )}
      
      {/* Shine Effect (Hover) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[inherit]">
        <motion.div
           className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
           initial={{ x: '-150%' }}
           variants={{
             hover: { x: '350%', transition: { duration: 1.5, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" } }
           }}
        />
      </div>
    </motion.div>
  );
};
