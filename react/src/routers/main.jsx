"use strict";

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import MainLink from '../components/main-link.jsx';
import MainIndex from './main-index.jsx';
import MainFind from './main-find.jsx';
import Detail from './detail.jsx';
import My from './main-my.jsx';
import Square from './main-square.jsx';
import Share from './share.jsx';
import List from './list.jsx';
import Login from './login.jsx';
export default React.createClass({
	render() {
		return (
			<BrowserRouter>
				<div id="main">
					<div id="main-router">
						<Route exact path="/" component={ MainIndex }></Route>
						<Route path="/find" component={ MainFind }></Route>
						<Route path="/square" component={ Square }></Route>
						<Route path="/my" component={ My }></Route>
					</div>
					<MainLink />
					<Route className="slide" path="/detail/:aid" component={ Detail }></Route>
					<Route className="slide" path="/share" component={ Share }></Route>
					<Route className="slide" path="/list" component={ List }></Route>
					<Route className="slide" path="/login" component={ Login }></Route>
				</div>
			</BrowserRouter>
		)
	}
})
