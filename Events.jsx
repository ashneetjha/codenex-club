import React from "react";

const Events = () => {
  const projects = [
    { title: "Hackathon 2024", description: "Participate and win exciting prizes!" },
    { title: "AI Workshop", description: "Learn the basics of AI and ML." },
    { title: "Web Dev Bootcamp", description: "Master frontend and backend development." },
  ];

  return (
    <section id="events" className="py-16 px-6 bg-black text-center">
      <h2 className="text-4xl font-bold text-cyan mb-8">Our Events & Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border border-gray-700 rounded-lg hover:bg-cyan hover:text-black transition-all"
          >
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-grayText mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
