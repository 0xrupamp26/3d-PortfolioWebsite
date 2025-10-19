// Skill names as enum for type safety
export enum SkillName {
  // Blockchain
  RUST = 'rust',
  MOVE = 'move',
  SOLIDITY = 'solidity',
  ETHEREUM = 'ethereum',
  SOLANA = 'solana',
  SUBSTRATE = 'substrate',
  COSMWASM = 'cosmwasm',
  APTOS = 'aptos',
  SUI = 'sui',
  ANCHOR = 'anchor',
  PYTH = 'pyth',
  CHAINLINK = 'chainlink',
  
  // Web Development
  NEXTJS = 'nextjs',
  REACT = 'react',
  VUE = 'vue',
  NODEJS = 'nodejs',
  EXPRESS = 'express',
  NESTJS = 'nestjs',
  
  // Languages
  TYPESCRIPT = 'typescript',
  JAVASCRIPT = 'javascript',
  PYTHON = 'python',
  GO = 'go',
  
  // Frontend
  TAILWIND = 'tailwind',
  HTML = 'html',
  CSS = 'css',
  
  // Databases
  MONGODB = 'mongodb',
  POSTGRES = 'postgres',
  
  // DevOps & Cloud
  DOCKER = 'docker',
  KUBERNETES = 'kubernetes',
  AWS = 'aws',
  GCP = 'gcp',
  TERRAFORM = 'terraform',
  GITHUB_ACTIONS = 'github_actions',
  
  // Tools
  GIT = 'git',
  GITHUB = 'github',
  VSCODE = 'vscode',
  FIGMA = 'figma',
  POSTMAN = 'postman',
  HARDHAT = 'hardhat',
  FOUNDRY = 'foundry',
  
  // Web3 Tools
  TRUFFLE = 'truffle',
  ETHERS = 'ethers',
  WEB3JS = 'web3js',
  WAGMI = 'wagmi',
  RAINBOWKIT = 'rainbowkit',
  
  // UI Libraries
  SHADCN = 'shadcn',
  RADIX = 'radix',
  FRAMER = 'framer-motion',
  
  // Other
  PRISMA = 'prisma',
  GRAPHQL = 'graphql',
  REDIS = 'redis',
  LINUX = 'linux'
}

export interface Skill {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
  proficiency?: number; // 0-100 percentage
  category?: 'blockchain' | 'frontend' | 'backend' | 'devops' | 'tools';
}

