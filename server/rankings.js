Meteor.publish("personal", function(options, searchClass, searchServer, searchBoss, searchPlayer, searchRegion, searchHeal, searchSlaying) {
  if (!searchClass || searchClass == null) {
    searchClass = '';
  }

  if (!searchServer || searchServer == null) {
    searchServer = '';
  }

  if (!searchBoss || searchBoss == null) {
    searchBoss = '';
  }

  if (!searchPlayer || searchPlayer == null) {
    searchPlayer = '';
  }

  if (!searchRegion || searchRegion == null) {
    searchRegion = '';
  }

  if (!searchSlaying || searchSlaying == null) {
    searchSlaying = '';
  }

  if (!searchHeal || searchHeal == null || searchHeal === '') {
    searchHeal = {
      '$regex': searchHeal || '' + '.*',
      '$options': 'i'
    };
  }

  let selectorA = {
    mainClass: {
      '$regex': '.*' + searchClass || '' + '.*',
      '$options': 'i'
    },
    mainServer: {
      '$regex': '.*' + searchServer || '' + '.*',
      '$options': 'i'
    },
    bossId: {
      '$regex': searchBoss || '' + '.*',
      '$options': 'i'
    },
    mainPlayer: {
      '$regex': '.*' + searchPlayer || '' + '.*',
      '$options': 'i'
    },
    region: {
      '$regex': '.*' + searchRegion || '' + '.*',
      '$options': 'i'
    },
    heal: searchHeal,
    slaying: {
      '$regex': '.*' + searchSlaying || '' + '.*',
      '$options': 'i'
    }
  };

  Counts.publish(this, 'numberOfPersonalRankings', PersonalRankings.find(selectorA), {
    noReady: true
  });
  return PersonalRankings.find(selectorA, options);
});

Meteor.publish("personalPremium", function(options, searchClass, searchServer, searchBoss, searchPlayer, searchRegion, searchHeal, searchSlaying) {
  if (!searchClass || searchClass == null) {
    searchClass = '';
  }

  if (!searchServer || searchServer == null) {
    searchServer = '';
  }

  if (!searchBoss || searchBoss == null) {
    searchBoss = '';
  }

  if (!searchPlayer || searchPlayer == null) {
    searchPlayer = '';
  }

  if (!searchRegion || searchRegion == null) {
    searchRegion = '';
  }

  if (!searchSlaying || searchSlaying == null) {
    searchSlaying = '';
  }

  if (!searchHeal || searchHeal == null || searchHeal === '') {
    searchHeal = {
      '$regex': searchHeal || '' + '.*',
      '$options': 'i'
    };
  }

  let selectorA = {
    mainClass: {
      '$regex': '.*' + searchClass || '' + '.*',
      '$options': 'i'
    },
    mainServer: {
      '$regex': '.*' + searchServer || '' + '.*',
      '$options': 'i'
    },
    bossId: {
      '$regex': searchBoss || '' + '.*',
      '$options': 'i'
    },
    mainPlayer: {
      '$regex': '.*' + searchPlayer || '' + '.*',
      '$options': 'i'
    },
    region: {
      '$regex': '.*' + searchRegion || '' + '.*',
      '$options': 'i'
    },
    heal: searchHeal,
    slaying: {
      '$regex': '.*' + searchSlaying || '' + '.*',
      '$options': 'i'
    }
  };

  Counts.publish(this, 'numberOfPremiumPersonalRankings', PremiumPersonalRankings.find(selectorA), {
    noReady: true
  });
  return PremiumPersonalRankings.find(selectorA, options);
});

Meteor.publish("party", function(options, searchClass, searchRegion, searchBoss, searchPlayer, searchHeal, searchServer) {
  if (!searchClass || searchClass == null) {
    searchClass = '';
  }

  if (!searchBoss || searchBoss == null) {
    searchBoss = '';
  }

  if (!searchRegion || searchRegion == null) {
    searchRegion = '';
  }

  if (!searchPlayer || searchPlayer == null) {
    searchPlayer = '';
  }

  if (!searchServer || searchServer == null) {
    searchServer = '';
  }

  if (!searchHeal || searchHeal == null || searchHeal === '') {
    searchHeal = {
      '$regex': searchHeal || '' + '.*',
      '$options': 'i'
    };
  }

  let selector = {
    partyComp: {
      '$regex': '.*' + searchClass || '' + '.*',
      '$options': 'i'
    },
    bossId: {
      '$regex': searchBoss || '' + '.*',
      '$options': 'i'
    },
    playerNames: {
      '$regex': '.*' + searchPlayer || '' + '.*',
      '$options': 'i'
    },
    region: {
      '$regex': '.*' + searchRegion || '' + '.*',
      '$options': 'i'
    },
    heal: searchHeal,
    commonServer: {
      '$regex': '.*' + searchServer || '' + '.*',
      '$options': 'i'
    },
  };

  Counts.publish(this, 'numberOfPartyRankings', PartyRankings.find(selector), {
    noReady: true
  });

  return PartyRankings.find(selector, options);
});

Meteor.publish("partyOne", function(options, searchId) {
  if (!searchId || searchId == null) {
    searchId = null;
  }

  let selector = {
    _id: {
      '$regex': searchId || '' + '.*',
      '$options': 'i'
    }
  };

  return PartyRankings.find(selector, options);
});

Meteor.publish("playerOne", function(options, searchId, serverId) {
  if (!searchId || searchId == null) {
    searchId = null;
  }

  if (!serverId || serverId == null) {
    serverId = null;
  }

  let selector = {
    mainPlayer: {
      '$regex': searchId || '' + '.*',
      '$options': 'i'
    },
    mainServer: {
      '$regex': serverId || '' + '.*',
      '$options': 'i'
    }
  };

  return PersonalRankings.find(selector, options);
});

Meteor.publish("characterLookUp", function(options, userId) {
  if (!userId || userId == null) {
    userId = null;
  }

  let selector = {
    id: {
      '$regex': userId || '' + '.*',
      '$options': 'i'
    }
  };

  return PremiumUsers.find(selector, options);
});

Meteor.publish("recentPremium", function(options, searchId, serverId) {
  if (!searchId || searchId == null) {
    searchId = null;
  }

  if (!serverId || serverId == null) {
    serverId = null;
  }

  let selector = {
    playerNames: {
      '$regex': searchId || '' + '.*',
      '$options': 'i'
    },
    commonServer: {
      '$regex': serverId || '' + '.*',
      '$options': 'i'
    }
  };

  return PartyRankings.find(selector, options);
});

Meteor.publish("recent", function() {
  return PartyRankings.find({}, {
    sort: {
      date: -1
    },
    limit: 20
  });
});

Meteor.publish("premium", function() {
  return PremiumUsers.find({});
});

Meteor.publish("pending", function() {
  return PremiumPending.find({});
});
