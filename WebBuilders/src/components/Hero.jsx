import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="flex min-h-[80vh] flex-col items-center justify-center text-center px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="max-w-5xl text-[clamp(2rem,6vw,6rem)] font-bold leading-[1.1]">
        Brand Growth Starts With The{" "}
       <span className="inline-block bg-linear-to-r from-[hsl(360,80%,45%)] to-[hsl(225,70%,60%)] bg-clip-text text-transparent">
  Perfect
</span> Website.
      </h1>

      <p className="mt-6 max-w-2xl text-base sm:text-lg text-gray-700">
        We're obsessed with crafting and shipping high-quality web products
        that help businesses stand out, attract customers, and grow online.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <button className="bg-secondary text-white px-8 py-4 rounded-full hover:opacity-90 transition duration-300 cursor-pointer">
          Let's Talk
        </button>

        {/* 
        <button className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg hover:bg-secondary hover:text-white transition duration-300 cursor-pointer">
          View My Work
        </button> 
        */}
      </div>
    </motion.section>
  );
};

export default Hero;