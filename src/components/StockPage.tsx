import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown, 
  Globe, 
  ArrowUpRight,
  Info,
  Calendar,
  Layers,
  Activity
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { cn } from '@/src/lib/utils';

interface StockData {
  ticker: string;
  name: string;
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
  chartData: any[];
}

const newsItems = [
  { title: "NVIDIA announces new H200 chips availability", time: "2h ago", source: "Reuters", sentiment: "positive" },
  { title: "Analysts raise price target following record data center growth", time: "4h ago", source: "Bloomberg", sentiment: "positive" },
  { title: "Global supply chain constraints may impact H2 shipments", time: "6h ago", source: "WSJ", sentiment: "neutral" },
];

const Metric = ({ label, value, sub }: { label: string; value: string; sub?: string }) => (
  <div className="glass p-5 rounded-2xl space-y-1">
    <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{label}</div>
    <div className="text-lg font-bold">{value}</div>
    {sub && <div className="text-[10px] text-accent font-medium">{sub}</div>}
  </div>
);

export default function StockPage({ stock, onBack }: { stock: StockData; onBack: () => void; key?: string }) {
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    setIsFlashing(true);
    const timer = setTimeout(() => setIsFlashing(false), 600);
    return () => clearTimeout(timer);
  }, [stock.price]);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen pt-24 pb-40 px-6 max-w-7xl mx-auto"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-bold uppercase tracking-widest">Back to Portfolio</span>
      </button>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Header & Main Chart */}
        <div className="lg:col-span-2 space-y-12">
          <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center font-bold text-lg">{stock.ticker}</div>
                <h1 className="text-4xl font-bold tracking-tight">{stock.name}</h1>
              </div>
              <p className="text-white/40 font-medium">NasdaqGS · Real-time price</p>
            </div>
            <div className="text-right flex flex-col items-end">
              <div className={cn(
                "text-5xl font-bold tracking-tighter transition-all duration-300",
                isFlashing ? "scale-105 text-white" : "text-white/90"
              )}>
                ${stock.price}
              </div>
              <div className={cn(
                "flex items-center gap-2 text-xl font-bold mt-1 transition-colors duration-500",
                stock.isPositive ? "text-accent" : "text-red-400"
              )}>
                {stock.isPositive ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                {stock.change} ({stock.changePercent})
              </div>
            </div>
          </section>

          {/* Large Chart Section */}
          <section className="glass rounded-[2.5rem] p-8 aspect-[16/9] lg:aspect-auto lg:h-[500px] relative overflow-hidden group">
            <div className="absolute top-8 left-8 flex items-center gap-4 z-10">
              {['1D', '1W', '1M', '3M', '1Y', 'ALL'].map((range) => (
                <button key={range} className={cn(
                  "px-3 py-1 text-[10px] font-bold rounded-lg transition-all",
                  range === '1Y' ? "bg-white text-black" : "glass text-white/40 hover:text-white"
                )}>
                  {range}
                </button>
              ))}
            </div>
            
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stock.chartData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={stock.isPositive ? "#00FF88" : "#f87171"} stopOpacity={0.2}/>
                    <stop offset="95%" stopColor={stock.isPositive ? "#00FF88" : "#f87171"} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px' }}
                  itemStyle={{ color: '#fff', fontSize: '12px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke={stock.isPositive ? "#00FF88" : "#f87171"} 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorStock)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </section>

          {/* Detailed Metrics */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Metric label="Market Cap" value="2.34T" />
            <Metric label="P/E Ratio" value="72.4" sub="-2.4% vs Avg" />
            <Metric label="Div Yield" value="0.04%" />
            <Metric label="Volatility" value="High" sub="Beta 1.62" />
            <Metric label="Revenues" value="$26.04B" sub="+262% YoY" />
            <Metric label="EBITDA" value="$16.9B" />
            <Metric label="Employees" value="29,600" />
            <Metric label="Next Earnings" value="May 22" />
          </section>
        </div>

        {/* Sidebar: News & Profile */}
        <div className="space-y-12">
          <section className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Activity size={20} className="text-accent" />
              Real-time News
            </h3>
            <div className="space-y-4">
              {newsItems.map((news, i) => (
                <div key={i} className="glass glass-hover p-5 rounded-2xl cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{news.source}</span>
                    <span className="text-[10px] text-white/20">{news.time}</span>
                  </div>
                  <p className="text-sm font-medium leading-relaxed group-hover:text-accent transition-colors">{news.title}</p>
                </div>
              ))}
            </div>
            <button className="w-full py-4 glass rounded-2xl text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all">
              View all insights
            </button>
          </section>

          <section className="glass p-8 rounded-[2rem] space-y-6">
            <h3 className="text-xl font-bold">Company Profile</h3>
            <p className="text-sm text-white/50 leading-relaxed">
              NVIDIA Corporation designs, develops, and markets high-end graphics processing units (GPUs) and related software. The company is at the forefront of the AI revolution, providing the computational backbone for LLMs and deep learning.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase text-white/20 font-bold tracking-tighter">CEO</span>
                <p className="text-sm font-bold">Jensen Huang</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase text-white/20 font-bold tracking-tighter">HQ</span>
                <p className="text-sm font-bold">Santa Clara, CA</p>
              </div>
            </div>
            <button className="w-full flex items-center justify-between p-4 glass rounded-xl text-sm font-bold hover:bg-white/5 transition-all">
              <div className="flex items-center gap-3">
                <Globe size={16} className="text-white/40" />
                Website
              </div>
              <ArrowUpRight size={16} className="text-white/40" />
            </button>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
