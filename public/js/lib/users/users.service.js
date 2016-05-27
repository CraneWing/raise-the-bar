angular.module('BarApp')
	.factory('BarService', ['$resource', function($resource) {
		return $resource('/api/bars', {
			params: location
		},
		{
			'get': {
				method: 'GET'
			}
		});

		return $resource('/api/bars/:id',
		{
			id: id
		},
		{
			'get': {
				method: 'GET',
				isArray: false
			}
		}
		});
	}]);