import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import Footer from "../Footer/Footer";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter details");
    } else {
      const getDetails = JSON.parse(localStorage.getItem("user"));

      if (getDetails) {
        const isValidUser = getDetails.some(
          (curValue) =>
            curValue.email === email && curValue.password === password
        );

        if (isValidUser) {
          alert("Login Successful");
          localStorage.setItem("loggedInUserEmail", email);
          navigate("/profile"); // Redirect to the Profile page after login
        } else {
          setMsg("Invalid Email or Password!");
        }
      } else {
        setMsg("No users found.");
      }

      // if (password === "") {
      //   alert("Please enter details");
      // } else {
      //   const getDetails = JSON.parse(localStorage.getItem("user"));

      //   if (getDetails) {
      //     const isValidUser = getDetails.some(
      //       (curValue) =>
      //         curValue.email === email && curValue.password === password
      //     );

      //     if (isValidUser) {
      //       alert("Login Successful");
      //       localStorage.setItem("loggedInUserEmail", email);
      //       navigate("/profile"); // Redirect to the Profile page after login
      //     } else {
      //       setMsg("Invalid Email or Password!");
      //     }
      //   } else {
      //     setMsg("No users found.");
      //   }
      // }
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-700 via-yellow-500 to-purple-700 pt-20">
        <p className="text-center text-white mb-4">{msg}</p>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-xl w-full sm:w-96 md:w-96 lg:w-96 xl:w-96 max-w-lg transform transition-all duration-300 ease-in-out hover:scale-105"
        >
          <h2 className="text-4xl font-bold text-purple-700 text-center mb-6">
            Login
          </h2>

          <div className="mb-6">
            <label htmlFor="email" className="block text-purple-700 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ease-in-out mb-4 hover:ring-2 hover:ring-purple-500"
              value={email}
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
              placeholder="Password"
              className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ease-in-out mb-4 hover:ring-2 hover:ring-purple-500"
              value={password}
              onChange={handleInput}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-purple-700 py-3 rounded-lg font-semibold hover:bg-yellow-600 hover:scale-105 transition-all duration-300 ease-in-out transform"
          >
            Login
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Login;
