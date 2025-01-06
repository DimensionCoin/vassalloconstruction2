"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      title: "Deck Installation",
      category: "Commercial",
      images: ["/beforedeck.jpg", "/afterdeck.jpg"], // Adjusted for multiple images
    },
    {
      title: "Concrete Ceiling Repair",
      category: "Residential",
      images: ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"], // Adjusted for multiple images
    },
  ];

  const [currentImages, setCurrentImages] = useState(projects.map(() => 0)); // State to track the current image index for each project

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((currentImages) =>
        currentImages.map(
          (currentImage, index) =>
            (currentImage + 1) % projects[index].images.length // Cycle through images
        )
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#1a1a1a] to-black"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={project.images[currentImages[index]]} // Show the current image
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-light-brown">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
