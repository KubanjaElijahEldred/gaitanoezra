import React, { useState, useEffect } from "react";
import { Sparkles, Code, Check, ChevronRight } from "lucide-react";
import { SERVICES } from "../data";

interface ServicesSectionProps {
  handleViewChange: (view: "home" | "about" | "sandbox" | "portfolio" | "services" | "contact") => void;
}

export default function ServicesSection({ handleViewChange }: ServicesSectionProps) {
  // Creative brief generator state
  const [briefIndustry, setBriefIndustry] = useState<string>("Hospitality & Dining");
  const [briefStyle, setBriefStyle] = useState<"Minimalist Glass" | "Vibrant Techno" | "Tactile Brutalist">("Minimalist Glass");
  const [generatedBrief, setGeneratedBrief] = useState<{
    conceptName: string;
    narrative: string;
    pallet: string[];
    suggestedAssets: string[];
  } | null>(null);

  // Auto-generate on change
  useEffect(() => {
    generateBriefConcept();
  }, [briefIndustry, briefStyle]);

  const generateBriefConcept = () => {
    let conceptName = "";
    let narrative = "";
    let pallet: string[] = [];
    let suggestedAssets: string[] = [];

    if (briefStyle === "Minimalist Glass") {
      conceptName = `Project TRANSLUCENT — ${briefIndustry.split(" ")[0]}`;
      narrative = `An high-end aesthetic showcasing fluid corporate structure through volumetric glass cards, frosted dividers, and a warm copper color profile. Designed to build immense trust and present brand values clearly.`;
      pallet = ["#E85C1A", "#FFFFFF", "#F0EDE6", "#1E1E1E", "#0A0A0A"];
      suggestedAssets = [
        "Frosted isometric service panels",
        "Hoverable glass menu widgets",
        "Refractive structural logo sculpture"
      ];
    } else if (briefStyle === "Vibrant Techno") {
      conceptName = `Project NEO-FLUID — ${briefIndustry.split(" ")[0]}`;
      narrative = `A high-vibrancy tech-forward structure leveraging glossy black chrome geometry paired with neon emitters. Engineered to hook instant user attention and stand out significantly on social grids.`;
      pallet = ["#E85C1A", "#00F0FF", "#000000", "#111111", "#1E1E1E"];
      suggestedAssets = [
        "Glossy black chrome typography cards",
        "Neon directional vector light displays",
        "Interactive procedural wireframe sliders"
      ];
    } else {
      conceptName = `Project BRUT-TACTILE — ${briefIndustry.split(" ")[0]}`;
      narrative = `A physical, material-heavy workspace utilizing raw dark sandstone, extruded heavy slab typography, and dynamic shadows. It feels durable, established, and artistically authentic.`;
      pallet = ["#E85C1A", "#888880", "#1C1C14", "#0A0A0A", "#FAFAFA"];
      suggestedAssets = [
        "Heavy stone structural blocks",
        "Coarse-grained magazine layout dividers",
        "Contrastive raw clay icon presets"
      ];
    }

    setGeneratedBrief({
      conceptName,
      narrative,
      pallet,
      suggestedAssets
    });
  };

  return (
    <div className="w-full">
      {/* ── CORE SERVICES DETAILS (WHAT I DO) ── */}
      <section id="services" className="py-24 px-6 border-b border-border-card max-w-7xl mx-auto">
        
        <div className="mb-16 text-left">
          <span className="text-orange-brand text-[10px] font-mono uppercase tracking-[0.3em] block mb-3">
            CAPABILITIES ARCHIVE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white">
            What Ezra Collective resolves.
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-xl">
            We operate at the high-contrast crossing of aesthetic concept simulations, physical assets rendering, and strategic paid campaigns across East Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 border border-border-card bg-border-card text-left">
          {SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="bg-card-bg p-6 flex flex-col justify-between group hover:bg-[#161616] transition-colors"
            >
              <div>
                <span className="font-display font-extrabold text-[10px] text-gray-600 group-hover:text-orange-brand transition-colors block mb-4 font-mono">
                  {serv.number}
                </span>
                
                <h3 className="font-display font-bold text-lg text-white mb-2 tracking-tight">
                  {serv.title}
                </h3>
                
                <p className="text-gray-400 text-xs leading-relaxed mb-6">
                  {serv.description}
                </p>
              </div>

              <div>
                <span className="inline-block px-2 py-0.5 border border-orange-brand/40 text-orange-brand font-mono text-[9px] uppercase tracking-wider rounded mb-6">
                  {serv.tag}
                </span>

                <ul className="space-y-2 pt-4 border-t border-border-card/60">
                  {serv.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 font-mono text-[10px] text-gray-400">
                      <div className="w-1 h-1 bg-orange-brand" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ── CONCEPT GENERATOR / DESIGN BREIFING ENGINE ── */}
      <section id="brief-gen" className="py-24 px-6 bg-black border-b border-border-card text-gray-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Input Form Column (6 spans) */}
            <div className="lg:col-span-5 text-left">
              <span className="text-orange-brand text-[10px] font-mono uppercase tracking-[0.3em] block mb-3">
                CREATIVE AUDIT MODULE
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white leading-tight">
                Simulate your campaign concept.
              </h2>
              <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                Choose your industry and styling direction, and our visual generator deck will customize a draft prompt brief, custom material meshes, and tone strategies aligned to Kampala standards.
              </p>

              {/* Selector settings */}
              <div className="space-y-4 mt-8 bg-card-bg border border-border-card p-6">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-gray-400 mb-2">
                    A: Target Industry Scope
                  </label>
                  <select 
                    value={briefIndustry}
                    onChange={(e) => setBriefIndustry(e.target.value)}
                    className="w-full bg-black border border-border-card px-4 py-2.5 text-xs text-white focus:outline-none focus:border-orange-brand cursor-pointer"
                  >
                    <option>Hospitality & Dining (Cakes, Cafes)</option>
                    <option>Ultra-Premium Spirits & Drinks</option>
                    <option>Sports & Wellness Arenas</option>
                    <option>High-end Travel & Boutique Lodges</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-gray-400 mb-2">
                    B: Render Styling Direction
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { val: "Minimalist Glass", desc: "Translucent glass shaders & editorial grids" },
                      { val: "Vibrant Techno", desc: "Glossy black chrome & vibrant neon accents" },
                      { val: "Tactile Brutalist", desc: "Extruded slab plates & raw grainy stone textures" }
                    ].map((st) => (
                      <button
                        key={st.val}
                        onClick={() => setBriefStyle(st.val as any)}
                        className={`p-3 text-left border transition-all flex flex-col cursor-pointer ${
                          briefStyle === st.val
                            ? "border-orange-brand bg-orange-brand/5"
                            : "border-border-card hover:bg-border-card/45"
                        }`}
                      >
                        <span className="text-xs font-bold text-white uppercase tracking-wider">{st.val}</span>
                        <span className="text-[10px] font-mono text-gray-500 mt-0.5">{st.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Simulated Live Output Card (7 spans) */}
            <div className="lg:col-span-7">
              <div className="bg-card-bg border border-border-card p-6 relative text-left">
                
                <div className="absolute top-4 right-4 flex items-center gap-1.5 font-mono text-[9px] text-gray-500 uppercase select-none">
                  <Code className="w-3.5 h-3.5 text-orange-brand" /> DYNAMIC BRIEF PARSER v1.0
                </div>

                {generatedBrief ? (
                  <div className="space-y-6">
                    <div>
                      <span className="px-2 py-0.5 bg-orange-brand/10 border border-orange-brand/35 text-orange-brand text-[9px] font-mono uppercase tracking-wider rounded">
                        CONCEPT MATRIX RESOLVED
                      </span>
                      <h3 className="text-white font-display font-extrabold text-2xl mt-3 flex items-center gap-2">
                        {generatedBrief.conceptName}
                      </h3>
                    </div>

                    <div className="p-4 bg-black border-l-2 border-orange-brand text-gray-400 text-xs leading-relaxed font-sans">
                      {generatedBrief.narrative}
                    </div>

                    {/* Color palette display */}
                    <div>
                      <h4 className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2.5">Extracted Color Palette (Hex)</h4>
                      <div className="flex gap-2">
                        {generatedBrief.pallet.map((hex, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-1 flex-1">
                            <div className="h-8 w-full border border-white/10" style={{ backgroundColor: hex }} />
                            <span className="font-mono text-[9px] text-gray-500 uppercase">{hex}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Highlighted core suggestions */}
                    <div>
                      <h4 className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2">Required Asset elements</h4>
                      <ul className="space-y-1.5">
                        {generatedBrief.suggestedAssets.map((asset, idx) => (
                          <li key={idx} className="flex items-center gap-2 font-mono text-xs text-gray-300">
                            <Check className="w-3.5 h-3.5 text-orange-brand" />
                            {asset}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="font-mono text-[9px] text-zinc-500 pt-3 border-t border-border-card/60">
                      *THIS BRIEF CAN BE GENERATED INTO COMPOSITIONS USING CINEMA 4D & BLENDER.
                    </p>

                  </div>
                ) : (
                  <div className="py-24 text-center text-gray-500 font-mono text-xs">
                    Initializing creative briefs generators...
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Navigation transition line */}
      <div className="py-16 px-6 flex flex-col items-center justify-center bg-zinc-950 gap-4 text-center border-b border-border-card">
        <p className="font-mono text-zinc-500 text-[10px] tracking-widest uppercase">Ready to get your concept started?</p>
        <button 
          onClick={() => handleViewChange("contact")} 
          className="flex items-center gap-2 px-6 py-3.5 bg-orange-brand hover:bg-orange-brand/90 text-white font-display text-xs font-bold uppercase tracking-widest hover:scale-[1.03] active:scale-[0.97] transition-all cursor-pointer shadow-lg shadow-orange-brand/10"
        >
          Discuss Campaign <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
