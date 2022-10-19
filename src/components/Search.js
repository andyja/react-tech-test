import React, { useState } from "react";
// import React, { useRef } from "react";
import "../styles/search.css";
import "../requests/getImages";
import getImages from "../requests/getImages";


const Search = ({ setSearchResults }) => {
    const [value, setValue] = useState();

const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchResults(await getImages(value));
};

        // function SearchForm(props) {
        // const { onSubmit } = props;
  
        // const inputElement = useRef(null);

        // <button
        // type="submit"
        // onClick={() => {
        //   onSubmit(inputElement.current.value);
        // }}
        // ></button>

    return (
        <div className="search">
        <form className="search-form" onSubmit={handleSubmit}>
        <input className="search-input" 
        type="text" placeholder="search here for nasa images..."
        onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-btn" type="submit">
            Go!
        </button>
        </form>
        </div>
    );
};



export default Search;