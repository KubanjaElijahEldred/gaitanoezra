import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  ExternalLink,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Sun,
  X,
} from "lucide-react";
import { ALL_BRAND_LINKS, PROFILE_IMAGE, SERVICES, WORKED_WITH } from "./data";
import { useTheme } from "./components/ThemeProvider";
import SplashScreen from "./components/SplashScreen";
import logoImg from "./assets/images/logo.png";

type Page = "profile" | "services";

export function EzraCollectiveLogo({ className = "h-10" }: { className?: string }) {
  return (
    <img
      src={logoImg}
      alt="Ezra Collective"
      className={`object-contain select-none ${className}`}
    />
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="grid h-9 w-9 place-items-center border border-border-card text-gray-400 hover:border-orange-brand/50 hover:text-orange-brand transition-colors cursor-pointer"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
          >
            <Sun className="h-4 w-4" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -45 }}
          >
            <Moon className="h-4 w-4" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

const contactLinks = [
  {
    label: "WhatsApp",
    value: "+256 709 449308",
    href: "https://wa.me/256709449308",
    icon: MessageCircle,
  },
  {
    label: "Email",
    value: "geotanoezra01@gmail.com",
    href: "mailto:geotanoezra01@gmail.com",
    icon: Mail,
  },
  {
    label: "Instagram",
    value: "@geatano_ezra",
    href: "https://www.instagram.com/geatano_ezra?igsh=MzhuNm9yYWRicHMz&utm_source=qr",
    icon: Instagram,
  },
  {
    label: "Call",
    value: "+256 761 768 144",
    href: "tel:+256761768144",
    icon: Phone,
  },
];

