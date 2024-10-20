import React from "react";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white font-inter min-h-screen">
      <Hero />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
