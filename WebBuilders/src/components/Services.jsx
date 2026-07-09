import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Briefcase } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "We create fast, responsive, and modern websites tailored to your business needs.",
  },
  {
    icon: Briefcase,
    title: "Consulting",
    description:
      "Get expert guidance on your digital strategy, website planning, and online growth.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive interfaces designed to improve user experience and engagement.",
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

const Services = () => {
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
        <h1 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-secondary">Services</span>
        </h1>

        <p className="mt-4 text-gray-800 text-lg">
          We build websites worth visiting and experiences worth remembering.
        </p>
      </motion.div>

      {/* Service Cards */}
      <motion.div
        className="mt-16 grid gap-8 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl"
            >
              <Icon size={40} className="text-secondary mb-4" />

              <h2 className="text-2xl font-bold text-secondary mb-4">
                {service.title}
              </h2>

              <p className="text-gray-800">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Services;