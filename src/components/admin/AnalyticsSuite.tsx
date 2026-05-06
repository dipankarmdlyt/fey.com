import React from 'react';
import { 
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Legend
} from 'recharts';
import { Download, Calendar, Filter, TrendingUp, Users, Activity } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const cohortData = [
  { name: 'May', value: 4000, retention: 2400, ltv: 2400 },
  { name: 'Jun', value: 3000, retention: 1398, ltv: 2210 },
  { name: 'Jul', value: 2000, retention: 9800, ltv: 2290 },
  { name: 'Aug', value: 2780, retention: 3908, ltv: 2000 },
  { name: 'Sep', value: 1890, retention: 4800, ltv: 2181 },
  { name: 'Oct', value: 2390, retention: 3800, ltv: 2500 },
  { name: 'Nov', value: 3490, retention: 4300, ltv: 2100 },
];

const featureUsage = [
  { name: 'Charts', value: 400 },
  { name: 'AI Feed', value: 300 },
  { name: 'Sync', value: 300 },
  { name: 'Alerts', value: 200 },
];

const COLORS = ['#00FF88', '#3B82F6', '#8B5CF6', '#F59E0B'];

export const AnalyticsSuite = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-white tracking-tight">Enterprise Analytics Suite</h2>
          <p className="text-xs text-white/40">Multi-cohort analysis and LTV/CAC projection engine.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="glass px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all flex items-center gap-2">
            <Calendar size={14} /> Last 90 Days
          </button>
          <button className="glass px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all flex items-center gap-2">
            <Download size={14} /> Schedule PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="glass p-10 rounded-[3rem] border-white/5 space-y-8 bg-white/[0.01]">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white tracking-tight">Retention vs Acquisition</h3>
              <p className="text-[10px] uppercase font-black tracking-[0.2em] text-white/20">Normalized Monthly Cohorts</p>
            </div>
            <div className="flex gap-6">
               <div className="flex items-center gap-2.5">
                 <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,255,136,0.5)]" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-white/40">New Users</span>
               </div>
               <div className="flex items-center gap-2.5">
                 <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Retained</span>
               </div>
            </div>
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cohortData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00FF88" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#00FF88" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorRet" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.02)" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: 'rgba(255,255,255,0.3)', fontWeight: 600 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: 'rgba(255,255,255,0.3)', fontWeight: 600 }}
                />
                <Tooltip 
                  cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 2 }}
                  contentStyle={{ backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '12px 16px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
                  itemStyle={{ fontSize: '11px', fontWeight: 700, padding: '2px 0' }}
                  labelStyle={{ marginBottom: '8px', color: 'rgba(255,255,255,0.5)', fontSize: '10px', fontWeight: 800, textTransform: 'uppercase' }}
                />
                <Area type="monotone" dataKey="value" stroke="#00FF88" fillOpacity={1} fill="url(#colorValue)" strokeWidth={4} />
                <Area type="monotone" dataKey="retention" stroke="#3B82F6" fillOpacity={1} fill="url(#colorRet)" strokeWidth={4} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-6 flex flex-col">
             <div className="space-y-1">
               <h3 className="font-bold text-white">Feature Adoption</h3>
               <p className="text-[10px] uppercase font-bold tracking-widest text-white/20">Usage Radial</p>
             </div>
             <div className="flex-1 flex items-center justify-center min-h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={featureUsage}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {featureUsage.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="rgba(255,255,255,0.1)" />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                      itemStyle={{ color: '#fff', fontSize: '10px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
             </div>
             <div className="grid grid-cols-2 gap-2 pt-4">
                {featureUsage.map((item, i) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-tight">{item.name}</span>
                  </div>
                ))}
             </div>
           </div>

           <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-6 flex flex-col bg-accent/[0.01]">
              <div className="space-y-1">
                <h3 className="font-bold text-white">LTV Projected</h3>
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/20">Customer Lifetime Value</p>
              </div>
              <div className="flex-1 flex flex-col justify-center gap-8">
                 <div className="space-y-2">
                   <div className="flex items-end justify-between">
                     <div className="text-4xl font-bold tracking-tighter text-white font-mono">$1,240</div>
                     <div className="text-accent text-xs font-bold flex items-center gap-1">
                       <TrendingUp size={12} /> +12.4%
                     </div>
                   </div>
                   <div className="text-[10px] uppercase font-bold tracking-widest text-white/20">Average across All Tiers</div>
                 </div>
                 
                 <div className="space-y-4">
                    <div className="space-y-1.5">
                       <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-white/40">
                         <span>Target</span>
                         <span>$1,500</span>
                       </div>
                       <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full bg-accent w-[82%]" />
                       </div>
                    </div>
                    <p className="text-[10px] text-white/30 italic">LTV/CAC Ratio: 4.2x (Institutional Benchmark range achieved)</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
