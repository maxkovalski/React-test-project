import React, { Component } from 'react';
// import Store from '../data/store.js';

require('./formbutton.css');
require('./listContainer.css');

var Store = {
  users: [
  {
    id: 0,
    name: 'Max',
    lastName: 'Kovalski',
    fullName: 'Max Kovalski'
  },
    {
    id: 1,
    name: 'Max',
    lastName: 'Kovalski',
    fullName: 'Max Kovalski'
  },
    {
    id: 2,
    name: 'Max',
    lastName: 'Kovalski',
    fullName: 'Max Kovalski'
  },
    {
    id: 3,
    name: 'Max',
    lastName: 'Kovalski',
    fullName: 'Max Kovalski'
  },
],
};

export default class listContainer extends Component {
	render() {
		return (
			<div className='listContainer'>
				{Store.users.map(function(user) {
					return (
						<div key={user.ID} className='listItem'>
							<div>{user.name}</div>
							<div>{user.lastName}</div>
							<div>{user.fullName}</div>
						<button>Edit</button>
						</div>
					)
				}
				)}
			</div>
		)
	}

}




