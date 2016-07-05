'use strict';

angular.module('exhibitRoute', ['ui.router','ngResource'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

        //$locationProvider.html5Mode({
        //      enabled: true,
        //      requireBase: false
        //    });

        $stateProvider

            .state('app', {
                url:'/app',
                        templateUrl : 'views/home.html',
                        controller : 'userController'
            })

            .state('app.exhibits', {
                url: '/exhibits',
                        templateUrl : 'views/exhibits.html',
                        controller  : 'exhibitController'
            })

            .state('app.exhibitsDetail',{
                url: '/exhibits/:id',
                        templateUrl : 'views/exhibitDetail.html',
                        controller  : 'exhibitDetailController', 
            })

            .state('app.register', {
                url: '/register',
                        templateUrl : 'views/register.html',
                        controller  : 'userController'
            })

            .state('app.login', {
                url: '/login',
                        templateUrl : 'views/login.html',
                        controller  : 'userController'
            });

            $urlRouterProvider.otherwise("/app/exhibits");

    }])
;