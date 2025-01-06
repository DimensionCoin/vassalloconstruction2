import { Home,  } from "lucide-react";
import ConcreteMixerIcon from "../components/svg/concrete-mixer-icon";
import BollardIcon from "./svg/bollard-icon";
import RetainingWallIcon from "./svg/retaining-wall-icon";
import GrassIcon from "./svg/grass-icon";

export function Services() {
  const services = [
    {
      icon: ConcreteMixerIcon,
      title: "Concrete Work",
      description:
        "Specializing in concrete driveways, walkways, staircases, and suspended slabs for enhanced durability and aesthetics.",
    },
    {
      icon: RetainingWallIcon,
      title: "Retaining Walls",
      description:
        "Expert construction of retaining walls using interlock or brick to ensure proper soil stabilization and landscape enhancement.",
    },
    {
      icon: BollardIcon,
      title: "Bollard Installation",
      description:
        "Professional bollard installations for roadways and driveways to enhance safety and regulate traffic flow.",
    },
    {
      icon: Home,
      title: "Additional Foundations",
      description:
        "Providing foundation additions for homes and offices, ensuring structural integrity and support for expansions.",
    },
    {
      icon: GrassIcon,
      title: "Artifical Grass",
      description:
        "The best quality turf installed where ever you need it to give you the best looking grass all year long",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between ">
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Services
          </h2>
          <p className="text-white text-opacity-80">
            We provide a wide range of construction services tailored to meet
            your needs. Whether you need sturdy foundations or aesthetic
            concrete work, we have you covered.
          </p>
        </div>
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-black/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-light-brown/20 ${
                index % 2 === 0 ? "md:translate-y-10" : "md:translate-y-0"
              }`}
            >
              <service.icon className="w-12 h-12 text-light-brown mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
