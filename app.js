
var app = angular.module("siteSindy", ["ngRoute"]);
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
	$routeProvider
	  .when("/", {
    templateUrl: "pages/home.html"	  })
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
app.controller('HomeCtrl', function($scope, $http, $rootScope) {
  $rootScope.page = '/';
  $http.get('data/home.json').then(
    function(home){
      $scope.home = home.data[0];
    }
  );
}
);
  app.controller('SobreCtrl', function($scope, $http, $rootScope) {
    $rootScope.page = '/sobre';
    $http.get('data/sobre.json').then(
      function(sobre){
        $scope.sobre = sobre.data[0];
      }
    );
  }
);
app.controller('TecnologiaCtrl', function($scope, $http, $rootScope) {
    $rootScope.page = '/tecnologia'
    $http.get('data/tecnologia.json').then(
      function(tecnologia){
        $scope.tecnologia = tecnologia.data[0];
      }
    );
  }
);
app.controller('OappCtrl', function($scope, $http, $rootScope) {
  $rootScope.page = '/app';
    $http.get('data/app.json').then(
      function(oapp){
        $scope.oapp = oapp.data[0];
      }
    );
  }
);
app.controller('ParceirosCtrl', function($scope, $http, $rootScope) {
  $rootScope.page = '/parceiros';
    $http.get('data/parceiros.json').then(
      function(parceiro){
        $scope.parceiro = parceiro.data[0];
      }
    );
  }
);
app.controller('SharedCtrl', function($scope, $http, $rootScope) {
  $rootScope.page = '/';
  $http.get('data/shared.json').then(
    function(shared){
      $scope.shared = shared.data[0];
    }
  );

}
);
app.filter('trustAsHtml',['$sce', function($sce) {
  return function(text) {
    return $sce.trustAsHtml(text);
  };
}]);