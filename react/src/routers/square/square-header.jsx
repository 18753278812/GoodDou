"use strict";

import React from 'react';

export default React.createClass({
	render() {
		return (
			<header>
				<div className="title">广场</div>
				<div className="search">
					<i className="iconfont icon-fangdajing"></i>
					<input type="text" className="serch" />
				</div>
				<div className="edit">
					<i className="iconfont icon-bianji"></i>
				</div>
			</header>
		)
	}
})