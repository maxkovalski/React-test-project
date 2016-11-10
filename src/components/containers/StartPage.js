import React, { Component } from 'react';
import FormButton from './FormButton.js';

export default class StartPage extends Component {
  render() {
    return (
    	<div>
				<h2> First, create a user </h2>
				<FormButton />
			</div>
    	);
  }
}