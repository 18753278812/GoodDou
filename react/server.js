const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
	contentBase: __dirname + '/prd',
	hot: true,
	inline: true,
	historyApiFallback: true
}).listen(8060, "localhost", function(err,result){
	if(err) {
		console.log(err);
	} else {
		console.log("运行在localhost:8060");
	}
})