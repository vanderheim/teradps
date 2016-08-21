angular.module('tera').factory('getImages', function() {
  var getServerJumbo = function(teraServer) {
    var input = teraServer;
    switch (input) {
      case 'Mount Tyrannas':
        return 'url(/asset/jumbo/mounttyrannas.png)';
        break;
      case 'Tempest Reach':
        return 'url(/asset/jumbo/tempestreach.png)';
        break;
      case 'Celestial Hills':
        return 'url(/asset/jumbo/celestialhills.png)';
        break;
      case 'Ascension Valley':
        return 'url(/asset/jumbo/ascensionvalley.png)';
        break;
      case 'Valley Of Titans':
        return 'url(/asset/jumbo/valleyoftitans.png)';
        break;
      case 'Lake Of Tears':
        return 'url(/asset/jumbo/lakeoftears.png)';
        break;
      case 'Highwatch':
        return 'url(/asset/jumbo/highwatch.png)';
        break;
    }
  }

  var getServerImage = function(teraServer) {
    var input = teraServer;
    switch (input) {
      case 'Mount Tyrannas':
        return '/asset/banners/mt.png';
        break;
      case 'Tempest Reach':
        return '/asset/banners/tr.png';
        break;
      case 'Celestial Hills':
        return '/asset/banners/ch.png';
        break;
      case 'Ascension Valley':
        return '/asset/banners/av.png';
        break;
      case 'Valley Of Titans':
        return '/asset/banners/vot.png';
        break;
      case 'Lake Of Tears':
        return '/asset/banners/lot.png';
        break;
      case 'Highwatch':
        return '/asset/banners/hw.png';
        break;
    }
  }

  var getClassImage = function(teraClass) {
    var input = teraClass;
    switch (input) {
      case 'Lancer':
        return '/asset/classes/lancer-sel.png';
        break;
      case 'Brawler':
        return '/asset/classes/brawler-sel3.png';
        break;
      case 'Warrior':
        return '/asset/classes/warrior-sel.png';
        break;
      case 'Slayer':
        return '/asset/classes/slayer-sel.png';
        break;
      case 'Berserker':
        return '/asset/classes/berserker-sel.png';
        break;
      case 'Archer':
        return '/asset/classes/archer-sel.png';
        break;
      case 'Reaper':
        return '/asset/classes/reaper-sel.png';
        break;
      case 'Sorcerer':
        return '/asset/classes/sorcerer-sel.png';
        break;
      case 'Gunner':
        return '/asset/classes/gunner-sel.png';
        break;
      case 'Priest':
        return '/asset/classes/priest-sel.png';
        break;
      case 'Mystic':
        return '/asset/classes/mystic-sel.png';
        break;
      case 'Ninja':
        return '/asset/classes/ninja-sel.png';
        break;
    }
  }
  return {
    getClassImage: getClassImage,
    getServerImage: getServerImage,
    getServerJumbo: getServerJumbo
  };

});
