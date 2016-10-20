var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/partials/index.html',
		controller: 'indexController'
	})
	.when('/edit/:id', {
		templateUrl: '/partials/edit.html',
		controller: 'editController'
	})
	.when('/new', {
		templateUrl: '/partials/new.html',
		controller: 'newController'
	})
	.when('/show/:id', {
		templateUrl: '/partials/show.html',
		controller: 'showController'
	})
	.otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);
});