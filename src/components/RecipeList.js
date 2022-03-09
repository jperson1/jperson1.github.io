import React, { useEffect, useState } from "react";
import { recipes } from "../data/core.js"

export default function RecipeList() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [names, setNames] = useState([]);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        setNames(getNames(recipes));

        if (!isLoaded) {
            setIsLoaded(true);
        }
        
    }, [isLoaded, selected]);

    if (!isLoaded) {
        return <div>Loading! Please wait, or try reloading the page.</div>
    } else {
        return (
            <div className="flex">
                <div className="overflow-y-scroll h-screen w-1/2 p-4">
                    {recipes.map((recipe) => (
                        <button key={recipe.name} className="w-full border-2 p-2" onClick={() => setSelected(parseName(recipe.name))}>
                            <p className="pl-2 flex justify-start font-medium">{parseName(recipe.name)}</p>
                            <p className="pl-2 flex justify-start font-medium">{parseIngredients(recipe)}</p>
                        </button>
                    ))}
                </div>
                <div className="h-screen overflow-y-scroll w-1/2 p-4">
                    {selected}
                </div>
            </div>

        );
    }
}

// Takes big data of recipes, returns just a list of their names
function getNames(recipes) {
    var names = [];
    for (var i = 0; i < recipes.length; i++) {
        names.push(recipes[i].name);
    }
    console.log(names);
    return names;
}

// ex. "speed-module-2" to "speed module 2"
function parseName(name) { return name.split("-").join(" "); }

// ex. 
// { "electronic-circuit": 5, "advanced-circuit": 5 }
// "5 electronic circuit, 5 advanced circuit"
function parseIngredients(recipe) {
    var arr = [];
    for (var item in recipe.ingredients) {
        arr.push(recipe.ingredients[item] + " " + item.split("-").join(" "));
    }
    var result = arr.join(" --- ");
    return result;
}
