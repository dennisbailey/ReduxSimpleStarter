// ES6 syntax to require
// var React = require('react')
import React from 'react';


//Helper method to attach react to the DOM
import ReactDom from 'react-dom';

// Alternate method to extend App
// Let Component = React.Component
// class App extends Component

class App extends React.Component {
  // You must have a render funtion within every react component
  render() {
    // render components can only return one element. But that element can wrap around multiple elements
    return (
      <div>Im a react component</div>
    )
  }
}

// Substantiate a react component and tell it where on the DOM it should attach itself
ReactDom.render(<App />, document.querySelector('.container'))