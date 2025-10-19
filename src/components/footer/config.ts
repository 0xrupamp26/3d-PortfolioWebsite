import { config } from "@/data/config";

const footer: { title: string; href: string }[] = [
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: `mailto:${config.email}`,
  },
];

export { footer };
