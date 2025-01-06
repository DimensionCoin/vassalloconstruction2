"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Tyler Vassallo",
    role: "Founder",
    image: "/Tyler.jpg",
  },
];

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-b from-black via-[#1a1a1a] to-[#2a2a2a] text-white"
    >
      <motion.div
        className="container mx-auto px-4 py-16"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          variants={fadeIn}
        >
          About Vassallo Construction
        </motion.h1>

        <motion.section className="mb-16" variants={fadeIn}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-light-brown">
            Our Story
          </h2>
          <p className="text-gray-300 mb-4">
            Founded in 2020, we have built our company on the principles of
            listening to our clients, understanding their vision, and delivering
            exceptional results. We are passionate about using the best
            materials and offering a fair price for the high-quality work we
            provide.
          </p>
          <p className="text-gray-300">
            We embrace challenges and thrive on creating solutions that meet and
            exceed our clients&apos; expectations. From start to finish, our
            goal is to ensure that every client feels comfortable and confident
            throughout the entire process.
          </p>
        </motion.section>

        <motion.section className="mb-16" variants={fadeIn}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-light-brown">
            Our Values
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Commitment to quality and craftsmanship</li>
            <li>Innovation in construction techniques and materials</li>
            <li>Sustainability and environmental responsibility</li>
            <li>Safety as our top priority</li>
            <li>Building lasting relationships with clients and partners</li>
          </ul>
        </motion.section>

        <motion.section variants={fadeIn}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-light-brown">
            Meet the Owner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-black/30 p-6 rounded-lg text-center relative"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-light-brown">{member.role}</p>

                {/* Instagram Icon */}
                <a
                  href="https://www.instagram.com/vassalloconstruction/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 text-light-brown hover:text-white transition-colors duration-300"
                >
                  <FaInstagram size={24} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
