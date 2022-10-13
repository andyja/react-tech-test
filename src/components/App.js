import React from 'react';
import '../styles/app.css';
import Search from './Search';
import "../requests/getImages";

const App = () => {
  return (
    <div className="App">
      <img 
      className="nasa-logo"
      src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
      alt="nasaLogo"
      />
      <Search />
      <getImages />
    </div>
  );
}

export default App;
