import React from "react";
import { recipes } from "../data/core.js"

export default function RecipeList() {
    return (
        <div class="flex flex-wrap w-1/4 place-content-center">
            {
                recipes.map((recipe) => (
                    <div key={recipe.name} class="p-1 w-full border-2">
                        {recipe.name}
                    </div>
                ))
            }
        </div>
    );
}
