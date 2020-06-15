
var app = angular.module("siteSindy", ["ngRoute"]);
app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
	  .when("/", {
		templateUrl: "pages/home.html"
	  })
	  .when("/sobre", {
		templateUrl: "pages/sobre.html"
	  })
	  .when("/tecnologia", {
		templateUrl: "pages/tecnologia.html"
	  })
	  .when("/app", {
		templateUrl: "pages/app.html"
	  })
	  .when("/parceiros", {
		templateUrl: "pages/parceiros.html"
	  });
  });

