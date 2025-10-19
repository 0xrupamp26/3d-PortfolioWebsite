// Re-export skill-related types and constants from skills module
// Use Web3-only skills for the site
export { 
  type Skill, 
  SKILLS_WEB3 as SKILLS, 
  getSkill, 
  getSkills,
  type SkillName as SkillNames
} from './skills';

// Export other constants
export * from './config';

// Export project data
export * from './projects';

// Project skills mapping
export const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: "next"
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: "chakra"
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: "node"
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: "python"
  },
  prisma: {
    title: "Prisma",
    bg: "black",
    fg: "white",
    icon: "prisma"
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: "postgresql"
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: "mongodb"
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: "express"
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: "react-query"
  },
  shadcn: {
    title: "shadcn/ui",
    bg: "black",
    fg: "white",
    icon: "shadcn"
  },
  tailwind: {
    title: "Tailwind CSS",
    bg: "black",
    fg: "white",
    icon: "tailwind"
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: "docker"
  },
  typescript: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: "typescript"
  },
  javascript: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: "javascript"
  },
  rust: {
    title: "Rust",
    bg: "black",
    fg: "white",
    icon: "rust"
  },
  move: {
    title: "Move",
    bg: "black",
    fg: "white",
    icon: "move"
  },
  solidity: {
    title: "Solidity",
    bg: "black",
    fg: "white",
    icon: "solidity"
  },
  ethereum: {
    title: "Ethereum",
    bg: "black",
    fg: "white",
    icon: "ethereum"
  },
  solana: {
    title: "Solana",
    bg: "black",
    fg: "white",
    icon: "solana"
  },
  substrate: {
    title: "Substrate",
    bg: "black",
    fg: "white",
    icon: "substrate"
  },
  cosmwasm: {
    title: "CosmWasm",
    bg: "black",
    fg: "white",
    icon: "cosmwasm"
  },
  hardhat: {
    title: "Hardhat",
    bg: "black",
    fg: "white",
    icon: "hardhat"
  },
  foundry: {
    title: "Foundry",
    bg: "black",
    fg: "white",
    icon: "foundry"
  },
  truffle: {
    title: "Truffle",
    bg: "black",
    fg: "white",
    icon: "truffle"
  },
  ethers: {
    title: "Ethers.js",
    bg: "black",
    fg: "white",
    icon: "ethers"
  },
  web3js: {
    title: "Web3.js",
    bg: "black",
    fg: "white",
    icon: "web3js"
  },
  ipfs: {
    title: "IPFS",
    bg: "black",
    fg: "white",
    icon: "ipfs"
  },
  thegraph: {
    title: "The Graph",
    bg: "black",
    fg: "white",
    icon: "thegraph"
  }
};

// Theme toggle fun disclaimers/messages
export const themeDisclaimers = {
  dark: [
    "Entering dark mode. Sunglasses recommended.",
    "Dark mode: because bright light is overrated.",
    "Activating stealth vibes...",
    "Welcome to the dark side. We have cookies.",
  ],
  light: [
    "Back to light mode. Don't forget your SPF.",
    "Shining bright like a diamond.",
    "Let there be light!",
    "Light mode: caffeine for your pixels.",
  ],
};
