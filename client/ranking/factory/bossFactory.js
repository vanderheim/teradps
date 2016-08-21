angular.module('tera').factory('bossFactory', function() {
  var getDungeon = function(dungeon) {
    var input = dungeon;
    switch (input) {
      case '459':
        return 'Forsaken Island (Normal)';
        break;
      case '759':
        return 'Forsaken Island (Hard)';
        break;
      case '885':
      case '886':
        return 'Dreadspire';
        break;
      case '468':
        return 'Shadow Sanguinary (Hard)';
        break;
      case '768':
        return 'Shadow Sanguinary (Normal)';
        break;
      case '467':
        return 'Demokron Factory (Hard)';
        break;

      case '767':
        return 'Demokron Factory (Normal)';
        break;

      case '470':
        return 'Manglemire';
        break;

        // Lilith Normal
      case '769':
        return "Lilith's Castle (Normal)";
        break;

        // Lilith Hard
      case '969':
        return "Lilith's Castle (Hard)";
        break;

        // Rakelith Normal
      case '770':
        return "Rakelith's Ruins (Normal)";
        break;

        // Rakelith Hard
      case '970':
        return "Rakelith's Ruins (Hard)";
        break;

        // Sky Cruiser Hard
      case '916':
        return "Sky Cruiser Endeavor (Hard)";
        break;

      default:
        return 'Unknown Zone';
        break;
    }
  }

  var getBoss = function(boss) {
    switch (true) {
      case boss === '459.1001':
        return 'Rokdos';
        break;
      case boss === '459.1002':
        return 'Viyor';
        break;
      case boss === '459.1003':
        return 'Desolarus';
        break;
      case boss === '759.1001':
        return 'Nightmare Rokdos';
        break;
      case boss === '759.1002':
        return 'Nightmare Viyor';
        break;
      case boss === '759.1003':
        return 'Nightmare Desolarus';
        break;
      case boss === '886.88518':
        return 'Hrathgol';
        break;
      case boss === '885.88514':
        return 'Kelsaik';
        break;
      case boss === '886.88517':
        return 'Melkatran';
        break;
      case boss === '886.88516':
        return 'Lokmeme Sorgalur';
        break;
      case boss === '886.88519':
        return 'Meldita';
        break;
      case boss === '886.88601':
        return 'Koleogg';
        break;
      case boss === '886.88602':
        return 'Kaprima';
        break;
      case boss === '886.885200':
        return 'Shandra Manaya';
        break;

        // Sanguine Normal
      case boss === '768.1000':
        return 'Pahoegar';
        break;
      case boss === '768.2000':
        return 'Dakuryon';
        break;
      case boss === '768.3000':
        return 'Imperator';
        break;

        // Sanguine Hard
      case boss === '468.1000':
        return 'Nightmare Pahoegar';
        break;
      case boss === '468.2000':
        return 'Nightmare Dakuryon';
        break;
      case boss === '468.3000':
        return 'Nightmare Imperator';
        break;

        // Laboratory Hard
      case boss === '467.46701':
        return 'Nightmare Vera';
        break;
      case boss === '467.46703':
        return 'Nightmare Odon';
        break;
      case boss === '467.46704':
        return 'Nightmare Verno';
        break;

      case boss === '767.46704':
        return 'Verno';
        break;

      case boss === '470.1000':
        return 'Manglemore';
        break;

        // Lilith Normal
      case boss === '769.76901':
        return 'Nightmare';
        break;
      case boss === '769.76902':
        return 'Waxpider';
        break;
      case boss === '769.76903':
        return 'Lilith';
        break;

        // Lilith Hard
      case boss === '969.76901':
        return 'Nightmare Nightmare';
        break;
      case boss === '969.76902':
        return 'Nightmare Waxpider';
        break;
      case boss === '969.76903':
        return 'Nightmare Lilith';
        break;

        // Rakelith Normal
      case boss === '770.1000':
        return 'Revived Atrocitas';
        break;
      case boss === '770.2000':
        return 'Revived Malgarios';
        break;
      case boss === '770.3000':
        return 'Rakelith';
        break;

        // Rakelith Hard
      case boss === '970.1000':
        return 'Revived Nightmare Atrocitas';
        break;
      case boss === '970.2000':
        return 'Revived Nightmare Malgarios';
        break;
      case boss === '970.3000':
        return 'Nightmare Rakelith';
        break;

        // Sky Cruiser Hard
      case boss === '916.1000':
        return 'Nightmare Darkan';
        break;
      case boss === '916.91606':
        return 'Nightmare Perimos';
        break;
      case boss === '916.91650':
        return 'Nightmare Putrion';
        break;

      default:
        return 'Unknown Monster';
        break;
    }
  }

  var getArea = function(boss) {
    switch (true) {
      case boss === '459.1001':
      case boss === '459.1002':
      case boss === '459.1003':
        return 'Forsaken Island (Normal)';
        break;
      case boss === '759.1001':
      case boss === '759.1002':
      case boss === '759.1003':
        return 'Forsaken Island (Hard)';
        break;
      case boss === '886.88518':
      case boss === '885.88514':
      case boss === '886.88517':
      case boss === '886.88516':
      case boss === '886.88519':
      case boss === '886.88601':
      case boss === '886.88602':
      case boss === '886.885200':
        return 'Dreadspire (DS)';
        break;

        // Sanguine Normal
      case boss === '768.1000':
      case boss === '768.2000':
      case boss === '768.3000':
        return 'Shadow Sanguinary (Normal)';
        break;

        // Sanguine Hard
      case boss === '468.1000':
      case boss === '468.2000':
      case boss === '468.3000':
        return 'Shadow Sanguinary (Hard)';
        break;

        // Laboratory Hard
      case boss === '467.46701':
      case boss === '467.46703':
      case boss === '467.46704':
        return 'Demokron Laboratory (Hard)';
        break;

      case boss === '767.46704':
        return 'Demokron Laboratory (Normal)';
        break;

      case boss === '470.1000':
        return 'Manglemire';
        break;

        // Lilith Normal
      case boss === '769.76901':
      case boss === '769.76902':
      case boss === '769.76903':
        return "Lilith's Castle (Normal)";
        break;

        // Lilith Hard
      case boss === '969.76901':
      case boss === '969.76902':
      case boss === '969.76903':
        return "Lilith's Castle (Hard)";
        break;

        // Rakelith Normal
      case boss === '770.1000':
      case boss === '770.2000':
      case boss === '770.3000':
        return "Rakelith's Ruins (Normal)";
        break;

        // Rakelith Hard
      case boss === '970.1000':
      case boss === '970.2000':
      case boss === '970.3000':
        return "Rakelith's Ruins (Hard)";
        break;

        // Sky Cruiser Hard
      case boss === '916.1000':
      case boss === '916.91606':
      case boss === '916.91650':
        return "Sky Cruiser Endeavor (Hard)";
        break;

      default:
        return 'Unknown Area';
        break;
    }
  }

  return {
    getDungeon: getDungeon,
    getArea: getArea,
    getBoss: getBoss
  };

});
