import React from "react";
import { FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 bg-black text-center border-t border-gray-800">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" className="hover:text-cyan">
          <FaGithub size={24} />
        </a>
        <a href="#" className="hover:text-cyan">
          <FaDiscord size={24} />
        </a>
        <a href="#" className="hover:text-cyan">
          <FaTwitter size={24} />
        </a>
      </div>
      <p className="text-grayText">&copy; 2024 Codenex Club. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
