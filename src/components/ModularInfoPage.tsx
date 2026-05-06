import * as React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  MapPin, 
  Mail, 
  Twitter, 
  Linkedin, 
  Youtube, 
  MessageSquare,
  ShieldCheck,
  FileText,
  Briefcase,
  Terminal,
  Globe,
  Lock
} from 'lucide-react';
import PageLayout from './PageLayout';
import { cn } from '@/src/lib/utils';

type InfoPageType = 'about' | 'company' | 'careers' | 'blog' | 'contact' | 'privacy' | 'terms' | 'security' | 'compliance' | 'social';

interface ModularInfoPageProps {
  type: InfoPageType;
  onBack: () => void;
}

const pageContent: Record<InfoPageType, { title: string; subtitle: string; content: React.ReactNode }> = {
  about: {
    title: "About.",
    subtitle: "We're on a mission to democratize institutional-grade financial tools for the modern investor.",
    content: (
      <div className="space-y-32">
        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold tracking-tight">Our Story</h3>
            <p className="text-lg text-white/60 leading-relaxed">
              Fey was born out of a simple observation: the data used by massive hedge funds is beautiful and actionable, yet the tools available to individual investors are clunky and overwhelming.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              We spent two years building a high-speed data architecture that treats every investor like a pro.
            </p>
          </div>
          <div className="glass rounded-[3rem] aspect-square flex items-center justify-center">
            <Globe size={120} className="text-accent/20 animate-pulse" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Users, title: "100k+", sub: "Verified investors" },
            { icon: ShieldCheck, title: "SOC2", sub: "Security certified" },
            { icon: Terminal, title: "99.9%", sub: "Uptime guarantee" },
          ].map((stat, i) => (
            <div key={i} className="glass p-12 rounded-[2.5rem] text-center space-y-4">
              <stat.icon className="mx-auto text-accent" size={32} />
              <div className="text-5xl font-bold tracking-tighter">{stat.title}</div>
              <div className="text-sm font-bold uppercase tracking-widest text-white/40">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  company: {
    title: "Company.",
    subtitle: "Building the financial infrastructure of the future.",
    content: (
      <div className="space-y-32">
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className="glass aspect-square rounded-3xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4">
                <div className="h-4 w-20 bg-white/20 rounded mb-1" />
                <div className="h-3 w-12 bg-white/10 rounded" />
              </div>
            </div>
          ))}
        </section>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Founded in SF, built for the world.</h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Our team consists of engineers, designers, and traders from the world's leading technology and financial institutions.
          </p>
        </div>
      </div>
    )
  },
  careers: {
    title: "Careers.",
    subtitle: "Join us in redefining the language of finance.",
    content: (
      <div className="space-y-20">
        <div className="glass rounded-[3rem] overflow-hidden border-white/5">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-white/30">Role</th>
                <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-white/30 text-center">Team</th>
                <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-white/30 text-right">Location</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { role: "Senior Frontend Engineer", team: "Engineering", loc: "Remote / SF" },
                { role: "Product Designer", team: "Experience", loc: "New York" },
                { role: "Backend Architect (Go)", team: "Infrastructure", loc: "London / EU" },
                { role: "Quantitative Data Scientist", team: "AI / Data", loc: "Remote" },
              ].map((job, i) => (
                <tr key={i} className="group hover:bg-white/[0.02] cursor-pointer transition-colors">
                  <td className="px-8 py-6 font-bold group-hover:text-accent transition-colors">{job.role}</td>
                  <td className="px-8 py-6 text-sm text-white/40 text-center">{job.team}</td>
                  <td className="px-8 py-6 text-sm text-white/40 text-right">{job.loc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center group cursor-pointer">
          <p className="text-white/40 mb-4 transition-colors group-hover:text-white">Don't see a perfect fit?</p>
          <div className="text-2xl font-bold tracking-tight underline decoration-accent underline-offset-8">jobs@fey.com</div>
        </div>
      </div>
    )
  },
  blog: {
    title: "Blog.",
    subtitle: "Insights, updates, and analysis from the Fey team.",
    content: (
      <div className="grid md:grid-cols-2 gap-12">
        {[
          { title: "Introducing Real-time AI Summaries", date: "May 2, 2026", cat: "Feature" },
          { title: "How to Build a Diversified Portfolio in 2026", date: "Apr 28, 2026", cat: "Education" },
          { title: "Fey v2.4: The Next Iteration", date: "Apr 15, 2026", cat: "Update" },
          { title: "Market Volatility: A Survival Guide", date: "Mar 30, 2026", cat: "Analysis" },
        ].map((post, i) => (
          <div key={i} className="glass glass-hover p-8 rounded-[2.5rem] group cursor-pointer">
            <div className="aspect-video glass rounded-2xl mb-8 overflow-hidden">
               <div className="w-full h-full bg-gradient-to-br from-accent/10 to-transparent group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/30">
                <span className="text-accent">{post.cat}</span>
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <span>{post.date}</span>
              </div>
              <h3 className="text-3xl font-bold leading-tight">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
    )
  },
  contact: {
    title: "Contact.",
    subtitle: "We're here to help. Reach out anytime.",
    content: (
      <div className="grid lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-1">Name</label>
              <input type="text" className="w-full glass bg-white/[0.02] border border-white/5 rounded-2xl p-5 outline-none focus:ring-1 focus:ring-accent" placeholder="Jane Smith" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-1">Email</label>
              <input type="email" className="w-full glass bg-white/[0.02] border border-white/5 rounded-2xl p-5 outline-none focus:ring-1 focus:ring-accent" placeholder="jane@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-1">Message</label>
              <textarea rows={4} className="w-full glass bg-white/[0.02] border border-white/5 rounded-2xl p-5 outline-none focus:ring-1 focus:ring-accent" placeholder="How can we help?" />
            </div>
            <button className="w-full py-5 bg-accent text-black rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all">
              Send Message
            </button>
          </form>
        </div>
        <div className="space-y-12">
          <div className="glass p-12 rounded-[3rem] space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent"><Mail size={20} /></div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/20">Email</div>
                <div className="text-xl font-bold">hello@fey.com</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent"><MapPin size={20} /></div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/20">Headquarters</div>
                <div className="text-xl font-bold">San Francisco, CA</div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            {[Twitter, Linkedin, Youtube, MessageSquare].map((Icon, i) => (
              <button key={i} className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
                <Icon size={24} />
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  },
  privacy: { title: "Privacy.", subtitle: "Your data is yours. Period.", content: (<div className="prose prose-invert max-w-none text-white/60 space-y-8"><h3 className="text-2xl font-bold text-white">1. Data Handling</h3><p>We use military-grade encryption to protect your brokerage data. We never sell your personal information to third parties.</p><h3 className="text-2xl font-bold text-white">2. Cookies</h3><p>Our cookies are purely functional to keep you signed in and maintain your session preferences.</p></div>) },
  terms: { title: "Terms.", subtitle: "Legal guidelines for using the Fey platform.", content: (<div className="prose prose-invert max-w-none text-white/60 space-y-8"><h3 className="text-2xl font-bold text-white">1. Usage</h3><p>By using Fey, you agree to comply with all local and international financial regulations.</p></div>) },
  security: { 
    title: "Security.", 
    subtitle: "Built like a vault. Certified for trust.", 
    content: (
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { icon: ShieldCheck, title: "SOC2 Type II", desc: "Our infrastructure is regularly audited for complete security compliance." },
          { icon: Lock, title: "256-bit AES", desc: "All data is encrypted in transit and at rest using banking-standard protocols." },
        ].map((item, i) => (
          <div key={i} className="glass p-12 rounded-[2.5rem] space-y-6">
            <item.icon size={48} className="text-accent" />
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-white/40 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    ) 
  },
  compliance: { title: "Compliance.", subtitle: "Adhering to global financial standards.", content: (<div className="glass p-12 rounded-[2.5rem]"><p className="text-white/60 leading-relaxed">Fey Technologies is registered and compliant with SEC and FINRA guidelines where applicable for data aggregators.</p></div>) },
  social: {
    title: "Social.",
    subtitle: "Join the conversation and connect with our global community.",
    content: (
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { name: 'Twitter', icon: Twitter, handle: '@feyapp', color: 'text-[#1DA1F2]' },
          { name: 'Discord', icon: MessageSquare, handle: 'Join Discord', color: 'text-[#5865F2]' },
          { name: 'LinkedIn', icon: Linkedin, handle: 'Fey Technologies', color: 'text-[#0A66C2]' },
          { name: 'YouTube', icon: Youtube, handle: 'Fey Official', color: 'text-[#FF0000]' },
        ].map((item, i) => (
          <div key={i} className="glass glass-hover p-10 rounded-[2.5rem] flex items-center gap-8 group cursor-pointer">
            <div className={cn("w-16 h-16 glass rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform", item.color)}>
              <item.icon size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{item.name}</h3>
              <p className="text-white/40 font-medium tracking-tight">{item.handle}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
};

export default function ModularInfoPage({ type, onBack }: ModularInfoPageProps) {
  const content = pageContent[type];

  return (
    <PageLayout 
      onBack={onBack}
      title={content.title}
      subtitle={content.subtitle}
    >
      {content.content}
    </PageLayout>
  );
}
