import "./index.css";

import React from "react";
import { render } from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
// import RecipeList from './components/Factorio/RecipeList'
import Posm from "./components/Posm/Posm";
import AboutPage from "./components/About/About";

const rootElement = document.getElementById("root");
render(
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="possums" element={<Posm />} />
      <Route path="about" element={<AboutPage />} />
    </Routes>
  </HashRouter>,
  rootElement
);
