"use strict";

import React from 'react';
import { Link } from 'react-router-dom';

export default React.createClass({
	render() {
		return (
			<div id="my">
				<header className="my">
					<span>我的</span>
					<i className="iconfont icon-icon"></i>
				</header>
				<div className="body">
					<div className="login">
						<Link to="/login">
							<i className="iconfont icon-renwu"></i>
							<span>点击登录或注册</span>
						</Link>
					</div>
					<div className="space">
						<Link to="/"><i className="iconfont icon-miantiao"></i>菜谱</Link>
						<Link to="/"><i className="iconfont icon-xing"></i>菜单</Link>
						<Link to="/"><i className="iconfont icon-fengshan"></i>相册</Link>
					</div>
					<ul className="list">
						<li><Link to="/"><i className="iconfont icon-lingdang"></i>消息</Link></li>
						<li><Link to="/"><i className="iconfont icon-zuji"></i>美食足迹</Link></li>
						<li><Link to="/"><i className="iconfont icon-huati"></i>话题</Link></li>
					</ul>
					<ul className="list">
						<li><Link to="/"><i className="iconfont icon-xiazai"></i>下载</Link></li>
						<li><Link to="/"><i className="iconfont icon-xinli"></i>收藏</Link></li>
					</ul>
					<ul className="list">
						<li><Link to="/"><i className="iconfont icon-qianbao"></i>钱包</Link></li>
						<li><Link to="/"><i className="iconfont icon-32pxgouwulan"></i>采购清单</Link></li>
						<li><Link to="/"><i className="iconfont icon-dongtai2"></i>我的动态</Link></li>
						<li><Link to="/"><i className="iconfont icon-jiqiren"></i>好斗小智</Link></li>
					</ul>
					<ul className="list">
						<li><Link to="/"><i className="iconfont icon-youxiang"></i>意见反馈</Link></li>
					</ul>
					<div className="share">分享好豆</div>
				</div>
			</div>
		) 
	}
})