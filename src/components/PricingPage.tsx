import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';
import PageLayout from './PageLayout';
import { cn } from '@/src/lib/utils';

const PricingCard = ({ title, price, features, isPro, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className={cn(
      "glass p-10 rounded-[2.5rem] flex flex-col relative overflow-hidden",
      isPro && "border-accent/30 shadow-[0_0_80px_rgba(0,255,136,0.05)]"
    )}
  >
    {isPro && (
      <div className="absolute top-8 right-8 bg-accent text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
        Popular
      </div>
    )}
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <div className="flex items-baseline gap-1 mb-8">
      <span className="text-5xl font-bold tracking-tighter">${price}</span>
      <span className="text-white/40 font-medium">/mo</span>
    </div>
    <ul className="space-y-4 mb-12 flex-1">
      {features.map((feature: string, i: number) => (
        <li key={i} className="flex items-start gap-3 text-sm text-white/60">
          <Check size={18} className="text-accent shrink-0 mt-0.5" />
          {feature}
        </li>
      ))}
    </ul>
    <button className={cn(
      "w-full py-5 rounded-full font-bold text-sm transition-all active:scale-95",
      isPro ? "bg-accent text-black" : "glass text-white hover:bg-white/10"
    )}>
      {price === '0' ? 'Get started' : 'Start free trial'}
    </button>
  </motion.div>
);

export default function PricingPage({ onBack }: { onBack: () => void }) {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('annual');

  return (
    <PageLayout 
      onBack={onBack}
      title="Pricing."
      subtitle="Simple, transparent, and built for everyone. No hidden fees, just pure data."
    >
      <div className="flex justify-center mb-16">
        <div className="glass p-1 rounded-full flex">
          <button 
            onClick={() => setBilling('monthly')}
            className={cn(
              "px-8 py-3 rounded-full text-xs font-bold transition-all",
              billing === 'monthly' ? "bg-white text-black" : "text-white/40 hover:text-white"
            )}
          >
            Monthly
          </button>
          <button 
            onClick={() => setBilling('annual')}
            className={cn(
              "px-8 py-3 rounded-full text-xs font-bold transition-all flex items-center gap-2",
              billing === 'annual' ? "bg-white text-black" : "text-white/40 hover:text-white"
            )}
          >
            Annual
            <span className="bg-accent/20 text-accent px-2 py-0.5 rounded-md text-[8px] uppercase">-20%</span>
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <PricingCard 
          title="Free"
          price="0"
          features={[
            "Basic charts & data",
            "1 linked brokerage",
            "Daily morning recap",
            "Community forum access"
          ]}
          delay={0.1}
        />
        <PricingCard 
          title="Pro"
          price={billing === 'annual' ? '24' : '29'}
          features={[
            "Unlimited brokerage sync",
            "High-fidelity live charts",
            "AI-powered earnings summaries",
            "Screener natural language search",
            "Priority support"
          ]}
          isPro
          delay={0.2}
        />
        <PricingCard 
          title="Enterprise"
          price={billing === 'annual' ? '89' : '99'}
          features={[
            "Everything in Pro",
            "API access for developers",
            "Dedicated account manager",
            "Team collaboration tools",
            "Compliance reporting tools"
          ]}
          delay={0.3}
        />
      </div>

      <div className="mt-32 glass p-12 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-12 border-white/5">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-accent">
            <Info size={32} />
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-1">Need a custom plan?</h4>
            <p className="text-white/40 font-medium tracking-tight">For high-frequency traders and larger institutions.</p>
          </div>
        </div>
        <button className="glass px-10 py-5 rounded-full font-bold text-sm hover:bg-white/10 transition-all">
          Contact Sales
        </button>
      </div>
    </PageLayout>
  );
}
