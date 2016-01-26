'use strict';

import React from 'react';
import {Button} from 'react-toolbox/lib/button';
import styles from '../css/styles';
let {Component} = React;

export default class ContributeButton extends Component {
  render(){
    return (
      <div className={styles.contributeButton}>
        <Button icon='add' floating accent mini/>
      </div>
    );
  }
}