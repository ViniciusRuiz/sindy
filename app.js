
var app = angular.module("siteSindy", ["ngRoute"]);
app.config(function($routeProvider) {
	$routeProvider
	  .when("/", {
		templateUrl: "pages/home.html"
	  })
	  .when("/sobre", {
		templateUrl: "pages/sobre.html"
	  })
	  .when("/three", {
		templateUrl: "three.html"
	  })
	  .when("/four", {
		templateUrl: "four.html"
	  });
  });

