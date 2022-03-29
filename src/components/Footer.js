import React from "react";

import { MailIcon, PhoneIcon, ChipIcon, GlobeAltIcon } from "@heroicons/react/solid";


// Footer | exported to App.js
// Disclaimer
// TODO: Links, copyright, etc.
export default function Footer() {
    return (
        <div class="footer">
            <hr class="border-gray-400"></hr>
            <footer class="p-4 flex flex-row text-gray-400 ">
                <p class="mb-4 mr-8">
                    This website is currently in early development. Expect more features in the future!
                </p>

                <div class="mr-8">
                    <h2 class="title-font font-semibold text-purple-400 tracking-widest text-xs">
                        <MailIcon class="text-purple-400 w-4 mr-1 mb-1 inline-block" />
                        EMAIL:
                    </h2>
                    <a href="mailto:jperson1@umbc.edu" class="hover:underline">
                        jperson1@umbc.edu
                    </a>
                </div>

                <div class="mr-8">
                    <h2 class="title-font font-semibold text-purple-400 tracking-widest text-xs">
                        <PhoneIcon class="text-purple-400 w-4 mr-1 mb-1 inline-block" />
                        PHONE:
                    </h2>
                    <a href="tel:301-300-9318" class="leading-relaxed hover:underline">
                        +1 301-300-9318
                    </a>
                </div>

                <div class="mr-8">
                    <h2 class="title-font font-semibold text-purple-400 tracking-widest text-xs">
                        <ChipIcon class="text-purple-400 w-4 mr-1 mb-1 inline-block" />
                        GIT:
                    </h2>
                    <a href="https://github.com/jperson1" class="hover:underline">
                        github.com/jperson1
                    </a>
                </div>

                <div class="mr-8">
                    <h2 class="title-font font-semibold text-purple-400 tracking-widest text-xs">
                        <GlobeAltIcon class="text-purple-400 w-4 mr-1 mb-1 inline-block" />
                        ADDRESS:
                    </h2>
                    <p class="leading-relaxed">
                        See Resume <br></br>
                        Pikesville, MD 21208
                    </p>
                </div>
            </footer>
        </div>
    )
}