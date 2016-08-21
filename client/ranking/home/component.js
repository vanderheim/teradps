angular.module('tera').directive('home', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/ranking/home/home.html',
    controllerAs: 'home',
    controller: function($scope, $reactive, bossFactory, serverFactory, getImages) {
      $reactive(this).attach($scope);

      this.searchClass = '';
      this.searchServer = '';
      this.searchBoss = '';
      this.searchPlayer = '';
      this.searchRegion = '';
      this.dateProperty = -1;
      this.dpsProperty = -1;

      this.perPage = 5;
      this.page = 1;
      this.sort = {
        mainDps: -1
      };

      this.pageChanged = (newPage) => {
        this.page = newPage;
      };

      this.getClassImage = (teraClass) => {
        return getImages.getClassImage(teraClass);
      };


      this.getRegionFlag = (teraServer) => {
        return serverFactory.getRegionFlag(teraServer);
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

      this.subscribe('recent');

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

        isLoggedIn: () => {
          return Meteor.userId() !== null;
        },

        recent: () => {
          return PartyRankings.find({}, {
            sort: {
              date: -1
            },
            limit: 10
          });
        }
      });

    }
  }
});
