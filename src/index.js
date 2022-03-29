import './index.css';

import React from 'react';
import { render } from "react-dom";
import { HashRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './components/Home/Home';
import RecipeList from './components/Factorio/RecipeList'

const rootElement = document.getElementById("root");
render(
    <HashRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="factorio" element={<RecipeList />} />
        </Routes>
    </HashRouter>,
    rootElement
);