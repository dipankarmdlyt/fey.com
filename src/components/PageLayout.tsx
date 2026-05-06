import * as React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  onBack: () => void;
  className?: string;
}

export default function PageLayout({ title, subtitle, children, onBack, className }: PageLayoutProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={cn("min-h-screen pt-32 pb-40 px-6 max-w-7xl mx-auto", className)}
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-bold uppercase tracking-widest">Back</span>
      </button>

      <div className="mb-20">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">{title}</h1>
        {subtitle && <p className="text-xl text-white/40 font-medium max-w-2xl leading-relaxed">{subtitle}</p>}
      </div>

      {children}
    </motion.div>
  );
}
