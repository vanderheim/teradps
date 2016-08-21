angular.module('tera').directive('serverRanking', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/ranking/boards/servers/serverRanking.html',
    controllerAs: 'serverRanking',
    controller: function($scope, $stateParams, $reactive, serverFactory, bossFactory, SettingsService) {
      $reactive(this).attach($scope);

      this.priestSearched = false;
      this.mysticSearched = false;

      if (SettingsService.classes === 'Priest') {
        this.priestSearched = true;
      }

      if (SettingsService.classes === 'Mystic') {
        this.mysticSearched = true;
      }

      this.searchSlaying = SettingsService.slaying;
      this.searchClass = SettingsService.classes;
      this.searchServer = $stateParams.server;
      this.searchBoss = SettingsService.bosses;
      this.searchPlayer = SettingsService.players;
      this.searchRegion = '';
      this.searchHeal = SettingsService.healers;
      this.searchSlaying = '';
      this.dateProperty = -1;
      this.dpsProperty = -1;
      this.datePropertyPremium = -1;
      this.dpsPropertyPremium = -1;
      this.savedSettings = false;

      this.playerSetting = SettingsService.players;
      this.classSetting = SettingsService.classes;
      this.bossSetting = SettingsService.bosses;
      this.healerSetting = SettingsService.healers;
      this.slayingSetting = SettingsService.slaying;
      this.classSettingTemp = '';

      this.perPage = 10;
      this.pageSetting = SettingsService.page;
      this.page = SettingsService.page;
      this.pagePremium = SettingsService.pagePremium;
      this.pageSettingPremium = SettingsService.pagePremium;

      this.sort = {
        mainDps: -1
      };

      this.sortPremium = {
        mainDps: -1
      };

      this.region = $stateParams.region;
      this.getRegion = (region) => {
        return serverFactory.getServerRegion(region);
      };

      this.setFilters = () => {

        this.mysticSearched = false;
        this.priestSearched = false;

        if (this.classSettingTemp === 'Priest') {
          this.priestSearched = true;
        }

        if (this.classSettingTemp === 'Mystic') {
          this.mysticSearched = true;
        }

        this.classSetting = this.classSettingTemp;
        this.searchPlayer = this.playerSetting;
        this.searchClass = this.classSetting;
        this.searchHeal = this.healerSetting;
        this.searchBoss = this.bossSetting;
        this.searchSlaying = this.slayingSetting;
        SettingsService.changeSlaying(this.slayingSetting);
        SettingsService.changePlayer(this.playerSetting);
        SettingsService.changeClass(this.classSettingTemp);
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
      this.pageChanged = (newPage) => {
        this.page = newPage;
        SettingsService.changePage(newPage);
      };

      this.pageChangedPremium = (newPage) => {
        this.pagePremium = newPage;
        SettingsService.changePagePremium(newPage);
      };

      // Choose Class Toggle
      this.chooseClass = (clas) => {
        // if (clas === "Priest") {
        //   if (this.classSetting === clas) {
        //     this.sort = {
        //       mainDps: -1
        //     };
        //     return this.classSetting = '';
        //   } else {
        //     this.sort = {
        //       mainPriestDps: -1
        //     };
        //     return this.classSetting = 'Priest';
        //   }
        // }

        if (this.classSettingTemp === clas || this.classSetting === clas) {
          this.classSettingTemp = '';
          this.classSetting = '';
          return;
        }

        this.classSettingTemp = clas;
        this.classSetting = clas;

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
