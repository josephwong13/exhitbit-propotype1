'use strict';

angular.module('exhibitRoute', ['ui.router','ngResource'])
.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : ''
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }
            })

            .state('app.exhibits', {
                url: 'exhibits',
                views: {
                    'content@': {
                        templateUrl : 'views/exhibits.html',
                        controller  : 'exhibitController'
                   }
                }
            })

            .state('app.exhibitsDetail', {
                url: 'exhibits/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/exhibitsDetail.html',
                        controller  : ''
                   }
                }
            });

    }])
;