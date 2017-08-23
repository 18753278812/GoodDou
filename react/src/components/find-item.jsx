"use strict";

import React from 'react';
import { Link } from 'react-router-dom';
export default React.createClass({
	getInitialState() {
		return {
			meals: {
				list: []
			},
			cate: {
				list: []
			},
			share: {
				list: []
			},
			topic: {
				list: []
			}
		}
	},
	componentDidMount() {
		fetch('http://localhost:3000/find').then(resonse => {
			return resonse.json()
		}).then(data => {
			this.setState({
				meals: data[0],
				cate: data[1],
				share: data[2],
				topic: data[3]
			})
		})
	},
	render() {
		const meals = this.state.meals.list.map((item,index) => {
			return (
				<li key={ index }>
					<Link to="/"><img src={item.img} /></Link>
				</li>
			)
		})
		const cate = this.state.cate.list.map((item,index) => {
			return (
				<li key={ index }>
					<Link to="/"><img src={item.img} /></Link>
				</li>
			)
		})
		const share = this.state.share.list.map((item,index) => {
			return (
				<li key={ index }>
					<Link to="/"><img src={item.img} /><span>{item.title}</span></Link>
				</li>
			)
		})
		const topic = this.state.topic.list.map((item,index) => {
			return (
				<li key={ index }>
					<Link to="/"><img src={item.img} /></Link>
				</li>
			)
		})
		return (
			<div className="find-item">
				<div className="meals">
					<div className="text">
						<span>{ this.state.meals.title }</span>
						<span>{ this.state.meals.desc }</span>
					</div>
					<ul>{ meals }</ul>
				</div>
				<div className="cate">
					<div className="text">
						<span>{ this.state.cate.title }</span>
						<span>{ this.state.cate.desc }</span>
					</div>
					<ul>{ cate }</ul>
				</div>
				<div className="share">
					<div className="text">
						<span>{ this.state.share.title }</span>
						<span>{ this.state.share.desc }</span>
						<Link to={{pathname:`/${this.state.share.to}`}}>更多<i className="iconfont icon-you"></i></Link>
					</div>
					<ul>{ share }</ul>
				</div>
				<div className="topic">
					<div className="title">
						<span>{ this.state.topic.title }</span>
						<span>{ this.state.topic.desc }</span>
					</div>
					<ul>{topic}</ul>
				</div>
			</div>
		)
	}
})