// src/components/About.js

import React from "react";


// About | exported to App.js
// Left side: Name, description, contact/projects links
// Right side: Image of UMBC
// TODO: change image to one of me
export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        James Person <br /> Software Developer
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Recent graduate looking for opportunities in web development, database management, and AI/ML.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#/about"
                            className="inline-flex py-2 px-6 
                                text-white bg-purple-600  hover:bg-purple-500 text-lg
                                rounded shadow-sm">
                            Contact Me
                        </a>
                    </div>
                </div>
                <div className="lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center 
                                rounded-3xl border-solid border-4 border-gray-800
                                shadow-sm"
                        alt="umbc"
                        src="./umbc.jpeg"
                    />
                </div>
            </div>
        </section>
    )
}