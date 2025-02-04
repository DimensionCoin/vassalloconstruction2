import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import About from "@/components/about";
import  Contact  from "@/components/contact";
import GalleryPage from "@/components/gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <GalleryPage/>
      <About />
      <Contact />
    </>
  );
}
