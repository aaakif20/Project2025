// const express = require("express");
// const mysql = require("mysql2");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json()); // Parse JSON requests

// // MySQL Connection setup
// const db = mysql.createConnection({
//   host: "localhost", // or the host where your MySQL is running (use the IP if it's remote)
//   user: "root", // MySQL username
//   password: "", // MySQL password
//   database: "planetfitness", // Database name
// });

// // Establish MySQL connection
// db.connect((err) => {
//   if (err) {
//     console.error("Error connecting to MySQL:", err.message);
//     return;
//   }
//   console.log("Connected to MySQL");
// });

// // POST route to handle form submission
// app.post("/bookworkout", async (req, res) => {
//   const { from_name, from_email, workout_date, additional_queries } = req.body;

//   // SQL query to insert data into the workout table in MySQL
//   const query =
//     "INSERT INTO workout (name, email, date, queries) VALUES (?, ?, ?, ?)";

//   db.query(
//     query,
//     [from_name, from_email, workout_date, additional_queries],
//     (error, results) => {
//       if (error) {
//         console.error("Error inserting data into MySQL:", error.message);
//         res.status(500).send("Error while booking workout");
//       } else {
//         res.status(200).send("Workout booked successfully");
//       }
//     }
//   );
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
