import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import FileBrowser from './FileBrowser'
import * as reducers from '../reducers';
import { Provider } from 'react-redux';

const reducer = combineReducers(reducers);

const store = createStore(reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FileBrowser />
      </Provider>
    );
  }
}
module.exports = App;
