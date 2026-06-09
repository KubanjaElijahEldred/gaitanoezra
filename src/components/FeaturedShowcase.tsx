import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Cpu, Layers, Maximize2 } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

interface FeaturedShowcaseProps {
  setActiveProject: (project: Project | null) => void;
  handleViewChange: (view: "home" | "about" | "sandbox" | "portfolio" | "services" | "contact") => void;
}

export default function FeaturedShowcase({ setActiveProject, handleViewChange }: FeaturedShowcaseProps) {
  // Find our two specific projects from data
  const cosmicProject = PROJECTS.find((p) => p.id === "hero-3d-cosmic") || PROJECTS[0];
  const editorialProject = PROJECTS.find((p) => p.id === "mag-physical") || PROJECTS[3];

  return (
    <section id="featured-showcase" className="py-24 px-6 bg-[#030303] border-b border-border-card/85 text-left relative overflow-hidden">
      {/* Background visual indicators */}
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-orange-brand/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[200px] h-[200px] bg-rose-500/5 rounded-full blur-[90px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-orange-brand text-[10px] font-mono uppercase tracking-[0.34em] block mb-3">
              SIGNATURE COMPOSITIONS
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Featured Studio <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-brand to-rose-450">Exhibitions.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-[40ch] font-sans leading-relaxed md:text-right">
            A close-up exploration of our landmark creative studies merging cinematic 3D lighting, editorial aesthetics, and physical gravity.
          </p>
        </div>

        {/* Alternate Stack of Exhibits */}
        <div className="space-y-32">
          
          {/* EXHIBIT 1: Cosmic Flow Elements */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Descriptive side */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 bg-orange-brand/10 border border-orange-brand/35 text-orange-brand text-[9px] font-mono uppercase tracking-wider rounded border-solid">
                  01 // DYNAMIC GEOMETRY
                </span>
                <span className="text-zinc-500 font-mono text-[10px]">YEAR: {cosmicProject.year}</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
                {cosmicProject.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed font-sans">
                {cosmicProject.description} This study demonstrates the collision of digital technology and fluid motion, featuring high-gloss chrome structures combined with active orange neon emitters.
              </p>

              {/* Unique detailed technical specifications */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-border-card/60">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">MESH SURFACE:</span>
                  <span className="text-xs font-bold text-gray-200 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-orange-brand" /> Semi-Glass Polished
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">RENDER PIPELINE:</span>
                  <span className="text-xs font-bold text-gray-200 flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5 text-orange-brand" /> Octane Volumetric
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {cosmicProject.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-black text-gray-400 text-[9px] font-mono uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => setActiveProject(cosmicProject)}
                  className="px-6 py-3 bg-card-bg border border-border-card hover:border-orange-brand text-white font-mono text-[11px] uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer group"
                >
                  View Details <ArrowUpRight className="w-3.5 h-3.5 text-orange-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => handleViewChange("contact")}
                  className="text-xs text-gray-400 hover:text-white transition-colors underline font-mono tracking-wider cursor-pointer font-bold"
                >
                  Discuss Custom Setup
                </button>
              </div>
            </div>

            {/* Cinematic Image Frame (7 Spans) */}
            <div className="lg:col-span-7">
              <div 
                onClick={() => setActiveProject(cosmicProject)}
                className="group relative aspect-[16/10] bg-zinc-950 border border-border-card p-2 hover:border-orange-brand/60 transition-all duration-500 cursor-pointer overflow-hidden shadow-2xl"
              >
                <img 
                  src={cosmicProject.image} 
                  alt={cosmicProject.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-[1.03]"
                />
                
                {/* Tech overlay HUD */}
                <div className="absolute top-4 left-4 font-mono text-[9px] text-orange-brand bg-black/70 border border-orange-brand/35 px-2 py-0.5 tracking-widest backdrop-blur-sm select-none opacity-0 group-hover:opacity-100 transition-opacity">
                  LATENCY: LIVE_SIMULATOR
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60 pointer-events-none" />
                
                <div className="absolute bottom-6 right-6 p-3 bg-orange-brand text-white rounded-none shadow-lg tracking-widest font-mono text-xs opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>

          {/* EXHIBIT 2: Sculptural Editorial Space */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Cinematic Image Frame (7 Spans) on the Left for alternate pattern */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div 
                onClick={() => setActiveProject(editorialProject)}
                className="group relative aspect-[16/10] bg-zinc-950 border border-border-card p-2 hover:border-orange-brand/60 transition-all duration-500 cursor-pointer overflow-hidden shadow-2xl"
              >
                <img 
                  src={editorialProject.image} 
                  alt={editorialProject.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-[1.03]"
                />

                <div className="absolute top-4 right-4 font-mono text-[9px] text-white bg-black/70 border border-border-card/60 px-2 py-0.5 tracking-widest backdrop-blur-sm select-none opacity-0 group-hover:opacity-100 transition-opacity">
                  DENSITY: TACTILE_EDIT
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60 pointer-events-none" />

                <div className="absolute bottom-6 right-6 p-3 bg-orange-brand text-white rounded-none shadow-lg tracking-widest font-mono text-xs opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Descriptive side (5 Spans) on the Right */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 bg-neutral-800 text-gray-300 border border-border-card/85 text-[9px] font-mono uppercase tracking-wider rounded border-solid">
                  02 // STRUCTURAL REALIZATION
                </span>
                <span className="text-zinc-500 font-mono text-[10px]">CLIENT: {editorialProject.client}</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
                {editorialProject.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed font-sans">
                {editorialProject.description} A premium publishing simulation pairing mechanical editorial typography with coarse fluid physical slabs pulling directly out of the layout pages.
              </p>

              {/* Unique detailed technical specifications */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-border-card/60">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">TACTILITY TYPE:</span>
                  <span className="text-xs font-bold text-gray-200 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-orange-brand" /> Sandstone Dense Slab
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">SIMULATION DEPTH:</span>
                  <span className="text-xs font-bold text-gray-200 flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5 text-orange-brand" /> Fluid Dynamic Cloth
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {editorialProject.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-black text-gray-400 text-[9px] font-mono uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => setActiveProject(editorialProject)}
                  className="px-6 py-3 bg-card-bg border border-border-card hover:border-orange-brand text-white font-mono text-[11px] uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer group"
                >
                  View Details <ArrowUpRight className="w-3.5 h-3.5 text-orange-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => handleViewChange("services")}
                  className="text-xs text-gray-400 hover:text-white transition-colors underline font-mono tracking-wider cursor-pointer font-bold"
                >
                  Explore Studio Services
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
