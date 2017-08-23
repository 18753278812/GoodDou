"use strict";

import React from 'react';

export default React.createClass({
	back() {
		history.back();
	},
	componentDidMount() {
		document.querySelector('.inp').onblur = () => {
			var val = document.querySelector('.inp').value;
			var reg = /^[a-zA-Z_][a-zA-Z0-9_]{5,20}/;
			if (!reg.test(val)) {
				document.querySelector('.user-tip').innerHTML = "格式不正确";
			} else {
				document.querySelector('.user-tip').innerHTML = "";
			}
		}
	},
	render() {
		return (
			<div id="login">
				<header>
					<i className="iconfont icon-weibiaoti101" onClick={this.back}></i>
					<span>注册</span>
				</header>
				<div className="title">账号密码登录</div>
				<div className="loginbox">
					<input className="inp" type="text" name="username" placeholder="请输入手机号和邮箱"/><br/>
					<span className="user-tip"></span>
					<input className="inp" type="password" name="password" placeholder="请输入密码" /> 
					<span className="psd-tip"></span>
					<button>登录</button>
					<span>手机快捷登录 | 忘记密码？</span>
				</div>
				<div className="partner">
					<div className="list">
						<i className="iconfont icon-weixin"></i>
						<i className="iconfont icon-qq"></i>
						<i className="iconfont icon-weibo-logo"></i>
					</div>
					<div className="foot">注册和登录即代表同意《好豆用户使用协议》</div>
				</div>
			</div>
		)
	}
})