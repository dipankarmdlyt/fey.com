import React from 'react';
import { Terminal, Shield, AlertTriangle, Info, Search, Filter, Download, Zap } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

export const SystemLogs = () => {
  const logs = [
    { id: 1, type: 'error', service: 'AUTH-API', msg: 'Database connection timeout: master-node-01', time: 'Just now', user: 'System' },
    { id: 2, type: 'warn', service: 'SYNC-LB', msg: 'Increased latency in APAC-South-1 (240ms)', time: '2m ago', user: 'CloudWatch' },
    { id: 3, type: 'info', service: 'BILLING', msg: 'Stripe webhook processed: #INV-4029', time: '12m ago', user: 'Stripe-Web' },
    { id: 4, type: 'auth', service: 'ADMIN-UI', msg: 'Superadmin login: John Doe (IP: 192.168.1.1)', time: '45m ago', user: 'JD' },
    { id: 5, type: 'info', service: 'WORKFLOW', msg: '"New Pro Signup" triggered for user@example.com', time: '1h ago', user: 'WF-Agent' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
            <Terminal size={20} />
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">Real-time System Logs</h2>
        </div>
        <div className="flex gap-2">
          <button className="glass px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-red-500 hover:bg-red-500/10 transition-all flex items-center gap-2">
            Clear Buffer
          </button>
          <button className="glass px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all flex items-center gap-2">
            <Download size={14} /> Download JSON
          </button>
        </div>
      </div>

      <div className="glass bg-black p-4 rounded-2xl border border-white/5 font-mono text-xs overflow-hidden h-[600px] flex flex-col">
        <div className="flex-1 overflow-y-auto no-scrollbar space-y-1 p-2">
          <div className="text-white/20 mb-4 border-b border-white/5 pb-2">
            [FEY-OS v4.2.0] SYSTEM KERNEL LOADED. ALL SERVICES NOMINAL. 
          </div>
          {logs.map((log, i) => (
            <motion.div 
              key={log.id} 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group flex items-start gap-4 hover:bg-white/5 p-1 rounded transition-colors"
            >
              <span className="text-white/20 shrink-0 w-20">[{log.time}]</span>
              <span className={cn(
                "shrink-0 w-24 font-bold",
                log.type === 'error' ? "text-red-500" :
                log.type === 'warn' ? "text-amber-500" :
                log.type === 'auth' ? "text-purple-500" : "text-accent"
              )}>
                {log.type.toUpperCase()}
              </span>
              <span className="text-white/20 shrink-0 w-24">[{log.service}]</span>
              <span className="text-white/80">{log.msg}</span>
              <span className="ml-auto text-white/10 group-hover:text-accent transition-colors">@{log.user}</span>
            </motion.div>
          ))}
          <div className="flex items-center gap-2 text-accent mt-4 animate-pulse">
            <Zap size={12} />
            <span>LISTENING FOR INCOMING EVENTS...</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-4">
           <div className="text-white/20 shrink-0">{'>'}</div>
           <input type="text" placeholder="Execute command or filter logs..." className="bg-transparent border-none outline-none text-white/60 placeholder:text-white/10 w-full" />
        </div>
      </div>
    </div>
  );
};
