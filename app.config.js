(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'home',
      })
      .state({
        name: 'allView',
        url: '/cheese',
        component: 'viewAll',
      })
      .state({
        name: 'single',
        url: '/cheese/{postId:int}',
        component: 'singleView'
      });

  }

}());
