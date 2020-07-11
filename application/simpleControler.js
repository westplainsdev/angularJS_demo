demoApp.controller('SimpleController', ['$scope', function ($scope) {
	$scope.message = "Hello world";
	$scope.customers = [
		{ name: 'Dave Jones', city: 'Phoenix' },
		{ name: 'Jamie Riley', city: 'Atlanta' },
		{ name: 'Heedy Whalin', city: 'Chandler' },
		{ name: 'Thomas Winter', city: 'Seattle' }
	];
}]);