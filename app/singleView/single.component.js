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
                <img id="cheese-img" class="media-object" ng-src="{{$ctrl.image}}">
                <img id="head-img" class="media-object" ng-src="./Headshots/{{$ctrl.headshots[$ctrl.randomHead]}}" alt="">
              </div>
              <div class="media-body">
                <h1 class="media-heading text-center">
                  {{$ctrl.phrases[$ctrl.randomFrench]}}
                </h1>
                <button class="btn btn-primary" ui-sref="allView">Back</button>
              </div>
            </div>

          </div>
        </div>
      </main>

      `
    });
}());
