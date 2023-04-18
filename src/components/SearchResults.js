import React from "react";
import "../styles/searchresults.css";
import 'photoswipe/dist/photoswipe.css';

import { Gallery, Item } from 'react-photoswipe-gallery';

const SearchResults = ({ results }) => {
    if (!results.length) {
        return<p>Nothing to see here</p>
    } else {
return (
    <>
    <p>Search Results</p>
    <p>Images:</p>
    
    <div className="search-results">
        <Gallery> 
            {results.map((image, index) => (

            <Item
                original={image}
                thumbnail={image}
                width="1024"
                height="768"
                key={index}
            >
                {({ ref, open }) => (
                    <div className="thumbnail" style={{backgroundImage: `url(${image})`}}>
                        <img ref={ref} onClick={open} src={image} />
                    </div>
                )}
            </Item>  
            ))}
        </Gallery>
    </div>
    </>
);
}
};

export default SearchResults;