import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // State for error message

  // Handle input change
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (data.username === "" || data.email === "" || data.password === "") {
      setError("Please fill in all fields.");
      return;
    }

    // Get user data from localStorage
    const getData = JSON.parse(localStorage.getItem("user") || "[]");

    // Check if the user already exists in the stored data
    const userExists = getData.some((user) => user.email === data.email);

    if (userExists) {
      setError("User already exists. Please login.");
    } else {
      // Add new user data to the list
      getData.push(data);
      localStorage.setItem("user", JSON.stringify(getData));

      alert("SignUp Successful");
      navigate("/login"); // Navigate to login page after successful signup
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-700 via-yellow-400 to-purple-700 pt-24">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-xl w-full sm:w-96 md:w-96 lg:w-96 xl:w-96 transform transition-all duration-300 ease-in-out hover:scale-105"
        >
          <h2 className="text-2xl font-semibold text-center text-yellow-500 mb-6">
            Please Sign Up for accessing memeberships
          </h2>

          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}

          <div className="mb-6">
            <label htmlFor="username" className="block text-purple-700 mb-2">
              Name
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your Name"
              className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 ease-in-out mb-4 hover:ring-2 hover:ring-yellow-500"
              value={data.username}
              onChange={handleInput}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-purple-700 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your Email"
              className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 ease-in-out mb-4 hover:ring-2 hover:ring-yellow-500"
              value={data.email}
              onChange={handleInput}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-purple-700 mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your Password"
              className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 ease-in-out mb-4 hover:ring-2 hover:ring-yellow-500"
              value={data.password}
              onChange={handleInput}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-600 hover:scale-105 transition-all duration-300 ease-in-out transform"
          >
            Sign Up
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
