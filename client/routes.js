angular.module('tera').config(function($urlRouterProvider, $stateProvider,
  $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>',
    })
    .state('about', {
      url: '/about',
      template: '<about></about>',
    })
    .state('req', {
      url: '/req',
      template: '<requirements></requirements>',
    })
    .state('setup', {
      url: '/setup',
      template: '<setup></setup>',
    })
    .state('toprank', {
      url: '/toprank',
      template: '<toprank></toprank>',
    })
    .state('start', {
      url: '/start',
      template: '<start></start>',
    })
    .state('classRanking', {
      url: '/classes/:class',
      template: '<class-ranking></class-ranking>',
    })
    .state('serverRanking', {
      url: '/servers/:server',
      template: '<server-ranking></server-ranking>',
    })
    .state('bossRanking', {
      url: '/bosses/:boss',
      template: '<boss-ranking></boss-ranking>',
    })
    .state('adminUser', {
      url: '/adminuser',
      template: '<adminuser></adminuser>',
    })
    .state('bossRankingParty', {
      url: '/party/bosses/:boss',
      template: '<boss-ranking-party></boss-ranking-party>',
    })
    .state('rankDetailsParty', {
      url: '/party/rank/:rankId',
      template: '<rank-details-party></rank-details-party>',
    })
    .state('rankDetails', {
      url: '/rank/:rankId',
      template: '<rank-details></rank-details>',
    })
    .state('user', {
      url: '/:server?player',
      template: '<profile></profile>',
    });

  $urlRouterProvider.otherwise("/");
});

// Deploy 'L2hSgg6TsoCFkX7qu'
// Local 'wQsRqymnncfg5HC5Q'
