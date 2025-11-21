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
    description: "Understand compounding, lifetime spending, fees",
    url: "https://mleggo1.github.io/ultimate-target/",
    icon: "🎯",
  },
  {
    id: "investment-matchmaker",
    name: "Investment Matchmaker",
    description: "Choose an investment mix that fits your goals",
    url: "https://mleggo1.github.io/Investment-Matchmaker/",
    icon: "🔍",
  },
  {
    id: "networth-engine",
    name: "Freedom Scorecard",
    description: "Measure your progress",
    url: "https://mjl-networth.vercel.app/",
    icon: "📊",
  },
  {
    id: "lifespan",
    name: "LifeSpan Map",
    description: "Design your future years with intention",
    url: "https://mleggo1.github.io/Lifespan/",
    icon: "⏳",
  },
];

