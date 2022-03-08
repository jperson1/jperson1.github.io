import React from "react";
import { recipes } from "../data/core.js"

export default function RecipeList() {
    return (
        <div className="float-left flow-root w-1/3 p-4">
            {recipes.map((recipe) => (
                <div>
                    <div key={recipe.name} className="w-full border-2 border-b-0 p-2">
                        <p className="font-medium">{parseName(recipe.name)}</p>
                    </div>

                    <div key={recipe.name} className="flex-none border-2 border-t-0 p-2">
                        <p className="font-medium">{ingredientList(recipe)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

// ex. "speed-module-2" to "Speed Module 2"
function parseName(name){
    return name.split("-").join(" ");
}

function ingredientList(recipe) {
    var arr = [];
    for (var item in recipe.ingredients) {
        arr.push(recipe.ingredients[item] + " " + item);
    }
    var result = arr.join(", ");
    return result;
}