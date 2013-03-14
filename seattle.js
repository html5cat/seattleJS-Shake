Directory = new Meteor.Collection("thumbnails");

var userEmail = function (user) {
  // if (user.profile && user.profile.name)
  //   return user.profile.name;
  return user.emails[0].address;
};
