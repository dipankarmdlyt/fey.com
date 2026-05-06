import { motion } from 'motion/react';
import { 
  Zap, 
  Search, 
  BarChart3, 
  Database, 
  Play, 
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Globe
} from 'lucide-react';
import PageLayout from './PageLayout';

const ProductFeature = ({ icon: Icon, title, description }: any) => (
  <div className="glass glass-hover p-10 rounded-[2.5rem] group">
    <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-white/40 leading-relaxed mb-8">{description}</p>
    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:gap-3 transition-all">
      Learn more <ArrowRight size={14} />
    </button>
  </div>
);

export default function ProductPage({ onBack }: { onBack: () => void }) {
  return (
    <PageLayout 
      onBack={onBack}
      title="Product."
      subtitle="The modern investment stack. AI-powered tools designed for clarity, speed, and precision."
    >
      <section className="space-y-32">
        {/* Demo Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video glass rounded-[3rem] overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent mix-blend-overlay" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
              <Play size={40} className="fill-white translate-x-1" />
            </div>
          </div>
          <div className="absolute bottom-12 left-12">
            <span className="glass px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Interface Preview v2.4</span>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <ProductFeature 
            icon={TrendingUp}
            title="Stock Pages"
            description="High-fidelity charts and real-time data for 50,000+ global symbols. Deep dive into institutional ownership in seconds."
          />
          <ProductFeature 
            icon={Zap}
            title="Earnings Alerts"
            description="Instant summaries of every earnings call. Our AI pulls the signal from the noise so you don't have to listen to 40 minutes of audio."
          />
          <ProductFeature 
            icon={Search}
            title="Dynamic Screener"
            description="Search the market using natural language. No more complex filters. Just type what you're looking for."
          />
          <ProductFeature 
            icon={Database}
            title="Portfolio Sync"
            description="Securely connect your brokerages. See your total net worth, performance, and risk in a unified, beautiful dashboard."
          />
        </div>

        {/* Testimonials */}
        <div className="text-center space-y-12 py-20">
          <div className="flex justify-center -space-x-3">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-black glass" />
            ))}
          </div>
          <blockquote className="text-4xl font-medium tracking-tight max-w-3xl mx-auto italic">
            "Fey changed how I look at the market. It's the first tool that actually feels like it's built for 2026."
          </blockquote>
          <div className="text-white/40 font-bold uppercase tracking-widest text-sm">Join 100,000+ refined investors</div>
        </div>

        {/* Final CTA */}
        <div className="glass p-20 rounded-[4rem] text-center space-y-8 relative overflow-hidden backdrop-blur-3xl border-white/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent/20 blur-[80px] rounded-full" />
          <h2 className="text-5xl font-bold tracking-tighter">Ready to level up?</h2>
          <button className="bg-accent text-black px-12 py-6 rounded-full text-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-accent/10">
            Start 7-day free trial
          </button>
        </div>
      </section>
    </PageLayout>
  );
}
