(function() {
  'use strict';

  angular
    .module('app')
    .component('singleView', {
      controller: 'singleController',
      template: `
      <main class="container">
        <div class="row">
          <div class="col-md-12">

            <div class="well">
              <div class="media-left" id="sidebyside">
                <img class="media-object" ng-src="{{$ctrl.image}}">
                <img class="media-object" ng-src="./Headshots/{{$ctrl.headshots[$ctrl.randomHead]}}" alt="">
              </div>
              <div class="media-body">
                <h1 class="media-heading">
                  text here
                </h1>
              </div>
            </div>

          </div>
        </div>
      </main>

      `
    });
}());
