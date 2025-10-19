import React from "react";
import ContactForm from "@/components/ContactForm";

function Page() {
  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-zinc-200">
          Contact Me
        </h2>
        <div className="space-y-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Page;
