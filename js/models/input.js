var app = app || {};

(function() {
  'use strict';

  // Input Model
  // -----------

  // The input model is backed by *localStorage* instead of a remote
  // server.

  var Input = Backbone.Model.extend({
    localStorage: new Store('Input'),

    defaults: {
      priority: false
    },

    // add priority to input
    prioritize: function() {
      this.save({
        priority: !this.get('priority')
      });
    }
  });

  app.input = new Input();

})();