import React, { useState } from 'react';
import '../styles/app.css';
import Search from './Search';
import SearchResults from "./SearchResults"

function App() {
  const [searchResults, setSearchResults] = useState([]);
  
  return (
    <div className="App">
      <img 
      className="nasa-logo"
      src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
      alt="nasaLogo"
      />
      <Search setSearchResults={setSearchResults} />
      <SearchResults results={searchResults} />
    </div>
  );
}

export default App;