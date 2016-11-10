import React, { Component } from 'react';
import ListContainer from './listContainer.js';

export default class UsersPage extends Component {
  render() {
    return (
    	<div>
				<h2> See what You get </h2>
				<ListContainer />
			</div>

    	);
  }
}