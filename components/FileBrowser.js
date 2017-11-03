'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import FileList from './FileList';
// import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';




class FileBrowser extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const { state } = this.props;
      return (
        <FileList />
      );
    }
  }
  module.exports = FileBrowser;