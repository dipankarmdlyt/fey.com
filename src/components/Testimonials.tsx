"use client";
import * as React from "react";
import { motion } from "motion/react";
import { TestimonialsColumn } from "./ui/testimonials-columns-1";

const testimonials = [
  {
    text: "Fey has completely changed how I track my portfolio. The real-time syncing is flawless and the insights are actually actionable.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
    name: "Sarah Chen",
    role: "Prop Trader",
  },
  {
    text: "The clean interface and advanced charting capabilities make it my go-to tool for daily market analysis.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
    name: "Marcus Thorne",
    role: "Portfolio Manager",
  },
  {
    text: "I love the AI summaries for earnings calls. It saves me hours of research every week. Highly recommended.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&h=256&auto=format&fit=crop",
    name: "Elena Rodriguez",
    role: "Retail Investor",
  },
  {
    text: "Finally, a financial tool that feels like it belongs in 2024. The performance is lightning fast.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&h=256&auto=format&fit=crop",
    name: "David Park",
    role: "Software Engineer",
  },
  {
    text: "The institutional-grade data at a retail price point is unbeatable. Fey is a game changer for independent analysts.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop",
    name: "Jessica Wu",
    role: "Financial Analyst",
  },
  {
    text: "Syncing my brokers was a breeze. Now I have a unified view of all my assets in one beautiful dashboard.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&auto=format&fit=crop",
    name: "Liam O'Connell",
    role: "Day Trader",
  },
  {
    text: "The community features and shared insights add a layer of collaboration that was missing from my workflow.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&h=256&auto=format&fit=crop",
    name: "Sophia Martinez",
    role: "Venture Capitalist",
  },
  {
    text: "Fey's predictive models have helped me identify trends before they hit the mainstream. Unbelievable tool.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=256&h=256&auto=format&fit=crop",
    name: "Alexander Voss",
    role: "Hedge Fund Manager",
  },
  {
    text: "As someone who values aesthetics as much as utility, Fey is the first finance app I actually enjoy using.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&auto=format&fit=crop",
    name: "Maya Patel",
    role: "UX Designer",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-transparent py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[600px] mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Social Proof</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Trusted by the world's <br /> 
            <span className="text-accent">smartest investors</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Join thousands of traders and investors who use Fey to stay ahead of the market.
          </p>
        </motion.div>

        <div className="flex justify-center gap-8 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] h-[800px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0" />
    </section>
  );
};

export default Testimonials;
