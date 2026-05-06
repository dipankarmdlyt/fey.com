import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  Search, 
  BarChart3, 
  Zap, 
  Calendar, 
  TrendingUp,
  Globe,
  Database,
  ChevronRight,
  TrendingDown,
  ArrowLeft,
  Activity
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import { cn } from '@/src/lib/utils';
import StockPage from './components/StockPage';
import AuthScreen from './components/AuthScreen';
import ProductPage from './components/ProductPage';
import PricingPage from './components/PricingPage';
import NewsFeedPage from './components/NewsFeedPage';
import ChartsPage from './components/ChartsPage';
import SyncPage from './components/SyncPage';
import ModularInfoPage from './components/ModularInfoPage';
import AdminPanel from './components/AdminPanel';
import { HeroScrollDemo } from './components/HeroScrollDemo';
import { DemoHeroGeometric } from './components/DemoHeroGeometric';
import DemoCountdown from './components/CountdownDemo';
import Testimonials from './components/Testimonials';

const Navbar = ({ onAuthOpen, onNavigate, currentPath }: { onAuthOpen: (mode: 'signin' | 'signup') => void; onNavigate: (path: AppPath) => void; currentPath: AppPath }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; path: AppPath }[] = [
    { name: 'Products', path: 'product' },
    { name: 'Market', path: 'news' },
    { name: 'Sync', path: 'sync' },
    { name: 'Pricing', path: 'pricing' },
    { name: 'About', path: 'about' },
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled || isOpen ? "bg-primary/80 backdrop-blur-md py-3 border-b border-white/5" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-12">
            <span className="text-2xl font-bold tracking-tighter cursor-pointer" onClick={() => onNavigate('home')}>Fey.</span>
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-[10px]">
              {navLinks.map((link) => (
                <button 
                  key={link.name} 
                  onClick={() => onNavigate(link.path)} 
                  className={cn(
                    "transition-all relative py-2",
                    currentPath === link.path ? "text-accent" : "text-white/40 hover:text-white"
                  )}
                >
                  {link.name}
                  {currentPath === link.path && (
                    <motion.div layoutId="underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent" />
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
              <button 
                onClick={() => onAuthOpen('signin')}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Log in
              </button>
              <button 
                onClick={() => onAuthOpen('signup')}
                className="px-5 py-2 rounded-full border border-accent text-accent text-sm font-semibold hover:bg-accent hover:text-black transition-all"
              >
                Sign up free
              </button>
            </div>
            
            {/* Hamburger Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none z-50 group"
            >
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white rounded-full transition-colors group-hover:bg-accent" 
              />
              <motion.span 
                animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="w-6 h-0.5 bg-white rounded-full transition-colors group-hover:bg-accent" 
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white rounded-full transition-colors group-hover:bg-accent" 
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Floating Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for tapping outside */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-30 lg:hidden bg-black/20 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-20 left-6 right-6 z-40 lg:hidden glass bg-black/70 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="p-6 flex flex-col space-y-6">
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => { setIsOpen(false); onNavigate('home'); }} 
                    className={cn(
                      "text-xl font-bold tracking-tighter transition-colors",
                      currentPath === 'home' ? "text-accent" : "text-white hover:text-accent"
                    )}
                  >
                    Home.
                  </button>
                  
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => { setIsOpen(false); onAuthOpen('signin'); }}
                      className="px-4 py-2 glass rounded-xl font-bold text-[10px] uppercase tracking-widest text-white/70 hover:text-white"
                    >
                      Log in
                    </button>
                    <button 
                      onClick={() => { setIsOpen(false); onAuthOpen('signup'); }}
                      className="px-4 py-2 bg-white text-black rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-accent transition-colors"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
                
                <div className="h-px bg-white/5 w-full" />
                
                <div className="flex items-center gap-8 overflow-x-auto no-scrollbar scrollbar-hide pb-1">
                  {navLinks.map((link, i) => (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => {
                        setIsOpen(false);
                        onNavigate(link.path);
                      }}
                      className={cn(
                        "text-[10px] font-bold tracking-widest uppercase transition-colors whitespace-nowrap",
                        currentPath === link.path ? "text-accent" : "text-white/40 hover:text-white"
                      )}
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

type AppPath = 'home' | 'stock' | 'product' | 'charts' | 'sync' | 'news' | 'pricing' | 'company' | 'about' | 'contact' | 'blog' | 'careers' | 'social' | 'privacy' | 'terms' | 'security' | 'compliance' | 'admin';

// Mock data for the sparkline
const portfolioData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
  { name: 'Aug', value: 4000 },
  { name: 'Sep', value: 6000 },
  { name: 'Oct', value: 8000 },
  { name: 'Nov', value: 9500 },
  { name: 'Dec', value: 13000 },
];

const mockStockDetails = {
  'NVDA': {
    ticker: 'NVDA',
    name: 'NVIDIA Corp.',
    price: '924.50',
    change: '+$11.32',
    changePercent: '+1.24%',
    isPositive: true,
    chartData: Array.from({ length: 12 }, (_, i) => ({ value: 700 + Math.random() * 300, name: i }))
  },
  'MSFT': {
    ticker: 'MSFT',
    name: 'Microsoft',
    price: '412.30',
    change: '+$3.35',
    changePercent: '+0.82%',
    isPositive: true,
    chartData: Array.from({ length: 12 }, (_, i) => ({ value: 380 + Math.random() * 50, name: i }))
  },
  'AAPL': {
    ticker: 'AAPL',
    name: 'Apple Inc.',
    price: '183.05',
    change: '-$0.27',
    changePercent: '-0.15%',
    isPositive: false,
    chartData: Array.from({ length: 12 }, (_, i) => ({ value: 170 + Math.random() * 30, name: i }))
  }
};

const FeatureCard = ({ title, description, icon: Icon, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass glass-hover p-8 rounded-3xl group cursor-default"
  >
    <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-text-dim leading-relaxed">{description}</p>
  </motion.div>
);

// App implementation start
export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [inputElement, setInputElement] = useState<HTMLInputElement | null>(null);
  const [activePage, setActivePage] = useState<AppPath>('home');
  const [selectedStock, setSelectedStock] = useState<any>(null);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleNavigate = (path: AppPath) => {
    setActivePage(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const [livePrices, setLivePrices] = useState(mockStockDetails);

  // Mock live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLivePrices(prev => {
        const next = { ...prev };
        Object.keys(next).forEach(ticker => {
          const stock = next[ticker as keyof typeof next];
          const currentPrice = parseFloat(stock.price);
          const volatility = 0.002; // 0.2% max change
          const change = currentPrice * (Math.random() * volatility * 2 - volatility);
          const newPrice = currentPrice + change;
          
          // Calculate new change stats
          const basePrice = 900; // Simplified base for mock
          const diff = newPrice - basePrice;
          const diffPercent = (diff / basePrice) * 100;
          
          next[ticker as keyof typeof next] = {
            ...stock,
            price: newPrice.toFixed(2),
            change: `${diff >= 0 ? '+' : ''}$${Math.abs(diff).toFixed(2)}`,
            changePercent: `${diff >= 0 ? '+' : ''}${diffPercent.toFixed(2)}%`,
            isPositive: diff >= 0
          };
        });
        return next;
      });
    }, 2500); // Update every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  // Update selected stock if it's one of the live ones
  useEffect(() => {
    if (selectedStock && livePrices[selectedStock.ticker as keyof typeof livePrices]) {
      setSelectedStock(livePrices[selectedStock.ticker as keyof typeof livePrices]);
    }
  }, [livePrices, selectedStock?.ticker]);

  const handleStockClick = (ticker: string) => {
    const stock = livePrices[ticker as keyof typeof livePrices] || {
      ticker,
      name: ticker,
      price: '0.00',
      change: '+0.00',
      changePercent: '+0.00%',
      isPositive: true,
      chartData: Array.from({ length: 12 }, (_, i) => ({ value: 100 + Math.random() * 20, name: i }))
    };
    setSelectedStock(stock);
    setActivePage('stock');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Mock data for search
  const searchResults = [
    { type: 'Stock', label: 'AAPL', sub: 'Apple Inc.', change: livePrices['AAPL'].changePercent },
    { type: 'Stock', label: 'NVDA', sub: 'NVIDIA Corp.', change: livePrices['NVDA'].changePercent },
    { type: 'Stock', label: 'MSFT', sub: 'Microsoft', change: livePrices['MSFT'].changePercent },
    { type: 'ETF', label: 'SPY', sub: 'S&P 500 Trust', change: '-0.1%' },
    { type: 'ETF', label: 'QQQ', sub: 'Invesco QQQ', change: '+1.1%' },
    { type: 'News', label: 'Q1 GDP Report', sub: 'Economic analysis', date: 'Today' },
    { type: 'News', label: 'Tariff Impact', sub: 'Market volatility', date: '2h ago' },
  ].filter(item => 
    item.label.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.sub.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        inputElement?.focus();
      }
      if (e.key === 'Escape') {
        inputElement?.blur();
        setIsFocused(false);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [inputElement]);

  return (
    <div className="min-h-screen selection:bg-accent/30 flex flex-col pt-20 overflow-x-hidden relative">
      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 mesh-gradient animate-mesh opacity-60" />
        <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[150px]" />
      </div>

      <Navbar 
        currentPath={activePage}
        onNavigate={handleNavigate}
        onAuthOpen={(mode) => {
          setAuthMode(mode);
          setIsAuthOpen(true);
        }} 
      />

      <AnimatePresence mode="wait">
        {activePage === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Geometric Hero Section */}
            <DemoHeroGeometric />

            {/* Hero Section (Search & CTAs) */}
            <section className="relative w-full max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col items-center">
        {/* Background H1 Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 overflow-hidden">
          <h1 className="text-[12rem] lg:text-[20rem] font-bold tracking-tighter text-white opacity-[0.03] select-none leading-none">
            FINANCE
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-4"
          >
            <div className="space-y-2 mb-12">
              <h2 className="text-8xl lg:text-9xl font-bold tracking-tighter text-gradient leading-none">$130,067.25</h2>
              <span className="text-lg text-white/40 font-medium tracking-wide uppercase mt-4 block">Portfolio value</span>
              
              <div className="mt-12 group cursor-default">
                <div className="flex items-center gap-3 text-accent transition-opacity group-hover:opacity-100">
                  <span className="text-4xl font-bold">$31,155.32</span>
                  <span className="text-2xl font-semibold opacity-60">+31.52%</span>
                </div>
                <span className="text-sm text-white/40 font-medium tracking-wide block mt-2">Past year returns</span>
              </div>
            </div>

            <div className="h-[180px] w-full max-w-lg mt-12 opacity-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={portfolioData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00FF88" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00FF88" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#00FF88" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    isAnimationActive={true}
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 flex flex-col items-end pt-4"
          >
            <div className="glass glass-hover w-full max-w-[440px] p-8 rounded-[2rem] relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest rounded">Morning recap</span>
                </div>
                <span className="text-[11px] text-white/30 uppercase tracking-widest">Summarized at 1:13PM</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 leading-tight relative z-10">Trump's renewed tariff push is shaking markets.</h3>
              <p className="text-white/60 leading-relaxed font-medium relative z-10">
                Q1 GDP shrank 0.3% while core manufacturing indices hit a 12-month low. Market volatility is expected to persist through the weekend. <a href="#" className="inline-flex items-center gap-1 text-white hover:text-accent font-bold group/link transition-colors relative ml-1">
                  Read more
                  <ArrowUpRight size={14} className="opacity-40 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover/link:w-full transition-all duration-300" />
                </a>
              </p>
            </div>

            <div className="space-y-3 w-full max-w-[440px]">
              {['NVDA', 'MSFT', 'AAPL'].map((ticker, i) => {
                const stock = livePrices[ticker as keyof typeof livePrices];
                return (
                  <div 
                    key={ticker} 
                    onClick={() => handleStockClick(ticker)}
                    className="flex items-center gap-4 py-4 border-b border-white/5 hover:bg-white/[0.04] px-4 rounded-2xl transition-all cursor-pointer group"
                  >
                    <div className="w-12 h-12 glass rounded-full flex items-center justify-center font-bold text-xs shrink-0">{ticker}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold truncate">{stock.name}</h4>
                        <span className={cn(
                          "transition-colors duration-500",
                          stock.isPositive ? 'text-accent' : 'text-red-400'
                        )}>{stock.changePercent}</span>
                      </div>
                      <p className="text-xs text-text-dim">Today · ${stock.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="mt-20 lg:mt-32 text-center max-w-4xl mx-auto relative z-10 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-7xl lg:text-8xl font-bold tracking-tight text-center leading-[0.9] mb-12">
              Make better<br/>investments.
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-12 text-white/40 font-medium">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-accent" />
                <span>Complex data simplified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-accent" />
                <span>Effortless market tools</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <HeroScrollDemo />
      <DemoCountdown />
      <Testimonials />

      {/* Floating Command Bar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-[100]">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className={cn(
            "glass rounded-[2rem] flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all overflow-hidden",
            isFocused ? "border-white/20 ring-1 ring-white/10" : "hover:border-white/20"
          )}
        >
          {/* Results Area */}
          {isFocused && searchQuery.length > 0 && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="max-h-[300px] overflow-y-auto p-2 space-y-1 border-b border-white/10 custom-scrollbar"
            >
              {searchResults.length > 0 ? (
                searchResults.map((result, i) => (
                  <div 
                    key={i} 
                    onClick={() => result.type === 'Stock' ? handleStockClick(result.label) : null}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 cursor-pointer group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 glass rounded-xl flex items-center justify-center font-bold text-[10px] text-white/40 shrink-0 uppercase">
                        {result.type[0]}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold">{result.label}</span>
                          <span className="text-[10px] uppercase tracking-widest text-white/30 px-1.5 py-0.5 glass rounded-md">{result.type}</span>
                        </div>
                        <div className="text-xs text-white/40">{result.sub}</div>
                      </div>
                    </div>
                    {result.change && <span className={cn("text-xs font-bold", result.change.startsWith('+') ? "text-accent" : "text-red-400")}>{result.change}</span>}
                    {result.date && <span className="text-[10px] text-white/20">{result.date}</span>}
                  </div>
                ))
              ) : (
                <div className="py-8 text-center text-sm text-white/20">No results found for "{searchQuery}"</div>
              )}
            </motion.div>
          )}

          <div className="h-14 flex items-center px-5 gap-4 relative">
            <Search size={18} className={cn("transition-colors", isFocused ? "text-accent" : "text-white/40")} />
            <input 
              ref={setInputElement}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              placeholder="Search stocks, ETFs, or news..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-4 placeholder:text-white/20 outline-none"
            />
            <div className="flex items-center gap-1.5 grayscale opacity-50 hidden sm:flex shrink-0">
              <span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-bold border border-white/10">⌘</span>
              <span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-bold border border-white/10">K</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Features Grid */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-3xl font-bold text-gradient">Highlights</h2>
          <button className="text-sm font-medium text-text-dim hover:text-white transition-colors flex items-center gap-1 group">
            View all features <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={TrendingUp}
            title="Insider Transactions"
            description="Track C-suite sentiment in real-time. See who's buying and selling before the market reacts."
            delay={0.1}
          />
          <FeatureCard 
            icon={BarChart3}
            title="Advanced Metrics"
            description="Deep dive into fundamentals, technicals, and proprietary indicators updated every millisecond."
            delay={0.2}
          />
          <FeatureCard 
            icon={Zap}
            title="Instant Press Releases"
            description="Summarized by AI in seconds. Get the signal, ignore the noise from thousands of sources."
            delay={0.3}
          />
          <FeatureCard 
            icon={Database}
            title="Secure Broker Sync"
            description="Connect to 5,000+ financial institutions with military-grade encryption."
            delay={0.4}
          />
          <FeatureCard 
            icon={Calendar}
            title="Economic Calendar"
            description="Federal meetings, inflation reports, and global events in a unified, intuitive view."
            delay={0.5}
          />
          <FeatureCard 
            icon={Search}
            title="Screener Reimagined"
            description="Natural language search. Try 'Small-cap stocks with positive FCF and insider ownership'."
            delay={0.6}
          />
        </div>
      </section>

      {/* Real-time Earnings Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-6 text-accent">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-widest">Live Now</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-gradient">Earnings in <br />real time.</h2>
          <p className="text-xl text-text-dim leading-relaxed mb-8">
            Get instant alerts on earnings calls with AI-generated live summaries. Never miss a beat during the busiest weeks of the season.
          </p>
          <button className="glass px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2">
            Explore earnings hub <ChevronRight size={18} />
          </button>
        </motion.div>
        
        <div className="space-y-4">
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             onClick={() => handleStockClick('NET')}
             className="glass glass-hover p-6 rounded-3xl border-l-4 border-l-accent cursor-pointer group"
          >
            <div className="flex justify-between mb-2">
              <span className="font-bold group-hover:text-accent transition-colors">Cloudflare (NET)</span>
              <span className="text-xs text-text-dim">Just now</span>
            </div>
            <p className="text-sm text-text-dim">"Cloudflare reports record Q2 earnings. Revenue up 32% YoY. Earnings call just started."</p>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             onClick={() => handleStockClick('DDOG')}
             className="glass glass-hover p-6 rounded-3xl opacity-60 hover:opacity-100 cursor-pointer group"
          >
            <div className="flex justify-between mb-2">
              <span className="font-bold group-hover:text-accent transition-colors">Datadog (DDOG)</span>
              <span className="text-xs text-text-dim">5m ago</span>
            </div>
            <p className="text-sm text-text-dim">"Full-year revenue guidance raised to $2.6B. Strong adoption of AI observability tools."</p>
          </motion.div>
        </div>
      </section>

      {/* Screener Section */}
      <section className="relative z-10 bg-white/[0.01] py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-16 tracking-tight text-gradient">Screener <span className="italic font-serif font-normal text-white/40">reimagined.</span></h2>
          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-accent-blue/20 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass rounded-full p-2 flex items-center">
              <Search className="ml-6 text-white/40" size={24} />
              <input 
                type="text" 
                placeholder="Small-cap stocks with insider buying..."
                className="bg-transparent border-none focus:ring-0 text-lg py-4 px-6 w-full placeholder:text-white/20"
                readOnly
              />
              <button className="bg-white text-black px-8 py-4 rounded-full font-bold ml-auto hover:bg-accent transition-colors">
                Search
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {['Cash flow positive', 'Low debt', 'High R&D spend', 'Oversold tech'].map((tag, i) => (
                <span key={tag} className="text-xs glass px-4 py-2 rounded-full text-text-dim hover:text-white cursor-pointer transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="relative z-10 bg-secondary/5 py-40 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="glass p-3 rounded-[3rem] relative z-10 shadow-2xl"
            >
              <div className="bg-primary rounded-[2.7rem] overflow-hidden">
                <div className="px-10 py-12 border-b border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <Zap size={20} className="text-accent" />
                    </div>
                    <span className="text-sm font-medium text-text-dim">Dashboard Sync</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">Portfolio in sync.</h3>
                  <p className="text-text-dim leading-relaxed">Your complete financial picture, updated in real-time across all devices.</p>
                </div>
                <div className="p-10 space-y-5">
                  {[1, 2, 3].map((i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between p-5 glass rounded-2xl border-white/5"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full glass shrink-0 flex items-center justify-center font-mono text-[10px] text-white/40 uppercase">
                          {['S&P', 'NAS', 'DJI'][i-1]}
                        </div>
                        <div className="space-y-1">
                          <div className="h-4 w-28 bg-white/10 rounded" />
                          <div className="h-3 w-16 bg-white/5 rounded" />
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="h-4 w-20 bg-accent/20 rounded ml-auto" />
                        <div className="h-3 w-10 bg-accent/10 rounded ml-auto" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/10 blur-[120px] rounded-full" />
          </div>
          <div>
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-gradient">From overwhelming <br />to effortless.</h2>
            <p className="text-xl text-text-dim leading-relaxed mb-12">
              News and market overview update continuously. We cross-check thousands of sources to give you a breakdown and sentiment analysis you can trust.
            </p>
            <button className="flex items-center gap-3 group font-bold text-xl hover:text-accent transition-all">
              Learn more about sync
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="relative z-10 w-full py-40 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block glass px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-12 text-white/40">
            Start your 7-day free trial.
          </span>
          <h2 className="text-6xl lg:text-9xl font-bold tracking-tighter mb-10 leading-[0.8] text-gradient">Finance made <br />effortless.</h2>
          <p className="text-2xl text-text-dim mb-16 max-w-2xl mx-auto leading-relaxed">
            Clear insights on markets, companies, and your own performance. Everything you need to invest better.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => {
                setAuthMode('signup');
                setIsAuthOpen(true);
              }}
              className="w-full sm:w-auto bg-white text-black px-12 py-6 rounded-full text-xl font-bold hover:bg-accent transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
            >
              Get started for free
            </button>
            <button className="w-full sm:w-auto glass text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-white/10 transition-all active:scale-95">
              View live demo
            </button>
          </div>
          
          <div className="mt-56 grid grid-cols-2 md:grid-cols-4 gap-12 text-left pt-24 border-t border-white/5">
            {[
              { title: 'Product', links: [
                { name: 'Charts', path: 'charts' as AppPath }, 
                { name: 'Sync', path: 'sync' as AppPath }, 
                { name: 'News', path: 'news' as AppPath }, 
                { name: 'Pricing', path: 'pricing' as AppPath }
              ]},
              { title: 'Company', links: [
                { name: 'About', path: 'about' as AppPath }, 
                { name: 'Contact', path: 'contact' as AppPath }, 
                { name: 'Blog', path: 'blog' as AppPath }, 
                { name: 'Careers', path: 'careers' as AppPath },
                { name: 'Admin Dashboard', path: 'admin' as AppPath }
              ]},
              { title: 'Social', links: [
                { name: 'Twitter', path: 'social' as AppPath },
                { name: 'Discord', path: 'social' as AppPath },
                { name: 'LinkedIn', path: 'social' as AppPath },
                { name: 'YouTube', path: 'social' as AppPath }
              ]},
              { title: 'Legal', links: [
                { name: 'Privacy', path: 'privacy' as AppPath },
                { name: 'Terms', path: 'terms' as AppPath },
                { name: 'Security', path: 'security' as AppPath },
                { name: 'Compliance', path: 'compliance' as AppPath }
              ]}
            ].map((section, j) => (
              <div key={j} className="space-y-6">
                <h4 className="font-bold uppercase tracking-widest text-[10px] text-text-dim">{section.title}</h4>
                <ul className="text-sm text-text-dim space-y-4">
                  {section.links.map((link, k) => (
                    <li key={k}>
                      <button onClick={() => handleNavigate(link.path)} className="hover:text-white transition-colors">
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 text-text-dim/60 text-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <p>© 2026 Fey Technologies Inc. Built with precision for the modern investor.</p>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Globe size={12} />
                <span>San Francisco</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </motion.div>
      </footer>
          </motion.div>
        )}

        {activePage === 'stock' && (
          <StockPage 
            stock={selectedStock} 
            onBack={() => handleNavigate('home')} 
          />
        )}

        {activePage === 'product' && <ProductPage onBack={() => handleNavigate('home')} />}
        {activePage === 'pricing' && <PricingPage onBack={() => handleNavigate('home')} />}
        {activePage === 'news' && <NewsFeedPage onBack={() => handleNavigate('home')} />}
        {activePage === 'charts' && <ChartsPage onBack={() => handleNavigate('home')} />}
        {activePage === 'sync' && <SyncPage onBack={() => handleNavigate('home')} />}
        
        {['about', 'company', 'careers', 'blog', 'contact', 'privacy', 'terms', 'security', 'compliance', 'social'].includes(activePage) && (
          <ModularInfoPage 
            type={activePage as any} 
            onBack={() => handleNavigate('home')} 
          />
        )}

        {activePage === 'admin' && (
          <AdminPanel onBack={() => handleNavigate('home')} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isAuthOpen && (
          <AuthScreen 
            initialMode={authMode} 
            onBack={() => setIsAuthOpen(false)}
            onSuccess={() => setIsAuthOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
