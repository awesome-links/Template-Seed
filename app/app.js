'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import  Header from './components/header';
import  Search from './components/search';
import ContributeButton from './components/contribute';
import LinksList from './components/lists';
import 'normalize.css';

let {Component}  = React;

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Awesome ES6"/>
        <Search/>
        <div style={{padding: '20px'}}>
          <LinksList />
        </div>
        <ContributeButton/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('awesomeApp'));