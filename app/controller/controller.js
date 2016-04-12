var app = angular.module('app');
app.controller('HomeCtrl', function($scope) {
	$scope.title = "Home Page";
});

app.controller('Page1Ctrl', function($scope) {
	$scope.title = "Page 1";
});

app.controller('Page2Ctrl', function($scope) {
	$scope.title = "Page 2";
});