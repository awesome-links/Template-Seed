'use strict';

import React from 'react';
import Input from 'react-toolbox/lib/input';
import styles from '../css/styles';
import AppBar from 'react-toolbox/lib/app_bar';

let {Component} = React;

export default class Search extends Component {
  render() {
    return (
      <AppBar flat className={styles.searchBar}>
          <Input
            type='text'
            label='Search Awesome Links'
            name='search'
            icon='search'
            className={styles.searchText}
            value={this.props.searchText}
            onChange={(text)=>this.props.onSearch(text)}
          />
      </AppBar>
    );
  }
}

