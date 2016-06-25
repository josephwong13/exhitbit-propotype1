angular.module('exhibitCtrl',[])

.controller('exhibitController', ['$scope','Exhibit', function($scope,Exhibit){

    //get method on exhibits
    $scope.allExhibits = Exhibit.query(function(){
        console.log('get exhibits successfully');
    })

    $scope.test = "Controller in action";

}])