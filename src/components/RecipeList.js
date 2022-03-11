import React, { useState } from "react";
import Info from "./Info.js";
import SearchBar from "./SearchBar.js";
import { recipes } from "../data/core.js"

export default function RecipeList() {
    // Searchbar
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredRecipes = filterRecipes(recipes, searchQuery);

    // Recipe selection
    const [selected, setSelected] = useState("");

    return (
        <div className="grid grid-rows-3 grid-cols-3">
            <div className="row-span-3 h-screen
                                overflow-y-scroll overflow-x-hidden">
                <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
                <ul>
                    {filteredRecipes.map((recipe) => (
                        <button key={recipe.name} className="w-full border-2 border-b-0 p-2" onClick={() => setSelected(recipe.name)}>
                            <p className="pl-2 flex justify-start font-medium">{parseName(recipe.name)}</p>
                        </button>
                    ))}
                </ul>
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
};

// ex. "speed-module-2" to "speed module 2"
function parseName(name) { return name.split("-").join(" "); }

const filterRecipes = (recipes, query) => {
    if (!query) {
        return recipes;
    }

    return recipes.filter((recipe) => {
        const recipeName = recipe.name.toLowerCase();
        return recipeName.includes(query);
    });
};