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
        </form>
    );
};

export default SearchBar