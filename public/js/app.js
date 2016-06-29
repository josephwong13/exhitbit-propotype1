angular.module('exhibitApp', ['ui.router','ngResource', 'exhibitRoute', 'exhibitService','exhibitCtrl','exhibitDetailCtrl'])

.run(function($rootScope) {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});;