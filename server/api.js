if (Meteor.isServer) {

  var checkServer = function(teraServer) {
    var input = teraServer;
    switch (input) {
      case 'Mount Tyrannas':
      case 'Valley of Titans':
      case 'Lake of Tears':
      case 'Tempest Reach':
      case 'Celestial Hills':
      case 'Ascension Valley':
      case 'Highwatch':
        return true;
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
        return true;
        break;
      case 'Арун':
      case 'Кайатор':
      case 'Арборея':
      case 'Лоркада':
      case 'Балдера':
      case 'Эссения':
      case 'Вестония':
        return true;
        break;
      case '벨릭의 은총':
      case '세렌의 용기':
      case '아룬의 영광':
      case '발더의 지혜':
      case '프레이아의 수호':
        return true;
        break;
      case 'ユリアン':
      case 'エリーヌ':
        return true;
        break;
      case '提雅拉尼亞':
        return true;
        break;
      default:
        return false;
        break;
    }
  }

  var getRegion = function(teraServer) {
    var input = teraServer;
    switch (input) {
      case 'Mount Tyrannas':
      case 'Valley of Titans':
      case 'Lake of Tears':
      case 'Tempest Reach':
      case 'Celestial Hills':
      case 'Ascension Valley':
      case 'Highwatch':
        return "NA";
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
        return "EU";
        break;
      case 'Арун':
      case 'Кайатор':
      case 'Арборея':
      case 'Лоркада':
      case 'Балдера':
      case 'Вестония':
      case 'Эссения':
        return "RU";
        break;
      case '벨릭의 은총':
      case '세렌의 용기':
      case '아룬의 영광':
      case '발더의 지혜':
      case '프레이아의 수호':
        return "KR";
        break;
      case 'ユリアン':
      case 'エリーヌ':
      case 'ビギナー':
        return "JP";
        break;
      case '提雅拉尼亞':
        return "TW";
        break;
      default:
        return false;
        break;
    }
  }

  var checkEuConsumables = function(input) {
    switch (true) {

      case input < 47:
        // case input === 7777015:
        // case input === 16300013:
        // case input === 4833:
      case input === 14400001:
      case input === 14400002:
      case input === 14400003:
      case input === 830012:
        return false;
        break;
      default:
        return true;
        break;
    }
  };

  var checkBossAndThreshold = function(boss, threshold) {
    switch (true) {

      // FIHM
      // case boss === '759.1001' && threshold > 2000000:
      //   return true;
      //   break;
      // case boss === '759.1002' && threshold > 2000000:
      //   return true;
      //   break;
      // case boss === '759.1003' && threshold > 2000000:
      //   return true;
      //   break;

      // DS + Kelsaik
      case boss === '886.88518' && threshold > 1:
        return true;
        break;
      case boss === '886.88517' && threshold > 1:
        return true;
        break;
      case boss === '886.88516' && threshold > 1:
        return true;
        break;
      case boss === '886.88519' && threshold > 1:
        return true;
        break;
      case boss === '886.88601' && threshold > 1:
        return true;
        break;
      case boss === '886.88602' && threshold > 1:
        return true;
        break;
      case boss === '886.885200' && threshold > 1:
        return true;
        break;

        // Sanguine Normal
      case boss === '768.1000' && threshold > 1:
        return true;
        break;
      case boss === '768.2000' && threshold > 1:
        return true;
        break;
      case boss === '768.3000' && threshold > 1:
        return true;
        break;

        // Sanguine Hard
      case boss === '468.1000' && threshold > 1:
        return true;
        break;
      case boss === '468.2000' && threshold > 1:
        return true;
        break;
      case boss === '468.3000':
        return true;
        break;

        // Laboratory Hard
      case boss === '467.46701' && threshold > 1:
        return true;
        break;
      case boss === '467.46703' && threshold > 1:
        return true;
        break;
      case boss === '467.46704' && threshold > 1:
        return true;
        break;

        // Laboratory Normal
      case boss === '767.46704' && threshold > 1:
        return true;
        break;

        // Manglemire
      case boss === '470.1000' && threshold > 1:
        return true;
        break;

        // Lilith Normal
      case boss === '769.76901' && threshold > 1:
        return true;
        break;
      case boss === '769.76902' && threshold > 1:
        return true;
        break;
      case boss === '769.76903' && threshold > 1:
        return true;
        break;

        // Lilith Hard
      case boss === '969.76901' && threshold > 1:
        return true;
        break;
      case boss === '969.76902' && threshold > 1:
        return true;
        break;
      case boss === '969.76903' && threshold > 1:
        return true;
        break;

        // Rakelith Normal
      case boss === '770.1000' && threshold > 1:
        return true;
        break;
      case boss === '770.2000' && threshold > 1:
        return true;
        break;
      case boss === '770.3000' && threshold > 1:
        return true;
        break;

        // Rakelith Hard
      case boss === '970.1000' && threshold > 1:
        return true;
        break;
      case boss === '970.2000' && threshold > 1:
        return true;
        break;
      case boss === '970.3000' && threshold > 1:
        return true;
        break;

        // Sky Cruiser Hard
      case boss === '916.1000' && threshold > 1:
        return true;
        break;
      case boss === '916.91606' && threshold > 1:
        return true;
        break;
      case boss === '916.91650' && threshold > 1:
        return true;
        break;

      default:
        return false;
        break;
    }
  };

  var compareBossHealth = function(boss, total) {
    switch (true) {

      // DS + Kelsaik
      case boss === '886.88518' && total > 800000000:
        return true;
        break;
        // case boss === '886.88517' && total > 800000000:
        //   return true;
        //   break;
      case boss === '886.88516' && total > 1000000000:
        return true;
        break;
      case boss === '886.88519' && total > 1200000000:
        return true;
        break;
      case boss === '886.88601' && total > 1700000000:
        return true;
        break;
      case boss === '886.88602' && total > 1800000000:
        return true;
        break;
      case boss === '886.885200' && total > 1900000000:
        return true;
        break;

        // Sanguine Normal
      case boss === '768.1000' && total > 400000000:
        return true;
        break;
      case boss === '768.3000' && total > 400000000:
        return true;
        break;

        // Sanguine Hard
      case boss === '468.1000' && total > 800000000:
        return true;
        break;
      case boss === '468.3000' && total > 800000000:
        return true;
        break;

        // Laboratory Hard
      case boss === '467.46701' && total > 509000000:
        return true;
        break;
      case boss === '467.46703' && total > 700000000:
        return true;
        break;
      case boss === '467.46704' && total > 700000000:
        return true;
        break;

        // Laboratory Normal
      case boss === '767.46704' && total > 500000000:
        return true;
        break;

        // Manglemire
      case boss === '470.1000' && total > 1071815251:
        return true;
        break;

        // Lilith Normal
      case boss === '769.76901' && total > 700000000:
        return true;
        break;
      case boss === '769.76902' && total > 700000000:
        return true;
        break;
      case boss === '769.76903' && total > 700000000:
        return true;
        break;

        // Lilith Hard
      case boss === '969.76901' && total > 700000000:
        return true;
        break;
      case boss === '969.76902' && total > 700000000:
        return true;
        break;
      case boss === '969.76903' && total > 700000000:
        return true;
        break;

        // Rakelith Normal
      case boss === '770.1000' && total > 700000000:
        return true;
        break;
      case boss === '770.2000' && total > 700000000:
        return true;
        break;
      case boss === '770.3000' && total > 700000000:
        return true;
        break;

        // Rakelith Hard
      case boss === '970.1000' && total > 700000000:
        return true;
        break;
      case boss === '970.2000' && total > 700000000:
        return true;
        break;
      case boss === '970.3000' && total > 700000000:
        return true;
        break;

        // Sky Cruiser Hard
      case boss === '916.1000' && total > 700000000:
        return true;
        break;
      case boss === '916.91606' && total > 700000000:
        return true;
        break;
      case boss === '916.91650' && total > 700000000:
        return true;
        break;

      default:
        return false;
        break;
    }
  };

  // Global API configuration
  var Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true
  });

  Api.addRoute('que', {
    authRequired: true
  }, {
    post: function() {

        // Format Boss Id
        this.bodyParams.bossId = this.bodyParams.areaId + '.' + this.bodyParams.bossId;
        this.bodyParams.partyDps = parseInt(this.bodyParams.partyDps);

        if (checkBossAndThreshold(this.bodyParams.bossId, this.bodyParams.partyDps) === true) {

          // Bandaid Fix for 18+ party upload bug.
          if (this.bodyParams.members.length > 7) {
            return {
              status: "failed",
              message: "Sorry, you have more than a full party in your encounter."
            };
          }

          // Set up Arrays for query searching.
          var totalPartyDamage = 0;
          var playerArray = [];
          this.bodyParams.playerNames = '';

          var healerArray = [];
          var classArray = [];

          this.bodyParams.partyComp = '';
          this.bodyParams.commonServer = this.bodyParams.members[0].playerServer;
          this.bodyParams.trueCreatedOn = moment().format('MMMM Do YYYY, h:mm a');

          for (var i = 0; i < this.bodyParams.members.length; i++) {

            var premiumCheck = PremiumUsers.findOne({
              name: this.bodyParams.members[i].playerName,
              server: this.bodyParams.members[i].playerServer
            });

            if (premiumCheck !== undefined) {
              this.bodyParams.premium = true;
              this.bodyParams.members[i].premium = true;
            }

            totalPartyDamage += parseInt(this.bodyParams.members[i].playerTotalDamage);

            // Set up Heal Search
            if (this.bodyParams.members[i].playerClass === "Priest") {
              if (healerArray.includes("P") === false) {
                healerArray.push("P");
              } else {
                continue;
              }
            }

            if (this.bodyParams.members[i].playerClass === "Mystic") {
              if (healerArray.includes("M") === false) {
                healerArray.push("M");
              } else {
                continue;
              }
            }

            // KR JP Anonymous
            if (getRegion(this.bodyParams.members[i].playerServer) === "KR") {
              this.bodyParams.members[i].playerName = "익명 #" + Math.floor((Math.random() * 9999) + 100);
            }

            if (getRegion(this.bodyParams.members[i].playerServer) === "JP") {
              this.bodyParams.members[i].playerName = "名無し #" + Math.floor((Math.random() * 9999) + 100);
            }

            if (checkServer(this.bodyParams.members[i].playerServer) === false) {
              return {
                status: "failed",
                message: "Sorry, it seems your server isn't supported."
              };
            }

            this.bodyParams.partyComp += this.bodyParams.members[i].playerClass;
            classArray.push(this.bodyParams.members[i].playerClass);
            playerArray.push(this.bodyParams.members[i].playerName);
          }

          if (compareBossHealth(this.bodyParams.bossId, totalPartyDamage) === false) {
            return {
              status: "failed",
              message: "Total party damage must be within 10% range of boss' total health."
            };
          }

          var sorted = playerArray.sort();
          this.bodyParams.playerNames = sorted.join();

          var sortedHeal = healerArray.sort();
          this.bodyParams.heal = sortedHeal.join('');

          this.bodyParams.players = playerArray;
          this.bodyParams.classes = classArray;
          this.bodyParams.date = new Date();

          var record = this.bodyParams;
          record.owner = this.request.headers['x-user-id'];
          record.partyDps = parseInt(record.partyDps);
          record.region = getRegion(this.bodyParams.members[0].playerServer);

          for (var k = 0; k < record.members.length; k++) {
            var tallySkillDamage = 0;

            if (parseInt(record.members[k].playerTotalDamage) < 30000000 && parseInt(record.members[k].playerDps) > 1000000) {
              return {
                status: "failed",
                message: "It looks like a member of your party was trying to cheese their DPS, your encounter has been rejected."
              };
            }

            for (var j = 0; j < record.members[k].skillLog.length; j++) {
              // tallySkillDamage += parseInt(record.members[k].skillLog[j].skillTotalDamage);
              record.members[k].skillLog[j].skillTotalDamage = parseInt(record.members[k].skillLog[j].skillTotalDamage);
            }

            for (var l = 0; l < record.members[k].buffUptime.length; l++) {
              if (checkEuConsumables(parseInt(record.members[k].buffUptime[l].Key)) === false) {
                return {
                  status: "failed",
                  message: "Illegal consumables/buffs detected in your encounter."
                }
              }
            }

            // if (tallySkillDamage !== parseInt(record.members[k].playerTotalDamage)) {
            //   return {
            //     status: "failed",
            //     message: "It looks like one of your member's skill damage doesn't match up with their total damage."
            //   }
            // }

            record.members[k].playerDps = parseInt(record.members[k].playerDps);
          }

          var partyId = PartyRankings.insert(record);

          // Insert Personal Records
          for (var z = 0; z < this.bodyParams.members.length; z++) {

            // Top 5
            var bestFreebie = PersonalRankings.find({
              region: record.region,
              bossId: this.bodyParams.bossId,
              mainClass: this.bodyParams.members[z].playerClass,
              freebie: true
            }).fetch().sort(function(a, b) {
              return a.mainDps - b.mainDps;
            });

            // Check for duplicates of challenger.
            var dupe = {};

            for (var a = 0; a < bestFreebie.length; a++) {
              // Player is already in the rankings. Save their position.
              if (bestFreebie[a].mainPlayer === this.bodyParams.members[z].playerName) {
                dupe.oldIndex = a;
              }
            }

            var premiumCheck = PremiumUsers.findOne({
              name: this.bodyParams.members[z].playerName,
              server: this.bodyParams.members[z].playerServer
            });

            var solo = {
              mainPlayer: this.bodyParams.members[z].playerName,
              mainClass: this.bodyParams.members[z].playerClass,
              mainDps: parseInt(this.bodyParams.members[z].playerDps),
              mainServer: this.bodyParams.members[z].playerServer,
              region: getRegion(this.bodyParams.members[z].playerServer),
              bossId: this.bodyParams.bossId,
              date: new Date(),
              trueCreatedOn: this.bodyParams.trueCreatedOn,
              encId: partyId,
              heal: this.bodyParams.heal,
              freebie: false
            };

            // Tank / DPS check
            if (this.bodyParams.members[z].playerClass === "Brawler" || this.bodyParams.members[z].playerClass === "Lancer" || this.bodyParams.members[z].playerClass === "Warrior" || this.bodyParams.members[z].playerClass === "Berserker") {
              if (this.bodyParams.members[z].aggro && parseInt(this.bodyParams.members[z].aggro) >= 30) {
                solo.dpsStance = "T";
              } else {
                solo.dpsStance = "D";
              }
            }

            // Priest + Mystic only Stats
            if (this.bodyParams.members[z].playerClass === "Mystic") {
              for (var q = 0; q < this.bodyParams.debuffUptime.length; q++) {
                if (this.bodyParams.debuffUptime[q].Key == 27160) {
                  solo.voc = this.bodyParams.debuffUptime[q].Value;
                }
              }
            }

            if (this.bodyParams.members[z].playerClass === "Priest") {
              solo.mainPriestDps = this.bodyParams.partyDps;

              for (var x = 0; x < this.bodyParams.debuffUptime.length; x++) {
                if (this.bodyParams.debuffUptime[x].Key == 28090) {
                  solo.tn = this.bodyParams.debuffUptime[x].Value;
                }
              }

              for (var p = 0; p < this.bodyParams.members[z].buffUptime.length; p++) {
                if (this.bodyParams.members[z].buffUptime[p].Key == 801503) {
                  solo.es = this.bodyParams.members[z].buffUptime[p].Value;
                }
              }
            }

            // Slaying Check
            for (var s = 0; s < this.bodyParams.members[z].buffUptime.length; s++) {
              if (this.bodyParams.members[z].buffUptime[s].Key == 8888889 && this.bodyParams.members[z].buffUptime[s].Value > 20) {
                solo.slaying = "Y";
              } else {
                solo.slaying = "N";
              }
            }

            // Premium User, switch straight to premium block
            if (premiumCheck !== undefined) {
              var bestPremium = PersonalRankings.find({
                region: record.region,
                bossId: this.bodyParams.bossId,
                mainPlayer: this.bodyParams.members[z].playerName,
                premium: true
              }).fetch().sort(function(a, b) {
                return a.mainDps - b.mainDps;
              });

              var bestPremiumDps = bestPremium[bestPremium.length - 1].mainDps;

              solo.premium = true;

              // Clean out all personals of premiums as per updated premium system.
              if (this.bodyParams.members[z].playerDps > bestPremiumDps) {
                PersonalRankings.update({
                  _id: bestPremium[bestPremium.length - 1]._id
                }, solo);
              }

              if (bestPremium.length > 1) {
                PersonalRankings.remove({
                  region: record.region,
                  mainPlayer: this.bodyParams.members[z].playerName,
                  bossId: this.bodyParams.bossId,
                  premium: true,
                  mainDps: {
                    $lt: bestPremiumDps
                  }
                });
              }

              PremiumPersonalRankings.insert(solo);

              continue;
            }

            // Need to add freebie ranks if rankings aren't full already.
            if (bestFreebie.length < 5 && premiumCheck === undefined) {

              if (dupe.oldIndex !== undefined) {
                // Old dupe rank beaten, and its not the same one, delete old and update.
                if (parseInt(this.bodyParams.members[z].playerDps) > bestFreebie[dupe.oldIndex].mainDps) {
                  solo.premium = false;
                  solo.freebie = true;

                  PersonalRankings.update({
                    _id: bestFreebie[dupe.oldIndex]._id
                  }, solo);

                  PartyRankings.update({
                    _id: partyId
                  }, {
                    $unset: {
                      expire: ""
                    }
                  });

                  continue;
                } else {
                  defeated = true;
                  solo.premium = false;
                  solo.expire = new Date();

                  PersonalRankings.insert(solo, function(err, data) {
                    if (err) {
                      console.log('ERROR', err);
                    } else {
                      return true;
                    }
                  });

                  continue;
                }
              } else {
                solo.premium = false;
                solo.freebie = true;

                PersonalRankings.insert(solo, function(err, data) {
                  if (err) {
                    console.log('ERROR', err);
                  } else {
                    return true;
                  }
                });

                continue;
              }
            }

            // Freebie rankings are full, user not premium, and they are already better than last place in ranking, check if they can beat anyone higher in the rankings.
            if (bestFreebie !== undefined && bestFreebie.length === 5 && premiumCheck === undefined && parseInt(this.bodyParams.members[z].playerDps) > bestFreebie[0].mainDps) {
              var defeated = false;

              for (var l = 0; l < bestFreebie.length; l++) {

                // Top rank beaten. Get ready to update it and kick out the defeated.
                if (parseInt(this.bodyParams.members[z].playerDps) > bestFreebie[l].mainDps && defeated === false) {

                  // No dupes allowed, check if he beat his own ranking &, if not, delete old ranking.
                  if (dupe.oldIndex !== undefined) {
                    // Old dupe rank beaten, and its not the same one, delete old and update.
                    if (parseInt(this.bodyParams.members[z].playerDps) > bestFreebie[dupe.oldIndex].mainDps) {
                      defeated = true;
                      solo.premium = false;
                      solo.freebie = true;

                      PersonalRankings.update({
                        _id: bestFreebie[dupe.oldIndex]._id
                      }, solo);

                      PartyRankings.update({
                        _id: partyId
                      }, {
                        $unset: {
                          expire: ""
                        }
                      });

                      continue;
                    } else {
                      defeated = true;
                      solo.premium = false;
                      solo.expire = new Date();

                      PersonalRankings.insert(solo, function(err, data) {
                        if (err) {
                          console.log('ERROR', err);
                        } else {
                          return true;
                        }
                      });

                      continue;
                    }
                  }

                  defeated = true;
                  solo.premium = false;
                  solo.freebie = true;

                  PersonalRankings.update({
                    _id: bestFreebie[l]._id
                  }, solo);

                  PartyRankings.update({
                    _id: partyId
                  }, {
                    $unset: {
                      expire: ""
                    }
                  });
                }

              }

            } else {

              var personalBest = PersonalRankings.findOne({
                mainServer: this.bodyParams.members[z].playerServer,
                bossId: this.bodyParams.bossId,
                mainPlayer: this.bodyParams.members[z].playerName
              });

              // Player submitted score before, if they beat their previous personal record, replace it. Otherwise, don't add new record.
              if (personalBest !== undefined) {
                if (this.bodyParams.members[z].playerDps > personalbest.mainDps) {
                  PersonalRankings.update({
                    _id: personalBest._id
                  }, solo);
                  continue;
                }
              }

              PersonalRankings.insert(solo);
              continue;
            }
          }

          return {
            status: "success",
            message: "Successfully added!",
            id: partyId
          };
        } else {
          return {
            status: "failed",
            message: "Sorry, either the boss you fought was not supported or your party's DPS was too low."
          };
        }

      } // post function close
  }); // rest function close

  // Generates: GET, POST on /api/items and GET, PUT, DELETE on
  // /api/items/:id for the Items collection
  // Api.addCollection(PersonalRankings, {
  //   excludedEndpoints: ['delete']
  // });

  // Generates: POST on /api/users and GET, DELETE /api/users/:id for
  // Meteor.users collection
  Api.addCollection(Meteor.users, {
    excludedEndpoints: ['getAll', 'put'],
    routeOptions: {
      authRequired: true
    },
    endpoints: {
      post: {
        authRequired: false
      },
      delete: {
        roleRequired: 'admin'
      }
    }
  });
}
