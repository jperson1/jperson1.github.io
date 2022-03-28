// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";

// Navbar | exported to App.js
// Shows all necessary links in a sticky bar at the top of the page
export default function Navbar() {
    return (
        <header class="bg-gray-800 shadow-md shadow-gray-400
                        md:sticky top-0 z-10 text-white">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="/" class="ml-3">
                    <Link to="/">Home</Link>
                </a>
                <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                    <Link to="/factorio">Factorio</Link>
                </nav>
            </div>
        </header>
    );
}