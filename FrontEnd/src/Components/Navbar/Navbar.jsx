import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status
  const [dropdownVisible, setDropdownVisible] = useState(false); // State for the dropdown
  const navigate = useNavigate();

  const links = [
    { title: "Memberships", path: "/Memberships" },
    { title: "Workout With Us", path: "/Workout" },
    { title: "PF Store", path: "/PFStore" },
    { title: "My Account", path: "/Profile" },
  ];

  // Check if the user is logged in on component mount
  useEffect(() => {
    const userEmail = localStorage.getItem("loggedInUserEmail");
    if (userEmail) {
      setLoggedIn(true);
    }
  }, []);

  const handleNavigation = (path) => {
    navigate(path); // Navigate using react-router-dom's navigate function
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUserEmail"); // Clear the logged-in user
    setLoggedIn(false); // Update the state to reflect logged-out status
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="z-50 relative flex bg-white text-black px-4 py-4 items-center justify-between w-full">
      <h1
        className="text-2xl font-semibold cursor-pointer"
        onClick={() => handleNavigation("/")}
      >
        PlanetFitness
      </h1>

      <div className="flex items-center gap-4 lg:gap-8 w-full justify-between">
        {/* Desktop Navbar Links */}
        <div className="hidden lg:flex gap-6 w-full justify-start">
          {links.map((item) => (
            <span
              className={`flex items-center cursor-pointer px-4 py-2 rounded-xl transition-all duration-300 ${
                item.title === "Profile" || item.title === "Admin Profile"
                  ? "border border-blue-500 hover:bg-white hover:text-zinc-800"
                  : "hover:bg-gray-200 hover:text-purple-600"
              }`}
              key={item.title}
              onClick={() => handleNavigation(item.path)} // Use navigate here for all links
            >
              {item.title}
            </span>
          ))}
          {/* Conditionally render the "Book a Workout" button if logged in */}
          {loggedIn && (
            <span
              className="flex items-center cursor-pointer px-4 py-2 rounded-xl transition-all duration-300 hover:bg-gray-200 hover:text-purple-600"
              onClick={() => handleNavigation("/bookworkout")} // Navigate to Book a Workout page
            >
              Book a Workout
            </span>
          )}
        </div>

        {/* Displaying Login/Signup or Logout buttons */}
        <div className="hidden lg:flex gap-4">
          {!loggedIn ? (
            <>
              <span
                className="cursor-pointer px-8 py-3 rounded-xl border border-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white"
                onClick={() => handleNavigation("/login")} // Use navigate for login
              >
                Log In
              </span>

              <span
                className="cursor-pointer px-8 py-3 rounded-xl bg-blue-500 text-white transition-all duration-300 hover:bg-yellow-400 hover:text-black"
                onClick={() => handleNavigation("/signup")} // Use navigate for signup
              >
                Sign Up
              </span>
            </>
          ) : (
            <button
              className="cursor-pointer px-8 py-3 rounded-xl bg-red-500 text-white transition-all duration-300 hover:bg-red-600"
              onClick={handleLogout}
            >
              Log Out
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="block lg:hidden text-black text-2xl hover:text-zinc-400 cursor-pointer ml-auto"
          onClick={() => setMobileNav((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <div className="space-y-2">
            <div className="w-6 h-1 bg-black"></div>
            <div className="w-6 h-1 bg-black"></div>
            <div className="w-6 h-1 bg-black"></div>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`bg-white h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center lg:hidden transition-all duration-300 ${
          mobileNav ? "block" : "hidden"
        }`}
      >
        {links.map((item) => (
          <span
            className="cursor-pointer text-black mb-8 text-4xl font-semibold px-8 py-4 rounded-xl hover:bg-gray-200 hover:text-purple-600 transition-all duration-300"
            key={item.title}
            onClick={() => {
              handleNavigation(item.path); // Use navigate for mobile menu items
              setMobileNav(false); // Close menu on item click
            }}
          >
            {item.title}
          </span>
        ))}
        {/* Conditionally render the "Book a Workout" button if logged in */}
        {loggedIn && (
          <span
            className="cursor-pointer text-black mb-8 text-4xl font-semibold px-8 py-4 rounded-xl hover:bg-gray-200 hover:text-purple-600 transition-all duration-300"
            onClick={() => handleNavigation("/bookworkout")} // Navigate to Book a Workout page
          >
            Book a Workout
          </span>
        )}
        <span
          className="cursor-pointer px-12 mb-8 text-3xl font-semibold py-4 rounded-xl border border-blue-500 text-black hover:bg-purple-600 hover:text-white transition-all duration-300"
          onClick={() => handleNavigation("/login")} // Use navigate for login
        >
          Log In
        </span>
        <span
          className="cursor-pointer px-12 mb-8 text-3xl font-semibold py-4 rounded-xl bg-blue-500 text-white hover:bg-yellow-400 hover:text-black transition-all duration-300"
          onClick={() => handleNavigation("/signup")} // Use navigate for signup
        >
          Sign Up
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
