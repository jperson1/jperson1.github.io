// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "./data.js";


// Projects | exported to App.js
// Imports projects from data.js. Displays an image and some invisible text over it. When hovering, the text is displayed.
export default function Projects() {
    return (
        <section id="projects" class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-10 mx-auto text-center lg:px-40">
                <div class="flex flex-col w-full mb-6">
                    <CodeIcon class="text-purple-400 mx-auto inline-block w-10 mb-2" />
                    <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
                        Projects
                    </h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-gray-300">
                        A selection of projects I've worked on.
                    </p>
                </div>
                <div class="flex flex-wrap">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            class="md:w-1/2 w-full p-4 shadow-sm">
                            <div class="flex relative">
                                <img
                                    alt="gallery"
                                    class="absolute inset-0 w-full h-full object-cover object-center"
                                    src={project.image}
                                />
                                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h2 class="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 class="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p class="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <div class="flex flex-col w-full">
                    <p class="mx-auto leading-normal text-gray-400">
                        Please note, some of the above projects cannot be shared directly, as they are a component or a product of private UMBC course content. I am, however, happy to talk about my part in these projects by email or by phone.
                    </p>
                    <a href="#contact" class="mx-auto leading-relaxed text-purple-500 hover:text-purple-400">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}