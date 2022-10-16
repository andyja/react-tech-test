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


//img: https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80