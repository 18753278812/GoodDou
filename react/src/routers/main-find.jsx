"use strict";

import React from 'react';
import FindItem from '../components/find-item.jsx';

export default React.createClass({
	render() {
		return (
			<div id="find">
				<header>
					<div>
						<i className="iconfont icon-fangdajing"></i>
						<input type="text" className="serch" />
					</div>
					<i className="iconfont icon-lingdang"></i>
				</header>
				<div className="find-body">
					<FindItem />
				</div>
			</div>
		)
	}
})