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
    description: "EDUCATION TOOL — NOT FINANCIAL ADVICE. Illustrates compounding, lifetime spending, and fees concepts only. Does not recommend products or tell you what to invest in.",
    url: "https://ultimate-target.vercel.app/",
    icon: "🎯",
  },
  {
    id: "investment-matchmaker",
    name: "Investment Matchmaker",
    description: "EDUCATION TOOL — NOT FINANCIAL ADVICE. Shows example investment mixes for learning purposes only. Not personalised. Not advice.",
    url: "https://investment-matchmaker.vercel.app/",
    icon: "🔍",
  },
  {
    id: "networth-engine",
    name: "Freedom Scorecard",
    description: "EDUCATION TOOL — NOT FINANCIAL ADVICE. Illustrative scenarios only. Helps you understand progress tracking concepts.",
    url: "https://mjl-networth.vercel.app/",
    icon: "📊",
  },
  {
    id: "lifespan",
    name: "Lifespan",
    description: "EDUCATION TOOL — NOT FINANCIAL ADVICE. How much time do you really have left — and how will you use it? A visual planning tool that puts time, health, and freedom into perspective.",
    url: "https://lifespanmap.vercel.app/",
    icon: "⏳",
  },
  {
    id: "kids-wealthblueprint",
    name: "Kids Wealth Blueprint",
    description: "EDUCATION TOOL — NOT FINANCIAL ADVICE. Educational content to help teach children about money and investing concepts.",
    url: "https://kids-wealthblueprint.vercel.app/",
    icon: "👨‍👩‍👧‍👦",
  },
];

