import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    createUser: function(model) {
      var _this = this;
      Ember.$.ajax({
        url: '/api/v1/users',
        type: 'POST',
        data: JSON.stringify({
          user: {
            password: model.get('password'),
            username: model.get('username')
          }
        }),
        contentType: 'application/json'
      }).then(function(/*response*/) {
        _this.transitionToRoute('login');

      }, function(xhr/*, status, error*/) {
        console.log(xhr.responseJSON);
        _this.set('errorResponse', xhr.responseJSON);
      });

    }

  }

});
