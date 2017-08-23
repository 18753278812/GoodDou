const webpack = require('webpack');
module.exports = {
	entry: [
	'webpack-dev-server/client?http://localhost:8060',
	'webpack/hot/only-dev-server',
	__dirname + '/src/app.js'],
	output: {
		path: __dirname + '/prd',
		filename: 'bundle.js'
	},

	devtool: 'source-map',

	module: {
		loaders: [{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		},{
			test: /\.scss$/,
			loader: 'style-loader!css-loader!sass-loader'
		},{
			test: /\.less$/,
			loader: 'style-loader!css-loader!less-loader'
		},{
			test: /\.js$/,
			loader: 'babel-loader'
		},{
			test: /\.jsx$/,
			loader: 'babel-loader'
		},{
	      	test:/\.(eot|ttf|woff|svg)$/,
	      	loader:'file-loader'
	    }]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	]
}