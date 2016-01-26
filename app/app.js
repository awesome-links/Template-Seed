'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
let {Component}  = React;
import  Header from './components/header';
import  Search from './components/search';
import ContributeButton from './components/contribute';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Awesome ES6"/>
        <Search/>
        <ContributeButton/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('awesomeApp'));