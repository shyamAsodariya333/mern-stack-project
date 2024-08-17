import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import About from "../pages/About";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import CreateListing from "../pages/CreateListing";
import UpdateListing from "../pages/UpdateListing";
import Listing from "../pages/Listing";
import Search from "../pages/Search";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/Search" element={<Search/>} />

      <Route path="/listing/:listingId" element={<Listing/>} />
      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-listing" element={<CreateListing/> } />
        <Route path="/update-listing/:listingId" element={<UpdateListing/> } />
      </Route>
    </Routes>
  );
}