const skillsData: Record<SkillName, Omit<Skill, 'name'>> = {
  // Blockchain
  [SkillName.RUST]: {
    id: 1,
    label: "Rust",
    shortDescription: "Blazingly fast systems language for reliable and efficient software, widely used in blockchain.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
    proficiency: 85,
    category: 'blockchain'
  },
  [SkillName.MOVE]: {
    id: 2,
    label: "Move",
    shortDescription: "Safe and secure programming language for smart contracts, used by Aptos and Sui blockchains.",
    color: "#00A0D1",
    icon: "https://avatars.githubusercontent.com/u/122872638?s=200&v=4",
    proficiency: 75,
    category: 'blockchain'
  },
  [SkillName.SOLIDITY]: {
    id: 3,
    label: "Solidity",
    shortDescription: "Object-oriented programming language for writing smart contracts on Ethereum and EVM-compatible blockchains.",
    color: "#363636",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
    proficiency: 90,
    category: 'blockchain'
  },
  [SkillName.ETHEREUM]: {
    id: 4,
    label: "Ethereum",
    shortDescription: "Open-source, decentralized blockchain with smart contract functionality and native cryptocurrency ETH.",
    color: "#3C3C3D",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg",
    proficiency: 88,
    category: 'blockchain'
  },
  [SkillName.SOLANA]: {
    id: 5,
    label: "Solana",
    shortDescription: "High-performance blockchain supporting builders around the world creating crypto apps that scale.",
    color: "#00FFA3",
    icon: "https://cryptologos.cc/logos/solana-sol-logo.svg",
    proficiency: 80,
    category: 'blockchain'
  },
  [SkillName.SUBSTRATE]: {
    id: 6,
    label: "Substrate",
    shortDescription: "Modular framework for building blockchains, powering the Polkadot and Kusama networks.",
    color: "#E6007A",
    icon: "https://substrate.io/img/Substrate-logo-dark.svg",
    proficiency: 75,
    category: 'blockchain'
  },
  [SkillName.COSMWASM]: {
    id: 7,
    label: "CosmWasm",
    shortDescription: "Smart contracting platform built for the Cosmos ecosystem, enabling secure smart contract execution.",
    color: "#2E3148",
    icon: "https://cryptologos.cc/logos/cosmos-atom-logo.svg",
    proficiency: 70,
    category: 'blockchain'
  },
  [SkillName.APTOS]: {
    id: 8,
    label: "Aptos",
    shortDescription: "Layer 1 blockchain designed for safety, scalability, and upgradeability with the Move programming language.",
    color: "#00DBC0",
    icon: "https://cryptologos.cc/logos/aptos-apt-logo.svg",
    proficiency: 72,
    category: 'blockchain'
  },
  [SkillName.SUI]: {
    id: 9,
    label: "Sui",
    shortDescription: "Next-generation smart contract platform with high throughput, low latency, and an object-centric model.",
    color: "#6FBCF0",
    icon: "https://cryptologos.cc/logos/sui-sui-logo.svg",
    proficiency: 70,
    category: 'blockchain'
  },
  [SkillName.ANCHOR]: {
    id: 10,
    label: "Anchor",
    shortDescription: "Framework for Solana's Sealevel runtime providing tools for writing secure Solana programs.",
    color: "#00C1DE",
    icon: "https://www.anchor-lang.com/logo.png",
    proficiency: 78,
    category: 'blockchain'
  },
  [SkillName.PYTH]: {
    id: 11,
    label: "Pyth",
    shortDescription: "Decentralized oracle network providing real-time market data to smart contracts.",
    color: "#00D4FF",
    icon: "https://pyth.network/static/media/pyth-logo-square.2d1f0b8e.svg",
    proficiency: 75,
    category: 'blockchain'
  },
  [SkillName.CHAINLINK]: {
    id: 12,
    label: "Chainlink",
    shortDescription: "Decentralized oracle network that enables smart contracts to securely access off-chain data.",
    color: "#2A5ADA",
    icon: "https://cryptologos.cc/logos/chainlink-link-logo.svg",
    proficiency: 82,
    category: 'blockchain'
  },
  
  // Web Development
  [SkillName.NEXTJS]: {
    id: 13,
    label: "Next.js",
    shortDescription: "The React Framework for Production. Optimized for performance and developer experience.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    proficiency: 90,
    category: 'frontend'
  },
  [SkillName.REACT]: {
    id: 14,
    label: "React",
    shortDescription: "A JavaScript library for building user interfaces, maintained by Facebook and a community of developers.",
    color: "#61DAFB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    proficiency: 92,
    category: 'frontend'
  },
  [SkillName.VUE]: {
    id: 15,
    label: "Vue.js",
    shortDescription: "Progressive JavaScript framework for building user interfaces and single-page applications.",
    color: "#4FC08D",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    proficiency: 80,
    category: 'frontend'
  },
  [SkillName.NODEJS]: {
    id: 16,
    label: "Node.js",
    shortDescription: "JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications.",
    color: "#339933",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    proficiency: 88,
    category: 'backend'
  },
  [SkillName.EXPRESS]: {
    id: 17,
    label: "Express",
    shortDescription: "Fast, unopinionated, minimalist web framework for Node.js, providing a robust set of features.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    proficiency: 85,
    category: 'backend'
  },
  [SkillName.NESTJS]: {
    id: 18,
    label: "NestJS",
    shortDescription: "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
    color: "#E0234E",
    icon: "https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg",
    proficiency: 82,
    category: 'backend'
  },
  
  // Languages
  [SkillName.TYPESCRIPT]: {
    id: 19,
    label: "TypeScript",
    shortDescription: "Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    color: "#3178C6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    proficiency: 90,
    category: 'frontend'
  },
  [SkillName.JAVASCRIPT]: {
    id: 20,
    label: "JavaScript",
    shortDescription: "High-level, interpreted programming language that conforms to the ECMAScript specification.",
    color: "#F7DF1E",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    proficiency: 92,
    category: 'frontend'
  },
  [SkillName.PYTHON]: {
    id: 21,
    label: "Python",
    shortDescription: "High-level, interpreted programming language with a design philosophy that emphasizes code readability.",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    proficiency: 85,
    category: 'backend'
  },
  [SkillName.GO]: {
    id: 22,
    label: "Go",
    shortDescription: "Statically typed, compiled programming language designed at Google with a focus on simplicity and efficiency.",
    color: "#00ADD8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    proficiency: 80,
    category: 'backend'
  },
  
  // Frontend
  [SkillName.TAILWIND]: {
    id: 23,
    label: "Tailwind CSS",
    shortDescription: "A utility-first CSS framework for rapidly building custom designs without leaving your HTML.",
    color: "#06B6D4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    proficiency: 88,
    category: 'frontend'
  },
  [SkillName.HTML]: {
    id: 24,
    label: "HTML5",
    shortDescription: "The standard markup language for documents designed to be displayed in a web browser.",
    color: "#E34F26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    proficiency: 95,
    category: 'frontend'
  },
  [SkillName.CSS]: {
    id: 25,
    label: "CSS3",
    shortDescription: "Style sheet language used for describing the presentation of a document written in HTML.",
    color: "#1572B6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    proficiency: 90,
    category: 'frontend'
  },
  
  // Databases
  [SkillName.MONGODB]: {
    id: 26,
    label: "MongoDB",
    shortDescription: "Source-available cross-platform document-oriented NoSQL database program.",
    color: "#47A248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    proficiency: 85,
    category: 'backend'
  },
  [SkillName.POSTGRES]: {
    id: 27,
    label: "PostgreSQL",
    shortDescription: "Powerful, open source object-relational database system with over 30 years of active development.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    proficiency: 82,
    category: 'backend'
  },
  
  // DevOps & Cloud
  [SkillName.DOCKER]: {
    id: 28,
    label: "Docker",
    shortDescription: "Set of platform as a service products that use OS-level virtualization to deliver software in containers.",
    color: "#2496ED",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    proficiency: 85,
    category: 'devops'
  },
  [SkillName.KUBERNETES]: {
    id: 29,
    label: "Kubernetes",
    shortDescription: "Open-source container orchestration system for automating software deployment, scaling, and management.",
    color: "#326CE5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    proficiency: 80,
    category: 'devops'
  },
  [SkillName.AWS]: {
    id: 30,
    label: "AWS",
    shortDescription: "Comprehensive, evolving cloud computing platform provided by Amazon Web Services.",
    color: "#FF9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    proficiency: 82,
    category: 'devops'
  },
  [SkillName.GCP]: {
    id: 31,
    label: "Google Cloud",
    shortDescription: "Suite of cloud computing services that runs on the same infrastructure that Google uses internally.",
    color: "#4285F4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    proficiency: 78,
    category: 'devops'
  },
  [SkillName.TERRAFORM]: {
    id: 32,
    label: "Terraform",
    shortDescription: "Infrastructure as Code tool for building, changing, and versioning infrastructure safely and efficiently.",
    color: "#7B42BC",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    proficiency: 80,
    category: 'devops'
  },
  [SkillName.GITHUB_ACTIONS]: {
    id: 33,
    label: "GitHub Actions",
    shortDescription: "CI/CD platform that allows you to automate your build, test, and deployment pipeline.",
    color: "#2088FF",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    proficiency: 85,
    category: 'devops'
  },
  
  // Tools
  [SkillName.GIT]: {
    id: 34,
    label: "Git",
    shortDescription: "Distributed version control system for tracking changes in source code during software development.",
    color: "#F05032",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    proficiency: 90,
    category: 'tools'
  },
  [SkillName.GITHUB]: {
    id: 35,
    label: "GitHub",
    shortDescription: "Platform for version control and collaboration, built on top of Git for software development.",
    color: "#181717",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    proficiency: 90,
    category: 'tools'
  },
  [SkillName.VSCODE]: {
    id: 36,
    label: "VS Code",
    shortDescription: "Source-code editor developed by Microsoft with support for debugging, syntax highlighting, and more.",
    color: "#007ACC",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    proficiency: 88,
    category: 'tools'
  },
  [SkillName.FIGMA]: {
    id: 37,
    label: "Figma",
    shortDescription: "Vector graphics editor and prototyping tool which is primarily web-based with additional features.",
    color: "#F24E1E",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    proficiency: 75,
    category: 'tools'
  },
  [SkillName.POSTMAN]: {
    id: 38,
    label: "Postman",
    shortDescription: "Collaboration platform for API development, used for testing and documenting APIs.",
    color: "#FF6C37",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    proficiency: 85,
    category: 'tools'
  },
  [SkillName.HARDHAT]: {
    id: 39,
    label: "Hardhat",
    shortDescription: "Ethereum development environment for professionals that helps in building smart contracts and dApps.",
    color: "#F7DF1E",
    icon: "https://hardhat.org/favicon.ico",
    proficiency: 82,
    category: 'blockchain'
  },
  [SkillName.FOUNDRY]: {
    id: 40,
    label: "Foundry",
    shortDescription: "Blazing fast, portable and modular toolkit for Ethereum application development written in Rust.",
    color: "#1E1E1E",
    icon: "https://raw.githubusercontent.com/foundry-rs/foundry/2c2a0e6d3b5d5f5e5e5e5e5e5e5e5e5e5e5e5e5e5/static/img/logo.svg",
    proficiency: 80,
    category: 'blockchain'
  },
  
  // Web3 Tools
  [SkillName.TRUFFLE]: {
    id: 41,
    label: "Truffle",
    shortDescription: "Development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine.",
    color: "#3FE0C5",
    icon: "https://www.trufflesuite.com/img/truffle-logo-dark.svg",
    proficiency: 78,
    category: 'blockchain'
  },
  [SkillName.ETHERS]: {
    id: 42,
    label: "Ethers.js",
    shortDescription: "Compact, complete, and secure library for Ethereum blockchain and its ecosystem.",
    color: "#3C3C3D",
    icon: "https://docs.ethers.io/v5/images/logo-black.svg",
    proficiency: 85,
    category: 'blockchain'
  },
  [SkillName.WEB3JS]: {
    id: 43,
    label: "Web3.js",
    shortDescription: "Collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.",
    color: "#F16822",
    icon: "https://web3js.readthedocs.io/en/v1.7.1/_static/web3js-400x400.png",
    proficiency: 80,
    category: 'blockchain'
  },
  [SkillName.WAGMI]: {
    id: 44,
    label: "Wagmi",
    shortDescription: "Collection of React Hooks containing everything you need to start working with Ethereum.",
    color: "#E36B89",
    icon: "https://wagmi.sh/logo-light.svg",
    proficiency: 82,
    category: 'blockchain'
  },
  [SkillName.RAINBOWKIT]: {
    id: 45,
    label: "RainbowKit",
    shortDescription: "A React library that makes it easy to add wallet connection to your dapp.",
    color: "#00CCE8",
    icon: "https://www.rainbowkit.com/rainbowkit.svg",
    proficiency: 85,
    category: 'blockchain'
  },
  
  // UI Libraries
  [SkillName.SHADCN]: {
    id: 46,
    label: "shadcn/ui",
    shortDescription: "Beautifully designed components built with Radix UI and Tailwind CSS.",
    color: "#000000",
    icon: "https://ui.shadcn.com/favicon.ico",
    proficiency: 88,
    category: 'frontend'
  },
  [SkillName.RADIX]: {
    id: 47,
    label: "Radix UI",
    shortDescription: "Unstyled, accessible components for building high‑quality design systems and web apps.",
    color: "#5F6B7C",
    icon: "https://www.radix-ui.com/favicon.ico",
    proficiency: 85,
    category: 'frontend'
  },
  [SkillName.FRAMER]: {
    id: 48,
    label: "Framer Motion",
    shortDescription: "Production-ready animation and gesture library for React.",
    color: "#0055FF",
    icon: "https://www.framer.com/motion/static/logo.png",
    proficiency: 82,
    category: 'frontend'
  },
  
  // Other
  [SkillName.PRISMA]: {
    id: 49,
    label: "Prisma",
    shortDescription: "Next-generation Node.js and TypeScript ORM for PostgreSQL, MySQL, SQL Server, and more.",
    color: "#2D3748",
    icon: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg",
    proficiency: 80,
    category: 'backend'
  },
  [SkillName.GRAPHQL]: {
    id: 50,
    label: "GraphQL",
    shortDescription: "Query language for APIs and a runtime for fulfilling those queries with your existing data.",
    color: "#E10098",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    proficiency: 82,
    category: 'backend'
  },
  [SkillName.REDIS]: {
    id: 51,
    label: "Redis",
    shortDescription: "In-memory data structure store, used as a database, cache, and message broker.",
    color: "#DC382D",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    proficiency: 78,
    category: 'backend'
  },
  [SkillName.LINUX]: {
    id: 52,
    label: "Linux",
    shortDescription: "Family of open-source Unix-like operating systems based on the Linux kernel.",
    color: "#FCC624",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    proficiency: 80,
    category: 'devops'
  }
    shortDescription: "Smart contract programming language for Ethereum and EVM-compatible blockchains.",
    color: "#363636",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg"
  },
  [SkillName.ETHEREUM]: {
    id: 4,
    label: "Ethereum",
    shortDescription: "Smart contract platform and decentralized application platform.",
    color: "#3C3C3D",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg"
  },
  [SkillName.SOLANA]: {
    id: 5,
    label: "Solana",
    shortDescription: "High-performance blockchain supporting fast, secure, scalable decentralized applications.",
    color: "#14F195",
    icon: "https://cryptologos.cc/logos/solana-sol-logo.svg"
  },
  [SkillName.SUBSTRATE]: {
    id: 6,
    label: "Substrate",
    shortDescription: "Framework for building blockchains with Polkadot and Kusama.",
    color: "#24CC85",
    icon: "https://substrate.io/static/4f254a7d0a0c3f5c3a6a8a3f3d7d3b3e/sub-logo.svg"
  },
  [SkillName.COSMWASM]: {
    id: 7,
    label: "CosmWasm",
    shortDescription: "Smart contracting platform for the Cosmos ecosystem.",
    color: "#9C0D38",
    icon: "https://cryptologos.cc/logos/cosmos-atom-logo.svg"
  },
  [SkillName.APTOS]: {
    id: 8,
    label: "Aptos",
    shortDescription: "Layer-1 high-throughput blockchain using the Move language.",
    color: "#14151A",
    icon: "https://cryptologos.cc/logos/aptos-apt-logo.svg"
  },
  [SkillName.SUI]: {
    id: 9,
    label: "Sui",
    shortDescription: "High-performance Layer-1 with object-centric model and Move.",
    color: "#6AD1E3",
    icon: "https://cryptologos.cc/logos/sui-sui-logo.svg"
  },
  [SkillName.ANCHOR]: {
    id: 10,
    label: "Anchor",
    shortDescription: "Solana framework for writing smart contracts in Rust.",
    color: "#9945FF",
    icon: "https://avatars.githubusercontent.com/u/68444958?s=200&v=4"
  },
  [SkillName.PYTH]: {
    id: 11,
    label: "Pyth",
    shortDescription: "High-fidelity real-time price oracle network.",
    color: "#6F00FF",
    icon: "https://pyth.network/assets/images/pyth-icon-purple.svg"
  },
  [SkillName.CHAINLINK]: {
    id: 12,
    label: "Chainlink",
    shortDescription: "Decentralized oracle network powering hybrid smart contracts.",
    color: "#2A5ADA",
    icon: "https://cryptologos.cc/logos/chainlink-link-logo.svg"
  },
  [SkillName.HIPPO]: {
    id: 13,
    label: "Hippo DEX",
    shortDescription: "Aggregator DEX and DeFi stack on Aptos.",
    color: "#00C2FF",
    icon: "https://raw.githubusercontent.com/hippospace/hippo-frontend/main/public/favicon.ico"
  },
  
  // Web Development
  [SkillName.NEXTJS]: {
    id: 14,
    label: "Next.js",
    shortDescription: "The React Framework for Production.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
  },
  [SkillName.REACT]: {
    id: 15,
    label: "React",
    shortDescription: "A JavaScript library for building user interfaces.",
    color: "#61DAFB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  [SkillName.VUE]: {
    id: 16,
    label: "Vue.js",
    shortDescription: "The Progressive JavaScript Framework.",
    color: "#4FC08D",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
  },
  [SkillName.NODEJS]: {
    id: 17,
    label: "Node.js",
    shortDescription: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
    color: "#339933",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  [SkillName.EXPRESS]: {
    id: 18,
    label: "Express",
    shortDescription: "Fast, unopinionated, minimalist web framework for Node.js",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },
  [SkillName.NESTJS]: {
    id: 19,
    label: "NestJS",
    shortDescription: "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
    color: "#E0234E",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"
  },
  
  // Languages
  [SkillName.TYPESCRIPT]: {
    id: 14,
    label: "TypeScript",
    shortDescription: "Strongly typed programming language that builds on JavaScript.",
    color: "#3178C6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  [SkillName.JAVASCRIPT]: {
    id: 15,
    label: "JavaScript",
    shortDescription: "High-level, interpreted programming language.",
    color: "#F7DF1E",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  [SkillName.PYTHON]: {
    id: 16,
    label: "Python",
    shortDescription: "High-level, interpreted programming language with dynamic semantics.",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  [SkillName.GO]: {
    id: 17,
    label: "Go",
    shortDescription: "Statically typed, compiled programming language designed at Google.",
    color: "#00ADD8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
  },
  
  // Infrastructure & DevOps
  [SkillName.DOCKER]: {
    id: 18,
    label: "Docker",
    shortDescription: "Platform for developing, shipping, and running applications in containers.",
    color: "#2496ED",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  },
  [SkillName.KUBERNETES]: {
    id: 19,
    label: "Kubernetes",
    shortDescription: "Open-source container orchestration system for automating software deployment, scaling, and management.",
    color: "#326CE5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
  },
  [SkillName.AWS]: {
    id: 20,
    label: "AWS",
    shortDescription: "Amazon Web Services - Cloud computing services.",
    color: "#FF9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
  },
  [SkillName.GCP]: {
    id: 21,
    label: "Google Cloud",
    shortDescription: "Suite of cloud computing services.",
    color: "#4285F4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
  },
  [SkillName.TERRAFORM]: {
    id: 22,
    label: "Terraform",
    shortDescription: "Infrastructure as Code tool for building, changing, and versioning infrastructure.",
    color: "#7B42BC",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg"
  },
  [SkillName.GIT]: {
    id: 23,
    label: "Git",
    shortDescription: "Distributed version control system.",
    color: "#F05032",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  [SkillName.GITHUB]: {
    id: 24,
    label: "GitHub",
    shortDescription: "Web-based hosting service for version control using Git.",
    color: "#181717",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },
  
  // Web3 Tools
  [SkillName.HARDHAT]: {
    id: 30,
    label: "Hardhat",
    shortDescription: "Ethereum development environment for professionals.",
    color: "#F7C139",
    icon: "https://hardhat.org/_next/static/media/hardhat-logo.1e6c8b2c.svg"
  },
  [SkillName.FOUNDRY]: {
    id: 31,
    label: "Foundry",
    shortDescription: "Blazing fast, portable and modular toolkit for Ethereum application development.",
    color: "#1F1F1F",
    icon: "https://book.getfoundry.sh/static/icon.svg"
  },
  [SkillName.TRUFFLE]: {
    id: 32,
    label: "Truffle",
    shortDescription: "Development environment, testing framework and asset pipeline for blockchains.",
    color: "#3FE0C5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/truffle/truffle-plain.svg"
  },
  [SkillName.ETHERS]: {
    id: 33,
    label: "Ethers.js",
    shortDescription: "Complete Ethereum wallet implementation and utilities in JavaScript.",
    color: "#3C3C3D",
    icon: "https://docs.ethers.org/v5/images/logo.svg"
  },
  [SkillName.WEB3JS]: {
    id: 34,
    label: "Web3.js",
    shortDescription: "Ethereum JavaScript API.",
    color: "#F16822",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/web3js/web3js-original.svg"
  },
  [SkillName.WAGMI]: {
    id: 35,
    label: "wagmi",
    shortDescription: "React Hooks for Ethereum.",
    color: "#1E1E1E",
    icon: "https://raw.githubusercontent.com/wagmi-dev/wagmi/main/.github/assets/wagmi-icon.svg"
  },
  [SkillName.RAINBOWKIT]: {
    id: 36,
    label: "RainbowKit",
    shortDescription: "Best-in-class wallet connection UI for React.",
    color: "#001A72",
    icon: "https://avatars.githubusercontent.com/u/98483161?s=200&v=4"
  },
  
  // Other
  [SkillName.TAILWIND]: {
    id: 37,
    label: "Tailwind CSS",
    shortDescription: "A utility-first CSS framework for rapidly building custom user interfaces.",
    color: "#38B2AC",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
  },
  [SkillName.SHADCN]: {
    id: 38,
    label: "shadcn/ui",
    shortDescription: "Beautifully designed components built with Radix UI and Tailwind CSS.",
    color: "#111827",
    icon: "https://ui.shadcn.com/favicon.ico"
  },
  [SkillName.RADIX]: {
    id: 39,
    label: "Radix UI",
    shortDescription: "Accessible, unstyled UI primitives for building high-quality design systems.",
    color: "#111111",
    icon: "https://avatars.githubusercontent.com/u/75042455?s=200&v=4"
  },
  [SkillName.FRAMER]: {
    id: 40,
    label: "Framer Motion",
    shortDescription: "Production-ready motion library for React.",
    color: "#0055FF",
    icon: "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/framer.svg"
  },
  [SkillName.PRISMA]: {
    id: 31,
    label: "Prisma",
    shortDescription: "Next-generation Node.js and TypeScript ORM.",
    color: "#2D3748",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg"
  },
  [SkillName.GRAPHQL]: {
    id: 32,
    label: "GraphQL",
    shortDescription: "Query language for APIs and a runtime for fulfilling those queries with your existing data.",
    color: "#E10098",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
  },
  [SkillName.MONGODB]: {
    id: 33,
    label: "MongoDB",
    shortDescription: "Source-available cross-platform document-oriented database program.",
    color: "#47A248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  [SkillName.POSTGRES]: {
    id: 34,
    label: "PostgreSQL",
    shortDescription: "Powerful, open source object-relational database system.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  },
  [SkillName.REDIS]: {
    id: 35,
    label: "Redis",
    shortDescription: "In-memory data structure store, used as a database, cache, and message broker.",
    color: "#DC382D",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
  },
  [SkillName.LINUX]: {
    id: 36,
    label: "Linux",
    shortDescription: "Family of open-source Unix-like operating systems.",
    color: "#FCC624",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
  },
  
  // HTML & CSS
  [SkillName.HTML]: {
    id: 37,
    label: "HTML5",
    shortDescription: "Markup language for creating and structuring web content.",
    color: "#E34F26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  [SkillName.CSS]: {
    id: 38,
    label: "CSS3",
    shortDescription: "Style sheet language used for describing the presentation of a document.",
    color: "#1572B6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  
};

// Add legacy mappings after skillsData is defined
const skillsDataWithLegacy = {
  ...skillsData,
  [SkillName.TS]: {
    ...(skillsData[SkillName.TYPESCRIPT] as Omit<Skill, 'name'>)
  },
  [SkillName.JS]: {
    ...(skillsData[SkillName.JAVASCRIPT] as Omit<Skill, 'name'>)
  }
};

// Create the final SKILLS object with names included
export const SKILLS: Record<SkillName, Skill> = Object.entries(skillsDataWithLegacy).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key as SkillName]: {
      ...value,
      name: key.toLowerCase()
    } as Skill,
  }),
  {} as Record<SkillName, Skill>
);

// Web3-only skills collection for the 3D keyboard and showcases
const WEB3_ONLY: SkillName[] = [
  SkillName.RUST,
  SkillName.MOVE,
  SkillName.SOLIDITY,
  SkillName.ETHEREUM,
  SkillName.SOLANA,
  SkillName.SUBSTRATE,
  SkillName.COSMWASM,
  SkillName.APTOS,
  SkillName.SUI,
  SkillName.ANCHOR,
  SkillName.PYTH,
  SkillName.CHAINLINK,
  SkillName.HIPPO,
  SkillName.ETHERS,
  SkillName.HARDHAT,
  SkillName.FOUNDRY,
  SkillName.TRUFFLE,
  SkillName.WEB3JS,
  SkillName.WAGMI,
  SkillName.RAINBOWKIT,
];

export const SKILLS_WEB3: Record<string, Skill> = WEB3_ONLY.reduce((acc, key) => {
  const s = skillsDataWithLegacy[key] as Omit<Skill, 'name'>;
  if (s) {
    acc[key.toLowerCase()] = { ...s, name: key.toLowerCase() } as Skill;
  }
  return acc;
}, {} as Record<string, Skill>);

// Export a type for skill names
export type SkillNames = keyof typeof SkillName;

// Helper function to get a skill by name
export const getSkill = (name: SkillName): Skill => ({
  ...skillsData[name],
  name: name.toLowerCase()
});

// Helper function to get multiple skills by names
export const getSkills = (...names: SkillName[]): Skill[] => 
  names.map(name => getSkill(name));
