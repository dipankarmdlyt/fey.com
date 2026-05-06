import React, { useState } from 'react';
import { 
  ChevronRight, 
  Search, 
  Filter, 
  Download, 
  MoreHorizontal, 
  Plus, 
  ArrowUpDown,
  Mail,
  UserPlus,
  Shield,
  Ban
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface User {
  id: string;
  name: string;
  email: string;
  plan: 'Free' | 'Pro' | 'Enterprise';
  status: 'Active' | 'Banned' | 'Pending';
  lastActive: string;
  avatar: string;
  country: string;
}

const mockUsers: User[] = [
  { id: '1', name: 'Jensen Huang', email: 'jensen@nvidia.com', plan: 'Enterprise', status: 'Active', lastActive: 'Just now', avatar: 'JH', country: 'US' },
  { id: '2', name: 'Cathie Wood', email: 'cathie@ark-invest.com', plan: 'Enterprise', status: 'Active', lastActive: '12m ago', avatar: 'CW', country: 'US' },
  { id: '3', name: 'Michael Burry', email: 'cass@scion.net', plan: 'Pro', status: 'Active', lastActive: '2d ago', avatar: 'MB', country: 'US' },
  { id: '4', name: 'Elon Musk', email: 'elon@x.com', plan: 'Free', status: 'Banned', lastActive: '4h ago', avatar: 'EM', country: 'US' },
  { id: '5', name: 'Mark Cuban', email: 'mark@mavs.com', plan: 'Enterprise', status: 'Active', lastActive: '1h ago', avatar: 'MC', country: 'US' },
  { id: '6', name: 'Vitalik Buterin', email: 'vitalik@ethereum.org', plan: 'Pro', status: 'Active', lastActive: '3h ago', avatar: 'VB', country: 'CH' },
  { id: '7', name: 'Satya Nadella', email: 'satya@microsoft.com', plan: 'Enterprise', status: 'Active', lastActive: 'Just now', avatar: 'SN', country: 'US' },
  { id: '8', name: 'Sundar Pichai', email: 'sundar@google.com', plan: 'Enterprise', status: 'Active', lastActive: '2h ago', avatar: 'SP', country: 'US' },
];

export const DataTableAdvanced = () => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [search, setSearch] = useState('');

  const toggleSelectAll = () => {
    if (selectedRows.length === mockUsers.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(mockUsers.map(u => u.id));
    }
  };

  const toggleSelect = (id: string) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(r => r !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-3 flex-1 max-w-md">
          <div className="relative w-full group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-accent transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Search users by name, email or ID..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full glass bg-white/[0.02] border border-white/5 rounded-xl py-2.5 pl-12 pr-4 text-xs focus:ring-1 focus:ring-accent outline-none transition-all"
            />
          </div>
          <button className="p-2.5 glass rounded-xl text-white/40 hover:text-white transition-all">
            <Filter size={18} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <AnimatePresence>
            {selectedRows.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center gap-2 mr-2"
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mr-2">{selectedRows.length} selected</div>
                <button className="flex items-center gap-2 glass px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest text-red-500 hover:bg-red-500/10 transition-all">
                  <Ban size={14} /> Bulk Ban
                </button>
                <button className="flex items-center gap-2 glass px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest text-accent hover:bg-accent/10 transition-all">
                  <Mail size={14} /> Send Email
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <button className="flex items-center gap-2 glass px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all">
            <Download size={16} /> Export
          </button>
          <button className="flex items-center gap-2 bg-accent text-black px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:scale-[1.02] transition-all">
            <Plus size={16} /> Add User
          </button>
        </div>
      </div>

      <div className="glass rounded-[2rem] border-white/5 overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] sticky top-0 z-10 backdrop-blur-md">
                <th className="px-6 py-6 w-[50px]">
                  <input 
                    type="checkbox" 
                    checked={selectedRows.length === mockUsers.length} 
                    onChange={toggleSelectAll}
                    className="w-4 h-4 rounded border-white/20 bg-white/5 accent-accent cursor-pointer" 
                    id="select-all"
                  />
                </th>
                <th className="px-6 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-accent transition-colors">
                    Profile <ArrowUpDown size={12} />
                  </div>
                </th>
                <th className="px-6 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Plan</th>
                <th className="px-6 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Status</th>
                <th className="px-6 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Last Seen</th>
                <th className="px-6 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Origin</th>
                <th className="px-6 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mockUsers.map((user) => (
                <tr 
                  key={user.id} 
                  className={cn(
                    "hover:bg-white/[0.02] transition-all group cursor-default",
                    selectedRows.includes(user.id) ? "bg-accent/[0.04]" : ""
                  )}
                  id={`user-row-${user.id}`}
                >
                  <td className="px-6 py-6">
                    <input 
                      type="checkbox" 
                      checked={selectedRows.includes(user.id)} 
                      onChange={() => toggleSelect(user.id)}
                      className="w-4 h-4 rounded border-white/20 bg-white/5 accent-accent cursor-pointer" 
                    />
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center font-bold text-[11px] text-accent group-hover:bg-accent/10 transition-all">{user.avatar}</div>
                      <div className="min-w-0">
                        <div className="text-sm font-bold truncate text-white leading-tight">{user.name}</div>
                        <div className="text-[10px] text-white/30 font-medium tracking-wide">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest border transition-colors",
                        user.plan === 'Enterprise' ? "bg-purple-500/10 text-purple-400 border-purple-500/20" :
                        user.plan === 'Pro' ? "bg-accent/10 text-accent border-accent/20" :
                        "bg-white/5 text-white/40 border-white/10"
                      )}>
                        {user.plan}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)]",
                        user.status === 'Active' ? "bg-accent" :
                        user.status === 'Banned' ? "bg-red-500" :
                        "bg-amber-500"
                      )} />
                      <span className="text-xs font-bold text-white/80">{user.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-[10px] font-bold text-white/40">{user.lastActive}</div>
                  </td>
                  <td className="px-6 py-5 font-mono text-[10px] text-white/60">{user.country}</td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <button className="p-2 glass rounded-lg text-white/20 hover:text-accent transition-colors">
                         <Shield size={14} />
                       </button>
                       <button className="p-2 glass rounded-lg text-white/20 hover:text-white transition-colors">
                         <MoreHorizontal size={14} />
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 border-t border-white/5 bg-white/[0.01] flex items-center justify-between">
          <div className="text-[10px] uppercase font-bold tracking-widest text-white/20">
            Showing 8 of 1,234 users
          </div>
          <div className="flex items-center gap-2">
            <button className="glass px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all disabled:opacity-30" disabled>Previous</button>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold bg-accent text-black">1</button>
              <button className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold text-white/40 hover:bg-white/5">2</button>
              <button className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold text-white/40 hover:bg-white/5">3</button>
            </div>
            <button className="glass px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
