angular.module('exhibitService',[])

.factory('Exhibit',['$resource','Authentication', function($resource,Authentication){
    var url = "https://exhitbit-propotype1.herokuapp.com/api/exhibits/:id";
    return $resource(url,{ id: '@_id' },{
        update: {
            method: 'PUT',
            headers: { 'x-access-token': Authentication.getToken() }
        },
        save: {
            method: 'POST',
            headers: { 'x-access-token': Authentication.getToken() }
        },
        delete: {
            method: 'DELETE',
            headers: { 'x-access-token': Authentication.getToken() }
        }
    });
}])

//https://exhitbit-propotype1.herokuapp.com/api/exhibits/:id -- deployment
//http://localhost:3000/api/exhibits/:id --development