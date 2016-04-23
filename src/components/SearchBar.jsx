// Another ES6 way to import React and attach component
import React, {Component } from 'react';

class SearchBar extends Component {
  // add some methods to this class
  constructor() {
    this.state = { term: ''}
  }
  
  render () {
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
        />
      </div> 
    )
  }
}

// module.exports ES6 alternative
export default SearchBar;
