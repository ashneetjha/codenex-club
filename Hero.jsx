import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-extrabold">
        Code<span className="text-cyan">Nex</span>
      </h1>
      <p className="mt-4 text-grayText text-lg">Code. Create. Connect.</p>
      <Link to="events" smooth={true} duration={500}>
        <button className="mt-6 px-6 py-3 text-lg font-bold text-black bg-purple hover:bg-cyan transition-all rounded-lg">
          Join Us
        </button>
      </Link>
    </section>
  );
};

export default Hero;
