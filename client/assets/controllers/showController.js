app.controller('showController', ['$scope', 'friendsFactory', '$location', '$routeParams', function($scope, friendsFactory, $location, $routeParams) {
	
	$scope.showFriend = function() {
		friendsFactory.show($routeParams.id, function(friend) {
			$scope.friend = friend;
		})
	};
	$scope.showFriend();

}]);