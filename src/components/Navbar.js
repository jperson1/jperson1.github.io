// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/solid";

// Navbar | exported to App.js
// Shows all necessary links in a sticky bar at the top of the page
export default function Navbar() {
    return (
        <header className="bg-gray-800 shadow-md
                        md:sticky top-0 z-10 text-white">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                <Link to="/"><HomeIcon className="text-purple-400 hover:text-purple-500 w-10 inline-block" /></Link>

                <nav className="md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 
                            hover:font-bold">
                    <Link to="/about">About This Site</Link>
                </nav>

                <nav className="md:ml-8
                                hover:font-bold">
                    <Link to="/possums">Possum Scroller</Link>
                </nav>

                <nav className="md:ml-8
                            hover:font-bold">
                    <Link to="/factorio">Factorio Cheat Sheet</Link>
                </nav>

                <nav className="md:ml-8 md:absolute md:right-8">
                    <a className="pr-4 hover:font-bold" href="https://github.com/jperson1">GitHub</a>
                    <a className="hover:font-bold" href="https://www.linkedin.com/in/james-person-85aa1422b/">LinkedIn</a>
                </nav>

            </div>
        </header>
    );
}