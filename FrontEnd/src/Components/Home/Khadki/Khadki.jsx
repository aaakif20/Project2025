import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const Khadki = () => {
  return (
    <>
      <Navbar />
      <div className="bg-purple-700 h-[400px] flex flex-col justify-center items-center relative space-y-4 px-4 sm:px-6 md:px-8">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mt-8
      text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-400
      animate__animated animate__fadeIn animate__delay-1s animate__zoomIn
      transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-300 hover:cursor-pointer"
        >
          <span className="font-poppins">Welcome to</span>{" "}
          <span className="font-poppins">PlanetFitness Khadki</span>
          <br />
          <span className="font-poppins text-lg sm:text-xl text-white mt-2">
            "Khadki cha murgi, fitness la ladki!" <br />
            "Aaj chalu, fit rahil!" <br />
            Join us, the fitness revolution is happening right here in Khadki.
          </span>
        </h1>
      </div>
      <section className="bg-yellow-100 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-700 transition-transform duration-700 transform hover:scale-105 hover:text-yellow-400">
          About Our Khadki Branch
        </h2>
        <p className="text-2xl sm:text-3xl text-gray-700 mb-4 opacity-0 translate-y-4 transition-all duration-1000 delay-300 ease-out hover:opacity-100 hover:translate-y-0 text-gray-800">
          "Khadki cha gym, fit rahil, mast rahil!" <br />
          Our Khadki location offers a massive range of fitness equipment, group
          classes, personal training, and much more, all under one roof!
        </p>
        <div className="flex justify-center mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1303170503365!2d73.84571777344392!3d18.568162667722234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1000560f4c3%3A0x3e9108f740baf43e!2sA%20S%20FITNESS%20ZONE!5e0!3m2!1sen!2sin!4v1738942317932!5m2!1sen!2sin"
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
          Ready to get fit the Khadki way? We're located in the heart of Khadki,
          a buzzing community where fitness meets fun! Unlock your fitness goals
          with us and become part of a community that cheers you on through
          every rep, set, and step of the way.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default Khadki;
