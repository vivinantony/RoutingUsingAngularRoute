var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
        .when('/', {
            templateUrl: "partials/home.html",
            controller: "HomeCtrl"
        })
		.when('/page1', {
			templateUrl: "partials/page1.html",
			controller: "Page1Ctrl"
		})
		.when('/page2', {
			templateUrl: "partials/page2.html",
			controller: "Page2Ctrl"
		})
		.otherwise({
			redirectTo: "/"
		})
});