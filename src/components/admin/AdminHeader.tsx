import React, { useState, useEffect } from 'react';
import { Search, Bell, Globe, Command, Moon, Sun, LogOut, Settings, User, Menu } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/src/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { motion, AnimatePresence } from 'motion/react';

interface AdminHeaderProps {
  onExit?: () => void;
  onMenuClick?: () => void;
  activeTab?: string;
}

export const AdminHeader = ({ onExit, onMenuClick, activeTab = 'dashboard' }: AdminHeaderProps) => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof localStorage !== 'undefined') {
      return (localStorage.getItem('admin-theme') as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('admin-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Handle Command + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const formatBreadcrumb = (tab: string) => {
    return tab.charAt(0).toUpperCase() + tab.slice(1);
  };

  return (
    <header className="h-16 border-b border-white/10 flex items-center justify-between px-4 sm:px-6 bg-black/70 backdrop-blur-md z-40 sticky top-0 transition-all duration-300">
      {/* Left Axis: Breadcrumbs & Menu */}
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onMenuClick}
          className="lg:hidden text-white/60 hover:text-accent hover:bg-accent/10 transition-all"
        >
          <Menu size={20} />
        </Button>
        
        <div className="hidden sm:flex items-center gap-2 text-xs font-medium tracking-tight">
          <span className="text-white/40">Dashboard</span>
          <span className="text-white/20">/</span>
          <span className="text-accent">{formatBreadcrumb(activeTab)}</span>
        </div>
      </div>

      {/* Center Axis: Minimal Global Search */}
      <div className="flex-1 max-w-md mx-4 relative">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-accent transition-colors" size={14} />
          <Input 
            onClick={() => setIsSearchOpen(true)}
            readOnly
            placeholder="Search... (⌘K)" 
            className="h-9 bg-white/[0.03] border-white/5 rounded-full pl-10 pr-12 text-[13px] focus:ring-accent/20 focus:border-accent hover:border-white/20 transition-all cursor-pointer"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-1.5 py-0.5 rounded border border-white/10 bg-white/5 text-[9px] font-bold text-white/20 uppercase tracking-tighter sm:flex hidden">
             ⌘K
          </div>
        </div>

        {/* Global Search Overlay (Simplified Mock) */}
        <AnimatePresence>
          {isSearchOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSearchOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
              />
              <motion.div 
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                className="absolute top-0 left-0 w-full mt-12 bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl p-4 z-[110]"
              >
                <div className="text-[10px] uppercase font-black tracking-widest text-white/20 mb-4 px-2">Recent Searches</div>
                <div className="space-y-1">
                  {['Invoices', 'User: Jensen Huang', 'System Logs', 'Stripe Integration'].map((item) => (
                    <div key={item} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 cursor-pointer group transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/20 group-hover:text-accent group-hover:bg-accent/10">
                        <Globe size={14} />
                      </div>
                      <span className="text-xs text-white/60 group-hover:text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Right Axis: Utilities & Profile */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Toggle Theme */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-white/40 hover:text-white hover:bg-white/5 w-9 h-9 transition-transform"
        >
          <motion.div
            animate={{ rotate: theme === 'dark' ? 0 : 180 }}
            transition={{ type: "spring", damping: 10 }}
          >
            {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
          </motion.div>
        </Button>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative text-white/40 hover:text-white hover:bg-white/5 w-9 h-9"
            >
              <Bell size={18} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full animate-pulse border border-[#050505]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 mt-2 bg-black/95 backdrop-blur-xl border-white/10 p-4">
            <DropdownMenuLabel className="text-[10px] uppercase tracking-widest text-white/40">Critical Notifications</DropdownMenuLabel>
            <div className="mt-4 space-y-4">
              <div className="flex gap-4 p-3 rounded-xl bg-accent/5 border border-accent/10">
                <div className="w-2 h-2 bg-accent rounded-full mt-1 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">System Update</div>
                  <div className="text-[10px] text-white/60 mt-1 leading-relaxed">Enterprise modules synchronized successfully with node-829.</div>
                </div>
              </div>
              <div className="flex gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Security Alert</div>
                  <div className="text-[10px] text-white/60 mt-1 leading-relaxed">Unauthorized access attempt from unknown IP: 192.168.1.1.</div>
                </div>
              </div>
            </div>
            <DropdownMenuSeparator className="mt-6" />
            <Button variant="ghost" className="w-full text-[10px] h-8 text-accent font-bold uppercase tracking-widest hover:bg-accent/10">
              Clear All
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="hidden sm:block h-6 w-px bg-white/10" />

        {/* Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-0.5 rounded-full hover:bg-accent/20 transition-all border border-transparent hover:border-accent/30 group">
              <Avatar className="w-8 h-8 group-hover:scale-105 transition-transform">
                <AvatarImage src="" />
                <AvatarFallback className="bg-accent text-black font-black text-[10px] tracking-tighter">JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 mt-2 bg-black/95 backdrop-blur-xl border-white/10">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-xs font-bold leading-none text-white">John Doe</p>
                <p className="text-[10px] leading-none text-white/40 font-medium">john@fey.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 focus:bg-accent/10 focus:text-accent">
              <User size={14} /> <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2 focus:bg-accent/10 focus:text-accent">
              <Settings size={14} /> <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onExit} className="gap-2 text-red-400 focus:bg-red-500/10 focus:text-red-400">
              <LogOut size={14} /> <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
