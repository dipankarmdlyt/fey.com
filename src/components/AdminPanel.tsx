import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

// Subcomponents
import { AdminSidebar } from './admin/AdminSidebar';
import { AdminHeader } from './admin/AdminHeader';
import { KPIGrid } from './admin/KPIGrid';
import { AIInsightsPanel } from './admin/AIInsightsPanel';
import { DataTableAdvanced } from './admin/DataTableAdvanced';
import { WorkflowBuilder } from './admin/WorkflowBuilder';
import { AnalyticsSuite } from './admin/AnalyticsSuite';
import { BillingPage } from './admin/BillingPage';
import { SystemLogs } from './admin/SystemLogs';

// Charts
import { 
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip 
} from 'recharts';
import { ArrowRight, ChevronRight, TrendingUp, Settings } from 'lucide-react';

type AdminTab = 'dashboard' | 'users' | 'billing' | 'analytics' | 'workflows' | 'integrations' | 'logs' | 'security' | 'settings';

const revenueData = [
  { name: '01 Oct', value: 42000 },
  { name: '05 Oct', value: 38000 },
  { name: '10 Oct', value: 45000 },
  { name: '15 Oct', value: 44000 },
  { name: '20 Oct', value: 52000 },
  { name: '25 Oct', value: 49000 },
  { name: '30 Oct', value: 58000 },
];

export default function AdminPanel({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            <header>
              <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Executive Overview</h1>
              <p className="text-sm text-white/40">Real-time performance metrics across all product verticals.</p>
            </header>

            <KPIGrid />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2 space-y-8">
                <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-6 bg-white/[0.01]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-white">Revenue Performance</h3>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-white/20">Net sales (USD)</p>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-accent" />
                         <span className="text-[10px] font-bold uppercase text-white/40">Revenue</span>
                       </div>
                    </div>
                  </div>
                  <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={revenueData}>
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00FF88" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#00FF88" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'rgba(255,255,255,0.2)' }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'rgba(255,255,255,0.2)' }} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px' }}
                          itemStyle={{ fontSize: '10px', color: '#fff' }}
                        />
                        <Area type="monotone" dataKey="value" stroke="#00FF88" fillOpacity={1} fill="url(#colorValue)" strokeWidth={3} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="glass rounded-[2rem] border-white/5 overflow-hidden">
                   <div className="p-6 border-b border-white/5 flex items-center justify-between">
                      <h3 className="font-bold text-white">Advanced Live Stream</h3>
                      <button className="text-[10px] font-bold uppercase tracking-widest text-accent flex items-center gap-1 group">
                        Live Monitor <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                   </div>
                   <div className="divide-y divide-white/5">
                      {[1,2,3].map(i => (
                        <div key={i} className="p-6 flex items-center justify-between hover:bg-white/[0.01] transition-colors group">
                           <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-xl glass flex items-center justify-center font-bold text-[10px] text-accent/60">EV</div>
                              <div>
                                 <div className="text-sm font-bold text-white">Global Event Processing</div>
                                 <div className="text-xs text-white/30 truncate max-w-[200px]">Node #042 processed transaction successfully.</div>
                              </div>
                           </div>
                           <div className="text-right">
                              <div className="text-xs font-bold text-white/40">24s ago</div>
                              <div className="text-[10px] font-bold text-accent uppercase tracking-widest">Verified</div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              <div className="space-y-8">
                <AIInsightsPanel />
                
                <div className="glass p-6 rounded-3xl border border-white/5 space-y-4 bg-white/[0.01]">
                  <h3 className="font-bold text-white flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    System Health
                  </h3>
                  <div className="space-y-4">
                    {[
                      { label: 'API Gateway', status: 'Online', load: '12%', color: '#00FF88' },
                      { label: 'Auth Service', status: 'Online', load: '45%', color: '#00FF88' },
                      { label: 'Sync Engine', status: 'Latent', load: '89%', color: '#f59e0b' },
                      { label: 'Static Assets', status: 'Online', load: '5%', color: '#00FF88' },
                    ].map(s => (
                      <div key={s.label} className="space-y-1.5">
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                          <span className="text-white/40">{s.label}</span>
                          <span style={{ color: s.color }}>{s.status} ({s.load})</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className="h-full transition-all duration-1000 ease-out" 
                            style={{ width: s.load, backgroundColor: s.color }} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'users':
        return (
          <div className="space-y-8">
            <header>
              <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Identity Management</h1>
              <p className="text-sm text-white/40">Full granular control over 124,592 user profiles and permissions.</p>
            </header>
            <DataTableAdvanced />
          </div>
        );
      case 'workflows':
        return <WorkflowBuilder />;
      case 'analytics':
        return <AnalyticsSuite />;
      case 'billing':
        return <BillingPage />;
      case 'logs':
        return <SystemLogs />;
      case 'settings':
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] space-y-6">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <Settings className="w-10 h-10 text-white/20 animate-spin-slow" />
            </div>
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter text-white">System Settings</h1>
              <p className="text-sm uppercase tracking-widest font-bold text-white/40">This module is currently being provisioned</p>
            </div>
            <button 
              onClick={onBack}
              className="px-8 py-3 bg-accent text-black rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,255,136,0.2)]"
            >
              Return to Website
            </button>
          </div>
        );
      default:
    }
  };

  return (
    <div className="fixed inset-0 z-[200] bg-[#050505] flex overflow-hidden text-white font-sans">
      <AdminSidebar 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setIsSidebarOpen(false);
        }} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onExit={onBack}
      />

      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
        </div>

        <AdminHeader onExit={onBack} onMenuClick={() => setIsSidebarOpen(true)} activeTab={activeTab} />

        <main className="flex-1 overflow-y-auto p-10 custom-scrollbar relative z-10 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.99 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
