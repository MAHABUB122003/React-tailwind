import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-md shadow-md">
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-4 p-3 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 rounded-md"
          />
          <textarea
            placeholder="Message"
            className="w-full mb-4 p-3 rounded-md"
          ></textarea>
          <button className="bg-teal-500 px-6 py-2 rounded-md hover:bg-teal-400">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
