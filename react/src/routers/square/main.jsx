"use strict";

import React from 'react';
import Swiper from '../../components/swipe.jsx';
import { Link } from 'react-router-dom';

function GetFavor(props){  
  const isOk = props.vip;  
  if(isOk){  
    return (<i className="iconfont icon-v"></i>)   
  }else{  
    return (<i></i>);  
  }  
}  
export default React.createClass({
	getInitialState() {
		return {
			hot: {
				timer: []
			},
			topic: {
				list: []
			},
			friend: {
				list: []
			}
		}
	},
	componentDidMount() {
		fetch("http://localhost:3000/square").then(respone => {
			return respone.json()
		}).then(data => {
			this.setState({
				hot: data[0],
				topic: data[1],
				friend: data[2]
			})
		})
	},
	render() {
		const hot = this.state.hot.timer.map((item,index) => {
			return (
				<div key={index} className="hot-list">
					<Link to="/">
						<img src={item.img} />
						<div className="box">
							<span className="title">{ item.title }</span>
							<span className="autor"><img src={item.userimg} />{ item.autor }<GetFavor vip={item.vip}/></span>
							<span className="desc">{ item.desc }</span>
							<span className="msg"><i className="iconfont icon-zan"></i>{ item.zan }<i className="iconfont icon-pinglun"></i>{ item.comment }</span>
						</div>
					</Link>
				</div>
			)
		})
		const topic = this.state.topic.list.map((item,index) => {
			return (
				<li key={ index } className="topic-list">
					<Link to="/">
						<img src={item.img} />
						<div className="box">
							<span className="title">{ item.title }<span>今日围观&nbsp;{ item.count }</span></span>
							<span className="desc">{ item.desc }</span>
						</div>
					</Link>
				</li>
			)
		})
		const friend = this.state.friend.list.map((item,index) => {
			return (
				<li key={ index } className="friend-list">
					<Link to="/">
						<img src={item.img} />
						<span>{item.username}</span>
					</Link>
				</li>
			)
		})
		return (
			<div className="main">
				<Swiper />
				<div className="hot">
					<div className="head">
						<span><i className="iconfont icon-clock"></i>{this.state.hot.title}</span>
						<Link to={`/${this.state.hot.link}`}><i className="iconfont icon-jiantou3"></i></Link>
					</div>
					<div className="list">
						{ hot }
					</div>
				</div>
				<div className="topic">
					<div className="head">
						<span><i className="iconfont icon-huati"></i>{this.state.topic.title}</span>
					</div>
					<ul className="list">
						{ topic }
					</ul>
				</div>
				<div className="friend">
					<div className="head">
						<span><i className="iconfont icon-iconfonticonfontwode1-copy"></i>{this.state.friend.title}</span>
						<Link to="/square/friend"><i className="iconfont icon-jiantou3"></i></Link>
					</div>
					<ul className="users">
						{ friend }
					</ul>
				</div>
			</div>
		)
	}
})