Template.registerHelper('user', function() {
  return Meteor.userId()
})

Template.registerHelper(
  'logout', function () {
    console.log("this works");
    return Meteor.logout(function(err){
      if(err){
        throw new Meteor.Error("Logout failed");
      }
      router.go('home');
    });
  });

