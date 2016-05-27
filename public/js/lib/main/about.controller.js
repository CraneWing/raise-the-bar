angular.module('BarApp')
	.controller('AboutController', ['$scope', '$rootScope',
	 	function($scope, $rootScope) {
			$rootScope.viewTitle = 'About';
	}]);