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
                <img class="media-object" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRN6BPbG2aT32bntbld39eK7dkIFAoJIY45WQO31cGiR9oRtEgVApMmc9Y">
                <img class="media-object" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRN6BPbG2aT32bntbld39eK7dkIFAoJIY45WQO31cGiR9oRtEgVApMmc9Y" alt="">
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
