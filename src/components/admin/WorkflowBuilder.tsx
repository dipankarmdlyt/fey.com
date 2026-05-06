import React from 'react';
import { motion } from 'motion/react';
import { Play, Plus, Zap, Mail, Database, UserPlus, ArrowRight, Settings, Trash2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const workflows = [
  {
    id: 1,
    name: 'New Pro Signup',
    trigger: 'User upgraded to Pro',
    steps: [
      { type: 'action', label: 'Email Welcome', icon: Mail },
      { type: 'action', label: 'Sync Broker', icon: Database },
      { type: 'action', label: 'Tag VIP', icon: UserPlus },
    ],
    active: true,
    executions: '124'
  },
  {
    id: 2,
    name: 'Churn Recovery',
    trigger: 'Subscription cancelled',
    steps: [
      { type: 'action', label: 'Wait 24h', icon: Zap },
      { type: 'action', label: 'Send Offer', icon: Mail },
    ],
    active: true,
    executions: '42'
  },
  {
    id: 3,
    name: 'Trial Nudge',
    trigger: 'Trial day 6 reach',
    steps: [
      { type: 'action', label: 'Email Nudge', icon: Mail },
    ],
    active: false,
    executions: '0'
  }
];

export const WorkflowBuilder = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-white tracking-tight">Automation Workflows</h2>
          <p className="text-xs text-white/40">Build and manage event-driven automation nodes.</p>
        </div>
        <button className="bg-accent text-black px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:scale-[1.02] transition-all">
          <Plus size={14} /> New Workflow
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {workflows.map((workflow, idx) => (
          <motion.div
            key={workflow.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="glass rounded-3xl border border-white/5 overflow-hidden flex flex-col group hover:border-white/10 transition-all"
          >
            <div className="p-6 border-b border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    workflow.active ? "bg-accent shadow-[0_0_8px_rgba(0,255,136,0.5)]" : "bg-white/20"
                  )} />
                  <span className="text-sm font-bold text-white">{workflow.name}</span>
                </div>
                <div className="flex gap-1">
                  <button className="p-2 text-white/20 hover:text-white transition-colors"><Settings size={14} /></button>
                  <button className="p-2 text-white/20 hover:text-red-500 transition-colors"><Trash2 size={14} /></button>
                </div>
              </div>

              <div className="space-y-2">
                 <div className="text-[10px] uppercase font-bold tracking-widest text-white/20">Trigger</div>
                 <div className="p-3 glass bg-white/[0.02] border border-accent/20 rounded-xl flex items-center gap-3">
                   <Zap size={14} className="text-accent" />
                   <span className="text-xs font-bold text-accent/80">{workflow.trigger}</span>
                 </div>
              </div>
            </div>

            <div className="p-6 flex-1 space-y-4 relative">
              <div className="text-[10px] uppercase font-bold tracking-widest text-white/20">Pipeline</div>
              <div className="space-y-2 relative">
                {workflow.steps.map((step, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <div className="p-4 glass bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 group/step hover:border-accent/40 transition-all cursor-pointer">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/60 group-hover/step:text-accent group-hover/step:bg-accent/10 transition-all">
                        <step.icon size={16} />
                      </div>
                      <span className="text-xs font-bold text-white/80">{step.label}</span>
                      <ArrowRight size={14} className="ml-auto text-white/20 opacity-0 group-hover/step:opacity-100 transition-all" />
                    </div>
                    {sIdx < workflow.steps.length - 1 && (
                      <div className="w-px h-4 bg-white/10 ml-8" />
                    )}
                  </React.Fragment>
                ))}
                <button className="w-full py-3 glass bg-transparent border-dashed border border-white/10 rounded-2xl flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white hover:border-white/30 transition-all">
                  <Plus size={12} /> Add Step
                </button>
              </div>
            </div>

            <div className="p-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <div className="flex flex-col">
                   <span className="text-[10px] uppercase font-bold tracking-widest text-white/20 leading-none">Executions</span>
                   <span className="text-xs font-bold text-white">{workflow.executions}</span>
                 </div>
                 <div className="h-6 w-px bg-white/5" />
                 <div className="flex flex-col">
                   <span className="text-[10px] uppercase font-bold tracking-widest text-white/20 leading-none">Success</span>
                   <span className="text-xs font-bold text-accent">99.2%</span>
                 </div>
              </div>
              <button className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                workflow.active ? "bg-accent/10 text-accent hover:bg-accent/20" : "bg-white/5 text-white/20 hover:bg-white/10"
              )}>
                <Play size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
