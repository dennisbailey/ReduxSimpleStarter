// Another ES6 way to import React and attach component
import React, {Component } from 'react';

class SearchBar extends Component {
  // add some methods to this class
  constructor(props) {
    // constructors need super ot call the parent constructor
    super(props);
    this.state = { term: '' }
  }
  
  onInputChange(term) {
    // ES6 { term } is the same as { term: term }
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
  
  render () {
    return (
      <div className="search-bar">
        <input 
          value={ this.state.term }
          onChange={ event => this.onInputChange(event.target.value) }
        />
      </div> 
    )
  }
}

// function(event) { return this.onInputChange(event.target.value)}
// same as onChange={event => this.onInputChange(event.target.value)}

// module.exports ES6 alternative
export default SearchBar;
