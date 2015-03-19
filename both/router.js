/*
router style, initial configuration template
layoutTemplate will map to a layout template
notFoundTemplate will use a template named 404 or a name of your choice if you chose to change it
loadingTemplate will use a template with loading or a template

*/
Router.configure({
  layoutTemplate: 'layout',
  trackPageView: true
  // notFoundTemplate: '404',
  // loadingTemplate: 'loading'
});

// ============================================== routes ========================================================================

//  route one basic
Router.route ('/', {
  name: 'home'
});

Router.route('/artists', {
	name: 'artists'
});

Router.route('/gallery', {
	name: 'gallery'
});

Router.route('/contact', {
  name: 'contact'
});
