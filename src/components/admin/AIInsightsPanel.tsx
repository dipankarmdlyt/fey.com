import React from 'react';
import { motion } from 'motion/react';
import { Zap, Sparkles, ArrowRight, MessageSquare, Target, Mail } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const AIInsightsPanel = () => {
  const insights = [
    {
      title: "Churn Risk Detected",
      description: "85 Pro users on trial day 6 have zero brokerage syncs. High churn risk predicted.",
      impact: "High",
      recommendation: "Send 'Sync Assistant' discount offer (87% conversion lift)",
      icon: Target,
      color: "red"
    },
    {
      title: "Upsell Opportunity",
      description: "12% of Free users from Northern Europe exceeded trade limit 3x this week.",
      impact: "Revenue",
      recommendation: "Targeted 'Global Access' upgrade nudge",
      icon: Zap,
      color: "accent"
    },
    {
      title: "Anomaly: Trading Volume",
      description: "Unusual volume spike in AI-tech sector users. Potential segment outlier.",
      impact: "Data",
      recommendation: "Update sector weighting for personalized feeds",
      icon: Sparkles,
      color: "purple"
    }
  ];

  return (
    <div className="glass p-6 rounded-3xl border border-white/5 space-y-6 flex flex-col h-full bg-accent/[0.02]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
            <Sparkles size={20} />
          </div>
          <div>
            <h3 className="font-bold text-white">AI Copilot Insights</h3>
            <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Generated 2m ago</p>
          </div>
        </div>
        <button className="text-[10px] uppercase font-bold tracking-widest text-accent hover:underline flex items-center gap-1 group">
          View full report <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="space-y-4 flex-1">
        {insights.map((insight, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 glass bg-white/[0.02] border border-white/5 rounded-2xl space-y-3 group hover:bg-white/5 transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "px-2 py-2 rounded-lg",
                  insight.color === 'red' ? "bg-red-500/10 text-red-500" :
                  insight.color === 'accent' ? "bg-accent/10 text-accent" :
                  "bg-purple-500/10 text-purple-500"
                )}>
                  <insight.icon size={14} />
                </div>
                <span className="text-sm font-bold text-white/90">{insight.title}</span>
              </div>
              <span className={cn(
                "text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border",
                insight.color === 'red' ? "border-red-500/20 text-red-500" : "border-white/10 text-white/40"
              )}>
                {insight.impact}
              </span>
            </div>
            
            <p className="text-xs text-white/60 leading-relaxed font-medium">
              {insight.description}
            </p>

            <div className="pt-2 flex items-center justify-between gap-4">
              <div className="text-[10px] font-bold italic text-accent/80 flex items-center gap-1.5 shrink-0">
                <Target size={12} /> {insight.recommendation}
              </div>
              <div className="flex gap-2">
                <button className="p-2 glass rounded-lg text-white/40 hover:text-white hover:bg-accent/10 hover:text-accent transition-all group/btn" title="Automate">
                  <Mail size={14} />
                </button>
                <button className="p-2 glass rounded-lg text-white/40 hover:text-white hover:bg-accent/10 hover:text-accent transition-all" title="Chat about this">
                  <MessageSquare size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-4 border-t border-white/5 flex gap-3">
        <button className="flex-1 py-3 bg-accent text-black rounded-xl text-[10px] font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all">
          Execute All Automations
        </button>
        <button className="px-5 py-3 glass rounded-xl text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all">
          Pause Agent
        </button>
      </div>
    </div>
  );
};
