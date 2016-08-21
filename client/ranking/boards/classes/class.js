angular.module('tera').directive('classRanking', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/ranking/boards/classes/classRanking.html',
    controllerAs: 'classRanking',
    controller: function($scope, $stateParams, $reactive, getImages, bossFactory, SettingsService) {
      $reactive(this).attach($scope);

      this.searchSlaying = SettingsService.slaying;
      this.searchClass = $stateParams.class;
      this.searchServer = SettingsService.servers;
      this.searchBoss = SettingsService.bosses;
      this.searchPlayer = SettingsService.players;
      this.searchHeal = SettingsService.healers;
      this.searchRegion = SettingsService.regions;
      this.dateProperty = -1;
      this.dpsProperty = -1;
      this.datePropertyPremium = -1;
      this.dpsPropertyPremium = -1;
      this.savedSettings = false;

      this.playerSetting = SettingsService.players;
      this.serverSetting = SettingsService.servers;
      this.regionSetting = SettingsService.regions;
      this.bossSetting = SettingsService.bosses;
      this.healerSetting = SettingsService.healers;
      this.slayingSetting = SettingsService.slaying;

      this.perPage = 10;
      this.pageSetting = SettingsService.page;
      this.page = SettingsService.page;
      this.pagePremium = SettingsService.pagePremium;
      this.pageSettingPremium = SettingsService.pagePremium;

      if (this.searchClass === "Priest") {
        this.sort = {
          mainPriestDps: -1
        };
      } else {
        this.sort = {
          mainDps: -1
        };
      }

      this.sortPremium = {
        mainDps: -1
      };

      this.setFilters = () => {
        this.searchPlayer = this.playerSetting;
        this.searchBoss = this.bossSetting;
        this.searchHeal = this.healerSetting;
        this.searchServer = this.serverSetting;
        this.searchRegion = this.regionSetting;
        this.searchSlaying = this.slayingSetting;
        SettingsService.changeSlaying(this.slayingSetting);
        SettingsService.changePlayer(this.playerSetting);
        SettingsService.changeServer(this.serverSetting);
        SettingsService.changeRegion(this.regionSetting);
        SettingsService.changeHealer(this.healerSetting);
        SettingsService.changeBoss(this.bossSetting);
        this.savedSettings = true;
      };

      this.chooseBoss = (boss, dungeon) => {
        this.searchBoss = boss;
        this.searchArea = dungeon;
      };

      this.getDungeon = (dungeon) => {
        return bossFactory.getDungeon(dungeon);
      };

      this.getBoss = (boss, area) => {
        return bossFactory.getBoss(boss, area);
      };

      this.getClassImage = (teraClass) => {
        return getImages.getClassImage(teraClass);
      };

      this.pageChanged = (newPage) => {
        this.page = newPage;
        SettingsService.changePage(newPage);
      };

      this.pageChangedPremium = (newPage) => {
        this.pagePremium = newPage;
        SettingsService.changePagePremium(newPage);
      };

      // Choose Heal
      this.chooseHeal = (healer) => {
        if (this.healerSetting === healer) {
          return this.healerSetting = '';
        }

        return this.healerSetting = healer;
      };


      // Choose Slaying
      this.chooseSlaying = (slaying) => {
        return this.slayingSetting = slaying;
      };

      this.subscribe('personalPremium', () => {
        return [{
            limit: parseInt(this.perPage),
            skip: parseInt((this.getReactively('pagePremium') - 1) * this.perPage),
            sort: this.getReactively('sortPremium')
          },
          this.getReactively('searchClass'),
          this.getReactively('searchServer'),
          this.getReactively('searchBoss'),
          this.getReactively('searchPlayer'),
          this.getReactively('searchRegion'),
          this.getReactively('searchHeal'),
          this.getReactively('searchSlaying')
        ]
      });


      this.subscribe('personal', () => {
        return [{
            limit: parseInt(this.perPage),
            skip: parseInt((this.getReactively('page') - 1) * this.perPage),
            sort: this.getReactively('sort')
          },
          this.getReactively('searchClass'),
          this.getReactively('searchServer'),
          this.getReactively('searchBoss'),
          this.getReactively('searchPlayer'),
          this.getReactively('searchRegion'),
          this.getReactively('searchHeal'),
          this.getReactively('searchSlaying')
        ]
      });

      this.toggleSortByDatePremium = () => {
        if (this.datePropertyPremium !== 1) {
          this.datePropertyPremium = 1;
          this.sortPremium = {
            date: parseInt(this.datePropertyPremium)
          }
        } else {
          this.datePropertyPremium = -1;
          this.sortPremium = {
            date: parseInt(this.datePropertyPremium)
          }
        }
      };

      this.toggleSortByDpsPremium = () => {
        if (this.dpsPropertyPremium !== 1) {
          this.dpsPropertyPremium = 1;
          this.sortPremium = {
            mainDps: parseInt(this.dpsPropertyPremium)
          }
        } else {
          this.dpsPropertyPremium = -1;
          this.sortPremium = {
            mainDps: parseInt(this.dpsPropertyPremium)
          }
        }
      };

      this.toggleSortByDate = () => {
        if (this.dateProperty !== 1) {
          this.dateProperty = 1;
          this.sort = {
            date: parseInt(this.dateProperty)
          }
        } else {
          this.dateProperty = -1;
          this.sort = {
            date: parseInt(this.dateProperty)
          }
        }
      };

      this.toggleSortByDps = () => {
        if (this.dpsProperty !== 1) {
          this.dpsProperty = 1;
          this.sort = {
            mainDps: parseInt(this.dpsProperty)
          }
        } else {
          this.dpsProperty = -1;
          this.sort = {
            mainDps: parseInt(this.dpsProperty)
          }
        }
      };

      this.helpers({
        rankingsPremium: () => {
          return PremiumPersonalRankings.find({}, {
            sort: this.getReactively('sortPremium')
          });
        },

        rankingsCountPremium: () => {
          return Counts.get('numberOfPremiumPersonalRankings');
        },

        rankings: () => {
          return PersonalRankings.find({}, {
            sort: this.getReactively('sort')
          });
        },

        rankingsCount: () => {
          return Counts.get('numberOfPersonalRankings');
        }
      });

    }
  }
});
