import { Project, Service, ClientStory } from "./types";

export const PROFILE_IMAGE = "/assets/images/gaitano_ezra_profile_1781023273890.png";

export const PROJECTS: Project[] = [
  {
    id: "drinks24-content",
    title: "Drinks24 UG Social Push",
    category: "Content",
    image: "/assets/images/hero_3d_render_1781023214369.png",
    description: "Content planning, product-led visuals, captions, and campaign ideas for a drinks and lifestyle audience.",
    longDescription: "A practical content workflow built around quick product awareness, clear offers, and social posts that help customers know what to order and where to reach the brand.",
    tags: ["Content Strategy", "Copywriting", "Meta Ads", "Reels"],
    year: "2026",
    client: "Drinks24 UG",
    role: "Digital Creator",
    interactive3D: {
      modelType: "ribbon",
      defaultColor: "#E85C1A"
    }
  },
  {
    id: "bespoke-cakes",
    title: "Bespoke Cakes UG Product Stories",
    category: "Social Media",
    image: "/assets/images/branding_3d_mockup_1781023229075.png",
    description: "Simple product storytelling for cakes, orders, customer moments, and seasonal offers.",
    longDescription: "A content direction focused on making cake products feel desirable, easy to order, and memorable across Instagram and WhatsApp.",
    tags: ["Captions", "Product Copy", "Instagram", "WhatsApp Marketing"],
    year: "2025",
    client: "Bespoke Cakes UG",
    role: "Content Lead",
    interactive3D: {
      modelType: "cube_grid",
      defaultColor: "#1E1E1E"
    }
  },
  {
    id: "vulkan-arena",
    title: "Vulkan Sports Arena Campaign Content",
    category: "Video",
    image: "/assets/images/typography_3d_poster_1781023244187.png",
    description: "Sports venue content built around events, energy, short-form video, and consistent posting.",
    longDescription: "A social media and video editing workflow designed to make the venue feel active, exciting, and easy for guests to choose.",
    tags: ["Video Editing", "Reels", "Event Coverage", "Social Management"],
    year: "2026",
    client: "Vulkan Sports Arena",
    role: "Video & Social Media",
    interactive3D: {
      modelType: "torus",
      defaultColor: "#E85C1A"
    }
  },
  {
    id: "garuga-resort",
    title: "Garuga Resort Beach Hotel Visibility",
    category: "Campaign",
    image: "/assets/images/editorial_3d_layout_1781023257899.png",
    description: "Hospitality content support for resort experiences, beach moments, and guest-facing offers.",
    longDescription: "A clean hospitality storytelling approach that highlights the location, guest experience, and reasons to visit without overcomplicating the message.",
    tags: ["Hospitality", "Content Planning", "Copywriting", "Campaign Direction"],
    year: "2025",
    client: "Garuga Resort Beach Hotel",
    role: "Content Strategy",
    interactive3D: {
      modelType: "sphere",
      defaultColor: "#888880"
    }
  }
];

