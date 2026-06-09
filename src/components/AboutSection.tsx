import React from "react";
import { ChevronRight } from "lucide-react";
import { CLIENT_STORIES } from "../data";

interface AboutSectionProps {
  handleViewChange: (view: "home" | "about" | "sandbox" | "portfolio" | "services" | "contact") => void;
}

export default function AboutSection({ handleViewChange }: AboutSectionProps) {
  return (
    <div className="w-full">
      {/* ── BIO / ABOUT SECTION ── */}
      <section id="about" className="py-24 px-6 border-b border-border-card max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5">
            <span className="text-orange-brand text-[10px] font-mono uppercase tracking-[0.3em] block mb-3">
              THE DESIGNER
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white leading-tight">
              Where aesthetics meet <span className="text-orange-brand">commercial strength</span>.
            </h2>
            
            <div className="grid grid-cols-3 gap-6 mt-12 bg-card-bg border border-border-card p-6 divide-x divide-border-card">
              <div className="text-center">
                <p className="font-display font-extrabold text-3xl text-orange-brand leading-none">5+</p>
                <p className="text-[10px] font-mono uppercase text-gray-400 mt-2">Years Active</p>
              </div>
              <div className="text-center pl-4">
                <p className="font-display font-extrabold text-3xl text-white leading-none">15+</p>
                <p className="text-[10px] font-mono uppercase text-gray-400 mt-2">Main Brands</p>
              </div>
              <div className="text-center pl-4">
                <p className="font-display font-extrabold text-3xl text-white leading-none">40+</p>
                <p className="text-[10px] font-mono uppercase text-gray-400 mt-2">Renders Done</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 text-gray-400 leading-relaxed text-base pt-2">
            <p>
              Hey, I'm <strong className="text-white">Gaitano Ezra</strong>. Ever since 3D structural graphics became a core marketing driving force globally, my mission has been helping local and international brands command maximum attention.
            </p>
            <p>
              At <strong className="text-white">Koko Digital Studio</strong> in Kampala, I lead visual playbooks for hospitality, sports platforms, and beverage industries. Adding high-fidelity 3D renderings ensures that campaign materials look not just premium, but industry-defining.
            </p>
            <p>
              Whether it is a photorealistic ice-cold beverage render for <span className="text-orange-brand font-medium">Drinks24 UG</span> or immersive visual marketing for <span className="text-white font-medium">Vulkan Sports Arena</span>, my design suite leverages a strict sense of layout contrast, dynamic shadows, and architectural material flow.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <h4 className="text-white font-display uppercase tracking-wider text-xs font-bold mb-1">DESIGN TOOLSTACK MASTERY</h4>
              <div className="flex flex-wrap gap-2 text-left">
                {["Cinema 4D", "Octane Render", "Blender 3D", "Adobe Photoshop", "Illustrator", "After Effects", "Figma", "Keyshot"].map((tool, idx) => (
                  <span key={idx} className="px-3 py-1 bg-border-card/30 text-gray-300 text-xs font-mono rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── CLIENT REVIEWS / TESTIMONIALS ── */}
      <section id="testimonials" className="py-24 px-6 bg-black border-b border-border-card">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12">
            <span className="text-orange-brand text-[10px] font-mono uppercase tracking-[0.3em] block mb-3">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white">
              Campaign feedback.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CLIENT_STORIES.map((story, idx) => (
              <div
                key={idx}
                className="bg-card-bg border border-border-card p-6 flex flex-col justify-between"
              >
                <div className="text-gray-300 text-sm italic font-sans leading-relaxed mb-6">
                  "{story.quote}"
                </div>
                
                <div className="pt-4 border-t border-border-card/50 flex justify-between items-center bg-black/30 p-3 rounded">
                  <div className="text-left">
                    <span className="text-white font-display text-xs font-bold block">{story.author}</span>
                    <span className="text-[10px] font-mono text-gray-500">{story.role}</span>
                  </div>
                  <span className="px-2 py-0.5 bg-orange-brand/10 border border-orange-brand/35 text-orange-brand text-[9px] font-mono uppercase">
                    {story.company}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Elegant navigation block */}
      <div className="py-16 px-6 flex flex-col items-center justify-center bg-zinc-950 gap-4 text-center border-b border-border-card">
        <p className="font-mono text-zinc-500 text-[10px] tracking-widest uppercase">Finished reading? Try the creator deck:</p>
        <button 
          onClick={() => handleViewChange("sandbox")} 
          className="flex items-center gap-2 px-6 py-3.5 bg-orange-brand hover:bg-orange-brand/90 text-white font-display text-xs font-bold uppercase tracking-widest hover:scale-[1.03] active:scale-[0.97] transition-all cursor-pointer shadow-lg shadow-orange-brand/10"
        >
          Enter 3D Sandbox <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
