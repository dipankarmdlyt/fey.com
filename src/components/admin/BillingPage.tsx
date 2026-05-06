import React from 'react';
import { 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownCircle, 
  FileText, 
  ExternalLink,
  ShieldCheck,
  Zap,
  MoreVertical,
  Search,
  Filter
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const BillingPage = () => {
  const transactions = [
    { id: '#INV-4029', user: 'Cathie Wood', plan: 'Enterprise', amount: '$4,200.00', status: 'Paid', date: 'Oct 12, 2026' },
    { id: '#INV-4028', user: 'Mark Cuban', plan: 'Enterprise', amount: '$4,200.00', status: 'Paid', date: 'Oct 11, 2026' },
    { id: '#INV-4027', user: 'Vitalik B.', plan: 'Pro', amount: '$49.00', status: 'Paid', date: 'Oct 10, 2026' },
    { id: '#INV-4026', user: 'Jensen Huang', plan: 'Enterprise', amount: '$4,200.00', status: 'Refunded', date: 'Oct 09, 2026' },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-8 rounded-[2rem] border border-white/5 space-y-4">
          <div className="text-[10px] uppercase font-bold tracking-widest text-white/30">Available Balance</div>
          <div className="text-4xl font-bold tracking-tighter text-white">$142,500.42</div>
          <div className="flex items-center gap-2 text-accent text-xs font-bold">
            <ArrowUpRight size={14} /> +8.4% since last payout
          </div>
          <button className="w-full py-3 bg-white text-black rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-all mt-4">
            Initiate Payout
          </button>
        </div>

        <div className="glass p-8 rounded-[2rem] border border-white/5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-[10px] uppercase font-bold tracking-widest text-white/30">Next Payout</div>
            <div className="text-2xl font-bold tracking-tight text-white">Oct 24, 2026</div>
          </div>
          <div className="p-3 glass bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                <CreditCard size={14} />
              </div>
              <div className="text-xs font-bold text-white/80">Chase Bank ....4029</div>
            </div>
            <button className="text-[10px] font-bold uppercase text-accent">Edit</button>
          </div>
        </div>

        <div className="glass p-8 rounded-[2rem] border border-accent/20 bg-accent/[0.02] space-y-4">
          <div className="text-[10px] uppercase font-bold tracking-widest text-accent">Stripe Status</div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Verified Account</div>
              <div className="text-[10px] text-accent font-bold uppercase tracking-widest">Global Enabled</div>
            </div>
          </div>
          <p className="text-xs text-white/40 leading-relaxed pt-2">All regions connected. KYC complete for EU/US/APAC. No active disputes.</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white tracking-tight">Recent Transactions</h3>
          <div className="flex gap-2">
            <button className="glass px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all flex items-center gap-2">
              <Search size={14} />
            </button>
            <button className="glass px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all flex items-center gap-2">
              <Filter size={14} /> Filter
            </button>
          </div>
        </div>

        <div className="glass rounded-[2rem] border-white/5 overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.01]">
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-white/20">Invoice ID</th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-white/20">Customer</th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-white/20">Plan</th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-white/20">Amount</th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-white/20">Status</th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-white/20 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-5 font-mono text-xs font-bold text-white/60">{tx.id}</td>
                  <td className="px-6 py-5 text-sm font-bold text-white">{tx.user}</td>
                  <td className="px-6 py-5">
                    <span className={cn(
                      "text-[9px] font-bold uppercase tracking-widest",
                      tx.plan === 'Enterprise' ? "text-accent" : "text-white/40"
                    )}>{tx.plan}</span>
                  </td>
                  <td className="px-6 py-5 font-mono text-sm font-bold text-white">{tx.amount}</td>
                  <td className="px-6 py-5">
                    <span className={cn(
                      "px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest",
                      tx.status === 'Paid' ? "bg-accent/10 text-accent" : "bg-red-500/10 text-red-500"
                    )}>{tx.status}</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <button className="p-2 glass rounded-lg text-white/20 hover:text-white transition-all"><FileText size={14} /></button>
                       <button className="p-2 glass rounded-lg text-white/20 hover:text-accent transition-all"><ExternalLink size={14} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
