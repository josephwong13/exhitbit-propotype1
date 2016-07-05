angular.module('exhibitDetailCtrl',[])

.controller('exhibitDetailController', ['$scope','Exhibit','$state','$stateParams', function($scope,Exhibit,$state,$stateParams){

    //get a single exhibit
    $scope.exhibit = Exhibit.get({id:$stateParams.id});

    //put a single exihibit
    $scope.putExhibit = function(){
        Exhibit.update({id:$stateParams.id}, $scope.exhibit, function(){
            console.log("Successfully updated");
            alert('successfully updated exhibit : ' + $scope.exhibit.name);
        });

    }

    //delete a single exhibit
    $scope.deleteExhibit = function(){
        Exhibit.delete({id:$stateParams.id},
            function(){
            console.log('successfully delete exhibit');
            $state.go("app.exhibits", {}, {reload: true});
        })
    }

}])