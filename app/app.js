'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import  Header from './components/header';
import  Search from './components/search';
import ContributeButton from './components/contribute';
import LinksList from './components/lists';
import styles from './css/styles.scss';
import _ from 'lodash';
import 'normalize.css';

let {Component}  = React;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      listData: {}
    };
  }

  componentDidMount() {
    fetch('./links.json').then(res => res.json()).then(listData => {
      this.setState({
        loading: false,
        listData: listData,
        searchText: ''
      });
    });
  }

  onSearch(searchText) {
    this.setState({
      searchText: searchText
    });
  }

  getFilteredData() {
    let {searchText, listData } = this.state;
    if (!searchText) {
      return listData;
    }
    let regex = new RegExp(searchText, 'i');
    let out =  _.mapValues(listData, function (items) {
      return _.filter(items, function (item) {
        return item.heading.match(regex) || item.description.match(regex)
      });
    });
    return out;
  }

  render() {
    return (
      <div>
        <Header title="Awesome ES6"/>
        <Search onSearch={ this.onSearch.bind(this) } searchText={this.state.searchText}/>
        { this.state.loading &&
        <div className={styles.absCenter}>
          <ProgressBar type="circular" mode="indeterminate"/>
        </div>
        }
        { Object.keys(this.state.listData).length > 0 &&
        <div style={{padding: '20px'}}>
          <LinksList data={ this.getFilteredData() }/>
        </div>
        }
        <ContributeButton/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('awesomeApp'));