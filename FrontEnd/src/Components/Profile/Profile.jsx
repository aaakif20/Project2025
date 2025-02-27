import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

const Profile = () => {
  // State to store the user details
  const [user, setUser] = useState(null);

  // Check if the user is logged in and fetch their details from localStorage
  useEffect(() => {
    const loggedInUserEmail = localStorage.getItem("loggedInUserEmail"); // Get the logged-in user's email from localStorage
    const users = JSON.parse(localStorage.getItem("user")); // Retrieve user list from localStorage

    if (loggedInUserEmail && users) {
      const loggedInUser = users.find(
        (user) => user.email === loggedInUserEmail
      );
      if (loggedInUser) {
        setUser(loggedInUser); // Set user details if found
      }
    }
  }, []);

  return (
    <>
      <Navbar /> {/* Navbar */}
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-700 via-yellow-500 to-purple-700">
        {/* Check if user details are available */}
        {user ? (
          <div className="bg-white p-8 rounded-xl shadow-xl w-full sm:w-96 md:w-96 lg:w-96 xl:w-96">
            <h2 className="text-4xl font-bold text-purple-700 text-center mb-6">
              Welcome, {user.username}
            </h2>
            <p className="text-lg text-gray-700 text-center">
              <strong>Email:</strong> {user.email}
            </p>
            {/* Add more user information if needed */}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-xl shadow-xl w-full sm:w-96 md:w-96 lg:w-96 xl:w-96">
            <h2 className="text-4xl font-bold text-purple-700 text-center mb-6">
              You are not logged in!
            </h2>
            <p className="text-lg text-gray-700 text-center">
              Please log in to view your profile.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
