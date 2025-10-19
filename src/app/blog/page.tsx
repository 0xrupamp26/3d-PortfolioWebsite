import React from "react";
import Link from "next/link";
import { config } from "@/data/config";

function Page() {
  return (
    <div className="container mx-auto text-zinc-300 flex flex-col gap-6 justify-center items-center h-[60vh] px-4 text-center">
      <h1 className="text-4xl md:text-5xl">Blog</h1>
      <p className="text-zinc-400 max-w-2xl">
        I publish my articles on Medium. Click below to read them.
      </p>
      <Link
        href={config.social.medium}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4"
      >
        Visit my Medium profile →
      </Link>
    </div>
  );
}

export default Page;
