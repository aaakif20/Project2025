import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import whistle from "../Workout/whistle.png";
import profile from "../Workout/profile.png";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios for fetching data

function Workout() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const toggleOpen1 = () => setOpen1(!open1);
  const toggleOpen2 = () => setOpen2(!open2);
  const toggleOpen3 = () => setOpen3(!open3);

  const [searchQuery, setSearchQuery] = useState(""); // For input value
  const [locations, setLocations] = useState([]); // To store the fetched locations

  // Function to handle the search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Fetch the filtered locations based on search query
    if (query.trim()) {
      axios
        .get("http://localhost:5000/api/locations", { params: { query } })
        .then((response) => {
          setLocations(response.data); // Set the search results
        })
        .catch(() => {
          setLocations([]); // Handle errors and clear locations
        });
    } else {
      setLocations([]); // Clear results when query is empty
    }
  };

  // Function to handle item click from dropdown
  const handleItemClick = (locationName) => {
    setSearchQuery(locationName); // Populate the input with the selected location's name
    setLocations([]); // Clear the locations list to hide the dropdown
  };

  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <div className="w-full h-[250px] sm:h-[300px] lg:h-[350px] bg-gradient-to-r from-yellow-300 to-purple-700 flex items-center justify-center flex-col px-4">
        <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl text-center mb-4 sm:mb-6 lg:mb-8">
          Our Clubs Have Everything You Need
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="font-semibold text-white border-white border-2 rounded-full bg-gradient-to-r from-yellow-300 to-purple-700 w-[180px] h-[50px] sm:w-[200px] sm:h-[55px] transform hover:scale-105 transition-all duration-300 ease-in-out">
            3D Aerial View
          </button>

          <button className="font-semibold bg-white text-purple-700 border-2 rounded-full w-[180px] h-[50px] sm:w-[200px] sm:h-[55px] transform hover:scale-105 transition-all duration-300 ease-in-out">
            Virtual Tour
          </button>
        </div>
      </div>

      {/* Equipment Section */}
      <div className="w-full bg-white py-8">
        <h2 className="text-center text-lg sm:text-xl font-semibold mb-4">
          OUR EQUIPMENT AND AMENITIES
        </h2>

        <h1 className="text-center font-bold text-3xl sm:text-4xl lg:text-5xl mb-8">
          Tons of Cardio and Strength Equipment
        </h1>

        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
          <img
            className="w-full sm:w-[500px] h-auto sm:h-[480px] rounded-3xl mb-6 sm:mb-0"
            src="https://images.ctfassets.net/473zoc40547p/6qT40N4tV3O2kqPdPgHAwM/a10a915dcadb13ec08e49e38ffeb39b2/Functional.webp?fm=avif&w=2560&fit=fill"
            alt="Equipment"
          />

          <div className="text-center sm:text-left font-semibold text-black sm:w-[400px]">
            {/* Cardio Equipment */}
            <div className="flex items-center mb-3 sm:mb-4">
              <button
                onClick={toggleOpen1}
                className="text-white bg-purple-700 p-2 rounded-md mr-4 transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                {open1 ? "Hide Details" : "Show Details"}
              </button>
              <p className="cursor-pointer text-purple-700 text-3xl sm:text-4xl">
                Cardio Equipment
              </p>
            </div>
            <div
              className={`transition-all duration-500 ease-in-out text-gray-700 mb-4 sm:mb-6 w-[300px] text-xl max-h-[${
                open1 ? "500px" : "0px"
              }] overflow-hidden`}
            >
              {open1 && (
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Get your heart pumping with our range of cardio equipment.
                  </li>
                  <li>
                    Work at your own pace and achieve fitness goals faster.
                  </li>
                  <li>Perfect for endurance and weight loss training.</li>
                </ul>
              )}
            </div>

            {/* Strength Equipment */}
            <div className="flex items-center mb-3 sm:mb-4">
              <button
                onClick={toggleOpen2}
                className="text-white bg-purple-700 p-2 rounded-md mr-4 transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                {open2 ? "Hide Details" : "Show Details"}
              </button>
              <p className="cursor-pointer text-purple-700 text-3xl sm:text-4xl">
                Strength Equipment
              </p>
            </div>
            <div
              className={`transition-all duration-500 ease-in-out text-gray-700 mb-4 sm:mb-6 w-[300px] text-xl max-h-[${
                open2 ? "500px" : "0px"
              }] overflow-hidden`}
            >
              {open2 && (
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    User-friendly machines to target specific muscle groups.
                  </li>
                  <li>
                    Increase your strength and build muscle mass efficiently.
                  </li>
                  <li>Great for all levels from beginners to pros.</li>
                </ul>
              )}
            </div>

            {/* Functional Equipment */}
            <div className="flex items-center mb-3 sm:mb-4">
              <button
                onClick={toggleOpen3}
                className="text-white bg-purple-700 p-2 rounded-md mr-4 transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                {open3 ? "Hide Details" : "Show Details"}
              </button>
              <p className="cursor-pointer text-purple-700 text-3xl sm:text-4xl">
                Functional
              </p>
            </div>
            <div
              className={`transition-all duration-500 ease-in-out text-gray-700 w-[300px] text-xl max-h-[${
                open3 ? "500px" : "0px"
              }] overflow-hidden`}
            >
              {open3 && (
                <ul className="list-disc pl-6 space-y-2">
                  <li>Variety of exercises mimicking everyday movements.</li>
                  <li>Works multiple muscle groups simultaneously.</li>
                  <li>
                    Perfect for improving balance, flexibility, and overall
                    strength.
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="mt-[100px] mb-[100px] flex flex-col sm:flex-row items-center justify-center sm:space-x-12">
        {/* Image */}
        <img
          className="w-[90%] sm:w-[500px] h-auto rounded-3xl "
          src="https://images.ctfassets.net/473zoc40547p/6pvZ1nlF4rkcqSrerkqwaf/201d5cd2b9f603b592c96656d4a78be3/pf-black-card-spa.webp?fm=avif&w=2560&fit=fill"
          alt="PF Black Card Spa"
        />
        <div className="text-center sm:text-left sm:w-[400px] mt-8 sm:mt-0">
          {/* Heading */}
          <h1 className="font-bold text-3xl sm:text-4xl mb-4 sm:ml-0">
            PF Black Card Spa®
          </h1>

          {/* Description */}
          <p className="w-[90%] sm:w-[400px] mx-auto sm:ml-0 text-base text-gray-600 mb-6">
            Get unlimited access to our massage chairs, tanning beds, free guest
            passes, half-price drinks and more!
          </p>

          {/* Button */}
          <button className="mt-10 bg-purple-900 rounded-full w-[230px] h-[50px] text-white font-semibold transform hover:translate-x-5 hover:bg-purple-700 transition-all duration-500 ease-in-out mx-auto sm:ml-0">
            Explore PF Black Card
          </button>
        </div>
      </div>

      <div className="mb-10">
        <h1 className="text-center relative bottom-[10px] text-4xl font-bold sm:text-5xl md:text-6xl">
          Get Inspired
        </h1>
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center sm:gap-10 gap-8 space-y-8 sm:space-y-0">
          {/* First Image and Text */}
          <div className="flex flex-col items-center sm:items-start">
            <img
              className="w-[230px] h-[150px] rounded-2xl"
              src="https://images.ctfassets.net/473zoc40547p/zq75wZrDdiPgJaPR8F8HV/4d412653bd3b7cca31674eb1aa1cfd6f/pf-merch.webp?fm=avif&w=2560&fit=fill"
              alt="Workout Essentials"
            />
            <p className="font-semibold text-xl w-[240px] text-center mt-2 sm:text-2xl sm:w-[280px]">
              Workout essentials: what to bring to the gym
            </p>
            <a href="#" className="font-semibold text-blue-500 underline mt-2">
              Learn More
            </a>
          </div>

          {/* Second Image and Text */}
          <div className="flex flex-col items-center sm:items-start mt-4 sm:mt-0 sm:mr-12">
            <img
              className="w-[230px] h-[150px] rounded-2xl"
              src="https://images.ctfassets.net/473zoc40547p/3ff8VeN6xpndI8Wpb6QKjr/3e7cc5fd89176aa5f1579dfaa7389efd/pf-member-workout.webp?fm=avif&w=2560&fit=fill"
              alt="How to start working out"
            />
            <p className="font-semibold text-2xl w-[240px] text-center mt-2 sm:w-[280px]">
              How to start working out (if you’ve never exercised before)
            </p>
            <a href="#" className="font-semibold text-blue-500 underline mt-2">
              Learn More
            </a>
          </div>

          {/* Third Image and Text */}
          <div className="flex flex-col items-center sm:items-start mt-4 sm:mt-0">
            <img
              className="w-[230px] h-[150px] rounded-2xl"
              src="https://images.ctfassets.net/473zoc40547p/TM6Q7jCF1dTxiok2dNmD9/8a6f1b0403afd20c7c888c5e51f9fa12/pf-members-high-fives.webp?fm=avif&w=2560&fit=fill"
              alt="Motivational Quotes"
            />
            <p className="font-semibold text-2xl w-[240px] text-center mt-2 sm:w-[280px]">
              9 motivational workout quotes to get you into the gym
            </p>
            <a href="#" className="font-semibold text-blue-500 underline mt-2">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Search Input Field */}
      <h1 className="text-center font-bold text-3xl mt-[80px]">
        Find a Club Near You
      </h1>
      <div className="flex justify-center mt-5 mb-10">
        <div className="relative w-full sm:w-[80%] md:w-[70%] lg:w-[50%]">
          <input
            type="text"
            placeholder="Search by address, city, or Zip..."
            value={searchQuery}
            onChange={handleSearchChange} // Connect to the search handler
            className="w-full h-[60px] rounded-full border border-gray-300 focus:border-purple-500 bg-white px-[16px] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          />

          {/* Results Dropdown */}
          {searchQuery && locations.length > 0 && (
            <div
              className="absolute mt-2 w-full bg-white shadow-lg rounded-2xl max-h-[300px] overflow-y-auto z-10 top-full left-0"
              aria-live="assertive" // For better accessibility
            >
              <ul>
                {locations.map((location) => (
                  <li
                    key={location.id}
                    className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                    onClick={() => handleItemClick(location.name)} // Hide dropdown on item click
                  >
                    <h3 className="font-bold text-md">{location.name}</h3>
                    <p>{location.address}</p>
                    <p>
                      {location.city}, {location.state} {location.zip}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* If no locations found */}
          {searchQuery && locations.length === 0 && (
            <div className="absolute mt-2 w-full bg-white shadow-lg rounded-2xl z-10 top-full left-0">
              <p className="px-4 py-2 text-sm text-gray-500">
                No results found
              </p>
            </div>
          )}
        </div>
      </div>

      {/* <div className="mt-[100px] mb-[100px] text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Find a Club Near You
        </h1>
        <input
          className="border w-full sm:w-[500px] md:w-[600px] h-[70px] rounded-full border-gray-600 mt-6 sm:mt-8 md:mt-10 focus:border-purple-900 focus:outline-none px-4"
          type="text"
          placeholder="Search by address, city, or Zipcode"
        />
      </div> */}

      <div className="mt-[100px] bg-gray-100 h-[170px]">
        <p className="ml-[60px] font-thin text-sm py-[70px] text-gray-700">
          1.Amenities and Perks subject to availability and restrictions. See
          home club for details.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Workout;
