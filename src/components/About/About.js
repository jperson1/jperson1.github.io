import React from "react";

import {
  MailIcon,
  PhoneIcon,
  ChipIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";

export default function About() {
  return (
    <div className="bg-gray-900 h-screen">
      <hr className="border-gray-600"></hr>
      <div className="p-8 text-gray-300">
        <div className="grid md:grid-cols-4">
          <div className="mr-8 pt-4">
            <h2 className="title-font font-semibold text-purple-400 tracking-widest text-xs">
              <MailIcon className="text-purple-400 w-4 mr-1 mb-1 inline-block" />
              EMAIL:
            </h2>
            <a
              href="mailto:james.person861@gmail.com"
              className="hover:underline"
            >
              james.person861@gmail.com
            </a>
          </div>

          <div className="mr-8 pt-4">
            <h2 className="title-font font-semibold text-purple-400 tracking-widest text-xs">
              <PhoneIcon className="text-purple-400 w-4 mr-1 mb-1 inline-block" />
              PHONE:
            </h2>
            <a
              href="tel:301-300-9318"
              className="leading-relaxed hover:underline"
            >
              +1 301-300-9318
            </a>
          </div>

          <div className="mr-8 pt-4">
            <h2 className="title-font font-semibold text-purple-400 tracking-widest text-xs">
              <ChipIcon className="text-purple-400 w-4 mr-1 mb-1 inline-block" />
              GIT:
            </h2>
            <a href="https://github.com/jperson1" className="hover:underline">
              github.com/jperson1
            </a>
          </div>

          <div className="mr-8 pt-4">
            <h2 className="title-font font-semibold text-purple-400 tracking-widest text-xs">
              <GlobeAltIcon className="text-purple-400 w-4 mr-1 mb-1 inline-block" />
              LOCATION:
            </h2>
            <p className="leading-relaxed">Alexandria, VA 22202</p>
          </div>
        </div>

        <p className="mb-4 mr-8 pt-8">
          Hello! I'm James! This is my personal site! All of the pages are small
          projects I use to help me out. Many are/are not available depending on
          their state of completion.
        </p>

        <p className="mb-4 mr-8">
          The Homepage - The homepage acts as a resume/get-to-know me page.
        </p>

        <p className="mb-4 mr-8">
          Possum Scroller - Possums are my favorite animal. For a little while,
          every time I saw a picture of one I would download it to my phone. I
          accumulated over a thousand images on my phone, which is why I decided
          to make the Possum Scroller page, an infinitely-scrolling page of
          possum images from my phone. I think it's pretty great!
        </p>
      </div>
    </div>
  );
}
