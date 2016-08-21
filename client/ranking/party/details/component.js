angular.module('tera').filter('range', function(){
  return function(n) {
    var res = [];
    for (var i = 0; i < n; i++) {
      res.push(i);
    }
    return res;
  };
});

angular.module('tera').directive('rankDetailsParty', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/ranking/party/details/details.html',
    controllerAs: 'rankDetailsParty',
    controller: function($anchorScroll, $scope, $stateParams, $reactive, $filter, getImages, iconFactory, bossFactory) {
      $reactive(this).attach($scope);
      $anchorScroll();

      this.rankId = $stateParams.rankId;

      this.subscribe('partyOne', () => {
        return [{},
          this.rankId
        ]
      });

      // $scope.ok = function () {
      //   $uibModalInstance.close();
      // };
      //
      // $scope.cancel = function () {
      //   $uibModalInstance.dismiss('cancel');
      // };

      this.getDungeon = (dungeon) => {
        return bossFactory.getDungeon(dungeon);
      };

      this.deathCalc = (death, total) => {
        return Math.floor(death * 100 / total);
      };

      this.parseDuration = (duration) => {
        var x = duration;
        var d = moment.duration(x, 'seconds');
        return Math.floor(d.asMinutes());
      };

      this.hhmmss = (secs) => {
        var minutes = Math.floor(secs / 60);
        secs = secs % 60;
        var hours = Math.floor(minutes / 60)
        minutes = minutes % 60;
        return ("0" + minutes).slice(-2) + ":" + ("0" + secs).slice(-2);
      }

      this.getBoss = (boss, area) => {
        return bossFactory.getBoss(boss, area);
      };

      this.getServerImage = (teraServer) => {
        return getImages.getServerImage(teraServer);
      };

      this.getIcon = (skillId, teraClass) => {
        parsed = parseInt(skillId);
        return iconFactory.getSkillIcon(parsed, teraClass);
      };

      this.getDebuffIcon = (skillId) => {
        parsed = parseInt(skillId);
        return iconFactory.getDebuffIcon(parsed);
      };

      this.getItemIcon = (skillId) => {
      parsed = parseInt(skillId);
      return iconFactory.getItemIcon(parsed);
      };

      this.getGlyphIcon = (skillId) => {
        return iconFactory.getGlyphIcon(skillId);
      };

      this.getBuffIcon = (skillId) => {
        parsed = parseInt(skillId);
        return iconFactory.getBuffIcon(parsed);
      };

      this.getClassImage = (teraClass) => {
        return getImages.getClassImage(teraClass);
      };

      this.notFound = (teraClass) => {
        return this.errorSwitch = true;
      };

      this.helpers({
        rank: () => {
          return PartyRankings.findOne({
            _id: this.rankId
          });
        }
      });
    }
  }

});
