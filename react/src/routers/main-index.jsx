"use strict";

import React from 'react';
import store from '../store/store.js';
import ReactSwipe from '../components/swipe.jsx';
import IndexList from '../components/index-list.jsx';
import { Link } from 'react-router-dom';
export default React.createClass({
	getInitialState() {
		return (
			this.state = {
				serch: store.getState().serch,
				recomment: []
			}
		)
	},
	componentDidMount() {
		//绑定数据更新后所要触发的方法
		fetch("http://localhost:3000/recomment").then(response => {
			return response.json()
		}).then(result => {
			this.setState({
				recomment: result
			})
		})
	},
	render() {
		const recomment = this.state.recomment.map((item,index) => {
			return (
				<li key={index}><Link to={{pathname: "/list",state:{id: item.id}}}>
					<h4>{item.title}</h4>
					<span>{item.desc}</span>
					<img src={item.img} />
				</Link></li>
			)
		})
		return (
			<div id="main-index">
				<header>
					<i className="iconfont icon-jia"></i>
					<div>
						<i className="iconfont icon-fangdajing"></i>
						<input type="text" className="serch" placeholder={ this.state.serch } />
					</div>
					<i className="iconfont icon-lingdang"></i>
				</header>
				<div className="main-body">
					<div className="index-swiper">
						<ReactSwipe />
					</div>
					<ul className="main-nav">
						<li><Link to="/video"><i className="iconfont icon-shiwu"></i><span>看视频</span></Link></li>
						<li><Link to="/bible"><i className="iconfont icon-canju"></i><span>厨房宝典</span></Link></li>
						<li><Link to="/hot"><i className="iconfont icon-hot"></i><span>热门活动</span></Link></li>
						<li><Link to="/hotlist"><i className="iconfont icon-huangguan"></i><span>排行榜</span></Link></li>
						<li><Link to="/all"><i className="iconfont icon-paihangbang-"></i><span>美食大全</span></Link></li>
					</ul>
					<ul className="main-recommend main-padding">
						{ recomment }
						<li><Link className="c" to="/">菜谱<br />分类</Link></li>
						<li><Link className="c" to="/">热门<br />专辑</Link></li>
					</ul>
					<IndexList />
				</div>
			</div>
		)
	}
})
