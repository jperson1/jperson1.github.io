// src/components/Jobs.js

import { CogIcon } from "@heroicons/react/solid";
import React from "react";
import { jobs } from "./data";

// Jobs | exported to App.js
// Imports jobs from data.js to show experience in similar manner to Projects.js.
export default function Coursework() {
  return (
    <section id="experience">
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center">
          <CogIcon className="text-purple-400 w-10 inline-block mb-2" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-2">
            Experience
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-300">
            Employers I've worked with.
          </p>
          <div
            className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row lg:w-4/5 sm:mx-auto sm:mb-2 shadow-sm"
            style={{ marginTop: "10px" }}
          >
            {jobs.map((job) => (
              <div key={job.title} className="relative p-4">
                <a href={job.link}>
                  <div
                    className="place-content-center rounded p-8 h-full 
                                                bg-gray-800 shadow-sm"
                  >
                    <p className="font-medium text-purple-400">{job.title}</p>
                    <p className="font-medium text-white">{job.company}</p>
                    <p className="font-light text-gray-400">{job.place}</p>
                    <p className="font-light text-gray-400">{job.time}</p>
                    <p className="font-bold text-gray-300 text-left">
                      Responsibilities:
                    </p>
                    <ul className="text-gray-300 text-left">
                      {job.responsibilities.map((line) => (
                        <p className="p-1">{line}</p>
                      ))}
                    </ul>
                    <br />
                    {job.accomplishments && (
                      <div>
                        <p className="font-bold text-gray-300 text-left">
                          Accomplishments:
                        </p>
                        <ul className="text-gray-300 text-left">
                          {job.accomplishments.map((line) => (
                            <p className="">{line}</p>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
