import React, { Component } from 'react';
import { Link } from 'react-router';

require('./main.css');

export default class MainLayout extends Component {
  render() {
    return (
			<div className='main'>
				<header>
					<h1>REACT TEST PROJECT</h1>
        <ul className='navBar'>
          <li><Link to='/' activeClassName='active'>Start Page</Link></li>
          <li><Link to='UsersPage' activeClassName='active'>Users Page</Link></li>
        </ul>
				</header>
				<main>
					{this.props.children}
				</main>
				<footer> 
					<p>©2016 testing forms</p>  
				</footer>
			</div>
			);
  }
}
          // <li><Link to='../containers/usersPage.js' activeClassName='active'>Users</Link></li>