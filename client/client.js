Meteor.subscribe("thumbnails");

Template.seattleJS.thumbnails = function () {
  return Meteor.users.find().fetch();
};

Template.seattleJS.avatarURL = function () {
  return 'http://www.gravatar.com/avatar/' +
  MD5(userEmail(this)) + '?s=160';
};

Template.seattleJS.userCount = function () {
  return Meteor.users.find().count();
};

