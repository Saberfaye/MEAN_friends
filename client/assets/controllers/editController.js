app.controller('editController', ['$scope', 'friendsFactory', '$location', '$routeParams', function($scope, friendsFactory, $location, $routeParams) {
	
	$scope.showFriend = function() {
		friendsFactory.show($routeParams.id, function(friend) {
			$scope.friend = friend;
		})
	};
	$scope.showFriend();

	$scope.updateFriend = function(){
		var date = formatDate($scope.birthday);
		$scope.new_friend.birthday = date;
		console.log($scope.new_friend);
		friendsFactory.update($routeParams.id, $scope.new_friend, function(data) {
			if(data.errors) {
				console.log("!!");
			}
			else{
				$location.url("/");
			}
		});
	};

	function formatDate(date) {
		month = '' + (date.getMonth() + 1),
		day = '' + date.getDate(),
		year = date.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [year, month, day].join('-');
	}
}]);