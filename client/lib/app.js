angular.module('tera', ['angular-meteor', 'pascalprecht.translate', 'ui.router', 'angularModalService', 'accounts.ui',
  'ui.bootstrap', 'ngAnimate', 'angularUtils.directives.dirPagination'
]);

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
