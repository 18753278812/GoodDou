"use strict";

import React from 'react';
import { NavLink } from 'react-router-dom';

export default React.createClass({
	render() {
		return (
			<div id="footer">
				<NavLink to="/" exact activeStyle={{"color": "#ffac27"}}><i className="iconfont icon-chushimao"></i><span>好豆</span></NavLink>
				<NavLink to="/find" activeStyle={{"color": "#ffac27"}}><i className="iconfont icon-faxian"></i><span>发现</span></NavLink>
				<NavLink to="/square" activeStyle={{"color": "#ffac27"}}><i className="iconfont icon-diqiu"></i><span>广场</span></NavLink>
				<NavLink to="/my" activeStyle={{"color": "#ffac27"}}><i className="iconfont icon-wode"></i><span>我的</span></NavLink>
			</div>
		)
	}
})