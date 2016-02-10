'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import  Header from './components/header';
import  Search from './components/search';
import ContributeButton from './components/contribute';
import LinksList from './components/lists';
import styles from './css/styles.scss';
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
        listData: listData
      });
    });
  }

  render() {
    return (
      <div>
        <Header title="Awesome ES6"/>
        <Search/>
        { this.state.loading &&
        <div className={styles.absCenter}>
          <ProgressBar type="circular" mode="indeterminate"/>
        </div>
        }
        { Object.keys(this.state.listData).length > 0 &&
        <div style={{padding: '20px'}}>
          <LinksList data={this.state.listData}/>
        </div>
        }
        <ContributeButton/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('awesomeApp'));