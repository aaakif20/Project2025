import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const PFstore = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          background: "linear-gradient(to right, #3a3a82, #0066cc, #d9a600)", // Blue gradient with Planet Fitness yellow
          color: "white", // White text for contrast
          height: "100vh", // Full viewport height
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          flexDirection: "column", // Stack text vertically
          animation: "fadeIn 1.5s ease-out", // Fade-in animation for the whole container
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            animation: "moveText 5s linear infinite", // Move text continuously
            mixBlendMode: "difference", // Ensures text is visible on varying backgrounds
          }}
        >
          WORK IN PROGRESS
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            marginTop: "20px",
            animation: "moveText 5s linear infinite", // Move text continuously
            mixBlendMode: "difference", // Makes sure the text contrasts well
          }}
        >
          We're sorry for the inconvenience. The PF Store is coming soon!
        </p>
      </div>
      <Footer />
      {/* CSS styles for animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes moveText {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px); /* Moves up */
            }
            100% {
              transform: translateY(0); /* Moves back down */
            }
          }
        `}
      </style>
    </>
  );
};

export default PFstore;
