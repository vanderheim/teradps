angular.module('tera').directive('profile', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/ranking/user/profile.html',
    controllerAs: 'profile',
    controller: function($anchorScroll, $scope, $stateParams, $reactive, $filter, getImages, iconFactory, bossFactory, serverFactory, SettingsService) {
      $reactive(this).attach($scope);
      $anchorScroll();

      this.searchClass = '';
      this.searchServer = $stateParams.server;
      this.searchBoss = SettingsService.bosses;
      this.searchPlayer = $stateParams.player;
      this.searchRegion = '';
      this.searchHeal = '';
      this.playerId = $stateParams.player;
      this.serverId = $stateParams.server;
      this.bossSetting = SettingsService.bosses;

      this.subscribe('personal', () => {
        return [{
            limit: parseInt(this.perPage),
            skip: parseInt((this.getReactively('page') - 1) * this.perPage),
            sort: this.getReactively('sort')
          },
          this.getReactively('searchClass'),
          this.serverId,
          this.getReactively('searchBoss'),
          this.playerId,
          this.getReactively('searchRegion'),
          this.getReactively('searchHeal')
        ]
      });

      this.subscribe('playerOne', () => {
        return [{},
          this.playerId,
          this.serverId
        ]
      });

      this.subscribe('recentPremium', () => {
        return [{},
          this.playerId,
          this.serverId
        ]
      });

      this.perPage = 10;
      this.pageSetting = SettingsService.page;
      this.page = SettingsService.page;
      this.sort = {
        mainDps: -1
      };

      this.getRegion = (region) => {
        return serverFactory.getServerRegion(region);
      };

      this.getRegionFlag = (teraServer) => {
        return serverFactory.getRegionFlag(teraServer);
      };

      this.setFilters = () => {
        this.searchBoss = this.bossSetting;
        SettingsService.changeBoss(this.bossSetting);
      };

      this.getClassImage = (teraClass) => {
        return getImages.getClassImage(teraClass);
      };

      this.getDungeon = (dungeon) => {
        return bossFactory.getDungeon(dungeon);
      };

      this.getArea = (boss) => {
        return bossFactory.getArea(boss);
      };

      this.getBoss = (boss) => {
        return bossFactory.getBoss(boss);
      };

      this.pageChanged = (newPage) => {
        this.page = newPage;
        SettingsService.changePage(newPage);
      };

      this.editPremiumDesc = (id, value) => {
        return Meteor.call('editPremiumDesc', id, value);
      };

      this.editPremiumPic = (id, value) => {
        return Meteor.call('editPremiumPic', id, value);
      };

      this.editPremiumTwitch = (id, value) => {
        return Meteor.call('editPremiumTwitch', id, value);
      };

      this.editPremiumGearWeap = (id, value, rolls) => {
        return Meteor.call('editPremiumGearWeap', id, value, rolls);
      };

      this.editPremiumGearChest = (id, value) => {
        return Meteor.call('editPremiumGearChest', id, value, rolls);
      };

      this.editPremiumGearGlove = (id, value) => {
        return Meteor.call('editPremiumGearGlove', id, value, rolls);
      };

      this.editPremiumGearBoot = (id, value) => {
        return Meteor.call('editPremiumGearBoot', id, value, rolls);
      };

      this.editPremiumGearBoot = (id, ring1, ring2, neck, ear1, ear2) => {
        return Meteor.call('editPremiumGearJewel', id, ring1, ring2, neck, ear1, ear2);
      };

      this.helpers({
        rankings: () => {
          return PersonalRankings.find({}, {
            sort: this.getReactively('sort')
          });
        },

        rankingsCount: () => {
          return Counts.get('numberOfPersonalRankings');
        },

        recent: () => {
          return PartyRankings.find({}, {
            sort: {
              date: -1
            },
            limit: 10
          });
        },

        prof: () => {
          return PersonalRankings.findOne({
            mainPlayer: this.playerId,
            mainServer: this.serverId
          });
        }
      });

    }
  }

});
