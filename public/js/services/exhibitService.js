angular.module('exhibitService',[])

.factory('Exhibit',['$resource',function($resource){
    var url = "http://localhost:3000/api/exhibits/:id";
    return $resource(url,{ id: '@_id' },{
        update: {
            method: 'PUT'
        }
    });
}])

//https://exhitbit-propotype1.herokuapp.com/api/exhibits/:id -- deployment
//http://localhost:3000/api/exhibits/:id --development