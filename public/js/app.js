angular.module('exhibitApp', ['ui.router','ngResource', 'exhibitRoute', 'exhibitService','exhibitCtrl'])

.run(function($rootScope) {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});;