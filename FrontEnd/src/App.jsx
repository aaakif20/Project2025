import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Bookworkout from "./Components/Bookworkout/Bookworkout";
import Home from "./Components/Home/Home";
import Memberships from "./Components/Memberships/Memberships";
import Why from "./Components/Why/Why";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Profile from "./Components/Profile/Profile";
import Workout from "./Components/Workout/Workout";
import Kondhwa from "./Components/Kondhwa/Kondhwa";
import Khadki from "./Components/Home/Khadki/Khadki";
import Whyplanetfitness from "./Components/Whyplanetfitness/Whyplanetfitness";
import PFstore from "./Components/PFStore/PFstore";

function App() {
  // Define routes for your app
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />, // Home route, or default route
    },
    {
      path: "/Memberships",
      element: <Memberships />,
    },
    {
      path: "/PFStore",
      element: <PFstore />,
    },
    {
      path: "/Why",
      element: <Why />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Signup",
      element: <SignUp />,
    },
    {
      path: "/Profile",
      element: <Profile />,
    },
    {
      path: "/Workout",
      element: <Workout />,
    },
    {
      path: "/Whyplanetfitness",
      element: <Whyplanetfitness />,
    },
    {
      path: "/bookworkout",
      element: <Bookworkout />,
    },
    {
      path: "/location/:id",
      element: <Kondhwa />,
    },
    {
      path: "/location/3",
      element: <Khadki />,
    },
    // Add more routes as necessary
  ]);

  return (
    <>
      <RouterProvider router={router} />{" "}
      {/* Wrap the entire app with RouterProvider */}
    </>
  );
}

export default App;
