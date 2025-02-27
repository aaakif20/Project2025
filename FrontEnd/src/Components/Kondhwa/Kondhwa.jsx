import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Kondhwa = () => {
  return (
    <>
      <Navbar />

      <div className="bg-purple-700 h-[400px] flex flex-col justify-center items-center relative space-y-4 px-4 sm:px-6 md:px-8">
        {/* Image with responsive width and centered */}
        {/* <img
    className="w-full sm:w-[80%] md:w-[70%] lg:w-[600px] xl:w-[600px] max-w-full mx-auto"
    src="https://images.ctfassets.net/473zoc40547p/5lJSxCy7K2re990tq9bXZp/feb976b19d178a889d5dd1d889faee8a/Animated_Headline_1.png?fm=avif&w=2560&fit=fill"
    alt="Animated Headline"
  /> */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mt-8
      text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-400
      animate__animated animate__fadeIn animate__delay-1s animate__zoomIn
      transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-300 hover:cursor-pointer"
        >
          <span className="font-poppins">Welcome to</span>{" "}
          <span className="font-poppins">PlanetFitness Kondhwa</span>
          <br />
          <span className="font-poppins text-lg sm:text-xl text-white mt-2">
            "Apan Kondhwa cha! Fit rahane is the way to go!" <br />
            Your fitness journey starts with us, right here in the heart of
            Kondhwa.
          </span>
        </h1>
      </div>

      <div className="bg-red-500 ">
        <section className="bg-yellow-100 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-700 transition-transform duration-700 transform hover:scale-105 hover:text-yellow-400">
            About Our Kondhwa Branch
          </h2>
          <p className="text-2xl sm:text-3xl text-gray-700 mb-4 opacity-0 translate-y-4 transition-all duration-1000 delay-300 ease-out hover:opacity-100 hover:translate-y-0 text-gray-800">
            Our Kondhwa location offers a wide range of fitness equipment, group
            classes, personal training, and more!
          </p>
          <div className="flex justify-center mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2641577770146!2d73.89106847344107!3d18.471690070668988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb734fde26f7%3A0xe38f88987f14ba93!2sFit-Holiq%20Gym!5e0!3m2!1sen!2sin!4v1738940315004!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-1000 transform hover:scale-105"
            ></iframe>
          </div>
          <p className="text-2xl sm:text-3xl text-gray-700 mb-4 opacity-0 translate-y-4 transition-all duration-1000 delay-500 ease-out hover:opacity-100 hover:translate-y-0 text-gray-800 bg-transparent">
            Discover your fitness journey with us! Conveniently located in the
            vibrant heart of Kondhwa, we're here to help you unlock your full
            potential and achieve your fitness goals, with a community that
            motivates and supports you every step of the way.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Kondhwa;
