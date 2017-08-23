"use strict";

import React from 'react';
export default React.createClass({
	componentWillMount() {
		// document.querySelector('#footer').style.display = "none"; 
	},
	render() {
		return (
			<div className="detail">{this.props.match.params.aid}</div>
		)
	}
})