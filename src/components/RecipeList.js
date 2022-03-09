import React, { useEffect, useState } from "react";
import { recipes } from "../data/core.js"

export default function RecipeList() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [names, setNames] = useState([]);

    useEffect(() => {
        setNames(getNames(recipes));

        if (!isLoaded) {
            setIsLoaded(true);
        }
    }, [isLoaded]);

    if (!isLoaded) {
        return <div>Loading! Please wait, or try reloading the page.</div>
    } else {
        return (
            <div className="flex">
                <div className="overflow-y-scroll h-screen w-1/2 p-4">
                    {recipes.map((recipe) => (
                        <div key={recipe.name} className="w-full border-2 p-2">
                            <p className="font-medium">{parseName(recipe.name)}</p>
                            <p className="font-medium">{parseIngredients(recipe)}</p>
                        </div>
                    ))}
                </div>
                <div className="h-screen overflow-y-scroll w-1/2 p-4">
                    {names}
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
