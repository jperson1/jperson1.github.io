// src/components/Jobs.js

import { CogIcon } from "@heroicons/react/solid"
import React from "react"
import { jobs } from "./data"


// Jobs | exported to App.js
// Imports jobs from data.js to show experience in similar manner to Projects.js.
export default function Coursework() {
    return (
        <section id="experience">
            <div class="container px-5 py-5 mx-auto">
                <div class="text-center">
                    <CogIcon class="text-purple-400 w-10 inline-block mb-2" />
                    <h1 class="sm:text-4xl text-3xl font-medium title-font text-white mb-2">
                        Experience
                    </h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-gray-300 mb-6">
                        Employers I've worked with.
                    </p>
                    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2
                                shadow-sm">
                        {jobs.map((job) => (
                            <div key={job.title} class="relative p-4 sm:w-1/2 w-full">
                                <a href={job.link}>
                                    <div class="place-content-center rounded p-4 h-full 
                                                bg-gray-800 shadow-sm">
                                        <p class="font-medium text-purple-400">
                                            {job.title}
                                        </p>
                                        <p class="font-medium text-white">
                                            {job.company}
                                        </p>
                                        <p class="font-light text-gray-400">
                                            {job.place}
                                        </p>
                                        <p class="font-light text-gray-400">
                                            {job.time}
                                        </p>
                                        <p class="text-gray-300">
                                            {job.description}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}