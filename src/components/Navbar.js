// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/solid";

// Navbar | exported to App.js
// Shows all necessary links in a sticky bar at the top of the page
export default function Navbar() {
    return (
        <header class="bg-gray-800 shadow-md
                        md:sticky top-0 z-10 text-white">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="/" class="md:ml-3">
                    <Link to="/"><HomeIcon class="text-purple-400 hover:text-purple-500 w-10 inline-block" /></Link>
                </a>
                <nav class="md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 
                             
                            hover:font-bold">
                    <Link to="/factorio">Factorio Cheat Sheet</Link>
                </nav>
                <nav class="md:ml-8
                            hover:font-bold">
                    <Link to="/possums">Possum Scroller</Link>
                </nav>
            </div>
        </header>
    );
}