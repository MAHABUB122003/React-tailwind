import React, { PureComponent } from "react";

function Projects(){
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A responsive e-commerce platform built with React.",
      link: "#",
    },
    {
      id: 2,
      title: "Weather App",
      description: "A real-time weather application using APIs.",
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "My personal portfolio built with React.",
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "My personal portfolio built with React.",
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "My personal portfolio built with React.",
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "My personal portfolio built with React.",
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "My personal portfolio built with React.",
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "My personal portfolio built with React.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">

<div className="container mx-auto px-6">
  <h2 className="text-3xl text-center font-bold mb-6">Projects</h2>

  <div className="grid md:grid-cols-4 gap-6">
    {projects.map((project)=>(
 <div key={project.id} className="bg-gray-100 p-6 rounded-md shadow-xl shadow-blue-500" >
  
  <h3 className="text-xl font-bold mb-2 " >{project.title}</h3>
  <p className="text-gray-700" >{project.description}</p>
  <a href="project.link" className="block mt-4 text-teal-500  hover:underline " >View Project</a>
  
 </div>


    ))}
  </div>
</div>



    </section>


  );
};

export default Projects;
