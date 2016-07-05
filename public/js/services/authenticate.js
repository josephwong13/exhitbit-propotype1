angular.module('authenticate',[])

.factory('Authentication',['$window','$http', function($window, $http){

    var url = "http://localhost:3000/users";

    function saveToken(token){
        $window.localStorage['mytoken'] = token;
        $window.localStorage['status'] = true;
    }

    function getToken(){
        return $window.localStorage['mytoken'];
    }

    function logout(){
        $window.localStorage.removeItem('mytoken');
        $window.localStorage.removeItem('status');
        $window.location.href = '/';
    }

    function register(user){
        $http.post(url + '/register', user).then(
            function(data){
                console.log('successfully register');
                $window.location.href = '/';
            },
            function(err){
                console.log('Fail to register user');
            })
    }

    function login(user){
        return $http.post(url + '/login', user).then(
            function(data){
                console.log("successfully login");
                saveToken(data.data.token);
                $window.location.href = '/';
            },
            function(err){
                console.log('Fail to login user');
            })
    }

    function getStatus(){
        return $window.localStorage['status'];
    }


    return {
        register: register,
        login: login,
        saveToken: saveToken,
        getToken: getToken,
        logout: logout,
        getStatus: getStatus
    }
}])