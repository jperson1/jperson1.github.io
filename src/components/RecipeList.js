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
            <div className="flex">
                <div className="overflow-y-scroll h-screen w-1/3 p-4">
                    {recipes.map((recipe) => (
                        <button key={recipe.name} className="w-full border-2 border-b-0 p-2" onClick={() => setSelected(recipe.name)}>
                            <p className="pl-2 flex justify-start font-medium">{parseName(recipe.name)}</p>
                        </button>
                    ))}
                </div>
                <div className="overflow-y-scroll w-2/3 p-4">
                    <Info name={selected} />
                </div>
            </div>

        );
    }
}

// ex. "speed-module-2" to "speed module 2"
function parseName(name) { return name.split("-").join(" "); }
