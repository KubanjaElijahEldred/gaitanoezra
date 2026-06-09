import { Project, Service, ClientStory } from "./types";

export const PROFILE_IMAGE = "/assets/images/gaitano_ezra_profile_1781023273890.png";

export const PROJECTS: Project[] = [
  {
    id: "hero-3d-cosmic",
    title: "Cosmic Flow Elements",
    category: "3D Design",
    image: "/assets/images/hero_3d_render_1781023214369.png",
    description: "An exploratory study of fluid organic geometry in 3D, combining high-contrast chrome metallurgy and translucent materials.",
    longDescription: "A fully realized series of 3D organic structural elements that explore the fluidity of shapes under extreme cinematic studio setups. Designed to represent the collision of digital technology and dynamic motion, this project features high-gloss black chrome combined with deep volcanic orange emitters.",
    tags: ["Cinema 4D", "Octane Render", "Fluid Dynamics", "Abstract Art"],
    year: "2026",
    client: "Ezra Creative Lab",
    role: "Lead 3D Artist",
    interactive3D: {
      modelType: "ribbon",
      defaultColor: "#E85C1A"
    }
  },
  {
    id: "branding-glass",
    title: "Monolithic Glass Identity",
    category: "Branding",
    image: "/assets/images/branding_3d_mockup_1781023229075.png",
    description: "Branding collateral and architectural brand identity mockup using photorealistic translucent glass prisms and high-end tech stationery.",
    longDescription: "This premium brand visual showcase explores modern corporate identities through tactile glass elements. By combining premium matte-finished layouts, metallic accents, and high-fashion editorial grid designs, we created an active, living ecosystem for Next-Gen digital platforms.",
    tags: ["Brand Strategy", "KeyShot", "Tactile Mockups", "Material Shaders"],
    year: "2025",
    client: "Grid Club Kampala",
    role: "Art Director",
    interactive3D: {
      modelType: "cube_grid",
      defaultColor: "#1E1E1E"
    }
  },
  {
    id: "typo-sculpt",
    title: "Typographic Metal Sculpture",
    category: "Motion Graphics",
    image: "/assets/images/typography_3d_poster_1781023244187.png",
    description: "Architectural typographic layout rendering, celebrating mechanical lettering styles and high-vibrancy physical material textures.",
    longDescription: "A conceptual typographical artwork focusing on structural lettering. By rendering words as towering architectural blocks in translucent materials and marble, this project raises the brand voice to an immersive, touchable structural landscape.",
    tags: ["3D Typography", "Product Visualization", "Subsurface Scattering", "Blender"],
    year: "2026",
    client: "Kampala Modern Arts",
    role: "Creative Director",
    interactive3D: {
      modelType: "torus",
      defaultColor: "#E85C1A"
    }
  },
  {
    id: "mag-physical",
    title: "Sculptural Editorial Space",
    category: "Editorial Layout",
    image: "/assets/images/editorial_3d_layout_1781023257899.png",
    description: "A gorgeous luxury print magazine mockup where theoretical layouts transition directly into physical 3D fluid structures.",
    longDescription: "Exploring the boundary between the physical and digital page, this experimental design pulls fluid, glossy objects straight out of high-end editorial layouts. Modern typography matches beautifully with organic volumetric meshes for a truly standard-shifting experience.",
    tags: ["InDesign Suite", "Houdini Simulations", "C4D Rendering", "Creative Direction"],
    year: "2025",
    client: "Vulkan Sports & Luxury",
    role: "Editorial Designer",
    interactive3D: {
      modelType: "sphere",
      defaultColor: "#888880"
    }
  }
];

export const SERVICES: Service[] = [
  {
    id: "serv-3d",
    number: "01",
    title: "3D Art & Product Visualization",
    description: "Photorealistic volumetric renders, spatial compositions, glassmorphism, fluid materials, and custom interactive assets for digital products.",
    tag: "Next-gen aesthetics",
    features: ["Subsurface material shaders", "Isometric setup rendering", "Procedural abstract sculptures", "Complex lighting simulations"]
  },
  {
    id: "serv-brand",
    number: "02",
    title: "Art Direction & Branding",
    description: "Crafting robust identity guidelines, high-end packaging mockups, logo guidelines, and responsive corporate systems tailored to set global standards.",
    tag: "High impact",
    features: ["Digital & physical brand strategy", "Tailored graphic assets", "Corporate presentation templates", "Color & typography playbooks"]
  },
  {
    id: "serv-motion",
    number: "03",
    title: "Motion & Typographical Posters",
    description: "3D typographic expressions, cinematic video cutdowns, sound designs, social campaign posters, and rich attention-holding video transitions.",
    tag: "Maximum engagement",
    features: ["Social media campaign loops", "Cinematic product animation", "Physical typographic posters", "Clean logo reveal transitions"]
  },
  {
    id: "serv-mgmt",
    number: "04",
    title: "Meta Ads & Social Strategy",
    description: "Paid social campaigns across Meta platforms (FB/IG) matched with structured audience targeting & beautiful content calendars that convert views into leads.",
    tag: "Data meets art",
    features: ["Platform specific playbooks", "Targeted lookalike audiences", "Conversion audit & tracking", "High click-through-rate assets"]
  }
];

export const CLIENT_STORIES: ClientStory[] = [
  {
    company: "Drinks24 UG",
    quote: "Gaitano reshaped how Kampala sees our brand. The 3D campaigns increased our customer inquiry volume instantly.",
    author: "Richard N.",
    role: "Marketing Manager"
  },
  {
    company: "Vulkan Sports Arena",
    quote: "The visual storytelling and social playbook designed by Ezra Collective established our brand as the elite sports destination in Uganda.",
    author: "Grace Benson",
    role: "Director of Operations"
  },
  {
    company: "Grid Club Kampala",
    quote: "Exceptional 3D render precision. He didn't just design graphics; he designed a tactile voice our elite audience instantly resonated with.",
    author: "Elijah K.",
    role: "Co-Founder"
  }
];

export const ALL_BRANDS = [
  "Drinks24 UG",
  "Vulkan Sports Arena",
  "Bespoke Cakes",
  "Event Firm Africa",
  "Garuga Resort Beach",
  "Meat N Bunz",
  "Krustys",
  "Grid Club Kampala",
  "Calm Suites Kampala",
  "Lake George View Golf Resort",
  "Lodge Bella Vista",
  "Forest Resort Beach Kasenge",
  "Karuma Tours & Travel"
];
