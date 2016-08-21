angular.module('tera').directive('bossRanking', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/ranking/boards/dungeons/bossRanking.html',
    controllerAs: 'bossRanking',
    controller: function($scope, $stateParams, $reactive, bossFactory, SettingsService, getImages) {
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
      this.searchServer = SettingsService.servers;
      this.searchBoss = $stateParams.boss;
      this.searchRegion = SettingsService.regions;
      this.searchPlayer = SettingsService.players;
      this.searchHeal = SettingsService.healers;
      this.dateProperty = -1;
      this.dpsProperty = -1;
      this.datePropertyParty = -1;
      this.dpsPropertyParty = -1;
      this.datePropertyPremium = -1;
      this.dpsPropertyPremium = -1;
      this.savedSettings = false;

      this.playerSetting = SettingsService.players;
      this.serverSetting = SettingsService.servers;
      this.regionSetting = SettingsService.regions;
      this.healerSetting = SettingsService.healers;
      this.classSetting = SettingsService.classes;
      this.classSettingTemp = '';
      this.slayingSetting = SettingsService.slaying;

      this.perPage = 10;
      this.pageSetting = SettingsService.page;
      this.pageSettingParty = SettingsService.pageParty;
      this.pageSettingPremium = SettingsService.pagePremium;
      this.page = SettingsService.page;
      this.pageParty = SettingsService.pageParty;
      this.pagePremium = SettingsService.pagePremium;

      this.sort = {
        mainDps: -1
      };

      this.sortPremium = {
        mainDps: -1
      };

      this.sortParty = {
        partyDps: -1
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
        this.searchServer = this.serverSetting;
        this.searchRegion = this.regionSetting;
        this.searchSlaying = this.slayingSetting;
        SettingsService.changePlayer(this.playerSetting);
        SettingsService.changeServer(this.serverSetting);
        SettingsService.changeRegion(this.regionSetting);
        SettingsService.changeHealer(this.healerSetting);
        SettingsService.changeClass(this.classSettingTemp);
        SettingsService.changeSlaying(this.slayingSetting);
        this.savedSettings = true;
      };

      this.getDungeon = (dungeon) => {
        return bossFactory.getDungeon(dungeon);
      };

      this.getClassImage = (teraClass) => {
        return getImages.getClassImage(teraClass);
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

      this.pageChangedParty = (newPage) => {
        this.pageParty = newPage;
        SettingsService.changePageParty(newPage);
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
            skip: parseInt((this.getReactively('page') - 1) * this.perPage),
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

      this.subscribe('party', () => {
        return [{
            limit: parseInt(this.perPage),
            skip: parseInt((this.getReactively('pageParty') - 1) * this.perPage),
            sort: this.getReactively('sortParty')
          },
          this.getReactively('searchClass'),
          this.getReactively('searchRegion'),
          this.getReactively('searchBoss'),
          this.getReactively('searchPlayer'),
          this.getReactively('searchHeal'),
          this.getReactively('searchServer')
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

      this.toggleSortByDateParty = () => {
        if (this.datePropertyParty !== 1) {
          this.datePropertyParty = 1;
          this.sortParty = {
            date: parseInt(this.datePropertyParty)
          }
        } else {
          this.datePropertyParty = -1;
          this.sortParty = {
            date: parseInt(this.datePropertyParty)
          }
        }
      };

      this.toggleSortByDpsParty = () => {
        if (this.dpsPropertyParty !== 1) {
          this.dpsPropertyParty = 1;
          this.sortParty = {
            partyDps: parseInt(this.dpsPropertyParty)
          }
        } else {
          this.dpsPropertyParty = -1;
          this.sortParty = {
            partyDps: parseInt(this.dpsPropertyParty)
          }
        }
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

        rankingsPremium: () => {
          return PremiumPersonalRankings.find({}, {
            sort: this.getReactively('sortPremium')
          });
        },

        rankingsCountPremium: () => {
          return Counts.get('numberOfPremiumPersonalRankings');
        },

        rankingsParty: () => {
          return PartyRankings.find({}, {
            sort: this.getReactively('sortParty')
          });
        },

        rankingsCountParty: () => {
          return Counts.get('numberOfPartyRankings');
        }
      });

    }
  }
});
