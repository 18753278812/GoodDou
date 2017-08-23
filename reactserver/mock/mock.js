const banner = require('./banner.js');
const recomment = require('./recomment.js');
const indexList = require('./index-list.js');
const find = require('./find.js');
const square = require('./square-main.js');
const friend = require('./square-friends.js');
module.exports = function() {
	return {
		"banner": banner,
		"recomment": recomment,
		"indexList": indexList,
		"find": find,
		"square": square,
		"friend": friend,
	}
}