import React from 'react';
import ToolTip from './ToolTip.js';
import ReactDOM from 'react-dom';
import Portal from 'react-portal';


require('./registerwindow.css');


var RegisterWindow = React.createClass({
	getInitialState: function(){
		return {
			validName: false,
			validLastName: false
		};
	},
	componentDidMount: function()
	{
		ReactDOM.findDOMNode(this.refs.fisrtName).focus();
	},
	handleChange: function(fieldName, e) {
		e.preventDefault();
		var value = e.target.value.trim();
		if (value.length > 0) {
			this.setState({[''+ fieldName] : value});
		} else {
			this.setState({[''+ fieldName] : value});
		}
	},
	handleClick: function(e) {
		e.preventDefault();
		if (this.state.validName.length > 0 && this.state.validLastName.length > 0) {
			
			this.props.closePortal();

		} else {
			this.refs.myPortal.openPortal();
		}
	},
	render: function(){
		return (
			<div className='modal'>
				<form>		
					<span id='close' onClick={this.props.closePortal}>x</span>
					<div className='windowForm'>
						<fieldset>
							<legend><b>Personal Info</b></legend>	
							<p>
								First Name:
								<input type='text' 
								ref='fisrtName' 
								onChange={this.handleChange.bind(this, 'nameIsValid')}
								placeholder='Type here...' />
							</p>
							<p>
								Last Name:
								<input type='text' 
								ref='lastName' 
								onChange={this.handleChange.bind(this, 'lastNameIsValid')}
								placeholder='Type here...' />
							</p>
							<Portal ref='myPortal'>
								<ToolTip />
							</Portal>						
						</fieldset>	
						<button className='button' onClick={this.handleClick}>Create</button>
					</div>
				</form>
			</div>
			)
	}
});


export default RegisterWindow;