"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import "./gallery.css";

const galleryItems = [
  {
    src: "/afterdeck.jpg",
    width: 300,
    height: 400,
    alt: "After Deck Construction",
  },
  {
    src: "/driveway.png",
    width: 400,
    height: 300,
    alt: "Luxury Residential Complex",
  },
  { src: "/img1.jpg", width: 300, height: 500, alt: "Industrial Warehouse" },
  { src: "/img2.jpg", width: 600, height: 400, alt: "Shopping Center" },
  { src: "/img3.jpg", width: 300, height: 300, alt: "Bridge Construction" },
  { src: "/img4.jpg", width: 300, height: 400, alt: "Eco-Friendly Office" },
  { src: "/bollard.png", width: 400, height: 500, alt: "High-Rise Apartment" },
  {
    src: "/retainingwalls.png",
    width: 500,
    height: 300,
    alt: "School Building",
  },
  { src: "/stairwell.png", width: 500, height: 300, alt: "School Building" },
  { src: "/walkway.png", width: 500, height: 300, alt: "School Building" },
  { src: "/walkwaygal.png", width: 500, height: 300, alt: "School Building" },
  {
    src: "/suspendedslab.png",
    width: 300,
    height: 400,
    alt: "Before Deck Construction",
  },
];

export default function GalleryPage() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    768: 2,
    500: 1,
  };

  return (
    <div
      id="gallery"
      className="min-h-screen bg-gradient-to-b from-black via-[#2a2a2a] to-black text-white pt-20 px-4"
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Project Gallery
      </motion.h1>
      {domLoaded && (
        <Gallery>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: Math.random() * 0.2 }}
              >
                <Item
                  original={item.src}
                  thumbnail={item.src}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                >
                  {({ ref, open }) => (
                    <motion.div
                      ref={ref as any}
                      onClick={open}
                      className="cursor-pointer overflow-hidden rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        layout="intrinsic"
                        width={item.width}
                        height={item.height}
                        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </motion.div>
                  )}
                </Item>
              </motion.div>
            ))}
          </Masonry>
        </Gallery>
      )}
    </div>
  );
}
