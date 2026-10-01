import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Business Landing Page",
    description:
      "A modern landing page built with React and Tailwind CSS for a startup company.",
    image: "/project1.png",
  },
  {
    title: "E-Commerce Website",
    description:
      "A responsive online store with product filtering and shopping cart functionality.",
    image: "/project2.png",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website with animations and dark mode support.",
    image: "/project3.png",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Work = () => {
  return (
    <section className="py-24 px-6 md:px-12">
      {/* Heading */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-secondary text-4xl md:text-5xl font-bold">
          Our Work
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Some of the websites and digital experiences we've crafted.
        </p>
      </motion.div>

      {/* Projects */}
      <motion.div
        className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-secondary">
                {project.title}
              </h2>

              <p className="mt-3 text-gray-600">
                {project.description}
              </p>

              <button className="mt-6 text-secondary font-semibold hover:opacity-80 transition">
                View Project →
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Work;