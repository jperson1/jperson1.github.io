// src/components/Extracurriculars.js

import { SunIcon } from "@heroicons/react/solid";
import React from "react";


// Extracurriculars | exported to App.js
// Simply displays the UMBC TKD club.
// TODO: Add the datas to data.js for an expandable list.
export default function Extracurriculars() {
    return (
        <section id="extracurriculars">
            <div class="container px-5 py-5 mx-auto">
                <div class="text-center">
                    <SunIcon class="text-purple-400 w-10 inline-block mb-2" />
                    <h1 class="sm:text-4xl text-3xl font-medium title-font text-white mb-2">
                        Extracurriculars
                    </h1>
                    <p class="leading-normal xl:w-2/4 lg:w-3/4 mx-auto">
                        UMBC Club Taekwondo - 3rd Degree Black Belt
                    </p>
                    <p class="text-gray-400 italic leading-normal xl:w-2/4 lg:w-3/4 mx-auto">
                        Treasurer '19, Vice President '20, President '21
                    </p>
                    <p class="text-gray-400 leading-normal xl:w-2/4 lg:w-3/4 mx-auto">
                        Fall 2018 - Present
                    </p>
                </div>
            </div>
        </section>
    )
}