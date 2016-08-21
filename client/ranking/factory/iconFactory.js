angular.module('tera').factory('iconFactory', function() {
  var getItemIcon = function(input) {
    switch (true) {
      case input === 902:
      case input === 911:
      case input === 912:
      case input === 913:
      case input === 916:
        return 'Noctenium Infusion';
        break;
      case input === 1250:
      case input === 1251:
        return 'Powerful Savage Draught';
        break;
      case input === 1530:
        return 'Divine Infusion';
        break;
      case input >= 2530 && input <= 2552:
        return 'Mana Elixir';
        break;
      case input >= 2620 && input <= 2642:
        return 'Mana Restorative';
        break;
      case input >= 2680 && input <= 2686:
        return 'Crit Factor Scroll';
        break;
      case input === 2701:
      case input === 2700:
        return 'Crit Power Scroll';
        break;
      case input >= 2725 && input <= 2730:
        return 'Attack Speed Scroll';
        break;
      case input === 2974:
        return 'Battle Nostrum';
        break;
      case input === 2976:
        return 'Extensive Battle Nostrum';
        break;
      case input >= 4830 && input <= 4831:
        return 'Bravery Potion';
        break;
      case input === 4953:
        return 'Canephora Potion';
        break;
      case input === 70221:
        return 'Lamb Bulgogi';
        break;
      case input === 60007:
        return "Heaven's Elixir";
        break;
      case input === 99020020:
        return "Vanguard Valor";
        break;
      case input === 7777015:
        return "Combat Accelerator Potion (20 PERCENT CDR)";
        break;
      case input === 70203:
        return 'Grilled Pigling';
        break;
      case input === 4833:
        return 'Strong Bravery Potion (12 PERCENT SKILL DAMAGE INCREASE, 6 ASPD INCREASE)';
        break;
      case input === 4955:
        return 'Strong Canephora Potion';
        break;
      case input === 70211:
        return 'Floretta Soup';
        break;
      case input === 70213:
        return 'Shevranberry Cookie';
        break;
      case input === 70222:
        return 'Struthio Breast Salad';
        break;
      case input === 70223:
        return 'Half Moon Croquette';
        break;
      case input === 70231:
      case input === 70239:
        return 'Freehold Flame Salad';
        break;
      case input === 70232:
      case input === 70240:
        return 'Bleak Wings';
        break;
      case input >= 100100 && input <= 100103:
        return 'Assault Stance';
        break;
      case input >= 100200 && input <= 100203:
        return 'Defensive Stance';
        break;
      case input === 401400:
        return 'Intimidation: SAY WHAT AGAIN I DARE YOU!';
        break;
      case input === 14400001:
        return 'Emblem Of Eminence';
        break;
      case input === 14400002:
        return 'Glorious Memento';
        break;
      case input === 14400003:
        return 'Seal of the Undying Flame';
        break;
      case input === 999001029:
        return 'Empowered Brooch';
        break;
      case input === 999001030:
        return 'Quickcarve Brooch';
        break;
      case input === 999001035:
        return 'Quatrefoil Brooch';
        break;
      case input === 601100:
      case input === 601101:
        return 'Sniper Eye';
        break;
      case input === 601110:
      case input === 601111:
        return 'Eagle Eye';
        break;
      case input >= 25 && input <= 33:
        return "Ultra-Hyper-Fire-Turbo Time - 80 PERCENT CDR BUFF";
        break;
      case input === 16300013:
        return "Daredevil Potion (15 PERCENT SKILL DAMAGE INCREASE, 8 ASPD INCREASE)";
        break;
      case input === 16300015:
        return "Drop Of Destruction (25 PERCENT SKILL DAMAGE INCREASE)";
        break;
      case input === 70237:
        return "Lain's Dark Root Beer";
        break;
      default:
        return false;
        break;
    }
  };

  var getDebuffIcon = function(input) {
    switch (input) {
      case 600502:
        return "Velik's Mark";
      case 26220:
      case 26251:
        return 'Ensnaring Trap';
        break;
      case 27160:
        return 'Volley Of Curses';
        break;
      case 28090:
        return 'Triple Nemesis';
        break;
      case 200300:
      case 200301:
      case 200302:
        return 'Debilitate';
        break;
      case 401500:
        return 'Punishing Strike';
        break;
      case 701700:
      case 701701:
        return 'Contagion';
        break;
      case 10153140:
        return 'Jackhammer';
        break;
      case 101200:
      case 101220:
        return 'Combative Strike';
        break;
      case 101300:
        return 'Traverse Cut';
        break;
      case 15161:
        return "Blacksmith's Final Mercy";
        break;
      case 60010:
        return "BTFO By A Hurricane";
        break;
      default:
        return false;
        break;
    };
  };
  var getGlyphIcon = function(input) {
    switch (true) {
      case input === 21040:
      case input === 21130:
      case input === 21131:
      case input === 21111:
      case input === 21110:
      case input === 21080:
      case input === 22010:
      case input === 23030:
      case input === 23130:
      case input === 23031:
      case input === 23032:
      case input === 22040:
      case input === 29020:
      case input === 29040:
      case input === 29041:
      case input === 29112:
      case input === 31020:
      case input === 31030:
      case input === 31110:
        return 'pl';
        break;
      case input === 23020:
      case input === 23020:
      case input === 23020:
      case input === 21010:
      case input === 21070:
      case input === 30020:
      case input === 30050:
        return 'swift';
        break;
      case input === 22010:
      case input === 24060:
      case input === 25010:
        return 'pump';
        break;
      case input === 25170:
      case input === 25171:
        return 'keen';
        break;
    }
  };

  var getBuffIcon = function(input) {
    switch (true) {
      case input === 201:
      case input === 202:
        return {
          ref: 'shakan',
          name: 'Blessing Of Shakan'
        };
        break;
      case input === 601:
      case input === 602:
      case input === 603:
      case input === 907:
        return {
          ref: 'wrath',
          name: 'Titanic Wrath'
        };
        break;
      case input === 10306:
        return {
          ref: 'estars',
          name: 'Energy Stars'
        };
        break;
      case input >= 10300 && input <= 10325:
      case input === 12090:
        return {
          ref: 'forceful',
          name: 'Forceful Crystal'
        };
        break;
      case input === 12001:
      case input === 12003:
      case input === 12120:
      case input === 12130:
        return {
          ref: 'glistening',
          name: 'Glistening Crystal'
        };
        break;

        // Powerlinks
        // case input === 21010:
        //   return 'evasive';
        //   break;
        // case input === 21040:
        // case input === 21130:
        // case input === 21131:
        //   return 'combative';
        //   break;
        // case input === 21111:
        // case input === 21110:
        //   return 'charge';
        //   break;
        // case input === 21070:
        //   return 'death';
        //   break;
        // case input === 21080:
        // case input === 22010:
        //   return 'cascade';
        //   break;
        // case input === 23020:
        //   return 'combo';
        //   break;
        // case input === 23031:
        // case input === 23032:
        //   return 'evis';
        //   break;
        // case input === 22010:
        //   return 'stand';
        //   break;
        // case input === 22040:
        //   return 'stand';
        //   break;
        // case input === 24060:
        //   return 'fiery';
        //   break;
        // case input === 25010:
        //   return 'mana';
        //   break;
        // case input === 25170:
        //   return 'arcane';
        //   break;
        // case input === 25171:
        //   return 'nova';
        //   break;
        // case input === 29020:
        //   return 'shear';
        //   break;
        // case input === 29040:
        // case input === 29041:
        // case input === 29112:
        //   return 'spiral';
        //   break;
        // case input === 30020:
        //   return 'blast';
        //   break;
        // case input === 30050:
        //   return 'arcaneb';
        //   break;
        // case input === 31020:
        //   return 'counter';
        //   break;
        // case input === 31030:
        // case input === 31110:
        //   return 'roundhouse';
        //   break;

        // Skill Buffs
      case input === 100801:
        return {
          ref: 'gamble',
          name: 'Deadly Gamble'
        };
        break;
      case input >= 200230 && input <= 200232:
        return {
          ref: 'guardian',
          name: 'Guardian Shout'
        };
        break;
      case input === 200700:
      case input === 200701:
        return {
          ref: 'adrenaline',
          name: 'Adrenaline Rush'
        };
        break;
        // case input === 201701:
        //   return { ref: 'lineheld', name: 'Hold The Line' };
        //   break;
      case input >= 300800 && input <= 300801:
        return {
          ref: 'icb',
          name: 'In Cold Blood'
        };
        break;
      case input >= 400100 && input <= 400105:
        return {
          ref: 'fiery',
          name: 'Fiery Rage'
        };
        break;
      case input === 400501:
        return {
          ref: 'flurry',
          name: 'Flurry Of Blows'
        };
        break;
      case input >= 400700 && input <= 400701:
        return {
          ref: 'blood',
          name: 'Bloodlust'
        };
        break;
      case input === 501200:
      case input === 47700000:
        return {
          ref: 'celerity',
          name: 'Burst Of Celerity'
        };
        break;
      case input === 700300:
        return {
          ref: 'mpaura',
          name: 'Aura Of The Tenacious'
        };
        break;
      case input >= 700600 && input <= 700631:
        return {
          ref: 'critaura',
          name: 'Aura Of The Merciless'
        };
        break;
      case input === 800500:
      case input === 800501:
        return {
          ref: 'seren',
          name: 'Blessing Of Seren'
        };
        break;
      case input === 201701:
        return {
          ref: 'lineheld',
          name: 'Hold The Line'
        };
        break;
      case input >= 10153040 && input <= 10153040:
        return {
          ref: 'growing',
          name: 'Growing Fury'
        };
        break;
      case input >= 801500 && input <= 801503:
        return {
          ref: 'estars',
          name: 'Energy Stars'
        };
        break;
      case input === 10151010:
        return {
          ref: 'shadowreaping',
          name: 'Shadow Reaping'
        };
        break;
        // case input === 10154030:
      case input === 10154032:
        return {
          ref: 'channel',
          name: 'Focus'
        };
        break;
        // case input === 10151090:
        //   return 'reaperpassive';
        //   break;
      default:
        return false;
        break;
    };
  };

  var getSkillIcon = function(input, teraClass) {
    switch (true) {
      // Archer
      case input >= 10100 && input <= 11500 && teraClass === 'Archer':
        return {
          ref: 'arrow',
          name: 'Arrow'
        };
        break;
      case input >= 20100 && input <= 21510 && teraClass === 'Archer':
        return {
          ref: 'arrow-volley',
          name: 'Arrow Volley'
        };
        break;
      case input >= 30100 && input <= 31413 && teraClass === 'Archer':
        return {
          ref: 'radiant-arrow',
          name: 'Radiant Arrow'
        };
        break;
      case input >= 40100 && input <= 41413 && teraClass === 'Archer':
        return {
          ref: 'penetrating-arrow',
          name: 'Penetrating Arrow'
        };
        break;
      case input >= 50100 && input <= 50620 && teraClass === 'Archer':
        return {
          ref: 'rain-of-arrows',
          name: 'Rain Of Arrows'
        };
        break;
      case input >= 80100 && input <= 81206 && teraClass === 'Archer':
        return {
          ref: 'rapid-fire',
          name: 'Rapid Fire'
        };
        break;
      case input >= 90100 && input <= 90920 && teraClass === 'Archer':
        return {
          ref: 'slow-trap',
          name: 'Slow Trap'
        };
        break;
      case input >= 100100 && input <= 100720 && teraClass === 'Archer':
        return {
          ref: 'stun-trap',
          name: 'Stun Trap'
        };
        break;
      case input >= 110100 && input <= 111020 && teraClass === 'Archer':
        return {
          ref: 'poison-trap',
          name: 'Poison Trap'
        };
        break;
      case input >= 120100 && input <= 120500 && teraClass === 'Archer':
        return {
          ref: 'velik',
          name: "Velik's Mark"
        };
        break;
      case input >= 140100 && input <= 141200 && teraClass === 'Archer':
        return {
          ref: 'retal',
          name: 'Retaliate'
        };
        break;
      case input >= 150100 && input <= 151020 && teraClass === 'Archer':
        return {
          ref: 'fire-trap',
          name: 'Fire Trap'
        };
        break;
      case input >= 160100 && input <= 161300 && teraClass === 'Archer':
        return {
          ref: 'breakaway-bolt',
          name: 'Breakaway Bolt'
        };
        break;
      case input >= 170100 && input <= 170500 && teraClass === 'Archer':
        return {
          ref: 'web-arrow',
          name: 'Web Arrow'
        };
        break;
      case input >= 180100 && input <= 181301 && teraClass === 'Archer':
        return {
          ref: 'close-quarters',
          name: 'Close Quarters'
        };
        break;
      case input >= 190100 && input <= 191100 && teraClass === 'Archer':
        return {
          ref: 'poison-arrow',
          name: 'Poison Arrow'
        };
        break;
      case input >= 200100 && input <= 200400 && teraClass === 'Archer':
        return {
          ref: 'restraining-arrow',
          name: 'Restraining Arrow'
        };
        break;
      case input >= 220100 && input <= 221104 && teraClass === 'Archer':
        return {
          ref: 'final-salvo',
          name: 'Final Salvo'
        };
        break;
      case input >= 230100 && input <= 230520 && teraClass === 'Archer':
        return {
          ref: 'concussion-trap',
          name: 'Concussion Trap'
        };
        break;
      case input >= 240100 && input <= 240520 && teraClass === 'Archer':
        return {
          ref: 'ensnaring-trap',
          name: 'Ensnaring Trap'
        };
        break;
      case input >= 250100 && input <= 250520 && teraClass === 'Archer':
        return {
          ref: 'explosion-trap',
          name: 'Explosion Trap'
        };
        break;
      case input >= 260100 && input <= 260200 && teraClass === 'Archer' || input >= 290100 && input <= 290120 && teraClass === 'Archer':
        return {
          ref: 'thunderbolt',
          name: 'Thunderbolt'
        };
        break;

        // Berserker
      case input >= 10100 && input <= 11503 && teraClass === 'Berserker':
        return {
          ref: 'combo',
          name: 'Combo Attack'
        };
        break;
        // case input >= 20100 && input <= 21510 && teraClass === 'Berserker':
        //   return { ref: 'block', name: '' };
        //   break;
      case input >= 30100 && input <= 31413 && teraClass === 'Berserker':
        return {
          ref: 'thunderstrike',
          name: 'Thunderstrike'
        };
        break;
      case input >= 40100 && input <= 41530 && teraClass === 'Berserker':
        return {
          ref: 'flatten',
          name: 'Flatten'
        };
        break;
      case input >= 60100 && input <= 60800 && teraClass === 'Berserker':
        return {
          ref: 'staggering-strike',
          name: 'Staggering Strike'
        };
        break;
      case input >= 70100 && input <= 70400 && teraClass === 'Berserker':
        return {
          ref: 'mocking-shout',
          name: 'Mocking Shout'
        };
        break;
      case input >= 100100 && input <= 101413 && teraClass === 'Berserker':
        return {
          ref: 'cyclone',
          name: 'Cyclone'
        };
        break;
      case input >= 110100 && input <= 111100 && teraClass === 'Berserker':
        return {
          ref: 'leaping-strike',
          name: 'Leaping Strike'
        };
        break;
      case input >= 130100 && input <= 131200 && teraClass === 'Berserker':
        return {
          ref: 'retal',
          name: 'Retaliate'
        };
        break;
      case input >= 180100 && input <= 180913 && teraClass === 'Berserker':
        return {
          ref: 'lethal-strike',
          name: 'Lethal Strike'
        };
        break;
      case input >= 150100 && input <= 151214 && teraClass === 'Berserker':
        return {
          ref: 'vamp-blow',
          name: 'Vampiric Blow'
        };
        break;
      case input >= 220100 && input <= 220200 && teraClass === 'Berserker' || input >= 260100 && input <= 260120 && teraClass === 'Berserker':
        return {
          ref: 'tackle',
          name: 'Tackle'
        };
        break;
      case input >= 230100 && input <= 230200 && teraClass === 'Berserker' || input >= 250100 && input <= 250131 && teraClass === 'Berserker':
        return {
          ref: 'raze',
          name: 'Raze'
        };
        break;
      case input >= 240100 && input <= 240513 && teraClass === 'Berserker':
        return {
          ref: 'evasive-smash',
          name: 'Evasive Smash'
        };
        break;
      case input >= 300100 && input <= 300130 && teraClass === 'Berserker':
        return {
          ref: 'axe-counter',
          name: 'Axe Counter'
        };
        break;
      case input >= 310100 && input <= 310101 && teraClass === 'Berserker':
        return {
          ref: 'overwhelm',
          name: 'Overwhelm'
        };
        break;
      case input >= 320100 && input <= 320101 && teraClass === 'Berserker':
        return {
          ref: 'punishing-strike',
          name: 'Punishing Strike'
        };
        break;

        // Brawler
      case input >= 10100 && input <= 11232 && teraClass === 'Brawler':
        return {
          ref: 'punch',
          name: 'Punch'
        };
        break;
      case input >= 20100 && input <= 21212 && teraClass === 'Brawler':
        return {
          ref: 'counter',
          name: 'Counter'
        };
        break;
      case input >= 30100 && input <= 30201 && teraClass === 'Brawler':
        return {
          ref: 'divine',
          name: 'Divine Wrath'
        };
        break;
      case input >= 40100 && input <= 41030 && teraClass === 'Brawler':
        return {
          ref: 'ground',
          name: 'Ground Pounder'
        };
        break;
      case input >= 50100 && input <= 50900 && teraClass === 'Brawler':
        return {
          ref: 'bull',
          name: 'Bull Rush'
        };
        break;
      case input >= 60100 && input <= 61131 && teraClass === 'Brawler':
        return {
          ref: 'hay',
          name: 'Haymaker'
        };
        break;
      case input >= 71100 && input <= 71230 && teraClass === 'Brawler':
        return {
          ref: 'roundhouse',
          name: 'Roundhouse Kick'
        };
        break;
        // case input >= 110100 && input <= 111100 && teraClass === 'Brawler':
        //   return { ref: 'leaping-strike', name: '' };
        //   break;
      case input >= 80100 && input <= 81131 && teraClass === 'Brawler':
        return {
          ref: 'pile',
          name: 'Piledriver'
        };
        break;
      case input >= 90100 && input <= 91231 && teraClass === 'Brawler':
        return {
          ref: 'jack',
          name: 'Jackhammer'
        };
        break;
      case input >= 100100 && input <= 100930 && teraClass === 'Brawler':
        return {
          ref: 'counterpunch',
          name: 'Counterpunch'
        };
        break;
      case input >= 120100 && input <= 121000 && teraClass === 'Brawler':
        return {
          ref: 'retal',
          name: 'Retaliate'
        };
        break;
      case input >= 150100 && input <= 151030 && teraClass === 'Brawler':
        return {
          ref: 'high',
          name: 'High Kick'
        };
        break;
      case input >= 160100 && input <= 160530 && teraClass === 'Brawler':
        return {
          ref: 'flip',
          name: 'Flip Kick'
        };
        break;
      case input >= 170100 && input <= 171010 && teraClass === 'Brawler':
        return {
          ref: 'rampage',
          name: 'Rampage'
        };
        break;
      case input >= 200100 && input <= 201000 && teraClass === 'Brawler':
        return {
          ref: 'meat',
          name: 'Meat Grinder'
        };
        break;

        // Gunner
      case input >= 10100 && input <= 11220 && teraClass === 'Gunner':
        return {
          ref: 'blast',
          name: 'Blast'
        };
        break;
      case input >= 20100 && input <= 20700 && teraClass === 'Gunner':
        return {
          ref: 'bombardment',
          name: 'Bombardment'
        };
        break;
      case input >= 30100 && input <= 31130 && teraClass === 'Gunner':
        return {
          ref: 'scatter',
          name: 'Scattershot'
        };
        break;
      case input >= 40100 && input <= 41030 && teraClass === 'Gunner':
        return {
          ref: 'point',
          name: 'Point Blank'
        };
        break;
      case input >= 50100 && input <= 51001 && teraClass === 'Gunner':
        return {
          ref: 'burst',
          name: 'Burst Fire'
        };
        break;
      case input >= 60100 && input <= 61122 && teraClass === 'Gunner':
        return {
          ref: 'time',
          name: 'Time Bomb'
        };
        break;
      case input >= 70100 && input <= 70822 && teraClass === 'Gunner':
        return {
          ref: 'arcane',
          name: 'Arcane Barrage'
        };
        break;
      case input >= 90100 && input <= 91025 && teraClass === 'Gunner':
        return {
          ref: 'mana',
          name: 'Mana Missiles'
        };
        break;
      case input >= 120120 && input <= 120720 && teraClass === 'Gunner':
        return {
          ref: 'electricbomb',
          name: 'HB: Attack'
        };
        break;
      case input >= 130100 && input <= 130230 && teraClass === 'Gunner':
        return {
          ref: 'balder',
          name: "Balder's Vengeance"
        };
        break;
      case input >= 100100 && input <= 101130 && teraClass === 'Gunner':
        return {
          ref: 'arc',
          name: 'Arc Bomb'
        };
        break;
      case input >= 180100 && input <= 180722 && teraClass === 'Gunner':
        return {
          ref: 'hb',
          name: 'Summon: HB'
        };
        break;
      case input >= 190100 && input <= 190430 && teraClass === 'Gunner':
        return {
          ref: 'st',
          name: 'ST'
        };
        break;
      case input >= 200100 && input <= 201000 && teraClass === 'Gunner':
        return {
          ref: 'retal',
          name: 'Retaliate'
        };
        break;
      case input == 220100 && teraClass === 'Gunner':
        return {
          ref: 'selfdestruct',
          name: 'Command: Self-Destruct'
        };
        break;

        // Lancer
      case input >= 10100 && input <= 11502 && teraClass === 'Lancer':
        return {
          ref: 'combo',
          name: 'Combo Attack'
        };
        break;
      case input >= 30100 && input <= 31530 && teraClass === 'Lancer':
        return {
          ref: 'onslaught',
          name: 'Onslaught'
        };
        break;
      case input >= 50100 && input <= 51100 && teraClass === 'Lancer':
        return {
          ref: 'shield-bash',
          name: 'Shield Bash'
        };
        break;
      case input >= 80100 && input <= 81400 && teraClass === 'Lancer':
        return {
          ref: 'shield-counter',
          name: 'Shield Counter'
        };
        break;
      case input >= 90100 && input <= 91000 && teraClass === 'Lancer':
        return {
          ref: 'leash',
          name: 'Leash'
        };
        break;
      case input >= 100100 && input <= 100900 && teraClass === 'Lancer':
        return {
          ref: 'deb',
          name: 'Debilitate'
        };
        break;
      case input >= 110100 && input <= 111200 && teraClass === 'Lancer':
        return {
          ref: 'retal',
          name: 'Retaliate'
        };
        break;
      case input >= 130100 && input <= 131430 && teraClass === 'Lancer':
        return {
          ref: 'spring',
          name: 'Spring Attack'
        };
        break;
      case input >= 150100 && input <= 151301 && teraClass === 'Lancer':
        return {
          ref: 'charge',
          name: 'Charging Lunge'
        };
        break;
      case input >= 180100 && input <= 181401 && teraClass === 'Lancer':
        return {
          ref: 'shield-barrage',
          name: 'Shield Barrage'
        };
        break;
      case input >= 210100 && input <= 210700 && teraClass === 'Lancer':
        return {
          ref: 'lockdown',
          name: 'Lockdown Blow'
        };
        break;
      case input >= 230100 && input <= 230300 && teraClass === 'Lancer':
        return {
          ref: 'master',
          name: 'Master Leash'
        };
        break;
      case input >= 240100 && input <= 240320 && teraClass === 'Lancer':
        return {
          ref: 'giga',
          name: 'Giga Leash'
        };
        break;
      case input >= 250100 && input <= 251030 && teraClass === 'Lancer':
        return {
          ref: 'wallop',
          name: 'Wallop'
        };
        break;

        // Mystic
      case input >= 10100 && input <= 11503 && teraClass === 'Mystic':
        return {
          ref: 'combo',
          name: 'Sharan Bolt'
        };
        break;
      case input >= 20100 && input <= 21412 && teraClass === 'Mystic':
        return {
          ref: 'corruption',
          name: 'Corruption Ring'
        };
        break;
      case input >= 80100 && input <= 81500 && teraClass === 'Mystic':
        return {
          ref: 'blast',
          name: 'Metamorphic Blast'
        };
        break;
      case input >= 210100 && input <= 211200 && teraClass === 'Mystic':
        return {
          ref: 'retal',
          name: 'Retaliate'
        };
        break;
      case input >= 230100 && input <= 231300 && teraClass === 'Mystic':
        return {
          ref: 'smite',
          name: 'Metamorphic Smite'
        };
        break;
      case input >= 240100 && input <= 241210 && teraClass === 'Mystic':
        return {
          ref: 'volley',
          name: 'Volley Of Curses'
        };
        break;
      case input >= 340100 && input <= 341600 && teraClass === 'Mystic':
        return {
          ref: 'wrath',
          name: 'Thrall Of Wrath'
        };
        break;
      case input >= 330100 && input <= 331700 && teraClass === 'Mystic':
        return {
          ref: 'vengeance',
          name: 'Thrall Of Vengeance'
        };
        break;
      case input >= 410100 && input <= 410110 && teraClass === 'Mystic':
        return {
          ref: 'contagion',
          name: 'Contagion'
        };
        break;
      case input >= 420100 && input <= 420120 && teraClass === 'Mystic':
        return {
          ref: 'boomerang',
          name: 'Boomerang Pulse'
        };
        break;

        // Priest
      case input >= 10100 && input <= 11523 && teraClass === 'Priest':
        return {
          ref: 'combo',
          name: 'Divine Radiance'
        };
        break;
      case input >= 110100 && input <= 111500 && teraClass === 'Priest':
        return {
          ref: 'blast',
          name: 'Metamorphic Blast'
        };
        break;
      case input >= 160100 && input <= 161300 && teraClass === 'Priest':
        return {
          ref: 'shock',
          name: 'Shocking Implosion'
        };
        break;
      case input >= 250100 && input <= 251200 && teraClass === 'Priest':
        return {
          ref: 'retal',
          name: 'Retaliate'
        };
        break;
      case input >= 260100 && input <= 261400 && teraClass === 'Priest':
        return {
          ref: 'fiery',
          name: 'Fiery Escape'
        };
        break;
      case input >= 270100 && input <= 271330 && teraClass === 'Priest':
        return {
          ref: 'final',
          name: 'Final Reprisal'
        };
        break;
      case input >= 290100 && input <= 291402 && teraClass === 'Priest':
        return {
          ref: 'triple',
          name: 'Triple Nemesis'
        };
        break;
      case input >= 300100 && input <= 301010 && teraClass === 'Priest':
        return {
          ref: 'plague',
          name: 'Plague Of Exhaustion'
        };
        break;
      case input >= 350100 && input <= 350710 && teraClass === 'Priest':
        return {
          ref: 'estars',
          name: 'Energy Stars'
        };
        break;
      case input >= 400100 && input <= 400120 && teraClass === 'Priest':
        return {
          ref: 'vortex',
          name: "Zenobia's Vortex"
        };
        break;

        // Reaper
      case input >= 10100 && input <= 10305 && teraClass === 'Reaper':
        return {
          ref: 'combo',
          name: 'Spiral Barrage'
        };
        break;
      case input >= 30100 && input <= 30330 && teraClass === 'Reaper':
        return {
          ref: 'double',
          name: 'Double Shear'
        };
        break;
      case input >= 40100 && input <= 40330 && teraClass === 'Reaper':
        return {
          ref: 'sunder',
          name: 'Sundering Strike'
        };
        break;
      case input >= 50100 && input <= 50330 && teraClass === 'Reaper':
        return {
          ref: 'grim',
          name: 'Grim Strike'
        };
        break;
      case input >= 60100 && input <= 60231 && teraClass === 'Reaper':
        return {
          ref: 'spiral',
          name: 'Death Spiral'
        };
        break;
      case input >= 70100 && input <= 70231 && teraClass === 'Reaper':
        return {
          ref: 'final',
          name: 'Final Judgment'
        };
        break;
      case input >= 80100 && input <= 80230 && teraClass === 'Reaper':
        return {
          ref: 'whip',
          name: 'Whipsaw'
        };
        break;
      case input >= 90100 && input <= 90130 && teraClass === 'Reaper':
        return {
          ref: 'smite',
          name: 'Smite'
        };
        break;
      case input >= 100100 && input <= 100230 && teraClass === 'Reaper':
        return {
          ref: 'pendulum',
          name: 'Pendulum Strike'
        };
        break;
      case input >= 110100 && input <= 110290 && teraClass === 'Reaper':
        return {
          ref: 'lash',
          name: 'Shadow Lash'
        };
        break;
      case input >= 120100 && input <= 120230 && teraClass === 'Reaper':
        return {
          ref: 'burst',
          name: 'Shadow Burst'
        };
        break;
      case input >= 130100 && input <= 130130 && teraClass === 'Reaper':
        return {
          ref: 'soul',
          name: 'Soul Reversal'
        };
        break;
      case input >= 140100 && input <= 140300 && teraClass === 'Reaper':
        return {
          ref: 'retal',
          name: 'Retaliate'
        };
        break;
      case input >= 150100 && input <= 150380 && teraClass === 'Reaper':
        return {
          ref: 'retribution',
          name: 'Retribution'
        };
        break;
      case input >= 200100 && input <= 200130 && teraClass === 'Reaper':
        return {
          ref: 'cable',
          name: 'Cable Step'
        };
        break;

        // Slayer
      case input >= 10100 && input <= 11503 && teraClass === 'Slayer':
        return {
          ref: 'combo',
          name: 'Combo Attack'
        };
        break;
      case input >= 20100 && input <= 21400 && teraClass === 'Slayer':
        return {
          ref: 'knock',
          name: 'Knockdown Strike'
        };
        break;
      case input >= 30100 && input <= 31500 && teraClass === 'Slayer':
        return {
          ref: 'whirl',
          name: 'Whirlwind'
        };
        break;
      case input >= 60100 && input <= 60600 && teraClass === 'Slayer':
        return {
          ref: 'backstab',
          name: 'Backstab'
        };
        break;
      case input >= 80100 && input <= 81230 && teraClass === 'Slayer':
        return {
          ref: 'overhand',
          name: 'Overhand Strike'
        };
        break;
      case input >= 90100 && input <= 91100 && teraClass === 'Slayer':
        return {
          ref: 'leap',
          name: 'Leaping Strike'
        };
        break;
      case input >= 210100 && input <= 210500 && teraClass === 'Slayer':
        return {
          ref: 'exhaust',
          name: 'Exhausting Blow'
        };
        break;
      case input >= 100100 && input <= 101200 && teraClass === 'Slayer':
        return {
          ref: 'retal',
          name: 'Retaliate'
        };
        break;
      case input >= 120100 && input <= 120800 && teraClass === 'Slayer':
        return {
          ref: 'heart',
          name: 'Heart Thrust'
        };
        break;
      case input >= 130100 && input <= 131000 && teraClass === 'Slayer':
        return {
          ref: 'backhand',
          name: 'Stunning Backhand'
        };
        break;
      case input >= 140100 && input <= 141102 && teraClass === 'Slayer':
        return {
          ref: 'distant',
          name: 'Distance Blade'
        };
        break;
      case input >= 150100 && input <= 151100 && teraClass === 'Slayer':
        return {
          ref: 'kick',
          name: 'Startling Kick'
        };
        break;
      case input >= 160100 && input <= 160700 && teraClass === 'Slayer':
        return {
          ref: 'fury',
          name: 'Fury Strike'
        };
        break;
      case input >= 220100 && input <= 220200 && teraClass === 'Slayer' || input >= 240100 && input <= 240130 && teraClass === 'Slayer':
        return {
          ref: 'evis',
          name: 'Eviscerate'
        };
        break;
      case input >= 230100 && input <= 230530 && teraClass === 'Slayer':
        return {
          ref: 'measured',
          name: 'Measured Slice'
        };
        break;
      case input >= 250100 && input <= 250130 && teraClass === 'Slayer':
        return {
          ref: 'ultover2',
          name: 'Ultimate Overhand Strike'
        };
        break;

        // Warrior
      case input >= 10100 && input <= 11503 && teraClass === 'Warrior':
        return {
          ref: 'combo',
          name: 'Combo Attack'
        };
        break;
      case input >= 30100 && input <= 31200 && teraClass === 'Warrior':
        return {
          ref: 'torrent',
          name: 'Torrent Of Blows'
        };
        break;
      case input >= 40100 && input <= 41530 && teraClass === 'Warrior':
        return {
          ref: 'rain',
          name: 'Rain Of Blows'
        };
        break;
      case input >= 100100 && input <= 101000 && teraClass === 'Warrior':
        return {
          ref: 'death',
          name: 'Death From Above'
        };
        break;
      case input >= 110100 && input <= 111100 && teraClass === 'Warrior':
        return {
          ref: 'poison',
          name: 'Poison Blade'
        };
        break;
      case input >= 120100 && input <= 121100 && teraClass === 'Warrior':
        return {
          ref: 'leap',
          name: 'Leaping Strike'
        };
        break;
      case input >= 130100 && input <= 131200 && teraClass === 'Warrior':
        return {
          ref: 'retal',
          name: 'Retaliate'
        };
        break;
      case input >= 160100 && input <= 161001 && teraClass === 'Warrior':
        return {
          ref: 'charge',
          name: 'Charging Slash'
        };
        break;
      case input >= 170100 && input <= 171400 && teraClass === 'Warrior':
        return {
          ref: 'vortex',
          name: 'Vortex Slash'
        };
        break;
      case input >= 180100 && input <= 181400 && teraClass === 'Warrior':
        return {
          ref: 'combative',
          name: 'Combative Strike'
        };
        break;
      case input >= 190100 && input <= 191301 && teraClass === 'Warrior':
        return {
          ref: 'rising',
          name: 'Rising Fury'
        };
        break;
      case input >= 210100 && input <= 210400 && teraClass === 'Warrior':
        return {
          ref: 'cascade',
          name: 'Cascade Of Stuns'
        };
        break;
      case input >= 220100 && input <= 220400 && teraClass === 'Warrior':
        return {
          ref: 'backstab',
          name: 'Backstab'
        };
        break;
      case input >= 230100 && input <= 230200 && teraClass === 'Warrior':
        return {
          ref: 'stagger',
          name: 'Staggering Counter'
        };
        break;
      case input >= 270100 && input <= 271100 && teraClass === 'Warrior':
        return {
          ref: 'pounce',
          name: 'Pounce'
        };
        break;
      case input >= 280100 && input <= 281030 && teraClass === 'Warrior':
        return {
          ref: 'traverse',
          name: 'Traverse Cut'
        };
        break;
      case input >= 290100 && input <= 291030 && teraClass === 'Warrior':
        return {
          ref: 'blade',
          name: 'Blade Draw'
        };
        break;
      case input >= 300100 && input <= 300530 && teraClass === 'Warrior':
        return {
          ref: 'scythe',
          name: 'Scythe'
        };
        break;
      case input >= 310100 && input <= 311230 && teraClass === 'Warrior':
        return {
          ref: 'reaping',
          name: 'Reaping Slash'
        };
        break;
      case input == 340100 && teraClass === 'Warrior':
        return {
          ref: 'binding',
          name: 'Binding Sword'
        };
        break;

        // Sorcerer
      case input >= 10100 && input <= 11500 && teraClass === 'Sorcerer':
        return {
          ref: 'combo',
          name: 'Fireball'
        };
        break;
      case input >= 20100 && input <= 21520 && teraClass === 'Sorcerer':
        return {
          ref: 'ice',
          name: 'Ice Needle'
        };
        break;
      case input >= 30100 && input <= 31220 && teraClass === 'Sorcerer':
        return {
          ref: 'lightning',
          name: 'Lightning Trap'
        };
        break;
      case input >= 40100 && input <= 41523 && teraClass === 'Sorcerer':
        return {
          ref: 'arcane',
          name: 'Arcane Pulse'
        };
        break;
      case input >= 60100 && input <= 61000 && teraClass === 'Sorcerer':
        return {
          ref: 'fireblast',
          name: 'Fireblast'
        };
        break;
      case input >= 80100 && input <= 81400 && teraClass === 'Sorcerer':
        return {
          ref: 'pillar',
          name: 'Flame Pillar'
        };
        break;
      case input >= 100100 && input <= 101200 && teraClass === 'Sorcerer':
        return {
          ref: 'retal',
          name: 'Retaliate'
        };
        break;
      case input >= 110100 && input <= 111440 && teraClass === 'Sorcerer':
        return {
          ref: 'magma',
          name: 'Magma Bomb'
        };
        break;
      case input >= 120100 && input <= 120920 && teraClass === 'Sorcerer':
        return {
          ref: 'void',
          name: 'Void Pulse'
        };
        break;
      case input >= 140100 && input <= 141300 && teraClass === 'Sorcerer':
        return {
          ref: 'retal',
          name: 'Retaliate'
        };
        break;
      case input >= 160100 && input <= 161200 && teraClass === 'Sorcerer':
        return {
          ref: 'painblast',
          name: 'Painblast'
        };
        break;
      case input >= 170100 && input <= 170920 && teraClass === 'Sorcerer':
        return {
          ref: 'pain',
          name: 'Painful Trap'
        };
        break;
      case input >= 180100 && input <= 181200 && teraClass === 'Sorcerer':
        return {
          ref: 'glacial',
          name: 'Glacial Retreat'
        };
        break;
      case input >= 200100 && input <= 200810 && teraClass === 'Sorcerer':
        return {
          ref: 'flaming',
          name: 'Flaming Barrage'
        };
        break;
      case input >= 270100 && input <= 270720 && teraClass === 'Sorcerer':
        return {
          ref: 'hail',
          name: 'Hailstorm'
        };
        break;
      case input === 300100 && teraClass === 'Sorcerer':
        return {
          ref: 'nova',
          name: 'Nova'
        };
        break;

        // Ninja
      case input >= 10100 && input <= 11270 && teraClass === 'Ninja':
        return {
          ref: 'combo',
          name: 'Combo Attack'
        };
        break;
      case input >= 30100 && input <= 30830 && teraClass === 'Ninja':
        return {
          ref: 'kunai',
          name: 'Leaves on the Wind'
        };
        break;
      case input >= 40100 && input <= 41111 && teraClass === 'Ninja':
        return {
          ref: 'storm',
          name: 'Jagged Path'
        };
        break;
      case input >= 50100 && input <= 50930 && teraClass === 'Ninja':
        return {
          ref: 'flower',
          name: 'Impact Bomb'
        };
        break;
      case input >= 60100 && input <= 61030 && teraClass === 'Ninja':
        return {
          ref: 'cosmic',
          name: 'One Thousand Cuts'
        };
        break;
      case input >= 70100 && input <= 71200 && teraClass === 'Ninja':
        return {
          ref: 'backstab',
          name: 'Decoy Jutsu'
        };
        break;
      case input >= 80100 && input <= 80230 && teraClass === 'Ninja':
        return {
          ref: 'flaming',
          name: 'Fire Avalanche'
        };
        break;
      case input >= 100100 && input <= 101000 && teraClass === 'Ninja':
        return {
          ref: 'retal',
          name: 'Retaliate'
        };
        break;
      case input >= 120100 && input <= 121130 && teraClass === 'Ninja':
        return {
          ref: 'triple',
          name: "Skyfall"
        };
      case input >= 130100 && input <= 131030 && teraClass === 'Ninja':
        return {
          ref: 'hurricane',
          name: 'Circle Of Steel'
        };
        break;
      case input >= 140100 && input <= 141130 && teraClass === 'Ninja':
        return {
          ref: 'double',
          name: 'Double Cut'
        };
        break;
      case input >= 150100 && input <= 150720 && teraClass === 'Ninja':
        return {
          ref: 'flamethrower',
          name: 'Burning Heart'
        };
        break;
      case input >= 160100 && input <= 160430 && teraClass === 'Ninja':
        return {
          ref: 'shuriken storm',
          name: 'Death Blossom'
        };
        break;
      case input >= 180100 && input <= 180930 && teraClass === 'Ninja':
        return {
          ref: 'windmill',
          name: 'Bladestorm'
        };
        break;
      case input >= 190100 && input <= 190530 && teraClass === 'Ninja':
        return {
          ref: 'stunstrike',
          name: "Chakra Thrust"
        };
        break;

      default:
        return false;
        break;
    }
  }

  return {
    getSkillIcon: getSkillIcon,
    getDebuffIcon: getDebuffIcon,
    getBuffIcon: getBuffIcon,
    getGlyphIcon: getGlyphIcon,
    getItemIcon: getItemIcon
  };

});
