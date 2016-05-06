
var cal = angular.module('myCv', []);
cal.controller('MainCtrl',function($scope, $http){
	$http.get('mydata.json').success(function(data){
		$scope.myInfo = data;
	});

});