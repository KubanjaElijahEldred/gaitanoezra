import React, { useState } from "react";
import { Sliders, RotateCcw, Cpu, ChevronRight } from "lucide-react";

interface SandboxSectionProps {
  handleViewChange: (view: "home" | "about" | "sandbox" | "portfolio" | "services" | "contact") => void;
}

export default function SandboxSection({ handleViewChange }: SandboxSectionProps) {
  // Custom 3D sandbox state
  const [sandboxModel, setSandboxModel] = useState<"cube" | "ring" | "pyramid">("cube");
  const [sandboxMaterial, setSandboxMaterial] = useState<"matte" | "metallic" | "glass">("metallic");
  const [sandboxColor, setSandboxColor] = useState<string>("#E85C1A"); // default brand orange
  const [sandboxRotX, setSandboxRotX] = useState<number>(20);
  const [sandboxRotY, setSandboxRotY] = useState<number>(-35);
  const [sandboxRotZ, setSandboxRotZ] = useState<number>(0);
  const [sandboxWireframe, setSandboxWireframe] = useState<boolean>(false);
  const [isDraggingSandbox, setIsDraggingSandbox] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleSandboxMouseDown = (e: React.MouseEvent) => {
    setIsDraggingSandbox(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleSandboxMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingSandbox) return;
    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;
    setSandboxRotY((prev) => prev + deltaX * 0.5);
    setSandboxRotX((prev) => prev - deltaY * 0.5);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleSandboxMouseUpOrLeave = () => {
    setIsDraggingSandbox(false);
  };

  const handleResetSandbox = () => {
    setSandboxRotX(20);
    setSandboxRotY(-35);
    setSandboxRotZ(0);
    setSandboxColor("#E85C1A");
    setSandboxMaterial("metallic");
    setSandboxModel("cube");
    setSandboxWireframe(false);
  };

  return (
    <div className="w-full">
      {/* ── INTERACTIVE 3D DESIGN PLAYGROUND (SANDBOX) ── */}
      <section id="sandbox" className="py-24 px-6 bg-black border-b border-border-card">
        <div className="w-full">
          
          <div className="mb-12 text-center">
            <span className="text-orange-brand text-[10px] font-mono uppercase tracking-[0.3em] inline-block mb-3">
              LIVE INTERACTIVE PLAYGROUND
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white">
              The 3D Object Sandbox
            </h2>
            <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
              Test render materials, colors, and geometries directly inside of this active 3D physical workspace mock. Use your mouse to click and drag the viewport!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
            
            {/* Control Panel Panel (Col-span-4) */}
            <div className="lg:col-span-4 bg-card-bg border border-border-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border-card/60">
                  <Sliders className="w-4 h-4 text-orange-brand" />
                  <span className="font-display font-extrabold text-sm text-white uppercase tracking-wider">
                    Render Engines Settings
                  </span>
                </div>

                {/* 1. Geometry Form Selection */}
                <div className="mb-6">
                  <label className="block text-[10px] font-mono uppercase text-gray-400 mb-2.5">
                    1. Geometry Structure
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(["cube", "ring", "pyramid"] as const).map((model) => (
                      <button
                        key={model}
                        onClick={() => setSandboxModel(model)}
                        className={`py-2 text-xs font-mono uppercase tracking-wider transition-all border cursor-pointer ${
                          sandboxModel === model
                            ? "border-orange-brand bg-orange-brand text-white"
                            : "border-border-card hover:bg-border-card/40 text-gray-400"
                        }`}
                      >
                        {model}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Shading shader select */}
                <div className="mb-6">
                  <label className="block text-[10px] font-mono uppercase text-gray-400 mb-2.5">
                    2. Surface Material
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(["matte", "metallic", "glass"] as const).map((mat) => (
                      <button
                        key={mat}
                        onClick={() => setSandboxMaterial(mat)}
                        className={`py-2 text-xs font-mono uppercase tracking-wider transition-all border cursor-pointer ${
                          sandboxMaterial === mat
                            ? "border-orange-brand bg-orange-brand/10 text-orange-brand"
                            : "border-border-card hover:bg-border-card/40 text-gray-400"
                        }`}
                      >
                        {mat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Surface mesh color palette */}
                <div className="mb-6">
                  <label className="block text-[10px] font-mono uppercase text-gray-400 mb-2.5">
                    3. Core Light Dye
                  </label>
                  <div className="flex gap-2.5">
                    {[
                      { code: "#E85C1A", name: "Uganda Sunset" },
                      { code: "#00F0FF", name: "Neon Cyan" },
                      { code: "#22C55E", name: "Eden Mint" },
                      { code: "#ECC94B", name: "Gold Dust" },
                      { code: "#FFFFFF", name: "Frosted" }
                    ].map((col) => (
                      <button
                        key={col.code}
                        onClick={() => setSandboxColor(col.code)}
                        className="w-8 h-8 rounded-full border border-white/20 relative transition-transform hover:scale-110 active:scale-90 flex items-center justify-center shadow-md cursor-pointer"
                        style={{ backgroundColor: col.code }}
                        title={col.name}
                      >
                        {sandboxColor === col.code && (
                          <div className="w-2.5 h-2.5 bg-black rounded-full shadow-inner animate-pulse" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Wireframe mode toggle */}
                <div className="mb-6 flex justify-between items-center bg-black/40 p-3 border border-border-card/60">
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Wireframe Overlay</span>
                    <span className="text-[10px] font-mono text-gray-500">Show meshes structure</span>
                  </div>
                  <button
                    onClick={() => setSandboxWireframe(!sandboxWireframe)}
                    className={`w-12 h-6 rounded-full p-0.5 transition-all outline-none cursor-pointer ${
                      sandboxWireframe ? "bg-orange-brand" : "bg-zinc-800"
                    }`}
                  >
                    <div className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ${
                      sandboxWireframe ? "translate-x-6" : "translate-x-0"
                    }`} />
                  </button>
                </div>

                {/* 5. Direct rotational degree inputs */}
                <div className="space-y-3 text-left">
                  <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Euler Rotation (Degrees)</h4>
                  <div>
                    <div className="flex justify-between font-mono text-[9px] text-gray-400 mb-1">
                      <span>PITCH (X): {Math.round(sandboxRotX)}°</span>
                    </div>
                    <input 
                      type="range" 
                      min="-180" 
                      max="180" 
                      value={sandboxRotX} 
                      onChange={(e) => setSandboxRotX(Number(e.target.value))} 
                      className="w-full accent-orange-brand h-1.5 bg-black rounded-lg cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between font-mono text-[9px] text-gray-400 mb-1">
                      <span>YAW (Y): {Math.round(sandboxRotY)}°</span>
                    </div>
                    <input 
                      type="range" 
                      min="-180" 
                      max="180" 
                      value={sandboxRotY} 
                      onChange={(e) => setSandboxRotY(Number(e.target.value))} 
                      className="w-full accent-orange-brand h-1.5 bg-black rounded-lg cursor-pointer"
                    />
                  </div>
                </div>

              </div>

              <div className="pt-6 border-t border-border-card/50 flex gap-4 mt-6">
                <button
                  onClick={handleResetSandbox}
                  className="flex items-center gap-1.5 px-3 py-2 border border-border-card/85 text-xs text-gray-400 hover:text-white hover:border-orange-brand transition-colors uppercase font-mono tracking-wider w-full justify-center cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset View
                </button>
              </div>

            </div>

            {/* 3D Render viewport Window (Col-span-8) */}
            <div className="lg:col-span-8 relative border border-border-card bg-zinc-950/80 overflow-hidden flex flex-col justify-between p-6">
              
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black pointer-events-none" />
              
              {/* Top HUD */}
              <div className="relative flex justify-between items-start z-10 pointer-events-none select-none">
                <div className="flex flex-col font-mono text-[10px] text-gray-500 gap-1 text-left">
                  <span className="flex items-center gap-1"><Cpu className="w-3 h-3 text-orange-brand" /> CAMERA: Cinematic Orbit [0, 0, 15]</span>
                  <span>GEOMETRY ID: {sandboxModel.toUpperCase()} // MAT: {sandboxMaterial.toUpperCase()}</span>
                </div>
                <div className="px-2 py-0.5 bg-black border border-border-card/90 text-gray-400 text-[9px] font-mono rounded tracking-widest animate-pulse">
                  ● PIPELINE ACTIVE
                </div>
              </div>

              {/* Central HTML 3D container */}
              <div 
                className="w-full aspect-[16/10] my-8 flex items-center justify-center cursor-grab active:cursor-grabbing relative"
                onMouseDown={handleSandboxMouseDown}
                onMouseMove={handleSandboxMouseMove}
                onMouseUp={handleSandboxMouseUpOrLeave}
                onMouseLeave={handleSandboxMouseUpOrLeave}
                style={{ perspective: "1000px" }}
              >
                
                {/* Visual grid sheet background */}
                <div className="absolute inset-0 border border-white/[0.02] bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 select-none pointer-events-none" />

                {/* Floating Particle Orbits for aesthetics */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-48 h-48 border border-white/5 rounded-full absolute animate-spin" style={{ animationDuration: "12s" }} />
                  <div className="w-72 h-72 border border-white/[0.02] rounded-full absolute animate-spin" style={{ animationDuration: "25s" }} />
                  {/* Glowing core spot behind the geometries */}
                  <div 
                    className="w-32 h-32 rounded-full blur-[80px] absolute transition-colors duration-500"
                    style={{ backgroundColor: `${sandboxColor}1c` }}
                  />
                </div>

                {/* 3D Node rendering based on parameters */}
                <div 
                  className="w-48 h-48 flex items-center justify-center relative transition-transform duration-100 ease-out" 
                  style={{ 
                    transformStyle: "preserve-3d",
                    transform: `rotateX(${sandboxRotX}deg) rotateY(${sandboxRotY}deg) rotateZ(${sandboxRotZ}deg)`
                  }}
                >
                  
                  {/* A: DETAILED CUBE CONTAINER */}
                  {sandboxModel === "cube" && (
                    <div className="w-32 h-32 relative" style={{ transformStyle: "preserve-3d" }}>
                      
                      {/* Cube Face Elements */}
                      {/* Front */}
                      <div 
                        className={`absolute inset-0 border transition-all duration-300 ${
                          sandboxWireframe ? "border-solid border-2" : ""
                        }`}
                        style={{ 
                          transform: "translateZ(64px)",
                          backgroundColor: sandboxWireframe ? "transparent" : (sandboxMaterial === "glass" ? `${sandboxColor}30` : sandboxMaterial === "metallic" ? sandboxColor : "#1E1E1E"),
                          borderColor: sandboxColor,
                          boxShadow: sandboxWireframe ? `inset 0 0 20px ${sandboxColor}40` : "none",
                          backdropFilter: sandboxMaterial === "glass" ? "blur(4px)" : "none",
                          opacity: sandboxMaterial === "glass" ? 0.7 : sandboxWireframe ? 0.8 : 0.95
                        }}
                      />
                      {/* Back */}
                      <div 
                        className="absolute inset-0 border transition-all"
                        style={{ 
                          transform: "rotateY(180deg) translateZ(64px)",
                          backgroundColor: sandboxWireframe ? "transparent" : (sandboxMaterial === "glass" ? `${sandboxColor}20` : sandboxMaterial === "metallic" ? sandboxColor : "#1A1A1A"),
                          borderColor: sandboxColor,
                          boxShadow: sandboxWireframe ? `inset 0 0 20px ${sandboxColor}30` : "none",
                          opacity: sandboxMaterial === "glass" ? 0.6 : sandboxWireframe ? 0.8 : 0.95
                        }}
                      />
                      {/* Left */}
                      <div 
                        className="absolute inset-0 border transition-all"
                        style={{ 
                          transform: "rotateY(-90deg) translateZ(64px)",
                          backgroundColor: sandboxWireframe ? "transparent" : (sandboxMaterial === "glass" ? `${sandboxColor}20` : sandboxMaterial === "metallic" ? sandboxColor : "#252525"),
                          borderColor: sandboxColor,
                          boxShadow: sandboxWireframe ? `inset 0 0 20px ${sandboxColor}30` : "none",
                          opacity: sandboxMaterial === "glass" ? 0.65 : sandboxWireframe ? 0.8 : 0.95
                        }}
                      />
                      {/* Right */}
                      <div 
                        className="absolute inset-0 border transition-all"
                        style={{ 
                          transform: "rotateY(90deg) translateZ(64px)",
                          backgroundColor: sandboxWireframe ? "transparent" : (sandboxMaterial === "glass" ? `${sandboxColor}25` : sandboxMaterial === "metallic" ? sandboxColor : "#2C2C2C"),
                          borderColor: sandboxColor,
                          boxShadow: sandboxWireframe ? `inset 0 0 20px ${sandboxColor}30` : "none",
                          opacity: sandboxMaterial === "glass" ? 0.65 : sandboxWireframe ? 0.8 : 0.95
                        }}
                      />
                      {/* Top */}
                      <div 
                        className="absolute inset-0 border transition-all"
                        style={{ 
                          transform: "rotateX(90deg) translateZ(64px)",
                          backgroundColor: sandboxWireframe ? "transparent" : (sandboxMaterial === "glass" ? `${sandboxColor}40` : sandboxMaterial === "metallic" ? sandboxColor : "#353535"),
                          borderColor: sandboxColor,
                          boxShadow: sandboxWireframe ? `inset 0 0 20px ${sandboxColor}30` : "none",
                          opacity: sandboxMaterial === "glass" ? 0.72 : sandboxWireframe ? 0.8 : 0.95
                        }}
                      />
                      {/* Bottom */}
                      <div 
                        className="absolute inset-0 border transition-all"
                        style={{ 
                          transform: "rotateX(-90deg) translateZ(64px)",
                          backgroundColor: sandboxWireframe ? "transparent" : (sandboxMaterial === "glass" ? `${sandboxColor}15` : sandboxMaterial === "metallic" ? sandboxColor : "#151515"),
                          borderColor: sandboxColor,
                          boxShadow: sandboxWireframe ? `inset 0 0 20px ${sandboxColor}30` : "none",
                          opacity: sandboxMaterial === "glass" ? 0.55 : sandboxWireframe ? 0.8 : 0.95
                        }}
                      />
                    </div>
                  )}

                  {/* B: LAYERED RING GEOMETRY */}
                  {sandboxModel === "ring" && (
                    <div className="w-40 h-40 relative flex items-center justify-center animate-pulse" style={{ transformStyle: "preserve-3d" }}>
                      {[0, 15, 30, 45].map((angle, idx) => (
                        <div
                          key={idx}
                          className="absolute w-32 h-32 border-2 rounded-full transition-all"
                          style={{
                            borderColor: sandboxColor,
                            transform: `rotateY(${angle}deg)`,
                            backgroundColor: sandboxWireframe ? "transparent" : (sandboxMaterial === "glass" ? `${sandboxColor}08` : sandboxMaterial === "metallic" ? `${sandboxColor}20` : "#1E1E1E15"),
                            boxShadow: `0 0 15px ${sandboxColor}25`,
                            opacity: 0.85
                          }}
                        />
                      ))}
                      {/* Central small solid core sphere inside the rings */}
                      <div 
                        className="w-10 h-10 rounded-full border border-solid transition-colors duration-300"
                        style={{ 
                          transform: "translateZ(1px)",
                          backgroundColor: sandboxWireframe ? "transparent" : sandboxColor,
                          borderColor: sandboxColor,
                          opacity: sandboxMaterial === "glass" ? 0.7 : 0.9,
                          boxShadow: `0 0 20px ${sandboxColor}`
                        }}
                      />
                    </div>
                  )}

                  {/* C: DYNAMIC LIGHT PYRAMID */}
                  {sandboxModel === "pyramid" && (
                    <div className="w-32 h-32 relative" style={{ transformStyle: "preserve-3d" }}>
                      
                      {/* Base facing bottom */}
                      <div 
                        className="absolute w-32 h-32 border transition-all"
                        style={{
                          transform: "rotateX(-90deg) translateZ(64px)",
                          backgroundColor: sandboxWireframe ? "transparent" : (sandboxMaterial === "glass" ? `${sandboxColor}25` : sandboxColor),
                          borderColor: sandboxColor,
                          opacity: 0.8
                        }}
                      />
                      
                      {/* Slanted triangular faces */}
                      {/* Front face */}
                      <div 
                        className="absolute w-0 h-0 transition-all"
                        style={{
                          borderLeft: "64px solid transparent",
                          borderRight: "64px solid transparent",
                          borderBottom: `110px solid ${sandboxWireframe ? "transparent" : sandboxColor}`,
                          transform: "rotateX(30deg) translateZ(42px)",
                          transformOrigin: "bottom center",
                          opacity: sandboxMaterial === "glass" ? 0.6 : 0.9,
                          filter: sandboxWireframe ? `drop-shadow(0 0 2px ${sandboxColor})` : "none"
                        }}
                      >
                        {/* Wireframe outlines when enabled */}
                        {sandboxWireframe && (
                          <div className="w-32 h-28 border-l border-r absolute bottom-0 left-[-64px]" style={{ borderColor: sandboxColor }} />
                        )}
                      </div>

                      {/* Back face */}
                      <div 
                        className="absolute w-0 h-0 transition-all"
                        style={{
                          borderLeft: "64px solid transparent",
                          borderRight: "64px solid transparent",
                          borderBottom: `110px solid ${sandboxWireframe ? "transparent" : sandboxColor}`,
                          transform: "rotateY(180deg) rotateX(30deg) translateZ(42px)",
                          transformOrigin: "bottom center",
                          opacity: sandboxMaterial === "glass" ? 0.55 : 0.9,
                          filter: sandboxWireframe ? `drop-shadow(0 0 2px ${sandboxColor})` : "none"
                        }}
                      />

                      {/* Left face */}
                      <div 
                        className="absolute w-0 h-0 transition-all"
                        style={{
                          borderLeft: "64px solid transparent",
                          borderRight: "64px solid transparent",
                          borderBottom: `110px solid ${sandboxWireframe ? "transparent" : sandboxColor}`,
                          transform: "rotateY(-90deg) rotateX(30deg) translateZ(42px)",
                          transformOrigin: "bottom center",
                          opacity: sandboxMaterial === "glass" ? 0.65 : 0.9,
                          filter: sandboxWireframe ? `drop-shadow(0 0 2px ${sandboxColor})` : "none"
                        }}
                      />

                      {/* Right face */}
                      <div 
                        className="absolute w-0 h-0 transition-all"
                        style={{
                          borderLeft: "64px solid transparent",
                          borderRight: "64px solid transparent",
                          borderBottom: `110px solid ${sandboxWireframe ? "transparent" : sandboxColor}`,
                          transform: "rotateY(90deg) rotateX(30deg) translateZ(42px)",
                          transformOrigin: "bottom center",
                          opacity: sandboxMaterial === "glass" ? 0.65 : 0.9,
                          filter: sandboxWireframe ? `drop-shadow(0 0 2px ${sandboxColor})` : "none"
                        }}
                      />
                    </div>
                  )}

                </div>

              </div>

              {/* Viewport footer description */}
              <div className="relative flex justify-between items-center z-10 select-none border-t border-border-card/60 pt-4 text-left">
                <p className="font-mono text-[10px] text-gray-400">
                  DRAG VIEWPORT IN ANY AXIS OR SLIDE CONTROLLERS AS TEST BED
                </p>
                <div className="flex gap-2 text-[10px] font-mono text-gray-500">
                  <span>RES: 4K</span>
                  <span>FPS: 60</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Navigation transition line */}
      <div className="py-16 px-6 flex flex-col items-center justify-center bg-zinc-950 gap-4 text-center border-b border-border-card">
        <p className="font-mono text-zinc-500 text-[10px] tracking-widest uppercase">Finished tweaking? See finished renders:</p>
        <button 
          onClick={() => handleViewChange("portfolio")} 
          className="flex items-center gap-2 px-6 py-3.5 bg-orange-brand hover:bg-orange-brand/90 text-white font-display text-xs font-bold uppercase tracking-widest hover:scale-[1.03] active:scale-[0.97] transition-all cursor-pointer shadow-lg shadow-orange-brand/10"
        >
          View Portfolio <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
