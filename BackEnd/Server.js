// const express = require("express");
// const cors = require("cors"); // Import the CORS package
// const bodyParser = require("body-parser");
// const app = express();

// const port = 5000;
// const PORT = process.env.PORT || 5000;

// // Enable CORS for all origins (or you can specify specific origins if needed)
// app.use(cors());
// app.use(express.json()); // For parsing JSON bodies
// app.use(bodyParser.json());

// const gymLocations = [
//   {
//     id: 1,
//     name: "Planet Fitness - Kondhwa",
//     address: "Kondhwa, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411048",
//   },
//   {
//     id: 2,
//     name: "Planet Fitness - Dapodi",
//     address: "Dapodi, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411012",
//   },
//   {
//     id: 3,
//     name: "Planet Fitness - Khadki",
//     address: "Khadki, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411003",
//   },
//   {
//     id: 4,
//     name: "Planet Fitness - Pimpri",
//     address: "Pimpri, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411017",
//   },
//   {
//     id: 5,
//     name: "Planet Fitness - Wakad",
//     address: "Wakad, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411057",
//   },
//   {
//     id: 6,
//     name: "Planet Fitness - Baner",
//     address: "Baner, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411045",
//   },
//   {
//     id: 7,
//     name: "Planet Fitness - Kothrud",
//     address: "Kothrud, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411038",
//   },
//   {
//     id: 8,
//     name: "Planet Fitness - Hadapsar",
//     address: "Hadapsar, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411028",
//   },
//   {
//     id: 9,
//     name: "Planet Fitness - Viman Nagar",
//     address: "Viman Nagar, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411014",
//   },
//   {
//     id: 10,
//     name: "Planet Fitness - Hinjewadi",
//     address: "Hinjewadi, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411057",
//   },
//   {
//     id: 11,
//     name: "Planet Fitness - Shivaji Nagar",
//     address: "Shivaji Nagar, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411005",
//   },
//   {
//     id: 12,
//     name: "Planet Fitness - Aundh",
//     address: "Aundh, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411007",
//   },
//   {
//     id: 13,
//     name: "Planet Fitness - Pimple Saudagar",
//     address: "Pimple Saudagar, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411027",
//   },
//   {
//     id: 14,
//     name: "Planet Fitness - Alandi",
//     address: "Alandi, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411012",
//   },
//   {
//     id: 15,
//     name: "Planet Fitness - Bhosari",
//     address: "Bhosari, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411039",
//   },
//   {
//     id: 16,
//     name: "Planet Fitness - Chinchwad",
//     address: "Chinchwad, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411019",
//   },
//   {
//     id: 17,
//     name: "Planet Fitness - Pune Camp",
//     address: "Pune Camp, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411001",
//   },
//   {
//     id: 18,
//     name: "Planet Fitness - Narhe",
//     address: "Narhe, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411041",
//   },
//   {
//     id: 19,
//     name: "Planet Fitness - Somwar Peth",
//     address: "Somwar Peth, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411011",
//   },
//   {
//     id: 20,
//     name: "Planet Fitness - Kharadi",
//     address: "Kharadi, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411014",
//   },
//   {
//     id: 21,
//     name: "Planet Fitness - Magarpatta",
//     address: "Magarpatta, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411013",
//   },
//   {
//     id: 22,
//     name: "Planet Fitness - Dhankawadi",
//     address: "Dhankawadi, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411043",
//   },
//   {
//     id: 23,
//     name: "Planet Fitness - Pashan",
//     address: "Pashan, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411021",
//   },
//   {
//     id: 24,
//     name: "Planet Fitness - Balewadi",
//     address: "Balewadi, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411045",
//   },
//   {
//     id: 25,
//     name: "Planet Fitness - Undri",
//     address: "Undri, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411060",
//   },
//   {
//     id: 26,
//     name: "Planet Fitness - Katraj",
//     address: "Katraj, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411046",
//   },
//   {
//     id: 27,
//     name: "Planet Fitness - Hadapsar Industrial Estate",
//     address: "Hadapsar Industrial Estate, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411028",
//   },
//   {
//     id: 28,
//     name: "Planet Fitness - Maval",
//     address: "Maval, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "410507",
//   },
//   {
//     id: 29,
//     name: "Planet Fitness - Hinjewadi Phase 2",
//     address: "Hinjewadi Phase 2, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411057",
//   },
//   {
//     id: 30,
//     name: "Planet Fitness - Bavdhan",
//     address: "Bavdhan, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411021",
//   },
//   {
//     id: 31,
//     name: "Planet Fitness - Keshav Nagar",
//     address: "Keshav Nagar, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411036",
//   },
//   {
//     id: 32,
//     name: "Planet Fitness - Dhanori",
//     address: "Dhanori, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411015",
//   },
//   {
//     id: 33,
//     name: "Planet Fitness - Warje",
//     address: "Warje, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411058",
//   },
//   {
//     id: 34,
//     name: "Planet Fitness - Shankar Sheth Road",
//     address: "Shankar Sheth Road, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411037",
//   },
//   {
//     id: 35,
//     name: "Planet Fitness - Sinhagad Road",
//     address: "Sinhagad Road, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411030",
//   },
//   {
//     id: 36,
//     name: "Planet Fitness - Bopodi",
//     address: "Bopodi, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411020",
//   },
//   {
//     id: 37,
//     name: "Planet Fitness - Kalyani Nagar",
//     address: "Kalyani Nagar, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411014",
//   },
//   {
//     id: 38,
//     name: "Planet Fitness - Baner Balewadi Road",
//     address: "Baner Balewadi Road, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411045",
//   },
//   {
//     id: 39,
//     name: "Planet Fitness - Shivane",
//     address: "Shivane, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411023",
//   },
//   {
//     id: 40,
//     name: "Planet Fitness - Keshav Nagar",
//     address: "Keshav Nagar, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411006",
//   },
//   {
//     id: 41,
//     name: "Planet Fitness - Yerwada",
//     address: "Yerwada, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411006",
//   },
//   {
//     id: 42,
//     name: "Planet Fitness - Sangvi",
//     address: "Sangvi, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411027",
//   },
//   {
//     id: 43,
//     name: "Planet Fitness - NIBM Road",
//     address: "NIBM Road, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411048",
//   },
//   {
//     id: 44,
//     name: "Planet Fitness - Vetal Hill",
//     address: "Vetal Hill, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411029",
//   },
//   {
//     id: 45,
//     name: "Planet Fitness - Nandini Nagar",
//     address: "Nandini Nagar, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411014",
//   },
//   {
//     id: 46,
//     name: "Planet Fitness - Mundhwa",
//     address: "Mundhwa, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411036",
//   },
//   {
//     id: 47,
//     name: "Planet Fitness - Kalyan Nagar",
//     address: "Kalyan Nagar, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411023",
//   },
//   {
//     id: 48,
//     name: "Planet Fitness - Koregaon Park",
//     address: "Koregaon Park, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411001",
//   },
//   {
//     id: 49,
//     name: "Planet Fitness - Sopan Baug",
//     address: "Sopan Baug, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411028",
//   },
//   {
//     id: 50,
//     name: "Planet Fitness - Magarpatta City",
//     address: "Magarpatta City, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411013",
//   },

