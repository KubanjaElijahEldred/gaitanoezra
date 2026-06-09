import React from "react";
import { motion } from "motion/react";
import { Phone, Mail, Instagram, MessageCircle, ExternalLink, MapPin, ArrowUpRight } from "lucide-react";

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "Email",
    value: "geotanoezra01@gmail.com",
    href: "mailto:geotanoezra01@gmail.com",
    color: "#E85C1A",
    description: "Send a direct message",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+256 709 449308",
    href: "https://wa.me/256709449308",
    color: "#25D366",
    description: "Chat on WhatsApp",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+256 761 768 144",
    href: "tel:+256761768144",
    color: "#3B82F6",
    description: "Call directly",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@geatano_ezra",
    href: "https://www.instagram.com/geatano_ezra?igsh=MzhuNm9yYWRicHMz&utm_source=qr",
    color: "#E4405F",
    description: "Follow the work",
  },
];

export default function ContactSection() {
  return (
    <div className="w-full">
      {/* ── CONTACT HERO ── */}
      <section id="contact" className="py-24 px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column — Heading & Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-orange-brand text-[10px] font-mono uppercase tracking-[0.3em] block mb-3">
                GET IN TOUCH
              </span>
              <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white leading-[0.95] tracking-tight">
                Let's make <br />
                it <span className="text-orange-brand">unmissable</span>.
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-sm leading-relaxed max-w-md font-sans"
            >
              Ready to elevate your brand with high-fidelity 3D renders and strategic digital design?
              Reach out through any channel below — I respond fast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 text-gray-500 font-mono text-xs"
            >
              <MapPin className="w-4 h-4 text-orange-brand" />
              <span>Kampala, Uganda, East Africa</span>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-border-card"
            >
              <div>
                <p className="font-display font-black text-2xl text-white">12h</p>
                <p className="text-[10px] font-mono uppercase text-gray-500 mt-1">Avg. Response</p>
              </div>
              <div>
                <p className="font-display font-black text-2xl text-white">40+</p>
                <p className="text-[10px] font-mono uppercase text-gray-500 mt-1">Brands Served</p>
              </div>
              <div>
                <p className="font-display font-black text-2xl text-white">100%</p>
                <p className="text-[10px] font-mono uppercase text-gray-500 mt-1">Commitment</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Contact Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONTACT_METHODS.map((method, idx) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 * idx }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative bg-card-bg border border-border-card p-6 flex flex-col gap-4 hover:border-orange-brand/40 transition-colors overflow-hidden"
                >
                  {/* Subtle gradient glow on hover */}
                  <div
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl pointer-events-none"
                    style={{ backgroundColor: method.color }}
                  />

                  <div className="flex items-start justify-between">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center border border-border-card group-hover:border-orange-brand/30 transition-colors"
                      style={{ backgroundColor: `${method.color}10` }}
                    >
                      <method.icon className="w-5 h-5" style={{ color: method.color }} />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-orange-brand transition-colors" />
                  </div>

                  <div>
                    <p className="text-[10px] font-mono uppercase text-gray-500 tracking-widest mb-1">
                      {method.description}
                    </p>
                    <p className="text-white font-display font-bold text-base group-hover:text-orange-brand transition-colors">
                      {method.value}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border-card/50 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                      {method.label}
                    </span>
                    <ExternalLink className="w-3 h-3 text-gray-600 group-hover:text-orange-brand transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Bottom CTA banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 bg-orange-brand/5 border border-orange-brand/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div>
                <h4 className="text-white font-display font-bold text-sm tracking-wide">
                  Prefer a scheduled call?
                </h4>
                <p className="text-gray-400 text-xs mt-1">
                  I am available for video consultations via Google Meet or Zoom.
                </p>
              </div>
              <a
                href="mailto:geotanoezra01@gmail.com?subject=Schedule%20a%20Call%20-%20Project%20Discussion"
                className="px-5 py-2.5 bg-orange-brand hover:bg-orange-brand/90 text-white font-display font-bold text-xs tracking-widest uppercase transition-all hover:scale-[1.03] active:scale-[0.97] cursor-pointer whitespace-nowrap"
              >
                Book a Call
              </a>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
