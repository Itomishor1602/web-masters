import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
    },
  }),
};

const stats = [
  {
    value: "50+",
    text: "Projects Completed",
    filled: true,
  },
  {
    value: "20+",
    text: "Happy Clients",
    filled: false,
  },
  {
    value: "3+",
    text: "Years Experience",
    filled: false,
  },
  {
    value: "100%",
    text: "Client Satisfaction",
    filled: true,
  },
];

const AboutUs = () => {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-secondary font-semibold uppercase tracking-wider">
            About Us
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            We Build Websites That Help Brands Grow.
          </h1>

          <p className="mt-6 text-gray-800 leading-8">
            At Web Builders, we believe every business deserves a website that
            not only looks beautiful but also delivers results. We specialize
            in creating modern, responsive, and high-performing websites that
            help businesses stand out in today's digital world.
          </p>

          <p className="mt-4 text-gray-800 leading-8">
            From web development and design to digital consulting, our mission
            is to transform ideas into engaging online experiences that attract
            customers and drive growth.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-secondary text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10 }}
              className={`rounded-2xl p-8 text-center ${
                stat.filled
                  ? "bg-secondary text-white"
                  : "border border-gray-200"
              }`}
            >
              <h2
                className={`text-4xl font-bold ${
                  stat.filled ? "" : "text-secondary"
                }`}
              >
                {stat.value}
              </h2>

              <p
                className={`mt-2 ${
                  stat.filled ? "" : "text-gray-600"
                }`}
              >
                {stat.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;