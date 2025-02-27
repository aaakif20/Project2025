import React, { useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios"; // Import axios
import emailjs from "emailjs-com"; // Import Email.js
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

function Bookworkout() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const sendEmail = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const formData = new FormData(form.current);

    const data = {
      from_name: formData.get("from_name"),
      from_email: formData.get("from_email"),
      workout_date: formData.get("workout_date"),
      additional_queries: formData.get("additional_queries"),
    };

    try {
      // Send the form data to the backend API
      const response = await axios.post(
        "http://localhost:5000/bookworkout",
        data
      );
      setSuccess(response.data);

      // After successful submission, send email using Email.js
      const emailData = {
        to_name: formData.get("from_name"), // The person receiving the email
        from_name: formData.get("from_name"),
        workout_date: formData.get("workout_date"),
      };

      // Send email using Email.js
      await emailjs.send(
        "service_cx86kdf", // Your Email.js service ID
        "template_nb1nm6e", // Your Email.js template ID
        emailData, // Data to send in the email
        "4Xi9XB2Un894nRCOS" // Your Email.js public key (replace 'YOUR_PUBLIC_KEY' with the actual key)
      );

      // Redirect to Profile.jsx page after successful submission
      navigate("/profile"); // Adjust the path based on your routes
    } catch (err) {
      setError("There was an error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-600 via-yellow-500 to-purple-600 p-4">
        <form
          method="POST"
          ref={form}
          onSubmit={sendEmail}
          className="bg-[#2c3e50] p-6 rounded-lg shadow-lg w-full max-w-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
        >
          {/* Heading */}
          <h2 className="text-yellow-500 text-2xl font-bold mb-6 text-center animate__animated animate__fadeIn">
            Fill the form for booking a workout
          </h2>

          {/* Name Field */}
          <label className="block text-white text-sm mb-2">Name</label>
          <input
            type="text"
            name="from_name"
            required
            className="w-full p-3 mb-4 rounded-2xl bg-[#ecf0f1] text-gray-700 text-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:bg-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100"
          />

          {/* Email Field */}
          <label className="block text-white text-sm mb-2">Email</label>
          <input
            type="email"
            name="from_email"
            required
            className="w-full p-3 mb-4 rounded-2xl bg-[#ecf0f1] text-gray-700 text-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:bg-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100"
          />

          {/* Choose a Date for Workout */}
          <label className="block text-white text-sm mb-2">
            Choose a date for workout
          </label>
          <input
            type="date"
            name="workout_date"
            required
            className="w-full p-3 mb-4 rounded-2xl bg-[#ecf0f1] text-gray-700 text-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:bg-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100"
          />

          {/* Additional Queries Field */}
          <label className="block text-white text-sm mb-2">
            Any additional queries
          </label>
          <textarea
            name="additional_queries"
            required
            className="w-full p-3 mb-4 rounded-2xl bg-[#ecf0f1] text-gray-700 text-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:bg-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100"
          ></textarea>

          {/* Submit Button */}
          <input
            type="submit"
            value={loading ? "Sending..." : "Send"}
            className="w-full py-3 mt-4 bg-[#9b59b6] text-white font-bold rounded-2xl cursor-pointer transition-all duration-300 ease-in-out transform hover:bg-[#8e44ad] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            disabled={loading}
          />

          {/* Display success or error message */}
          {success && <div className="text-green-500 mt-4">{success}</div>}
          {error && <div className="text-red-500 mt-4">{error}</div>}
        </form>
      </div>
    </>
  );
}

export default Bookworkout;
