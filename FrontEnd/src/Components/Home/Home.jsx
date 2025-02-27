import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios for fetching data
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const [searchQuery, setSearchQuery] = useState(""); // For input value
  const [locations, setLocations] = useState([]); // To store the fetched locations

  // Function to handle the search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Fetch the filtered locations based on search query
    axios
      .get("http://localhost:5000/api/locations", {
        params: { query },
      })
      .then((response) => {
        setLocations(response.data); // Set the search results
      })
      .catch(() => {
        // Handle the error silently (since we are not showing an error state anymore)
        setLocations([]);
      });
  };

  // Function to handle item click from dropdown
  // const handleItemClick = (locationName) => {
  //   setSearchQuery(locationName); // Populate the input with the selected location's name
  //   setLocations([]); // Clear the locations list to hide the dropdown
  // };

  const handleItemClick = (locationName) => {
    setSearchQuery(locationName); // Set the search query to the selected location
    setLocations([]); // Hide the dropdown

    const navigate = useNavigate(); // Declare navigate function here

    // Use the name of the location to navigate to the correct route
    if (locationName === "Kondhwa") {
      navigate("/location/Kondhwa");
    } else if (locationName === "Khadki") {
      navigate("/location/Khadki");
    } else {
      navigate(`/location/${locationName}`); // For any other locations
    }
  };

  return (
    <>
      <Navbar />

      {/* Container for the image and input */}
      <div className="bg-purple-700 h-[400px] flex flex-col justify-center items-center relative space-y-4 px-4 sm:px-6 md:px-8">
        {/* Image with responsive width and centered */}
        <img
          className="w-full sm:w-[80%] md:w-[70%] lg:w-[600px] xl:w-[600px] max-w-full mx-auto"
          src="https://images.ctfassets.net/473zoc40547p/5lJSxCy7K2re990tq9bXZp/feb976b19d178a889d5dd1d889faee8a/Animated_Headline_1.png?fm=avif&w=2560&fit=fill"
          alt="Animated Headline"
        />

        {/* Search Input Field */}
        <input
          type="text"
          placeholder="Search by address, city, or Zip..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full sm:w-[70%] md:w-[60%] lg:w-[500px] h-[50px] rounded-full border-none px-[16px] mt-4 transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        />

        {/* Results Dropdown */}
        {searchQuery && locations.length > 0 && (
          <div className="absolute mt-1 w-full bg-white shadow-lg rounded-2xl max-h-[300px] overflow-y-auto z-10 top-[100%] left-0">
            <ul>
              {locations.map((location) => (
                <Link to={`/location/${location.id}`} key={location.id}>
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
                </Link>
              ))}
            </ul>
          </div>
        )}

        {/* If no locations found */}
        {searchQuery && locations.length === 0 && (
          <div className="absolute mt-1 w-full bg-white shadow-lg rounded-2xl z-10 top-[100%] left-0">
            <p className="px-4 py-2 text-sm text-gray-500">No results found</p>
          </div>
        )}
      </div>

      {/* Memberships Section */}
      <div>
        <div className="flex flex-col sm:flex-row justify-center items-center bg-gray-100 py-8 space-y-8 sm:space-y-0 sm:space-x-8 sm:flex-wrap">
          {/* Card-1 */}
          <div className="bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 w-full sm:w-[500px] h-auto sm:h-[400px] p-6 rounded-3xl space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <p className="text-white font-bold text-xl">PF BLACK CARD®</p>
              <p className="bg-yellow-400 w-fit rounded-md font-semibold text-md px-3 py-1">
                Best Value
              </p>
            </div>

            <p className="text-white mt-4">Starting at</p>
            <p className="text-[rgb(255,230,0)] text-opacity-100 text-3xl font-bold">
              ₹240.99{" "}
              <span className="font-light text-xl text-white">/mo*</span>
            </p>
            <p className="text-white text-sm">plus taxes & fees</p>

            <p className="text-white text-xl w-full mt-4 font-normal">
              Access to any club, bring a guest anytime, PF+ premium digital
              workouts, and so much more!
            </p>

            <div className="flex items-center justify-between mt-8 flex-wrap">
              <p className="text-white text-xl underline cursor-pointer">
                Learn More
              </p>
              <Link
                to={"/SignUp"}
                className="text-purple-700 bg-white rounded-full h-14 w-32 font-semibold text-lg mt-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:bg-purple-700 hover:text-white hover:scale-105 hover:shadow-lg"
              >
                Join Now
              </Link>
            </div>
          </div>

          {/* Card-2 */}
          <div className="bg-white w-full sm:w-[500px] h-auto sm:h-[400px] p-6 rounded-3xl space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <p className="text-black text-lg font-bold">CLASSIC</p>
            </div>

            <p className="text-black mt-4">Starting at</p>
            <p className="text-[rgb(86,20,150)] text-opacity-100 text-3xl font-bold">
              ₹505 <span className="font-light text-xl text-black">/mo*</span>
            </p>
            <p className="text-black text-sm">plus taxes & fees</p>

            <p className="text-black text-xl w-full mt-4 font-normal">
              Our standard membership, with unlimited access to your home club
            </p>

            <div className="flex items-center justify-between mt-8 flex-wrap">
              <p className="text-[rgb(86,20,150)] text-xl underline cursor-pointer">
                Learn More
              </p>
              <Link
                to="/SignUp"
                className="text-white bg-[rgb(86,20,150)] rounded-full h-14 w-32 font-semibold text-lg mt-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:bg-[rgb(86,20,150)] hover:text-white hover:scale-105 hover:shadow-lg"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
