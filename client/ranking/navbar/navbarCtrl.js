angular.module('tera').directive('navbar', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/ranking/navbar/navbar.html',
    controllerAs: 'navbar',
    controller: function($scope, $reactive) {
      $reactive(this).attach($scope);

      this.helpers({

        isLoggedIn: () => {
          return Meteor.userId() !== null;
        },

        userId: () => {
          return Meteor.userId();
        }
      });

      }
  }
});
