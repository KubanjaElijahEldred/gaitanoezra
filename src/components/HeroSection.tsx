import React from "react";
import { motion } from "motion/react";
import { MapPin, Briefcase } from "lucide-react";
import { PROFILE_IMAGE } from "../data";
import logoImg from "../assets/images/logo.png";

interface HeroSectionProps {
  handleViewChange: (view: "home" | "about" | "sandbox" | "portfolio" | "services" | "contact") => void;
}

export default function HeroSection({ handleViewChange }: HeroSectionProps) {
  return (
    <header id="hero-sec" className="relative min-h-[calc(100vh-80px)] flex flex-col justify-end pb-16 px-6 overflow-hidden border-b border-border-card/85">
      {/* Dynamic Abstract background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-brand/10 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-[10%] w-[1px] h-[40%] bg-gradient-to-b from-transparent via-orange-brand/30 to-transparent pointer-events-none hidden lg:block" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        
        <div className="lg:col-span-8 flex flex-col justify-between">
          {/* Logo — touches the navbar */}
          <motion.img
            src={logoImg}
            alt="Ezra Collective"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="h-40 sm:h-52 md:h-64 lg:h-80 xl:h-96 w-auto object-contain select-none self-start"
          />

          {/* Text block — stays at the bottom */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-2 text-orange-brand font-mono text-xs uppercase tracking-[0.25em] mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-orange-brand animate-pulse" />
              Gaitano Ezra — 3D & Digital Designer
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight"
            >
              Pushing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-brand to-rose-500">volumetric</span> <br />
              boundaries.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-gray-400 text-lg max-w-[55ch] leading-relaxed font-sans"
            >
              At Koko Digital Studio in Kampala, Uganda, I merge layout principles, high-vibrancy strategy, and interactive 3D simulations. Turning pixels into experiences that capture loyalty.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button 
                onClick={() => handleViewChange("portfolio")} 
                className="px-6 py-3.5 bg-orange-brand hover:bg-orange-brand/95 text-white font-display font-extrabold text-xs tracking-widest uppercase transition-transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                Explore Work
              </button>
              <button 
                onClick={() => handleViewChange("sandbox")} 
                className="px-6 py-3.5 border border-border-card hover:border-orange-brand/50 text-gray-300 hover:text-white font-display font-extrabold text-xs tracking-widest uppercase transition-all cursor-pointer"
              >
                Try 3D Sandbox
              </button>
            </motion.div>
          </div>
        </div>

        {/* Profile & Location Card */}
        <div className="lg:col-span-4 self-center lg:self-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card-bg border border-border-card p-6 flex flex-col gap-6 shadow-2xl relative"
          >
            <div className="relative aspect-square w-full overflow-hidden border border-border-card/50 group">
              <img 
                src={PROFILE_IMAGE} 
                alt="Gaitano Ezra" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 drop-shadow-md pb-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-widest font-bold bg-dark-bg/60 backdrop-blur-sm px-2 py-0.5 rounded">
                  Active in Kampala
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-white font-display font-bold text-base">Gaitano Ezra</span>
                <span className="text-gray-500 text-[10px] font-mono">EST. 2020</span>
              </div>
              <p className="text-xs text-gray-400">
                Lead Digital Creator specializing in 3D product renders, advertising briefs, and social campaigns.
              </p>
              
              <div className="flex flex-col gap-1.5 mt-2 pt-3 border-t border-border-card/60 font-mono text-[10px] text-gray-500">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-orange-brand" />
                  Kampala, Uganda, East Africa
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-orange-brand" />
                  Koko Digital Studio
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </header>
  );
}
