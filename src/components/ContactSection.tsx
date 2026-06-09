import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Phone, Mail, Instagram } from "lucide-react";

export default function ContactSection() {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "3D Art & Product Visualization",
    budget: "$500 - $1,000",
    message: ""
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setFormData({
        name: "",
        email: "",
        service: "3D Art & Product Visualization",
        budget: "$500 - $1,000",
        message: ""
      });
    }, 4500);
  };

  return (
    <div className="w-full">
      {/* ── CONTACT & INQUIRY FORM ── */}
      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-12 xl:col-span-5 text-left">
            <span className="text-orange-brand text-[10px] font-mono uppercase tracking-[0.3em] block mb-3">
              GET IN TOUCH
            </span>
            <h2 className="font-display font-black text-3xl sm:text-6xl text-white leading-none">
              Let's make <br />
              it <span className="text-orange-brand">unmissable</span>.
            </h2>
            <p className="text-gray-400 text-sm mt-6 leading-relaxed max-w-xl font-sans">
              Describe your target product renders or strategic campaign outline, and we'll reply with custom mood concepts and transparent timelines.
            </p>

            <div className="flex flex-col gap-3 mt-10">
              <a href="tel:+256761768144" className="flex items-center gap-3.5 text-gray-300 hover:text-orange-brand transition-colors font-mono text-xs">
                <Phone className="w-4 h-4 text-orange-brand" /> +256 761 768 144
              </a>
              <a href="mailto:geotanoezra01@gmail.com" className="flex items-center gap-3.5 text-gray-300 hover:text-orange-brand transition-colors font-mono text-xs">
                <Mail className="w-4 h-4 text-orange-brand" /> geotanoezra01@gmail.com
              </a>
              <a href="https://instagram.com/geatano_ezra" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 text-gray-300 hover:text-orange-brand transition-colors font-mono text-xs">
                <Instagram className="w-4 h-4 text-orange-brand" /> @geatano_ezra
              </a>
            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-7">
            <div className="bg-card-bg border border-border-card p-6 md:p-8 relative text-left">
              
              <AnimatePresence mode="wait">
                {inquirySubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 text-center space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full border border-orange-brand bg-orange-brand/10 mx-auto flex items-center justify-center text-orange-brand text-xl animate-bounce">
                      ✓
                    </div>
                    <h3 className="text-white font-display font-extrabold text-xl">Inquiry Received and Resolved</h3>
                    <p className="text-gray-400 text-xs max-w-sm mx-auto">
                      Gaitano Ezra is reviewing your concepts. We will ping your mail or phone within 12 standard hours in Kampala.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-mono uppercase text-gray-400 mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="David Kigozi..."
                          className="w-full bg-black border border-border-card px-4 py-3 text-xs text-white focus:outline-none focus:border-orange-brand transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono uppercase text-gray-400 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="david@kigozi.com..."
                          className="w-full bg-black border border-border-card px-4 py-3 text-xs text-white focus:outline-none focus:border-orange-brand transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-mono uppercase text-gray-400 mb-2">
                          Required Capability
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-black border border-border-card px-4 py-3 text-xs text-white focus:outline-none focus:border-orange-brand transition-colors cursor-pointer"
                        >
                          <option>3D Art & Product Visualization</option>
                          <option>Art Direction & Branding</option>
                          <option>Motion & Typographical Posters</option>
                          <option>Full Social Management</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono uppercase text-gray-400 mb-2">
                          Estimated Budget (USD)
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-black border border-border-card px-4 py-3 text-xs text-white focus:outline-none focus:border-orange-brand transition-colors cursor-pointer"
                        >
                          <option>$500 - $1,000</option>
                          <option>$1,000 - $2,500</option>
                          <option>$2,500 - $5,000</option>
                          <option>Custom Enterprise Scope</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase text-gray-400 mb-2">
                        Describe the concept brief and timeline constraints
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="We require a set of high-end 3D bottle renders for our next organic soda launch across Kampala..."
                        className="w-full bg-black border border-border-card px-4 py-3 text-xs text-white focus:outline-none focus:border-orange-brand transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-orange-brand hover:bg-orange-brand/90 text-white font-display font-black tracking-widest text-xs uppercase transition-transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    >
                      SEND BRIEF INQUIRY
                    </button>
                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
