var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
var friends = require('../controllers/friends.js');
var path = require( 'path' );

module.exports = function(app){
	app.get('/friends', function(req, res) {
		friends.index(req, res);
	})
	app.get('/friends/:id', function(req, res) {
		friends.show(req, res);;
	})
	app.post('/friends', function(req, res) {
		friends.create(req, res);
	})
	app.put('/friends/:id', function(req, res) {
		friends.update(req, res);
	})
	app.delete('/friends/:id', function(req, res) {
		friends.delete(req, res);
	})

	app.get('/*', function(req, res) {
		res.sendFile(path.join(__dirname, '../../client/index.html'));
	})
}