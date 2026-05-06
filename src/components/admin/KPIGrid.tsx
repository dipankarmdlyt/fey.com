import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, AlertTriangle, Zap, Activity, ShieldAlert, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const kpis = [
  { 
    title: 'Users Today', 
    value: '1,234', 
    change: '+15%', 
    isPositive: true, 
    icon: Users,
    color: 'accent'
  },
  { 
    title: 'MRR Growth', 
    value: '$47.2k', 
    change: '+8%', 
    isPositive: true, 
    icon: TrendingUp,
    color: 'blue'
  },
  { 
    title: 'Churn Alert', 
    value: '2.3%', 
    change: '+1.2%', 
    isPositive: false, 
    icon: AlertTriangle,
    color: 'red'
  },
  { 
    title: 'AI Insights', 
    value: '42', 
    subvalue: 'Actions ready', 
    icon: Zap,
    color: 'purple'
  },
  { 
    title: 'Uptime', 
    value: '99.98%', 
    change: '+0.01%', 
    isPositive: true, 
    icon: Activity,
    color: 'accent'
  },
  { 
    title: 'Sync Errors', 
    value: '3', 
    change: 'Critical', 
    isPositive: false, 
    icon: ShieldAlert,
    color: 'red'
  },
];

export const KPIGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {kpis.map((kpi, i) => (
        <motion.div
          key={kpi.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="glass p-5 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-all border border-white/5"
        >
          <div className="flex items-center justify-between mb-3">
            <div className={cn(
              "w-8 h-8 rounded-lg flex items-center justify-center",
              kpi.color === 'accent' ? "bg-accent/10 text-accent" :
              kpi.color === 'red' ? "bg-red-500/10 text-red-500" :
              kpi.color === 'blue' ? "bg-blue-500/10 text-blue-500" :
              "bg-purple-500/10 text-purple-500"
            )}>
              <kpi.icon size={16} />
            </div>
            {kpi.change && (
              <div className={cn(
                "text-[10px] font-bold flex items-center gap-0.5",
                kpi.isPositive ? "text-accent" : "text-red-500"
              )}>
                {kpi.isPositive ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                {kpi.change}
              </div>
            )}
          </div>
          
          <div className="space-y-0.5">
            <div className="text-2xl font-bold tracking-tight text-white">{kpi.value}</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-white/30">{kpi.title}</div>
          </div>

          <div className={cn(
            "absolute top-0 right-0 w-16 h-16 blur-[30px] rounded-full opacity-10 group-hover:opacity-20 transition-all",
            kpi.color === 'accent' ? "bg-accent" :
            kpi.color === 'red' ? "bg-red-500" :
            kpi.color === 'blue' ? "bg-blue-500" :
            "bg-purple-500"
          )} />
        </motion.div>
      ))}
    </div>
  );
};
