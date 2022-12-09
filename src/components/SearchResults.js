import React from "react";
import "../styles/searchresults.css";

const SearchRersults = ({ results }) => {
    if (!results.length) {
        return<p>Nothing to see here</p>
    } else {
return (
    <>
    <p>Search Results</p>
    <p>Images:</p>
    <div className="search-results">
    {results.map((image, index) => (
       <img
       key={index}
       className="search-result__images"
       src={image}
       alt="result-of-space-search"
      />
    ))}
    </ div>
    </>
);
}
};

export default SearchRersults;