//   {
//     id: 51,
//     name: "Planet Fitness - Nana Peth",
//     address: "Nana Peth, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411002",
//   },
//   {
//     id: 52,
//     name: "Planet Fitness - Ganesh Peth",
//     address: "Ganesh Peth, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411042",
//   },
//   {
//     id: 53,
//     name: "Planet Fitness - Appa Balwant Chowk",
//     address: "Appa Balwant Chowk, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411042",
//   },
//   {
//     id: 54,
//     name: "Planet Fitness - Somwar Peth",
//     address: "Somwar Peth, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411011",
//   },
//   {
//     id: 55,
//     name: "Planet Fitness - Shivaji Nagar",
//     address: "Shivaji Nagar, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411005",
//   },
//   {
//     id: 56,
//     name: "Planet Fitness - Budhwar Peth",
//     address: "Budhwar Peth, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411002",
//   },
//   {
//     id: 57,
//     name: "Planet Fitness - Kasba Peth",
//     address: "Kasba Peth, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411011",
//   },
//   {
//     id: 58,
//     name: "Planet Fitness - Narpatgiri",
//     address: "Narpatgiri, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411003",
//   },
//   {
//     id: 59,
//     name: "Planet Fitness - Furgusson College Road",
//     address: "Furgusson College Road, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411004",
//   },
//   {
//     id: 60,
//     name: "Planet Fitness - Rasta Peth",
//     address: "Rasta Peth, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411011",
//   },
//   {
//     id: 61,
//     name: "Planet Fitness - Jangli Maharaj Road",
//     address: "Jangli Maharaj Road, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411005",
//   },
//   {
//     id: 62,
//     name: "Planet Fitness - Shukrawar Peth",
//     address: "Shukrawar Peth, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411002",
//   },
//   {
//     id: 63,
//     name: "Planet Fitness - Sadashiv Peth",
//     address: "Sadashiv Peth, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411030",
//   },
//   {
//     id: 64,
//     name: "Planet Fitness - Ghole Road",
//     address: "Ghole Road, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411005",
//   },
//   {
//     id: 65,
//     name: "Planet Fitness - Bhavani Peth",
//     address: "Bhavani Peth, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411042",
//   },
//   {
//     id: 66,
//     name: "Planet Fitness - NIBM Road",
//     address: "NIBM Road, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411048",
//   },
//   {
//     id: 67,
//     name: "Planet Fitness - Bhim Nagar",
//     address: "Bhim Nagar, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411046",
//   },
//   {
//     id: 68,
//     name: "Planet Fitness - Raghunath Peth",
//     address: "Raghunath Peth, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411030",
//   },
//   {
//     id: 69,
//     name: "Planet Fitness - Vishrantwadi",
//     address: "Vishrantwadi, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411015",
//   },
//   {
//     id: 70,
//     name: "Planet Fitness - Gultekdi",
//     address: "Gultekdi, Pune",
//     city: "Pune",
//     state: "Maharashtra",
//     zip: "411037",
//   },
// ];

