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
            });

            $urlRouterProvider.otherwise("/app/exhibits");

    }])
;