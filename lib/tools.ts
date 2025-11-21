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
    description: "Discover the true power of compounding and how much you can comfortably spend from retirement to horizon.",
    url: "https://mleggo1.github.io/ultimate-target/",
    icon: "🎯",
  },
  {
    id: "investment-matchmaker",
    name: "Investment Matchmaker",
    description: "Instantly match investments to your risk tolerance, time horizon, and financial goals.",
    url: "https://mleggo1.github.io/Investment-Matchmaker/",
    icon: "🔍",
  },
  {
    id: "networth-engine",
    name: "NetWorth Engine",
    description: "Track, project and visualise every component of your wealth — property, super, crypto, ETFs, cash, and more.",
    url: "https://mjl-networth.vercel.app/",
    icon: "📊",
  },
  {
    id: "lifespan",
    name: "Lifespan",
    description: "A unique visual tool that shows how much time you may realistically have — inspiring urgency, action, and better life design.",
    url: "https://mleggo1.github.io/Lifespan/",
    icon: "⏳",
  },
];

