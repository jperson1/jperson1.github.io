// src/components/Skills.js

import { CheckCircleIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "./data.js";


// Skills | exports to App.js
// Imports skills from data.js. Skills are displayed in a side-by-side list preceeded by a check mark.
export default function Skills() {
    return (
        <section id="skills">
            <div class="container px-5 mx-auto">
                <div class="text-center mb-8">
                    <ChipIcon class="text-purple-400 w-10 inline-block mb-2" />
                    <h1 class="sm:text-4xl text-3xl font-medium text-white mb-2">
                        Technical Skills
                    </h1>
                    <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        A non-exaustive list of languages, frameworks, &amp; softwares I've used.
                    </p>
                </div>
                <div class="flex flex-wrap mx-auto sm:w-5/6 w-full">
                    {skills.map((skill) => (
                        <div key={skill} class="p-2 w-full md:w-1/2">
                            <div class="flex p-4 h-full items-center
                                        rounded bg-gray-800 shadow-sm">
                                <CheckCircleIcon class="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" />
                                <span class="title-font font-medium text-white">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}