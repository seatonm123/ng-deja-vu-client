(function() {
  'use strict';

  angular
    .module('app')
    .component('viewAll', {
      controller: 'allController',
      templateUrl: '../app/allView/all.template.html'
    });
}());
