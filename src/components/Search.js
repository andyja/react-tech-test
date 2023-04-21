import React, { useRef } from "react";
import "../styles/search.css";
import "../requests/getImages";
import getImages from "../requests/getImages";


const Search = ({ setSearchResults }) => {
    const searchBox = useRef(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setSearchResults(await getImages(searchBox.current.value));
    };

    return (
        <div className="search">
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    className="search-input" 
                    type="text"
                    placeholder="search here for nasa images..."
                    ref={searchBox}
                />
                <button className="search-btn" type="submit">
                    Go!
                </button>
            </form>
        </div>
    );
};



export default Search;