angular.module('exhibitApp', ['ui.router','ngResource', 'exhibitRoute', 'exhibitService','exhibitCtrl','exhibitDetailCtrl','authenticate','userCtrl'])

.run(function($rootScope, $http, $window) {
    if($window.localStorage.myToken){
        //$http.defaults.headers.common.x-access-token = $window.localStorage.myToken;
    };
    $rootScope.$on("$stateChangeError", console.log.bind(console));
});;