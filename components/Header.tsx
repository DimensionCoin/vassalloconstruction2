"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Drawer, DrawerContent, DrawerClose } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setDrawerOpen(false); // Close drawer when a section is selected
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-200",
        isScrolled
          ? "bg-black/80 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Image
            src="/vassalloicon.png"
            alt="Vassallo Construction"
            width={150}
            height={60}
            className="h-12 w-auto rounded-full cursor-pointer"
            onClick={() => {
              if (window.innerWidth < 768) {
                setDrawerOpen(!drawerOpen); // Only open drawer on small screens
              }
            }}
          />
        </div>

        {/* Navigation Menu for Medium+ Screens */}
        <nav className="hidden md:flex space-x-8">
          {["services", "projects", "gallery", "about", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-light-brown capitalize"
              >
                {item}
              </button>
            )
          )}
        </nav>

        {/* Drawer for Small Screens */}
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <DrawerContent
            className="fixed top-0 left-0 w-3/4 max-w-xs bg-white transform transition-transform duration-300"
            style={{
              transform: drawerOpen ? "translateX(0)" : "translateX(-100%)",
              height: "100vh",
            }}
          >
            <DrawerClose asChild>
              <button className="p-4">Close</button>
            </DrawerClose>
            <div className="p-4 overflow-y-auto">
              {["services", "projects", "gallery", "about", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block text-gray-900 hover:text-blue-500 capitalize py-2"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
