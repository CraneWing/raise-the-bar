angular.module('BarApp')
	.controller('BarDetailController',
		['$scope', '$rootScope', '$http', '$location', '$routeParams',
	 	function($scope, $rootScope, $http, $location, $routeParams) {
			$rootScope.viewTitle = 'Bar Info';
			$scope.bar = {};

			var barId = $routeParams.id;
			var location = $routeParams.location;

			$location.path('/details/' + barId);

			$http({
				method: 'GET',
				url: 'api/bars/:id',
				params: {
					id: barId
				}
			})
			.success(function(result) {
				//console.log(result);
				$scope.bar = result;
				$scope.phone = addPeriods($scope.bar.phone);
			});	
}]);

