"use strict";

import React from 'react';
import { Link } from 'react-router-dom';

function IsVip(props){
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
			list: [],
			page: 1,
			data: []
		}
	},
	componentDidMount() {
		fetch("http://localhost:3000/friend").then(response => {
			return response.json();
		}).then(data => {
			this.setState({
				list: data.slice((this.state.page - 1) * 8,this.state.page * 8),
				page: this.state.page + 1,
			})
		})
		document.querySelector('.body-list').onscroll = e => {
			var e = e || window.event;
			var timer = null;
			if(e.target.scrollTop >= e.target.scrollHeight - e.target.offsetHeight) {
				document.querySelector('.body-list').lastChild.style.display = "block";
				clearTimeout(timer);
				timer = setTimeout(() => {
					fetch("http://localhost:3000/friend").then(response => {
						return response.json()
					}).then(data => {
						if (data.length <= this.state.page * 8) {
							document.querySelector('.body-list').lastChild.innerHTML ="没有更多了";
							this.setState({
								list: [...this.state.list,...data.slice((this.state.page - 1) * 8)]
							})
							return;
						}
						this.setState({
							list: [...this.state.list,...data.slice((this.state.page - 1) * 8,this.state.page * 8)],
							page: this.state.page + 1
						})
						document.querySelector('.body-list').lastChild.style.display = "none";
					}) 
				},1e3)
			}
		}
	},
	render() {
		const list = this.state.list.map((item,index) => {
			return (
				<li key={index}>
					<Link to="/">
						<img src={item.img} />
						<div className="box">
							<span className="title">{item.username}<IsVip vip={item.vip} /></span>
							<span className="desc">{item.desc}</span>
							<span className="address">{item.address}</span>
						</div>
					</Link>
				</li>
			)
		})
		return (
			<ul className="body-list">
				{ list }
				<li className="loading">正在加载</li>
			</ul>
		)
	}
})