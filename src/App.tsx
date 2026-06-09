import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Menu, X, ExternalLink, Sun, Moon } from "lucide-react";
import { ALL_BRANDS, PROJECTS } from "./data";
import { Project } from "./types";
import { useTheme } from "./components/ThemeProvider";
import SplashScreen from "./components/SplashScreen";
import logoImg from "./assets/images/logo.png";

// Import modular pages/subcomponents
import HeroSection from "./components/HeroSection";
import FeaturedShowcase from "./components/FeaturedShowcase";
import AboutSection from "./components/AboutSection";
import SandboxSection from "./components/SandboxSection";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

// Logo component using the uploaded logo.png
export function EzraCollectiveLogo({ className = "h-10" }: { className?: string }) {
  return (
    <img
      src={logoImg}
      alt="Ezra Collective"
      className={`object-contain select-none cursor-pointer ${className}`}
    />
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-border-card text-gray-400 hover:text-orange-brand hover:border-orange-brand/50 transition-all cursor-pointer focus:outline-none"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-4 h-4" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-4 h-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState<"home" | "about" | "sandbox" | "portfolio" | "services" | "contact">("home");
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleViewChange = (view: "home" | "about" | "sandbox" | "portfolio" | "services" | "contact") => {
    setActiveView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen />}
      </AnimatePresence>

      <div id="root-app" className="min-h-screen bg-dark-bg text-gray-200 selection:bg-orange-brand selection:text-white font-sans antialiased flex flex-col justify-between">
        
        {/* ── HIGH PORT NAVIGATION BAR ── */}
        <nav id="nav-header" className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-orange-brand/30 transition-all shadow-[0_0_50px_rgba(232,92,26,0.15),inset_0_-20px_40px_rgba(232,92,26,0.08)]">
          <div className="w-full px-6 h-20 flex justify-between items-center">
            
            <div onClick={() => handleViewChange("home")} className="flex items-center gap-3 cursor-pointer">
              <EzraCollectiveLogo className="h-14 w-auto" />
              <span className="hidden sm:inline-block px-2 py-0.5 text-[9px] bg-border-card text-gray-400 rounded-full font-mono tracking-wider">
                STUDIO 3D
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => handleViewChange("home")} 
                className={`text-xs font-medium tracking-widest uppercase transition-colors cursor-pointer ${
                  activeView === "home" ? "text-orange-brand" : "text-gray-400 hover:text-orange-brand"
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => handleViewChange("about")} 
                className={`text-xs font-medium tracking-widest uppercase transition-colors cursor-pointer ${
                  activeView === "about" ? "text-orange-brand" : "text-gray-400 hover:text-orange-brand"
                }`}
              >
                About
              </button>
              <button 
                onClick={() => handleViewChange("sandbox")} 
                className={`text-xs font-medium tracking-widest uppercase transition-colors cursor-pointer ${
                  activeView === "sandbox" ? "text-orange-brand" : "text-gray-400 hover:text-orange-brand"
                }`}
              >
                3D Sandbox
              </button>
              <button 
                onClick={() => handleViewChange("portfolio")} 
                className={`text-xs font-medium tracking-widest uppercase transition-colors cursor-pointer ${
                  activeView === "portfolio" ? "text-orange-brand" : "text-gray-400 hover:text-orange-brand"
                }`}
              >
                Portfolio
              </button>
              <button 
                onClick={() => handleViewChange("services")} 
                className={`text-xs font-medium tracking-widest uppercase transition-colors cursor-pointer ${
                  activeView === "services" ? "text-orange-brand" : "text-gray-400 hover:text-orange-brand"
                }`}
              >
                Services
              </button>
              <button 
                onClick={() => handleViewChange("contact")} 
                className="px-4 py-2 bg-orange-brand hover:bg-orange-brand/90 text-white font-display font-bold text-xs tracking-widest uppercase transition-all hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
              >
                Work with me
              </button>
              <ThemeToggle />
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 bg-dark-bg pt-24 px-6 md:hidden flex flex-col gap-6 border-b border-border-card"
            >
              <button onClick={() => handleViewChange("home")} className="text-lg font-display font-bold text-white tracking-wide border-b border-border-card/55 pb-2 text-left cursor-pointer">Home</button>
              <button onClick={() => handleViewChange("about")} className="text-lg font-display font-bold text-white tracking-wide border-b border-border-card/55 pb-2 text-left cursor-pointer">About</button>
              <button onClick={() => handleViewChange("sandbox")} className="text-lg font-display font-bold text-white tracking-wide border-b border-border-card/55 pb-2 text-left cursor-pointer">3D Sandbox</button>
              <button onClick={() => handleViewChange("portfolio")} className="text-lg font-display font-bold text-white tracking-wide border-b border-border-card/55 pb-2 text-left cursor-pointer">Portfolio</button>
              <button onClick={() => handleViewChange("services")} className="text-lg font-display font-bold text-white tracking-wide border-b border-border-card/55 pb-2 text-left flex items-center justify-between cursor-pointer">
                Services <Sparkles className="w-4 h-4 text-orange-brand" />
              </button>
              <button onClick={() => handleViewChange("contact")} className="w-full mt-4 py-3 bg-orange-brand text-white text-center font-display font-bold uppercase text-xs tracking-widest cursor-pointer">
                Work with me
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MAIN VIEW CONTAINER ── */}
        <main className="w-full flex-grow pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full"
            >
              {activeView === "home" && (
                <>
                  <HeroSection handleViewChange={handleViewChange} />
                  
                  {/* ── CLIENT BRANDS SPEEDWAY TICKER ── */}
                  <section id="brands-ticker" className="py-8 bg-black border-b border-border-card/45 overflow-hidden">
                    <div className="w-full px-6">
                      <p className="text-center font-mono text-[10px] tracking-[0.3em] text-gray-650 uppercase mb-4">
                        STRATEGIC BRAND EXPERIENCES DEVELOPED ACROSS UGANDA
                      </p>
                      <div className="flex flex-wrap justify-center gap-2.5">
                        {ALL_BRANDS.map((brand, idx) => (
                          <span 
                            key={idx} 
                            className="px-3.5 py-1.5 bg-card-bg border border-border-card text-gray-400 text-xs font-mono tracking-wider hover:text-white hover:border-orange-brand transition-colors cursor-default"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* ── FEATURED COMPOSE IMAGES EXHIBIT ── */}
                  <FeaturedShowcase setActiveProject={setActiveProject} handleViewChange={handleViewChange} />

                  {/* Minimal elegant CTA transition rail */}
                  <div className="py-16 px-6 flex justify-center bg-dark-bg border-b border-border-card">
                    <div className="flex flex-col sm:flex-row gap-6 items-center text-center">
                      <span className="font-mono text-zinc-500 text-[10px] tracking-widest uppercase">Begin exploring work:</span>
                      <div className="flex flex-wrap justify-center gap-4">
                        <button 
                          onClick={() => handleViewChange("portfolio")} 
                          className="px-5 py-2.5 bg-border-card/40 hover:bg-orange-brand hover:text-white text-gray-300 font-mono text-[10px] tracking-widest uppercase transition-all border border-border-card cursor-pointer"
                        >
                          Selected Renders
                        </button>
                        <button 
                          onClick={() => handleViewChange("about")} 
                          className="px-5 py-2.5 bg-border-card/40 hover:bg-orange-brand hover:text-white text-gray-300 font-mono text-[10px] tracking-widest uppercase transition-all border border-border-card cursor-pointer"
                        >
                          About Ezra
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeView === "about" && (
                <AboutSection handleViewChange={handleViewChange} />
              )}

              {activeView === "sandbox" && (
                <SandboxSection handleViewChange={handleViewChange} />
              )}

              {activeView === "portfolio" && (
                <PortfolioSection handleViewChange={handleViewChange} setActiveProject={setActiveProject} />
              )}

              {activeView === "services" && (
                <ServicesSection handleViewChange={handleViewChange} />
              )}

              {activeView === "contact" && (
                <ContactSection />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* ── FOOTER MARKINGS ── */}
        <footer className="py-12 px-6 border-t border-border-card bg-black w-full">
          <div className="w-full px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs">
            
            <div className="flex items-center gap-6 cursor-pointer" onClick={() => handleViewChange("home")}>
              <EzraCollectiveLogo className="h-14 w-auto" />
              <span className="text-[10px] font-mono whitespace-nowrap">© 2026 Gaitano Ezra. Kampala, Uganda.</span>
            </div>

            <div className="flex gap-6 font-mono text-[10px]">
              <a href="https://www.instagram.com/geatano_ezra?igsh=MzhuNm9yYWRicHMz&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-orange-brand transition-colors flex items-center gap-1 uppercase">
                INSTAGRAM <ExternalLink className="w-3 h-3" />
              </a>
              <a href="mailto:geotanoezra01@gmail.com" className="hover:text-orange-brand transition-colors uppercase">EMAIL</a>
              <a href="tel:+256761768144" className="hover:text-orange-brand transition-colors uppercase">CALL</a>
            </div>

          </div>
        </footer>

        {/* ── PROJECT DETAILS OVERLAY MODAL ── */}
        <AnimatePresence>
          {activeProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
            >
              <motion.div 
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card-bg border border-border-card max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative cursor-default m-4"
              >
                <button 
                  onClick={() => setActiveProject(null)} 
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white border border-border-card/85 bg-black/40 hover:border-orange-brand/50 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="aspect-[16/10] w-full bg-zinc-950 border border-border-card overflow-hidden">
                  <img 
                    src={activeProject.image} 
                    alt={activeProject.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-6 space-y-4 text-left">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <span className="px-2 py-0.5 bg-orange-brand/10 border border-orange-brand/35 text-orange-brand text-[9px] font-mono uppercase tracking-wider rounded">
                        {activeProject.category}
                      </span>
                      <h3 className="text-white font-display font-black text-2xl mt-2">{activeProject.title}</h3>
                    </div>
                    <div className="flex flex-col text-right font-mono text-[10px] text-gray-500 gap-0.5">
                      <span>Year: {activeProject.year}</span>
                      <span>Client: {activeProject.client}</span>
                      <span>Role: {activeProject.role}</span>
                    </div>
                  </div>

                  <p className="text-gray-350 text-sm leading-relaxed font-sans mt-2">
                    {activeProject.longDescription || activeProject.description}
                  </p>

                  <div className="pt-4 border-t border-border-card/60">
                    <h4 className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2.5">Software & Skills Leveraged</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 bg-black text-gray-400 font-mono text-[10px] uppercase border border-border-card/85">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4 gap-3">
                    <button 
                      onClick={() => setActiveProject(null)}
                      className="px-4 py-2 border border-border-card text-gray-400 hover:text-white hover:border-orange-brand transition-colors text-xs font-mono uppercase tracking-wider cursor-pointer"
                    >
                      Go Back
                    </button>
                    <button 
                      onClick={() => {
                        setActiveProject(null);
                        handleViewChange("contact");
                      }} 
                      className="px-5 py-2.5 bg-orange-brand hover:bg-orange-brand/90 text-white text-xs font-display font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform cursor-pointer"
                    >
                      Discuss similar project
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}
