import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, TrendingUp, TrendingDown, Clock, Layers } from 'lucide-react';
import PageLayout from './PageLayout';
import { cn } from '@/src/lib/utils';

const newsItems = [
  { id: 1, title: "Federal Reserve maintains interest rates, signals one cut in 2026", source: "Bloomberg", time: "28m ago", category: "Economy", sentiment: "neutral", tickers: ["SPY", "QQQ"] },
  { id: 2, title: "NVIDIA surges 4% on record demand for Blackwell AI architecture", source: "Reuters", time: "1h ago", category: "Technology", sentiment: "positive", tickers: ["NVDA"] },
  { id: 3, title: "Retail sales miss estimates as consumer spending cools in Q1", source: "WSJ", time: "2h ago", category: "Consumer", sentiment: "negative", tickers: ["WMT", "COST"] },
  { id: 4, title: "Crypto markets hit 12-month highs following ETF inflows", source: "CoinDesk", time: "4h ago", category: "Crypto", sentiment: "positive", tickers: ["BTC", "ETH"] },
  { id: 5, title: "Global supply chain constraints ease as port congestion clears", source: "CNBC", time: "6h ago", category: "Logistics", sentiment: "positive", tickers: ["UPS", "FDX"] },
];

export default function NewsFeedPage({ onBack }: { onBack: () => void }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Economy', 'Technology', 'Consumer', 'Crypto', 'Earnings'];

  return (
    <PageLayout 
      onBack={onBack}
      title="News Feed."
      subtitle="The signal in the noise. Real-time insights summarized by AI for effortless consumption."
    >
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="relative flex-1 group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-accent transition-colors" />
          <input 
            type="text"
            placeholder="Search news, topics, or symbols..."
            className="w-full glass bg-white/[0.02] py-5 pl-16 pr-8 rounded-[1.5rem] outline-none focus:ring-1 focus:ring-accent transition-all"
          />
        </div>
        <div className="flex gap-2 p-1 glass bg-white/[0.01] rounded-[1.25rem] overflow-x-auto custom-scrollbar no-scrollbar scrollbar-hide">
          {filters.map(f => (
            <button 
              key={f}
              onClick={() => setActiveFilter(f)}
              className={cn(
                "px-6 py-3 rounded-[1rem] text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap",
                activeFilter === f ? "bg-white text-black" : "text-white/40 hover:text-white"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {newsItems.map((news, i) => (
          <motion.div 
            key={news.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group glass glass-hover p-8 rounded-[2rem] flex flex-col md:flex-row gap-8 items-start cursor-pointer border-white/5"
          >
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/30">
                <span className="text-accent">{news.category}</span>
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <span>{news.source}</span>
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  {news.time}
                </div>
              </div>
              <h3 className="text-2xl font-bold leading-tight group-hover:text-accent transition-colors">{news.title}</h3>
              <div className="flex flex-wrap gap-2">
                {news.tickers.map(t => (
                  <span key={t} className="glass px-3 py-1 rounded-lg text-[10px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className={cn(
              "w-full md:w-32 h-16 glass rounded-2xl flex items-center justify-center font-bold text-xs uppercase tracking-tighter",
              news.sentiment === 'positive' ? "text-accent" : news.sentiment === 'negative' ? "text-red-400" : "text-white/40"
            )}>
              {news.sentiment === 'positive' ? (
                <div className="flex items-center gap-2"><TrendingUp size={16} /> Bullish</div>
              ) : news.sentiment === 'negative' ? (
                <div className="flex items-center gap-1.5"><TrendingDown size={16} /> Bearish</div>
              ) : (
                <div className="flex items-center gap-1.5"><Layers size={16} /> Neutral</div>
              )}
            </div>
          </motion.div>
        ))}
        
        <button className="w-full py-6 glass rounded-[2rem] text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all">
          Load more news
        </button>
      </div>
    </PageLayout>
  );
}
