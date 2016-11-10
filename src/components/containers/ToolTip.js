import React from 'react';

require('./tooltip.css');


var ToolTip = React.createClass({
	render: function() {
		return (
			<span className='tooltip'>Enter Your name and last name using Latin alphabet</span>		
			);
	}
});

export default ToolTip;