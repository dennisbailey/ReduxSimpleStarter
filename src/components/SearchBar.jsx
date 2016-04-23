// Another ES6 way to import React and attach component
import React, {Component } from 'react';

class SearchBar extends Component {
  // add some methods to this class
  constructor() {
    // constructors need super ot call the parent constructor
    super();
    this.state = { term: '' }
  }
  
  render () {
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div> 
    )
  }
}

// module.exports ES6 alternative
export default SearchBar;
