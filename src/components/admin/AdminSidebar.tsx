import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  BarChart3, 
  Settings, 
  Zap, 
  ShieldCheck, 
  LogOut,
  ChevronLeft,
  Terminal,
  Compass
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: any) => void;
  isOpen: boolean;
  onClose: () => void;
  onExit: () => void;
}

export const AdminSidebar = ({ activeTab, setActiveTab, isOpen, onClose, onExit }: AdminSidebarProps) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'workflows', label: 'Workflows', icon: Zap },
    { id: 'integrations', label: 'Integrations', icon: Compass },
    { id: 'logs', label: 'System Logs', icon: Terminal },
    { id: 'security', label: 'Security', icon: ShieldCheck },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[250]"
          />

          {/* Sidebar Drawer */}
          <motion.aside 
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-[300px] glass border-r border-white/10 bg-[#050505] flex flex-col pt-8 pb-6 px-6 z-[300] shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between mb-10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center font-bold text-black text-sm shadow-[0_0_20px_rgba(0,255,136,0.3)]">F.</div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tighter leading-none text-white">Fey Pro</span>
                  <span className="text-[10px] text-accent font-black uppercase tracking-widest mt-1 opacity-80">Enterprise</span>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 glass rounded-xl text-white/40 hover:text-white transition-colors"
                title="Close Menu"
              >
                <ChevronLeft size={20} />
              </button>
            </div>

            <nav className="flex-1 space-y-1.5 overflow-y-auto no-scrollbar">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={cn(
                    "w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all relative group",
                    activeTab === item.id ? "bg-white/10 text-white shadow-soft" : "text-white/40 hover:text-white hover:bg-white/[0.03]"
                  )}
                >
                  <item.icon size={20} className={cn("transition-colors duration-300", activeTab === item.id ? "text-accent" : "group-hover:text-white")} />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                    {item.label}
                  </span>
                  {activeTab === item.id && (
                    <motion.div 
                      layoutId="sidebar-tab-indicator" 
                      className="absolute left-[-24px] w-1.5 h-8 bg-accent rounded-r-full shadow-[0_0_15px_rgba(0,255,136,0.5)]" 
                    />
                  )}
                </button>
              ))}
            </nav>

            <div className="mt-auto space-y-2 pt-8 border-t border-white/5 shrink-0">
              <button 
                onClick={onExit}
                className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-white/30 hover:text-red-400 hover:bg-red-500/5 transition-all group"
              >
                <LogOut size={20} className="transition-colors" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Exit Admin</span>
              </button>
              
              <div className="px-2 py-4 flex items-center gap-4 bg-white/[0.02] rounded-2xl border border-white/5">
                 <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center font-bold text-xs text-accent shadow-inner">JD</div>
                 <div className="min-w-0">
                   <div className="text-xs font-bold truncate text-white leading-tight">John Doe</div>
                   <div className="text-[9px] text-white/30 font-black uppercase tracking-widest mt-0.5">Superadmin</div>
                 </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
