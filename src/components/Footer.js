import React from "react";

import { MailIcon, PhoneIcon, ChipIcon, GlobeAltIcon } from "@heroicons/react/solid";


// Footer | exported to App.js
// Disclaimer
// TODO: Links, copyright, etc.
export default function Footer() {
    return (
        <div className="footer">
            <hr className="border-gray-400"></hr>
            <footer className="p-4 flex flex-col md:flex-row text-gray-400 ">
                <p className="mb-4 mr-8">
                    This website is currently in early development. Expect more features in the future!
                </p>

                <div className="mr-8">
                    <h2 className="title-font font-semibold text-purple-400 tracking-widest text-xs">
                        <MailIcon className="text-purple-400 w-4 mr-1 mb-1 inline-block" />
                        EMAIL:
                    </h2>
                    <a href="mailto:contact@jperson.dev" className="hover:underline">
                        contact@jperson.dev <br />
                    </a>
                    <a href="mailto:jperson1@umbc.edu" className="hover:underline">
                        jperson1@umbc.edu
                    </a>
                </div>

                <div className="mr-8">
                    <h2 className="title-font font-semibold text-purple-400 tracking-widest text-xs">
                        <PhoneIcon className="text-purple-400 w-4 mr-1 mb-1 inline-block" />
                        PHONE:
                    </h2>
                    <a href="tel:301-300-9318" className="leading-relaxed hover:underline">
                        +1 301-300-9318
                    </a>
                </div>

                <div className="mr-8">
                    <h2 className="title-font font-semibold text-purple-400 tracking-widest text-xs">
                        <ChipIcon className="text-purple-400 w-4 mr-1 mb-1 inline-block" />
                        GIT:
                    </h2>
                    <a href="https://github.com/jperson1" className="hover:underline">
                        github.com/jperson1
                    </a>
                </div>

                <div className="mr-8">
                    <h2 className="title-font font-semibold text-purple-400 tracking-widest text-xs">
                        <GlobeAltIcon className="text-purple-400 w-4 mr-1 mb-1 inline-block" />
                        ADDRESS:
                    </h2>
                    <p className="leading-relaxed">
                        On Request <br></br>
                        Pikesville, MD 21208
                    </p>
                </div>
            </footer>
        </div>
    )
}