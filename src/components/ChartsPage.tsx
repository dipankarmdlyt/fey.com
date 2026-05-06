import { motion } from 'motion/react';
import { 
  BarChart2, 
  CandlestickChart, 
  LineChart, 
  Settings2,
  Maximize2,
  Share2,
  ChevronDown
} from 'lucide-react';
import PageLayout from './PageLayout';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = Array.from({ length: 40 }, (_, i) => ({
  name: i,
  value: 400 + Math.random() * 200,
  volume: 1000 + Math.random() * 500,
}));

export default function ChartsPage({ onBack }: { onBack: () => void }) {
  return (
    <PageLayout 
      onBack={onBack}
      title="Charts."
      subtitle="Institutional-grade visualization tools. Fast, fluid, and deep."
    >
      <div className="grid lg:grid-cols-4 gap-8 h-[700px]">
        {/* Sidebar Tools */}
        <div className="glass rounded-[2rem] p-6 space-y-8 flex flex-col">
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Indicators</h4>
            <div className="space-y-2">
              {['RSI', 'MACD', 'Bollinger Bands', 'Ichimoku', 'Volume Profile'].map(i => (
                <div key={i} className="flex items-center justify-between p-3 glass bg-white/[0.01] rounded-xl text-xs font-bold hover:bg-white/5 cursor-pointer">
                  {i}
                  <div className="w-4 h-4 rounded-md border border-white/10" />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 flex-1">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Overlays</h4>
            <div className="space-y-2">
              {['VWAP', 'Moving Average (20)', 'Moving Average (50)'].map(i => (
                <div key={i} className="flex items-center justify-between p-3 glass bg-white/[0.01] rounded-xl text-xs font-bold hover:bg-white/5 cursor-pointer">
                  {i}
                  <div className="w-4 h-4 rounded-md border border-white/10 bg-accent/20" />
                </div>
              ))}
            </div>
          </div>
          <button className="w-full py-4 bg-white text-black rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-accent transition-colors mt-auto">
            Save Layout
          </button>
        </div>

        {/* Main Chart Area */}
        <div className="lg:col-span-3 glass rounded-[2.5rem] p-8 flex flex-col relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="glass px-4 py-2 rounded-xl flex items-center gap-2 font-bold text-sm">
                NVDA <ChevronDown size={14} className="text-white/40" />
              </div>
              <div className="flex gap-1 p-1 glass bg-white/[0.01] rounded-xl">
                {['1m', '5m', '1h', '1d', '1w'].map(t => (
                  <button key={t} className={cn("px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all", t === '1h' ? "bg-white text-black" : "text-white/40")}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-3 glass rounded-xl text-white/40 hover:text-white"><Settings2 size={18} /></button>
              <button className="p-3 glass rounded-xl text-white/40 hover:text-white"><Maximize2 size={18} /></button>
              <button className="p-3 glass rounded-xl text-white/40 hover:text-white"><Share2 size={18} /></button>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00FF88" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#00FF88" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                <XAxis dataKey="name" hide />
                <YAxis orientation="right" tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px' }}
                  itemStyle={{ color: '#fff', fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="value" stroke="#00FF88" strokeWidth={2} fill="url(#chartGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Volume bars placeholder */}
          <div className="h-20 w-full mt-4 flex items-end gap-1 opacity-20">
            {data.map((d, i) => (
              <div key={i} className="flex-1 bg-white" style={{ height: `${(d.volume / 1500) * 100}%` }} />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

import { cn } from '@/src/lib/utils';
