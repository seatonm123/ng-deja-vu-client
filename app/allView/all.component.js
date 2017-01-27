(function() {
  'use strict';

  angular
    .module('app')
    .component('viewAll', {
      controller: 'allController',
      template: `
      <main class="container">
        <div class="row" ng-repeat="cheese in $ctrl.data">
          <div class="col-md-12">

            <div class="well">
              <div class="media-left">
                <img class="media-object" ng-src="{{cheese.image}}">
                <a href="#" class="col-xs-offset-5" ui-sref="single({postId: cheese.id})">view</a>
              </div>
              <div class="media-body">
                <h1 class="media-heading">
                  {{cheese.name}}
                </h1>
              </div>
            </div>

          </div>
        </div>
      </main>

      `
    });
}());
