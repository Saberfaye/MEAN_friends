app.controller('indexController', ['$scope', 'friendsFactory', '$location', function($scope, friendsFactory, $location) {

	friendsFactory.index(function(returnedData) {
		$scope.friends = returnedData;
	});

	$scope.deleteFriend = function(id) {
		friendsFactory.delete(id, function(data) {
			if(data.errors) {
				console.log(data.errors);
			}
			else {
				$scope.friends = data;
			}
		});
	};

	$scope.propertyName = "first_name";
	$scope.reverse = false;

	$scope.sortBy = function(propertyName) {
		$scope.reverse = (propertyName !== null && $scope.propertyName === propertyName) ? !$scope.reverse : false;
		$scope.propertyName = propertyName;
	};
}]);