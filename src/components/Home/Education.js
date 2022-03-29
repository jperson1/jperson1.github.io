// src/components/Education.js

import { AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";


// Education | exported to App.js
// Displays relevant education info in the center of the screen
export default function Education() {
    return (
        <section id="education">
            <div class="container px-5 py-5 mx-auto">
                <div class="text-center mb-10">
                    <AcademicCapIcon class="text-purple-400 w-10 inline-block mb-2" />
                    <h1 class="sm:text-4xl text-3xl font-medium title-font text-white mb-2">
                        Education
                    </h1>
                    <p class="text-base leading-normal xl:w-2/4 lg:w-3/4 mx-auto">
                        University of Maryland, Baltimore County | Winter 2021
                    </p>
                    <p class="text-base italic leading-normal xl:w-2/4 lg:w-3/4 mx-auto">
                        Bachelor of Science, Computer Science, Minor in Mathematics
                    </p>
                    <p class="text-base leading-normal xl:w-2/4 lg:w-3/4 mx-auto">
                        Cummulative GPA: 3.13/4.00
                    </p>
                </div>
            </div>
        </section>
    );
}