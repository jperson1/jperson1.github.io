import React, { useEffect, useState } from "react";
import Info from "./Info.js";
import { recipes } from "../data/core.js"

export default function RecipeList() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [selected, setSelected] = useState("");

    useEffect(() => {
        if (!isLoaded) {
            setIsLoaded(true);
        }

    }, [isLoaded, selected]);

    if (!isLoaded) {
        return <div>Loading! Please wait, or try reloading the page.</div>
    } else {
        return (
            <div className="grid grid-rows-3 grid-cols-3">
                <div className="row-span-3 h-screen
                                overflow-y-scroll overflow-x-hidden">
                    {recipes.map((recipe) => (
                        <button key={recipe.name} className="w-full border-2 border-b-0 p-2" onClick={() => setSelected(recipe.name)}>
                            <p className="pl-2 flex justify-start font-medium">{parseName(recipe.name)}</p>
                        </button>
                    ))}
                </div>
                <div className="col-span-2 p-4 border-2
                                overflow-y-scroll overflow-x-hidden">
                    <Info name={selected} />
                </div>
                <div className="row-span-2 col-span-2 p-4 border-2
                                overflow-y-scroll overflow-x-hidden">
                    heblo
                </div>
            </div>

        );
    }
}

// ex. "speed-module-2" to "speed module 2"
function parseName(name) { return name.split("-").join(" "); }
