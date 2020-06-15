
var app = angular.module("siteSindy", ["ngRoute"]);
app.config(function($routeProvider) {
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
	  });
  });

