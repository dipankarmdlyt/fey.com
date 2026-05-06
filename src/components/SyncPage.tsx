import { motion } from 'motion/react';
import { ShieldCheck, Zap, Lock, Database, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageLayout from './PageLayout';

const BrokerLogo = ({ name }: { name: string, key?: string | number }) => (
  <div className="glass aspect-video rounded-2xl flex flex-col items-center justify-center gap-3 group cursor-pointer hover:bg-white/[0.03] transition-all">
    <div className="w-12 h-12 glass rounded-full flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">{name[0]}</div>
    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">{name}</span>
  </div>
);

export default function SyncPage({ onBack }: { onBack: () => void }) {
  return (
    <PageLayout 
      onBack={onBack}
      title="Sync."
      subtitle="Connect your entire financial life in seconds. Secure, read-only access to 5,000+ brokerages."
    >
      <div className="space-y-40">
        {/* Step Guide */}
        <section className="grid lg:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Connect", desc: "Select your brokerage from our global library of providers.", icon: Database },
            { step: "02", title: "Verify", desc: "Securely authenticate through our encrypted gateway.", icon: Lock },
            { step: "03", title: "Analyze", desc: "Watch your data flow in and start gaining insights.", icon: Zap },
          ].map((item, i) => (
            <div key={i} className="glass p-12 rounded-[2.5rem] relative overflow-hidden group">
              <div className="text-8xl font-bold absolute -bottom-4 -right-4 opacity-[0.03] tracking-tighter group-hover:scale-110 transition-transform">
                {item.step}
              </div>
              <item.icon className="text-accent mb-8" size={32} />
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/40 leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Broker Grid */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Trusted by the best.</h2>
            <p className="text-white/40">Integrating with every major financial institution globally.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Fidelity', 'Robinhood', 'Schwab', 'E*Trade', 'Vanguard', 'Webull', 'Coinbase', 'Binance', 'Kraken', 'Interactive', 'M1', 'SoFi'].map(broker => (
              <BrokerLogo key={broker} name={broker} />
            ))}
          </div>
        </section>

        {/* Security Trust Section */}
        <section className="glass p-20 rounded-[4rem] text-center space-y-12 relative overflow-hidden border-white/5">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 blur-[100px] rounded-full" />
          <div className="flex flex-col items-center gap-6">
            <ShieldCheck size={64} className="text-accent" />
            <h2 className="text-5xl font-bold tracking-tighter max-w-2xl mx-auto">Bank-grade security. <br />Hedge-fund speed.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-2xl font-bold">256-bit</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40">AES Encryption</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold">SOC2</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40">Type II Compliant</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold">Read-only</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40">No Trade Access</div>
            </div>
          </div>
          <button className="bg-white text-black px-12 py-6 rounded-full font-bold text-xl hover:bg-accent transition-all flex items-center gap-3 mx-auto">
            Connect Brokerage <ArrowRight size={20} />
          </button>
        </section>
      </div>
    </PageLayout>
  );
}
