angular.module('tera').directive('requirements', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/ranking/gettingstarted/requirements.html',
    controllerAs: 'req',
    controller: function($anchorScroll, $scope, $reactive) {
      $reactive(this).attach($scope);
      $anchorScroll();

    }
  }
});

angular.module('tera').directive('toprank', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/ranking/gettingstarted/toprank.html',
    controllerAs: 'toprank',
    controller: function($anchorScroll, $scope, $reactive) {
      $reactive(this).attach($scope);
      $anchorScroll();

    }
  }
});

angular.module('tera').directive('about', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/ranking/gettingstarted/about.html',
    controllerAs: 'about',
    controller: function($anchorScroll, $scope, $reactive) {
      $reactive(this).attach($scope);
      $anchorScroll();

      }
  }
});

angular.module('tera').directive('contact', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/ranking/gettingstarted/contact.html',
    controllerAs: 'contact',
    controller: function($anchorScroll, $scope, $reactive) {
      $reactive(this).attach($scope);
      $anchorScroll();

      }
  }
});

angular.module('tera').directive('privacy', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/ranking/gettingstarted/privacy.html',
    controllerAs: 'privacy',
    controller: function($anchorScroll, $scope, $reactive) {
      $reactive(this).attach($scope);
      $anchorScroll();

      }
  }
});

angular.module('tera').directive('setup', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/ranking/gettingstarted/setup.html',
    controllerAs: 'setup',
    controller: function($anchorScroll, $scope, $reactive) {
      $reactive(this).attach($scope);
      $anchorScroll();

      this.guideOpen = false;
      this.casualOpen = false;
      this.shinraOpen = false;

      this.chooseCasual = () => {
        if (this.shinraOpen === true) {
          this.shinraOpen = false;
        }
        this.guideOpen = true;
        this.casualOpen = true;
      };

      this.chooseShinra = () => {
        if (this.casualOpen === true) {
          this.casualOpen = false;
        }
        this.guideOpen = true;
        this.shinraOpen = true;
      };

      this.chooseMain = () => {
        this.casualOpen = false;
        this.guideOpen = false;
        this.shinraOpen = false;
      };

      }
  }
});

angular.module('tera').directive('premium', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/ranking/gettingstarted/premium.html',
    controllerAs: 'premium',
    controller: function($anchorScroll, $scope, $reactive) {
      $reactive(this).attach($scope);
      $anchorScroll();

      this.showId = false;
      this.applied = false;
      this.userId = Meteor.userId();

      this.applyPremium = (name, email, server, transaction) => {
        return Meteor.call('applyPremium', name, email, server, transaction);
      }

      }
  }
});
