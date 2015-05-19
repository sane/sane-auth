import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('user', function() {});

  this.route("login");
  this.route("register");
});

export default Router;
