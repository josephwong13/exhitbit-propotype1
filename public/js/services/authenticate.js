angular.module('authenticate',[])

.factory('Authentication',['$window','$http', function($window, $http){

    var url = "http://localhost:3000/users";

    function saveToken(token){
        $window.localStorage['myToken'] = token;
    }

    function getToken(){
        return $window.localStorage['myToken'];
    }

    function logout(){
        $window.localStorage.removeItem('myToken');
    }

    function register(user){
        $http.post(url + '/register', user).then(
            function(data){
                console.log('successfully register');
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
            },
            function(err){
                console.log('Fail to login user');
            })
    }


    return {
        register: register,
        login: login,
        saveToken: saveToken,
        getToken: getToken,
        logout: logout
    }
}])