export default function App() {
  const [page, setPage] = useState<Page>("profile");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const goToPage = (nextPage: Page) => {
    setPage(nextPage);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence>{showSplash && <SplashScreen />}</AnimatePresence>

      <div className="min-h-screen bg-dark-bg text-gray-200 selection:bg-orange-brand selection:text-white font-sans antialiased">
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-border-card bg-dark-bg/90 backdrop-blur-xl">
          <div className="flex h-20 w-full items-center justify-between px-5 lg:px-10">
            <button
              onClick={() => goToPage("profile")}
              className="flex items-center gap-3 cursor-pointer"
              aria-label="Open profile page"
            >
              <EzraCollectiveLogo className="h-12 w-auto" />
            </button>

            <div className="hidden items-center gap-3 md:flex">
              {[
                ["profile", "Profile"],
                ["services", "Services"],
              ].map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => goToPage(key as Page)}
                  className={`px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] transition-colors cursor-pointer ${
                    page === key
                      ? "bg-orange-brand text-white"
                      : "border border-border-card text-gray-400 hover:border-orange-brand/50 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
              <a
                href="https://wa.me/256709449308"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-black font-display text-xs font-bold uppercase tracking-widest hover:bg-orange-brand hover:text-white transition-colors"
              >
                Work with me
              </a>
              <ThemeToggle />
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen((open) => !open)}
                className="grid h-9 w-9 place-items-center border border-border-card text-gray-300 cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="fixed inset-x-0 top-20 z-40 border-b border-border-card bg-dark-bg p-5 md:hidden"
            >
              <div className="grid gap-3">
                <button onClick={() => goToPage("profile")} className="border border-border-card px-4 py-3 text-left font-display font-bold text-white cursor-pointer">
                  Profile
                </button>
                <button onClick={() => goToPage("services")} className="border border-border-card px-4 py-3 text-left font-display font-bold text-white cursor-pointer">
                  Services & Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {page === "profile" ? <ProfilePage goToPage={goToPage} /> : <ServicesPage />}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="border-t border-border-card bg-black px-5 py-8">
          <div className="flex w-full flex-col gap-5 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
            <button onClick={() => goToPage("profile")} className="flex items-center gap-4 text-left cursor-pointer">
              <EzraCollectiveLogo className="h-10 w-auto" />
              <span className="font-mono">© 2026 Gaitano Ezra. Kampala, Uganda.</span>
            </button>
            <div className="flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-widest">
              <a href="mailto:geotanoezra01@gmail.com" className="hover:text-orange-brand">Email</a>
              <a href="tel:+256761768144" className="hover:text-orange-brand">Call</a>
              <a href="https://www.instagram.com/geatano_ezra?igsh=MzhuNm9yYWRicHMz&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-orange-brand">
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function ProfilePage({ goToPage }: { goToPage: (page: Page) => void }) {
  const [showAllBrands, setShowAllBrands] = useState(false);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border-card bg-black px-5 py-8 sm:py-10 lg:px-10">
        <div
          className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url(/assets/images/hero-abstract-bg.png)" }}
        />
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-orange-brand/15 to-transparent pointer-events-none" />

        <div className="relative grid w-full gap-10 [grid-template-areas:'profile'_'intro'_'brands'] lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_520px] lg:[grid-template-areas:'intro_profile'_'intro_brands'] lg:items-stretch">
          <div className="[grid-area:intro] flex flex-col border border-border-card bg-dark-bg/80 p-5 sm:p-8 lg:p-10">
            <div>
              <EzraCollectiveLogo className="mb-6 h-20 w-auto sm:h-28 lg:h-32" />
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.34em] text-orange-brand">
                About
              </p>
              <h1 className="max-w-5xl font-display text-4xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                Creative direction meets <span className="text-orange-brand">real results.</span>
              </h1>
            </div>

            <div>
              <div className="mt-8 grid max-w-2xl grid-cols-3 gap-4 border-y border-border-card py-6">
                {[
                  ["5+", "Years creating"],
                  ["10+", "Brands served"],
                  ["6", "Core services"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="font-display text-4xl font-black text-white lg:text-5xl">
                      {value.includes("+") ? value.replace("+", "") : value}
                      {value.includes("+") && <span className="text-orange-brand">+</span>}
                    </p>
                    <p className="mt-1 max-w-24 font-mono text-[10px] uppercase tracking-widest text-gray-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-8 text-base leading-8 text-gray-400 xl:grid-cols-[1fr_0.9fr]">
                <div className="space-y-5">
                  <p>
                    I am <strong className="text-white">Gaitano Ezra</strong>, a digital creator based in Kampala. I work at the intersection of content strategy, visual storytelling, and brand positioning.
                  </p>
                  <p>
                    At <strong className="text-white">Koko Digital Studio</strong>, I am one of the creative directors, leading video production and platform management for hospitality, lifestyle, sports, events, and beverage brands across Uganda.
                  </p>
                </div>
                <p className="border-l border-orange-brand/60 pl-5 text-gray-300">
                  My work is simple: build a clear brand voice that turns attention into customers and customers into loyal communities.
                </p>
              </div>

              <div className="mt-8 overflow-hidden border border-border-card">
                <img
                  src="/assets/images/content-creator-workspace.jpg"
                  alt="Video editing workspace"
                  className="h-56 w-full object-cover sm:h-72 lg:h-80"
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => goToPage("services")} className="bg-orange-brand px-5 py-3 font-display text-xs font-bold uppercase tracking-widest text-white cursor-pointer">
                  View services
                </button>
                <a href="https://wa.me/256709449308" target="_blank" rel="noopener noreferrer" className="border border-border-card bg-black/40 px-5 py-3 font-display text-xs font-bold uppercase tracking-widest text-gray-300 hover:border-orange-brand hover:text-white">
                  Start a project
                </a>
              </div>
            </div>
          </div>

          <div className="[grid-area:profile] relative min-h-[520px] overflow-hidden border border-border-card bg-card-bg">
              <img
                src={PROFILE_IMAGE}
                alt="Gaitano Ezra"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/65 p-5 backdrop-blur">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-orange-brand">Digital creator</p>
                <h2 className="mt-2 font-display text-3xl font-black text-white">Gaitano Ezra</h2>
                <p className="mt-2 text-sm text-gray-400">Kampala, Uganda</p>
              </div>
            </div>

            <div className="[grid-area:brands] border border-border-card bg-card-bg p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-orange-brand">
                Brands I have worked with
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {WORKED_WITH.slice(0, 4).map((brand) => (
                  <a
                    key={brand.name}
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid overflow-hidden border border-border-card bg-black transition-colors hover:border-orange-brand/70"
                  >
                    <span className="block h-36 overflow-hidden bg-zinc-950">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </span>
                    <span className="block p-4">
                      <span className="mb-2 inline-flex w-fit items-center gap-1 border border-orange-brand/50 bg-black/55 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-orange-brand backdrop-blur">
                        View page <ExternalLink className="h-3 w-3" />
                      </span>
                      <span className="block font-display text-xl font-black text-white">{brand.name}</span>
                      <span className="mt-1 block text-xs text-gray-300">{brand.type}</span>
                      <span className="mt-3 line-clamp-2 block text-xs leading-5 text-gray-300">{brand.meaning}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
        </div>
      </section>

      <section className="border-b border-border-card bg-black px-5 py-16 lg:px-10">
        <div className="w-full">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.34em] text-orange-brand">
                Places I have worked from
              </p>
              <h2 className="font-display text-3xl font-black text-white sm:text-5xl">
                Work that stands out.
              </h2>
            </div>
            <button onClick={() => goToPage("services")} className="inline-flex items-center gap-2 text-left font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-orange-brand cursor-pointer">
              See full services <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {WORKED_WITH.map((brand, index) => (
              <a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group overflow-hidden border border-border-card bg-card-bg ${
                  index === 0 ? "xl:col-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden bg-zinc-950 ${index === 0 ? "h-[520px]" : "h-80"}`}>
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                    <span className="border border-white/15 bg-black/55 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-gray-200 backdrop-blur">
                      0{index + 1}
                    </span>
                    <span className="grid h-9 w-9 place-items-center bg-orange-brand text-white opacity-90 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.28em] text-orange-brand">
                    {brand.type}
                  </p>
                  <h3 className="font-display text-2xl font-black leading-tight text-white">
                    {brand.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-gray-300">
                    {brand.meaning}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 border border-orange-brand/50 bg-black/55 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-orange-brand backdrop-blur transition-colors group-hover:bg-orange-brand group-hover:text-white">
                    Open Instagram <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 border-t border-border-card pt-8">
            <button
              onClick={() => setShowAllBrands((v) => !v)}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-orange-brand transition-colors cursor-pointer"
            >
              {showAllBrands ? "Show less" : "See more brands"}
              <ArrowUpRight className={`h-4 w-4 transition-transform ${showAllBrands ? "rotate-180" : ""}`} />
            </button>

            {showAllBrands && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.2 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                {ALL_BRAND_LINKS.map((brand) => (
                  <a
                    key={brand.name}
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border-card bg-card-bg px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-gray-400 transition-colors hover:border-orange-brand hover:text-orange-brand"
                  >
                    {brand.name}
                  </a>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function ServicesPage() {
  return (
    <div>
      <section className="border-b border-border-card px-5 py-16 sm:py-20 lg:px-10">
        <div className="w-full">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.34em] text-orange-brand">
            What I do
          </p>
          <h1 className="max-w-5xl font-display text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Digital services for brands that need clear content.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400">
            I keep the process simple: understand the brand, plan the message, create the content, post with consistency, and track what is working.
          </p>

          <div className="mt-12 grid border border-border-card bg-border-card md:grid-cols-2 xl:grid-cols-6">
            {SERVICES.map((service) => (
              <article key={service.id} className="bg-card-bg p-6 text-left">
                <p className="font-mono text-[11px] font-bold text-orange-brand">{service.number}</p>
                <h2 className="mt-8 font-display text-2xl font-bold text-white">{service.title}</h2>
                <p className="mt-4 text-sm leading-7 text-gray-400">{service.description}</p>
                <p className="mt-6 inline-block border border-orange-brand/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-orange-brand">
                  {service.tag}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-16 lg:px-10">
        <div className="grid w-full gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.34em] text-orange-brand">
              Contact
            </p>
            <h2 className="font-display text-4xl font-black text-white sm:text-5xl">
              Let us build the next campaign.
            </h2>
            <p className="mt-5 text-sm leading-7 text-gray-400">
              Based in Kampala, available for social media management, content direction, video editing, copywriting, and Meta ads support.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group border border-border-card bg-card-bg p-5 hover:border-orange-brand/60"
              >
                <div className="mb-8 flex items-center justify-between">
                  <method.icon className="h-5 w-5 text-orange-brand" />
                  <ArrowUpRight className="h-4 w-4 text-gray-600 group-hover:text-orange-brand" />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">{method.label}</p>
                <p className="mt-2 font-display text-base font-bold text-white">{method.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
