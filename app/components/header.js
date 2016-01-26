'use strict';
import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
let {Component} = React;

export default class Header extends Component {
  render(){
    return (
      <AppBar>
        <h1>{this.props.title}</h1>
      </AppBar>
    );
  }
}