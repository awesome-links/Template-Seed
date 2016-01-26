'use strict';

import React from 'react';
import Input from 'react-toolbox/lib/input';
import styles from '../css/styles';
import AppBar from 'react-toolbox/lib/app_bar';

let {Component} = React;

export default class Header extends Component {
  render() {
    return (
      <AppBar flat className={styles.searchBar}>
          <Input type='text' label='Search Awesome Links' name='search' value='' icon='search' className={styles.searchText}/>
      </AppBar>
    );
  }
}

