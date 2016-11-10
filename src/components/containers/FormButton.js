import React, { Component } from 'react';
import Portal from 'react-portal';
import RegisterWindow from './RegisterWindow.js';

require ('./formbutton.css');


export default class FormButton extends Component {

	render(){
		const button = <button className='button'>Click me</button>;
		return (
			<Portal closeOnEsc openByClickOn={button}>
					<RegisterWindow />
			</Portal>	
		);
	}
}
