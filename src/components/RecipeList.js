import React from "react";
import { recipes } from "../data/core.js"

export default function RecipeList() {
    return (
        <div class="flex flex-wrap lg:w-4/5 sm:mb-2">
            {
                recipes.map((recipe) => (
                    <div key={recipe.name} class="p-2 sm:w-1/3 w-full">
                        {recipe.name}
                    </div>
                ))
            }
        </div>
    );
}
