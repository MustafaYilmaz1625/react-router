import React from "react";
import "./App.css";
import {  Routes, Route } from "react-router-dom";
// pages
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import User from "./components/User";
import Layout from "./components/Layout";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users/*" element={<Users />}>
            <Route path="user/:id" element={<User />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
