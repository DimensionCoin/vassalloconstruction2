"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#f8f7f7]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/vassalloicon.png"
          alt="Construction site"
          layout="fill" // Keeps the image covering the entire area
          className="object-contain" // Changes the fit type to contain the full image
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40" />
      </div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Building Excellence,
          <br />
          Delivering Results
        </h1>
        <p className="text-xl text-light-brown mb-8 max-w-2xl mx-auto">
          Professional construction services with a commitment to quality and
          innovation
        </p>
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-black text-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition-colors"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
