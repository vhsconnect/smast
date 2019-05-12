var path = require('path');

module.exports = {
	mode: 'production',
	entry: './client/index.js',
	output: {
		path: path.resolve('build'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.html$/,
				loader: "file?name=[name].[ext]"
			}
		]
	}
};

