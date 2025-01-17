import React, { useState } from "react";

const Navbar= ()=> {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white   w-full fixed z-10 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyPortfolio</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-teal-300">Home</a>
          <a href="#about" className="hover:text-teal-300">About</a>
          <a href="#projects" className="hover:text-teal-300">Projects</a>
          <a href="#skills" className="hover:text-teal-300">Skills</a>
          <a href="#contact" className="hover:text-teal-300">Contact</a>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
    {isOpen && (
    <div className="md:hidden bg-gray-800 p-4" >
    <a href="#hero" className="block py-2 hover:text-teal-300" >Home</a>
    <a href="#about" className="block py-2 hover:text-teal-300">About</a>
    <a href="#projects" className="block py-2 hover:text-teal-300" >Projects</a>
    <a href="#skills" className="block py-2 hover:text-teal-300">Skills</a>
    <a href="#contact" className="block py-2 hover:text-teal-300">Contact</a>

    </div>
    

    )}

    </nav>
  );
  

};

export default Navbar