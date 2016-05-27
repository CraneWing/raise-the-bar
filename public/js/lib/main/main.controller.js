angular.module('BarApp')
	.controller('MainController', ['$scope', '$rootScope',
	 	function($scope, $rootScope) {
			$rootScope.viewTitle = 'Welcome';
	}]);