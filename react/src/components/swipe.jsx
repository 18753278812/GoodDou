"use strict";

import React from 'react';
import { Link } from 'react-router-dom';	
import Swiper from '../styles/swiper/swiper-3.4.2.min.js';
require('../styles/swiper/swiper-3.4.2.min.css');

export default React.createClass({
	getInitialState() {
		return {
			banner: []
		}
	},
    componentDidMount() {
    	fetch('http://localhost:3000/banner').then(response => {
			return response.json()
		}).then(result => {
			this._onChange(result);
		})
    },
    _onChange(result) {
    	this.setState({
			banner: result
		})
    	var mySwiper = new Swiper ('.swiper-container', {
		    loop: true,
		    pagination: '.swiper-pagination',
		})
    },
	render() {
		const banner = this.state.banner.map((comment,index) => {
			return (
				<div key={ index } className="swiper-slide">
					<Link to={{ pathname: `/detail/${this.state.banner[index].id}`}}>
						<img src={ this.state.banner[index].img } />
					</Link>
				</div>
			)
		})
		return (
			<div className="swiper-container">
			    <div className="swiper-wrapper">
			        { banner }
			    </div>
			    <div className="swiper-pagination"></div>
			</div>
		)
	}
})