// // Endpoint to get filtered locations based on search query
// app.get("/api/locations", (req, res) => {
//   const query = req.query.query?.toLowerCase(); // Get search query from request

//   if (!query) {
//     return res.json(gymLocations); // Return all locations if no query is provided
//   }

//   // Filter the gym locations based on the query (searching name, address, city, or zip)
//   const filteredLocations = gymLocations.filter((location) => {
//     return (
//       location.name.toLowerCase().includes(query) ||
//       location.address.toLowerCase().includes(query) ||
//       location.city.toLowerCase().includes(query) ||
//       location.zip.includes(query)
//     );
//   });

//   res.json(filteredLocations); // Send the filtered locations as the response
// });

// app.listen(port, () => {
//   console.log(`Backend API running at http://localhost:${port}`);
// });

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON requests
app.use(express.json()); // For parsing JSON bodies

// MySQL Connection setup
const db = mysql.createConnection({
  host: "localhost", // or the host where your MySQL is running (use the IP if it's remote)
  user: "root", // MySQL username
  password: "", // MySQL password
  database: "planetfitness", // Database name
});

// Establish MySQL connection
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.message);
    return;
  }
  console.log("Connected to MySQL");
});

// Gym locations data
const gymLocations = [
  {
    id: 1,
    name: "Planet Fitness - Kondhwa",
    address: "Kondhwa, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411048",
  },
  {
    id: 2,
    name: "Planet Fitness - Dapodi",
    address: "Dapodi, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411012",
  },
  {
    id: 3,
    name: "Planet Fitness - Khadki",
    address: "Khadki, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411003",
  },
  {
    id: 4,
    name: "Planet Fitness - Pimpri",
    address: "Pimpri, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411017",
  },
  {
    id: 5,
    name: "Planet Fitness - Wakad",
    address: "Wakad, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411057",
  },
  {
    id: 6,
    name: "Planet Fitness - Baner",
    address: "Baner, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411045",
  },
  {
    id: 7,
    name: "Planet Fitness - Kothrud",
    address: "Kothrud, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411038",
  },
  {
    id: 8,
    name: "Planet Fitness - Hadapsar",
    address: "Hadapsar, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411028",
  },
  {
    id: 9,
    name: "Planet Fitness - Viman Nagar",
    address: "Viman Nagar, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411014",
  },
  {
    id: 10,
    name: "Planet Fitness - Hinjewadi",
    address: "Hinjewadi, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411057",
  },
  {
    id: 11,
    name: "Planet Fitness - Shivaji Nagar",
    address: "Shivaji Nagar, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411005",
  },
  {
    id: 12,
    name: "Planet Fitness - Aundh",
    address: "Aundh, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411007",
  },
  {
    id: 13,
    name: "Planet Fitness - Pimple Saudagar",
    address: "Pimple Saudagar, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411027",
  },
  {
    id: 14,
    name: "Planet Fitness - Alandi",
    address: "Alandi, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411012",
  },
  {
    id: 15,
    name: "Planet Fitness - Bhosari",
    address: "Bhosari, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411039",
  },
  {
    id: 16,
    name: "Planet Fitness - Chinchwad",
    address: "Chinchwad, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411019",
  },
  {
    id: 17,
    name: "Planet Fitness - Pune Camp",
    address: "Pune Camp, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411001",
  },
  {
    id: 18,
    name: "Planet Fitness - Narhe",
    address: "Narhe, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411041",
  },
  {
    id: 19,
    name: "Planet Fitness - Somwar Peth",
    address: "Somwar Peth, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411011",
  },
  {
    id: 20,
    name: "Planet Fitness - Kharadi",
    address: "Kharadi, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411014",
  },
  {
    id: 21,
    name: "Planet Fitness - Magarpatta",
    address: "Magarpatta, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411013",
  },
  {
    id: 22,
    name: "Planet Fitness - Dhankawadi",
    address: "Dhankawadi, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411043",
  },
  {
    id: 23,
    name: "Planet Fitness - Pashan",
    address: "Pashan, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411021",
  },
  {
    id: 24,
    name: "Planet Fitness - Balewadi",
    address: "Balewadi, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411045",
  },
  {
    id: 25,
    name: "Planet Fitness - Undri",
    address: "Undri, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411060",
  },
  {
    id: 26,
    name: "Planet Fitness - Katraj",
    address: "Katraj, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411046",
  },
  {
    id: 27,
    name: "Planet Fitness - Hadapsar Industrial Estate",
    address: "Hadapsar Industrial Estate, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411028",
  },
  {
    id: 28,
    name: "Planet Fitness - Maval",
    address: "Maval, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "410507",
  },
  {
    id: 29,
    name: "Planet Fitness - Hinjewadi Phase 2",
    address: "Hinjewadi Phase 2, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411057",
  },
  {
    id: 30,
    name: "Planet Fitness - Bavdhan",
    address: "Bavdhan, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411021",
  },
  {
    id: 31,
    name: "Planet Fitness - Keshav Nagar",
    address: "Keshav Nagar, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411036",
  },
  {
    id: 32,
    name: "Planet Fitness - Dhanori",
    address: "Dhanori, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411015",
  },
  {
    id: 33,
    name: "Planet Fitness - Warje",
    address: "Warje, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411058",
  },
  {
    id: 34,
    name: "Planet Fitness - Shankar Sheth Road",
    address: "Shankar Sheth Road, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411037",
  },
  {
    id: 35,
    name: "Planet Fitness - Sinhagad Road",
    address: "Sinhagad Road, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411030",
  },
  {
    id: 36,
    name: "Planet Fitness - Bopodi",
    address: "Bopodi, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411020",
  },
  {
    id: 37,
    name: "Planet Fitness - Kalyani Nagar",
    address: "Kalyani Nagar, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411014",
  },
  {
    id: 38,
    name: "Planet Fitness - Baner Balewadi Road",
    address: "Baner Balewadi Road, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411045",
  },
  {
    id: 39,
    name: "Planet Fitness - Shivane",
    address: "Shivane, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411023",
  },
  {
    id: 40,
    name: "Planet Fitness - Keshav Nagar",
    address: "Keshav Nagar, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411006",
  },
  {
    id: 41,
    name: "Planet Fitness - Yerwada",
    address: "Yerwada, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411006",
  },
  {
    id: 42,
    name: "Planet Fitness - Sangvi",
    address: "Sangvi, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411027",
  },
  {
    id: 43,
    name: "Planet Fitness - NIBM Road",
    address: "NIBM Road, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411048",
  },
  {
    id: 44,
    name: "Planet Fitness - Vetal Hill",
    address: "Vetal Hill, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411029",
  },
  {
    id: 45,
    name: "Planet Fitness - Nandini Nagar",
    address: "Nandini Nagar, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411014",
  },
  {
    id: 46,
    name: "Planet Fitness - Mundhwa",
    address: "Mundhwa, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411036",
  },
  {
    id: 47,
    name: "Planet Fitness - Kalyan Nagar",
    address: "Kalyan Nagar, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411023",
  },
  {
    id: 48,
    name: "Planet Fitness - Koregaon Park",
    address: "Koregaon Park, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411001",
  },
  {
    id: 49,
    name: "Planet Fitness - Sopan Baug",
    address: "Sopan Baug, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411028",
  },
  {
    id: 50,
    name: "Planet Fitness - Magarpatta City",
    address: "Magarpatta City, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411013",
  },

  {
    id: 51,
    name: "Planet Fitness - Nana Peth",
    address: "Nana Peth, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411002",
  },
  {
    id: 52,
    name: "Planet Fitness - Ganesh Peth",
    address: "Ganesh Peth, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411042",
  },
  {
    id: 53,
    name: "Planet Fitness - Appa Balwant Chowk",
    address: "Appa Balwant Chowk, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411042",
  },
  {
    id: 54,
    name: "Planet Fitness - Somwar Peth",
    address: "Somwar Peth, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411011",
  },
  {
    id: 55,
    name: "Planet Fitness - Shivaji Nagar",
    address: "Shivaji Nagar, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411005",
  },
  {
    id: 56,
    name: "Planet Fitness - Budhwar Peth",
    address: "Budhwar Peth, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411002",
  },
  {
    id: 57,
    name: "Planet Fitness - Kasba Peth",
    address: "Kasba Peth, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411011",
  },
  {
    id: 58,
    name: "Planet Fitness - Narpatgiri",
    address: "Narpatgiri, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411003",
  },
  {
    id: 59,
    name: "Planet Fitness - Furgusson College Road",
    address: "Furgusson College Road, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411004",
  },
  {
    id: 60,
    name: "Planet Fitness - Rasta Peth",
    address: "Rasta Peth, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411011",
  },
  {
    id: 61,
    name: "Planet Fitness - Jangli Maharaj Road",
    address: "Jangli Maharaj Road, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411005",
  },
  {
    id: 62,
    name: "Planet Fitness - Shukrawar Peth",
    address: "Shukrawar Peth, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411002",
  },
  {
    id: 63,
    name: "Planet Fitness - Sadashiv Peth",
    address: "Sadashiv Peth, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411030",
  },
  {
    id: 64,
    name: "Planet Fitness - Ghole Road",
    address: "Ghole Road, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411005",
  },
  {
    id: 65,
    name: "Planet Fitness - Bhavani Peth",
    address: "Bhavani Peth, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411042",
  },
  {
    id: 66,
    name: "Planet Fitness - NIBM Road",
    address: "NIBM Road, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411048",
  },
  {
    id: 67,
    name: "Planet Fitness - Bhim Nagar",
    address: "Bhim Nagar, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411046",
  },
  {
    id: 68,
    name: "Planet Fitness - Raghunath Peth",
    address: "Raghunath Peth, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411030",
  },
  {
    id: 69,
    name: "Planet Fitness - Vishrantwadi",
    address: "Vishrantwadi, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411015",
  },
  {
    id: 70,
    name: "Planet Fitness - Gultekdi",
    address: "Gultekdi, Pune",
    city: "Pune",
    state: "Maharashtra",
    zip: "411037",
  },
  // Add more locations as needed
];

