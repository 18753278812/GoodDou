"use strict";

import React from 'react';

export default React.createClass({
	render() {
		return (
			<div id="list">{this.props.location.state.id}</div>
		)
	}
})