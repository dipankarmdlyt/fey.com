import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  ShieldCheck, 
  ShieldAlert,
  Loader2,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

type AuthMode = 'signin' | 'signup';

interface AuthScreenProps {
  initialMode: AuthMode;
  onBack: () => void;
  onSuccess: () => void;
}

export default function AuthScreen({ initialMode, onBack, onSuccess }: AuthScreenProps) {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Mock auth delay
    setTimeout(() => {
      if (mode === 'signin' && formData.email === 'error@fey.com') {
        setError('Invalid credentials. Please try again.');
        setIsLoading(false);
      } else {
        setIsLoading(false);
        onSuccess();
      }
    }, 1500);
  };

  const toggleMode = () => {
    setMode(mode === 'signin' ? 'signup' : 'signin');
    setError(null);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      {/* Immersive Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-[#050505]/95 backdrop-blur-2xl"
      >
        <div className="absolute inset-0 mesh-gradient animate-mesh opacity-40" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="w-full max-w-[440px] relative z-10"
      >
        <button 
          onClick={onBack}
          className="absolute -top-16 left-0 flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back</span>
        </button>

        <div className="glass rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden backdrop-blur-3xl border-white/5">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <span className="text-3xl font-bold tracking-tighter">Fey.</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, x: mode === 'signin' ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: mode === 'signin' ? 20 : -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-2">
                  {mode === 'signin' ? 'Welcome back' : 'Get started for free'}
                </h1>
                <p className="text-sm text-white/40">
                  {mode === 'signin' ? 'Sign in to your account' : 'Create your account in one minute'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === 'signup' && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest pl-1">Full name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-accent transition-colors" size={18} />
                      <input 
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-1 focus:ring-accent outline-none transition-all focus:bg-white/[0.05]"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest pl-1">Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-accent transition-colors" size={18} />
                    <input 
                      required
                      type="email"
                      placeholder="you@example.com"
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-1 focus:ring-accent outline-none transition-all focus:bg-white/[0.05]"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center pr-1">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest pl-1">Password</label>
                    {mode === 'signin' && (
                      <button type="button" className="text-[10px] uppercase font-bold text-accent hover:underline">Forgot?</button>
                    )}
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-accent transition-colors" size={18} />
                    <input 
                      required
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-12 pr-12 text-sm focus:ring-1 focus:ring-accent outline-none transition-all focus:bg-white/[0.05]"
                      value={formData.password}
                      onChange={e => setFormData({ ...formData, password: e.target.value })}
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Error State */}
                <AnimatePresence>
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center gap-2 text-red-400 text-xs font-medium bg-red-400/10 p-3 rounded-xl border border-red-400/20"
                    >
                      <ShieldAlert size={14} />
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button 
                  disabled={isLoading}
                  className="w-full py-4 bg-accent text-black rounded-2xl font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2 mt-4"
                >
                  {isLoading ? <Loader2 className="animate-spin" size={18} /> : (mode === 'signin' ? 'Sign In' : 'Create Account')}
                </button>

                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                  <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest">
                    <span className="bg-[#0c0c0c] px-3 text-white/20">or</span>
                  </div>
                </div>

                <button type="button" className="w-full py-4 glass rounded-2xl font-bold text-sm flex items-center justify-center gap-3 hover:bg-white/5 transition-all">
                  <img src="https://www.google.com/favicon.ico" className="w-4 h-4 grayscale" alt="Google" />
                  Continue with Google
                </button>
              </form>

              <div className="text-center mt-8 space-y-4">
                <p className="text-sm text-white/40">
                  {mode === 'signin' ? "Don't have an account?" : "Already have an account?"}{' '}
                  <button onClick={toggleMode} className="text-accent font-bold hover:underline">
                    {mode === 'signin' ? 'Sign up' : 'Sign in'}
                  </button>
                </p>

                <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-white/20 uppercase tracking-tighter">
                    <ShieldCheck size={12} className="text-accent/40" />
                    256-bit Encryption
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-white/20 uppercase tracking-tighter">
                    <CheckCircle2 size={12} className="text-accent/40" />
                    No Spam
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {mode === 'signup' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-center text-[10px] text-white/20 uppercase font-bold tracking-widest space-y-1"
          >
            <div>7-day free trial • Cancel anytime</div>
            <div>Used by 10,000+ investors worldwide</div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
