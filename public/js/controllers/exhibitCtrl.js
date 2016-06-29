angular.module('exhibitCtrl',[])

.controller('exhibitController', ['$scope','Exhibit','$state', function($scope,Exhibit,$state){

    //get method on exhibits
    $scope.allExhibits = Exhibit.query(function(){
        console.log('get exhibits successfully');
    })

    //post method on exhibits
    $scope.exhibitName = "";
    $scope.exhibitDescription = "";
    $scope.postExhibit = function(){
        var newExhibit = new Exhibit();
        newExhibit = {"name": $scope.exhibitName,
                      "description":$scope.exhibitDescription};
        Exhibit.save(newExhibit,function(){
            console.log('successfully post exhibit');
            $scope.exhibitName = "";
            $scope.exhibitDescription = "";
            $state.go($state.current, {}, {reload: true});
        });        
    }

    //delete method on exhibit
    $scope.deleteExhibit = function(id){
        Exhibit.delete({id:id},
            function(){
            console.log('successfully delete exhibit');
            $state.go($state.current, {}, {reload: true});
        })
    }


}])