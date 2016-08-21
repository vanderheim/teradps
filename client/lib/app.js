// Template._loginButtonsLoggedInDropdown.events({
//     'click #login-buttons-edit-profile': function(event) {
//         Router.go('profileEdit');
//     }
// });

angular.module('tera', ['angular-meteor', 'pascalprecht.translate', 'ui.router', 'angularModalService', 'accounts.ui',
  'ui.bootstrap', 'ngAnimate', 'angularUtils.directives.dirPagination'
]);

// angular.module('tera').config(function($interpolateProvider) {
//   $interpolateProvider.startSymbol('{[{');
//   $interpolateProvider.endSymbol('}]}');
// });
angular.module('tera').directive('tooltip', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      $(element).hover(function() {
        // on mouseenter
        $(element).tooltip('show');
      }, function() {
        // on mouseleave
        $(element).tooltip('hide');
      });
    }
  };
});

angular.module('tera').directive('googleAd', [
  '$timeout', function($timeout) {
    return {
      restrict: 'A',
      link: function($scope, element, attr) {
        return $timeout(function() {
          var adsbygoogle, html, rand;
          rand = Math.random();
          html = "<ins class='adsbygoogle' style='display:inline-block;width:728px;height:90px' data-ad-client='ca-pub-5807016128854236' data-ad-slot='1021384904' data-ad-region='page-" + rand + "'></ins>";
          $(element).append(html);
          return (adsbygoogle = window.adsbygoogle || []).push({});
        });
      }
    };
  }
]);

angular.module('tera').filter('unique', function() {
  return function(collection, keyname) {
    var output = [],
      keys = []
    found = [];

    if (!keyname) {

      angular.forEach(collection, function(row) {
        var is_found = false;
        angular.forEach(found, function(foundRow) {

          if (foundRow == row) {
            is_found = true;
          }
        });

        if (is_found) {
          return;
        }
        found.push(row);
        output.push(row);

      });
    } else {

      angular.forEach(collection, function(row) {
        var item = row[keyname];
        if (item === null || item === undefined) return;
        if (keys.indexOf(item) === -1) {
          keys.push(item);
          output.push(row);
        }
      });
    }

    return output;
  };
});

angular.module('tera').factory('SettingsService', function() {
    var settings = {};

    settings.players = "";
    settings.servers = "";
    settings.regions = "";
    settings.classes = "";
    settings.bosses = "";
    settings.healers = "";
    settings.slaying = "";
    settings.page = 1;
    settings.pageParty = 1;
    settings.pagePremium = 1;

    settings.changePage = function (value) {
       settings.page = value;
    };

    settings.changePageParty = function (value) {
       settings.pageParty = value;
    };

    settings.changePagePremium = function (value) {
       settings.pagePremium = value;
    };

    settings.changePlayer = function (value) {
       settings.players = value;
    };

    settings.changeServer = function (value) {
       settings.servers = value;
    };

    settings.changeRegion = function (value) {
       settings.regions = value;
    };

    settings.changeClass = function (value) {
       settings.classes = value;
    };

    settings.changeBoss = function (value) {
       settings.bosses = value;
    };

    settings.changeHealer = function (value) {
       settings.healers = value;
    };

    settings.changeSlaying = function (value) {
       settings.slaying = value;
    };

    return settings;
});

angular.module('tera').run(function($rootScope, $anchorScroll) {
  // $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
  //   if (toState.data.auth === 'Admin') {
  //     console.log(Meteor.userId());
  //     // Meteor.userId().emails[0].address !== "nickd2312@gmail.com"
  //     // "AAuixCa9qWMdoG3wc" - Localhost ID
  //     // "2K3AzoTwEGtAQBZDf" - Server ID
  //     // || Meteor.userId() !== 'crdChGPz6PndHvMYh'
  //     if (Meteor.userId() === null) {
  //       console.log(Meteor.userId());
  //       sweetAlert({
  //         title: "Watch where you walkin.",
  //         text: "Nigga.",
  //         type: "error",
  //         confirmButtonColor: "#000000",
  //         confirmButtonText: "Oh shit!",
  //         closeOnConfirm: true
  //       });
  //       event.preventDefault();
  //       return false;
  //     }
  //   }
  //
  //   if (toState.data.auth === 'User') {
  //     console.log(Meteor.userId());
  //     // Meteor.userId().emails[0].address !== "nickd2312@gmail.com"
  //     // "AAuixCa9qWMdoG3wc" - Localhost ID
  //     // "2K3AzoTwEGtAQBZDf" - Server ID
  //     if (Meteor.userId() === null) {
  //       sweetAlert({
  //         title: "Only registered users can submit data.",
  //         text: "Please log in or register an account.",
  //         type: "error",
  //         confirmButtonColor: "#000000",
  //         confirmButtonText: "OK",
  //         closeOnConfirm: true
  //       });
  //       event.preventDefault();
  //       return false;
  //     }
  //   }
  // })
});
