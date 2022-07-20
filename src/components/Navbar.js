// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/solid";

// Navbar | exported to App.js
// Shows all necessary links in a sticky bar at the top of the page
export default function Navbar() {
  return (
    <header
      className="bg-gray-800 shadow-md
                        md:sticky top-0 z-10 text-white"
    >
      <div
        className="container p-5 space-y-1
                      flex flex-wrap flex-col md:flex-row 
                      md:items-center ml-8 md:ml-0 md:text-base text-xl"
      >
        <Link to="/">
          <HomeIcon className="text-purple-400 hover:text-purple-500 w-10" />
        </Link>

        <nav
          className="pt-2 md:ml-4 ml-2 md:py-1 md:pl-4 md:border-l md:border-gray-400 
                            hover:font-bold"
        >
          <Link to="/about">About This Site</Link>
        </nav>

        <div class="relative mx-1 px-1 py-2 group md:ml-8" id="button_moderate">
          <span class="">Résumés</span>
          <ul class="absolute left-0 top-0 mt-10 p-2 rounded shadow-md bg-white z-10 hidden group-hover:block">
            <svg
              class="block fill-current text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            </svg>
            <div class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-700 hover:text-gray-800 hover:bg-gray-200">
              <a
                class="px-2 py-1"
                href="https://drive.google.com/file/d/1aCri7he8iI0PXFpMNSnFSMRJOpR-EDF2/view?usp=sharing"
              >
                <span class="">General</span>
              </a>
            </div>
            <div class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-700 hover:text-gray-800 hover:bg-gray-200">
              <a
                class="px-2 py-1"
                href="https://drive.google.com/file/d/1VwUVrpd7D67a10y5rklVpa0GhQVR8vR4/view?usp=sharing"
              >
                <span class="">Federal</span>
              </a>
            </div>
          </ul>
        </div>

        <nav
          className="md:ml-8 ml-2 md:pb-0 pb-2
                                hover:font-bold"
        >
          <Link to="/possums">Possum Scroller</Link>
        </nav>

        {/* <nav className="md:ml-8 ml-2 md:pb-0 pb-2
                            hover:font-bold">
                    <Link to="/factorio">Factorio Cheat Sheet</Link>
                </nav> */}

        <nav className="md:ml-8 ml-2 md:absolute md:right-8">
          <a
            className="pr-8 hover:font-bold"
            href="https://github.com/jperson1"
          >
            GitHub
          </a>
          <a
            className="hover:font-bold"
            href="https://www.linkedin.com/in/james-person-85aa1422b/"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}
