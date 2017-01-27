(function() {
  'use strict';

  angular
    .module('app')
    .controller('allController', allController);

  function allController($http) {
    const vm = this;

    vm.$onInit = function() {
      $http.get('http://localhost:3000/cheese')
        .then((response) => {
          vm.data = response.data;
        });
      
    };

  }
}());
