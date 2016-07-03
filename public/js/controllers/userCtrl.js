angular.module('userCtrl',[])

.controller('userController', ['$scope','Authentication','$state', function($scope,Authentication,$state){

    //register user
    $scope.reguser = {
        username: "",
        password: ""
    };

    $scope.registerUser = function(){
        Authentication.register($scope.reguser);
        $state.go("app.exhibits", {}, {reload: true});
    };

    //login user
    $scope.user = {
        username: "",
        password: ""
    };

    $scope.loginUser = function(){
        Authentication.login($scope.user);
        $state.go("app.exhibits", {}, {reload: true});
    };

}])