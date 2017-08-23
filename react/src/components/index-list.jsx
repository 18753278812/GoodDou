"use strict";

import React from 'react';
import { Link } from 'react-router-dom';

export default React.createClass({
	getInitialState() {
		return {
			indexList: [],
			page: 1,
		}
	},
	componentDidMount() {
		fetch("http://localhost:3000/indexList").then(response => {
			return response.json()
		}).then(data => {
			this.setState({
				indexList: [...this.state.indexList,...data[`page${this.state.page}`]],
				page: this.state.page + 1
			})
		})
		document.querySelector('.main-body').onscroll = (even) => {
			var e = even || window.event;
			var timer = null;
			if(e.target.scrollTop >= e.target.scrollHeight - e.target.offsetHeight) {
				document.querySelector('.index-list').lastChild.style.display = "block";
				clearTimeout(timer);
				timer = setTimeout(() => {
					fetch("http://localhost:3000/indexList").then(response => {
						return response.json()
					}).then(data => {
						if (data[`page${this.state.page}`] == undefined) {
							document.querySelector('.index-list').lastChild.innerHTML ="没有更多了"
							return;
						}
						this.setState({
							indexList: [...this.state.indexList,...data[`page${this.state.page}`]],
							page: this.state.page + 1
						})
						document.querySelector('.index-list').lastChild.style.display = "none";
					}) 
				},1e3)
			}
		}
	},
	render() {
		const ListItem = this.state.indexList.map((item,index) => {
			return (
				<li key={index}>
					<Link to={`/detail/${item.id}`}>
						<img src={ item.img } />
						<div className="text">
							<h4>{ item.title }</h4>
							<span>{ item.desc }</span>
						</div>	
					</Link>
				</li>
			)
		})

		return (
			<ul className="index-list">
				{ ListItem }
				<li className="loading">正在加载</li>
			</ul>
		)
	}
})