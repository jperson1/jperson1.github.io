// Exported to RecipeList.js
import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <form action="/" method="get" autoComplete="off">
            <input className="w-4/5 p-4"
                value={searchQuery}
                onInput={e => setSearchQuery(e.target.value)}
                type="text"
                placeholder="Search Recipes"
                name="s"
            />
            <button className="w-1/5 p-4"
                type="submit">
                Submit
            </button>
        </form>
    );
};

export default SearchBar