// POST route to handle form submission
app.post("/bookworkout", async (req, res) => {
  const { from_name, from_email, workout_date, additional_queries } = req.body;

  // SQL query to insert data into the workout table in MySQL
  const query =
    "INSERT INTO workout (name, email, date, queries) VALUES (?, ?, ?, ?)";

  db.query(
    query,
    [from_name, from_email, workout_date, additional_queries],
    (error, results) => {
      if (error) {
        console.error("Error inserting data into MySQL:", error.message);
        res.status(500).send("Error while booking workout");
      } else {
        res.status(200).send("Workout booked successfully");
      }
    }
  );
});

// Endpoint to get filtered gym locations based on search query
app.get("/api/locations", (req, res) => {
  const query = req.query.query?.toLowerCase(); // Get search query from request

  if (!query) {
    return res.json(gymLocations); // Return all locations if no query is provided
  }

  // Filter the gym locations based on the query (searching name, address, city, or zip)
  const filteredLocations = gymLocations.filter((location) => {
    return (
      location.name.toLowerCase().includes(query) ||
      location.address.toLowerCase().includes(query) ||
      location.city.toLowerCase().includes(query) ||
      location.zip.includes(query)
    );
  });

  res.json(filteredLocations); // Send the filtered locations as the response
});

// Start the server
app.listen(port, () => {
  console.log(`Backend API running at http://localhost:${port}`);
});
