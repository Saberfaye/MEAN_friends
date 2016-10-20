var mongoose = require('mongoose');

var FriendsSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	birthday: String
});
var Friend = mongoose.model('Friend', FriendsSchema);