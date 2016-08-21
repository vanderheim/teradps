PartyRankings = new Mongo.Collection("party");
PersonalRankings = new Mongo.Collection("personal");
PremiumPersonalRankings = new Mongo.Collection("modPremium");
PremiumUsers = new Mongo.Collection("premium");
PremiumPending = new Mongo.Collection("pending");

PartyRankings.allow({
  insert: function(userId) {
    return userId;
  },
  update: function(userId, ranking, fields, modifier) {
    return userId && ranking.owner === userId;
  },
  remove: function(userId, ranking) {
    return userId;
  }
});

PremiumUsers.allow({
  insert: function(userId) {
    return userId;
  },
  update: function(userId) {
    return userId;
  }
});

PersonalRankings.allow({
  insert: function(userId) {
    return userId;
  },
  update: function(userId, ranking, fields, modifier) {
    return userId;
  },
  remove: function(userId, ranking) {
    return userId;
  }
});

PremiumPersonalRankings.allow({
  insert: function(userId) {
    return userId;
  },
  update: function(userId, ranking, fields, modifier) {
    return userId;
  },
  remove: function(userId, ranking) {
    return userId;
  }
});

PremiumPending.allow({
  insert: function(userId) {
    return userId;
  },
  update: function(userId) {
    return userId;
  },
  remove: function(userId) {
    return userId;
  }
});
