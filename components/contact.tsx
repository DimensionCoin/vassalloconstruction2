"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring", // Provides a smoother animation effect
      stiffness: 100, // Adjust these values based on desired 'bounce' effect
      damping: 10, // Controls the oscillation
      mass: 0.75, // Mass of the element, affects responsiveness of the spring
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const isInView = useInView(divRef, { once: true, margin: "-100px" });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const name = form.user_name.value;
    const email = form.user_email.value;
    const city = form.user_city.value;
    const message = form.message.value;

    const mailtoLink = `mailto:tylervassalloconstruction@gmail.com?subject=New Contact from ${name}&body=Name: ${name}%0DEmail: ${email}%0DCity: ${city}%0D%0DMessage:%0D${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-[#1d1d1d] to-[#373737] text-gray-200"
    >
      <motion.div
        ref={divRef}
        className="container mx-auto p-4"
        variants={variants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <motion.div className="order-2 md:order-1">
            <h1 className="text-4xl font-bold mb-4">Want to get in Touch?</h1>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl">Mail</h2>
                <span>tylervassalloconstruction@gmail.com</span>
              </div>
              <div>
                <h2 className="text-xl">Location</h2>
                <span>GTA Ontario Canada</span>
              </div>
              <div>
                <h2 className="text-xl">Phone</h2>
                <span>+1 4167023183</span>
              </div>
            </div>
          </motion.div>
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="order-1 md:order-2 space-y-4 p-4 bg-white bg-opacity-20 rounded-lg shadow text-black"
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }} // Delays form animation slightly
          >
            <input
              type="text"
              required
              placeholder="Name"
              name="user_name"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              required
              placeholder="Email"
              name="user_email"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              required
              placeholder="City"
              name="user_city"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              rows={4}
              placeholder="Message"
              name="message"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full p-2 bg-black text-white rounded hover:bg-white hover:text-black"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
