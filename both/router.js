/*
router style, initial configuration template
layoutTemplate will map to a layout template
notFoundTemplate will use a template named 404 or a name of your choice if you chose to change it
loadingTemplate will use a template with loading or a template

*/
Router.configure({
  layoutTemplate: 'masterLayout',
  notFoundTemplate: '404',
  loadingTemplate: 'loading'
});

// ============================================== routes ========================================================================

//  route one basic
Router.route ('/', function(){
  this.render('home');
  name: 'home'
});

Router.map( function () {
  this.route('artist', {
    path: '/artist',
    name: 'artist'
  })
});

Router.map( function () {
  this.route('gallery', {
    path: '/gallery',
    name: 'gallery'
  })
});




// // with params sent from the browser
// Router.route('/users/:_id', function(){
//   this.render('user');
//   name: 'userDetails'
//   },{
//     data: function() {
//      var id = this.params._id;
//      return {
//        user: Users.findOne(id);
//      }
//   }
// });

// // for different loading template and on wait

// Router.map( function () {
//   this.route('user', {
//     path: '/users/details/:_id',
//     name: 'userDetail',
//     layoutTemplate: 'userLayout',

//     waitOn: function(){
//       var pass = this.params._id;
//       return [
//         Meteor.subscribe('users', pass)      ]
//     },

//     data: function() {
//       return {
//         info: Collections.find()
//       }
//     }
//   });
// });

//     