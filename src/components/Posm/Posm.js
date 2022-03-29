import React from "react";

import Footer from "../Footer";

export default function Posm() {
    return (
        <div className="h-screen">

            <div className="bg-gray-900 h-screen pt-8 text-white">
                <h2 className="font-medium text-center text-4xl mb-4">Possum Scrolling</h2>
                <h1 className="font-medium text-center text-l">A collection of over 1000 possum images for you to scroll through!</h1>

                Images!
            </div>

            <div className="bg-gray-800 shadow-md">
                <Footer />
            </div>
        </div>
    );
}
