'use strict';
import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import ContributeButton from '../components/contribute';
let {Component} = React;

export default class Header extends Component {
  render(){
    return (
      <AppBar fixed>
        <h1>{this.props.title}</h1>
        <ContributeButton/>
      </AppBar>
    );
  }
}