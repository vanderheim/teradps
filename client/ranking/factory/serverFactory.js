angular.module('tera').factory('serverFactory', function() {
  var getServerRegion = function(teraServer) {
    var input = teraServer;
    switch (input) {
      case 'Mount Tyrannas':
      case 'Valley of Titans':
      case 'Lake of Tears':
      case 'Tempest Reach':
      case 'Celestial Hills':
      case 'Ascension Valley':
      case 'Highwatch':
        return 'North America (NA)';
        break;
      case '벨릭의 은총':
      case '세렌의 용기':
      case '아룬의 영광':
      case '발더의 지혜':
      case '프레이아의 수호':
        return 'Korea (KR)';
        break;
      case 'Killian':
      case 'Fraya':
      case 'Hasmina':
      case 'Elinu':
      case 'Icaruna':
      case 'Veritas':
      case 'Akasha':
      case 'Arcadia':
      case 'Kaidun':
        return 'Europe (EU)';
        break;
      case 'ユリアン':
      case 'エリーヌ':
        return 'Japan (JP)';
        break;
      case 'Арун':
      case 'Кайатор':
      case 'Арборея':
      case 'Лоркада':
      case 'Балдера':
      case 'Эссения':
        return 'Russia (RU)';
        break;
      case '提雅拉尼亞':
        return 'Taiwan (TR)';
        break;
    }
  }

  var getRegionFlag = function(teraServer) {
    var input = teraServer;
    switch (input) {
      case 'Mount Tyrannas':
      case 'Valley of Titans':
      case 'Lake of Tears':
      case 'Tempest Reach':
      case 'Celestial Hills':
      case 'Ascension Valley':
      case 'Highwatch':
        return '/asset/flags/United-States-flat-icon.png';
        break;
      case '벨릭의 은총':
      case '세렌의 용기':
      case '아룬의 영광':
      case '발더의 지혜':
      case '프레이아의 수호':
        return '/asset/flags/South-Korea-flat-icon.png';
        break;
      case 'Killian':
      case 'Fraya':
      case 'Hasmina':
      case 'Elinu':
      case 'Icaruna':
      case 'Veritas':
      case 'Akasha':
      case 'Arcadia':
      case 'Kaidun':
        return '/asset/flags/European-Union-flat-icon.png';
        break;
      case 'ユリアン':
      case 'エリーヌ':
        return '/asset/flags/Japan-flat-icon.png';
        break;
      case 'Арун':
      case 'Кайатор':
      case 'Арборея':
      case 'Лоркада':
      case 'Балдера':
      case 'Вестония':
      case 'Эссения':
        return '/asset/flags/Russia-flat-icon.png';
        break;
      case '提雅拉尼亞':
        return '/asset/flags/Taiwan-flat-icon.png';
        break;
    }
  }

  return {
    getServerRegion: getServerRegion,
    getRegionFlag: getRegionFlag
  };

});
