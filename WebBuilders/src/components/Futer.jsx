import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side */}
        <h3 className="text-black text-center md:text-left">
          Made with ❤️ by © Web Masters.
        </h3>

        {/* Right Side */}
        <div className="flex gap-6">
          <a
            href="#"
            className="text-black hover:text-secondary transition"
          >
            <h1 className="instagram-logo">Instagram</h1>
          </a>

          <a
            href="#"
            className="text-black hover:text-secondary transition"
          >
            <h1 className="linkedin-logo">LinkedIn</h1>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;