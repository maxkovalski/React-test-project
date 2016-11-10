import React, { Component } from 'react';
import { Router, Route, hashHistory }  from 'react-router';

import MainLayout from './components/layouts/main-layout.js';

import StartPage from './components/containers/StartPage.js';
import UsersPage from './components/containers/UsersPage.js';


export default class MyRouter extends Component {
  render() {
    return (
    <Router history={hashHistory}>
      <Route component={MainLayout}>
        <Route path='/' component={StartPage} />
        <Route path='UsersPage' component={UsersPage} />
      </Route>
    </Router>
    );
  }
}



