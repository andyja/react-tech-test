import React, { useRef, useState } from "react";
import "../styles/search.css";
import "../requests/getImages";
import getImages from "../requests/getImages";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500',
];

const Search = ({ setSearchResults }) => {
    const searchBox = useRef(null);

    const [state, setState] = useState({
        photoIndex: 0,
        isOpen: false,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSearchResults(await getImages(searchBox.current.value));
    };

    const handleClick = () => {

    };

    return (
        <>
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
                <button onClick={handleClick}>Click me</button>
            </div>
            {state.isOpen && (
                <Lightbox
                    mainSrc={images[state.photoIndex]}
                    nextSrc={images[(state.photoIndex + 1) % images.length]}
                    prevSrc={images[(state.photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setState((prev) => ({
                        ...prev,
                        isOpen: false,
                    }))}
                    onMovePrevRequest={() =>
                    setState((prev) => ({
                        ...prev,
                        photoIndex: (prev.photoIndex + images.length - 1) % images.length,
                    }))
                    }
                    onMoveNextRequest={() =>
                    setState((prev) => ({
                        ...prev,
                        photoIndex: (prev.photoIndex + 1) % images.length,
                    }))
                    }
                />
            )}
        </>
    );
};



export default Search;