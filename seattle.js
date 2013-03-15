Thumbnails = new Meteor.Collection("thumbnails");

var userEmail = function (user) {
  return user.emails[0].address;
};
