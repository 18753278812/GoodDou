"use strict";

import React from "react";
import { NavLink, Route } from 'react-router-dom';
import Main from './square/main.jsx';
import Friend from './square/friend.jsx';
import Dynamic from './square/dynamic.jsx';
import SquareHeader from './square/square-header.jsx';
import SquareFriend from './square/square-friend.jsx';

export default React.createClass({
	render() {
		return (
			<div id="square">
				<Route exact path="/square" component={ SquareHeader } />
				<Route path="/square/friend" component={ SquareFriend } />
				<div className="link">
					<NavLink activeStyle={{"color": "#ff991c","background": "#fff"}} exact to="/square"><i className="iconfont icon-svgiconxiaolian"></i>话题</NavLink>
					<NavLink activeStyle={{"color": "#ff991c","background": "#fff"}} to="/square/friend"><i className="iconfont icon-iconfonticonfontwode1-copy"></i>豆友</NavLink>
					<NavLink activeStyle={{"color": "#ff991c","background": "#fff"}} to="/square/dynamic"><i className="iconfont icon-dongtai"></i>动态</NavLink>
				</div>
				<Route exact path="/square" component={ Main } />
				<Route path="/square/friend" component={ Friend } />
				<Route path="/square/dynamic" component={ Dynamic } />
			</div>
		)
	}
})
