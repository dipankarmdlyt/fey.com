"use client";

import { motion } from "motion/react";
import { DollarSign, TrendingUp } from "lucide-react";
import { cn } from "@/src/lib/utils";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-emerald-500/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
            animate={{ opacity: 1, y: 0, rotate: rotate }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ width, height }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(0,255,136,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

interface HeroGeometricProps {
    badge?: string;
    title1?: string;
    title2?: string;
    subtitle?: string;
    ctaText?: string;
    onCTA?: () => void;
}

function HeroGeometric({
    badge = "Investment AI",
    title1 = "Make Better",
    title2 = "Investments",
    subtitle = "AI-powered insights for smarter portfolio decisions. Sync brokers instantly.",
    ctaText = "Start Free Trial",
    onCTA,
}: HeroGeometricProps) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-transparent">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] via-transparent to-blue-500/[0.03] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape delay={0.3} width={600} height={140} rotate={12} gradient="from-emerald-400/[0.12]" className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />
                <ElegantShape delay={0.5} width={500} height={120} rotate={-15} gradient="from-blue-400/[0.12]" className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" />
                <ElegantShape delay={0.4} width={300} height={80} rotate={-8} gradient="from-emerald-500/[0.12]" className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]" />
                <ElegantShape delay={0.6} width={200} height={60} rotate={20} gradient="from-indigo-400/[0.12]" className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate="visible" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.02] border border-emerald-500/[0.2] mb-8 md:mb-12 backdrop-blur-sm">
                        <DollarSign className="h-3 w-3 text-emerald-400" />
                        <span className="text-xs uppercase tracking-widest text-emerald-300 font-medium">{badge}</span>
                    </motion.div>

                    <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 md:mb-8 leading-tight tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-emerald-100">
                                {title1}
                            </span>
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-emerald-200 to-blue-300">
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible" className="mb-12">
                        <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-8 leading-relaxed max-w-2xl mx-auto px-4 font-light">
                            {subtitle}
                        </p>
                        <button
                            onClick={onCTA}
                            className="group relative px-10 py-4 bg-emerald-500/10 hover:bg-emerald-500/20 border-2 border-emerald-500/30 backdrop-blur-sm rounded-2xl text-lg font-semibold text-emerald-300 hover:text-emerald-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {ctaText}
                                <TrendingUp className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 blur-sm" />
                        </button>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent pointer-events-none" />
        </div>
    );
}

export { HeroGeometric };
