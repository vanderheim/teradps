Meteor.startup(function() {

  process.env.MAIL_URL = "smtp://postmaster%40email.teradps.io:13ec0c047734a6c817ee6b84d0768341@smtp.mailgun.org:587";

  Meteor.setInterval(function () {
    PartyRankings.update({_id: 'NoSuch'}, {$unset: {nosuch: 1}});
  }, 30000);

  return Meteor.methods({

    editPremiumDesc: function(id, value) {

      PremiumUsers.update({ _id: id }, { $set: { desc: value }});

    },

    editPremiumPic: function(id, value) {

      PremiumUsers.update({ _id: id }, { $set: { picture: value }});

    },

    editPremiumTwitch: function(id, value) {

      PremiumUsers.update({ _id: id }, { $set: { twitch: value }});

    },

    editPremiumGearWeap: function(id, value) {

      PremiumUsers.update({ _id: id }, { $set: { weapon: value }});

    },

    editPremiumGearChest: function(id, value) {

      PremiumUsers.update({ _id: id }, { $set: { armor: value }});

    },

    editPremiumGearGlove: function(id, value) {

      PremiumUsers.update({ _id: id }, { $set: { glove: value }});

    },

    editPremiumGearBoot: function(id, value) {

      PremiumUsers.update({ _id: id }, { $set: { boot: value }});

    },

    editPremiumGearNecklace: function(id, neck) {

      PremiumUsers.update({ _id: id }, { $set: { neck: neck }});

    },

    editPremiumGearEarring1: function(id, ear1) {

      PremiumUsers.update({ _id: id }, { $set: { ear1: ear1 }});

    },

    editPremiumGearEarring2: function(id, ear2) {

      PremiumUsers.update({ _id: id }, { $set: { ear2: ear2 }});

    },

    editPremiumGearRing1: function(id, ring1) {

      PremiumUsers.update({ _id: id }, { $set: { ring1: ring1 }});

    },

    editPremiumGearRing2: function(id, ring2) {

      PremiumUsers.update({ _id: id }, { $set: { ring2: ring2 }});

    },

    editPremiumGearBelt: function(id, belt) {

      PremiumUsers.update({ _id: id }, { $set: { belt: belt }});

    },

    savePremium: function(user, id, server, transaction) {

      PremiumUsers.insert({ name: user, server: server, id: id, transaction: transaction });
      PersonalRankings.update({ mainPlayer: user, mainServer: server, freebie: false }, { $set: { premium: true }, $unset: { expire: "" }}, { multi: true });
      PartyRankings.update({ members: { $elemMatch: { playerName: user, playerServer: server }} }, { $set: { premium: true }, $unset: { expire: "" }}, { multi: true });

    },

    rejectPremium: function(id) {

      PremiumPending.remove({ _id: id });

    },

    applyPremium: function(user, id, server, transaction) {

      PremiumPending.insert({ name: user, server: server, id: id, transaction: transaction });

    },

    removeParty: function(party) {

      PersonalRankings.remove({
        encId: party._id
      });
      PartyRankings.remove({
        _id: party._id
      });

    },

    removeId: function(idNum) {

      PersonalRankings.remove({
        encId: idNum
      });
      PartyRankings.remove({
        _id: idNum
      });

    },

    removePuser: function(user) {

      PremiumUsers.remove({
        _id: user._id
      });

    }

  });

});
