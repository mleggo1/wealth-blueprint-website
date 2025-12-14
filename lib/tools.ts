// Tool configuration - easy to update URLs
export interface WealthTool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
}

export const wealthTools: WealthTool[] = [
  {
    id: "ultimate-target",
    name: "Ultimate Target",
    description: "See how much you can safely spend in retirement and how long your money will last. Educational tool only. Not financial advice.",
    url: "https://ultimate-target.vercel.app/",
    icon: "🎯",
  },
  {
    id: "investment-matchmaker",
    name: "Investment Matchmaker",
    description: "Explore example investment mixes to understand different approaches and what might suit your goals. Educational tool only. Not financial advice.",
    url: "https://investment-matchmaker.vercel.app/",
    icon: "🔍",
  },
  {
    id: "networth-engine",
    name: "Freedom Scorecard",
    description: "A simple way to see how close you are to financial freedom. Educational tool only. Not financial advice.",
    url: "https://mjl-networth.vercel.app/",
    icon: "📊",
  },
  {
    id: "lifespan",
    name: "Lifespan",
    description: "How much time do you really have left — and how will you use it? A visual planning tool that puts time, health, and freedom into perspective. Educational tool only. Not financial advice.",
    url: "https://lifespanmap.vercel.app/",
    icon: "⏳",
  },
  {
    id: "kids-wealthblueprint",
    name: "Kids Wealth Blueprint",
    description: "Simple, engaging tools to help teach children about money, saving, and how wealth grows over time. Educational tool only. Not financial advice.",
    url: "https://kids-wealthblueprint.vercel.app/",
    icon: "👨‍👩‍👧‍👦",
  },
];

