angular.module('userCtrl',[])

.controller('userController', ['$scope','Authentication','$state','$window', function($scope,Authentication,$state,$window){

    //get login status
    $scope.status = Authentication.getStatus();

    //register user
    $scope.reguser = {
        username: "",
        password: ""
    };

    $scope.registerUser = function(){
        Authentication.register($scope.reguser);
        //$window.location.href = '/';
        //$state.go("app.exhibits", {}, {reload: true});
    };

    //login user
    $scope.user = {
        username: "",
        password: ""
    };

    $scope.loginUser = function(){
        Authentication.login($scope.user);
        //$window.location.href = '/';
        //$state.go("app.exhibits", {}, {reload: true});
    };

    $scope.logoutUser = function(){
        Authentication.logout();
        //$window.location.href = '/';
    }

}])