angular.module('BarApp', ['ngResource', 'ngRoute', 'mgcrea.ngStrap',
 'ngAnimate', 'angularSpinners'])
	.config(['$locationProvider', '$routeProvider',
		function($locationProvider, $routeProvider) {
			$locationProvider.html5Mode(true);

			$routeProvider
				.when('/', {
					templateUrl: 'views/home.html',
					controller: 'MainController'
				 })
				.when('/about', {
					templateUrl: 'views/about.html',
					controller: 'AboutController'
				})
				.when('/search', {
					templateUrl: 'views/search_bars.html',
					controller: 'BarsController'
				})
				.when('/details/:id', { 
				 	templateUrl: 'views/bar_detail.html',
				 	controller: 'BarDetailController'
				 })
				.otherwise({
				 	redirectTo: '/'
				});
	}]);