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
    url: "https://mleggo1.github.io/ultimate-target/",
    icon: "🎯",
  },
  {
    id: "investment-matchmaker",
    name: "Investment Matchmaker",
    description: "EDUCATION TOOL — NOT FINANCIAL ADVICE. Shows example investment mixes for learning purposes only. Not personalised. Not advice.",
    url: "https://mleggo1.github.io/Investment-Matchmaker/",
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
    name: "LifeSpan Map",
    description: "EDUCATION TOOL — NOT FINANCIAL ADVICE. Illustrative tool for learning about future planning concepts only.",
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

