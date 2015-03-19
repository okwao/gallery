Template.registerHelper('user', function() {
  return Meteor.userId()
})

Template.registerHelper('logout', function(){
  return Meteor.logout()
})