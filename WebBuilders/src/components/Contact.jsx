import React from "react";
import { motion } from "framer-motion";

const fieldVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const Contact = () => {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-secondary text-xl font-semibold uppercase tracking-wider">
            Contact Us
          </p>

          <h1 className="text-secondary mt-4 text-4xl md:text-5xl font-bold">
            Let's Build Something Amazing Together.
          </h1>

          <p className="mt-6 text-gray-800 leading-8">
            Have a project in mind or need a website for your business? We'd
            love to hear from you. Send us a message and let's discuss how we
            can help bring your ideas to life.
          </p>

          <div className="mt-8 space-y-4">
            <p className="text-gray-800">
              📧 hello@webbuilders.com
            </p>

            <p className="text-gray-800">
              📍 Cross River State, Nigeria
            </p>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl border border-gray-200 p-8 shadow-sm"
        >
          <form className="space-y-6">
            <motion.div
              custom={0}
              variants={fieldVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label className="block mb-2 font-medium">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-secondary transition-colors"
              />
            </motion.div>

            <motion.div
              custom={1}
              variants={fieldVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-secondary transition-colors"
              />
            </motion.div>

            <motion.div
              custom={2}
              variants={fieldVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label className="block mb-2 font-medium">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-secondary resize-none transition-colors"
              />
            </motion.div>

            <motion.button
              custom={3}
              variants={fieldVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-secondary text-white py-3 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;