import React from "react";
import { recipes } from "../data/core.js"

export default function RecipeList() {
    return (
        <div class="flex flex-wrap lg:w-4/5">
            {
                recipes.map((recipe) => (
                    <div key={recipe.name}>
                        {recipe.name}
                    </div>
                ))
            }
        </div>
    );
}
