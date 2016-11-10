import React, { Component } from 'react';
import FormButton from './FormButton.js';

require('./app.css');

export default class App extends Component {
  render() {
    return (
			<div className='app'>
				<header>
					<h1>REACT TEST PROJECT</h1>
				</header>
				<main>
					<h2>	Let's begin... </h2>
					<FormButton />
				</main>
				<footer> 
					<p>©2016 testing forms</p>  
				</footer>
			</div>
			);
  }
}


