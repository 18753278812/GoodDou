"use strict";

import React from 'react';
import ReactDom from 'react-dom';
//样式
require('./styles/main.scss');
//组件
import Main from './routers/main.jsx';

ReactDom.render(
	<Main />,
	document.getElementById('app')
)

if(module.hot) {
     module.hot.accept();
}