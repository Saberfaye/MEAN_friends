var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

function FriendsController(){
	this.index = function(req, res) {
		Friend.find({}, function(err, data) {
			res.json(data);
		});
	};

	this.show = function(req, res) {
		Friend.findOne({_id: req.params.id}, function(err, data) {
			res.json(data);
		});
	};

	this.create = function(req, res){
		var friend = new Friend(req.body);
		friend.save(function(err) {
			if(err){
				console.log("Error Creating");
			}
			else {
				Friend.find({}, function(err, data) {
					res.json(data);
				});
			}
		});
	};

	this.update = function(req, res) {
		Friend.update({_id: req.params.id}, req.body, function(err) {
			if(err) {
				console.log("Error Updating");
			}
			else {
				Friend.find({}, function(err, data) {
					res.json(data);
				});
			}
		});
	};

	this.delete = function(req, res){
		Friend.remove({_id: req.params.id}, function(err){
			if(err) {
				console.log("Error Deleting");
			}
			else {
				Friend.find({}, function(err, data) {
					res.json(data);
				});
			}
		});
	};
	
}

module.exports = new FriendsController();
