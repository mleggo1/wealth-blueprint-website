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
    description: "See — visually — how your money can grow, what you could spend in retirement, and how long it may last. Educational tool only. Not financial advice.",
    url: "https://ultimate-target.vercel.app/",
    icon: "🎯",
  },
  {
    id: "investment-educator",
    name: "Investment Educator",
    description: "Explore example allocation scenarios to see how different broad approaches behave — for learning only. Not financial advice or product matching.",
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
  {
    id: "goals-blueprint",
    name: "Goals Blueprint",
    description: "Track your financial and life goals with a clear, visual framework that helps you understand what's needed to achieve them. Educational tool only. Not financial advice.",
    url: "https://goalsblueprint.vercel.app/",
    icon: "🗺️",
  },
  {
    id: "family-wealth-blueprint",
    name: "Family Wealth Blueprint",
    description: "Plan and understand how to build wealth across generations with tools designed for families. Educational tool only. Not financial advice.",
    url: "https://family-wealth-blueprint.vercel.app/",
    icon: "👨‍👩‍👦",
  },
];

