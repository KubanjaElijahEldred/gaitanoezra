import React, { useState } from "react";
import { motion } from "motion/react";
import { Eye, ChevronRight } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

interface PortfolioSectionProps {
  handleViewChange: (view: "home" | "about" | "sandbox" | "portfolio" | "services" | "contact") => void;
  setActiveProject: (project: Project | null) => void;
}

export default function PortfolioSection({ handleViewChange, setActiveProject }: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Calculate unique categories from our database
  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full">
      {/* ── PORTFOLIO PROJECTS SHOWCASE grid ── */}
      <section id="portfolio" className="py-24 px-6 w-full border-b border-border-card">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="text-left">
            <span className="text-orange-brand text-[10px] font-mono uppercase tracking-[0.3em] block mb-3">
              PRIMARY SHOWCASE
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white">
              Selected Renders 
            </h2>
          </div>

          {/* Filtering tabs */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all border cursor-pointer ${
                  selectedCategory === cat
                    ? "border-orange-brand bg-orange-brand text-white font-bold"
                    : "border-border-card hover:bg-card-bg text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              className="bg-card-bg border border-border-card p-4 hover:border-orange-brand/50 group transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-border-card bg-zinc-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Category Pill Overlays */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-black/75 backdrop-blur-sm border border-border-card/85 text-[9px] font-mono text-white uppercase tracking-wider rounded">
                      {project.category}
                    </span>
                  </div>

                  {/* Eye look inside hover card icon */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/30 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-end">
                    <button 
                      onClick={() => setActiveProject(project)}
                      className="px-4 py-2 bg-orange-brand text-white font-display uppercase tracking-widest text-[9px] font-bold flex items-center gap-1.5 transition-transform hover:scale-105 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" /> View Render Details
                    </button>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex justify-between font-mono text-[10px] text-gray-500 mb-1.5">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-white font-display font-extrabold text-xl group-hover:text-orange-brand transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-400 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-border-card/45">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-0.5 bg-black text-gray-500 font-mono text-[9px] uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </section>

      {/* Navigation transition line */}
      <div className="py-16 px-6 flex flex-col items-center justify-center bg-zinc-950 gap-4 text-center border-b border-border-card">
        <p className="font-mono text-zinc-500 text-[10px] tracking-widest uppercase">Love the renders? See our services list:</p>
        <button 
          onClick={() => handleViewChange("services")} 
          className="flex items-center gap-2 px-6 py-3.5 bg-orange-brand hover:bg-orange-brand/90 text-white font-display text-xs font-bold uppercase tracking-widest hover:scale-[1.03] active:scale-[0.97] transition-all cursor-pointer shadow-lg shadow-orange-brand/10"
        >
          Check Services <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
