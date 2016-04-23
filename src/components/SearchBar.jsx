// Another ES6 way to import React and attach component
import React, {Component } from 'react';

class SearchBar extends Component {
  render () {
    return (
      <div className="search-bar">
        <input />
      </div> 
    )
  }
}

// module.exports ES6 alternative
export default SearchBar;
