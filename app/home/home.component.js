(function() {
  'use strict';

  angular
    .module('app')
    .component('home', {
      controller: 'homeController',
      templateUrl: '../app/home/home.template.html'
    });
}());
