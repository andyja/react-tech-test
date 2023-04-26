import React from "react";
import "../styles/searchresults.css";
import 'photoswipe/dist/photoswipe.css';

import { Gallery, Item } from 'react-photoswipe-gallery';

const SearchResults = ({ results }) => {
    const smallItemStyles = {
        cursor: 'pointer',
        objectFit: 'cover',
        width: '150px',
        height: '150px',
    };

    if (!results.length){
        return<p>Nothing to see here</p>
    } else {
return (
    <>
    <p>Search Results</p>
    <p>Images:</p>
    
    <div className="search-results">
        <Gallery>
            <div
                style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 0fr)',
                gridGap: 15,
                }}
            > 
                {results.map((image, index) => (
                <Item
                    cropped
                    original={image}
                    thumbnail={image}
                    width="1024"
                    height="768"
                    key={index}
                >
                    {({ ref, open }) => (
                        <img
                            style={smallItemStyles} 
                            ref={ref} 
                            onClick={open} 
                            src={image} 
                            alt=""
                        />
                    )}
                </Item>  
                ))}
            </div>
        </Gallery>
    </div>
    </>
);
}
};

export default SearchResults;