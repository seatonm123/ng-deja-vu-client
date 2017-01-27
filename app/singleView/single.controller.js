(function() {
  'use strict';

  angular
    .module('app')
    .controller('singleController', singleController);

  function singleController($http, $stateParams) {
    const vm = this;

    vm.headshots = [
      'Aaron-Goodman.jpg', 'Andrew-Biviano.jpg', 'Andy-Herzog.jpg', 'Cass-Torske.jpg', 'Chana-Reynolds.jpg', 'Chris-Houdlette.jpg', 'Cole-Batson.jpg', 'Daisha-Walton.jpg',
      'Darren-Hankins.jpg', 'Dillon-Corkran.jpg', 'Guillermo-Moratorio.jpg', 'Ike-Obidike.jpg', 'Jeremy-Clayton.jpg', 'Jordan-Storz.jpg', 'Kevin-Erickson.jpg',
      'Luke-McCrae.jpg', 'Mark-Grant.jpg', 'Matt-Seaton.jpg', 'Matt-Winzer.jpg', 'Mike-Dowd.jpg', 'Mike-Roque.jpg', 'Mr-Kyle-Coberly.jpg', 'Murph-Grainger.jpg',
      'Phil-Cunnell.jpg', 'Roberto-Ortega.jpg', 'Steven-Castroverde.jpg', 'Tyler-Briske.jpg', 'Zac-Jocelyn.jpg', 'spotagain.png', 'thing.png', 'thing2.png', 'thing3.png', 'uxplor.png'
    ];

    vm.phrases = [
      'Tu ressembles à un sac de patates!', 'Bonne bonté!', 'Boule de fromage', 'Dites "fromage!"', 'Le gros fromage', 'Le fromage est comme le fromage', 'Fromage à lui',
      "Le fromage est bon pour l'âme", "Qu'arrive-t-il au trou quand le fromage est parti?", "La vie est belle. Le fromage le rend meilleur."
    ];

    vm.randomHead = Math.floor(Math.random() * vm.headshots.length);
    vm.randomFrench = Math.floor(Math.random() * vm.phrases.length);

    const cheeseId = $stateParams.postId;
    $http.get(`http://localhost:3000/cheese/${cheeseId}`)
      .then(response => {
        vm.image = response.data.image;
      });
  };
})();