export const SERVICES: Service[] = [
  {
    id: "serv-strategy",
    number: "01",
    title: "Content Strategy",
    description: "Audience research, content calendars, campaign direction, and platform plans built around what the brand needs to sell.",
    tag: "Strategy that sells",
    features: ["Content calendars", "Campaign ideas", "Audience direction", "Offer planning"]
  },
  {
    id: "serv-video",
    number: "02",
    title: "Video Editing",
    description: "Clean Reels, TikTok-ready cuts, event highlights, talking-head edits, color polish, and sound design.",
    tag: "Post-production",
    features: ["Reels editing", "Event recaps", "Color polish", "Sound cleanup"]
  },
  {
    id: "serv-scripts",
    number: "03",
    title: "Script Writing",
    description: "Scripts for brand videos, social videos, founder stories, and ad concepts written to be spoken naturally.",
    tag: "Voice & narrative",
    features: ["Ad scripts", "Voiceover lines", "Video outlines", "Story hooks"]
  },
  {
    id: "serv-copy",
    number: "04",
    title: "Copywriting",
    description: "Captions, campaign copy, product descriptions, WhatsApp marketing messages, and brand voice guides.",
    tag: "Copy & tone",
    features: ["Captions", "Product copy", "WhatsApp copy", "Brand voice"]
  },
  {
    id: "serv-social",
    number: "05",
    title: "Social Media Management",
    description: "Instagram, TikTok, and Facebook management with content planning, posting, engagement, and monthly reviews.",
    tag: "Full management",
    features: ["Posting plans", "Community replies", "Page cleanup", "Monthly reports"]
  },
  {
    id: "serv-ads",
    number: "06",
    title: "Meta Ads",
    description: "Paid campaigns on Facebook and Instagram with audience targeting, ad creative, budget control, and performance reporting.",
    tag: "Paid media",
    features: ["FB/IG ads", "Audience targeting", "Budget planning", "Ad reporting"]
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

export const ALL_BRAND_LINKS = [
  { name: "Drinks24 UG", url: "https://www.instagram.com/drinks_24_ug?igsh=MWx0bjdwb3pjYm40ZQ%3D%3D&utm_source=qr" },
  { name: "Bespoke Cakes UG", url: "https://www.instagram.com/bespokecakesug?TY0aXphN3JsMHAwcg%3D%3D&utm_source=qr" },
  { name: "Vulkan Sports Arena", url: "https://www.instagram.com/vulkan_sportsarena?igsh=cDlydzZ4aWk5MXFr&utm_source=qr" },
  { name: "Garuga Resort Beach Hotel", url: "https://www.instagram.com/garuga_resort_beach_hotel?igsh=cWxudHdld21zcW90" },
  { name: "Venstela", url: "https://www.instagram.com/event_firm_ug?igsh=amUyaTZtaTg5Mmhj" },
  { name: "Meat N Bunz", url: "#" },
  { name: "Krustys", url: "#" },
  { name: "Grid Club Kampala", url: "#" },
  { name: "Calm Suites Kampala", url: "#" },
  { name: "Lake George View Golf Resort", url: "#" },
  { name: "Lodge Bella Vista", url: "#" },
  { name: "Forest Resort Beach Kasenge", url: "#" },
  { name: "Karuma Tours & Travel", url: "#" },
];

export const WORKED_WITH = [
  {
    name: "Drinks24 UG",
    type: "Beverage delivery",
    url: "https://www.instagram.com/drinks_24_ug?igsh=MWx0bjdwb3pjYm40ZQ%3D%3D&utm_source=qr",
    image: "/assets/images/drinks24.png",
    meaning: "For Drinks24 UG, the work is about making drinks easy to discover, easy to order, and easy to remember. The content direction focuses on product visibility, fast-moving offers, captions that sell, and social posts that push customers toward WhatsApp orders."
  },
  {
    name: "Bespoke Cakes UG",
    type: "Bakery & custom cakes",
    url: "https://www.instagram.com/bespokecakesug?TY0aXphN3JsMHAwcg%3D%3D&utm_source=qr",
    image: "/assets/images/bespoke-cakes.png",
    meaning: "For Bespoke Cakes UG, the content needs to make every cake feel personal, premium, and worth ordering. The work connects product storytelling, celebration moments, sweet captions, and clear order messaging for birthdays, gifts, and special events."
  },
  {
    name: "Vulkan Sports Arena",
    type: "Sports & entertainment",
    url: "https://www.instagram.com/vulkan_sportsarena?igsh=cDlydzZ4aWk5MXFr&utm_source=qr",
    image: "/assets/images/vulkan.png",
    meaning: "For Vulkan Sports Arena, the goal is to show energy, movement, and the reason people should visit. The work relates to event coverage, short-form video, match-day hype, social management, and content that makes the venue feel active."
  },
  {
    name: "Garuga Resort Beach Hotel",
    type: "Resort & hospitality",
    url: "https://www.instagram.com/garuga_resort_beach_hotel?igsh=cWxudHdld21zcW90",
    image: "/assets/images/garuga-resort.png",
    meaning: "For Garuga Resort Beach Hotel, the content is about selling the feeling of escape. The work highlights the beach, rooms, food, experiences, and guest moments in a way that supports bookings and weekend plans."
  },
  {
    name: "Venstela",
    type: "Events & production",
    url: "https://www.instagram.com/event_firm_ug?igsh=amUyaTZtaTg5Mmhj",
    image: "/assets/images/venstela.png",
    meaning: "For Venstela, the work is about turning events into proof of quality. The content direction supports event recaps, behind-the-scenes moments, service promotion, and social storytelling that helps clients trust the team."
  }
];
