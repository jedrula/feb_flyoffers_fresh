import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts');
  this.route('unverified');
  this.route('about');
  this.route('users', function() {});
  this.route('login');
  this.route('signup');
  this.route('new');
});

export default Router;
