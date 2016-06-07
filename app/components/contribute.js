'use strict';

import React from 'react';
import {Button} from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';
import styles from '../css/styles';
let {Component} = React;

let TooltipButton = Tooltip(Button);

export default class ContributeButton extends Component {
  render(){
    return (
      <div className={styles.contributeButton}>
        <TooltipButton icon='add' floating accent tooltip='Contribute' />
      </div>
    );
  }
}