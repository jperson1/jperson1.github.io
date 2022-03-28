import React from "react";
import { recipes } from "./core.js"

export default function Info(props){
    var item = getRecipe(props.name);

    if(!item){
        return (<h1>Please select an item from the list.</h1>);
    }
    return (
        <div>
            <p>Name: {parseName(item.name)}</p>
            <p>Ingredients: {parseIngredients(item.ingredients)}</p>
            <p>Produces: {resultCount(item)}</p>
            <p>Time required: {timeCount(item)} s</p>
        </div>
    )
}

function getRecipe(name){
    for(var i=0; i<recipes.length; i++){
        if(recipes[i].name === name){
            return recipes[i];
        }
    }
    return null;
}


function parseName(name) { return name.split("-").join(" "); }

// ex. 
// { "electronic-circuit": 5, "advanced-circuit": 5 }
// "5 electronic circuit, 5 advanced circuit"
function parseIngredients(ingredientlist){
    var arr = [];
    for (var item in ingredientlist) {
        arr.push(ingredientlist[item] + " " + item.split("-").join(" "));
    }
    var result = arr.join(", ");
    return result;
}

function resultCount(item){
    if(item.result_count){ return item.result_count; }
    return 1;
}

function timeCount(item){
    if(item.energy_required){ return item.energy_required; }
    return 0.5;
}