'use strict'; 

import React from 'react';
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox';


let {Component} = React;

const Lists = () => (
  <List selectable ripple>
    <ListSubHeader caption='Explore characters' />
    <ListItem
      caption='Dr. Manhattan'
      legend="Jonathan 'Jon' Osterman"
      leftIcon='link'
    />
    <ListItem
      caption='Ozymandias'
      legend='Adrian Veidt'
      leftIcon='link'
    />
    <ListItem
      caption='Rorschach'
      legend='Walter Joseph Kovacs'
      leftIcon='link'
    />
  </List>
);

export default class LinksList extends Component {
  render(){
    return (
      <Lists />
    );
  }
}