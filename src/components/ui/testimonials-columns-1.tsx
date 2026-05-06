"use client";
import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={cn("relative overflow-hidden", props.className)}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div 
                className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm shadow-xl shadow-black/20 max-w-xs w-full flex flex-col gap-4 group hover:bg-white/[0.04] transition-colors" 
                key={`${index}-${i}`}
              >
                <div className="text-white/70 leading-relaxed text-sm italic">"{text}"</div>
                <div className="flex items-center gap-3 mt-2">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold text-white/90 tracking-tight text-sm leading-tight">{name}</div>
                    <div className="text-xs text-white/40 tracking-tight leading-tight">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
