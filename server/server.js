Meteor.publish("thumbnails", function () {
  return Meteor.users.find({}, {fields: {emails: 1} });
});