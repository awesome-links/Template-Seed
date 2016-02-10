'use strict';

import React from 'react';
import { List, ListItem, ListDivider } from 'react-toolbox';
import styles from '../css/styles.scss';
let {Component} = React;

const ListGroup = (props) => {
  return (
    <div>
      {props.items.length > 0 &&
        <h2 className={styles.subHeader}>{props.caption.toUpperCase()}</h2>
      }
      {
        props.items.map((item, index) => (
            <ListItem
              key={index}
              caption={item.heading.toUpperCase()}
              legend={item.description}
              leftIcon='link'
            />
        ))
      }
    </div>
  );
};

const Lists = (props) => {
  return (
    <List>
      {
        Object.keys(props.data).map((groupName, index) => (
          <ListGroup caption={groupName} items={props.data[groupName]} key={index}/>
        ))
      }
    </List>
  );
};

export default class LinksList extends Component {
  render() {
    return (
      <Lists {...this.props} />
    );
  }
}