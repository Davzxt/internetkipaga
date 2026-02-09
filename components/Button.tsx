
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  text: string;
  href: string;
  className?: string;
  size?: 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ text, href, className = '', size = 'md' }) => {
  const sizeClasses = size === 'lg' ? 'px-12 py-5 text-xl' : 'px-8 py-4 text-base';
  
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden inline-block bg-slate-900 text-white font-bold rounded-2xl shadow-2xl shadow-slate-300 transition-all duration-300 text-center tracking-tight group ${sizeClasses} ${className}`}
    >
      <div className="absolute inset-0 shimmer pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span className="relative z-10 flex items-center justify-center gap-3">
        {text}
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
    </motion.a>
  );
};
