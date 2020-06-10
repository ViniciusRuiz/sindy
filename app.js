
var app = angular.module("siteSindy", []);
app.controller("orcamentoCtrl", function ($scope, $http) {
	$scope.formData = {};
	$scope.processForm = function () {

		console.dir($scope.formData);
		$http({
			method: "POST",
			url: "https://sotreqlab.herokuapp.com/familiaminis.json",
			data: $.param($scope.formData),
			headers: { "Content-Type": "application/x-www-form-urlencoded"
			} }).then(function (){
                window.location = "enviado.html";
            });
		$scope.formData = {};
		$scope.orcamentoForm.$setPristine();
        $scope.orcamentoForm.$setUntouched();

			};

})
app.controller("orcamentoRodapeCtrl", function ($scope, $http) {
	$scope.formData = {};
	$scope.processrodapeForm = function () {

		console.dir($scope.formData);
		$http({
			method: "POST",
			url: "https://sotreqlab.herokuapp.com/familiaminis.json",
			data: $.param($scope.formData),
			headers: { "Content-Type": "application/x-www-form-urlencoded"
			} }).then(function (){
                window.location = "enviado.html";
            });
		$scope.formData = {};
		$scope.orcamentorodapeForm.$setPristine();
        $scope.orcamentorodapeForm.$setUntouched();

			};

}
);
